require("../../client/js/Date.js");

module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;

//    var aDataIDs = sender.req.query.t;
    
   console.log("get:"+JSON.stringify(sender.req.query));
   var tableName=sender.req.query.tableName;  
   var titles = sender.req.query.titles;
   var filter=sender.req.query.filter;
   
   
   if(titles.length!=0){
	   
	   var titlesContent="";
		for(var i=0;i<titles.length;i++){
			titlesContent=titlesContent+titles[i]+",";	
		}
		titlesContent=titlesContent.substring(0,titlesContent.length-1);
   }
   
   
    
    var SQLGetDatas = "SELECT "+titlesContent+" FROM "+tableName+" WHERE "+filter;
    
//    console.log("SQLGetDatas:"+SQLGetDatas);

    
    yjDBService.exec({
        sql: SQLGetDatas,
        parameters: [],
        rowsAsArray: false, // Chenly 2018-10-19 返回obj arr
        success: function(result) {
            sender.success(result);
        },
        error: sender.error
    });
};