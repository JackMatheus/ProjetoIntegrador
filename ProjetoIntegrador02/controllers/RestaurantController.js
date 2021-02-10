//Segunda etapa
const fs = require("fs");
const path = require ("path");

const restaurants = require ("../data/restaurant")


module.exports = {
    index (req, res, next) {
        // problema aqui ao fazer o console.log
        // console.log(cards);
        //teste renderizar para o front localhost 3000
        //res.json(cards)
        //Como fazer para reenderizar para o front ( res.render a view => index.ejs)
       
        res.render('restaurants');
        //                    Cards: Propriedade x Valor (problema1)
        // res.render('restaurants', {restaurants: restaurants});
      }
     
    }