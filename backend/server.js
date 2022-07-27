//import required dependiencies
const express = require("express");
const workoutRoutes = require("./routes/workouts");
require("dotenv").config();

//initialize the express app
const app = express();

//middlewares
app.use(express.json());

//routes
app.use("/api/workouts", workoutRoutes);

//listen to the server
app.listen(process.env.PORT, () => {
  console.log(`Listning on port ${process.env.PORT}`);
});
