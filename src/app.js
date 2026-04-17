const express = require("express");
const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");
const cors = require("cors");

const app = express();

app.use(cors({
  origin: [
    'https://taskflow-layb.onrender.com/',
    'http://localhost:4200'
  ],
  credentials: true
}));
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/tasks", taskRoutes);

module.exports = app;
