const dbConfig = {
    HOST: "localhost",
    PORT: 3306,
    USER: "Admin",
    PASSWORD: "my2centAdmin",
    DB: "my2cent",
    DIALECT: "mysql",
    POOL: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}
module.exports = dbConfig;