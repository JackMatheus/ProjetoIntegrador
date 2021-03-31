const {Rezerva} = require ('../models');

module.exports = {
    async rezerva (req, res, next) {
      let rezervas = await Rezerva.findAll();
      res.render('rezervas', {rezervas, rezervas});
      },

        async save (req, res, next) {      
        let rezerva = {...req.body};        
        await Rezerva.create(rezerva);
        res.redirect('/rezervas');
        },

        async edit (req, res, next){
          let id = req.params.id;
          let rezerva = await Rezerva.findByPk(id);
          res.render('edit-rezerva', {rezerva, rezerva});

        },


        async update (req, res, next){
        let id = req.params.id;
                
        let { Horario, Data, Adulto, Crianca, Setor, CreatedAt, UpdatedAt } = req.body;
        let rezerva = await Rezerva.findByPk(id);
        
         rezerva.Horario = Horario;
         rezerva.Data = Data;
         rezerva.Adulto = Adulto;
         rezerva.Crianca = Crianca;
         rezerva.Setor = Setor;
         rezerva.CreatedAt = CreatedAt;
         rezerva.UpdatedAt = UpdatedAt;

        await rezerva.save();

        res.render('edit-rezerva',{rezerva, updated: true});
        
        },

        async delete (req, res, next){
         let id = req.params.id;   
         let rezerva = await Rezerva.findByPk(id);
       
        rezerva.destroy();

        res.redirect('/rezervas');    

        }
    }
