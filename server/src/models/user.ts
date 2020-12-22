import mongoose, { Schema, model } from 'mongoose';

interface IUser extends mongoose.Document {
  name: string;
  email: string;
}

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
});

export default model<IUser>('User', userSchema);
