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
    const newBook = new Book(req.body);
    console.log(newBook);
    newBook.save();

    res.json(newBook);
  } catch (error) {
    next(error);
  }
}
