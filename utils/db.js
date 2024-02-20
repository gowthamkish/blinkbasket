import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("Database connected succesfully");
  } catch (error) {
    throw new Error("Error in connect DB");
  }
};

export default connectDB;
