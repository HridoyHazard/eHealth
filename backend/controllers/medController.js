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

const deleteMed = asyncHandler(async (req, res) => {
  const meds = await Meds.findById(req.params.id)

  if (meds) {
    await meds.remove()
    res.json({ message: 'Medicine removed' })
  } else {
    res.status(404)
    throw new Error('Medicine not found')
  }
})
const createMed = asyncHandler(async (req, res) => {
  const meds = new Meds({
    name: 'Sample name',
    price: 0,
    user: req.user._id,
    image: '/images/sample.jpg',
    brand: 'Sample brand',
    category: 'Sample category',
    countInStock: 0,
    description: 'Sample description',
  })

  const createdMeds = await meds.save()
  res.status(201).json(createdMeds)
})

const updateMed = asyncHandler(async (req, res) => {
  const {
    name,
    price,
    description,
    image,
    brand,
    category,
    countInStock,
  } = req.body

  const meds = await Meds.findById(req.params.id)

  if (meds) {
    meds.name = name
    meds.price = price
    meds.description = description
    meds.image = image
    meds.brand = brand
    meds.category = category
    meds.countInStock = countInStock

    const updatedMeds = await meds.save()
    res.json(updatedMeds)
  } else {
    res.status(404)
    throw new Error('Medicine not found')
  }
})
export { getMeds, getMedById , deleteMed, createMed, updateMed };
