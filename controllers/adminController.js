require('dotenv').config()
const User = require('../models/userModel')

exports.loginAdmin = async function (req, res) {
  await res.render('./admin/login')
}

exports.dashboardAdmin = async function (req, res) {
  if (!req.body.username || !req.body.password) {
    await res.render('./admin/gagal')
  }
  else {
    if (req.body.username === process.env.ADMIN_USERNAME && req.body.password === process.env.ADMIN_PASSWORD) {
      let users = await User.find({})

      res.render('./admin/dashboard', {
        title: 'dashboard',
        login_info: req.body,
        users: users
      })
    }
    else {
      await res.render('./admin/gagal')
    }
  }
}

exports.deleteData = async function (req, res) {
  let id = req.params.id
  await User.findByIdAndDelete(id)
  res.status(204).send()
}

exports.updateData = async function (req, res) {
  let id = req.params.id
  await User.findByIdAndUpdate(id, req.body)
  res.status(204).send()
}