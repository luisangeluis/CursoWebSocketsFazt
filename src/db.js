import { connect } from "mongoose";
import { mongodbUri } from "./config";

export const connectDB = async () => {
  try {
    await connect(mongodbUri);
    console.log("MongoDB connected");
  } catch (error) {
    console.error(error);
  }
};
