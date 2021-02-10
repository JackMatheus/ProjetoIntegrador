// const bcrypt = require('bcrypt');
const users = require('../data/user');
// const recipes = require('../data/recipe');
// const saveData = require('../utils/saveData');

module.exports = {
  create(req, res, next){
    res.render('create-user');
  }
}

    // estabelecimento (req, res, next){
    // res.redirect('/');}