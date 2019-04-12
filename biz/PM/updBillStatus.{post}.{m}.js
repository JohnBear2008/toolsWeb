module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
    
// console.log("get:"+JSON.stringify(sender.req.query));
    
////   console.log("PM2333 test");
//       
    var obj=sender.req.query;
//    
    var updateContent="";
    var filter="";

    
    for(var key in obj){ 	

    	switch(key){
        case "DBTable":
        	var DBTable=obj[key];
        	break;
        case "BillIDName":
        	var BillIDName=obj[key];
        	break;
        case "BillID":
        	var BillID=obj[key];
        	break;		
        case "TaskNumDone":
        	updateContent=updateContent+"TaskNumDone=TaskNumDone+1,";
        	break;	
        case "recordNum":
        	updateContent=updateContent+"recordNum=recordNum+1,";
        	break;
        case "filter":
        	filter=obj[key];
        	break;
        	
        default:
        	if(obj[key]==""){
    			updateContent=updateContent+key+"="+null+",";
    		}else{
    			updateContent=updateContent+key+"="+"'"+obj[key]+"',";
    		}

        }
    	
    }
    
    updateContent=updateContent.substr(0, updateContent.length - 1); 
    
    if(filter==""){
    	var SQLUpdate=" update "+DBTable+" set "+updateContent +" where  "+BillIDName+"='"+BillID+"'";
    }else{
    	var SQLUpdate=" update "+DBTable+" set "+updateContent +" where  "+BillIDName+"='"+BillID+"' and "+filter;
    }

    	
    	

////var SQLInsert="insert into PM_customer (cust_FID,cust_Name) values(110,110)";
    
	console.log("SQLUpdate:"+SQLUpdate);
//
    yjDBService.exec({
        sql: SQLUpdate,
        parameters: [],
        success: sender.success,
        error: sender.error
    });


};