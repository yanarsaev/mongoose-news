const { Router } = require('express')
const { commentsController } = require('../models/controllers/comments.controller')
const router = Router()

router.get('/comments', commentsController.getComments)
router.post('/comments', commentsController.addComment)
router.delete('/comments/:id', commentsController.deleteComment)

module.exports = router