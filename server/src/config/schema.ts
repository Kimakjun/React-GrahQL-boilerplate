import { makeExecutableSchema, mergeTypeDefs, mergeResolvers, loadFilesSync } from 'graphql-tools';
import path from 'path';

const allTypes = loadFilesSync(path.join(__dirname, '../api/**/*.grahql'));

const allResolvers = loadFilesSync(path.join(__dirname, '../api/**/*.resolvers.ts'));

const schema = makeExecutableSchema({
  typeDefs: mergeTypeDefs(allTypes),
  resolvers: mergeResolvers(allResolvers),
});

export default schema;
