require("./js/Date");
const sqlObj = require("./sql");

console.log("sqlObj:" + JSON.stringify(sqlObj));


module.exports = function (sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService
    var yjDB = global.yjRequire("yujiang.Foil").yjDB
    console.log("get:" + JSON.stringify(sender.req.query))
    let r1=sender.req.query;

    let sql=sqlObj.createSql(r1);

    yjDBService.exec({
        sql: sql,
        parameters: [],
        rowsAsArray: false,
        success: function (result) {
            sender.success(result)
        },
        error: sender.error
    });

};