function setupDonation(DonationModel, UserModel, ReportModel) {
    
    function findById(id) {
        return DonationModel.findById(id);
    }

    function findAll() {
        return DonationModel.findAll({
            raw: true
        });
    }

    return {
        findById,
        findAll
    };
}

module.exports = setupDonation;