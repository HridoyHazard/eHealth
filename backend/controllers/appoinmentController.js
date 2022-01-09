import asyncHandler from "express-async-handler";
import Appoinment from "../models/appointmentModel.js";

const addAppoinment = asyncHandler(async (req, res) => {
  const { getappoinment } = req.body;

  if (getappoinment && getappoinment === 0) {
    res.status(400);
    throw new Error("No Appoinment Found");
    return;
  } else {
    const appoinment = new Appoinment({
      user: req.user._id,
      getappoinment,
    });

    const createdAppoinment = await appoinment.save();
    res.status(201).json(createdAppoinment);
  }
});

export { addAppoinment };
