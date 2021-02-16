var express = require('express');
var router = express.Router();

const RezervaController = require ("../controllers/RezervaController");
/* GET home page. */
// (RestaurantController.index)rota vs oque quer que aconteça quando a rota for processada; (?)
router.get('/', RezervaController.rezerva )
// Para acessar
// localhost:3000/restaurants

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

module.exports = router;