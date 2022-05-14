function setupReport(ReportModel, UserModel){

    function findById(id) {
        return ReportModel.findById(id);
    }

    function findAll() {
        return ReportModel.findAll({
            raw: true
        });
    }

    return {
        findById,
        findAll
    };
}

module.exports = setupReport;