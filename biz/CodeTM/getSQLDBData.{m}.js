require("../../client/js/Date.js");
require("../../client/js/SQL.js");
require("../../client/js/SQLTMCode.js");


module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;

    console.log("get:"+JSON.stringify(sender.req.query));

    var SQL=sender.req.query.SQL;  
    var DBTable=sender.req.query.DBTable;  
    var DBID=sender.req.query.DBID;  
    var filter=sender.req.query.filter; 
    var orderBy=sender.req.query.orderBy; 
    var limit=sender.req.query.limit; 
  

   console.log("SQL:"+SQL);

   var param1="";  
   var param2="";  
 
    
   
   console.log("DBTable:"+DBTable);
//    console.log("DBID:"+DBID);
    //选择执行的SQL语句
    switch (SQL){
    
 	
	case "SQLAutoParts":
		var SQLExecute=SQLAutoParts;
		  param1=sender.req.query.weekbeg;   
		console.log("SQLAutoParts:"+param1);
		break;	
	case "SQLPartsAgree":
		var SQLExecute=SQLPartsAgree;
		  param1=sender.req.query.weekbeg;   
		  param2=sender.req.query.weekend;   
		console.log("SQLPartsAgree:"+param1+"param2:"+param2);
		break;	
	case "SQLPartsAgreeSelf":
		var SQLExecute=SQLPartsAgreeSelf;
		  param1=sender.req.query.weekbeg;   
		  param2=sender.req.query.weekend;   
		console.log("SQLPartsAgreeSelf:"+param1+"param2:"+param2);
		break;		
	case "SQLPartsAbsolete":
		var SQLExecute=SQLPartsAbsolete;
		  param1=sender.req.query.weekbeg;   
		  param2=sender.req.query.weekend;   
		console.log("SQLPartsAbsolete:"+param1+"param2:"+param2);
		break;		
	default:
		var SQLExecute=SQL;
		break;
	}
    
    if(DBID!=""&&DBID!=undefined){
    	SQLExecute=SQLExecute+" WHERE A.DBID="+DBID;
    }
    
    if(filter!=""&&filter!=undefined){
    	SQLExecute=SQLExecute+" WHERE "+filter;
    }
    
    if(orderBy!=""&&orderBy!=undefined){
    	SQLExecute=SQLExecute+" ORDER BY "+orderBy;
    }
    
    if(limit!=""&&limit!=undefined){
    	SQLExecute=SQLExecute+" LIMIT "+limit;
    }
    
 //   console.log("SQLExecute:"+SQLExecute);
    
    //增加关键字防护,防止使用非法关键字操作数据库
    var banWord1 = new RegExp("delete");
    var banWord2 = new RegExp("update");
    var banWord3 = new RegExp("insert");
    var resultCheckSQL = banWord1.test(SQLExecute)||banWord2.test(SQLExecute)||banWord3.test(SQLExecute);
    
    
    if(resultCheckSQL){
//    	console.log("接受到含有非法关键字的SQL:"+SQL);
    }else{
    	
    	 yjDBService.exec({
    	        sql: SQLExecute,
    	        parameters: [param1,param2],
    	        rowsAsArray: false, // Chenly 2018-10-19 返回obj arr
    	        success: function(result) {
    	        	
//    	        	
//    	        	result=NulltoEmpty(result);
    	        	//   console.log("result:"+JSON.stringify(result));
    	            sender.success(result);
    	        },
    	        error: sender.error
    	    });
    	
    }
    
    

    
   
    
};