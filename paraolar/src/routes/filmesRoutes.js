const controller = require("../controllers/filmesController")

const express = require("express")

const router = express.Router()

router.get("/catalogo", controller.getAll)

router.get("/catalogo/:id", controller.getById)

router.post("/cadastrar", controller.createMovie)

router.patch("/updateTitle/:id", controller.updateTitle)

module.exports = router
