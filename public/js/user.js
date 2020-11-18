
// Create a global object "localUser" to access from other files
window.localUser = {
  // Retrieve user from localStorage
  get: () => {
    return localStorage.getItem('user')
  },

  // Put user in localStorage
  set: (data) => {
    localStorage.setItem('user', data.id)
  },

  // Remove user from localStorage
  remove: () => {
    localStorage.removeItem('user')
  }
}

let isLogin = false

function displayLogin () {
  if (isLogin) {
    document.getElementById('signOut').style.display = 'block'
    document.getElementById('login').style.display = 'none'
  } else {
    document.getElementById('signOut').style.display = 'none'
    document.getElementById('login').style.display = 'block'
  }
}

document.getElementById('signOut').addEventListener('click', () => {
  localUser.remove()
  isLogin = false
  window.location.replace('/home')
})

displayLogin()
