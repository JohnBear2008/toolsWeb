require("./js/Date");
const sqlObj = require("./sql");

console.log("sqlObj:" + JSON.stringify(sqlObj));

module.exports = function (sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService
    var yjDB = global.yjRequire("yujiang.Foil").yjDB


    // let r1 = sender.req.query
    let r1 = sender.req.body
    console.log('r1',r1);

    let sql

    if (r1.excuteSql) {
        sql = r1.excuteSql
    } else {
        sql = sqlObj.createSql(r1);
    }



    yjDBService.exec({
        sql: sql,
        parameters: [],
        success: sender.success,
        error: sender.error
    });
};