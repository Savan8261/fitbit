"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("promo_codes", [
      {
        promo_code: "SUMMER2024",
        discount_unit: "percentage",
        discount_value: 15,
        start_date: new Date("2024-07-01"),
        expiry_date: new Date("2024-09-30"),
        status: "active",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        promo_code: "SAVE50NOW",
        discount_unit: "fixed",
        discount_value: 50,
        start_date: new Date("2024-08-01"),
        expiry_date: new Date("2024-12-31"),
        status: "active",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        promo_code: "FALLSALE",
        discount_unit: "percentage",
        discount_value: 20,
        start_date: new Date("2024-09-15"),
        expiry_date: new Date("2024-10-15"),
        status: "inactive",
        created_at: new Date(),
        updated_at: new Date(),
      },
      // Add more promo codes as needed
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // Remove all inserted data
    await queryInterface.bulkDelete("promo_codes", null, {});
  },
};
