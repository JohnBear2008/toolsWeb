/*
 * @Author: your name
 * @Date: 2019-12-04 15:01:33
 * @LastEditTime: 2021-03-17 15:55:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \toolsWeb\biz\RP\lib\ajaxPost.{post}.{m}.js
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
    // console.log('r1', r1);

    let sql = sqlObj.createSql(r1);



    yjDBService.exec({
        sql: sql,
        parameters: [],
        success: sender.success,
        error: sender.error
    });
};