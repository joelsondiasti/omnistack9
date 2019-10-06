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

        const verifyEmail = await User.findOne({email});
        if (verifyEmail) {
            // console.log(verifyEmail._id)
            return res.json(verifyEmail)
        }

        const user = await User.create({ email });

        return res.json(user)
    }
}