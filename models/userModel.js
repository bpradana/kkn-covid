const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  nama: {
    type: String,
    required: true
  },
  alamat: {
    type: String,
    required: true
  },
  nomor_telepon: {
    type: String,
    required: true
  },
  status_covid: {
    type: Boolean,
    required: true
  },
  gejala: [{
    type: String,
    required: true
  }],
})

module.exports = mongoose.model('User', UserSchema)