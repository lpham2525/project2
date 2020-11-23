const router = require('express').Router()
// const { join } = require('path')
// const { Artist, Item } = require('../models')

// List of common scripts
const commonScripts = [
  'user.js',
  'page.js'
].map((n) => '/js/common/' + n)

router.get('/', (req, res) => {
  res.render('home', {
    page: {
      name: 'home',
      scripts: commonScripts
    }
  })
})

router.get('/dashboard', (req, res) => {
  const usrImgs = [
    { url: 'https://i.imgur.com/vW8YWqF.jpg', title: 'A Test Image' },
    { url: 'https://i.imgur.com/hERRtw0.jpg', title: "Don't do drugs" }]

  res.render('dashboard', {
    page: {
      name: 'dashboard',
      scripts: commonScripts,
      userImages: usrImgs
    }
  })
})

// router.get('artists/:id', (req, res) => {
//   Artist.findOne({ id: req.params.id, include: [Item] })
//     .then(artist => {
//       res.sendFile(join(__dirname, '../public/html/portal.html'))
//     })
//     .catch(err => console.error(err))
// })

// router.get('/artists', (req, res) => {
//   Artist.findAll(artists => {
//     res.sendFile(join(__dirname, '../public/html/dashboard.html'))
//   })
// }

// router.get('items/:id', (req, res) => {
//   Item.findOne({ id: req.params.id, include: [Artist] })
//     .then(item => {
//       res.render('items', { item: item.dataValues })
//     })
//     .catch(err => console.error(err))
// })

// router.get('/items', (req, res) => {
//   Item.findAll(items => {
//     res.sendFile(join(__dirname, '../public/html/product.html'))
//   })
// })

router.get('/product', (req, res) => {

  const artistBio = [
    { src: '/assets/header-images/annie-leibovitz-portrait.jpg', bio: "Annie Leibovitz is an American portrait photographer. She is best known for her engaging portraits, particularly of celebrities, which often feature subjects in intimate settings and poses. The Library of Congress declared her a Living Legend, and she is the first woman to have a feature exhibition at Washington's National Portrait Gallery." }
  ]

  const artImgs = [
    { src: '/assets/Annie_Leibovitz/Images/Angelina-Jolie-Portrait 2.jpg', title: 'Angelina Jolie Portrait' },
    { src: '/assets/Annie_Leibovitz/Images/willie-nelson.jpg', title: 'Willie Nelson, Luck Ranch in Spicewood, Texas ' },
    { src: '/assets/Annie_Leibovitz/Images/Queen_Elizabeth_II.jpg', title: 'Queen Elizabeth II at Buckingham Palace, London, 2007' }]

  res.render('product', {
    page: {
      name: 'product',
      scripts: commonScripts,
      artistLife: artistBio,
      artImages: artImgs
    }
  })
})

router.get('/login', (req, res) => {
  res.render('login', {
    page: {
      name: 'login',
      scripts: commonScripts
    }
  })
})

router.get('/cart', (req, res) => {
  const cartImgs = [
    { url: 'https://i.imgur.com/WPLR9kU.jpg', title: 'Eye of God' },
    { url: 'https://i.imgur.com/SO8H4fX.png', title: 'Be careful what you wish for' }]

  res.render('cart', {

    page: {
      name: 'cart',
      scripts: commonScripts,
      cartImages: cartImgs
    }
  })
})

router.get('/checkout', (req, res) => {
  const cartImgs = [
    { url: 'https://i.imgur.com/WPLR9kU.jpg', title: 'Eye of God' },
    { url: 'https://i.imgur.com/SO8H4fX.png', title: 'Be careful what you wish for' }]

  res.render('checkout', {

    page: {
      name: 'checkout',
      scripts: commonScripts,
      cartImages: cartImgs
    }
  })
})

module.exports = router
