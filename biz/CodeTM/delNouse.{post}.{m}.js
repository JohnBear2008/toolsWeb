module.exports = function(sender) {

    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
    

    var path = sender.req.query.hyperpath;    
    var fname = sender.req.query.hyperfname;   
    
    var Load_code = sender.req.query.Load_code;   
    console.log("成佛 post:"+JSON.stringify(sender.req.query.Load_code)); 
 
    let SQLInsert="Delete From `auto_parts` where Parts_Code = ?" ;
  
    console.log("SQLDelete:"+SQLInsert);

//yjDBService.exec({
//    sql: SQLInsert,
//    parameters: [Load_code],
//    success:  function(result) {
// // console.log("result:"+JSON.stringify(result));
//    	sender.success(result);
//    },
//    error: {},
//});
 

};