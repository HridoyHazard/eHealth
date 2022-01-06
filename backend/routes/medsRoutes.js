import express from "express";
const router = express.Router();
import {
  getMeds,
  getMedById,
  deleteMed,
  createMed,
  updateMed,
} from "../controllers/medController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(getMeds).post(protect, admin, createMed);
router
  .route("/:id")
  .get(getMedById)
  .delete(protect, admin, deleteMed)
  .put(protect, admin, updateMed);

export default router;
