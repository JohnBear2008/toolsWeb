require("../../client/js/Date.js");

module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;

//    var aDataIDs = sender.req.query.t;
    
 //  console.log("get11:"+JSON.stringify(sender.req.query));
    
    var billName=sender.req.query.billName;  
    var billID=sender.req.query.billID;  
    var billVersion=sender.req.query.billVersion;  
    
    var SQLExcute = "SELECT * FROM ppm_files_upload WHERE billName=? AND billID=? AND billVersion=? ";

    
//    console.log("SQLExcute:"+JSON.stringify(SQLExcute));
    yjDBService.exec({
        sql: SQLExcute,
        parameters: [billName,billID,billVersion],
        rowsAsArray: false,
        success: function(result) {
            sender.success(result);
        },
        error: sender.error
    });
};