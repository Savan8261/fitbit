"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("plans", [
      {
        uuid: "uuid-1",
        name: "Plan 1",
        type: "1",
        interval: 1,
        interval_count: 1,
        price: 100,
        currency: "USD",
        features: "Features for Plan 1",
        status: "1",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        uuid: "uuid-2",
        name: "Plan 2",
        type: "2",
        interval: 1,
        interval_count: 1,
        price: 200,
        currency: "USD",
        features: "Features for Plan 2",
        status: "1",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        uuid: "uuid-3",
        name: "Plan 3",
        type: "3",
        interval: 1,
        interval_count: 1,
        price: 300,
        currency: "USD",
        features: "Features for Plan 3",
        status: "1",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        uuid: "uuid-4",
        name: "Plan 4",
        type: "4",
        interval: 1,
        interval_count: 1,
        price: 400,
        currency: "USD",
        features: "Features for Plan 4",
        status: "1",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("plans", null, {});
  },
};
