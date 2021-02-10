var express = require('express');
var router = express.Router();

const cards = require('../data/card');
/* GET home page. */
router.get('/', function(req, res, next) {
  // problema aqui ao fazer o console.log
  // console.log(cards);
  //teste renderizar para o front localhost 3000
  //res.json(cards)
  //Como fazer para reenderizar para o front ( res.render a view => index.ejs)
  //          Cards: Propriedade x Valor
  res.render('index', { cards: cards });
});

module.exports = router;
