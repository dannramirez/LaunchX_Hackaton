const Sequelize = require("sequelize");
let sequelizeDB = null;

const setupDatabase = (config) => {
    if(!sequelizeDB){
        sequelizeDB = new Sequelize(config);
    }
    return sequelizeDB;
};

module.exports = setupDatabase;