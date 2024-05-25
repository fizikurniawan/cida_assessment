import Conversation from "../../models/conversation.js";
import { WELCOME_MESSAGE } from "../../utils/constants.js";

const startCommand = (bot) => {
  bot.onText(/\/start/, async (msg) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id;
    const messageText = WELCOME_MESSAGE;

    // Save the message to the database
    const chatMessage = new Conversation({
      user_id: userId,
      message: msg.text,
      response: messageText,
      provider: "telegram",
    });

    try {
      await chatMessage.save();
      console.log("Chat message saved successfully");
    } catch (error) {
      console.error("Error saving chat message:", error);
    }

    try {
      bot.sendMessage(chatId, messageText);
    } catch (error) {
      console.log("Error sending message:  ", error);
    }
  });
};

export default startCommand;
