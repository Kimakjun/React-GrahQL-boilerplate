const resolvers = {
  Query: {
    hello: () => {
      return { result: 'success' };
    },
  },
};

export default resolvers;
