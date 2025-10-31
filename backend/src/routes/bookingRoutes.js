const express = require("express");
const { Booking } = require("../models/booking");
const { Slot } = require("../models/slots");

const router = express.Router();

// POST /bookings - Accept booking details and store them
router.post("/", async (req, res) => {
  const { experienceId, slotId, userName, email, promoCode, finalPrice } = req.body;

  if (!experienceId || !slotId || !userName || !email) {
    return res.status(400).json({ msg: "Missing required fields" });
  }

  try {
    const slot = await Slot.findById(slotId);
    if (!slot) {
      return res.status(404).json({ msg: "Slot not found" });
    }

    if (slot.availableSeats <= 0) {
      return res.status(400).json({ msg: "Slot full" });
    }

    const booking = await Booking.create({
      experienceId,
      slotId,
      userName,
      email,
      promoCode,
      finalPrice
    });

    slot.availableSeats -= 1;
    await slot.save();

    res.json({ msg: "Booking confirmed", booking });
  } catch (err) {
    res.status(500).json({ msg: "Error creating booking", error: err.message });
  }
});

module.exports = router;
