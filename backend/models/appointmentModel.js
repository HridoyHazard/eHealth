import mongoose from 'mongoose'

const appoinmentSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    getappoinment: {
      namne: { type: String, required: true },
      age: { type: String, required: true },
      date: { type: Number, required: true },
      symptom: { type: String, required: true },
    },
  },
  {
    timestamps: true,
  }
)

const Appoinment = mongoose.model('Appoinment', appoinmentSchema)

export default Appoinment
