'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.createTable('users', { 
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
      password: Sequelize.INTEGER,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,

    });
    
  },


  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('users');
  }
};
