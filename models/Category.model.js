const mongoose = require('mongoose')

const categoriesSchema = mongoose.Schema({
    categoryName: String
})

const Category = mongoose.model('Category', categoriesSchema)

module.exports = Category