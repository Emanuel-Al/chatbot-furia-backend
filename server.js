require("dotenv").config();
const connectDb = require("./config/db");
const app = require("./config/express")();
const port = app.get("port");
const passport = require("./config/passport");

connectDb();

app.get("/", (req, res) => {
  res.send("Setup");
});

app.get("/favicon.ico", (req, res) => res.status(204));

const chatRoutes = require("./api/routes/chat");
const userRoutes = require("./api/routes/userRoutes");
const { connect } = require("mongoose");
app.use("/chat", chatRoutes);
app.use("/", userRoutes);
app.use(passport.initialize());

app.listen(port, () => console.log(`App running on http://localhost:${port}`));
