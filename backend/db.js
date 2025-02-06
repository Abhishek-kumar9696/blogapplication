import mongoose from "mongoose";
const connectDB = () => {
  try {
    mongoose.connect(process.env.MONGODB);
    console.log("MongoDB connected");
  } catch {
    console.log("Error connecting to MongoDB");
  }
};

export default connectDB;
