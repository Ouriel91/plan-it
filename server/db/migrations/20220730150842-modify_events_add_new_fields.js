'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    
      await queryInterface.addColumn(
        'Events', // table name
        'eventId', // new field name
        {
          type: Sequelize.STRING,
          allowNull: true,
        },
      )
    
  
  },

  async down(queryInterface, Sequelize) {
    // logic for reverting the changes
      await queryInterface.removeColumn('Events', 'eventId')
  },
};