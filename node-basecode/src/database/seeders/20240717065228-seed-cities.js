"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("cities", [
      {
        name: "New York",
        country_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Los Angeles",
        country_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "London",
        country_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Paris",
        country_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      // Add more cities as needed
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("cities", null, {});
  },
};
