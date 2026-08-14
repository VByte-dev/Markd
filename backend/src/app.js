const express = require("express");
const bookmark = require("./model/bookmark");

const app = express();
// Middleware
app.use(express.json());

module.exports = app;