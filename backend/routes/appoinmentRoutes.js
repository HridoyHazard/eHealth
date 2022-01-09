import express from "express";
const router = express.Router();
import {addAppoinment} from '../controllers/appoinmentController.js'

import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").post(protect, addAppoinment)

export default router;
