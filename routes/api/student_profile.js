const express = require("express");
const { check, validationResult } = require("express-validator");

const StudentProfile = require("../../models/StudentProfile");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
