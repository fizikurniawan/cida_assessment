# Bot Setup and Running Instructions

Welcome to the Bot setup guide. This document will guide you through setting up and running the bot. Please follow the instructions carefully.

## About the Bot

This bot is designed to answer all questions related to agriculture and farming, and it only accepts questions in Indonesian. Whether you're a professional farmer, a hobbyist gardener, or someone with a passing interest in agriculture, this bot can provide valuable information and insights in the Indonesian language.

## Table of Contents

- [Dependencies](#dependencies)
- [Environment Variables](#environment-variables)
- [Setup Instructions](#setup-instructions)
- [Running the Bot](#running-the-bot)
- [Using the Bot](#using-the-bot)

## Dependencies

Before setting up the bot, ensure you have the following dependencies installed:

- Node.js (v22 or later)
- npm (Node Package Manager)
- MongoDB
- Git

You can check if Node.js and npm are installed by running the following commands in your terminal:

```sh
node -v
npm -v
```

If not installed, download and install Node.js and npm from [nodejs.org](https://nodejs.org/).

## Environment Variables

The bot requires several environment variables to be set. Create a `.env` file in the root directory of your project and add the following variables:

| Key             | Description                                                        | Example                                                                                        |
| --------------- | ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------- |
| TELEGRAM_TOKEN  | Telegram token, obtained from BotFather                            | `123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11`                                                    |
| DISCORD_TOKEN   | Discord bot token, obtained from the Discord Developer Portal      | `Nzg4OT...2Q4MQ==`                                                                             |
| DISCORD_APP_ID  | Discord application ID, obtained from the Discord Developer Portal | `123456789012345678`                                                                           |
| DISCORD_PUB_KEY | Discord public key, obtained from the Discord Developer Portal     | `abcdefg1234567890`                                                                            |
| MONGO_URI       | MongoDB URI for connecting to your MongoDB database                | `mongodb+srv://user:password@cluster0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority` |
| OPEN_AI_API_KEY | OpenAI API key, obtained from the OpenAI platform                  | `sk-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`                                                      |
| GROQ_AI_API_KEY | GROQ API key, obtained from the GROQ platform                      | `grq-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`                                                     |

Make sure to replace the placeholder values with your actual tokens and keys.

## Setup Instructions

1. **Clone the Repository**

   ```sh
   git clone https://github.com/fizikurniawan/cida_assessment.git
   cd cida_assessment
   ```

2. **Install Dependencies**

   ```sh
   npm install
   ```

3. **Setup Environment Variables**

   - Create a `.env` file in the root directory.
   - Copy and paste the environment variables listed above into the `.env` file.
   - Replace the placeholder values with your actual keys and tokens.

4. **Configure MongoDB**
   - Make sure MongoDB is running on your system.
   - If you are using a cloud MongoDB service, make sure to set the `MONGO_URI` variable in the `.env` file accordingly.

## Running the Bot

1. **Start the Bot**

   ```sh
   npm start
   ```

2. **Verification**

   - Ensure that the bot is connected to both Telegram and Discord.
   - You can verify the connections by checking the logs in your terminal.

3. **Testing**
   - Send a message to your bot on Telegram or Discord to verify it's working correctly.

## Using the Bot

### Telegram

To use the bot on Telegram:

1. **Chat with the Bot**

   - Open the following link: [https://t.me/cida_assessment_fk_bot](https://t.me/cida_assessment_fk_bot)

2. **Start the Bot**

   - Send the command `/start` to initiate the bot.

3. **Ask Questions**
   - You can now freely ask any questions related to agriculture and farming. The bot will provide you with relevant information and answers.

### Discord

To use the bot on Discord:

1. **Invite the Bot to Your Server**

   - Use the following invite URL to add the bot to your Discord server: [Invite Link](https://discord.com/oauth2/authorize?client_id=1243209325330305135&permissions=292057851904&scope=bot)

2. **Interact with the Bot**
   - To interact with the bot, simply mention the bot user in any channel using `@CIDA Assessment` followed by your question or command.
   - For example: `@CIDA Assessment Bagaimana cara meningkatkan kualitas tanah untuk pertanian sayuran?`

You can now freely ask any questions related to agriculture and farming on both Telegram and Discord. The bot will provide you with relevant information and answers.

### Screenshots

#### Telegram

![Telegram Example](images/telegram.png)

#### Discord

![Discord Example](images/discord.png)

## Additional Information

- For detailed information on how to use the bot, refer to the documentation in the [README.md](README.md)
- If you encounter any issues, please create an issue in the repository or contact the maintainer.

Enjoy using your bot!
