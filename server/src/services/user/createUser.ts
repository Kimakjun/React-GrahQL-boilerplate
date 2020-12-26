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
    const hashPassword = bcrypt.hashSync(password, saltRounds);
    await User.create({ name, email, password: hashPassword });
    return { result: 'success' };
  } catch (error) {
    console.error(error);
    return { result: 'fail', error: error.message };
  }
};

export default createUser;
