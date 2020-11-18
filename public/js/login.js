const successHandler = (data) => {
  isLogin = true
  console.log(data)
  localUser.set(data)
  window.location.replace('/dashboard')
}

document.getElementById('login').addEventListener('click', event => {
  event.preventDefault()
  axios.get(`/login/${document.getElementById('loginName').value}`)
    .then(({ data }) => successHandler(data))
    .catch(err => console.error(err))
})

document.getElementById('register').addEventListener('click', event => {
  event.preventDefault()
  if (document.getElementById('registerName').value === '') {
    document.getElementById('registerAlert').style.display = 'block'
    document.getElementById('registerAlert').textContent = 'Please type in a username.'
  } else {
    // Create a new user!
    axios.post('/api/users/create', { username: document.getElementById('registerName').value })
      .then(({ data }) => successHandler(data))
      .catch(err => {
        if (err.response.status === 409) {
          console.log('USER ALREADY EXISTS')
          document.getElementById('registerAlert').style.display = 'block'
          document.getElementById('registerAlert').textContent = 'Username already exists. Choose another username or log in.'
        } else {
          console.error(err)
        }
      })
  }
})

localUser.confirmLogin(successHandler)
