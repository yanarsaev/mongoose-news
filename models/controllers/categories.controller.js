const Category = require("../Category.model")

module.exports.categoriesController = {
    addCategory: (req, res) => {
        const { categoryName } = req.body
        Category.create({categoryName})
        .then(() => res.json('Категория создана'))
    },

    getCategory: (req, res) => {
        Category.find({})
        .then((categories) => res.json(categories))
        .catch((error) => res.json(error))
    },

    deleteCategory: (req, res) => {
        Category.findByIdAndDelete(req.params.id)
        .then(() => res.json('Категория удалена'))
    }
}