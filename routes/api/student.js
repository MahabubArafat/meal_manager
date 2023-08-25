const express = require("express");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

const StudentProfile = require("../../models/StudentProfile");

const router = express.Router();

// @route       POST api/student/register
// @description Register a student
// @access      Public
//TODO : secure this route by middleware pin verification
router.post(
  "/register",
  [
    check("name", "Provide Your Full Name").not().isEmpty(),
    check("studentID", "Student ID is required").not().isEmpty(),
    check("email", "Provide your CUET mail").isEmail(),
    check("phoneNumber", "Phone Number is required").not().isEmpty(),
    check("roomNumber", "Room Number is required").not().isEmpty(),
    check("pin", "Enter a Pin that you will remember").isLength({ min: 4 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, studentID, email, phoneNumber, roomNumber, hallName, pin } =
      req.body;
    try {
      //check someone with same id exists
      let user = await StudentProfile.findOne({ studentID });
      if (user) {
        return res.status(400).json({ msg: "User Exists" });
      }
      // const pin = Math.floor(Math.random() * 8999 + 1000);

      user = new StudentProfile({
        name,
        studentID,
        email,
        phoneNumber,
        roomNumber,
        hallName,
        pin,
      });

      // Hashing the pin
      const salt = await bcrypt.genSalt(10);
      user.pin = await bcrypt.hash(pin, salt);

      await user.save();

      // this id is the mongodb's object id
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
