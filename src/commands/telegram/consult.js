import Conversation from "../../models/conversation.js";
import { chatCompletion } from "../../providers/groqapi.js";

const consultCommand = (bot) => {
  bot.on("message", async (msg) => {
    if (msg.text.toString().toLowerCase().startsWith("/start")) {
      return;
    }

    const chatId = msg.chat.id;
    const userId = msg.from.id;

    // connect to LLM
    const response = await chatCompletion(msg.text);

    // Save the message to the database
    const chatMessage = new Conversation({
      user_id: userId,
      message: msg.text,
      response: response,
      provider: "telegram",
    });

    try {
      await chatMessage.save();
      console.log("Chat message saved successfully");
    } catch (error) {
      console.error("Error saving chat message:", error);
    }

    try {
      bot.sendMessage(chatId, response);
    } catch (error) {
      console.log("Error sending message:  ", error);
    }
  });
};

export default consultCommand;
