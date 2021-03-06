'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.createTable('usuarios', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: Sequelize.STRING,
      celular: Sequelize.INTEGER,
      endereco: Sequelize.STRING,
      rezervas: Sequelize.INTEGER,
      email: Sequelize.STRING,
      password: Sequelize.STRING,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,

    });
    
  },


  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('usuarios');
  }
};
