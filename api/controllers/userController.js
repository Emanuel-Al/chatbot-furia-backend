const userService = require("../services/userService");

async function create(req, res) {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function remove(req, res) {
  try {
    const { id } = req.params;
    const user = await userService.deleteUser(id);
    res.status(200).json({ message: "Usuário removido com sucesso", user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function update(req, res) {
  try {
    const { id } = req.params;
    const user = await userService.updateUser(req.body, id);
    res.status(200).json({ message: "Usuário atualizado com sucesso", user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = { create, remove, update };
