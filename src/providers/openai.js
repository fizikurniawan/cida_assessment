import axios from "axios";
import { SYSTEM_PROMPT } from "../utils/constants";

const OPEN_AI_BASE_URL = "https://api.openai.com/";
const OPEN_AI_API_KEY = process.env.OPEN_AI_API_KEY;
const COMPLETION_URL = OPEN_AI_BASE_URL + "v1/chat/completions";

export const chatCompletion = async (message) => {
  const body = {
    model: "gpt-3.5-turbo-16k",
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
        Authorization: `Bearer ${OPEN_AI_API_KEY}`,
      },
    });
    debugger;
    // const botResponse = response.data.choices[0].text.trim();
  } catch (error) {
    console.log(error);
  }
};
