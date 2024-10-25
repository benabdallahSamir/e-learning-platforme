import mongoose from "mongoose";

const commentSchema = mongoose.Schema(
  {
    userId: {
      unique: true,
      type: String,
      require: true,
    },
    text: {
      type: String,
      default: "",
    },
    vote: {
      type: {
        up: {
          count: {
            type: Number,
            default: 0,
          },
          userId: {
            type: Array,
            default: [],
          },
        },
        down: {
          count: {
            type: Number,
            default: 0,
          },
          userId: {
            type: Array,
            default: [],
          },
        },
      },
    },
  },
  { timestamps: true }
);

const Comment = mongoose.model("comment", commentSchema);
export default Comment;
