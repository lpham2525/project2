// function pageRedirect () {
//   window.location.href = 'url of product page'
// }

// document.getElementById().addEventListener('click', () => {
//   pageRedirect()
// })

document.addEventListener('click', event => {
  console.log(event)
  console.log(event.target.className)
  if (event.target.className === 'addBtn') {

    axios.post(`/api/cart/${event.target.dataset.id}`)
      .then(({ data }) => {
        console.log('testing to see if data is console logged')
        console.log(data)
        window.location.href = './cart'
      })
      .catch(err => console.log(err))
  }
})
