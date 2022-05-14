require("dotenv").config(); // this is important!
const setupDonationModel = require("./models/donation");
const setupReportModel = require("./models/report");
const setupRoleModel = require("./models/roles");
const setupUserModel = require("./models/user");
const setupVolunteerModel = require("./models/volunteer");
const setupDatabaseModel = require("./utils/db");

const setupDonation = require("./modelsService/donation");
const setupReport = require("./modelsService/report");
const setupRole = require("./modelsService/roles");
const setupUser = require("./modelsService/user");
const setupVolunteer = require("./modelsService/volunteer");


const setup = async () => {

    const config = {
        database: process.env.DB,
        username: process.env.USDB,
        password: process.env.PSDB,
        host: process.env.HTDB,
        dialect: "postgres",
        port: process.env.PORTDB,
        setup: process.env.STDB,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    };

    await setupTables(config).catch(handleErr);
    console.log("DB Configurada");
    process.exit(0);

};

const handleErr = (err) => {

    console.log(err);
    process.exit(1);

};

const setupTables = async (config) => {

    const sequelize = setupDatabaseModel(config);
    const DonationModel = setupDonationModel(config);
    const ReportModel = setupReportModel(config);
    const RoleModel = setupRoleModel(config);
    const UserModel = setupUserModel(config);
    const VolunteerModel = setupVolunteerModel(config);

    RoleModel.belongsToMany(UserModel, {
        through: "user_roles",
        foreignKey: "roleId",
        otherKey: "userId"
    });
    UserModel.belongsToMany(RoleModel, {
        through: "user_roles",
        foreignKey: "userId",
        otherKey: "roleId"
    });

    UserModel.hasMany(DonationModel);
    DonationModel.belongsTo(UserModel);

    UserModel.hasMany(ReportModel);
    ReportModel.belongsTo(UserModel);

    UserModel.hasMany(VolunteerModel);
    VolunteerModel.belongsTo(UserModel);

    ReportModel.hasMany(VolunteerModel);
    VolunteerModel.belongsTo(ReportModel);

    ReportModel.hasMany(DonationModel);
    DonationModel.belongsTo(ReportModel);


    if (config.setup) {
        await sequelize.authenticate();
    }

    await sequelize.sync({
        force: true
    }).then(async () => {
        await initial(RoleModel);
    });

    const Donation = setupDonation(DonationModel, UserModel, ReportModel);
    const Report = setupReport(ReportModel, UserModel);
    const Role = setupRole(RoleModel);
    const User = setupUser(UserModel,RoleModel);
    const Volunteer = setupVolunteer(VolunteerModel, UserModel, ReportModel);


    return {
        Donation,
        Report,
        Role,
        User,
        Volunteer
    };
};

const initial = async (RoleModel) => {
    await RoleModel.create({
        id: 1,
        name: "user"
    });
    await RoleModel.create({
        id: 2,
        name: "organization"
    });
    await RoleModel.create({
        id: 3,
        name: "admin"
    });
};

setup();