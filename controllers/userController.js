const User = require('../models/userModel');

exports.create = async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
}

exports.getAll = async (req, res) => {
  const users = await User.find({});
  res.json(users);
}

exports.getById = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
}

exports.update = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body);
  res.json(user);
}

exports.delete = async (req, res) => {
  await User.findByIdAndRemove(req.params.id);
  res.json({});
}