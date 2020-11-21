const router = require('express').Router()
const { join } = require('path')
// const { Artist, Item } = require('../models')

// List of common scripts
const commonScripts = [
  'user.js',
  'page.js'
].map((n) => '/js/common/' + n)

router.get('/', (req, res) => {
  // res.sendFile(join(__dirname, '../public/html/home.html'))
  res.render('home', {
    page: {
      name: 'home',
      scripts: commonScripts
    }
  })
})

router.get('/dashboard', (req, res) => {
  // res.sendFile(join(__dirname, '../public/html/dashboard.html'))

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

router.get('/portal', (req, res) => {
  res.sendFile(join(__dirname, '../public/html/portal.html'))
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
  // res.sendFile(join(__dirname, '../public/html/product.html'))
  res.render('product', {
    page: {
      name: 'product',
      scripts: commonScripts
    }
  })
})

router.get('/login', (req, res) => {
  // res.sendFile(join(__dirname, '../public/html/login.html'))
  res.render('login', {
    page: {
      name: 'login',
      scripts: commonScripts
    }
  })
})

module.exports = router
