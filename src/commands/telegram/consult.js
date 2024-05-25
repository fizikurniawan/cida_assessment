import logger from "../../logger.js";
import Conversation from "../../models/conversation.js";
import { chatCompletion } from "../../providers/groqapi.js";
import { handleConversation } from "../../utils/conversation.js";

const consultCommand = (bot) => {
  // make chainlang with LLM
  const state = {};

  bot.on("message", async (msg) => {
    if (msg.text.toString().toLowerCase().startsWith("/start")) {
      return;
    }

    const chatId = msg.chat.id;
    const userId = msg.from.id;

    const { response: llmResponse, currentState: currentState } =
      await handleConversation(msg.text, userId, state[userId], "telegram");

    state[userId] = currentState;

    try {
      bot.sendMessage(chatId, llmResponse);
    } catch (error) {
      console.log("Error sending message:  ", error);
    }
  });
};

export default consultCommand;
