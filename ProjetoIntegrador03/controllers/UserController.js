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
    let users = await Usuario.findAll();     

    /* criando objeto para enviar adicionar no array users */
    let usuario = {...req.body};
    // console.log(usuario)
    // return
    
    /* adicionando objeto dentro do array users */
    const user = await Usuario.create(usuario);
    // console.log(user)
    // return
   
    /* cadastrando no arquivo user.js que sera nosso json de usuarios */
    // saveData(users, 'user.js');    
    res.render('create-user', { added: true });
    res.redirect('/index');
  },

  login(req, res, next){
    res.render('login');
  },

  async authenticate(req, res, next){
    let { email, password } = req.body;
  
    let user = await Usuario.findOne({ where: { email } });
    //let rezervas = await Rezerva.findAll(); 
   
    console.log(req.body)
    // return 

    console.log(password, user.password)
    // return 

       
    if(!user){
      return res.send('nada')
    //return res.render('login', { notFound: true });
    }

    //problema de !bcrypt
    if(!bcrypt.compareSync(password, user.password)){
      return res.send('nada')
    //return res.render('login', { notFound: true });
    }

    // console.log(password, user.password)
    // return 

    
    // removendo o valor propriedade password para que o usuario logado nao trafegue com sua senha
    user.password = undefined;

    // criando sessao contendo informacoes do usuario que ira se logar 
    req.session.user = user;

    res.redirect('/rezervas');
  },

  logout(req, res, next){
    req.session.destroy();
    res.redirect('/');
  }
}