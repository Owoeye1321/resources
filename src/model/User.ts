import { Schema, Document, model } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

export interface IUser {
  name: string;
}
export default interface IUserModel extends Document, IUser {}
const user = new Schema({
  name: { type: String },
});
user.plugin(uniqueValidator);

export const User = model<IUserModel>("user", user);
