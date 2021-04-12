
var express = require('express');
var router = express.Router();
const RestaurantController = require('../controllers/RestaurantController');

// const restaurantController = require ("../controllers/RestaurantController");

/* GET home page. */
// (RestaurantController.index)rota vs oque quer que aconteça quando a rota for processada;
router.get('/', RestaurantController.index )

// 2 - nova rota das mesas
// (RestaurantController.mesa)rota vs oque quer que aconteça quando a rota for processada; (?)
router.get('/restaurants/areas', RestaurantController.areas )
// Para acessar
// localhost:3000/restaurants

module.exports = router;