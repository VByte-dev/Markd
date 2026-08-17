const Bookmark = require("../models/bookmark");

// Post
const createBookmark = async (req, res) => {
  const data = req.body;

  await Bookmark.create({
    ...data,
    user: req.user.userId,
  });

  res.status(201);

  res.json({
    message: "Post done",
    status: res.statusCode,
  });
};

// Get
const getBookmark = async (req, res) => {
  const data = await Bookmark.find({
    user: req.user.userId,
  });

  res.json({
    message: "Get done",
    status: res.statusCode,
    data: data,
  });
};

// Delete
const deleteBookmark = async (req, res) => {
  await Bookmark.findByIdAndDelete({
    _id: req.params.id,
    user: req.user.userId,
  });

  res.json({
    message: "Delete done",
    status: res.statusCode,
  });
};

// Patch
const patchBookmark = async (req, res) => {
  const data = req.body;

  await Bookmark.findByIdAndUpdate(
    {
      _id: req.params.id,
      user: req.user.userId,
    },
    data,
    {
      new: true,
    },
  );

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
