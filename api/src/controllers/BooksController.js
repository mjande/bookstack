import Book from "../models/Book.js";

export async function getAllBooks(req, res, next) {
  try {
    const allBooks = await Book.find().exec();
    res.json(allBooks);

    console.log("All books successfully retreived from the database.");
  } catch (error) {
    res.status(500).json(error);
  }
}

export async function createBook(req, res, next) {
  try {
    const newBook = new Book(req.body);
    await newBook.save();
    res.json(newBook);

    console.log(
      `${newBook.title} by ${newBook.author} was successfully saved to the database.`
    );
  } catch (error) {
    res.status(500).json(error);
  }
}

export async function getBookbyId(req, res, next) {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      console.log("Book not found");
      return res.status(404).json({ message: "Book not found." });
    }

    res.json(book);
    console.log(
      `${book.title} by ${book.author} was successfully retreived from the database.`
    );
  } catch (error) {
    res.status(500).json(error);
  }
}

export async function updateBookById(req, res, next) {
  const { title, author } = req.body;
  const { id } = req.params;

  try {
    const updatedBook = await Book.findByIdAndUpdate(
      id,
      { title, author },
      { new: true }
    );

    if (!updatedBook) {
      console.log("Book not found");
      return res.status(404).json({ message: "Book not found." });
    }

    res.json(updatedBook);
    console.log(
      `${updatedBook.title} by ${updatedBook.author} was successfully updated.`
    );
  } catch (error) {
    res.status(500).json(error);
  }
}

export async function deleteBookById(req, res) {
  const { id } = req.params;

  try {
    const deletedBook = await Book.findByIdAndDelete(id);

    if (!deletedBook) {
      console.log("Book not found");
      return res.status(404).json({ message: "Book not found." });
    }

    res.json(deletedBook);
    console.log(
      `${deletedBook.title} by ${deletedBook.author} was successfully deleted from the database.`
    );
  } catch (error) {
    res.status(500).json(error);
  }
}
