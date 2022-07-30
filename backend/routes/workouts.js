const express = require("express");
const router = express.Router();
const {getWorkouts, getWorkout, postWorkout, deleteWorkout, patchWorkout} = require("../controllers/workoutsController.js");

/*
GET /workouts
Gets all the workout document
*/
router.get("/", getWorkouts);

/*
GET /workouts/:id
Gets a single workout
*/
router.get("/:id",getWorkout);

/*
POST /workouts
Post a single workout
*/
router.post("/", postWorkout);

/*
DELETE /workouts/:id
Delete a single workout
*/
router.delete("/:id", deleteWorkout);

/*
PATCH /workouts/:id
Patch a single workout
*/
router.patch("/:id", patchWorkout);

module.exports = router;
