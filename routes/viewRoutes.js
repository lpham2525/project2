const router = require('express').Router()
const { join } = require('path')
const { Artist, Item } = require('../models')

router.get('/', (req, res) => {
  res.sendFile(join(__dirname, '../public/html/home.html'))
})

router.get('/dashboard', (req, res) => {
  res.sendFile(join(__dirname, '../public/html/dashboard.html'))
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
  res.sendFile(join(__dirname, '../public/html/product.html'))
})

router.get('/login', (req, res) => {
  res.sendFile(join(__dirname, '../public/html/login.html'))
})

module.exports = router
