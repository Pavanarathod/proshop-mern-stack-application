import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const mongo = await mongoose.connect(process.env.MONGO__URL);

    console.log(`MonogoDB Connected ${mongo.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
