const checkUser = () => {
  if (localStorage.getItem('user')) {
    axios.get(`/api/users/${localStorage.getItem('user')}`)
      .then(({ data }) => {
        localStorage.setItem('user', data.user.id)
        window.location.replace('/dashboard')
      })
      .catch(err => console.error(err))
  }
}

document.getElementById('signIn').addEventListener('click', event => {
  event.preventDefault()
  axios.get(`/api/users/${document.getElementById('username').value}`)
    .then(({ data }) => {
      localStorage.setItem('user', data.user.id)
      window.location.replace('/dashboard')
    })
    .catch(err => console.error(err))
})

document.getElementById('signUp').addEventListener('click', event => {
  event.preventDefault()
  axios.post('/api/users', {
    username: document.getElementById('newUsername').value
  })
    .then(({ data }) => {
      localStorage.setItem('user', data.insertId)
      window.location.replace('/dashboard')
    })
    .catch(err => console.error(err))
})

document.getElementById('signOut').addEventListener('click', () => {
  localStorage.removeItem('user')
  window.location.replace('/home')
})

checkUser()
