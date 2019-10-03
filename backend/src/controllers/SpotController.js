const Spot = require('../models/Spot')
const User = require('../models/User')

module.exports = {
    async index(req, res) {
        //Coleta o parametro enviado via Query Params (via URL)
        const { tech } = req.query

        //Busca no banco de dados do Schema Spot todos os itens que possuem 'techs' iguais a 'tech' passada no Query Params
        const spots = await Spot.find({ techs: tech })

        return res.json(spots)
    },

    async store(req, res) {
        //Pega o arquivo que vem na requisição do cliente 
        const { filename } = req.file

        //Utiliza a desestruturação para coletar os dados do corpo da requisição do cliente
        const { company, techs, price } = req.body

        //Coleta os dados de autenticação presente no cabeçalho da requisição 
        const { user_id } = req.headers

        //Procura o usuario do cabeçalho no banco de dados
        const user = await User.findById(user_id)

        // Verifica se usuario existe. Caso não retorna erro 400
        if (!user) {
            return res.status(400).json({ error: "User does not exists!" })
        }

        //Cria o spot no banco de dados
        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company,
            //Utiliza Split para separar o array, map para fazer um foreach, define a variavel 'tech' e ordena um trim para eliminar espaços em branco
            techs: techs.split(',').map(tech => tech.trim()),
            price
        })
        return res.json(spot)
    }
}