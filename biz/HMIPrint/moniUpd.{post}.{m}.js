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

  //  console.log("get:"+JSON.stringify(sender.req.query));


 sql="UPDATE hmiprint_moni SET Manufacturer=?,Prec=?,CtrlType=?,MachType=?,DDKey=?,CN=?,TW=?,EN=?,Visb=? WHERE UID=?";
    
    yjDBService.exec({
        sql : sql,
        parameters : [Manufacturer,Prec,CtrlType,MachType,DDKey,CN,TW,EN,Visb,UID],
        success : sender.success,	     
        error : sender.error
   })
    
    

    
}