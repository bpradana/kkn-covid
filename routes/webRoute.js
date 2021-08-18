const express = require('express')
const router = express.Router()
const gejalaController = require('../controllers/gejalaController')

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', gejalaController.postGejala)

module.exports = router