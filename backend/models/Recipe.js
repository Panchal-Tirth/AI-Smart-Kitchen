const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    ingredients: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Ingredient",
      },
    ],
    cost: {
      type: Number,
    },
    isSpecial: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Recipe", recipeSchema);
