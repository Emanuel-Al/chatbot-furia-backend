const authService = require("../services/authService");

async function auth(req, res) {
  try {
    const { email, password } = req.body;
    const token = await authService.createToken(email, password);
    res.status(200).json({ message: "token criado com sucesso", token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = { auth };
