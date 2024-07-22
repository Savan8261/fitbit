"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("faqs", [
      {
        uuid: "uuid-1",
        question: "What is your return policy?",
        answer:
          "Our return policy allows for returns up to 30 days after purchase.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        uuid: "uuid-2",
        question: "How do I track my order?",
        answer:
          "You can track your order by logging into your account on our website.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        uuid: "uuid-3",
        question: "Do you offer international shipping?",
        answer: "Yes, we offer international shipping to most countries.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      // Add more FAQs as needed
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("faqs", null, {});
  },
};
