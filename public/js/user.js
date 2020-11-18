
// Global login state
let isLogin = false

// Retrieve user from local storage and return it
const getUser = () => {
  return JSON.parse(localStorage.getItem('user'))
}

// Verify that we are logged in and then call an optional callback
const confirmLogin = (cb) => {
  // If a user exists in local storage, confirm that it exists on the backend
  const user = getUser()
  if (user) {
    axios.get(`/login/${user.username}`)
      .then(({ data }) => {
        isLogin = true
        if (cb !== undefined) {
          cb(data)
        }
      })
      .catch(err => console.error(err))
  }
}

// Create a global object "localUser" to access from other files
window.localUser = {
  // Retrieve user from localStorage
  get: getUser,

  // Put user in localStorage
  set: (data) => {
    localStorage.setItem('user', JSON.stringify(data))
  },

  // Remove user from localStorage
  remove: () => {
    localStorage.removeItem('user')
  },

  confirmLogin: confirmLogin
}

function displayLogin () {
  if (isLogin) {
    document.getElementById('signOut').style.display = 'block'
    document.getElementById('login').style.display = 'none'
  } else {
    document.getElementById('signOut').style.display = 'none'
    document.getElementById('login').style.display = 'block'
  }
}

// document.getElementById('signOut').addEventListener('click', () => {
//   localUser.remove()
//   isLogin = false
//   window.location.replace('/home')
// })

// displayLogin()
