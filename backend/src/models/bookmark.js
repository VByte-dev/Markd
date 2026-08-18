const mongoose = require("mongoose");

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
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

let Bookmark = mongoose.model("Bookmark", bookmarkSchema);

module.exports = Bookmark;
