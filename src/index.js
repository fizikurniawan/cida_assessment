import connectDB from "./database.js";
import initializeTelegramBot from "./providers/telegramBot.js";
import initializeDiscordBot from "./providers/discordBot.js";
import logger from "./logger.js";

// importing commands
import startCommandTg from "./commands/telegram/start.js";
import consultCommandTg from "./commands/telegram/consult.js";
import consultCommandDiscrod from "./commands/discord/consult.js";

async function main() {
  try {
    await connectDB();
    logger.info("Database connected successfully");
  } catch (err) {
    logger.error("Error connecting to database: ", err);
  }

  // register and run tg bot
  try {
    const tgBot = initializeTelegramBot();
    startCommandTg(tgBot);
    consultCommandTg(tgBot);
    logger.info("Telegram Bot successfully running");
  } catch (err) {
    logger.error("Error initialized telegram bot: ", err);
  }

  // register and run discord bot
  try {
    const discordBot = initializeDiscordBot();
    consultCommandDiscrod(discordBot);

    logger.info("Telegram Bot successfully running");
  } catch (err) {
    logger.error("Error initialized telegram bot: ", err);
  }
}

main().catch((error) => {
  logger.error("Unhandled error in main function:", error);
});
