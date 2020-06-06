const goToProductPage = (id) => {
  return axios.get(`/api/items/:${id}`)
}

goToProductPage()

// // function to load the featured artist of the day
// const artistArray = {
//   "Annie Leibovitz": ["033-rolling-stones.jpg", "Nicole-Kidman-Portrait-1990.jpg"],
//   "Sebastio Salgado": ["elephant.jpg", "Untitled-Mexico.1980.jpg"], "Henri Matisse": ["Femme A_Chapeau_1905", "Blue_Nude_II_1952.jpg"]
// }
// let featuredArtist = artistArray[Math.floor(Math.random() * artistArray.length)]
// let featuredWork = featuredArtist[0]

// function loadFeatured (featuredWork) {
//   const displayArtwork
// }

// for (i = 0; i < artistArray.length; i++) {
//   for (j = 0; j < artistArray[i].length; j++) {
//     console.log([i][j][0])
//   }
// }

// function to load recent artist cards
/* need to write function which loads the recently featured artists into cards, but every 24 hours, removes the featured artist from 4 days ago, then shifts all of the remaining cards down and adds in the featured artist from yesterday */

// function loadRecent (id) {
//   const d = new Date()
//   const t = d.getTime()
//   const days = Math.floor(t / (86400000))

//   const imageArray = ['Annie Leibovitz: Queen Elizabeth', 'Sebastio Salgado: elephant', 'Henri Matisse: Femme Au Chapeau 1905']

//   const img
//   img.src = imageArray[i]
//   const i = days % imageArray.length

//   function loadNewCards(){
//     let Artist = yesterday
//     imageArray.pop()
//     imageArray.unshift(yesterday)
//   }
// }
// window.onload = loadFeatured()

// window.onload = loadRecent()

const loadCards = () => {
  axios.get('/api/artists')
    .then(({ data }) => {
      data.artists.forEach(artist => {
        let artistElem = document.createElement('div')
        artistElem.innerHTML =
          `<div class="col s3">
            <div class="card medium">
              <div class="card-image">
                <img src="${artist.artistPhoto}" alt="${artist.name}/>
              </div>
              <div class="card-content">
                <p class="card-artist-name">:${artist.name}</p>
              </div>
              <div class="card-action">
                <a class="waves-effect waves-light btn-small addBtn" a href="./artists/${artist.name}">Visit Page</a>
              </div>
            </div>
          </div>`
        document.getElementById('recentArt').append(artistElem)
      })
    })

  const loadFeatured = () => {
    axios.get('/api/artists/:id')
      .then(({ data }) => {
        document.getElementById('featured').innerHTML =
        `<h1>${data.name}</h1>
        data.items.forEach(item => {
          let featuredElem = document.createElement('div')
          featuredElem.innerHTML =
            <img src="${document.getElementById('productUrl').value}" alt=""/>
            <p class="more-products-work-title">Title:${document.getElementById('title').value}</p>
              </div>

                  </div>
                </div>
              </div>
            </div>`
          document.getElementById('featured').append(featuredElem)
        })
      })
  }