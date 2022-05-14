const setupDatabase = require("../utils/db");
const Op = setupDatabase.Sequelize.Op;

function setupUser(UserModel, RoleModel) {

    async function createUser(user) {
        const existingUser = await UserModel.findOne({
            where: {
                id: user.id
            }
        });

        if (existingUser) {
            return ({
                error: "El usuario que intenta ingresar ya existe"
            });
        }

        const result = await UserModel.create(user);
        if (!result) {
            return ({
                error: "No se pudo crear el usuario"
            });
        }
        const existingRole = await RoleModel.findAll({
            where: {
                name: {
                    [Op.or]: user.role
                }
            }
        });

        if (!existingRole) {
            return ({
                error: "El rol no existe"
            });
        }

        const regiterUser= await user.setRoles(user.role);

        if (!regiterUser) {
            return ({
                error: "No se pudo agregar el Rol al usuario"
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