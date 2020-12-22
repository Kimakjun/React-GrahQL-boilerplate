import mongoose from 'mongoose';
import user from '@model/user';

import dotenv from 'dotenv';

dotenv.config();

const { MONGO_URI, DB_NAME } = process.env;

export default () => {
  const connect = () => {
    mongoose
      .connect(MONGO_URI!, {
        dbName: DB_NAME,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      })
      .then(() => {
        console.log('연결성공.');
      })
      .catch((err) => {
        console.error(err);
      });
  };
  connect();
  mongoose.connection.on('disconnected', connect);
};
