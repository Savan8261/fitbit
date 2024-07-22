"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("countries", [
      {
        name: "United States",
        emoji: "🇺🇸",
        country_code: "US",
        iso_code: "USA",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "United Kingdom",
        emoji: "🇬🇧",
        country_code: "GB",
        iso_code: "GBR",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "France",
        emoji: "🇫🇷",
        country_code: "FR",
        iso_code: "FRA",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Germany",
        emoji: "🇩🇪",
        country_code: "DE",
        iso_code: "DEU",
        created_at: new Date(),
        updated_at: new Date(),
      },
      // Add more countries as needed
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("countries", null, {});
  },
};
