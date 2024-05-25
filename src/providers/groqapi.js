import axios from "axios";
import { SYSTEM_PROMPT } from "../utils/constants.js";

const GROQ_AI_BASE_URL = "https://api.groq.com/";
const GROQ_AI_API_KEY = process.env.GROQ_AI_API_KEY;
const COMPLETION_URL = GROQ_AI_BASE_URL + "openai/v1/chat/completions";

export const chatCompletion = async (message) => {
  const body = {
    model: "llama3-8b-8192",
    // model: "gemma-7b-it",
    messages: [
      {
        role: "system",
        content: SYSTEM_PROMPT,
      },
      {
        role: "user",
        content: message,
      },
    ],
  };

  try {
    const response = await axios.post(COMPLETION_URL, body, {
      headers: {
        Authorization: `Bearer ${GROQ_AI_API_KEY}`,
      },
    });
    const botResponse = response.data.choices[0].message.content.trim();
    return botResponse;
  } catch (error) {
    console.log(error);
    return;
  }
};
