import mongoose from "mongoose";

export const connect = async () => {
  try {
    await mongoose.connect(import.meta.env.VITE_MONGO_URI);
  } catch (error) {
    console.log(error);
  }
};
