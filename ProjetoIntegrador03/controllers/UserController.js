var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const users = require('../data/users');
const path = require('path');
const {check, validationResult, body} = require('express-validator');
const fs = require('fs');
const allUsers = path.join('data', 'users.json')
const saveData = require('../utils/saveData');

module.exports = {
  create(req, res, next){
    res.render('create-user');
  },

  salve(req, res, next){
    
    let id = users.length + 1;
    req.body.senha = bcrypt.hashSync(req.body.senha, 10);

    let user = { id, ...req.body };
    users.push(user);
    saveData(users, 'users.js');
    // Após salvar os dados, será configurada uma sessão com o nome do usuário
    // O usuário será redirecionado
    let nomeSessao = req.body.nome
    req.session.user = nomeSessao;
   
    res.render('create-user', { user: req.session.user})

  },
    
  login(req, res, next){
    res.render('login');
  }

}
