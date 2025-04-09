const mongoose = require("mongoose");

const wasteSchema = new mongoose.Schema(
  {
    ingredient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ingredient",
      required: true,
    },
    quantity: Number, // e.g., grams or units wasted
    wasteType: {
      type: String,
      enum: ["spoiled", "overcooked", "unused", "leftover"],
      required: true,
    },
    imageUrl: String,
    station: String, // e.g., cutting, cooking, serving
    timestamp: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Waste", wasteSchema);
