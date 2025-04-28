const express = require("express");
const router = express.Router();
const geminiController = require("../controllers/geminiController");
const { checkAuth } = require("../middleware/checkAuth");

router.post("/chat", checkAuth, geminiController.geminiResponse);
module.exports = router;
