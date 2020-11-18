const router = require('express').Router()
const { User } = require('../models')
let isLogin = false

// Log in user
router.get('/login/:username', (req, res) => {
  User.findOne({ where: { username: req.params.username } })
    .then(user => {
      isLogin = true
      res.json(user)
    })
    .catch(err => console.error(err))
})

router.post('/login', (req, res) => {
  User.create(req.body)
    .then(user => {
      res.json(user)
      res.redirect('/dashboard')
    })
    .catch(err => {
      if (err.name === 'SequelizeUniqueConstraintError') {
        res.status(409).send('User already exists')
      } else {
        res.status(500).send('Server had something go wrong')
      }
      console.error(err)
    })
})

module.exports = router
