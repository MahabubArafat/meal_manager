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
  "/login",
  [
    check("studentID", "Please Enter Your Student ID").not().isEmpty(),
    check("pin", "Please Enter Your pin").not().isEmpty(),
  ],
  async (req, res) => {
    try {
      res.send("auth route");
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
