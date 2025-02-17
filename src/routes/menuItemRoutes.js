const express = require("express");
const foodController = require("../controllers/foodController");
const router = express.Router();



router.get('/search',foodController.searchFood);
router.get('/restaurant/:restaurantId',foodController.getMenuItemByRestaurantId);

module.exports = router;
