const dbConfig = require("../models/dbConfig")

async function dbConnect() {
    return await dbConfig.bancoDeDados("series")
}

const getAll = async (request, response) => {
    try {
        let filmesJson = await dbConnect()
        response.status(200).send(filmesJson)

    } catch (error) {
        response.status(500).json({ message: error.message })
    }
}

const getById = async (request, response) => {
    try {
        let seriesJson = await dbConnect()

        let idRequest = request.params.id
        let serieEncontrada = seriesJson.find(serie => serie.id == idRequest)
        console.log(filmeEncontrado)

        response.status(200).send(serieEncontrada)
    } catch (error) {
        response.status(500).json({ message: error.message })
        console.log(error)
    }

}

const createserie = async (request, response) => {
    let seriesJson = await dbConnect()
    let bodyRequest = request.body

    let novaSerie = {
        id: (seriesJson.length) + 1,
        Title: bodyRequest.Title,
        Plot: bodyRequest.description
    }
    seriesJson.push(novaSerie)

    response.status(201).send({
        "mensagem": "Series cadastradas com sucesso!",
        novoFilme
    })
}

const updateTitle = async (request, response) => {
    try {
        let seriesJson = await dbConnect()

        let idRequest = request.params.id
        let bodyRequest = request.body.Title

        const serieEncontrada = seriesJson.find(serie => serie.id == idRequest)

        serieEncontrada.title = bodyRequest

        response.status(200).json([{
            "mensagem": "titulo atualizado com sucesso",
            seriesJson
        }])
    } catch (error) {
        response.status(500).json({ message: error.message })
    }
}

module.exports = {
    getAll,
    getById,
    createserie,
    updateTitle
}