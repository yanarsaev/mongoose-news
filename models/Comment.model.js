const mongoose = require('mongoose')
const Schema = mongoose.Schema


const commentsSchema = mongoose.Schema({
    commentatorName: String,
    commentText: String,
    newsId: {
        type: Schema.Types.ObjectId,
        ref: 'New'
    }
})

const Comment = mongoose.model('Comment', commentsSchema)

module.exports = Comment