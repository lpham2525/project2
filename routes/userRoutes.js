const router = require('express').Router()
const { User } = require('../models')
const isLogin = false

// Register a new user, throwing an error if it exists already
router.post('/users/create', (req, res) => {
  User.create(req.body)
    .then(user => res.json(user))
    .catch(err => {
      if (err.name === 'SequelizeUniqueConstraintError') {
        res.status(409).send('User already exists')
      } else {
        res.status(500).send('Server had something go wrong')
      }
      console.error(err)
    })
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
