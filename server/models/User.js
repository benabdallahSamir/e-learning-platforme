import mongoose from "mongoose";
const UserShcema = mongoose.Schema(
  {
    userId: {
      unique: true,
      type: String,
      require: true,
    },
    username: {
      unique: true,
      type: String,
      require: true,
    },
    email: {
      unique: true,
      type: String,
      require: true,
    },
    passowrd: {
      unique: true,
      type: String,
      require: true,
    },
    isteacher: {
      type: Boolean,
      default: false,
    },
    bio: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);
const User = mongoose.model("user", UserShcema);
export default User;
