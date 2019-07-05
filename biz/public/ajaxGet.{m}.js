require("../../client/js/Date.js");
module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService
    var yjDB = global.yjRequire("yujiang.Foil").yjDB
    console.log("get:"+JSON.stringify(sender.req.query))
    let sql=sender.req.query.sql
    
    yjDBService.exec({
        sql: sql,
        parameters:[],
        rowsAsArray: false,
        success: function(result){
        	sender.success(result)
        },
        error: sender.error
    });

};