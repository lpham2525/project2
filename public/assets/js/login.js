const axios = require('axios')
const localStorage = require('localStorage')
let isLogin = false

const checkUser = () => {
  if (localStorage.getItem('user')) {
    axios.get(`/api/login/${localStorage.getItem('user')}`)
      .then(({ data }) => {
        localStorage.setItem('user', data.user.id)
        isLogin = true
        window.location.replace('/dashboard')
      })
      .catch(err => console.error(err))
  }
}

document.getElementById('login').addEventListener('click', event => {
  event.preventDefault()
  axios.get(`api/login/${document.getElementById('loginName').value}`)
    .then(({ data }) => {
      isLogin = true
      console.log(data)
      localStorage.setItem('user', data.user.id)
      window.location.replace('/dashboard')
    })
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
      .then(({ data }) => {
        isLogin = true
        console.log(data)
        localStorage.setItem('user', data.user.id)
        window.location.replace('/dashboard')
      })
      .catch(err => {
        if (err.response === 409) {
          console.log('USER ALREADY EXISTS')
        } else {
          console.error(err)
        }
      })
  }
})

document.getElementById('signOut').addEventListener('click', () => {
  localStorage.removeItem('user')
  isLogin = false
  window.location.replace('/home')
})

checkUser()
