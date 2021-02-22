//1- Importando as rezervas
const rezervas = require("../data/rezerva");
const saveData = require ("../utils/saveData");
// importou sozinho o metodo delete gerando um erro
// const { delete } = require("../routes/rezervas");

module.exports = {
    rezerva (req, res, next) {
        // problema aqui ao fazer o console.log
        // console.log(rezervas);
        //teste renderizar para o front localhost 3000
        //res.json(rezervas)
        //Como fazer para reenderizar para o front ( res.render a view => index.ejs)
        //                rezervas: Propriedade x Valor
                                // 2- Variavel vs valor 
        res.render('rezervas', {rezervas: rezervas});
      },

      // Metodo Post do agendamento
      save (req, res, next) {
        // console.log(req.body);
        // criando um id sequncial, obtendo a quantidade de elementos no array recipes e somando +1 (correção)
          // let rezerva = {id, ...req.body};
          // let id = req.params.id;
          // rezerva = rezervas.find(rezerva => rezerva.id == id);
          // if (rezerva.id==id){
          // let id = rezervas.length +1;}else{};
         
        // console.log(req.body);
        // criando um id sequncial, obtendo a quantidade de elementos no array recipes e somando +1
        let id = rezervas.length +1;
        // (if) rezerva.id==id, a resolver 
        // console.log(id);
        let rezerva = {id, ...req.body};
        // console.log(rezerva);  

        // adicionando objeto criado dentro do array rezervas
        rezervas.push(rezerva);
        // console.log(rezervas); 

        //excecutando funcao que salva alteraçoes dos registros no arquivo rezerva.js
        // primeiro paramento (array rezervas) segundo paramento(o nome do arquivo rezervas.js)
        saveData(rezervas, 'rezerva.js');

        res.redirect('/rezervas');
        },

        async edit (req, res, next){
          let id = req.params.id;
          //obter a rezerva para alterar-la
          let rezerva = rezervas.find(rezerva => rezerva.id == id);
          // console.log(rezerva);
          //Redirecionando para a view de edição - rezerva (s32,t1:23)
          res.render('edit-rezerva', {rezerva});

        },


        async update (req, res, next){
        let id = req.params.id;
        
        let{Horario,Data,Adulto,Crianca,Setor} = req.body;
        //obter a rezerva para alterar-la
        let rezerva = rezervas.find(rezerva => rezerva.id == id);

        //alterar as propriedades do objeto
         rezerva.Horario = Horario;
         rezerva.Data = Data;
         rezerva.Adulto = Adulto;
         rezerva.Crianca = Crianca;
         rezerva.Setor = Setor;

        //excecutando funcao que salva alteraçoes dos registros no arquivo rezerva.js
        // primeiro paramento (array rezervas) segundo paramento(o nome do arquivo rezervas.js)
        saveData(rezervas, 'rezerva.js');

        res.render('edit-rezerva',{rezerva, updated: true});
        //s32 -t:208
        // res.render('edit-rezerva',{rezerva, updated: true});

        },

        async delete (req, res, next){
          let id = req.params.id;   
          
        // 2 formar de remover um elemento do json
         let rezervasFilter = rezervas.filter(rezerva => rezerva.id != id);
        //  console.log(rezervasFilter);
         
        //excecutando funcao que salva alteraçoes dos registros no arquivo rezerva.js
        // primeiro paramento (array rezervas) segundo paramento(o nome do arquivo rezervas.js)
        saveData(rezervasFilter, 'rezerva.js');
                     // objeto rezervas do front , recebe as propriedades filtradas, ja deletada
        res.render('rezervas', { rezervas: rezervasFilter, deleted: true});       

        }
    }
