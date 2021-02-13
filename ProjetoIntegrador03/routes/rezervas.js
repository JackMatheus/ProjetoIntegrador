var express = require('express');
const RezervaController = require('../controllers/RezervaController');
var router = express.Router();

const rezervaController = require ("../controllers/RezervaController");
/* GET home page. */

router.get('/', rezervaController.rezerva )

router.post('/save',RezervaController.save);

// GET para excluir rezervas
router.get('/delete/:id', RezervaController.delete);

// GET para alterar rezervas - rezervas/edit/
router.get('/edit/:id', RezervaController.edit);

/* POST para alterar receita */
router.post('/update/:id', RezervaController.update);

module.exports = router;