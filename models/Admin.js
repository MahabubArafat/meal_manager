const mongoose = require("mongoose");

const AdminLoginSchemas = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Admin = mongoose.model("admin", AdminLoginSchemas);
