import { Router } from "express";
import {
  registerUser,
  loginUser,
  updateUser,
  deleteUser,
} from "../controllers/UsersController.js";
import { authenticateJWT } from "../utils/auth.js";

const router = Router();

// Create new user
router.post("/", registerUser);

// Log in
router.post("/login", loginUser);

// Logout handled by removing reference to token on client-side (no server-side
// action necessary)

// Update user
router.put("/", authenticateJWT, updateUser);

// Delete user
router.delete("/", authenticateJWT, deleteUser);

export default router;
