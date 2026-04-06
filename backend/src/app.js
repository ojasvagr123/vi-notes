const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const sessionRoutes = require("./routes/sessionRoutes");

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Vi-Notes backend is running");
});

app.use("/api/auth", authRoutes);
app.use("/api/sessions", sessionRoutes);

module.exports = app;
