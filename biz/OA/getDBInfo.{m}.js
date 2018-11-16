module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;

//    var aDataIDs = sender.req.query.t;
    
//console.log("OA get:"+JSON.stringify(sender.req.query));
    
    var DBTable=sender.req.query.DBTable;
    
    
    var sqlGetTableData = "SELECT * FROM "+DBTable;

    // sqlGetIDInfo = "SELECT * FROM hmiprint_mold WHERE DataID=" + DataID + " ";
    
    
    
    if(DBTable=="OA_staffs"){
    	
    	//定义获取间隔年数函数------------------  
        function getOffsetYears(time1, time2) {
            var offsetTime = Math.abs(time1 - time2);
            return Math.floor(offsetTime / (3600 * 24 * 1e3*365));
        }
         
        
        yjDBService.exec({
            sql: sqlGetTableData,
            parameters: [],
            rowsAsArray: false, // Chenly 2018-10-19 返回obj arr
            success: function(result) {
            	
            	for(var i=0;i<result.length;i++){	
            		
            		if(result[i].birthday!=null){
            			result[i].age=getOffsetYears(Date.now(), (new Date(result[i].birthday)).getTime());
            		}else{
            			result[i].age="";
            		}
            		
            		if(result[i].entryDate!=null){
            		result[i].workYears=getOffsetYears(Date.now(), (new Date(result[i].entryDate)).getTime());
            		}else{
            			result[i].workYears="";
            		}
    	
            	}//-------如果是人员表 多生成 年龄和工龄返回------
            	
       	 //       console.log("OA sender:"+JSON.stringify(result[0]));  	// 考虑返回值动态添加age信息至返回数组
                sender.success(result);
            },
            error: sender.error
        });
    	
    	
    	
    }else{
    	
    	
    	yjDBService.exec({
            sql: sqlGetTableData,
            parameters: [],
            rowsAsArray: false, // Chenly 2018-10-19 返回obj arr
            success: function(result) {
           
            	
   //    	        console.log("OA sender:"+JSON.stringify(result[0]));  	// 考虑返回值动态添加age信息至返回数组
                sender.success(result);
            },
            error: sender.error
        });
    	
    	
    	
    	
    	
    }
    
    

 
    
};