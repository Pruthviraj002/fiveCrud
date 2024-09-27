const { getDoctor, postDoctor, putDoctor, deleteDoctor } = require("../Controller/doctorCon")

const route = require("express").Router()

route.get("/", getDoctor)
route.post("/", postDoctor)
route.put("/:id", putDoctor)
route.delete("/:id", deleteDoctor)

module.exports = route