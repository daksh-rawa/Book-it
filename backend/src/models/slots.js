const mongoose = require("mongoose");

const slotSchema = new mongoose.Schema({
  experienceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Experience',
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  totalSeats: {
    type: Number,
    default: 10,
  },
  availableSeats: {
    type: Number,
    default: 10,
  },
});

const Slot = mongoose.model("Slot", slotSchema);
module.exports = { Slot };