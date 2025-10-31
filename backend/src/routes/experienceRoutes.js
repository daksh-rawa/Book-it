const express = require("express");
const { Experience } = require("../models/experience");
const { Slot } = require("../models/slots");

const router = express.Router();

// GET /experiences - Return list of experiences
router.get("/", async (req, res) => {
  try {
    const experiences = await Experience.find({});
    res.json({ experiences });
  } catch (err) {
    res.status(500).json({ msg: "Error fetching experiences", error: err.message });
  }
});

// GET /experiences/:id - Return details and slot availability
router.get("/:id", async (req, res) => {
  try {
    const experience = await Experience.findById(req.params.id);
    if (!experience) {
      return res.status(404).json({ msg: "Experience not found" });
    }

    const slots = await Slot.find({ experienceId: req.params.id });
    res.json({ experience, slots });
  } catch (err) {
    res.status(500).json({ msg: "Error fetching experience details", error: err.message });
  }
});

module.exports = router;
