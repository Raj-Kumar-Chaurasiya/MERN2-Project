// backend/modules/Tourist.js
import mongoose from "mongoose";

const touristSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
  },
  { timestamps: true } // adds createdAt and updatedAt
);

const Tourist = mongoose.model("Tourist", touristSchema);
export default Tourist;
