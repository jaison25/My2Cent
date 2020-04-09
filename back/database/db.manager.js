const Sequelize = require('sequelize');
const sequelizeCx = require('./db.connection');

// Importar modelos
const UserModel = require('../models/user.model');

// Inicializar modelos
const User = UserModel(sequelizeCx, Sequelize);


const models = {
    User
}

const db = {
    ...models,
    sequelizeCx
}

module.exports = db;