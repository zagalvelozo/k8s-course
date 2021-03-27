import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
    email: string;
    username: string;
  }

const UserSchema: Schema = new Schema({
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    }
});

export default mongoose.model<IUser>('UserModel', UserSchema);
