import AsyncHandler from "express-async-handler";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerUser = AsyncHandler(async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({ username, password: hashedPassword });
  await user.save();

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "1h",
  });

  res.status(201).json({ message: "New user created.", token });

  console.log("New user created.");
});

export const loginUser = AsyncHandler(async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username: username });

  if (!user) {
    return res.status(401).json({ message: "Invalid username" });
  }

  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    return res.status(401).json({ message: "Invalid password" });
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "1h",
  });

  res.json(token);
});

export const updateUser = AsyncHandler(async (req, res) => {
  const { oldUsername, newUsername, password } = req.body;
  const user = await User.findOneAndUpdate(
    { username: oldUsername },
    { username: newUsername, password },
    { new: true }
  );

  if (!user) {
    console.log("User not found");
    return res.status(404).json({ message: "User not found " });
  }

  res.json(user);
  console.log("User successfully updated.");
});

export const deleteUser = AsyncHandler(async (req, res) => {
  const deletedUser = await User.findOneAndDelete({
    username: req.body.username,
  });

  if (!deletedUser) {
    console.log("User not found");
    return res.status(404).json({ message: "User not found" });
  }

  res.json(deletedUser);
  console.log("User successfully deleted.");
});
