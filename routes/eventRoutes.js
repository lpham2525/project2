const router = require('express').Router()
const { Event } = require('../models')

// GET all events
router.get('/events', (req, res) => {
  Event.findAll()
    .then(events => res.json(events))
    .catch(err => console.error(err))
})

// GET one event
router.get('/events/:id', (req, res) => {
  Event.findOne({ id: req.params.id })
    .then(event => res.json(event))
    .catch(err => console.error(err))
})

// POST one event
router.post('/events', (req, res) => {
  Event.create(req.body)
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

// PUT one event
router.put('/events/:id', (req, res) => {
  Event.update(req.body, { where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

// DELETE one event
router.delete('/events/:id', (req, res) => {
  Event.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

module.exports = router
