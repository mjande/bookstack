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

export const editUser = AsyncHandler(async (req, res) => {
  const token = req.headers.authorization.split(" ")[1];

  const { id } = jwt.verify(token, process.env.JWT_SECRET_KEY);

  const user = await User.findById(id);

  if (!user) {
    console.log("User not found");
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
  console.log("User information sent.");
});

export const updateUser = AsyncHandler(async (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  const { id } = jwt.verify(token, process.env.JWT_SECRET_KEY);

  const user = await User.findById(id);

  if (!user) {
    console.log("User not found");
    return res.status(404).json({ message: "User not found " });
  }

  // Update username/password if provided by request
  user.username = req.body.username || user.username;
  user.password = req.body.password || user.password;

  const updatedUser = await user.save();

  if (!updateUser) {
    console.log("User information could not be updated");
    return res.status(500).json({ message: "User could not be updated" });
  }

  res.json(updatedUser);
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
