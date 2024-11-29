const express = require("express");
const {
  getAllAnimals,
  getAnimalsByCategory,
  addAnimal,
} = require("../controllers/animalController");

const router = express.Router();
const { validateAnimal } = require("../middleware/validateAnimal");

router.post("/add", validateAnimal, addAnimal);


// Route to get all animals
router.get("/animals", getAllAnimals);

// Route to get animals by category
router.get("/category/:category", getAnimalsByCategory);


module.exports = router;
