document.getElementById('checkOut').addEventListener('click', () => {
  window.location.replace('/checkout')
})

const getItems = () => {
  axios.get('/api/items')
    .then(({ data }) => {
      document.getElementById('listItems').innerHTML = ''
      data.forEach(item => {
        let itemElem = document.createElement('div')
        itemElem.className = 'card'
        itemElem.innerHTML = `
        <a href="#">
      <div class="card-image">
        <img src="{{img}}">
      </div>
      <div class="card-action">
        {{title}}
      </div>
      </a>
      <a href="#">
      <div class="card-action">
        <span style='color:red' data-id={{id}}>Delete</span>
      </div>
      </a>
    </div>`
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
        event.target.parentNode.remove()
      })
      .catch(err => console.error(err))
  }
})
