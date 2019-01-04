module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;

//    var aDataIDs = sender.req.query.t;
    
//  console.log("get:"+JSON.stringify(sender.req.query));
    
    var OrgDBType=sender.req.query.OrgDBType;
    var OrgDBTypeSub=sender.req.query.OrgDBTypeSub;
    
//    console.log("OrgDBType:"+JSON.stringify(OrgDBType));
    
    
    var sql_getBindID="select BindDBType,BindDBTypeSub from pm_dbbinds where OrgDBType=? and OrgDBTypeSub=?"

    
    

    
    yjDBService.exec({
        sql: sql_getBindID,
        parameters: [OrgDBType,OrgDBTypeSub],
        rowsAsArray: true,
        success: function(resultM) {
        	
        	var dataM = yjDB.dataSet2ObjectList(resultM.meta, resultM.rows);
        	
//        	console.log("dataM:"+JSON.stringify(dataM));
        	
        	
        	var bindDBResult=[];
        	
        	for(var i=0;i<dataM.length;i++){
        		
        		var tableName=dataM[i].BindDBType;
        		var DBID=dataM[i].BindDBTypeSub;
//        		console.log("tableName:"+tableName+"  DBID:"+DBID);
        	    var sql_getBindData="select *,'"+tableName+"' as tableName from "+tableName+" where DBID="+DBID;       	    
//        	    console.log("sql_getBindData:"+sql_getBindData);
        		
        		yjDBService.exec({
        	        sql: sql_getBindData,
        	        parameters: [tableName,tableName,DBID],
        	        rowsAsArray: true, 
        	        success: function(resultS) {
        	        	
        	        	var dataS = yjDB.dataSet2ObjectList(resultS.meta, resultS.rows);
        	        	
//        	        	console.log("tableName"+JSON.stringify(tableName));
//        	        	dataS[0].tableName=tableName;
        	        	
        	        	
       	        	        bindDBResult.push(dataS[0]);
////        	            sender.success(result);
//
        	        	console.log("bindDBResult in for"+JSON.stringify(bindDBResult));
        	        	
        	        	if(bindDBResult.length==dataM.length){
        	        		sender.success(bindDBResult);
        	        	}
        	        	
        	        	
        	        },
        	        error: sender.error
        	    });
        	}
        	
//        	console.log("bindDBResult"+JSON.stringify(bindDBResult));
        	
        	
        	
//            sender.success(result);
        },
        error: sender.error
    });
// 
    
};