import mongoose from "mongoose";

const RECONNECT_INTERVAL = 5000;
const MAX_RECONNECT_ATTEMPTS = 10;

const connectDB = async (retries = MAX_RECONNECT_ATTEMPTS) => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error(`MongoDB connection error: ${error.message}`);
    if (retries > 0) {
      console.log(`Reconnecting in ${RECONNECT_INTERVAL / 1000} seconds...`);
      setTimeout(() => connectDB(retries - 1), RECONNECT_INTERVAL);
    } else {
      console.error("Maximum reconnection attempts reached. Exiting...");
    }
  }
};

export default connectDB;
