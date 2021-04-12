// const {usuario} = require ('../models');
const {Usuario} = require ('../models');
const bcrypt = require('bcrypt');

module.exports = {
  create(req, res, next){
    res.render('create-user');
  },

  async save(req, res, next){
    // let id = users.length + 1;
    /*  criptografando a senha */
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    // let users = await Usuario.findAll(); 

    /* criando objeto para enviar adicionar no array users */
    let usuario = {...req.body};
    // console.log(usuario)
    // return
    
    /* adicionando objeto dentro do array users */
   await Usuario.create(usuario);
    // console.log(usuario)
    // return
    
    // 1- reendirizando para a view de login
    // res.render('create-user', { added: true }); 
    res.render('login', { added: true });
  },

  login(req, res, next){
    res.render('login');
  },

  async authenticate(req, res, next){
    let { email, password } = req.body;
    let user = await Usuario.findOne({ where: { email } });
    // console.log(user)
    // return
    if(!user){
    return res.render('login/authenticate', { notFound: true });
    }

    if(!bcrypt.compareSync(password, user.password)){
    return res.render('login/authenticate', { notFound: true });
    }
    
    // removendo o valor propriedade password para que o usuario logado nao trafegue com sua senha
    user.password = undefined; 

    // criando sessao contendo informacoes do usuario que ira se logar
    req.session.user = user;

    res.redirect('/');
  },

  logout(req, res, next){
    req.session.destroy();
    res.redirect('/');
  }
}