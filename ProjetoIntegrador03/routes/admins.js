var express = require('express');
var router = express.Router();

const AdminController = require('../controllers/AdminController');

// /* retornando formulario de adminstrador */
router.get('/create', AdminController.create);

module.exports = router;