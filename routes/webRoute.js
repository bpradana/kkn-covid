const express = require('express')
const router = express.Router()
const gejalaController = require('../controllers/gejalaController')

router.get('/', (req, res) => {
  res.render('index')
})

module.exports = router