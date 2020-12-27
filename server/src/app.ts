import { ApolloServer, PubSub } from 'apollo-server-express';
import express, { Express } from 'express';
import { createServer, Server } from 'http';
import schema from '@config/schema';
import { CorsOptions } from 'cors';
import helmet from 'helmet';
import hpp from 'hpp';
import compression from 'compression';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import { buildContext } from 'graphql-passport';
import passportInit from '@passport/.';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import Redis, { RedisOptions } from 'ioredis';

const GRAPHQL_ENDPOINT = '/graphql';

const prod = process.env.NODE_ENV === 'production';

const { REDIS_PASSWORD, REDIS_HOST, REDIS_PORT } = process.env;

const options: RedisOptions = {
  host: REDIS_HOST,
  port: (REDIS_PORT as unknown) as number,
  password: REDIS_PASSWORD,
  retryStrategy: (times: any) => {
    // reconnect after
    return Math.min(times * 50, 2000);
  },
};

class App {
  public app: Express;

  public server: Server;

  private apolloServer: ApolloServer;

  private pubsub: RedisPubSub;

  constructor() {
    this.pubsub = new RedisPubSub({
      publisher: new Redis(options),
      subscriber: new Redis(options),
    });
    this.app = express();
    this.apolloServer = new ApolloServer({
      schema,
      context: (ctx) => buildContext({ ...ctx, pubsub: this.pubsub }),
      playground: true,
    });
    this.server = createServer(this.app);
    this.middlewares();
  }

  private middlewares() {
    const corsOptions: CorsOptions = {
      credentials: true,
      origin: 'http://localhost:3000',
    };

    if (prod) {
      this.app.use(helmet());
      this.app.use(hpp());
      this.app.use(morgan('combined'));
    } else {
      this.app.use(morgan('dev'));
      this.app.use(express.json());
    }
    passportInit();
    this.app.use(cookieParser());
    this.app.use(compression());
    this.apolloServer.applyMiddleware({
      app: this.app,
      path: GRAPHQL_ENDPOINT,
      cors: corsOptions,
    });
    this.apolloServer.installSubscriptionHandlers(this.server);
  }
}

export default new App();
