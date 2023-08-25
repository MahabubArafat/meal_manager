const express = require("express");
const { check, validationResult } = require("express-validator");

const adminMiddleWare = require("../../middleware/adminMiddleware");
const StudentProfile = require("../../models/StudentProfile");
const Admin = require("../../models/Admin");

const router = express.Router();

// @route       GET api/admin/
// @description Admin Page Login
// @access      Private
//TODO protect this route with middleware jwt token, password, not pin
router.get("/", adminMiddleWare, async (req, res) => {
  try {
    res.json({ msg: "welcome to admin page" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route       GET api/admin/all_student
// @description get all the student profiles
// @access      Private
//TODO protect this route with middleware jwt token, password, not pin
router.get("/all_profile", adminMiddleWare, async (req, res) => {
  try {
    const profiles = await StudentProfile.find();
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route       POST api/admin/
// @description Login as admin
// @access      Private

// @route       POST api/admin/register
// @description Register as admin
// @access      Private

module.exports = router;
