// const axios = require('axios')

document.getElementById('artistInput').addEventListener('click', event => {
  event.preventDefault()
  axios.post('/artists', {
    artist: document.getElementById('artistInput').value
  })
    .then(({ data }) => {
      const artistElem = document.createElement('li')
      artistElem.innerHTML = `
        ${document.getElementById('artistInput').value}
        <button class="addToCart>Add to Cart</button>
        <button class="addToWish>Add to Wishlist</button>
      `
      document.getElementById('box').append(artistElem)
    })
    .catch(err => console.error(err))
})
