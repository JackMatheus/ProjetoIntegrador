//Segunda etapa
//Apos testes finais deletar
const fs = require("fs");
const path = require ("path");

// const restaurants = require ("../data/restaurant")


module.exports = {
    index (req, res, next) {
 
        res.render('restaurants');

      },

      areas (req, res, next) {
        res.render('areas');
      }
     
    }