// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  role: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  github: {
    type: String,
  },
  linkedin: {
    type: String,
  },
  profile: {
    type: String,
  },
});

module.exports = mongoose.model("UserDetails", userSchema);
