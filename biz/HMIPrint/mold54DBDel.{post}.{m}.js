/*jshint esversion: 6 */
module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
    var UID = sender.req.query.UID;

    var aSQLPara = [],
        execSQL = "";

    execSQL = "DELETE FROM hmiprint_mold_tm54 WHERE UID=? ";
    aSQLPara = [UID];

    yjDBService.exec({
        sql: execSQL,
        parameters: aSQLPara,
        success: sender.success,
        error: sender.error
    });

};
