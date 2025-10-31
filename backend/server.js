const express = require("express");
const bodyParser = require("body-parser");
const { connectDB } = require("./src/config/db");
const { PORT } = require("./src/config/config");
const cors = require("cors");


const experienceRoutes = require("./src/routes/experienceRoutes");
const bookingRoutes = require("./src/routes/bookingRoutes");
const promoRoutes = require("./src/routes/promoRoutes");

const app = express();

app.use(cors());
app.use(bodyParser.json());

connectDB();

app.use("/experiences", experienceRoutes);
app.use("/bookings", bookingRoutes);
app.use("/promo", promoRoutes);


app.get('/health', (req, res) => {
  res.send('BookIt backend is running');
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});