import express from "express";
import asyncHandler from "express-async-handler";
import Doctors from "../models/doctorsModel.js";

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const doctors = await Doctors.find({});
    res.json(doctors);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const doctors = await Doctors.findById(req.params.id);
    if (doctors) {
      res.json(doctors);
    } else {
      res.status(404)
      throw new Error('Product not found')
    }
  })
);

export default router;
