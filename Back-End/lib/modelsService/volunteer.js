function setupVolunteer(VolunteerModel, UserModel, ReportModel) {
    
    function findById(id) {
        return VolunteerModel.findById(id);
    }

    function findAll() {
        return VolunteerModel.findAll({
            raw: true
        });
    }

    return {
        findById,
        findAll
    };
}

module.exports = setupVolunteer;