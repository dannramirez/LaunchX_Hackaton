const configTest = {
    db: {
        database: process.env.DB,
        username: process.env.USDB,
        password: process.env.PSDB,
        host: process.env.HTDB,
        dialect: "postgres",
        port: process.env.PORTDB,
        logging: true,
        setup:true,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    },
    auth: {
        secret: process.env.SECRET
    }
};

module.exports = configTest;