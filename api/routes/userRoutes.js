const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const User = require("../models/User");
const authController = require("../controllers/authController");
const { checkAuth } = require("../middleware/checkAuth");

router.post("/register", userController.create);
router.post("/login", authController.auth);

router.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

router.put("/users/:id", userController.update);
router.delete("/users/:id", checkAuth, userController.remove);
module.exports = router;
