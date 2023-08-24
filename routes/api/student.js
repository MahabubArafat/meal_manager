const express = require("express");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const config = require("config");

const StudentProfile = require("../../models/StudentProfile");

const router = express.Router();

// @route       GET api/student/register
// @description Create a student Profile
// @access      Private
//TODO : secure this route by middleware pin verification
router.post(
  "/register",
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
    const { name, studentID, email, phoneNumber, roomNumber, hallName } =
      req.body;
    try {
      //check someone with same id exists
      let user = await StudentProfile.findOne({ studentID });
      if (user) {
        return res.status(400).json({ msg: "User Exists" });
      }
      const pin = Math.floor(Math.random() * 8999 + 1000);
      user = new StudentProfile({
        name,
        studentID,
        email,
        phoneNumber,
        roomNumber,
        hallName,
        pin,
      });
      await user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecretToken"),
        { expiresIn: 3600 },
        (error, token) => {
          if (error) throw error;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
