const express = require("express");
const FAQs = express.Router();
const FAQsController = require("../../Controllers/FAQs/faqs");

// FAQ Routes
FAQs.get("/", FAQsController.GetFAQs);
FAQs.get("/:id", FAQsController.GetFAQsById);
FAQs.post("/", FAQsController.AddFAQs);
FAQs.delete("/:id", FAQsController.DeleteFAQs);
FAQs.put("/:id", FAQsController.UpdateFAQs);

module.exports = FAQs;
