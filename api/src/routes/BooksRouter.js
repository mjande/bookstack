import express from "express";
import {
  createBook,
  getAllBooks,
  getBookbyId,
  updateBookById,
  deleteBookById,
} from "../controllers/BooksController.js";
const router = express.Router();

// Get all books
router.get("/", getAllBooks);

// Create a book
router.post("/", createBook);

// Get a  book
router.get("/:id", getBookbyId);

// Update a book
router.put("/:id", updateBookById);

// Delete a book
router.delete("/:id", deleteBookById);

export default router;
