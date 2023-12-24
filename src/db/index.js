import mongoose, { connect } from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB connected !! DB HOST : ${connectionInstance.connection.host}`
    );
    // console.log(connectionInstance.connection);
  } catch (error) {
    console.log("ERROR:", error);
    process.exit(1);
  }
};

export default connectDB;
