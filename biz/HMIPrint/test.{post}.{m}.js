module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
    var UID=sender.req.query.UID;

    console.log("get:"+JSON.stringify(sender.req.query));


// sql="INSERT INTO spinfo (UID,MKID,Customer,AGID,MCID,EndDate,SP,PW,Type,FQ,downloadNum) VALUES (?,?,?,?,?,?,?,?,?,?,?)";
//    
//    yjDBService.exec({
//        sql : sql,
//        parameters : [UID,MKID,Customer,AGID,MCID,EndDate,SP,PW,Type,FQ,downloadNum],
//        success : sender.success,	     
//        error : sender.error
//   })
//    
    

    
}