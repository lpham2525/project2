const { default: Axios } = require("axios")

document.getElementById('checkOut').addEventListener('click', () => {
  window.location.replace('/checkout')
})

const getItems = () => {
  axios.get('/api/items')
    .then(({ data }) => {
      document.getElementById('listItems').innerHTML = ''
      data.forEach(item => {
        let itemElem = document.createElement('li')
        itemElem.innerHTML = `
        <button class = 'deleteItem' data-item="${item.text}">Delete</button> `
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
  deleteItem(event.target.dataset.id)
})
