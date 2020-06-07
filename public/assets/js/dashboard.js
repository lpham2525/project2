document.getElementById('imageUpload').addEventListener('submit', function (event) {
  event.preventDefault() // prevent browser from refreshing the page
  // convert the photo into Base64 format
  const photo = document.querySelector('input[name="photo"]')
  const reader = new FileReader()
  reader.readAsDataURL(photo.files[0])
  reader.onload = function () {
    console.log(reader.result) // submit the file to the server
    fetch('/dashboard', {
      method: 'POST', headers: {
        Accept: 'application/json', 'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        photo: reader.result,
      }
      )
    }
    )
  }
  reader.onerror = function (err) {
    console.log(err)
  }
})
