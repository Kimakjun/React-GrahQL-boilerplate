import { Resolvers } from '@type/api';

const resolvers: Resolvers = {
  Subscription: {
    subTest: {
      subscribe: (_, __, { pubsub }) => {
        console.log('test');
        return pubsub.asyncIterator('subTest');
      },
    },
  },
};

export default resolvers;
