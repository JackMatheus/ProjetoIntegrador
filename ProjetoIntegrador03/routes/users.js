var express = require('express');
var router = express.Router();
const path = require('path');
const {check, validationResult, body} = require('express-validator');
const fs = require('fs');

const UserController = require('../controllers/UserController');

/* retornando formulario de cadastro de usuarios */
router.get('/create', UserController.create);
router.post('/create', UserController.salve);

router.get('/login', UserController.login);


module.exports = router;
