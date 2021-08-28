const Kasus = require('../models/kasusModel')

exports.createKasus = async (req, res) => {
  const kasus = await Kasus.create(req.body)
  res.json(kasus)
}

exports.getAllKasus = async (req, res) => {
  const kasus = await Kasus.find({}).sort({date: -1})
  res.json(kasus)
}