module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;

//    var aDataIDs = sender.req.query.t;  
// console.log("get:"+JSON.stringify(sender.req.query));
    
    var DBTable=sender.req.query.DBTable;

    var Filter=sender.req.query.Filter;

    
    
 //   console.log("Filter:"+JSON.stringify(Filter));
    
    
    SQLFilter="";
    
    for(var i=0;i<Filter.length;i++){
	
    	function getAttr(obj){
    		for(var j in obj ){		
        		return j;	
        	}
    	}
    	
    	var Attr=getAttr(Filter[i]);
//    	console.log("Attr:"+Attr);
//    	console.log("AttrValue:"+Filter[i][Attr]);
//    	console.log("AttrCType:"+Filter[i]["CType"]);
    	
    	if(i==(Filter.length-1)){
//		console.log("i:"+i+"Filter.length:"+(Filter.length-1))
    		SQLFilter=SQLFilter+Attr+Filter[i]["CType"]+"'"+Filter[i][Attr]+"'";
    	}else{
    		SQLFilter=SQLFilter+Attr+Filter[i]["CType"]+"'"+Filter[i][Attr]+"'"+" AND ";
    	}


    }
    
//   console.log("SQLFilter:"+SQLFilter);
    
    var sqlGetTableData = "SELECT * FROM "+DBTable+" WHERE "+SQLFilter;
    
    

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