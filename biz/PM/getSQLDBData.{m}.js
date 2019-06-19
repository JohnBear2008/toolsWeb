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
    var orderBy=sender.req.query.orderBy; 
    var limit=sender.req.query.limit; 
    
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
	case "SQLSRSystemsBind":
		var SQLExecute=SQLSRSystemsBind;
		break;
		
	case "SQLSRStaffs":
		var SQLExecute=SQLSRStaffs;
		break;
	case "SQLSRStaffsFilter":
		var SQLExecute=SQLSRStaffsFilter;
		break;

	case "SQLSRStaffsBind":
		var SQLExecute=SQLSRStaffsBind;
		break;

	case "SQLSRRoles":
		var SQLExecute=SQLSRRoles;
		break;
		
	case "SQLTableBillsTrack":
		var SQLExecute=SQLTableBillsTrack;
		break;	
	case "SQLTableBillsTrack_T":
		var SQLExecute=SQLTableBillsTrack_T;
		break;	
		
	case "SQLTableBillsPLD":
		var SQLExecute=SQLTableBillsPLD;
		break;	
	case "SQLTableBillsPLD_T":
		var SQLExecute=SQLTableBillsPLD_T;
		break;
	case "SQLTableBillsTaskFrom":
		var SQLExecute=SQLTableBillsTaskFrom;
		break;	
		
		
	case "SQLTableBillsBPT":
		var SQLExecute=SQLTableBillsBPT;
		break;
	case "SQLTableBillsBPT_T":
		var SQLExecute=SQLTableBillsBPT_T;
		break;
		
	case "SQLTableBillsTask":
		var SQLExecute=SQLTableBillsTask;
		break;
	case "SQLTableBillsTask_T":
		var SQLExecute=SQLTableBillsTask_T;
		break;

		
	case "SQLTableBillsTaskRecord":
		var SQLExecute=SQLTableBillsTaskRecord;
		break;
	
	case "SQLTableBillsTaskRecord_T":
		var SQLExecute=SQLTableBillsTaskRecord_T;
		break;
		
		
	case "SQLTableBillsTaskIPQC":
		var SQLExecute=SQLTableBillsTaskIPQC;
		break;
		
	case "SQLTableBillsTaskIPQC_T":
		var SQLExecute=SQLTableBillsTaskIPQC_T;
		break;
		
	case "SQLTableBillsFQC":
		var SQLExecute=SQLTableBillsFQC;
		break;
	case "SQLTableBillsFQC_T":
		var SQLExecute=SQLTableBillsFQC_T;
		break;

	case "SQLTableBillsPBH":
		var SQLExecute=SQLTableBillsPBH;
		break;
		
	case "SQLTableBillsPBH_T":
		var SQLExecute=SQLTableBillsPBH_T;
		break;

	case "SQLTableTestContents":
		var SQLExecute=SQLTableTestContents;
		break;
	case "SQLGetEMails":
		var SQLExecute=SQLGetEMails;
		break;
		
	case "SQLGetPLDNum":
		var SQLExecute=SQLGetPLDNum;
		break;
	case "SQLGetPLDNum_T":
		var SQLExecute=SQLGetPLDNum_T;
		break;

	case "SQLGetTaskNum":
		var SQLExecute=SQLGetTaskNum;
		break;
	case "SQLgetBindPLDdata":
		var SQLExecute=SQLgetBindPLDdata;
		break;
	case "SQLTaskRecords":
		var SQLExecute=SQLTaskRecords;
		break;

	case "SQLTaskRecords_T":
		var SQLExecute=SQLTaskRecords_T;
		break;
	case "SQLGetAuthorities":
		var SQLExecute=SQLGetAuthorities;
		break;
	case "SQLGetDataBinds":
		var SQLExecute=SQLGetDataBinds;
		break;
	case "SQLGetCTRBinds":
		var SQLExecute=SQLGetCTRBinds;
		break;

	case "SQLCTRBindsCount":
		var SQLExecute=SQLCTRBindsCount;
		break;
	case "SQLTableBillsDBCenter":
		var SQLExecute=SQLTableBillsDBCenter;
		break;
	case "SQLTableBillsDBCenter_T":
		var SQLExecute=SQLTableBillsDBCenter_T;
		break;
		
		
	case "SQLGetOldBillInfo":
		var SQLExecute=SQLGetOldBillInfo;
		break;
	case "SQLGetBindsInfo":
		var SQLExecute=SQLGetBindsInfo;
		break;
	case "SQLGetUpAuditor":
		var SQLExecute=SQLGetUpAuditor;
		break;
	case "SQLGetEntryDays":
		var SQLExecute=SQLGetEntryDays;
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
    	        parameters: [],
    	        rowsAsArray: false, // Chenly 2018-10-19 返回obj arr
    	        success: function(result) {
    	        	
//    	        	
//    	        	result=NulltoEmpty(result);
//    	        	console.log("result:"+JSON.stringify(result));
    	            sender.success(result);
    	        },
    	        error: sender.error
    	    });
    	
    }
    
    

    
   
    
};