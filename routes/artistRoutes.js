const router = require('express').Router()
const { Artist } = require('../models')

// GET all artists
router.get('/artists', (req, res) => {
  Artist.findAll()
    .then(artists => res.json(artists))
    .catch(err => console.error(err))
})

// GET one artist
router.get('/artists/:id', (req, res) => {
  Artist.findOne({ id: req.params.id })
    .then(artist => res.json(artist))
    .catch(err => console.error(err))
})

// POST one artist
router.post('/artists', (req, res) => {
  Artist.create(req.body)
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

// PUT one artist
router.put('/artists/:id', (req, res) => {
  Artist.update(req.body, { where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

// DELETE one artist
router.delete('/artists/:id', (req, res) => {
  Artist.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

module.exports = router
