module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
    var UID = sender.req.query.UID;

    // console.log("get:" + JSON.stringify(sender.req.query));

    sql = "delete  from hmiprint_moni where UID=?";

    yjDBService.exec({
        sql: sql,
        parameters: [UID],
        success: sender.success,
        error: sender.error
    });

};
