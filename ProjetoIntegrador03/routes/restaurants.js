
var express = require('express');
var router = express.Router();
const RestaurantController = require('../controllers/RestaurantController');

router.get('/', RestaurantController.index )


module.exports = router;