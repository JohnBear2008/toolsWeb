module.exports = function(sender) {

    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
    
    var BILLID=sender.req.query.BILLID; 
    var PartsCode=sender.req.query.PartsCode; 
    var Reason=sender.req.query.Reason; 
    var Staff=sender.req.query.Staff; 
    console.log("报废申请 诚心 :", BILLID , "归隐:" , PartsCode ,"理：" ,Reason,"人：" ,Staff); 

    let SQLInsert= "INSERT INTO `auto_rec_abso` (  `BILL_ID`, `Parts_Year`, `Parts_Rule`, `Parts_Class`,  `Parts_Chi`, `Parts_Apply_Date`, `Parts_Limit_Date`, `Parts_Name`, `Parts_Status`, " +
    " `Staff`, `Property`, `Parts_Code`,`SMT_ID`, `SMT_Title` ,  `Supply_ID`,  `Supply_Title` ,  `Model` , `Assembly` , `PartsUnitE`, `PhaseStatus` , `UsePriority` , " +
    " `Parts_Prop1`,  `Parts_Prop2`, `Parts_Prop3`, `Parts_Prop4`, `Parts_Prop5`,`Parts_Prop6`, `Parts_Prop7`, `Parts_Prop8`, `Parts_Prop9`, `Parts_Prop10`, "+
    " `Parts_Prop11`, `Parts_Prop12`, `Parts_Prop13`, `Parts_Prop14`, `Parts_Prop15`, `Parts_Prop16`, `Parts_Prop17`, `Parts_Prop18`, `Parts_Prop19`, `Parts_Prop20` , `Reason` ) " +
    "  select   `BILL_ID`, `Parts_Year`, `Parts_Rule`, `Parts_Class`, `Parts_Chi`, `Parts_Apply_Date`, `Parts_Limit_Date`, `Parts_Name`, '3', '"+Staff+"' , `Property`, `Parts_Code`, " +
    " `SMT_ID`, `SMT_Title` , `Supply_ID`, `Supply_Title` , `Model` , `Assembly` , `PartsUnitE`, `PhaseStatus` , `UsePriority` , `Parts_Prop1`,  " +
    " `Parts_Prop2`, `Parts_Prop3`, `Parts_Prop4`, `Parts_Prop5`,`Parts_Prop6`, `Parts_Prop7`, `Parts_Prop8`, `Parts_Prop9`, `Parts_Prop10`, "+
    " `Parts_Prop11`, `Parts_Prop12`, `Parts_Prop13`, `Parts_Prop14`, `Parts_Prop15`, `Parts_Prop16`, `Parts_Prop17`, `Parts_Prop18`, `Parts_Prop19`, `Parts_Prop20` , '"+Reason+"' from `auto_parts`"+
    "  where BILL_ID=? OR Parts_Code =?  ";

    let SQLUpt= "Update `auto_parts` set  Parts_Status = '2' ,Reason = '"+Reason+"'  "+
    " where (BILL_ID=? OR Parts_Code =?)  ";
   //  console.log("报废 SQLInsert:"+SQLInsert);	 

   yjDBService.exec({
      sql: SQLInsert,
      parameters: [BILLID,PartsCode],
      success:  function(result) {
         yjDBService.exec({
            sql: SQLUpt,
            parameters: [BILLID,PartsCode],
            success:  function(result) {
               var retcode={"status":"OK","billid":BILLID,"partscode":PartsCode};
               sender.success(retcode);
               console.log("趙敏",retcode);
            },
            error: {},
         });
      },
      error: {},
   });
 
};