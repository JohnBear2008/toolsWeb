module.exports = function(sender) {
	console.log("-23---")
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
    
//  console.log("get:"+JSON.stringify(sender.req.query));
    
//   console.log("PM2333 test");
       
    var obj=sender.req.query;
    
    var tableTitle="";
    var tableData="";
    
    for(var key in obj){ 	
    	if(key=="DBTable"){
    		var DBTable=obj[key];
    	}else{
    		tableTitle=tableTitle+key+",";
    		
    		
    		//增加为空判断,为空则替换为null 防止插入数据库格式类型不对错误
    		if(obj[key]==""){
    			tableData=tableData+null+",";
    		}else{
    			tableData=tableData+"'"+obj[key]+"',";
    		}
    		
    		
    	}
    }
    
    tableTitle=tableTitle.substr(0, tableTitle.length - 1);  
    tableData=tableData.substr(0, tableData.length - 1);  
    
    
//    console.log("tableTitle:"+tableTitle);
//	console.log("tableData:"+tableData);
	
var SQLInsert="insert into `"+DBTable+"` ("+tableTitle+") values "+"("+tableData+")";

//console.log(SQLInsert)
//var SQLInsert="insert into PM_customer (cust_FID,cust_Name) values(110,110)";
//	console.log("SQLInsert:"+SQLInsert);

yjDBService.exec({
    sql: SQLInsert,
    parameters: [],
    success:  function(result) {
 //   	console.log("result:"+JSON.stringify(result));

    	sender.success(result)
    },
    error: {},
});
//sender.success({status:1})

};