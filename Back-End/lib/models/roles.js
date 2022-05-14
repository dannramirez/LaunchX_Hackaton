const Sequelize = require("sequelize");
const setupDatabase = require("../utils/db");

const setupRole= (config) => {
    const sequelize = setupDatabase(config);
    return sequelize.define("role", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });
};

module.exports = setupRole;