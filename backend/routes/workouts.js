const express = require("express");
const router = express.Router();
const {getWorkouts, getWorkout, postWorkout} = require("../controllers/workoutsController.js");

/*
GET /wourkouts
Gets all the workout document
*/
router.get("/", getWorkouts);

/*
GET /wourkouts/:id
Gets a single workout
*/
router.get("/:id",getWorkout);

/*
POST /wourkouts
Post a single workout
*/
router.post("/", postWorkout);

/*
DELETE /wourkouts/:id
Delete a single workout
*/
router.delete("/:id", (req, res) => {
  res.send("Hello Server! This is a delete workout!");
});

/*
PATCH /wourkouts/:id
Patch a single workout
*/
router.patch("/:id", (req, res) => {
  res.send("Hello Server! This is a update workout!");
});

module.exports = router;
