module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
    var bName=sender.req.query.bName;
    var bRadio=sender.req.query.bRadio;
    var bCheckBox=sender.req.query.bCheckBox;
    console.log('get111111111111'+bName+bRadio+bCheckBox);
    var sql="SELECT * FROM erpcatogory ";
//    yjDBService.exec({
//        sql : sql,
//        parameters : [],
//        rowsAsArray : true,
//        success : function(result) {
//            var data=yjDB.dataSet2ObjectList(result.meta,result.rows);
//
//            sender.success(data);
//        },
//        error : sender.error
//    });
}