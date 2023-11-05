const New = require("../New.model")
const mongoose = require('mongoose')

module.exports.newsController = {
    addNew: (req, res) => {
        const { title, text, categoryId } = req.body
        New.create({title, text, categoryId: req.body.categoryId})
        .then(() => res.json('Новость добавлена'))
        .catch(() => res.json('Error'))
    },

    deleteNew: (req, res) => {
        New.findByIdAndDelete(req.params.id)
        .then(() => res.json('Новость удалена'))
        .catch(() => res.json('Error'))
    },

    updateNew: (req, res) => {
        const { title, text, categoryID } = req.body
        New.findByIdAndUpdate(req.params.id, {title, text, categoryID})
        .then(() => res.json('Новость обновлена'))
    },

    getNew: (req, res) => {
        New.findById(req.params.id)
        .then((news) => res.json(news))
    },

    getAllNews: (req, res) => {
        New.find({})
        .then((news) => res.json(news))
        .catch((error) => res.json(error))
    },

    getAllNewsFromCategory: (req, res) => {
        New.find( req.query.category ? { categoryId: req.query.category } : null )
        .then((news) => res.json(news))
        .catch((error) => res.json(error))
    } 

}