const router = require('express').Router()
const { User } = require('../models')

// GET all users
router.get('/users', (req, res) => {
  User.findAll()
    .then(users => res.json(users))
    .catch(err => console.error(err))
})

// GET one user
router.get('/users/:id', (req, res) => {
  User.findOne({ where: { id: req.params.id } })
    .then(user => res.json(user))
    .catch(err => console.error(err))
})

// POST one user
router.post('/users', (req, res) => {
  console.log(req.body)
  User.create(req.body)
    .then(user => console.log(user))
    .then(user => res.json(user))
    .catch(err => console.error(err))
})

// PUT one user
router.put('/users/:id', (req, res) => {
  User.update(req.body, { where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

// DELETE one user
router.delete('/users/:id', (req, res) => {
  User.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

// Log in user
router.get('/login/:username', (req, res) => {
  User.findOne({ where: { username: req.params.username } })
    .then(user => res.json(user))
    .catch(err => console.error(err))
})

module.exports = router
