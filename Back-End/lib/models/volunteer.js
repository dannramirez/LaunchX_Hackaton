const Sequelize = require("sequelize");
const setupDatabase = require("../utils/db");

const setupVolunteer= (config) =>{
    const sequelize = setupDatabase(config);
    return sequelize.define("volunteer", {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false
        }
    });
};

module.exports = setupVolunteer;