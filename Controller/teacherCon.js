const teacher = require("../Model/teacher")


//!get
exports.getTech = async (req, res) => {
    try {
        const data = await teacher.find()
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}

//!post
exports.postTech = async (req, res) => {
    try {
        const data = await teacher.create(req.body)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}

//!put
exports.putTech = async (req, res) => {
    try {
        const data = await teacher.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}

//!delete
exports.deleteTech = async (req, res) => {
    try {
        const data = await teacher.findByIdAndDelete(req.params.id)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}