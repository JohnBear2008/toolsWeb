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
	    
    var getsql=" select a.MKOrdNO,b.Action from prdMKOrdMain a,(select PKValue,Action from comChangeLog where   changetime>= DATEADD(hour,-1, GETDATE()+2)) b where a.MKOrdNO=b.PKValue ";
    //getsql 为从erp抓取数据的sql语句,可修改
    
    var postsql="insert into mes_dataaynchmappings (ProjectName,TableName,ID,Name,SynchMold,SynchFlag,SynchType,CreateTime) values(?,?,?,?,?,?,?,?)"
    //postsql 为向中间数据库插入数据的sql语句	
    	
    	
//-------------------------------
    	
    	Date.prototype.Format = function (fmt) {
        var o = {
            "M+": this.getMonth() + 1, //月份 
            "d+": this.getDate(), //日 
            "H+": this.getHours(), //小时 
            "m+": this.getMinutes(), //分 
            "s+": this.getSeconds(), //秒 
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
            "S": this.getMilliseconds() //毫秒 
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }
    	
    	
    	

var CreateTime = new Date().Format("yyyy-MM-dd HH:mm:ss");
   
    console.log("CreateTime:"+JSON.stringify(CreateTime));


////------------------------------------	    
var schedule = require("node-schedule");


(function() {
    var rule = new schedule.RecurrenceRule();  
 rule.minute = [0,30];  
 //rule.minute =  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59 ]; 
// rule.second=  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59 ];  
     
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
            
            if(data.length!=0){
            	
            	
            	for(var i=0;i<data.length;i++){
            		yjDBService.exec({
                        sql: postsql,
                        parameters: ["erp","prdMKOrdMain",data[i].MKOrdNO,"厂内制令主表","DataBase","0",data[i].Action,CreateTime],
                        success: function(result) {
                        	console.log("插入成功!")
                        },
                        error: {}
                    });
            	}
            	
            	 
            	
            }

           
            
            
        },
        error : {}
    });
	
	
}



	
