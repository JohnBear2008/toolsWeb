var yjDBService_sqlserver = global.yjRequire("yujiang.Foil","yjDBService.engine.sqlserver");
var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
var yjDB = global.yjRequire("yujiang.Foil").yjDB;
var yjDBServiceUtil=global.yjRequire("yujiang.Foil",'yjDBService.util.js');
var connectionOptions=yjGlobal.config.db_Connection.erp_Connection.connection;
var async = require('async');
var connection=null;
    if(connectionOptions){
	    	connection=yjDBServiceUtil.extractConnectionOptions(connectionOptions);
	}
	    
    var getsql="select PKValue from comproduct a,(select PKValue from comChangeLog where   changetime>= DATEADD(hour,-1, GETDATE())) b where a.ProdID=b.PKValue ";
    var postsql="insert into erpdb (PKValue) values(?)"


	    
var schedule = require("node-schedule");


(function() {
    var rule = new schedule.RecurrenceRule();  
   rule.minute = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59 ];  
//    rule.second=  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59 ];  
     
    schedule.scheduleJob(rule, function(){ 
	
    	ERPtoMES();


    });
})();


function ERPtoMES(){
	yjDBService_sqlserver.exec({
    	
        connectionOptions:connection,
        sql : getsql,
        parameters : [],
        rowsAsArray : true,
        success : function(result) {
            var data=yjDB.dataSet2ObjectList(result.meta,result.rows);
            console.log("data:"+JSON.stringify(data));
            //插入mes-----------------
            
            yjDBService.exec({
                sql: postsql,
                parameters: [data[0].PKValue],
                success: function(result) {
                	console.log("插入成功!")
                },
                error: {}
            });
        },
        error : {}
    });
	
	
}



	
