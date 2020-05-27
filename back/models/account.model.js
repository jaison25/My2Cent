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
                //allowNull: false
            },
            AccountTotal: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            AccountUserID: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            AccountState: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 1
            }
        },
        {
            tableName: 'account'
        }
    );
    return Account;
}