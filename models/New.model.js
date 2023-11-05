const mongoose = require('mongoose')

const newsSchema = mongoose.Schema({
    title: String,
    text: String,
    category: mongoose.Types.ObjectId
})

const New = mongoose.model('New', newsSchema)

module.exports = New