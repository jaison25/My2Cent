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
            }
        },
        {
            tableName: 'spending'
        }
    );
    return Spending;
}