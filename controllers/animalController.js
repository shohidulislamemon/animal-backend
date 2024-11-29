const Animal = require("../models/Animal");

// Fetch all animals
exports.getAllAnimals = async (req, res) => {
  try {
    const animals = await Animal.find();
    res.status(200).json(animals);
  } catch (error) {
    console.error("Error fetching all animals:", error);
    res.status(500).json({ error: "Failed to fetch animals" });
  }
};

// Fetch animals by category
exports.getAnimalsByCategory = async (req, res) => {
  const { category } = req.params;

  try {
    const animals = await Animal.find({ category });
    if (animals.length === 0) {
      return res.status(404).json({ message: `No animals found in the "${category}" category.` });
    }
    res.status(200).json(animals);
  } catch (error) {
    console.error(`Error fetching animals by category "${category}":`, error);
    res.status(500).json({ error: "Failed to fetch animals by category" });
  }
};

// Add a new animal
exports.addAnimal = async (req, res) => {
  const { name, image, category,  } = req.body;

  try {
    const newAnimal = new Animal({ name, image, category });
    const savedAnimal = await newAnimal.save();
    res.status(201).json(savedAnimal);
  } catch (error) {
    console.error("Error adding animal:", error);
    res.status(500).json({ error: "Failed to add the animal" });
  }
};


