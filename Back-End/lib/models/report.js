const Sequelize = require("sequelize");
const setupDatabase = require("../utils/db");

const setupReport= (config) =>{
    const sequelize = setupDatabase(config);
    return sequelize.define("report", {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        lat: {
            type: Sequelize.STRING,
            allowNull: false
        },
        lon: {
            type: Sequelize.STRING,
            allowNull: false
        },
        type: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });
};

module.exports = setupReport;