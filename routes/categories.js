const express = require("express");
const Category = require("../models/Category");
const Animal = require("../models/Animal");

const router = express.Router();


// Fetch animals by category
router.get("/category/:category", async (req, res) => {
  const { category } = req.params;
  try {
    const animals = await Animal.find({ category }); // Query the database by category
    if (animals.length === 0) {
      return res.status(404).json({ message: "No animals found in this category" });
    }
    res.json(animals);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch animals by category" });
  }
});


router.post("/", async (req, res) => {
  try {
    const { name  } = req.body; 
    const category = new Category({ name });
    await category.save();
    res.json(category);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});






module.exports = router;

