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
  no: {
    type: String,
    required: true
  },
  status_covid: {
    type: String,
    required: true
  },
  gejala: {
    sakit_tenggorokan: String,
    masalah_pernapasan: String,
    menghadiri_pertemuan: String,
    batuk_kering: String,
    demam: String
  }
})

module.exports = mongoose.model('User', UserSchema)