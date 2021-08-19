const express = require('express')
const router = express.Router()
const gejalaController = require('../controllers/gejalaController')

router.get('/', (req, res) => {
  res.render('index', {
    konfirmasi: 1000,
    suspek: 1000,
    probable: 1000,
    konfirmasi_h: 10,
    suspek_h: 10,
    probable_h: 10,
  })
})

router.post('/', gejalaController.postGejala)

router.get('/deteksi', (req, res) => {
  res.render('deteksi')
})

module.exports = router