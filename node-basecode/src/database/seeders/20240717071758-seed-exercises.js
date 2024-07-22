"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("exercises", [
      {
        uuid: "uuid-1",
        name: "Push-up",
        description:
          "A bodyweight exercise in which you lower and raise your body using your arms.",
        set_of_exercise: "3 sets of 15 repetitions",
        exercise_category: 1, // Example category ID
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        uuid: "uuid-2",
        name: "Squats",
        description:
          "An exercise where a person lowers their hips from a standing position and then stands back up.",
        set_of_exercise: "3 sets of 10 repetitions",
        exercise_category: 2, // Example category ID
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        uuid: "uuid-3",
        name: "Plank",
        description:
          "An isometric core strength exercise that involves maintaining a position similar to a push-up.",
        set_of_exercise: "3 sets of 30 seconds hold",
        exercise_category: 1, // Example category ID
        created_at: new Date(),
        updated_at: new Date(),
      },
      // Add more exercises as needed
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("exercises", null, {});
  },
};
