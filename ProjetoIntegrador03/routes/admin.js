var express = require('express');
const AdminControllers = require('../controllers/AdminControllers');
var router = express.Router();
const RestaurantController = require('../controllers/AdminControllers');

router.get('/', AdminControllers.index )


module.exports = router;