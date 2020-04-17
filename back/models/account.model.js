module.exports = (sequelize, Sequelize) => {
    const Account = sequelize.define('account',
        {
            AccountId: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            AccountName: {
                type: Sequelize.STRING,
                allowNull: false
            },
            AccountType: {
                type: Sequelize.STRING,
                allowNull: false
            },
            AccountTotal: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            AccountUserID: {
                type: Sequelize.INTEGER,
                allowNull: false
            }
        },
        {
            tableName: 'account'
        }
    );
    return Account;
}