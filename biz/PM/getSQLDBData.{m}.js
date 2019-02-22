require("../../client/js/Date.js");
require("../../client/js/SQL.js");
module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;


    console.log("get:"+JSON.stringify(sender.req.query));

    var SQL=sender.req.query.SQL;  
    var DBTable=sender.req.query.DBTable;  
    var DBID=sender.req.query.DBID;  
    var filter=sender.req.query.filter; 
    
//    console.log("SQL:"+SQL);
//    console.log("DBTable:"+DBTable);
//    console.log("DBID:"+DBID);
    //选择执行的SQL语句
    switch (SQL){
    
    case "SQLDBCustomers":
		var SQLExecute=SQLDBCustomers;
		break;
	case "SQLDBMHESystems":
		var SQLExecute=SQLDBMHESystems;
		break;
	case "SQLDBMachines":
		var SQLExecute=SQLDBMachines;
		break;
	case "SQLSRCustomers":
			var SQLExecute=SQLSRCustomers;
			break;
	case "SQLSRMachines":
		var SQLExecute=SQLSRMachines;
		break;
	case "SQLSRSystems":
		var SQLExecute=SQLSRSystems;
		break;
	case "SQLSRStaffs":
		var SQLExecute=SQLSRStaffs;
		break;
		
	case "SQLTableBillsTrack":
		var SQLExecute=SQLTableBillsTrack;
		break;	
		
	case "SQLTableBillsPLD":
		var SQLExecute=SQLTableBillsPLD;
		break;	
	case "SQLTableBillsBPT":
		var SQLExecute=SQLTableBillsBPT;
		break;
	case "SQLTableBillsTask":
		var SQLExecute=SQLTableBillsTask;
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
    
   // console.log("SQLExecute:"+SQLExecute);
    
    //增加关键字防护,防止使用非法关键字操作数据库
    var banWord1 = new RegExp("delete");
    var banWord2 = new RegExp("update");
    var banWord3 = new RegExp("insert");
    var resultCheckSQL = banWord1.test(SQLExecute)||banWord2.test(SQLExecute)||banWord3.test(SQLExecute);
    
    
    if(resultCheckSQL){
    	console.log("接受到含有非法关键字的SQL:"+SQL);
    }else{
    	
    	 yjDBService.exec({
    	        sql: SQLExecute,
    	        parameters: [],
    	        rowsAsArray: false, // Chenly 2018-10-19 返回obj arr
    	        success: function(result) {
    	            sender.success(result);
    	        },
    	        error: sender.error
    	    });
    	
    }
    
    

    
   
    
};