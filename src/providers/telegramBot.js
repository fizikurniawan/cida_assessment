import TelegramBot from "node-telegram-bot-api";

const TOKEN = process.env.TELEGRAM_TOKEN;
const initializeTelegramBot = () => {
  return new TelegramBot(TOKEN, { polling: true });
};

export default initializeTelegramBot;
