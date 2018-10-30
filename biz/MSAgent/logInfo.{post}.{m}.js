module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
    var UID=sender.req.query.UID;
    var MKID=sender.req.query.MKID;
    var AGID=sender.req.query.AGID;
    var MCID=sender.req.query.MCID;
    var EndDate=sender.req.query.EndDate;
    var Customer=sender.req.query.Customer;

    var SP=sender.req.query.SP;
    var PW=sender.req.query.PW;
    var Type=sender.req.query.Type;
    var FQ=sender.req.query.FQ;
    var downloadNum=sender.req.query.downloadNum;
    


 sql="INSERT INTO ms_spinfo (UID,MKID,Customer,AGID,MCID,EndDate,SP,PW,Type,FQ,downloadNum) VALUES (?,?,?,?,?,?,?,?,?,?,?)";
    
    yjDBService.exec({
        sql : sql,
        parameters : [UID,MKID,Customer,AGID,MCID,EndDate,SP,PW,Type,FQ,downloadNum],
        success : sender.success,	     
        error : sender.error
   })
    
    

    
}