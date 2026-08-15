const mongoose = require("mongoose");

// Schema
let bookmarkSchema = mongoose.Schema(
  {
    url: String,
    title: String,
    note: String,
    tag: String,
    visitCount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

// Model
let bookmark = mongoose.model("bookmark", bookmarkSchema);

module.exports = bookmark;