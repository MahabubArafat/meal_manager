const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  student: {
    type: Number,
    ref: "student",
  },
  transactionID: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
    default: Date.now,
  },
  token: {
    type: Number,
    defualt: 60,
  },
  daily: {
    type: Number,
    default: 2,
  },
  manager: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "manager",
  },
});

module.exports = Transaction = mongoose.model("transaction", transactionSchema);
