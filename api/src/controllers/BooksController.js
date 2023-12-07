import AsyncHandler from "express-async-handler";
import Book from "../models/Book.js";

export const getAllBooks = AsyncHandler(async (req, res) => {
  const allBooks = await Book.find().exec();
  res.json(allBooks);

  console.log(
    `${new Date().toLocaleString()}: All books successfully retreived from the database.`
  );
});

export const createBook = AsyncHandler(async (req, res) => {
  const newBook = new Book(req.body);
  await newBook.save();
  res.json(newBook);

  console.log(
    `${new Date().toLocaleString()}: ${newBook.title} by ${
      newBook.author
    } was successfully saved to the database.`
  );
});

export const getBookbyId = AsyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id);

  if (!book) {
    console.log(
      `${new Date().toLocaleString()}: Book with ID ${req.params.id} not found`
    );
    return res.status(404).json({ message: "Book not found." });
  }

  res.json(book);
  console.log(
    `${new Date().toLocaleString()}: ${book.title} by ${
      book.author
    } was successfully retreived from the database.`
  );
});

export const updateBookById = AsyncHandler(async (req, res) => {
  const { title, author } = req.body;
  const { id } = req.params;

  const updatedBook = await Book.findByIdAndUpdate(
    id,
    { title, author },
    { new: true }
  );

  if (!updatedBook) {
    console.log(`${new Date().toLocaleString()}: Book with id ${id} not found`);
    return res.status(404).json({ message: "Book not found." });
  }

  res.json(updatedBook);
  console.log(
    `${new Date().toLocaleString()}: ${updatedBook.title} by ${
      updatedBook.author
    } was successfully updated.`
  );
});

export const deleteBookById = AsyncHandler(async (req, res) => {
  const { id } = req.params;
  const deletedBook = await Book.findByIdAndDelete(id);

  if (!deletedBook) {
    console.log(`${new Date().toLocaleString()}: Book with ID ${id} not found`);
    return res.status(404).json({ message: "Book not found." });
  }

  res.json(deletedBook);
  console.log(
    `${new Date().toLocaleString()}: ${deletedBook.title} by ${
      deletedBook.author
    } was successfully deleted from the database.`
  );
});
