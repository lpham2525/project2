const router = require('express').Router()
const { Cart } = require('../models')

// GET one cart
router.get('/cart/:id', (req, res) => {
  Cart.findOne({ where: { id: req.params.id } })
    .then(cart => res.json(cart))
    .catch(err => console.error(err))
})

// POST one item to the cart
router.post('/cart/:id', (req, res) => {
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

// DELETE one cart
router.delete('/cart/:id', (req, res) => {
  Cart.destroy({ where: { id: req.params.id } })
    .then(cart => res.json(cart))
    .catch(err => console.error(err))
})

module.exports = router
