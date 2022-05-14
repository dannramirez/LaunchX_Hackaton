const setupTables = require("./relations");
require("dotenv").config(); // this is important!

const setup = async () => {


    const config = {
        database: process.env.DB,
        username: process.env.USDB,
        password: process.env.PSDB,
        host: process.env.HTDB,
        dialect: "postgres",
        port: process.env.PORTDB,
        setup: process.env.STDB || false,
        logging: true,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    };

    await setupTables(config).catch(handleErr);
    process.exit(0);
};

const handleErr = (err) => {
    process.exit(1);
};

setup();