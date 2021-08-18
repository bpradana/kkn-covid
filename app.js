// Modules
const app = require('express')()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv').config()

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
app.use(bodyParser.json());
app.use('/', require('./routes/webRoute'))
app.use('/api/v1', require('./routes/apiRoute'))

// Run server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})