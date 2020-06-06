const router = require('express').Router()
const { Artist, Item, Event } = require('../models')

router.get('/', (req, res) => {
  res.render('home')
})

// router.get('/', (req, res) => {
//   res.render('home', { artistId: req.params.id, include: [Item[0]] })
// })

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

router.get('events/:id', (req, res) => {
  Event.findOne({ id: req.params.id, include: [Artist] })
    .then(event => {
      res.render('events', { event: event.dataValues })
    })
    .catch(err => console.error(err))
})

router.get('/events', (req, res) => {
  Event.getEvents(events => {
    res.findAll('events', { events })
  })
})

module.exports = router
