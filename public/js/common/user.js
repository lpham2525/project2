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
