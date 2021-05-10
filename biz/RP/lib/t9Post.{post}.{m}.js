/*
 * @Author: your name
 * @Date: 2021-03-01 15:24:25
 * @LastEditTime: 2021-05-10 15:58:53
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \toolsWeb\biz\RP\lib\t9Post.{post}.{m}.js
 */
require("./js/Date");
const sqlObj = require("./sql");

console.log("sqlObj:" + JSON.stringify(sqlObj));

module.exports = function (sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService
    var yjDB = global.yjRequire("yujiang.Foil").yjDB

    // console.log("ajax Postqqq:", sender.req.query);



    // let r1 = sender.req.query
    let r1 = sender.req.body

    let sql = sqlObj.createSql(r1);



    yjDBService.exec({
        sql: sql,
        parameters: [],
        success: sender.success,
        error: sender.error
    });
};