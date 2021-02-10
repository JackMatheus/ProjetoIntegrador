var express = require('express');
const RezervaController = require('../controllers/RezervaController');
var router = express.Router();

const rezervaController = require ("../controllers/RezervaController");
/* GET home page. */
// (RestaurantController.index)rota vs oque quer que aconteça quando a rota for processada; (?)
router.get('/', rezervaController.rezerva )
// Para acessar
// localhost:3000/restaurants

// POST salvar rezerva
// router.post('/save', rezervaController.save);
router.post('/save',RezervaController.save);

// GET para excluir rezervas
router.get('/delete/:id', RezervaController.delete);

// GET para alterar rezervas - rezervas/edit/
router.get('/edit/:id', RezervaController.edit);

module.exports = router;