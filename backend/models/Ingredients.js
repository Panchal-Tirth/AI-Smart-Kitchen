const mongoose = require("mongoose");

const ingredientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    item: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Item",
      required: true,
    },
    quantityRequired: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Ingredient", ingredientSchema);
