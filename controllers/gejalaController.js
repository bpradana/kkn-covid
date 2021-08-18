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
    status_covid: status_covid,
    gejala: req.body
  }
}

exports.postGejalaJson = async function (req, res) {
  await res.send(deteksi_covid(req))
}

exports.postGejala = async function (req, res) {
  await res.render('hasil', { 'hasil_deteksi': deteksi_covid(req) })
}