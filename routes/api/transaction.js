const express = require("express");
const uuid = require("uuid");
const studentMiddleware = require("../../middleware/studentMiddleware");

const router = express.Router();

const StudentProfile = require("../../models/StudentProfile");
const Manager = require("../../models/Manager");
const Transaction = require("../../models/Transactions");

// @route       GET api/transaction
// @description View a transaction
// @access      Private
//TODO add student middleware
router.get("/", studentMiddleware, async (req, res) => {
  res.send(
    "transaction route that will show how many tokens left and the dates and other stuffs"
  );
});

// @route       POST api/transaction
// @description Register a transaction
// @access      Private
router.get("/newtransaction", studentMiddleware, async (req, res) => {
  try {
    const user = await StudentProfile.findById(req.user.id).select("-pin");

    const currentManager = await Manager.findOne().sort({ end: -1 }).exec();

    if (!currentManager) {
      return res.status(404).json({ errors: [{ msg: "There is no manager" }] });
    }

    const newTransaction = new Transaction({
      student: user.studentID,
      transactionID: uuid.v4(), //creates a unique id
      manager: currentManager.id, // attaching the object id of the document
      token: 60,
    });

    await newTransaction.save();

    res.json(newTransaction);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
