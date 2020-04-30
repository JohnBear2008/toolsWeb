require("../../client/js/Date.js");
require("../../client/js/SQL.js");
require("../../client/js/SQLrich.js");// bugrate use


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
   var param3="";  
   var param4=""; 
   var param5=""; 
   var param6=""; 
   var param7=""; 
   var param8=""; 
   var param9=""; 
    
   
 
    switch (SQL){
    
	case "SQLShipment":
		var SQLExecute=SQLShipment;
		break;	
	case "SQLNeworder":
		var SQLExecute=SQLNeworder;
		break;	
	case "SQLNotDone":
		var SQLExecute=SQLNotDone;
		  param1=sender.req.query.yester;  
		  param2=sender.req.query.weekbeg;  
		  param3=sender.req.query.weekend;  
		  param4=sender.req.query.weekbeg;  
		  param5=sender.req.query.weekbeg;  
		  param6=sender.req.query.weekend;  
		  param7=sender.req.query.weekend;  
		//   " where  (( taskType='A' and taskMakeDate>='2020-03-01' and taskMakeDate<='2020-03-31') OR  "+
		//   " ( ( taskMakeDate<'2020-03-01' and taskType='A'  "+
		//   " and ((taskFinishDate>='2020-03-01' and taskFinishDate<='2020-03-31')  "+
		//   " or (WFEndText is null and taskFinishDate is null)) ) ) ) and taskFinishDate is null and taskLimitDate<'2020-03-31' and WFEndText is null	 ";
		break;	
	case "SQLNotDone_t":
		var SQLExecute=SQLNotDone_t;
		  param1=sender.req.query.yester;  
		  param2=sender.req.query.weekbeg;  
		  param3=sender.req.query.weekend;  
		  param4=sender.req.query.weekbeg;  
		  param5=sender.req.query.weekend;  
		  param6=sender.req.query.duedate;  
		break;	
	case "SQLLateList":
		var SQLExecute=SQLLateList;
		param1=sender.req.query.weekbeg;  
		param2=sender.req.query.weekbeg;  
		param3=sender.req.query.weekend; 
		param4=sender.req.query.weekbeg; 
		param5=sender.req.query.weekend; 
		param6=sender.req.query.weekbeg;  
		param7=sender.req.query.weekend;  
		param8=sender.req.query.weekend;  

// " where ( ( ( applyDate<'2020-04-20' and emailDate>='2020-04-20' and emailDate<='2020-04-24') "+
// " or (applyDate<'2020-04-20' and emailDate is null and WFEndText is null) ) and limitDate<'2020-04-24' and emailDate is null and WFEndText is null ) "+
// " OR (applyDate>='2020-04-20' and applyDate<='2020-04-24' and limitDate<'2020-04-24' and emailDate is null and WFEndText is null )";

  
		break;	
	case "SQLLateList_t":
		var SQLExecute=SQLLateList_t;
		param1=sender.req.query.weekbeg;  
		param2=sender.req.query.weekbeg;  
		param3=sender.req.query.weekend; 
		param4=sender.req.query.weekbeg; 
		param5=sender.req.query.weekbeg; 
		param6=sender.req.query.weekend; 
		// console.log("weekbeg:"+param1);
		// console.log("weekend:"+param2);
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
    	        parameters: [param1,param2,param3,param4,param5,param6,param7,param8,param9],
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