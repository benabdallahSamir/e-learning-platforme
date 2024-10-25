import mongoose from "mongoose";

const teacherShcema = mongoose.Schema(
  {
    domain: {
      type: String,
      require: true,
    },
    notification: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);
const Teacher = mongoose.model("teacher", teacherShcema);
export default Teacher;
