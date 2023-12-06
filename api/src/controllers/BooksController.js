import Book from "../models/Book.js";

export async function getAllBooks(req, res, next) {
  try {
    console.log("Fetching all books.");
    res.json({ books: "All books here." });
  } catch (error) {
    next(error);
  }
}

export async function createBook(req, res, next) {
  try {
    console.log("Creating book.");
    res.json({ newBook: "my new book" });
  } catch (error) {
    next(error);
  }
}
