module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('user',
        {
            UserId: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            UserName: {
                type: Sequelize.STRING,
                unique: true,
                allowNull: false
            },
            UserMail: {
                type: Sequelize.STRING,
                allowNull: false
            },
            UserBirth: {
                type: Sequelize.DATE,
                allowNull: false
            },
            UserPassword: {
                type: Sequelize.STRING,
                allowNull: false
            },
            UserGender: {
                type: Sequelize.STRING,
                allowNull: true
            }
        },
        {
            tableName: 'users'
        }
    );
    return User;
}