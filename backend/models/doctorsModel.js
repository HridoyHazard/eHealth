import mongoose from "mongoose";

const doctorsSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    degree: {
      type: String,
      required: true,
    },
    specialist: {
      type: String,
      required: true,
    },
    Chamber: {
      type: String,
      required: true,
    },
    Available: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Doctors = mongoose.model("Doctors", doctorsSchema);

export default Doctors;
