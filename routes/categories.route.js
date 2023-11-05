const { Router } = require('express')
const { categoriesController } = require('../models/controllers/categories.controller')
const router = Router()

router.post('/categories', categoriesController.addCategory)
router.get('/categories', categoriesController.getCategory)
router.delete('/categories/:id', categoriesController.deleteCategory)

module.exports = router