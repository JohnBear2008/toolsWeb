require("../../client/js/Date.js");

module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;


    
   console.log("get:"+JSON.stringify(sender.req.query));

    var SQL=sender.req.query.SQL;  
    
    
    //增加关键字防护,防止使用非法关键字操作数据库
    var banWord1 = new RegExp("delete");
    var banWord2 = new RegExp("update");
    var banWord3 = new RegExp("insert");
    var resultCheckSQL = banWord1.test(SQL)||banWord2.test(SQL)||banWord3.test(SQL);
    
    
    if(resultCheckSQL){
    	console.log("接受到含有非法关键字的SQL:"+SQL);
    }else{
    	
    	 yjDBService.exec({
    	        sql: SQL,
    	        parameters: [],
    	        rowsAsArray: false, // Chenly 2018-10-19 返回obj arr
    	        success: function(result) {
    	            sender.success(result);
    	        },
    	        error: sender.error
    	    });
    	
    }
    
    

    
   
    
};