module.exports = function(sender) {

    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;

    var path = sender.req.query.hyperpath;    
    var fname = sender.req.query.hyperfname;   
    
    var BILLID=sender.req.query.BILLID; 
    var PartsCode=sender.req.query.PartsCode; 
    var Auditor=sender.req.query.sessionName; 
    var Opinion=sender.req.query.Opinion; 
    let now = new Date();
    var PartsLimitDate = now.Format("yyyy-MM-dd");
    console.log("花开 BILLID:"+ BILLID,"见佛 PartsCode:", PartsCode,"明心 Auditor:", Auditor, "意难 " ,Opinion); 
    
    let SQLInsert= "INSERT INTO `auto_abs_parts` (  `BILL_ID`, `Parts_Year`, `Parts_Rule`, `Parts_Class`,  `Parts_Chi`, " +
    " `Parts_Apply_Date`, `Parts_Limit_Date`, `Parts_Name`, `Parts_Status`, `Staff`, `Auditor` ,`Property`, `Parts_Code`, " +
    " `SMT_ID`, `SMT_Title` , `Supply_ID`,  `Supply_Title` , `Soft_No` , `PID` ,  `Model` , `Assembly` , `PartsUnitE`, `PhaseStatus` , `UsePriority` ," +
    " `Reason` , `Opinion` ,`Parts_Prop1`,  `Parts_Prop2`, `Parts_Prop3`, `Parts_Prop4`, `Parts_Prop5`,`Parts_Prop6`, `Parts_Prop7`, " +
    " `Parts_Prop8`, `Parts_Prop9`, `Parts_Prop10`,  `Parts_Prop11`, `Parts_Prop12`, `Parts_Prop13`, `Parts_Prop14`, `Parts_Prop15`,  " +
    " `Parts_Prop16`, `Parts_Prop17`, `Parts_Prop18`, `Parts_Prop19`, `Parts_Prop20` )"+
    "  select   `BILL_ID`, `Parts_Year`, `Parts_Rule`, `Parts_Class`, `Parts_Chi`, `Parts_Apply_Date`, '"+PartsLimitDate+"' ," + 
    " `Parts_Name`, '2', `Staff`, '"+Auditor+"'  ,`Property`, `Parts_Code`, `SMT_ID`, `SMT_Title` , `Supply_ID`, `Supply_Title` , "+
    " `Soft_No` , `PID` , `Model` , `Assembly` , `PartsUnitE`, `PhaseStatus` , `UsePriority` , `Reason`, '"+Opinion+"' ,`Parts_Prop1`,  `Parts_Prop2`, " +
    " `Parts_Prop3`, `Parts_Prop4`, `Parts_Prop5`,`Parts_Prop6`, `Parts_Prop7`, `Parts_Prop8`, `Parts_Prop9`, `Parts_Prop10`, "+
    " `Parts_Prop11`, `Parts_Prop12`, `Parts_Prop13`, `Parts_Prop14`, `Parts_Prop15`, `Parts_Prop16`, `Parts_Prop17`, `Parts_Prop18`, `Parts_Prop19`, `Parts_Prop20` "+
    " from `auto_rec_abso` where BILL_ID=? OR Parts_Code =?  ";
   //  console.log("报废 SQLInsert:"+SQLInsert);	

    let SQLDelete="Delete From `auto_parts` where BILL_ID=? OR Parts_Code =? " ;
   //  console.log("报废 SQLDelete:"+SQLDelete);

    let SQLSTAS ="Update `auto_rec_abso` set  Parts_Status ='1' where BILL_ID=? OR Parts_Code =? " ;
   //  console.log("SQLSTAS:"+SQLSTAS);

   yjDBService.exec({
      sql: SQLInsert,
      parameters: [BILLID,PartsCode],
      success:  function(result) {

         yjDBService.exec({
            sql: SQLDelete,
            parameters: [BILLID,PartsCode],
            success:  function(result2) {

               yjDBService.exec({
                  sql : SQLSTAS,
                  parameters : [  BILLID, PartsCode ],
                  rowsAsArray : true,
                  success : function(result) {
                     var retcode={"status":"OK","billid":BILLID,"partscode":PartsCode};
                     sender.success(retcode);
                     console.log("趙敏",retcode);
                     cleanexp(PartsCode);
                  },
                  error : sender.error
            });
            },
            error: {},
         });
      },
      error: {},
   });
   function cleanexp(PartsCode) {
      let SQLDelete = "delete from `auto_exp` where Parts_Code =?   ";
      console.log( "清exp:美珠",PartsCode);
      yjDBService.exec({
         sql: SQLDelete,
         parameters: [PartsCode], 
         success: function (result) {
         },
         error: sender.error
      });
  }
};