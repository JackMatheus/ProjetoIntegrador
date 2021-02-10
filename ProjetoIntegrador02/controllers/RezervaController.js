
const fs = require ("fs");
const path = require ("path");
//1- Importando as rezervas
const rezervas = require("../data/rezerva");
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
        // criando um id sequncial, obtendo a quantidade de elementos no array recipes e somando +1
        let id = rezervas.length +1;
        // (if) rezerva.id==id, a resolver 
        // console.log(id);
        let rezerva = {id, ...req.body};
        // console.log(rezerva);  

        // adicionando objeto criado dentro do array rezervas
        rezervas.push(rezerva);
        // console.log(rezervas);     

        // transformando o array rezervas em um string
        let dataString = JSON.stringify(rezervas);
        // console.log(dataString);
      
        //obter o caminho ate o aquivo data/restaurants.js
        let filePath = path.join('data', 'rezerza.js');
        // console.log(filePath);      


        //escrever no arquivo restaurant.js
        fs.writeFileSync(filePath, 'module.exports = ');
        fs.appendFileSync(filePath, dataString);

        res.redirect('/rezervas');
        },

        async edit (req, res, next){
          let id = req.params.id;
          //obter a rezerva para alterar-la
          let rezerva = rezervas.find(rezerva =>rezerva.id==id);
          // console.log(rezerva);
          //Redirecionando para a view de edição - rezerva (s32,t1:23)
          res.render('edit-rezerva', {rezerva});

        },


        async update (req, res, next){
          


        },

        async delete (req, res, next){
          let id = req.params.id;   
          
        // 1 formar de remover um elemento do json
                            //  dentro do objeto encontre e compare id enviado pelo usuario é igual ao id da lista
        // let rezervaIndex = rezervas.findIndex(rezerva =>rezerva.id == id);
        // let rezervaIndex = rezervas.findIndex(rezerva =>console.log(rezerva.id==id));
        // rezervas.splice(rezervaIndex, 1);
        // console.log(rezervas);
        // transformando o array rezervas em um string
        // let dataString = JSON.stringify(rezervas);
        // console.log(dataString);

        // 2 formar de remover um elemento do json
         let rezervasFilter = rezervas.filter(rezerva => rezerva.id != id)
        //  console.log(rezervasFilter);
         
        // transformando o array rezervas em um string
         let dataString = JSON.stringify(rezervasFilter);

        //continuando
        //obter o caminho ate o aquivo data/rezervas.js
        let filePath = path.join('data', 'rezerza.js');
        // console.log(filePath);      


        //escrever no arquivo rezervas.js
        fs.writeFileSync(filePath, 'module.exports = ');
        fs.appendFileSync(filePath, dataString);

                     // objeto rezervas do front , recebe as propriedades filtradas, ja deletada
        res.render('rezervas', { rezervas: rezervasFilter, deleted: true});       

        }
    }