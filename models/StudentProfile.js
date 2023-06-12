const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  studentID: {
    type: Number,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  roomNumber: {
    type: String,
    required: true,
  },
  hallName: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  pin: {
    type: String,
  },
});

module.exports = Student = mongoose.model("student", StudentSchema);
