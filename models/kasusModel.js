const mongoose = require('mongoose')

const KasusSchema = mongoose.Schema({
  tanggal: {
    type: Date,
    default: Date.now
  },
  terkonfirmasi: {
    type: Number,
    required: true
  },
  kasus_aktif: {
    type: Number,
    required: true
  },
  sembuh: {
    type: Number,
    required: true
  },
  meninggal: {
    type: Number,
    required: true
  },
  suspek: {
    type: Number,
    required: true
  },
  probable: {
    type: Number,
    required: true
  },
})

module.exports = mongoose.model('Kasus', KasusSchema)