const genai = require("@google/genai");
const { getInitialContext } = require("./knowledgeService");

const apiKey = process.env.GEMINI_API_KEY;
const ai = new genai.GoogleGenAI({ apiKey: `${apiKey}` });

async function askGemini(userPrompt) {
  const context = getInitialContext();

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: [
        {
          role: "user",
          parts: [{ text: context }, { text: userPrompt }],
        },
      ],
    });

    return response.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error("Erro ao gerar resposta", error.message);
    throw new Error("Erro ao gerar resposta");
  }
}

module.exports = { askGemini };
