import { WELCOME_MESSAGE } from "../../utils/constants.js";
import { chatCompletion } from "../../providers/groqapi.js";
import Conversation from "../../models/conversation.js";

const consultCommand = (bot) => {
  bot.on("messageCreate", async (msg) => {
    const isAuthorBot = msg.author.bot;
    const isMentioned = msg.mentions.has(bot.user);
    const messageContent = msg.content;
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

    // connect to LLM
    const question = messageContent.replace(
      `<@${process.env.DISCORD_APP_ID}>`,
      ""
    );
    const response = await chatCompletion(question);

    // Save the message to the database
    const chatMessage = new Conversation({
      user_id: userId,
      message: messageContent,
      response: response,
      provider: "discord",
    });

    try {
      await chatMessage.save();
      console.log("Chat message saved successfully");
    } catch (error) {
      console.error("Error saving chat message:", error);
    }

    try {
      msg.reply(response);
    } catch (error) {
      console.log("Error sending message:  ", error);
    }
  });
};

export default consultCommand;
