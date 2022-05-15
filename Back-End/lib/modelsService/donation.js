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

    return {
        createDonation,
        findById,
        findAll
    };
}

module.exports = setupDonation;