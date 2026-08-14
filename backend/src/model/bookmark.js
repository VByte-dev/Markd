const mongoose = require("mongoose");

// Schema
let bookmarkSchema = mongoose.Schema({
  id: Number,
  url: String,
  title: String,
  note: String,
  tag: String,
  visitCount: Number,
  createdAt: String
});

// Model
let bookmark = mongoose.model("bookmark", bookmarkSchema);


module.exports = bookmark;