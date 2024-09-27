const { getTech, postTech, putTech, deleteTech } = require("../Controller/teacherCon")


const route = require("express").Router()

route.get("/", getTech)
route.post("/", postTech)
route.put("/:id", putTech)
route.delete("/:id", deleteTech)

module.exports = route