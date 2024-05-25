import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const { Schema } = mongoose;

const conversationSchema = new Schema({
  conversation_id: {
    type: String,
    default: uuidv4,
    unique: true,
  },
  user_id: String,
  provider: String, // is a telegram or discord bot
  user_id: String,
  timestamp: { type: Date, default: Date.now },
  message: String,
  response: String,
});

const Conversation = mongoose.model("Conversation", conversationSchema);
export default Conversation;
