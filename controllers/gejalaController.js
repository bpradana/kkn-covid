const User = require('../models/userModel')

exports.indexGejala = async function (req, res) {
  await res.render('./deteksi/data-diri', {
    title: 'deteksi'
  })
}

exports.getGejala = async function (req, res) {
  await res.send('use post method [sakit_tenggorokan, masalah_pernapasan, menghadiri_pertemuan, batuk_kering, demam]')
}

function deteksi_covid(req) {
  let status_covid

  if (req.body.sakit_tenggorokan) {
    if (req.body.menghadiri_pertemuan) {
      status_covid = 'positive'
    }
    else {
      if (req.body.batuk_kering) {
        if (req.body.demam) {
          status_covid = 'positive'
        }
        else {
          if (req.body.masalah_pernapasan) {
            status_covid = 'positive'
          }
          else {
            status_covid = 'negative'
          }
        }
      }
      else {
        if (req.body.masalah_pernapasan) {
          status_covid = 'positive'
        }
        else {
          status_covid = 'negative'
        }
      }
    }
  }
  else {
    if (req.body.masalah_pernapasan) {
      if (req.body.menghadiri_pertemuan) {
        status_covid = 'positive'
      }
      else {
        if (req.body.batuk_kering) {
          status_covid = 'positive'
        }
        else {
          status_covid = 'negative'
        }
      }
    }
    else {
      if (req.body.batuk_kering) {
        if (req.body.menghadiri_pertemuan) {
          status_covid = 'positive'
        }
        else {
          if (req.body.demam) {
            status_covid = 'positive'
          }
          else {
            status_covid = 'negative'
          }
        }
      }
      else {
        status_covid = 'negative'
      }
    }
  }

  return {
    nama: req.body.nama,
    alamat: req.body.alamat,
    no: req.body.no,
    status_covid: status_covid,
    gejala: {
      sakit_tenggorokan: (req.body.sakit_tenggorokan ? '1' : ''),
      masalah_pernapasan: (req.body.masalah_pernapasan ? '1' : ''),
      menghadiri_pertemuan: (req.body.menghadiri_pertemuan ? '1' : ''),
      batuk_kering: (req.body.batuk_kering ? '1' : ''),
      demam: (req.body.demam ? '1' : ''),
    }
  }
}

exports.postGejalaJson = async function (req, res) {
  await res.send(deteksi_covid(req))
}

exports.postGejala = async function (req, res) {
  let hasil_deteksi = deteksi_covid(req)
  await User.create(hasil_deteksi);
  await res.render('./deteksi/hasil', { 'hasil_deteksi': hasil_deteksi })
}

exports.postDataDiri = async function (req, res) {
  if (!req.body.nama || !req.body.alamat || !req.body.no) {
    await res.render('./deteksi/gagal')
  }
  await res.render('./deteksi/kuesioner', { 'data_diri': req.body })
}