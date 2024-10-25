import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    userId: {
      unique: true,
      type: String,
      require: true,
    },
    text: {
      type: String,
      require: true,
    },
    comment: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);
const Post = mongoose.model("post", postSchema);
export default Post;
