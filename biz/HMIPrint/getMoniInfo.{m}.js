module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;

    var aDataIDs = sender.req.query.t;
    
//    console.log("get:"+sender.req.query);
    var sqlGetAllDataID = "SELECT * FROM hmiprint_moni order by UID DESC";

    // sqlGetIDInfo = "SELECT * FROM hmiprint_mold WHERE DataID=" + DataID + " ";
    yjDBService.exec({
        sql: sqlGetAllDataID,
        parameters: [],
        rowsAsArray: false, // Chenly 2018-10-19 返回obj arr

        success: function(result) {
            sender.success(result);
        },
        error: sender.error
    });
};