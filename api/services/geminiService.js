const genai = require("@google/genai");

const apiKey = process.env.GEMINI_API_KEY;
const ai = new genai.GoogleGenAI({ apiKey: `${apiKey}` });

async function askGemini(prompt) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });
    return response.candidates[0].content.parts[0].text;
  } catch (error) {
    console.log("Erro ao gerar responta", error.message);
    throw new Error("Erro ao gerar resposta");
  }
}

module.exports = { askGemini };
