const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const gejalaController = require('../controllers/gejalaController')

router.get('/user', userController.getAll)
router.get('/user/:id', userController.getById)
router.post('/user', userController.create)
router.put('/user/:id', userController.update)
router.delete('/user/:id', userController.delete)

router.get('/gejala', gejalaController.getGejala)
router.post('/gejala', gejalaController.postGejala)

module.exports = router