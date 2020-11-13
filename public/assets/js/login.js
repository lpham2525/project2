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
    axios.get('/api/users')
      .then(({ data }) => {
        let userInDb
        for (i = 0; i < data.length; i++) {
          userInDb = document.getElementById('registerName').value === data[i].username ? true : false
        }
        if (userInDb) {
          document.getElementById('registerAlert').style.display = 'block'
          document.getElementById('registerAlert').textContent = 'Username is already taken. Please choose another.'
        } else {
          axios.post('/api/users', {
            username: document.getElementById('registerName').value
          })
            .then(({ data }) => {
              localStorage.setItem('user', data.id)
              isLogin = true
              window.location.replace = '/dashboard'
            })
            .catch(err => console.error(err))
        }
      })
      .catch(err => console.log(err))
  }
})

document.getElementById('signOut').addEventListener('click', () => {
  localStorage.removeItem('user')
  isLogin = false
  window.location.replace('/home')
})

checkUser()
