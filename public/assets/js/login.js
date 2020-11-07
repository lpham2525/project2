const checkUser = () => {
  if (localStorage.getItem('user')) {
    axios.get(`/api/login/${localStorage.getItem('user')}`)
      .then(({ data }) => {
        localStorage.setItem('user', data.user.id)
        window.location.replace('/dashboard')
      })
      .catch(err => console.error(err))
  }
}

document.getElementById('login').addEventListener('click', event => {
  event.preventDefault()
  axios.get(`api/login/${document.getElementById('loginName').value}`)
    .then(({ data }) => {
      console.log(data)
      localStorage.setItem('user', data.user.id)
      window.location.replace('/dashboard')
    })
    .catch(err => console.error(err))
})

document.getElementById('register').addEventListener('click', event => {
  event.preventDefault()
  axios.post('/api/users', {
    username: document.getElementById('registerName').value
  })
    .then(({ data }) => {
      console.log(data)
      localStorage.setItem('user', data.id)
      window.location.replace('/dashboard')
    })
    .catch(err => console.error(err))
})

document.getElementById('signOut').addEventListener('click', () => {
  localStorage.removeItem('user')
  window.location.replace('/')
})

checkUser()
