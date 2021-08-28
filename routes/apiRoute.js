const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const gejalaController = require('../controllers/gejalaController')
const kasusController = require('../controllers/kasusController')

router.get('/user', userController.getAllUsers)
router.get('/user/:id', userController.getUserById)
router.post('/user', userController.createUser)
router.put('/user/:id', userController.updateUser)
router.delete('/user/:id', userController.deleteUser)

router.get('/gejala', gejalaController.getGejala)
router.post('/gejala', gejalaController.postGejalaJson)

router.get('/kasus', kasusController.getAllKasus)
router.post('/kasus', kasusController.createKasus)

module.exports = router