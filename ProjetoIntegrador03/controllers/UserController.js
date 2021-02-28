var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const path = require('path');
const {check, validationResult, body} = require('express-validator');
const fs = require('fs');
const allUsers = path.join('data', 'users.json')

module.exports = {
  create(req, res, next){
    res.render('create-user');
  },

  salve(req, res, next){
    let {
      nome,
      celular,
      email,
      cep,
      logradouro,
      complemento,
      cidade,
      estado,
      senha
    } = req.body

    
    let senhaCripto = bcrypt.hashSync(senha, 12);
    let dadosJson = JSON.stringify({
      nome,
      celular,
      email,
      cep,
      logradouro,
      complemento,
      cidade,
      estado,
      senha:senhaCripto
    })
    fs.appendFileSync(allUsers, dadosJson)
    res.send(dadosJson);
  },

  
 
  login(req, res, next){
    res.render('login');
  }

}
