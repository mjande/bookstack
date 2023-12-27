import { Router } from "express";
import {
  registerUser,
  loginUser,
  editUser,
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

// Edit user (returns user information used for filling form fields on frontend)
router.get("", editUser);

// Update user
router.put("/", authenticateJWT, updateUser);

// Delete user
router.delete("/", authenticateJWT, deleteUser);

export default router;
