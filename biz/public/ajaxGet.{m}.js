require("../../client/js/Date.js");
const sqlPublic=require("../../client/SQL/public.js");

console.log("sqlPublic:"+JSON.stringify(sqlPublic));


module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService
    var yjDB = global.yjRequire("yujiang.Foil").yjDB
    console.log("get:"+JSON.stringify(sender.req.query))
    let requestParams=sender.req.query;
    
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