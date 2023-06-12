const express = require("express");
const { check, validationResult } = require("express-validator");

const StudentProfile = require("../../models/StudentProfile");

const router = express.Router();

router.post(
  "/",
  check("name", "Provide Your Full Name").not().isEmpty(),
  check("studentID", "Student ID is required").not().isEmpty(),
  check("email", "Provide your CUET mail").isEmail(),
  check("phoneNumber", "Phone Number is required").not().isEmpty(),
  check("roomNumber", "Room Number is required").not().isEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, studentID, email, phoneNumber, roomNumber } = req.body;
    try {
      //check someone with same id exists
      let user = await StudentProfile.findOne(studentID);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
