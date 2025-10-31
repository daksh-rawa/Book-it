const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  imageUrl: String,
  price: { type: Number, required: true },
  location: String,
});

const Experience = mongoose.model("Experience", experienceSchema);
module.exports = { Experience };