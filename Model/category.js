const mongoose = require("mongoose")

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    subCategory: {
        type: String,
        required: true
    },
    CreatedAt: {
        type: Date,
        default: Date.now()

    }
})

module.exports = mongoose.model("mycateogry", categorySchema)