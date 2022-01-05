import asyncHandler from "express-async-handler";
import Meds from "../models/medsModel.js";

const getMeds = asyncHandler(async (req, res) => {
  const meds = await Meds.find({});
  res.json(meds);
});

const getMedById = asyncHandler(async (req, res) => {
  const meds = await Meds.findById(req.params.id);
  if (meds) {
    res.json(meds);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

export { getMeds, getMedById };
