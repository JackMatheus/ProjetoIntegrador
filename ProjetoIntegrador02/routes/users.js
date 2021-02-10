var express = require('express');
var router = express.Router();

/* retornando formulario de restaurant */
router.get('/', function(req, res, next) {
    // problema aqui ao fazer o console.log
    // console.log(cards);
    //teste renderizar para o front localhost 3000
    // res.json(cards)
    res.send('respond with a resource');
  });

  router.get('/:nome'), function(req, res, next){
   let nome = req.params.nome;

   res.send('Olá');
  });
  
 

// router.get('/restaurants', UserController.estabelecimento);


module.exports = router;
