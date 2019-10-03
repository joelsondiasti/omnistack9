// Importa o mongoose
const mongoose = require('mongoose');

// Cria um esquema, ou seja, define os dados da tabela
const UserSchema = new mongoose.Schema({
    // Usa-se a sintaxe <campo>:<tipoDoCampo>, usando tipos do javascript. Aceitando também objetos.
    email: String,
})

// Exporta o modulo transformando em modelo o Schema criado. 
// Assim o mongoose sabe que quando é criado um usuário ele deve usar o Schema correspondente. 
module.exports = mongoose.model('User', UserSchema)