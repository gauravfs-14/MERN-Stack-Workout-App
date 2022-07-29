const express = require("express");
const router = express.Router();
const workoutModels = require("../models/WorkoutsModel.js");

/*
GET /wourkouts
Gets all the workout document
*/
router.get("/",async (req, res) => {
  try{
  //try to find workouts from the database
  const workouts = await workoutModels.find();
  res.status(200).json(workouts);
  }catch(error){
    res.status(404).json({error: error.message});
  }
});

/*
GET /wourkouts/:id
Gets a single workout
*/
router.get("/:id", async(req, res) => {
  try{
  //try to find a workout from the database
  const workout = await workoutModels.findById(req.params.id);
  res.status(200).json(workout);
  }catch(error){
    res.status(404).json({error: error.message})
  }
});

/*
POST /wourkouts
Post a single workout
*/
router.post("/",async (req, res) => {
  // extract body data from the request
  const {title, load, reps} = req.body;
  try {
    // try to post the data to the database
    const workout = await workoutModels.create({
      title, load, reps
    })
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({error: error.message})
  }
});

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
