import { Resolvers } from '@type/api';

const resolvers: Resolvers = {
  Mutation: {
    subCreate: (_, __, { pubsub }) => {
      pubsub.publish('subTest', { subTest: { result: 'test' } });
      return { result: 'test' };
    },
  },
};

export default resolvers;
