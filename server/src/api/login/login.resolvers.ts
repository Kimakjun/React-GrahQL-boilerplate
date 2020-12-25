import { Resolvers } from '@type/api';

const Resolver: Resolvers = {
  Mutation: {
    signin: (_, { email, password }, { res, authenticate }) => {
      return { result: 'success' };
    },
  },
};

export default Resolver;
