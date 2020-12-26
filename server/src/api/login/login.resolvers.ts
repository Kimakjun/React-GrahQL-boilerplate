import { Resolvers } from '@type/api';
import jwt from 'jsonwebtoken';

const { JWT_HEADER, JWT_SECRET } = process.env;
const EXPIRED = 10 * 60 * 60 * 24;

const Resolver: Resolvers = {
  Mutation: {
    signin: async (_, { email, password }, { res, authenticate }) => {
      const { user, info } = await authenticate('local', { email, password });
      if (user) {
        const payload = { id: user.id };
        const accessToken = jwt.sign(payload, JWT_SECRET!, { expiresIn: '14d' });

        res.cookie(JWT_HEADER, accessToken, {
          httpOnly: true,
          maxAge: EXPIRED,
        });
        return { result: 'success' };
      }
      return { result: 'fail', error: info.message };
    },
  },
};

export default Resolver;
