const workoutModels = require("../models/WorkoutsModel.js");

// GET all workouts
const getWorkouts = async (req, res)=>{
   try{
    //try to find workouts from the database
    const workouts = await workoutModels.find();
    res.status(200).json(workouts);
  }catch(error){
    res.status(404).json({error: error.message});
  }
}
//GET a workout 
const getWorkout = async(req, res)=>{
  try{
    //try to find a workout from the database
    const workout = await workoutModels.findById(req.params.id);
    res.status(200).json(workout);
  }catch(error){
    res.status(404).json({error: error.message})
  }
}
//POST a workout 
const postWorkout = async(req, res)=>{
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

}

module.exports = {
  getWorkouts,
  getWorkout,
  postWorkout
}
