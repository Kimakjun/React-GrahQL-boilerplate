import { Resolvers } from '@type/api';

const resolvers: Resolvers = {
  Query: {
    hello: () => {
      console.log('test');
      return { result: 'success' };
    },
  },
};

export default resolvers;
