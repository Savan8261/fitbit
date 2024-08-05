const express = require("express");
const DietPlan = express.Router();
const DietPlanController = require("../../Controllers/DietPlan/dietPlan");
const authMiddleware = require("../../middlewares/authMiddleware");



// DietPlan Routes
DietPlan.get("/", authMiddleware, DietPlanController.GetDietPlan);
DietPlan.get("/:id", authMiddleware, DietPlanController.GetDietPlanById);
DietPlan.post("/", authMiddleware, DietPlanController.AddDietPlan);
DietPlan.delete("/:id", authMiddleware, DietPlanController.DeleteDietPlan);
DietPlan.put("/:id", authMiddleware, DietPlanController.UpdateDietPlan);
DietPlan.get("/user/:id", authMiddleware, DietPlanController.GetDietPlanByUserId);


module.exports = DietPlan;