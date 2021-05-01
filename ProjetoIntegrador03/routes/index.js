var express = require('express');
// const { validator } = require('sequelize/types/lib/utils/validator-extras');

var router = express.Router();

const cards = require('../data/card');
const amandas = require('../data/amanda');
/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', {cards: cards, amandas: amandas, user:req.session.user});
});

module.exports = router;
