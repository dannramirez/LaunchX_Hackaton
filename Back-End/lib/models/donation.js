const Sequelize = require("sequelize");
const setupDatabase = require("../utils/db");

const setupDonation= (config) => {
    const sequelize = setupDatabase(config);
    return sequelize.define("donation", {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false
        },
        quantity: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });
};

module.exports =   setupDonation;