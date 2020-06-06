document.getElementById('addArtist').addEventListener('click', event => {
  event.preventDefault()

  axios.post('/api/artists', {
    name: document.getElementById('name').value,
    artistId: event.target.dataset.id
  })
    .then(() => {
      const artistElem = document.createElement('li')
      artistElem.textContent = `Name: ${document.getElementById('name').value}`
      document.getElementById('artists').append(artistElem)
      document.getElementById('name').value = ''
    })
    .catch(err => console.error(err))
})
