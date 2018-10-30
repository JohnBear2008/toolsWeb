module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
    var Manufacturer=sender.req.query.Manufacturer;
    var Prec=sender.req.query.Prec;
    var CtrlType=sender.req.query.CtrlType;
    var MachType=sender.req.query.MachType;
    var DDKey=sender.req.query.DDKey;
    var CN=sender.req.query.CN;
    var TW=sender.req.query.TW;
    var EN=sender.req.query.EN;
    var Visb=sender.req.query.Visb;

    console.log("get:"+JSON.stringify(sender.req.query));


 sql="INSERT INTO hmiprint_moni (Manufacturer,Prec,CtrlType,MachType,DDKey,CN,TW,EN,Visb) VALUES (?,?,?,?,?,?,?,?,?)";
    
    yjDBService.exec({
        sql : sql,
        parameters : [Manufacturer,Prec,CtrlType,MachType,DDKey,CN,TW,EN,Visb],
        success : sender.success,	     
        error : sender.error
   })
    
    

    
}