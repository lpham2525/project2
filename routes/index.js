const router = require('express').Router()

router.use('/api', require('./artistRoutes.js'))
router.use('/api', require('./userRoutes.js'))
router.use('/api', require('./itemRoutes.js'))

router.use(require('./loginRoutes.js'))
router.use(require('./viewRoutes.js'))

module.exports = router
