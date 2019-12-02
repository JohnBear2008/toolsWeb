module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService
    var yjDB = global.yjRequire("yujiang.Foil").yjDB

    console.log("ajax Post:"+JSON.stringify(sender.req.query));
    
    let sql = sender.req.query.sql
    let params=sender.req.query.params
    yjDBService.exec({
        sql: sql,
        parameters: params,
        success: sender.success,
        error: sender.error
    });
};
