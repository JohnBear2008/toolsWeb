module.exports = function(sender) {
//  var yjDBService = global.yjRequire("yujiang.Foil").yjDBService.engine.sqlserver;
    var yjDBService = global.yjRequire("yujiang.Foil","yjDBService.engine.sqlserver");
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
    var yjDBServiceUtil=global.yjRequire("yujiang.Foil",'yjDBService.util.js');
    var connectionOptions=yjGlobal.config.db_Connection.erp_Connection.connection;
    
    console.log("connectionOptions:"+JSON.stringify(connectionOptions));
    var connection=null;
    if(connectionOptions){
    	connection=yjDBServiceUtil.extractConnectionOptions(connectionOptions);
    }
    
    console.log("connection:"+JSON.stringify(connection));
    
    var sql="select PKValue from comproduct a,(select PKValue from comChangeLog where   changetime>= DATEADD(hour,-1, GETDATE())) b where a.ProdID=b.PKValue ";
    
    yjDBService.exec({
    	
        connectionOptions:connection,
        sql : sql,
        parameters : [],
        rowsAsArray : true,
        success : function(result) {
            var data=yjDB.dataSet2ObjectList(result.meta,result.rows);
            
            
//            console.log("result:"+JSON.stringify(result));
//            
            console.log("data:"+JSON.stringify(data));
//            
            var mesData={return:true,Message:'',Data:data}

            sender.success(mesData);
        },
        error : sender.error
    });
}