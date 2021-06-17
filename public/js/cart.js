const checkOut = document.getElementById('checkOut')
const page = []
//let cartPage = document.getElementById('cartPage')

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

checkOut.addEventListener('click', () => {
  window.location.replace('/checkout')
})

//function to get all items in cart
const getItemsInCart = () => {
  axios.get('/api/items')
    .then(({ data }) => {
      const checkOut = document.getElementById('checkOut')
      const alert = document.getElementById('cartAlert')
      console.log(data)
      if (data === []) {
        console.log(data)
        alert.textContent = 'There are currently no items in your cart. Take a look around the site and see what you like!'
        checkOut.style.display = 'hidden'
      } else {
        console.log(data)
        console.log(data.length)
        alert.textContent = `Items in cart: ${data.length}`
        checkOut.style.display = 'block'
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
      </div>
      <div class="card-action">
        ${item.title}
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

// function that displays checkout button if there are items in the cart. Otherwise, checkout button is hidden.
// const showCheckout = () => {

// }

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

getItemsInCart()

//showCheckout()
