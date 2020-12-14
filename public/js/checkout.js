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
