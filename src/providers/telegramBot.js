import TelegramBot from "node-telegram-bot-api";

const TOKEN = process.env.TELEGRAM_TOKEN;
const initializeTelegramBot = () => {
  const tgBot = new TelegramBot(TOKEN, { polling: true });
  return tgBot;
};

export default initializeTelegramBot;
