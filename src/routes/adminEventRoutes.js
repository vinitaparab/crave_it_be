const express = require("express");
const eventController = require("../controllers/eventController");
const router = express.Router();


router.post( '/restaurant/:restaurantId',eventController.createEvents);

router.get('/restaurant/:restaurantId',eventController.findRestaurantsEvents);
router.delete('/:id',eventController.deleteEvents);

module.exports = router;
