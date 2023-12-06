import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import BooksRouter from "./routes/BooksRouter.js";

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

app.get("/", (req, res) => {
  res.json({ msg: "Hello world!" });
});

app.use("/api/books", BooksRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
