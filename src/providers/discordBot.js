import { Client, Events, GatewayIntentBits } from "discord.js";

const TOKEN = process.env.DISCORD_TOKEN;

const initializeDiscordBot = () => {
  // Create a new client instance
  const client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent,
    ],
  });

  client
    .once(Events.ClientReady, (readyClient) => {
      console.log(`Ready! Logged in as ${readyClient.user.tag}`);
    })
    .on("error", (err) => {
      console.error("Discord client error:", err);
    });

  client.login(TOKEN).catch((error) => {
    console.error("Failed to login to Discord:", error);
  });

  return client;
};

export default initializeDiscordBot;
