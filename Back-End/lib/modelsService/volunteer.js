function setupVolunteer(VolunteerModel, UserModel, ReportModel) {
    
    async function createVolunteer(volunteer) {
        try {
            await VolunteerModel.create(volunteer);
            return ({
                message: "Voluntario registrado exitosamente!"
            });
        } catch (error) {
            return ({
                message: "Voluntario no registrado!"
            });
        }
    }

    function findById(id) {
        return VolunteerModel.findOne({
            where: {
                id: id
            }
        });
    }

    function findAll() {
        return VolunteerModel.findAll({
            include: [{
                model: ReportModel
            },{
                model: UserModel
            }],
            raw: true
        });
    }

    function findByUserId(id) {
        return VolunteerModel.findAll({
            where: {
                userId: id
            },
            include: [{
                model: ReportModel
            }, ],
            raw: true
        });
    }

    function findByReportId(id) {
        return VolunteerModel.findAll({
            where: {
                reportId: id
            },
            include: [{
                model: UserModel
            }, ],
            raw: true
        });
    }

    return {
        findById,
        createVolunteer,
        findByUserId,
        findByReportId,
        findAll
    };
}

module.exports = setupVolunteer;