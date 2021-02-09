module.exports = function(sender) {

    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
    

    var path = sender.req.query.hyperpath;    
    var fname = sender.req.query.hyperfname;   
    var BILLID = sender.req.query.BILLID;   
    console.log("笑 post:"+ BILLID); 
 
    let SQLInsert="Delete From `auto_rec_parts` where BILL_ID = ?" ;
  
    console.log("SQLDelete:"+SQLInsert);

yjDBService.exec({
   sql: SQLInsert,
   parameters: [BILLID],
   success:  function(result) {
    var retcode={"status":"OK","billid": BILLID };
    sender.success(retcode);
   },
   error: {},
});
 

};