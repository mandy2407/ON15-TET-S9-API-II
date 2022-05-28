const controller = require("../controllers/seriesController")

const express = require("express")
const router = express.Router()

router.get("/catalogo", controller.getAll)

router.get("/catalogo/:id", controller.getById)

router.post("/cadastrar", controller.createserie)

module.exports = router