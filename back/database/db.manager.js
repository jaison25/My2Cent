const Sequelize = require('sequelize');
const sequelizeCx = require('./db.connection');

// Importar modelos
const UserModel = require('../models/user.model');
const AccountModel = require('../models/account.model');

// Inicializar modelos
const User = UserModel(sequelizeCx, Sequelize);
const Account = AccountModel(sequelizeCx, Sequelize);

//Relaciones
User.hasMany(Account, {foreignKey: "AccountUserID", sourceKey: "UserId"});
Account.belongsTo(User,{foreignKey: "AccountUserID", sourceKey:"UserId"});


const models = {
    User,
    Account
}

const db = {
    ...models,
    sequelizeCx
}

module.exports = db;