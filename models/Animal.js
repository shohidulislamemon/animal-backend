const mongoose = require("mongoose");

const AnimalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  
},
{ timestamps: true }
);

module.exports = mongoose.model("Animal", AnimalSchema);
