import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_KEY);

// choose model (like GPT-3.5/4 in OpenAI)
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Example function to generate a response
export async function getGeminiResponse(prompt) {
  const result = await model.generateContent(`
    Act as a movie recommendation system and suggest some movie for the query +
    ${prompt} +
    only give name of 5 movies, Comma seperated like the sample Format
    "Inception , The Dark Knight, Interstellar, Tenet, Memento"
  `);

  return result.response.text();
}