const User = require("../models/User");
const bcrypt = require("bcryptjs");
const yup = require("yup");

async function createUser(data) {
  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Nome é obrigatório")
      .max(15, "O nome deve ter no máximo 15 caracteres"),
    email: yup.string().required("Email é obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Senha é obrigatório")
      .min(6, "Senha deve ter no mínimo 6 caracteres")
      .max(15, "Senha deve ter no máximo 15 caracteres"),
  });

  await schema.validate(data);

  let { name, email, password } = data;

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = new User({ name, email, password: hashedPassword });
  return await newUser.save();
}

async function deleteUser(id) {
  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      throw new Error("Usuário não encontrado");
    }
    return user;
  } catch (err) {
    throw new Error("Erro ao deletar usuário: " + err.message);
  }
}

module.exports = { createUser, deleteUser };
