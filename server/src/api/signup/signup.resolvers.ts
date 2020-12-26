import { Resolvers } from '@type/api';
import createUser from '@service/user/createUser';

const Resolver: Resolvers = {
  Mutation: {
    signup: async (_, { email, password, name }) => {
      const { result, error } = await createUser({ name, email, password });

      if (result === 'fail') return { result, error };

      return { result: 'success' };
    },
  },
};

export default Resolver;
