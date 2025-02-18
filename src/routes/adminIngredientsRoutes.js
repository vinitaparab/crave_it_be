const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/authenticate.js");
const ingredientController = require("../controllers/ingredientController.js");

router.post(
  "/category",
  authenticate,
  ingredientController.createIngredientsCategory
);
router.post("", authenticate, ingredientController.createIngredient);
router.put("/:id/stoke", authenticate, ingredientController.updateStoke);
router.get(
  "/restaurant/:id",
  authenticate,
  ingredientController.restaurantsIngredient
);
router.get(
  "/restaurant/:id/category",
  authenticate,
  ingredientController.restaurantsIngredient
);

module.exports = router;
