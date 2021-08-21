const express = require('express')
const router = express.Router()
const gejalaController = require('../controllers/gejalaController')
const adminController = require('../controllers/adminController')

router.get('/', (req, res) => {
  res.render('index', {
    title: 'index',
    konfirmasi: 1000,
    suspek: 1000,
    probable: 1000,
    konfirmasi_h: 10,
    suspek_h: 10,
    probable_h: 10,
  })
})

router.post('/deteksi', gejalaController.postGejala)
router.get('/deteksi/data-diri', gejalaController.indexGejala)
router.post('/deteksi/data-diri', gejalaController.postDataDiri)

router.get('/admin', adminController.loginAdmin)
router.post('/admin', adminController.dashboardAdmin)
router.post('/admin/delete/:id', adminController.deleteData)
router.post('/admin/update/:id', adminController.updateData)

module.exports = router