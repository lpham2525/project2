document.getElementById('signOut').addEventListener('click', () => {
  localUser.remove()
  isLogin = false
  window.location.replace('/home')
})
