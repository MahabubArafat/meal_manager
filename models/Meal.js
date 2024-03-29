const mongoose = require("mongoose");

const MealIntakes = new mongoose.Schema({
  student: {
    type: Number,
    ref: "student", // studentprofile schema, student name die export kora
  },
  time: {
    type: Date,
    default: Date.now,
  },
  transaction: {
    type: mongoose.Schema.Types.ObjectID,
    ref: "transaction",
  },
  manager: {
    type: mongoose.Schema.Types.ObjectID,
    ref: "manager",
  },
});

module.exports = Meals = mongoose.model("meal", MealIntakes);
