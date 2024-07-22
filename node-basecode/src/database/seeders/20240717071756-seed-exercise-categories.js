"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Insert categories with self-referencing for sub_category
    await queryInterface.bulkInsert("exercise_categories", [
      {
        uuid: "uuid-1",
        name: "Upper Body",
        sub_category: null, // This is the top-level category, so sub_category is null
        status: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        uuid: "uuid-2",
        name: "Chest",
        sub_category: 1, // Sub-category of Upper Body, referencing id of Upper Body category
        status: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        uuid: "uuid-3",
        name: "Back",
        sub_category: 1, // Sub-category of Upper Body, referencing id of Upper Body category
        status: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        uuid: "uuid-4",
        name: "Legs",
        sub_category: null, // Another top-level category, so sub_category is null
        status: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        uuid: "uuid-5",
        name: "Quadriceps",
        sub_category: 4, // Sub-category of Legs, referencing id of Legs category
        status: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      // Add more categories as needed
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // Remove all inserted data
    await queryInterface.bulkDelete("exercise_categories", null, {});
  },
};
