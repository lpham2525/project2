require('dotenv').config()
const imgur = require('imgur')


imgur.setClientId(process.env.ClientId)

imgur.uploadFile(document.getElementById('file').textContent)
  .then(function (json) {
    console.log(json.data.link)
    axios.post(`/dashboard/${artistId}`, {
      res.send(document.getElementById('fname').textContent)
      res.send(json.data.link)
      res.sendStatus(200)
    })
  })
  .catch(function (err) {
    console.error(err.message)
  })