module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
    var UID=sender.req.query.UID;
    var MKID=sender.req.query.MKID;
    var AGID=sender.req.query.AGID;
    var MCID=sender.req.query.MCID;
    var EndDate=sender.req.query.EndDate;
    var CreateDate=sender.req.query.CreateDate;
    var SP=sender.req.query.SP;
    var PW=sender.req.query.PW;
    var Type=sender.req.query.Type;
    var FQ=sender.req.query.FQ;
    
    
    
    console.log('get'+UID+MKID+AGID+MCID+EndDate+CreateDate+SP+PW+Type+FQ);
    
    
    var sql="INSERT INTO spinfo (UID,MKID,AGID,MCID,EndDate,CreateDate,SP,PW,Type,FQ) VALUES (?,?,?,?,?,?,?,?,?,?)";
    
//    INSERT INTO table_name (column1, column2, column3,...)
//    VALUES (value1, value2, value3,...)
//    
    yjDBService.exec({
        sql : sql,
        parameters : [UID,MKID,AGID,MCID,EndDate,CreateDate,SP,PW,Type,FQ],
        rowsAsArray : true,
//        success : function(result) {
////            var data=yjDB.dataSet2ObjectList(result.meta,result.rows);
//            sender.success();
//        	console.log(result)
//        	
//        },
        success :sender.success,
        error : sender.error
    });
    
    
}