const express = require("express");
const { Promo } = require("../models/promo");

const router = express.Router();

// POST /promo/validate - Validate promo codes
router.post("/validate", async (req, res) => {
  const { code } = req.body;

  if (!code) {
    return res.status(400).json({ msg: "Promo code required" });
  }

  try {
    const promo = await Promo.findOne({ code });

    if (!promo) {
      return res.status(404).json({ msg: "Invalid promo code" });
    }

    if (new Date() > promo.expiryDate) {
      return res.status(400).json({ msg: "Promo code expired" });
    }

    res.json({
      msg: "Promo valid",
      type: promo.type,
      value: promo.value
    });
  } catch (err) {
    res.status(500).json({ msg: "Error validating promo", error: err.message });
  }
});

module.exports = router;
