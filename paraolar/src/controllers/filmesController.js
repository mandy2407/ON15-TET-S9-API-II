const dbConfig = require("../models/dbConfig")

async function dbConnect() {
    return await dbConfig.bancoDeDados("filmes")
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
        let filmesJson = await dbConnect()

        let idRequest = request.params.id
        let filmeEncontrado = filmesJson.find(filme => filme.id == idRequest)
        console.log(filmeEncontrado)

        if (filmeEncontrado == undefined) throw new Error("id não encontrado")

        response.status(200).send(filmeEncontrado)

    } catch (error) {
        response.status(500).json({ message: error.message })
        console.log(error)
    }

}

const createMovie = async (request, response) => {
    let filmesJson = await dbConnect()
    let bodyRequest = request.body

    let novoFilme = {
        id: (filmesJson.length) + 1,
        Title: bodyRequest.Title,
        Plot: bodyRequest.description
    }
    filmesJson.push(novoFilme)

    response.status(201).send({
        "mensagem": "filmes cadastrado com sucesso!",
        novoFilme
    })
}

const updateTitle = async (request, response) => {
    try {
        let filmesJson = await dbConnect()

        let idRequest = request.params.id
        let bodyRequest = request.body.Title

        const filmeEncontrado = filmesJson.find(filme => filme.id == idRequest)

        filmeEncontrado.title = bodyRequest

        response.status(200).json([{
            "mensagem": "titulo atualizado com sucesso",
            filmesJson
        }])
    } catch (error) {
        response.status(500).json({ message: error.message })
    }
}

module.exports = {
    getAll,
    getById,
    createMovie,
    updateTitle
}