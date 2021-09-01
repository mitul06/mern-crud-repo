const express = require('express')
const route = express.Router()

const services = require("../services/render")
const controller = require("../controller/controller")

route.get("/",services.homeRouters)

route.get("/add-rest",services.add_rest)

route.get("/update-rest", services.update_rest)


//api
route.post('/api/rest',controller.create)
route.get('/api/rest',controller.find)
route.put('/api/rest/:id',controller.update)
route.delete('/api/rest/:id',controller.delele)

module.exports = route