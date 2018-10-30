module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
    
    var UID=sender.req.query.UID;
    var Prec=sender.req.query.Prec;
    var Manufacturer=sender.req.query.Manufacturer;
    var CtrlType=sender.req.query.CtrlType;
    var MachType=sender.req.query.MachType;
    var DDKey=sender.req.query.DDKey;
    var CN=sender.req.query.CN;
    var TW=sender.req.query.TW;
    var EN=sender.req.query.EN;
    var Visb=sender.req.query.Visb;
    var Reserved0=sender.req.query.Reserved0;
    var Reserved1=sender.req.query.Reserved1;
    var Reserved2=sender.req.query.Reserved2;
    var Reserved3=sender.req.query.Reserved3;
    var Reserved4=sender.req.query.Reserved4;

  //  console.log("get:"+JSON.stringify(sender.req.query));


 sql="UPDATE hmiprint_moni SET Manufacturer=?,Prec=?,CtrlType=?,MachType=?,DDKey=?,CN=?,TW=?,EN=?,Visb=?,Reserved0=?,Reserved1=?,Reserved2=?,Reserved3=?,Reserved4=? WHERE UID=?";
    
    yjDBService.exec({
        sql : sql,
        parameters : [Manufacturer,Prec,CtrlType,MachType,DDKey,CN,TW,EN,Visb,Reserved0,Reserved1,Reserved2,Reserved3,Reserved4,UID],
        success : sender.success,	     
        error : sender.error
   })
    
    

    
}