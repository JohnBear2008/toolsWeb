module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
    
// console.log("get:"+JSON.stringify(sender.req.query));
    
////   console.log("PM2333 test");
//       
    var obj=sender.req.query;
//    
    var updateContent="";

    
    for(var key in obj){ 	
    	if(key=="DBTable"){
    		var DBTable=obj[key];
    	}else if(key=="DBID"){
    		var DBID=obj[key];
    	}else{

    		if(obj[key]==""){
    			updateContent=updateContent+key+"='',";
    		}else{
    			updateContent=updateContent+key+"="+"'"+obj[key]+"',";
    		}
    		
//    		tableTitle=tableTitle+key+",";
//    		tableData=tableData+obj[key]+",";
    	}
    }
    
    
//    
    updateContent=updateContent.substr(0, updateContent.length - 1);  


    
    	var SQLUpdate=" update "+DBTable+" set "+updateContent +" where DBID="+DBID;

    
//
//
////var SQLInsert="insert into PM_customer (cust_FID,cust_Name) values(110,110)";
    
//	console.log("SQLUpdate:"+SQLUpdate);
//
    yjDBService.exec({
        sql: SQLUpdate,
        parameters: [],
        success: sender.success,
        error: sender.error
    });


};