function setupReport(ReportModel) {

    async function createReport(report) {
        try {
            await ReportModel.create(report);
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
        return ReportModel.findOne({
            where: {
                id: id
            }
        });
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