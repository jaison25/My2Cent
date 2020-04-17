module.exports = (sequelize, Sequelize) => {
    const IncomesType = sequelize.define('incomestype',
        {
            IncomeTypeId: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            IncomesTypeName: {
                type: Sequelize.STRING,
                allowNull: false
            },
            IncomesTypeIncomeID: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            IncomeTypeState: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 1
            }
        },
        {
            tableName: 'incomestype'
        }
    );
    return IncomesType;
}