module.exports = function(sender) {

    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
    

    var path = sender.req.query.hyperpath;    
    var fname = sender.req.query.hyperfname;   
    
    var BILLID=sender.req.query.BILLID; 
    var PartsCode=sender.req.query.PartsCode; 
    console.log("花开 post:"+ BILLID); 
    console.log("见佛 post:"+ PartsCode); 
 
    
    let SQLInsert= "INSERT INTO `auto_rec_parts` (  `BILL_ID`, `Parts_Year`, `Parts_Rule`, `Parts_Class`, `Parts_Apply_Date`, `Parts_Limit_Date`, `Parts_Name`, `Parts_status`, `Staff`, `Property`, `Parts_Code`, `Supply_ID`)"+
    "select   `BILL_ID`, `Parts_Year`, `Parts_Rule`, `Parts_Class`, `Parts_Apply_Date`, `Parts_Limit_Date`, `Parts_Name`, `Parts_status`, `Staff`, `Property`, `Parts_Code`, `Supply_ID` from `auto_parts`"+
    "where BILL_ID=? OR Parts_Code =?  ";
    console.log("报废 SQLInsert:"+SQLInsert);	
    let SQLDelete="Delete From `auto_parts` where BILL_ID=? OR Parts_Code =? " ;
    console.log("报废 SQLDelete:"+SQLInsert);

yjDBService.exec({
   sql: SQLInsert,
   parameters: [BILLID,PartsCode],
   success:  function(result) {
      var retcode={"status":"OK","billid":BILLID,"partscode":PartsCode};
      sender.success(retcode);
      console.log("趙敏",retcode);
   },
   error: {},
});

yjDBService.exec({
   sql: SQLDelete,
   parameters: [BILLID,PartsCode],
   // success:  function(result) {
   // 	sender.success(result);
   // },
   error: {},
});
 
};