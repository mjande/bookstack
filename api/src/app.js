import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";

import BooksRouter from "./routes/BooksRouter.js";
import RecordsRouter from "./routes/RecordsRouter.js";
import UsersRouter from "./routes/UsersRouter.js";

import User from "./models/User.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Connect to MongoDB
try {
  mongoose.connect(process.env.MONGODB_URL);
  console.log("Connected to MongoDB.");
} catch (err) {
  console.log("Unable to connect to MongoDB.");
  console.log(err);
}

// Authentication middleware
const auth_opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET_KEY,
};

passport.use(
  new JwtStrategy(auth_opts, async (jwt_payload, done) => {
    try {
      // Find user from database using jwt_payload
      const user = User.findById(jwt_payload.id);

      if (!user) {
        return done(null, false);
      }

      return done(null, user);
    } catch (error) {
      return done(error, false);
    }
  })
);

// Router
app.use("/api/books", BooksRouter);
app.use("/api/records", RecordsRouter);
app.use("/api/users", UsersRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
