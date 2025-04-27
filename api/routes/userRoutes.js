const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const User = require("../models/User");

router.post("/register", userController.create);

router.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

router.put("/users/:id", userController.update);
router.delete("/users/:id", userController.remove);
module.exports = router;
