const mongoose = require("mongoose");

const mongoURL =
  process.env.MONGODB_DEV_URL ||
  "mongodb+srv://priyaayadav_50:cabBooking90254@cluster0.r30g2io.mongodb.net/Cab_Booking?retryWrites=true&w=majority";

mongoose
  .connect(mongoURL)
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
  });

module.exports = mongoose.connection;
