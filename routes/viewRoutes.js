const router = require('express').Router()
const { join } = require('path')
const { Artist, Item } = require('../models')
const isLogin = false

router.get('/home', (req, res) => {
  res.sendFile(join(__dirname, '/../../project2/public/assets/html/index.html'))
})

// router.get('/dashboard', (req, res) => {
//   res.sendFile(join(__dirname, '/../../project2/public/assets/html/dashboard.html'))
// })

router.get('artists/:id', (req, res) => {
  Artist.findOne({ id: req.params.id, include: [Item] })
    .then(artist => {
      res.sendFile(join(__dirname, '/../../project2/public/assets/html/artistportal.html'))
    })
    .catch(err => console.error(err))
})

router.get('/artists', (req, res) => {
  Artist.findAll(artists => {
    res.sendFile(join(__dirname, '/../../project2/public/assets/html/dashboard.html'))
  })
})

router.get('items/:id', (req, res) => {
  Item.findOne({ id: req.params.id, include: [Artist] })
    .then(item => {
      res.render('items', { item: item.dataValues })
    })
    .catch(err => console.error(err))
})

router.get('/items', (req, res) => {
  Item.findAll(items => {
    res.sendFile(join(__dirname, '/../../project2/public/assets/html/product.html'))
  })
})

router.get('/event', (req, res) => {
  res.sendFile(join(__dirname, '../public/assets/html/event.html'))
})

router.get('/product', (req, res) => {
  res.sendFile(join(__dirname, '../public/assets/html/product.html'))
})

router.get('/api/login', (req, res) => {
  res.sendFile(join(__dirname, '../public/assets/html/login.html'))
})

router.get('/dashboard', (req, res) => {
  console.log(req.body)
  if (isLogin === true) {
    res.sendFile(join(__dirname, '../public/assets/html/dashboard.html'))
  } else {
    res.sendFile(join(__dirname, '../public/assets/html/login.html'))
  }
})

module.exports = router
