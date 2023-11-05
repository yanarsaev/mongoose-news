const { default: mongoose } = require('mongoose')
const Comment = require('../Comment.model')


module.exports.commentsController = {
    addComment: (req, res) => {
        const { commentatorName, commentText, newsId} = req.body
        Comment.create({
            commentatorName, 
            commentText, 
            newsId: new mongoose.Types.ObjectId(req.body.newsId)
        })
        .then(() => res.json('Комментарий создан'))
        .catch(() => res.json('Error'))
    },

    deleteComment: (req, res) => {
        Comment.findByIdAndDelete(req.params.id)
        .then(() => res.json('Комментарий удален'))
    },

    getComments: (req, res) => {
        Comment.find({newsId: req.query.news})
        .then((comments) => res.json(comments))
        .catch((error) => res.json(error))
    }

}