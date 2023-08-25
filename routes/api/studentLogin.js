const express = require("express");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

const StudentProfile = require("../../models/StudentProfile");

const router = express.Router();

// @route       GET api/student/login
// @description Authorization for student
// @access      Public
router.get("/", async (req, res) => {
  try {
    res.json({ msg: "login page" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route       POST api/student/login
// @description Authorization for student
// @access      Public
router.post(
  "/",
  [
    check("studentID", "Please Enter Your Student ID").not().isEmpty(),
    check("pin", "Please Enter Your pin").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { studentID, pin } = req.body;

    try {
      let user = await StudentProfile.findOne({ studentID });
      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });
      }
      const isPinMatch = await bcrypt.compare(pin, user.pin);
      if (!isPinMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });
      }

      //* studentID and Pin match, so return the jwt
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecretToken"),
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
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
