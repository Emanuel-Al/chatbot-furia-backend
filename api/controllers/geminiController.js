const geminiService = require("../services/geminiService");

async function geminiResponse(req, res) {
  const { prompt } = req.body;
  try {
    const response = await geminiService.askGemini(prompt);
    res.status(200).json({ message: response });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = { geminiResponse };
