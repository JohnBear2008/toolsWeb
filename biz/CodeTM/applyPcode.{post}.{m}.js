module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
 
    let now  = new Date();
    var ApplyDate = now.Format("yyyy-MM-dd");
    var BILLDate = now.Format("yyyyMMddHHmm");
    var BILLID=BILLDate+"" ;
    var PartsYear=sender.req.query.PartsYear;
    var PartsRule=sender.req.query.PartsRule;
    var PartsClass=sender.req.query.PartsClass;
    var PartsApplyDate=ApplyDate;
    var PartsLimitDate=ApplyDate;
    var PartsName=sender.req.query.PartsName;
    var Partsstatus='0';
    var Staff=sender.req.query.Staff;
    var Property=sender.req.query.Property;
    var PartsCode=PartsRule+PartsClass+'-000001';
    var SupplyID=sender.req.query.SupplyID;
    
    console.log('申请'+Property + SupplyID );
    console.log('属'+PartsYear +PartsRule+PartsClass );
    
    
    var sql="INSERT INTO auto_rec_parts (`BILL_ID`, `Parts_Year`, `Parts_Rule`, `Parts_Class`, `Parts_Apply_Date`, `Parts_Limit_Date`," +
    		" `Parts_Name`, `Parts_status`, `Staff`, `Property`, `Parts_Code`, `Supply_ID`  ) VALUES (?,?,?,?,?,?,?,?,?,?,?,? )";
      
    yjDBService.exec({
        sql : sql,
        parameters : [BILLID, PartsYear, PartsRule, PartsClass, PartsApplyDate, PartsLimitDate, PartsName, Partsstatus, Staff, Property, PartsCode, SupplyID  ],
        rowsAsArray : true,
        success : function(result) {
            // var data=yjDB.dataSet2ObjectList(result.meta,result.rows);
            var retcode={"status":"applyOK","billid": BILLID };
            sender.success(retcode);
        	console.log(result)
        },
        // success :sender.success,
        error : sender.error
    });
    
    
}