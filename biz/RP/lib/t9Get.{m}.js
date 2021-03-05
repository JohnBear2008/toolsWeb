require("./js/Date");
const funs = require("./js/funs");
const sqlObj = require("./sql");

console.log("sqlObj:" + JSON.stringify(sqlObj));

const yjDBService_sqlserver = global.yjRequire("yujiang.Foil", "yjDBService.engine.sqlserver");
const yjDB = global.yjRequire("yujiang.Foil").yjDB;
const yjDBServiceUtil = global.yjRequire("yujiang.Foil", 'yjDBService.util.js');
const connectionOptions = yjGlobal.config.db_Connection.rich_T9.connection;
var connection = null;
if (connectionOptions) {
    connection = yjDBServiceUtil.extractConnectionOptions(connectionOptions);
}

module.exports = function (sender) {

    console.log("T9 get:11111111111111111111111" + JSON.stringify(sender.req.query))
    let r1 = sender.req.query;
    let sql = sqlObj.createSql(r1);

    console.log('t9 sql:', sql);


    yjDBService_sqlserver.exec({
        connectionOptions: connection,
        sql: sql,
        parameters: [],
        success: function (r) {
            let data = yjDB.dataSet2ObjectList(r.meta, r.rows);

            if (data.length > 0) {
                for (let n of data) {
                    n = funs.nullToEmpty(n)
                }
            }
            sender.success(data)
        },
        error: function (error) {
            console.log('T9 error3333333,', error);
            sender.error
        }
    })

};