//1- Importando as rezervas ('../models/Rezerva')
const {Rezerva} = require ('../models');
var express = require('express');
var router = express.Router();
const mesas = require('../data/mesa');
const moment = require("moment");
const fs = require ("fs");

module.exports = {
    async rezerva (req, res, next) {
      let rezervas = await Rezerva.findAll(); 
      // s42 t-55 - modulo Rezerva - buscando informação banco de dados
      // console.log(rezervas)
      // return                  //cada evento de rezerva ?
        // rezervas = rezervas.map(function(value){
        //   let day = value.Data.getDate();
        //   let month = value.Data.getMonth()+1;
        //   let year = value.Data.getFullYear();          
        //   value.DataString = day + "/" + month + "/" + year;          
          
        //   return value
        // })
        //console.log(Rezervas.Horario)
        res.render('rezervas', {rezervas});
      },

        async save (req, res, next) {
        let rezerva = {...req.body};
        await Rezerva.create(rezerva);
        res.redirect('/rezervas');
        },

        async edit (req, res, next){
          let id = req.params.id;
          let rezerva = await Rezerva.findByPk(id); // buscando a informação do módulo -  Rezerva
          res.render('edit-rezerva', {rezerva, rezerva});
        },


        async update (req, res, next){
        let id = req.params.id;
        // console.log(id);
        // return;
        
        let { Horario, Data, Adulto, Crianca, Setor, CreatedAt, UpdatedAt } = req.body;
        let rezerva = await Rezerva.findByPk(id);
         rezerva.Horario = Horario;
         rezerva.Data = Data;
         rezerva.Adulto = Adulto;
         rezerva.Crianca = Crianca;
         rezerva.Setor = Setor;
         rezerva.CreatedAt = CreatedAt;
         rezerva.UpdatedAt = UpdatedAt;          

        //Salvando a atualização do registro
        await rezerva.save();
        // res.render('edit-rezerva',{rezerva, updated: true});
        res.redirect('/rezervas');    
        },

        async delete (req, res, next){
        let id = req.params.id; 
        let rezerva = await Rezerva.findByPk(id);
        //  console.log(rezerva);
        //  return

        rezerva.destroy();

        res.redirect('/rezervas');    

        },

        //3- novo metodo de seleção das mesas
        async areas (req, res, next){
          // console.log("oi")
          // return         
          res.render('areas', {mesas: mesas});

        },

        async mesa (req,res,next){
          //metodo em teste similar ao save
          // let id = req.params.id;   
          // let rezerva = await Rezerva.findByPk(id);
          let rezerva = {...req.body};
          await Rezerva.create(rezerva);
          res.redirect('/restaurants');

        }
     
    }
