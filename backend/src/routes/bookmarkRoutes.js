const express = require("express");
const {
  createBookmark,
  getBookmark,
  deleteBookmark,
  patchBookmark
} = require("../controllers/bookmarkController");

const router = express.Router();

// Create bookmark
router.post("/", createBookmark);

// Get all bookmarks
router.get("/", getBookmark);

// Delete bookmark
router.delete("/:id", deleteBookmark);

// Patch bookmark - VisitCount
router.patch("/:id", patchBookmark);

module.exports = router;