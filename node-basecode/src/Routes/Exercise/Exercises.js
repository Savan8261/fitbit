const express = require("express");
const Exercises = express.Router();
const ExercisesController = require("../../Controllers/Exercise/Exercises");
const authMiddleware = require("../../middlewares/authMiddleware");
const upload = require("../../config/upload");

// Exercise Routes
Exercises.get("/", authMiddleware, ExercisesController.GetExercises);
Exercises.get("/:id", authMiddleware, ExercisesController.GetExerciseById);
Exercises.post("/", authMiddleware, upload.fields([{ name: 'logo' }, { name: 'file' }]), ExercisesController.AddExercise);
Exercises.delete("/:id", authMiddleware, ExercisesController.DeleteExercise);
Exercises.put("/:id", authMiddleware, upload.fields([{ name: 'file' }, { name: 'logo' }]), ExercisesController.UpdateExercise);
Exercises.get("/category/:id", authMiddleware, ExercisesController.GetExerceisesByCategoryId);

module.exports = Exercises;
