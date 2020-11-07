const router = require('express').Router()
const { join } = require('path')

router.use('/api', require('./artistRoutes.js'))
router.use('/api', require('./userRoutes.js'))
router.use('/api', require('./itemRoutes.js'))
router.use('/api', require('./dashboard.js'))
router.use('/api', require('./loginRoutes.js'))

router.get('/', (req, res) => {
  res.sendFile(join(__dirname, '../public/index.html'))
})

router.use(require('./viewRoutes.js'))

module.exports = router
