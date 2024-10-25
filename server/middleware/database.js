import mongoose from "mongoose";
export default async function connectDb (callbackfunc) {
  try {
    await mongoose.connect(process.env.MONGO_URL, callbackfunc);
  } catch (error) {
    console.log(error);
  }
}
