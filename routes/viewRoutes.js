const router = require('express').Router()
const { join } = require('path')
const { Artist, Item } = require('../models')
// const isLogin = false

router.get('/home', (req, res) => {
  res.sendFile(join(__dirname, '/../../project2/public/html/home.html'))
})

router.get('/dashboard', (req, res) => {
  res.sendFile(join(__dirname, '/../../project2/public/html/dashboard.html'))
})

router.get('/portal', (req, res) => {
  res.sendFile(join(__dirname, '/../../project2/public/html/portal.html'))
})

router.get('artists/:id', (req, res) => {
  Artist.findOne({ id: req.params.id, include: [Item] })
    .then(artist => {
      res.sendFile(join(__dirname, '/../../project2/public/html/portal.html'))
    })
    .catch(err => console.error(err))
})

router.get('/artists', (req, res) => {
  Artist.findAll(artists => {
    res.sendFile(join(__dirname, '/../../project2/public/html/dashboard.html'))
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
    res.sendFile(join(__dirname, '/../../project2/public/html/product.html'))
  })
})

router.get('/event', (req, res) => {
  res.sendFile(join(__dirname, '../public/html/event.html'))
})

router.get('/product', (req, res) => {
  res.sendFile(join(__dirname, '../public/html/product.html'))
})

router.get('/login', (req, res) => {
  res.sendFile(join(__dirname, '../public/html/login.html'))
})

// router.get('/dashboard', (req, res) => {
//   console.log(req.body)
//   if (isLogin === true) {
//     res.sendFile(join(__dirname, '../public/html/dashboard.html'))
//   } else {
//     res.sendFile(join(__dirname, '../public/html/login.html'))
//   }
// })

module.exports = router
