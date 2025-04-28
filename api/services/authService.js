const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function createToken(email, password) {
  try {
    const user = await User.findOne({ email: email });
    if (user) {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        const payload = {
          id: user.id,
          email: user.email,
        };
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: "2h",
        });
        return { token };
      } else {
        throw new Error("O email ou senha inválidos");
      }
    } else {
      throw new Error("Usuário não cadastrado");
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = { createToken };
