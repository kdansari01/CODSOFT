const UserDetails = require("../models/UserDetails");

exports.createUser = async (req, res) => {
  try {
    const user = new UserDetails(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
