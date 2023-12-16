import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import BooksRouter from "./routes/BooksRouter.js";
import RecordsRouter from "./routes/RecordsRouter.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

try {
  mongoose.connect(process.env.MONGODB_URL);
  console.log("Connected to MongoDB.");
} catch (err) {
  console.log("Unable to connect to MongoDB.");
  console.log(err);
}

app.use("/api/books", BooksRouter);
app.use("/api/records", RecordsRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
