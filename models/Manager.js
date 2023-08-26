const mongoose = require("mongoose");

const ManagerScehema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  studentID: {
    type: String,
    ref: "student",
  },
  start: {
    type: Date,
  },
  end: {
    type: Date,
  },
});

module.exports = Manager = mongoose.model("manager", ManagerScehema);
