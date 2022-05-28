const dbConfig = require("../models/dbConfig")

async function dbConnect(){
    return await dbConfig.bancoDeDados("series")
}

const getAll = async(request, response) =>{
    let seriesJson = await dbConnect()
    response.status(200).send(seriesJson)
}

const getById = async (request, response)=>{
    let seriesJson = await dbConnect()
    let idRequest = request.params.id
    let serieEncontrada = seriesJson.find(serie => serie.id == idRequest)

    response.status(200).send(serieEncontrada)
}

const createserie = async(request, response)=>{
    let seriesJson = await dbConnect()
    let bodyRequest = request.body

    let novaSerie = {
        id: (seriesJson.length)+1, 
        Title: bodyRequest.Title, 
        Plot: bodyRequest.description 
    }
    seriesJson.push(novaSerie)
    
    response.status(201).send({
        "mensagem": "Series cadastradas com sucesso!",
        novoFilme
    })
}

module.exports = {
    getAll,
    getById,
    createserie
}