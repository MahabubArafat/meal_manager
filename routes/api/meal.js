const express = require("express");
const router = express.Router();

const studentMiddleware = require("../../middleware/studentMiddleware");

const Student = require("../../models/StudentProfile");
const Transaction = require("../../models/Transactions");
const Manager = require("../../models/Manager");

// @route       GET api/meal
// @description Get all meals taken by this user
// @access      Private
//TODO All past meal intakes will show up here
router.get("/", studentMiddleware, async (req, res) => {
  try {
    res.send("meal route. all past meal intakes will show up here");
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server");
  }
});

module.exports = router;
