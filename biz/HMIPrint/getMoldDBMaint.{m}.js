module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;

    var aDataIDs = sender.req.query.t,
        sqlGetAllDataID = "SELECT * FROM hmiprint_mold_tm55 order by UID DESC";

    yjDBService.exec({
        sql: sqlGetAllDataID,
        parameters: [],
        rowsAsArray: false, // Chenly 2018-10-19 返回obj arr

        success: function(result) {
            sender.success(result);
        },
        error: sender.error
    });
};
