const mongoose = require("mongoose");

// Schema
const userSchema = mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
  },
  {
    timestamps: true,
  }
);

// Model
const User = mongoose.model("User", userSchema);

module.exports = User;