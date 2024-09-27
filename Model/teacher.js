const mongoose = require("mongoose")

const techSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    Qualification: {
        type: String,
        required: true
    },
    Experience: {
        type: Number,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    CreatedAt: {
        type: Date,
        default: Date.now
    }

})


module.exports = mongoose.model("teacherCOllection", techSchema)