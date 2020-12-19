import { ApolloServer } from 'apollo-server-express';
import express, { Express } from 'express';
import { createServer, Server } from 'http';

class App {
  public app: Express;
  public server: Server;

  //private apolloServer: ApolloServer;

  constructor() {
    this.app = express();
    //this.apolloServer = new ApolloServer({});
    this.server = createServer(this.app);
  }
}

export default new App();
