"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("legal_agreements", [
      {
        uuid: "uuid-1",
        title: "Privacy Policy",
        content: "This is the privacy policy content.",
        type: "1", // 1: Privacy Policies
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        uuid: "uuid-2",
        title: "Terms & Conditions",
        content: "These are the terms and conditions.",
        type: "2", // 2: Terms & Conditions
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        uuid: "uuid-3",
        title: "About Us",
        content: "Learn more about our company.",
        type: "3", // 3: About Us
        created_at: new Date(),
        updated_at: new Date(),
      },
      // Add more legal agreements as needed
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("legal_agreements", null, {});
  },
};
