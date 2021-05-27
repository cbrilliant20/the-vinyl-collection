import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Product = new Schema(
  {
    artist: { type: String, required: true },
    album: { type: String, required: true },
    genre: { type: String, required: true },
    year: { type: String, required: true },
    price: { type: String, required: true },
    imgURL: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("products", Product);
