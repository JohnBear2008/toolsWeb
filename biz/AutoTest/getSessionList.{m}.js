/*jshint esversion:6*/
module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;

    let usr = sender.req.query.usr_account;
    var execSQL = "SELECT * FROM autotest_session WHERE usr_account = ?",
        aSQLPara = [usr];

    yjDBService.exec({
        sql: execSQL,
        parameters: aSQLPara,
        rowsAsArray: false, // Chenly 2018-10-19 返回obj arr

        success: function(result) {
            sender.success(result);
        },
        error: sender.error,
    });
};
