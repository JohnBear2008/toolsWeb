require("../../client/js/Date.js");

module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;

//    var aDataIDs = sender.req.query.t;
    
 //  console.log("get:"+JSON.stringify(sender.req.query));
    
    var tableName=sender.req.query.tableName;  
    var titles = sender.req.query.titles;
    
//    console.log("titles[0]:"+titles[0]);
    
    
    if(titles.length!=0){
    	var titleArrayContent="";
    	
    	for(var i=0;i<titles.length;i++){
    		titleArrayContent=titleArrayContent+"'"+titles[i]+"',";
    		
//    		console.log("titleArrayContent:"+titleArrayContent);
    		
    	}

    	titleArrayContent=titleArrayContent.substring(0,titleArrayContent.length-1);
    	
    	 
        var titlesArray="("+titleArrayContent+")";
        
        var orderbyTitles="(titleKey,"+titleArrayContent+")";
        
//        console.log("titlesArray:"+titlesArray);
    	
        
        //通过ORDER BY FIELD  自定义顺序排序 防止顺序变乱
        var SQLGetTitles="SELECT titleName FROM `ppm_tabletitles` WHERE titleKey IN "+titlesArray+" AND tableName='"+tableName+"' ORDER BY FIELD "+orderbyTitles;
    }else{
    	var SQLGetTitles="SELECT titleName FROM `ppm_tabletitles` WHERE titleKey IN ('') AND tableName='"+tableName+"'";
    }
   

    
   console.log("SQLGetTitles:"+SQLGetTitles);
    // sqlGetIDInfo = "  ORDER BY INSTR(',443,419,431,440,420,414,509,',CONCAT(',',eventId,','))";
//    
    yjDBService.exec({
        sql: SQLGetTitles,
        parameters: [],
        rowsAsArray: false, // Chenly 2018-10-19 返回obj arr
        success: function(result) {
        	
  //      	console.log("result:"+JSON.stringify(result));
            sender.success(result);
        },
        error: sender.error
    });
    
    
};