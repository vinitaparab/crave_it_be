const express = require("express");
const eventController = require("../controllers/eventController");
const router = express.Router();


router.get('',eventController.findAllEvents);

module.exports = router;
