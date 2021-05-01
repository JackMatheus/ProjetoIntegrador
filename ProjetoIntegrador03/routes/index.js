var express = require('express');
// const { validator } = require('sequelize/types/lib/utils/validator-extras');

var router = express.Router();

const cards = require('../data/card');
const amandas = require('../data/amanda');
/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', {cards: cards, amandas: amandas, user:req.session.user});
});

// 2-rota
router.get('/search', function(req,res,next){
  const search = req.query.search.toLowerCase();
  
  //back
  const restaurants = cards.filter(restaurant => restaurant.titulo.toLowerCase().includes(search))
  // console.log(restaurants);

  //back - to Front (no criado)
  res.render('search', {restaurants, user:req.session.user})
})

module.exports = router;
