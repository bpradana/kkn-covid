// Modules
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv').config()

// App
const app = express()

// Constants
const PORT = process.env.PORT || 3000

// EJS set up
app.set('view engine', 'ejs')
app.set('views', './views')

// Connect to database
mongoose.connect(
  `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}/${process.env.MONGO_DATABASE}`,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('Connected to MongoDB')
  }
)

// Routes
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true}))
app.use(express.static('./public'))
app.use('/', require('./routes/mainRoute'))

// Run server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})