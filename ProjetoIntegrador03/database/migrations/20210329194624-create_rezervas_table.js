'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('rezervas', { 
        id: {
          type: Sequelize.INTEGER ,
          primaryKey: true,
          autoIncrement: true,
        },

        Horario: Sequelize.TIME,
        Data: Sequelize.DATE,
        Adulto: Sequelize.INTEGER,
        Crianca: Sequelize.INTEGER,
        Setor: Sequelize.STRING,
        CreatedAt: Sequelize.DATE,
        UpdatedAt: Sequelize.DATE,       
      
      });
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('rezervas');
    }
};