module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
 
    
//    var BILLID=sender.req.query.BILLID;
//    var PartsYear=sender.req.query.PartsYear;
//    var PartsRule=sender.req.query.PartsRule;
//    var PartsClass=sender.req.query.PartsClass;
//    var PartsApplyDate=sender.req.query.PartsApplyDate;
//    var PartsLimitDate=sender.req.query.PartsLimitDate;
//    var PartsName=sender.req.query.PartsName;
//    var Partsstatus=sender.req.query.Partsstatus;
//    var Staff=sender.req.query.Staff;
//    var Property=sender.req.query.Property;
    var PartsCode='AB1-12345';
//    var SupplyID=sender.req.query.SupplyID;
    
 	var PartsYear = sender.req.query.PartsYear; 
 	var PartsRule = sender.req.query.PartsRule; 
 	var BILLID = sender.req.query.BILLID; 
    
    console.log('拒绝 '+PartsYear+ PartsRule + BILLID ); 
    
  
    let SQL ="Update `auto_rec_parts` set  Parts_status ='2' where Parts_Year=? and Parts_Rule=? and BILL_ID=?  " ;
    console.log("SQL:"+SQL);
    
 
    yjDBService.exec({
        sql : SQL,
        parameters : [ PartsYear, PartsRule ,BILLID ],
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