const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ["veg", "non-veg", "dairy", "spices", "other"],
    default: "other",
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  unit: {
    type: String,
    required: true,
  },
  ingredients: [
    {
      ref: "Ingredient",
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  ],
  // quantity: {
  //     type: Number,
  //     required: true,
  // },
});

module.exports = mongoose.model("Item", itemSchema);
