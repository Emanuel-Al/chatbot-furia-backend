const fs = require("fs");
const path = require("path");

function loadKnowledge() {
  const filePath = path.join(__dirname, "../data/furia_knowledge.md");

  try {
    const content = fs.readFileSync(filePath, "utf-8");
    return content;
  } catch (error) {
    console.log(error);
  }
}

module.exports = { loadKnowledge };
