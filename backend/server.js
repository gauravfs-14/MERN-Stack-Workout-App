//import required dependiencies
const express = require("express");
const workoutRoutes = require("./routes/workouts");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

//initialize the express app
const app = express();

//middlewares
app.use(express.json());
app.use(cors());

//routes
app.use("/api/workouts", workoutRoutes);

//connect to database with mongoose
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen to the server
    app.listen(process.env.PORT, () => {
      console.log(`Listning on port ${process.env.PORT}`);
    });
    console.log("Connected to Database");
  })
  .catch((err) => console.error(err));
