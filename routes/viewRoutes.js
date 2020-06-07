const router = require('express').Router()
const { Artist, Item } = require('../models')

router.get('/', (req, res) => {
  res.sendFile('../public/assets/html/index.html')
})

router.get('/dashboard/:id', (req, res) => {
  Artist.findOne({ id: req.params.id, include: [Item] })
    .then((user) => {
      res.render('dashboard', { artist: artist.dataValues })
    })
    .catch((err) => console.error(err))
})

router.get('/dashboard', (req, res) => {
  res.sendFile('public/assets/html/dashboard.html')
})

router.get('artists/:id', (req, res) => {
  Artist.findOne({ id: req.params.id, include: [Item] })
    .then(artist => {
      res.render('artists', { artist: artist.dataValues })
    })
    .catch(err => console.error(err))
})

router.get('/artists', (req, res) => {
  Artist.findAll(artists => {
    res.render('artists', { artists })
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
    res.render('items', { items })
  })
})

module.exports = router
