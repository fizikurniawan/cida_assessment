import Conversation from "../models/conversation.js";
import { chatCompletion } from "../providers/groqapi.js";

export const handleConversation = async (
  msgTxt,
  userId,
  currentState,
  provider
) => {
  if (!currentState) {
    currentState = [];
  }

  if (currentState.length > 3) {
    currentState.shift();
  }

  currentState.push(`input: ${msgTxt}`);
  const msgToLLM = currentState.join("\n");

  let response = await chatCompletion(msgToLLM);

  const isNotScope =
    response.includes("bukan terkait dengan pertanian atau perkebunan") |
    response.includes("tentang pertanian atau perkebunan.");
  const isNotInQuestion =
    response.includes("tidak ada di pertanyaan") ||
    response.includes("tidak ada dalam pertanyaan");

  if (isNotScope || isNotInQuestion) {
    currentState = [];
    response = await chatCompletion(`input: ${msgTxt}`);
  }
  currentState.push(`assistant: ${response}`);
  console.log(currentState);

  const chatMessage = new Conversation({
    user_id: userId,
    mebagssage: msgTxt,
    response: response,
    provider: provider,
  });

  try {
    await chatMessage.save();
    console.log("Chat message saved successfully");
  } catch (error) {
    console.error("Error saving chat message:", error);
  }

  // Mengembalikan state yang telah diubah
  return { response, currentState };
};
