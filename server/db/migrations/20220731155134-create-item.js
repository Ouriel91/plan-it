'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      itemId: {
        type: Sequelize.STRING
      },
      eventId: {
        type: Sequelize.STRING
      },
      itemName: {
        type: Sequelize.STRING
      },
      bringName: {
        type: Sequelize.STRING
      },
      quantity: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
     
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Items');
  }
};