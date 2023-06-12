const express = require("express");

const StudentProfile = require("../../models/StudentProfile");

const router = express.Router();

// @route       GET api/admin/
// @description Admin Page Login
// @access      Private
//TODO protect this route with middleware jwt token, password, not pin
router.get("/", async (req, res) => {
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
router.get("/all_profile", async (req, res) => {
  try {
    const profiles = await StudentProfile.find();
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
