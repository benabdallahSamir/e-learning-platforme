import mongoose from "mongoose";

const studientSchema = mongoose.Schema(
  {
    points: {
      type: Number,
      default: 0,
    },
    posts: {
      type: Array,
      default: [],
    },
    comments: {
      type: Array,
      default: [],
    },
    notifications: {
      type: Array,
      default: [],
    },
    tasks: {
        type: Array,
        default: [],
      },
  },
  { timestamps: true }
);
const Studient = mongoose.model("studient", studientSchema);
export default Studient;
