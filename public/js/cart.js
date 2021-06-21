//TODO: make spaces on cards for artist name, price, and quantity. Look up card on Materialize CSS.

//function to retrieve items in user's cart or return an empty array if the cart is empty
const getCartItems = () => {
  const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
  console.log("testing getCartItems function")
  return cartItems
}

//function to set items in cart into local storage
const setCartItems = () => {
  localStorage.setItem('cartItems', JSON.stringify(cartItems))
}

//function to get all items in cart
const getItemsInCart = () => {
  axios.get('/api/cart')
    .then(({ data }) => {
      const buyNow = document.getElementById('buyNow')
      const alert = document.getElementById('cartAlert')
      if (data === []) {
        alert.textContent = 'There are currently no items in your cart. Take a look around the site and see what you like!'
        buyNow.style.display = 'hidden'
      } else {
        console.log(data)
        console.log(data.length)
        alert.textContent = `Items in cart: ${data.length}`
        buyNow.style.display = 'block'
      }
      document.getElementById('listItems').innerHTML = ''
      data.forEach(item => {
        console.log(item)
        let itemElem = document.createElement('div')
        itemElem.className = 'card'
        itemElem.innerHTML = `
        <a href="#">
          <div class="card-image">
            <img src="${item.productUrl}">
            <span class="card-title">${item.title}</span>
          </div>
            <div class="card-content">
              <p>ARTIST: ${item.artistName}</p>
              <p>CATEGORY: ${item.category}</p>
              <p>PRICE: ${item.price} USD</p>
            </div>
        </a>
      <a href="#">
      <div class="card-action">
        <span style='color:red' data-id={{id}}>Delete</span>
      </div>
      </a>`
        document.getElementById('listItems').append(itemElem)
      })
    })
    .catch(err => console.log(err))
}

const deleteItem = id => {
  axios.delete(`/api/items/${id}`)
    .then(() => {
      document.getElementById(`${id}`).remove()
    })
    .catch(err => console.error(err))
}

document.addEventListener('click', event => {
  if (event.target.className === 'deleteItem') {
    axios.delete(`/api/items/${event.target.dataset.id}`)
      .then(() => {
        console.log(event)
        event.target.parentNode.remove()
      })
      .catch(err => console.error(err))
  }
})

document.getElementById('buyNow').addEventListener('click', () => {
  document.getElementById('boughtAlert').textContent = 'Your items have been purchased! (Not really. This is just a sample alert, but you get the idea.)'
})


getItemsInCart()
