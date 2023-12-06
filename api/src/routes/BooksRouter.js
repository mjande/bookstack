import express from "express";
import { createBook, getAllBooks } from "../controllers/BooksController.js";
const router = express.Router();

// Get all books
router.get("/", getAllBooks);
router.post("/", createBook);

export default router;
