const express = require('express')
const {requireAuth, requireAdmin} = require('../../middlewares/requireAuth.middleware')
const {addSpace, getSpaces, deleteSpace} = require('./space.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', getSpaces)
router.post('/',  requireAuth, addSpace)
router.delete('/:id',  requireAuth, deleteSpace)

module.exports = router