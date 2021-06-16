const router = require('express').Router()
const { Cart } = require('../models')

// GET all items in cart
router.get('/cart', (req, res) => {
  Cart.findAll()
    .then(cart => res.json(cart))
    .catch(err => console.error(err))
})

// GET one item in cart
router.get('/cart/:id', (req, res) => {
  Cart.findOne({ where: { id: req.params.id } })
    .then(cart => res.json(cart))
    .catch(err => console.error(err))
})

// POST one item to the cart
router.post('/cart', (req, res) => {
  Cart.create(req.body)
    .then(cart => res.json(cart))
    .catch(err => console.error(err))
})

// Update one item in cart
router.put('/cart/:id', (req, res) => {
  Cart.update(req.body, { where: { id: req.params.id } })
    .then(cart => res.json(cart))
    .catch(err => console.error(err))
})

// DELETE one item
router.delete('/cart/:id', (req, res) => {
  Cart.destroy({ where: { id: req.params.id } })
    .then(cart => res.json(cart))
    .catch(err => console.error(err))
})

module.exports = router
