const router = require('express').Router()
const { User } = require('../models')

// Log in user
router.get('/login/:username', (req, res) => {
  User.findOne({ where: { username: req.params.username } })
    .then(user => {
      res.json(user)
    })
    .catch(err => console.error(err))
})

module.exports = router
