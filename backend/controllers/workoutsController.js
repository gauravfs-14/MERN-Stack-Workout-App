const workoutModels = require("../models/WorkoutsModel.js");
const mongoose = require("mongoose")

// GET all workouts
const getWorkouts = async (req, res)=>{
   try{
    //try to find workouts from the database
    const workouts = await workoutModels.find().sort({createdAt: -1});
    return res.status(200).json(workouts);
  }catch(error){
    return res.status(404).json({error: error.message});
  }
}
//GET a workout 
const getWorkout = async(req, res)=>{
    //check if the id is valid 
  if(!mongoose.Types.ObjectId.isValid(req.params.id)){
    return res.status(404).json({message: "No records found!"});
  }
  try{
    //try to find a workout from the database
    const workout = await workoutModels.findById(req.params.id);
    if(!workout){
      return res.status(404).json({message: "No records found!"})
    }
    return res.status(200).json(workout);
  }catch(error){
    return res.status(404).json({error: error.message})
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
    return res.status(200).json(workout);
  } catch (error) {
    return res.status(400).json({error: error.message})
  }
}
//DELETE a workout 
const deleteWorkout = async(req, res) =>{
    //check if the id is valid 
   if(!mongoose.Types.ObjectId.isValid(req.params.id)){
    return res.status(404).json({message: "No records found!"});
  } 
    //check if the workout exist
  try {
   const workout = await workoutModels.findById(req.params.id);
   if(!workout){
     return res.status(404).json({error: "No records found!"});
   }
    await workoutModels.deleteOne({_id: req.params.id});
    return res.status(200).json({message: "Deleted Data Successfull!"})
  } catch (error) {
    return res.status(400).json({error: error.message});
  }
}
//PATCH a workout 
const patchWorkout = async(req, res)=>{
    //check if the id is valid 
    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        return res.status(404).json({message: "No records found!"});
    }
    try {
        const workout = await workoutModels.findOneAndUpdate({_id: req.params.id}, {...req.body});
        if(!workout){
            return res.status(404).json({message: "No records found!"});
        }
        return res.status(200).json(workout);
    } catch (error) {
       return res.status(400).json({error: error.message}) 
    }
} 

module.exports = {
  getWorkouts,
  getWorkout,
  postWorkout,
  deleteWorkout,
  patchWorkout
}
