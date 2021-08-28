const User = require('../models/userModel');

exports.createUser = async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
}

exports.getAllUsers = async (req, res) => {
  const users = await User.find({});
  res.json(users);
}

exports.getUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
}

exports.updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body);
  res.json(user);
}

exports.deleteUser = async (req, res) => {
  await User.findByIdAndRemove(req.params.id);
  res.json({});
}