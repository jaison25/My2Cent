module.exports = (sequelize, Sequelize) => {
    const Spending = sequelize.define('spending',
        {
            SpendingId: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            SpendingName: {
                type: Sequelize.STRING,
                allowNull: false
            },
            SpendingAmount: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            SpendingAccountID: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            SpendingState: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 1
            },
            SpendingDate: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: new Date()
            },
            SpendingPeriod: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0
            }
        },
        {
            tableName: 'spending'
        }
    );
    return Spending;
}