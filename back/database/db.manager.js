const Sequelize = require('sequelize');
const sequelizeCx = require('./db.connection');

// Importar modelos
const UserModel = require('../models/user.model');
const AccountModel = require('../models/account.model');
const IncomesModel = require('../models/incomes.model');
const SpendingModel = require('../models/spending.model');
const IncomesTypeModel = require('../models/incometype.model');

// Inicializar modelos
const User = UserModel(sequelizeCx, Sequelize);
const Account = AccountModel(sequelizeCx, Sequelize);
const Income = IncomesModel(sequelizeCx, Sequelize);
const Spending = SpendingModel(sequelizeCx, Sequelize);
const IncomesType = IncomesTypeModel(sequelizeCx, Sequelize);

//Relaciones user account
User.hasMany(Account, {foreignKey: "AccountUserID", sourceKey: "UserId"});
Account.belongsTo(User,{foreignKey: "AccountUserID", sourceKey:"UserId"});
//Relacion account income
Account.hasMany(Income, {foreignKey: "IncomeAccountID", sourceKey: "AccountId"});
Income.belongsTo(Account,{foreignKey: "IncomeAccountID", sourceKey:"AccountId"});
//Relación Spending Account
Account.hasMany(Spending, {foreignKey: "SpendingAccountID", sourceKey: "AccountId"});
Spending.belongsTo(Account,{foreignKey: "SpendingAccountID", sourceKey:"AccountId"});
//Relación IncomesType Income
Income.hasMany(IncomesType, {foreignKey: "IncomesTypeIncomeID", sourceKey: "IncomeId"});
IncomesType.belongsTo(Income,{foreignKey: "IncomesTypeIncomeID",sourceKey: "IncomeId"});

const models = {
    User,
    Account,
    Income,
    Spending,
    IncomesType
}

const db = {
    ...models,
    sequelizeCx
}

module.exports = db;