const mongoose = require("mongoose")

const docSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("myDoctor", docSchema)