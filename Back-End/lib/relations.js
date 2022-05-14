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
const bcrypt = require("bcryptjs");

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

    await sequelize.authenticate();

    if (config.setup) {
        await sequelize.sync({
            force: true
        }).then(async () => {
            await initial(RoleModel, UserModel);
        });
    }

    const Donation = setupDonation(DonationModel, UserModel, ReportModel);
    const Report = setupReport(ReportModel, UserModel, DonationModel, VolunteerModel);
    const Role = setupRole(RoleModel);
    const User = setupUser(UserModel, RoleModel);
    const Volunteer = setupVolunteer(VolunteerModel, UserModel, ReportModel);

    return {
        Donation,
        Report,
        Role,
        User,
        Volunteer
    };
};

const initial = async (RoleModel, UserModel) => {
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
    await UserModel.create({
        name: "Prueba",
        username: "Oceanauta",
        email: "test@test.com",
        password: bcrypt.hashSync("prueba", 8)
    });
};


module.exports = setupTables;