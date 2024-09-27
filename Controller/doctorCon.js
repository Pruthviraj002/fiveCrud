const doctor = require("../Model/doctor")

exports.getDoctor = async (req, res) => {
    try {
        const data = await doctor.find()
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}


exports.postDoctor = async (req, res) => {
    try {
        const data = await doctor.create(req.body)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}


exports.putDoctor = async (req, res) => {
    try {
        const data = await doctor.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}


exports.deleteDoctor = async (req, res) => {
    try {
        const data = await doctor.findByIdAndDelete(req.params.id)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}

