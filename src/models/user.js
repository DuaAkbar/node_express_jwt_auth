import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    UserName: {
      type: String,
      required: true,
    },
    UserEmail: {
      type: String,
      required: true,
      unique: true,
    },
    UserPassword: {
      type: String,
      required: true,
    },
  },
  {
    timeStamp: true,
  }
);

export default mongoose.model("user" , UserSchema);