module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService
    var yjDB = global.yjRequire("yujiang.Foil").yjDB
    let sql = sender.req.query.sql
    yjDBService.exec({
        sql: sql,
        parameters: [],
        success: sender.success,
        error: sender.error
    });
};
