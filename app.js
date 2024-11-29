
require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express()
app.use(express.json());


app.use(cors())



  

// Connect to MongoDB

 

// Animal Routes
app.use("/api/animals", require("./routes/Animal"));
app.use("/api/categories", require("./routes/categories"));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({ error: err.message || "Internal Server Error" });
  });
///
mongoose.connection.on("connected", () => {
  console.log("Mongoose connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.error("Mongoose connection error:", err.message);
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnected");
});

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("Error connecting to MongoDB:", err.message));






