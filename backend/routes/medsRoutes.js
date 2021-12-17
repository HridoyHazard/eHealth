import express from "express";
import asyncHandler from "express-async-handler";
import Meds from "../models/medsModel.js";

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const meds = await Meds.find({});
    res.json(meds);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const meds = await Meds.findById(req.params.id);
    if (meds) {
      res.json(meds);
    } else {
      res.status(404);
      throw new Error("Product not found");
    }
  })
);

export default router;
