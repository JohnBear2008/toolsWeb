module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
    var obj = sender.req.query;

    console.log("get:" + JSON.stringify(sender.req.query));
    

     
     for(var key in obj){ 	
     	if(key=="DBTable"){
     		var DBTable=obj[key];
     	}else{
     		var tableTitle=key;
     		var tableData=obj[key];
     	}
     }
     
//    console.log("DBTable:"+DBTable);
//    console.log("tableTitle:"+tableTitle);
// 	console.log("tableData:"+tableData);
// 	
 	

    var SQLDelete = "delete  from "+DBTable+" where "+tableTitle+" = "+tableData;
//    console.log("SQLDelete:"+SQLDelete);

    yjDBService.exec({
        sql: SQLDelete,
        parameters: [],
        success: sender.success,
        error: sender.error
    });

};
