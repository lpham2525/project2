const router = require('express').Router()
const { User } = require('../models')
let isLogin = false

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
  User.create(req.body)
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
    .then(user => {
      isLogin === true
      res.redirect('/dashboard')
    })
    .catch(err => console.error(err))
})

// Register user
router.post('/login', (req, res) => {
  User.create(req.body)
    .then(user => res.redirect('/dashboard'))
    .catch(err => console.error(err))
})

module.exports = router
