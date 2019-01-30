require("../../client/js/Date.js");
require("../../client/js/SQL.js");
module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;


//    console.log("get:"+JSON.stringify(sender.req.query));

    var SQL=sender.req.query.SQL;  
    
    console.log("SQL:"+SQL);
    //选择执行的SQL语句
    switch (SQL){
	case "SQLBDMHESystems":
		var SQLExecute=SQLBDMHESystems;
		break;
	case "SQLTableBillPlan":
		var SQLExecute=SQLTableBillPlan;
		break;	
	default:
		var SQLExecute=SQL;
		break;
	}
    
    
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