import mongoose from "mongoose";

const coursesShcema = mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      default: "",
    },
    teacherId: {
      type: String,
      require: true,
    },
    chapterNumber: {
      type: Number,
      min: 0,
      require: true,
    },
    chapters: {
      type: Array,
      default: [],
    },
  },
  { timestapms: true }
);
const Courses = mongoose.model("course", coursesShcema);
export default Courses;
