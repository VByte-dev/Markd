const Bookmark = require("../models/bookmark");

// Post
const createBookmark = async (req, res) => {
  const data = req.body;

  await Bookmark.create(data);

  res.status(201);

  res.json({
    message: "Post done",
    status: res.statusCode,
  });
};

// Get
const getBookmark = async (req, res) => {
  const data = await Bookmark.find();

  res.json({
    message: "Get done",
    status: res.statusCode,
    data,
  });
};

// Delete
const deleteBookmark = async (req, res) => {
  await Bookmark.findByIdAndDelete(req.params.id);

  res.json({
    message: "Delete done",
    status: res.statusCode,
  });
};

// Patch
const patchBookmark = async (req, res) => {
  const data = req.body;

  await Bookmark.findByIdAndUpdate(req.params.id, data, { new: true });

  res.json({
    message: "Patch done",
    status: res.statusCode,
  });
};

module.exports = {
  createBookmark,
  getBookmark,
  deleteBookmark,
  patchBookmark,
};
