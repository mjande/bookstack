import AsyncHandler from "express-async-handler";
import Record from "../models/Record.js";
import Book from "../models/Book.js";

// Get all records
export const getAllRecords = AsyncHandler(async (req, res) => {
  const allRecords = await Record.find().exec();
  res.json(allRecords);

  console.log(
    `${new Date().toLocaleString()}: All books successfully retreived from the database.`
  );
});

// Create record
export const createRecord = AsyncHandler(async (req, res) => {
  const book = await Book.findById(req.body.book);

  const newRecord = new Record(req.body);
  await newRecord.save();
  res.json(newRecord);

  console.log(
    `${new Date().toLocaleString()}: A record for ${
      book.title
    } was successfully saved to the database.`
  );
});

// Get record by ID
export const getRecordById = AsyncHandler(async (req, res) => {
  const record = await Record.findById(req.params.id);
  const book = await Book.findById(record.book._id);

  if (!record) {
    console.log(
      `${new Date().toLocaleString()}: A record with ID ${
        req.params.id
      } not found`
    );
    return res.status(404).json({ message: "Record not found." });
  }

  res.json(record);

  console.log(
    `${new Date().toLocaleString()}: A record for ${
      book.title
    } was successfully retreived from the database.`
  );
});

// Delete record by ID
export const deleteRecordById = AsyncHandler(async (req, res) => {
  const deletedRecord = await Record.findByIdAndDelete(req.params.id);
  const book = await Book.findById(deletedRecord.book._id);

  if (!deletedRecord) {
    console.log(
      `${new Date().toLocaleString()}: A record with ID ${
        req.params.id
      } not found`
    );
    return res.status(404).json({ message: "Record not found." });
  }

  res.json(deletedRecord);
  console.log(
    `${new Date().toLocaleString()}: A record for ${
      book.title
    } was successfully deleted from the database.`
  );
});
