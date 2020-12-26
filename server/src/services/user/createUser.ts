import User from '@model/user';
import bcrypt from 'bcrypt';
import { SignupResponse } from '@type/api';

interface CreateUserProps {
  name: string;
  email: string;
  password: string;
}

const saltRounds = 10;

const createUser = async ({ name, email, password }: CreateUserProps): Promise<SignupResponse> => {
  try {
    const exUser = await User.findOne({ email });

    if (exUser) {
      return { result: 'fail', error: '이미 존재하는 회원입니다.' };
    }

    const hashPassword = bcrypt.hashSync(password, saltRounds);

    await User.create({ name, email, password: hashPassword });

    return { result: 'success' };
  } catch (error) {
    return { result: 'fail', error: error.message };
  }
};

export default createUser;
