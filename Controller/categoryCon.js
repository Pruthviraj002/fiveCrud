const CategoryController = require("../Model/category")

exports.getCategory = async (req, res) => {
    try {
        const data = await CategoryController.find()
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).josn({ errors: true, message: error.message })
    }
}

exports.postCategory = async (req, res) => {
    try {
        const data = await CategoryController.create(req.body)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}

exports.putCategory = async (req, res) => {
    try {
        const data = await CategoryController.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}

exports.deleteCategory = async (req, res) => {
    try {
        const data = await CategoryController.findByIdAndDelete(req.params.id)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}