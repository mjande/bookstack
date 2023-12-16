import express from "express";
import {
  getAllRecords,
  createRecord,
  getRecordById,
  deleteRecordById,
} from "../controllers/RecordsController.js";

const router = express.Router();

// Get all records
router.get("/", getAllRecords);

// Create a record
router.post("/", createRecord);

// Get record by ID
router.get("/:id", getRecordById);

// Delete record by ID
router.delete("/:id", deleteRecordById);

export default router;
