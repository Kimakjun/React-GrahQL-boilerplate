import { Resolvers } from '@type/api';

const resolvers: Resolvers = {
  Query: {
    hello: () => {
      return { result: 'success' };
    },
  },
};

export default resolvers;
