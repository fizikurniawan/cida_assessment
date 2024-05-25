import { WELCOME_MESSAGE } from "../../utils/constants.js";
import { chatCompletion } from "../../providers/groqapi.js";
import Conversation from "../../models/conversation.js";
import { handleConversation } from "../../utils/conversation.js";

const consultCommand = (bot) => {
  const state = {};
  bot.on("messageCreate", async (msg) => {
    const isAuthorBot = msg.author.bot;
    const isMentioned = msg.mentions.has(bot.user);
    const messageContent = msg.content;
    const messageContentClear = messageContent.replace(
      `<@${process.env.DISCORD_APP_ID}>`,
      ""
    );
    const isContentEmpty =
      messageContent === `<@${process.env.DISCORD_APP_ID}>` ? true : false;
    const userId = msg.author.id;

    // reply when mentioned only
    if (!isMentioned) return;

    // reply only user
    if (isAuthorBot) return;

    // if content empty send message about bot
    if (isContentEmpty) {
      msg.reply(WELCOME_MESSAGE + " Silakan bertanya dengan mention saya!");
      return;
    }

    const { response: llmResponse, currentState: currentState } =
      await handleConversation(
        messageContentClear,
        userId,
        state[userId],
        "discord"
      );

    state[userId] = currentState;

    try {
      msg.reply(llmResponse);
    } catch (error) {
      console.log("Error sending message:  ", error);
    }
  });
};

export default consultCommand;
