const mongoose = require("mongoose");

const saleSchema = new mongoose.Schema(
  {
    item: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Item",
    },
    quantity: Number,
    price: Number,
    dishName: String,
    timestamp: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Sale", saleSchema);
