import express from "express";
const router = express.Router();
import { getMeds, getMedById } from "../controllers/medController.js";

router.route("/").get(getMeds);
router.route("/:id").get(getMedById);

export default router;
