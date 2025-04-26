const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  sender: {
    type: String,
    required: true,
    enum: ["user", "bot"],
  },
  content: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  sessionId: {
    type: String,
    required: true,
  },
});

const Message = mongoose.model("Message", MessageSchema);
module.exports = Message;
