const { body, validationResult } = require("express-validator");

exports.validateAnimal = [
  body("name").notEmpty().withMessage("Name is required"),
  body("image").isURL().withMessage("Image must be a valid URL"),
  body("category").notEmpty().withMessage("Category is required"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
