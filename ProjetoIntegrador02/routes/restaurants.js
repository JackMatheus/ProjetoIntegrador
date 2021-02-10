
var express = require('express');
var router = express.Router();
const RestaurantController = require('../controllers/RestaurantController');

// const restaurantController = require ("../controllers/RestaurantController");

/* GET home page. */
// (RestaurantController.index)rota vs oque quer que aconteça quando a rota for processada;
router.get('/', RestaurantController.index )
// Para acessar
// localhost:3000/restaurants

// POST salvar rezerva
// router.post('/save', RestaurantController.save);

module.exports = router;