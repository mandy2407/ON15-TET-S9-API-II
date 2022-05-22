//logica da nossa API

//chamar a o banco
const dbConfig = require("../models/dbConfig")

//executei a conexão do banco de dados
async function dbConnect(){
    return await dbConfig.bancoDeDados("filmes")
}

//getAll retorna todos os filmes
const getAll = async (request, response) =>{
    let filmesJson = await dbConnect()
    response.status(200).send(filmesJson)
}

const getByID = (request, response)=>{
    let filmesJson = await dbConnect(
        let idRequest 
    )
}

const createMovie = async(request, response)=>{}

//exportando cada função par aser usada nas routers
module.exports = {
    getAll,
    getByID
}
