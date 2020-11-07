// const axios = require('axios')

// document.getElementById('addArtist').addEventListener('click', event => {
//   event.preventDefault()

//   axios.post('/api/artists', {
//     name: document.getElementById('name').value,
//     artistId: event.target.dataset.id
//   })
//     .then(() => {
//       const artistElem = document.createElement('li')
//       artistElem.textContent = `Name: ${document.getElementById('name').value}`
//       document.getElementById('artists').append(artistElem)
//       document.getElementById('name').value = ''
//     })
//     .catch(err => console.error(err))
// })

document.getElementById('addItemForm').addEventListener("submit", function (event) {
  // prevent browser from refreshing the page
  event.preventDefault()

  // convert the photo into Base64 format
  const photo = document.querySelector('input[type="file"]')
  const name = document.getElementById('artworkTitle').value
  console.log(name)
  // const photo = document.getElementById('imgPath').textContent
  console.log(photo)
  const reader = new FileReader()
  reader.readAsDataURL(photo.files[0])
  reader.onload = function () {
    console.log(reader.result)

    // submit the file to the server
    fetch("/api/imgur", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: document.getElementById('artworkTitle').value,
        photo: reader.result
      })
    })
  }
  reader.onerror = function (err) {
    console.log(err)
  }
})
