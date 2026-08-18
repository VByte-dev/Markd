const express = require("express");
const bookmarkRoutes = require("./routes/bookmarkRoutes");
const authRoutes = require("./routes/authRoutes");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/bookmark", bookmarkRoutes);
app.use("/auth", authRoutes);

module.exports = app;
