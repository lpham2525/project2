const router = require('express').Router()
const { User } = require('../models')

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

module.exports = router
