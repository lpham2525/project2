const checkOut = document.getElementById('checkOut')
const page = []
const cartPage = document.getElementById('cartPage')

// TODO: make cartRoutes and finish function to grab images from cart
const checkCart = () => {
  axios.get('/cart')
    .then()

// function that displays checkout button if there are items in the cart. Otherwise, checkout button is hidden.
const showCheckout = () => {
  if (cartPage = []) {
    checkOut.style.display = 'hidden'
  } else {
    checkOut.style.display = 'block'
  }
}

checkOut.addEventListener('click', () => {
  window.location.replace('/checkout')
})

// const getItems = () => {
//   axios.get('/api/items')
//     .then(({ data }) => {
//       document.getElementById('listItems').innerHTML = ''
//       data.forEach(item => {
//         let itemElem = document.createElement('div')
//         itemElem.className = 'card'
//         itemElem.innerHTML = `
//         <a href="#">
//       <div class="card-image">
//         <img src="{{img}}">
//       </div>
//       <div class="card-action">
//         {{title}}
//       </div>
//       </a>
//       <a href="#">
//       <div class="card-action">
//         <span style='color:red' data-id={{id}}>Delete</span>
//       </div>
//       </a>`
//         document.getElementById('listItems').append(itemElem)
//       })
//     })
//     .catch(err => console.log(err))
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

showCheckout()
