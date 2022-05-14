function  setupRole(RoleModel) {

    function findById(id) {
        return RoleModel.findById(id);
    }

    function findAll() {
        return RoleModel.findAll({
            raw: true
        });
    }

    return {
        findById,
        findAll
    };
}

module.exports = setupRole;