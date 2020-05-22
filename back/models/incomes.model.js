module.exports = (sequelize, Sequelize) => {
    const Income = sequelize.define('incomes',
        {
            IncomeId: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            IncomeName: {
                type: Sequelize.STRING,
                allowNull: false
            },
            IncomeAmount: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            IncomeAccountID: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            IncomeState: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 1
            },
            IncomeDate: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: new Date()
            },
            IncomePeriod: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0
            }
        },
        {
            tableName: 'incomes'
        }
    );
    return Income;
}