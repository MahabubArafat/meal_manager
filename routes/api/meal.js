const express = require("express");
const router = express.Router();

const studentMiddleware = require("../../middleware/studentMiddleware");

const Student = require("../../models/StudentProfile");
const Transaction = require("../../models/Transactions");
const Meal = require("../../models/Meal");

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

// @route       POST api/meal/newmeal
// @description Create a meal or take a meal
// @access      Private
router.post("/newmeal", studentMiddleware, async (req, res) => {
  try {
    const user = await Student.findById(req.user.id).select("-pin");
    if (!user) {
      return res.status(400).json({ errors: [{ msg: "No User found" }] });
    }
    const currentTransaction = await Transaction.findOne({
      student: user.studentID,
    })
      .sort({ time: -1 })
      .populate("manager");

    if (!currentTransaction) {
      return res
        .status(400)
        .json({ errors: [{ msg: "No Transaction Found" }] });
    }

    const newMeal = new Meal({
      student: user.studentID,
      transaction: currentTransaction.id,
      manager: currentTransaction.manager.id,
    });

    currentTransaction.token -= 1;
    currentTransaction.daily -= 1;

    await currentTransaction.save();
    await newMeal.save();

    res.json({ currentTransaction, newMeal });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
