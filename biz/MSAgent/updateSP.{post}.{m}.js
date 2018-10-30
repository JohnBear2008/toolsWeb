module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
    var SPID=sender.req.query.SPID;
    var downloadNum=sender.req.query.downloadNum;

 sql="UPDATE ms_spinfo SET downloadNum=? WHERE SPID=?";
    
    yjDBService.exec({
        sql : sql,
        parameters : [downloadNum,SPID],
        success : sender.success,	     
        error : sender.error
   })

}