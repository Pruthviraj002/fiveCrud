const mongoose = require("mongoose")

//!schema
const empSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: { type: String, required: true },
    password: { type: String, required: true },
    address: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("myEmpCollection", empSchema)