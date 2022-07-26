//import required dependiencies
const express = require("express");
require("dotenv").config();

//initialize the express app
const app = express();

//routes

/*
GET /wourkouts
Gets all the workout document
*/
app.get("/workouts", (req, res) => {
  res.send("Hello Server!");
});

//listen to the server
app.listen(process.env.PORT, () => {
  console.log(`Listning on port ${process.env.PORT}`);
});
