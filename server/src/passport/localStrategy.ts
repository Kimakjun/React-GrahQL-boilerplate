/* eslint-disable consistent-return */
import { GraphQLLocalStrategy } from 'graphql-passport';
import bcrypt from 'bcrypt';
import User from '@model/user';

type Authenticate = (
  email: string,
  password: string,
  done: (error: Error | null, user?: any, options?: { message?: string }) => void,
) => void;

const authenticate: Authenticate = async (email, password, done) => {
  try {
    const exUser = await User.findOne({ email });

    if (!exUser) {
      return done(null, false, { message: '가입되지 않은 회원입니다.' });
    }
    const isRightPassword = await bcrypt.compareSync(password, exUser.password);
    if (isRightPassword) {
      return done(null, exUser);
    }
    if (!isRightPassword) {
      return done(null, false, { message: '패스워드가 일치하지 않습니다.' });
    }
  } catch (error) {
    done(error);
  }
};

export default new GraphQLLocalStrategy(authenticate as any);
