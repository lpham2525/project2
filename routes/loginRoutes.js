const router = require('express').Router()
const { User } = require('../models')

// POST one user
router.post('/login', (req, res) => {
  console.log(req.body)
  User.create(req.body)
    .then(user => res.redirect('/dashboard'))

    .catch(err => console.error(err))
})

// GET one user
router.get('/users/:id', (req, res) => {
  User.findOne({ where: { id: req.params.id } })
    .then(user => res.json(user))
    .catch(err => console.error(err))
})

module.exports = router
