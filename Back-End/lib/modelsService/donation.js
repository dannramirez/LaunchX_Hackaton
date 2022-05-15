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
            }
        });
    }

    function findAll() {
        return DonationModel.findAll({
            raw: true
        });
    }

    function findByReportId(id) {
        return DonationModel.findAll({
            where: {
                reportId: id
            }
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