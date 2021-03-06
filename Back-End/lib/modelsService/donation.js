function setupDonation(DonationModel, UserModel, ReportModel) {

    async function createDonation(donation) {
        try {
            await DonationModel.create(donation);
            return ({
                message: "Donación registrada exitosamente!"
            });
        } catch (error) {
            return ({
                message: "Donativo no registrado!"
            });
        }
    }

    function findById(id) {
        return DonationModel.findOne({
            where: {
                id: id
            },
            include: [{
                model: ReportModel
            },{
                model: UserModel
            }]
        });
    }

    function findAll() {
        return DonationModel.findAll({
            include: [{
                model: ReportModel
            },{
                model: UserModel
            }],
            raw: true
        });
    }

    function findByReportId(id) {
        return DonationModel.findAll({
            where: {
                reportId: id
            },
            include: [{
                model: UserModel
            }]
        });
    }

    function findByUserId(id) {
        return DonationModel.findAll({
            where: {
                userId: id
            },
            include: [{
                model: ReportModel
            }, ],
            raw: true
        });
    }

    return {
        createDonation,
        findByReportId,
        findByUserId,
        findById,
        findAll
    };
}

module.exports = setupDonation;