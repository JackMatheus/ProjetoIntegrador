var express = require('express');
var router = express.Router();

const UserController = require('../controllers/UserController');

/* retornando formulario de cadastro de usuarios */
router.get('/create', UserController.create);

router.get('/login', UserController.login);


module.exports = router;
