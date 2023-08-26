const express = require("express");
const { check, validationResult } = require("express-validator");

const Manager = require("../../models/Manager");

const router = express.Router();

// @route       GET api/manager
// @description page for manager
// @access      Public
//TODO : add adminmiddleware here so that only admins can add a manager
router.get("/", (req, res) => {
  try {
    res.send("manager route");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});

// @route       POST api/manager
// @description Adding a manager
// @access      Public
//TODO : add adminmiddleware here so that only admins can add a manager
router.post(
  "/",
  [
    check("name", "Please Enter Manager Name").not().isEmpty(),
    check("studentID", "Please Enter the student ID of Manager")
      .not()
      .isEmpty(),
    check("start", "The starting date of the manager's period").isDate(),
    check("end", "The ending Date of the manager's period").isDate(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      //* send Dates in 2023-08-26 format, otherwise error , ISO format
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, studentID, start, end } = req.body;

    try {
      // I really don't need to check if an existing manager is there with the same info, cause a manager can take dinning multiple times
      let manager;
      manager = new Manager({
        name,
        studentID,
        start,
        end,
      });
      await manager.save();

      res.send(`manager added ${name}`);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("server error");
    }
  }
);

module.exports = router;
