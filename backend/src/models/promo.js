const mongoose = require("mongoose");

const promoSchema = new mongoose.Schema({
  code: {
    type: String,
    unique: true,
    required: true,
  },
  type: {
    type: String,
    enum: ["PERCENT", "FLAT"],
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  expiryDate: {
    type: Date,
    required: true,
  },
});

const Promo = mongoose.model("Promo", promoSchema);
module.exports = { Promo };