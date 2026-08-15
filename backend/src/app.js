const express = require("express");
const bookmark = require("./models/bookmark");
const bookmarkRoutes = require("./routes/bookmarkRoutes");
const cors = require("cors")

const app = express();
// Middleware
app.use(express.json());
app.use(cors());
app.use("/bookmark", bookmarkRoutes);

module.exports = app;