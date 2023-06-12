const mongoose = require("mongoose");

const MealIntakes = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "student", // studentprofile schema, student name die export kora
  },
  time: {
    type: Date,
    default: Date.now,
  },
  manager: {
    type: String,
    required: true,
  },
});

module.exports = MealIntakes = mongoose.model("meals", MealIntakes);
