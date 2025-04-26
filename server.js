require("dotenv").config();
const connectDb = require("./config/db");
const app = require("./config/express")();
const port = app.get("port");

connectDb();

app.get("/", (req, res) => {
  res.send("Setup");
});

app.get("/favicon.ico", (req, res) => res.status(204));

const chatRoutes = require("./routes/chat");
const { connect } = require("mongoose");
app.use("/chat", chatRoutes);

app.listen(port, () => console.log(`App running on http://localhost:${port}`));
