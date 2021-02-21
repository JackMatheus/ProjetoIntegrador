// const bcrypt = require('bcrypt');
// const users = require('../data/user');
// const saveData = require('../utils/saveData');

module.exports = {
  create(req, res, next){
    res.render('create-user');
  },
 
  login(req, res, next){
    res.render('login');
  }

}
