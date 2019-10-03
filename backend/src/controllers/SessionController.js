//Métodos Padrões
// Index : listagem de varios Itens
// Show: Retorna um item 
// Store: Armazenamento 
// Update: Atualização 
// destroy: Exclusao

const User = require('../models/User');
module.exports = {
    async store(req, res) {
        const { email } = req.body;

        const user = await User.create({ email });

        return res.json(user)
    }
}