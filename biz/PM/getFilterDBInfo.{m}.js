module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;

//    var aDataIDs = sender.req.query.t;  
//console.log("get:"+JSON.stringify(sender.req.query));
    
    var DBTable=sender.req.query.DBTable;

    var Filter=sender.req.query.Filter;

    
    
// console.log("Filter:"+JSON.stringify(Filter));
    
    
   
    
    if(Filter!=undefined){
    	
    	
    	SQLFilter="";
    	for(var i=0;i<Filter.length;i++){
    		
        	function getAttr(obj){
        		for(var j in obj ){		
            		return j;	
            	}
        	}
        	
        	var Attr=getAttr(Filter[i]);
//        	console.log("Attr:"+Attr);
//        	console.log("AttrValue:"+Filter[i][Attr]);
//        	console.log("AttrCType:"+Filter[i]["CType"]);
        	
        	
        	if(Filter[i][Attr]!=""){
        		console.log("Filter[i][Attr]不是数组且值不为空");
        	    SQLFilter = SQLFilter + Attr +" "+ Filter[i]['CType']+" "+ "'" + Filter[i][Attr] + "'" + " AND ";
        	}

        }
    	
    	 SQLFilter=SQLFilter.substring(0,SQLFilter.length-5);//去掉最后"AND"字符串
    	 var sqlGetTableData = "SELECT * FROM "+DBTable+" WHERE "+SQLFilter;
    }else{
    	var sqlGetTableData = "SELECT * FROM "+DBTable;
    }
    
    
    
   console.log("sqlGetTableData:"+sqlGetTableData);
    

    
    

//    
    yjDBService.exec({
        sql: sqlGetTableData,
        parameters: [],
        rowsAsArray: false, // Chenly 2018-10-19 返回obj arr
        success: function(result) {
        	
        	
            sender.success(result);
        },
        error: sender.error
    });
 
    
};