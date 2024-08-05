'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn(
          'exercises',
          'logo',
          {
            type: Sequelize.DataTypes.STRING,
            after: 'description' // Adding 'logo' after 'description'
          },
          { transaction: t },
        ),
        queryInterface.addColumn(
          'exercises',
          'file',
          {
            type: Sequelize.DataTypes.STRING,
            after: 'logo' // Adding 'file' after 'logo'
          },
          { transaction: t },
        ),
        queryInterface.addColumn(
          'exercises',
          'type',
          {
            type: Sequelize.DataTypes.TINYINT,
            after: 'file' // Adding 'type' after 'file'
          },
          { transaction: t },
        ),
      ]);
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('exercises', 'logo', { transaction: t }),
        queryInterface.removeColumn('exercises', 'file', { transaction: t }),
        queryInterface.removeColumn('exercises', 'type', { transaction: t }),
      ]);
    });
  },
};
