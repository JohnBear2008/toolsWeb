require("../../client/js/Date.js");

module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;

//    var aDataIDs = sender.req.query.t;
    
   console.log("get:"+JSON.stringify(sender.req.query));
    
    var DBTable=sender.req.query.DBTable;  
    var sqlGetTableData = "SELECT * FROM "+DBTable;
    // sqlGetIDInfo = "SELECT * FROM hmiprint_mold WHERE DataID=" + DataID + " ";
    
    yjDBService.exec({
        sql: sqlGetTableData,
        parameters: [],
        rowsAsArray: false, // Chenly 2018-10-19 返回obj arr
        success: function(result) {
            sender.success(result);
        },
        error: sender.error
    });
};