const router = require('express').Router()
const { Item } = require('../models')

// GET all items
router.get('/items/', (req, res) => {
  Item.findAll()
    .then(items => res.json(items))
    .catch(err => console.error(err))
})

// GET one item
router.get('/items/:id', (req, res) => {
  Item.findOne({ where: { id: req.params.id } })
    .then(item => res.json(item))
    .catch(err => console.error(err))
})

// POST one item
router.post('/items/', (req, res) => {
  Item.create(req.body)
    .then(item => res.json(item))
    .catch(err => console.error(err))
})

// PUT one item
router.put('/items/:id', (req, res) => {
  Item.update(req.body, { where: { id: req.params.id } })
    .then (item => res.json(item))
    .catch(err => console.error(err))
})

// DELETE one item
router.delete('/items/:id', (req, res) => {
  Item.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

module.exports = router
