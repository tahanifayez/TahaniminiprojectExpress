const express = require("express");
const {
  getAllBooks,
  getOneBook,
  createBook,
  deleteBook,
  updateBook
} = require("./Controllers");
const router = express.Router();

router.get("/", getAllBooks);
router.get("/:id", getOneBook);
router.post("/", createBook);
router.delete("/:id", deleteBook);
 router.put("/:id", updateBook);

module.exports = router;
