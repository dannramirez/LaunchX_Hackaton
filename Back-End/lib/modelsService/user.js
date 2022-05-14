const { Op } = require("sequelize");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

function setupUser(UserModel, RoleModel) {

    async function createUser(user) {

        user.password = bcrypt.hashSync(user.password, 8);
        try {
            const existingUser = await UserModel.findOne({
                where: {
                    name: user.name
                }
            });

            const existingUserName = await UserModel.findOne({
                where: {
                    username: user.username
                }
            });

            const existingUserEmail = await UserModel.findOne({
                where: {
                    email: user.email
                }
            });

            if (existingUser || existingUserName || existingUserEmail) {
                return ({
                    error: "El usuario que intenta ingresar ya existe"
                });
            }
        } catch (error) {
            return ({
                error: "El usuario que intenta ingresar ya existe, verifica que los datos sean correctos!"
            });
        }

        try {
            const UserObj = await UserModel.create(user);       
            const [roleID] = await RoleModel.findAll({
                where: {
                    name: {
                        [Op.or]: user.role
                    }
                }
            });
            await UserObj.addRole(roleID, { through: { selfGranted: false } });
        } catch (error) {
            console.log(error);
            return ({
                error: "No se pudo crear o asignar un tipo de usuario al usuario"
            });
        }   

        return ({
            message: "User was registered successfully!"
        });
    }

    function findById(id) {
        return UserModel.findById(id);
    }

    function findAll() {
        return UserModel.findAll({
            raw: true
        });
    }

    function findByUsername(username) {
        return UserModel.findAll({
            where: {
                username
            }
        });
    }

    return {
        findById,
        findAll,
        UserModel,
        createUser,
        findByUsername
    };
}

module.exports = setupUser;