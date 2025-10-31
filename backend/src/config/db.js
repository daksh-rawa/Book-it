const mongoose = require("mongoose");
const { MONGO_DB } = require("./config");

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_DB);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("Connection failed:", err);
  }
};

module.exports = { connectDB };