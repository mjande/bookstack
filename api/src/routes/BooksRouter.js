import { Router } from "express";
import {
  createBook,
  getAllBooks,
  getBookbyId,
  updateBookById,
  deleteBookById,
} from "../controllers/BooksController.js";
import { authenticateJWT } from "../utils/auth.js";
const router = Router();

// Get all books
router.get("/", getAllBooks);

// Create a book
router.post("/", authenticateJWT, createBook);

// Get a  book
router.get("/:id", getBookbyId);

// Update a book
router.put("/:id", authenticateJWT, updateBookById);

// Delete a book
router.delete("/:id", authenticateJWT, deleteBookById);

export default router;
