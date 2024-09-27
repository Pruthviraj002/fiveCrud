const { getCategory, postCategory, putCategory, deleteCategory } = require("../Controller/categoryCon")

const route = require("express").Router()

route.get("/", getCategory)
route.post("/", postCategory)
route.put("/:id", putCategory)
route.delete("/:id", deleteCategory)

module.exports = route