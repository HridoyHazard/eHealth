import express from "express";
import asyncHandler from "express-async-handler";
import Ambulances from "../models/ambulancesModel.js";

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const ambulances = await Ambulances.find({});
    res.json(ambulances);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const ambulances = await Ambulances.findById(req.params.id);
    if (ambulances) {
      res.json(ambulances);
    } else {
      res.status(404)
      throw new Error('Product not found')
    }
  })
);

export default router;
