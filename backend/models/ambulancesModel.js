import mongoose from "mongoose";

const ambulancesSchema = mongoose.Schema(
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
    type: {
      type: String,
      required: true,
    },
    service: {
      type: String,
      required: true,
    },
    hotline: {
      type: String,
      required: true,
    },
    available: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Ambulances = mongoose.model("Ambulances", ambulancesSchema);

export default Ambulances;
