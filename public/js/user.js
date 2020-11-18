
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
