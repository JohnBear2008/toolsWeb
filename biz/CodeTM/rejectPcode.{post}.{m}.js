module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
 
 
    var PartsCode='AB1-12345';
 	var PartsYear = sender.req.query.PartsYear; 
 	var PartsRule = sender.req.query.PartsRule; 
 	var BILLID = sender.req.query.BILLID; 
    var Auditor = sender.req.query.Auditor;
    console.log('拒绝 ', BILLID ); 
    let SQL ="Update `auto_rec_parts` set  Parts_status ='2', Auditor = ?  where   BILL_ID=?  " ;
    console.log("SQL:"+SQL);
 
    yjDBService.exec({
        sql : SQL,
        parameters : [ Auditor , BILLID ],
        rowsAsArray : true,
        success : function(result) {
//            var data=yjDB.dataSet2ObjectList(result.meta,result.rows);
            var retcode={"status":"OK"};
            sender.success(retcode);
        	console.log("不可",result)
        },
//        success :sender.success,
        error : sender.error
    });
    
}