const { Router } = require('express')
const { newsController } = require('../models/controllers/news.controller')
const router = Router()

router.post('/news', newsController.addNew)
router.delete('/news/:id', newsController.deleteNew)
router.patch('/news/:id', newsController.updateNew)
router.get('/news', newsController.getAllNews)
router.get('/news/:id', newsController.getNew)
router.get('/news/:id', newsController.getAllNewsFromCategory)

module.exports = router