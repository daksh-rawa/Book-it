const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  experienceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Experience',
    required: true,
  },
  slotId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Slot',
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  promoCode: {
    type: String,
  },
  finalPrice: {
    type: Number,
  },
  status: {
    type: String,
    enum: ['CONFIRMED', 'CANCELLED'],
    default: 'CONFIRMED',
  },
  date: {
    type: Date,
    default: Date.now, // date of booking
  },
});


const Booking = mongoose.model("Booking", bookingSchema);
module.exports = { Booking };