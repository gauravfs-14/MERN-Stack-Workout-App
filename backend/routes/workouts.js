const express = require("express");
const router = express.Router();

/*
GET /wourkouts
Gets all the workout document
*/
router.get("/", (req, res) => {
  res.send("Hello Server!");
});

/*
GET /wourkouts/:id
Gets a single workout
*/
router.get("/:id", (req, res) => {
  res.send("Hello Server! This is a single workout!");
});

/*
POST /wourkouts
Post a single workout
*/
router.post("/", (req, res) => {
  res.send("Hello Server! This is a post workout!");
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
