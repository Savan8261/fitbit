const express = require("express");
const legalAgreement = express.Router();
const legalAgreementController = require("../../Controllers/LegalAgreement/legalAgreement");

// LegalAgreement Routes
legalAgreement.get("/", legalAgreementController.GetLegalAgreement);
legalAgreement.get("/:id", legalAgreementController.GetLegalAgreementById);
legalAgreement.post("/", legalAgreementController.AddLegalAgreement);
legalAgreement.delete("/:id", legalAgreementController.DeleteLegalAgreement);
legalAgreement.put("/:id", legalAgreementController.UpdateLegalAgreement);

module.exports = legalAgreement;
