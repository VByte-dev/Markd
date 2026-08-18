const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");

const {
  createBookmark,
  getBookmark,
  deleteBookmark,
  patchBookmark,
} = require("../controllers/bookmarkController");

const router = express.Router();
router.use(authMiddleware);
// Create bookmark
router.post("/", createBookmark);

// Get all bookmarks
router.get("/", getBookmark);

// Delete bookmark
router.delete("/:id", deleteBookmark);

// Patch bookmark - VisitCount
router.patch("/:id", patchBookmark);

module.exports = router;
