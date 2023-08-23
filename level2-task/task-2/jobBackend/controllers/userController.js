// controllers/userController.js
const User = require("../models/Users");

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
// Add more controller functions as needed (e.g., updateUser, deleteUser)

exports.getSelf = async (req, res) => {
  try {
    const userId = req.user.userId;
    const user = await User.findOne({ _id: userId });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
