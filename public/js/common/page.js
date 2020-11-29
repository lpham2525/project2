// This is where the JavaScript common to all pages lives

// Change the display status of navigation links depending on login status
function navbarSignedIn (isLogin) {
  if (isLogin) {
    document.getElementById('dashboard').style.display = 'block'
    document.getElementById('loginNav').style.display = 'none'

    // Show and attach click handler
    const signOutButton = document.getElementById('signOut')
    signOutButton.style.display = 'block'
    signOutButton.addEventListener('click', () => {
      localUser.remove()
      window.location.replace('/')
    })
  }
}

// Verify the login status
localUser.confirmLogin((data) => {
  // Change things on the page according to login success
  navbarSignedIn(true)
})
