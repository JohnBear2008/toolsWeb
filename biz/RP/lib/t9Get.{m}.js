require("./js/Date");
const funs = require("./js/funs");
const sqlObj = require("./sql");

console.log("sqlObj:" + JSON.stringify(sqlObj));

const yjDBService_sqlserver = global.yjRequire("yujiang.Foil", "yjDBService.engine.sqlserver");
// const yjDB = global.yjRequire("yujiang.Foil").yjDB;
const yjDBServiceUtil = global.yjRequire("yujiang.Foil", 'yjDBService.util.js');
const connectionOptions = yjGlobal.config.db_Connection.rich_T9.connection;
const connection = null;
if (connectionOptions) {
    connection = yjDBServiceUtil.extractConnectionOptions(connectionOptions);
}

module.exports = function (sender) {

    console.log("get:" + JSON.stringify(sender.req.query))
    let r1 = sender.req.query;
    let sql = sqlObj.createSql(r1);

    // yjDBService.exec({
    //     sql: sql,
    //     parameters: [],
    //     rowsAsArray: false,
    //     success: function (result) {
    //         if (result.length > 0) {
    //             for (let n of result) {
    //                 n = funs.nullToEmpty(n)
    //             }
    //         }
    //         sender.success(result)
    //     },
    //     error: sender.error
    // });

    yjDBService_sqlserver.exec({
        connectionOptions: connection,
        sql: sql,
        parameters: [],
        success: function (result) {
            if (result.length > 0) {
                for (let n of result) {
                    n = funs.nullToEmpty(n)
                }
            }
            sender.success(result)
        },
        error: sender.error
    })

};