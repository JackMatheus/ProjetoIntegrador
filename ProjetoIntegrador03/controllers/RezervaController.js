
const fs = require ("fs");
const path = require ("path");
//1- Importando as rezervas
const rezervas = require("../data/rezerva");


module.exports = {
    rezerva (req, res, next) {
 
        res.render('rezervas', {rezervas: rezervas});
      },

      // Metodo Post do agendamento
      save (req, res, next) {
     
        let id = rezervas.length +1;
    
        let rezerva = {id, ...req.body};
 
        rezervas.push(rezerva);

        let dataString = JSON.stringify(rezervas);

        let filePath = path.join('data', 'rezerza.js');

        fs.writeFileSync(filePath, 'module.exports = ');
        fs.appendFileSync(filePath, dataString);

        res.redirect('/rezervas');
        },

        async edit (req, res, next){
          let id = req.params.id;
          //obter a rezerva para alterar-la
          let rezerva = rezervas.find(rezerva =>rezerva.id==id);

          res.render('edit-rezerva', {rezerva});

        },


        async update (req, res, next){
        let id = req.params.id;
        
        let{Horario,Data,Adulto,Crianca,Setor} = req.body;
        //obter a rezerva para alterar-la
        let rezerva = rezervas.find(rezerva =>rezerva.id==id);

        //alterar as propriedades do objeto
         rezerva.Horario = Horario;
         rezerva.Data = Data;
         rezerva.Adulto = Adulto;
         rezerva.Crianca = Crianca;
         rezerva.Setor = Setor;

        // transformando o array rezervas em um string
        let dataString = JSON.stringify(rezervas);
        // console.log(dataString);
      
        //obter o caminho ate o aquivo data/restaurants.js
        let filePath = path.join('data', 'rezerza.js');
        // console.log(filePath);      


        //escrever no arquivo restaurant.js
        fs.writeFileSync(filePath, 'module.exports = ');
        fs.appendFileSync(filePath, dataString);

        res.render('edit-rezerva',{rezerva, updated: true})

        },

        async delete (req, res, next){
          let id = req.params.id;   
          
         let rezervaIndex = rezervas.findIndex(rezerva =>rezerva.id == id);
    
        rezervas.splice(rezervaIndex, 1);
 
        let dataString = JSON.stringify(rezervas);

          let filePath = path.join('data','rezerva.js');
        //escrevendo o conteundo noo arquivo rezerva.js
        fs.writeFileSync(filePath, 'module.exports = ');
        fs.appendFileSync(filePath, dataString);
        
 
        res.render('rezervas', { rezervas, deleted: true});    
      

        }
    }

