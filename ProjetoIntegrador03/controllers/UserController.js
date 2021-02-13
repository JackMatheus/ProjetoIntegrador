const users = require('../data/user');


module.exports = {
  create(req, res, next){
    res.render('create-user');
  }
}
