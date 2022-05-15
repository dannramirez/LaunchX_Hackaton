function setupReport(ReportModel, UserModel, DonationModel, VolunteerModel) {

    async function createReport(report) {
        try {
            const reporte = await ReportModel.create(report);
            return ({
                message: "Report registered successfully!"
            });
        } catch (error) {
            return ({
                message: "Reporte no registrado!"
            });
        }
    }

    function findById(id) {
        return ReportModel.findById(id);
    }

    function findAll() {
        return ReportModel.findAll({
            raw: true
        });
    }

    return {
        createReport,
        findById,
        findAll
    };
}

module.exports = setupReport;