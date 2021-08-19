const express = require('express')
const router = express.Router()

const apiRoute = require('./apiRoute')
const webRoute = require('./webRoute')

router.use('/', webRoute)
router.use('/api', apiRoute)

module.exports = router