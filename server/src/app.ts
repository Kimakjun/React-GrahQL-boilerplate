import { ApolloServer } from 'apollo-server-express';
import express, { Express } from 'express';
import { createServer, Server } from 'http';
import schema from '@config/schema';

const GRAPHQL_ENDPOINT = '/graphql';

class App {
  public app: Express;

  public server: Server;

  private apolloServer: ApolloServer;

  constructor() {
    this.app = express();
    this.apolloServer = new ApolloServer({
      schema,
      context: (ctx) => ({ ...ctx }),
      playground: true,
    });
    this.server = createServer(this.app);
    this.middlewares();
  }

  private middlewares() {
    this.apolloServer.applyMiddleware({
      app: this.app,
      path: GRAPHQL_ENDPOINT,
    });
  }
}

export default new App();
