var express = require('express');
var router = express.Router();
// const mesas = require('../data/mesa');

const RezervaController = require ("../controllers/RezervaController");
/* GET home page. */
// (RestaurantController.index)rota vs oque quer que aconteça quando a rota for processada; (?)
router.get('/', RezervaController.rezerva )

// POST salvar rezerva
// router.post('/save', rezervaController.save);
router.post('/save',RezervaController.save);

// GET para excluir rezervas
router.get('/delete/:id', RezervaController.delete);

// GET para alterar rezervas - rezervas/edit/
// router.get('/edit/:id', RezervaController.edit);
router.get('/edit/:id', RezervaController.edit);

/* POST para alterar receita */
router.post('/update/:id', RezervaController.update);

/* retornando formulario de areas*/
router.get('/areas', RezervaController.areas);

/* GET home page. */
// router.get('/areas', function(req, res, next) {
  // problema aqui ao fazer o console.log
//   console.log(mesas);
  //teste renderizar para o front localhost 3000
  //res.json(cards)
  //Como fazer para reenderizar para o front ( res.render a view => index.ejs)
  //          Cards: Propriedade x Valor
//   res.render('area', { mesas: mesas });
// });

module.exports = router;