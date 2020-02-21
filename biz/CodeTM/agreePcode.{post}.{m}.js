module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
 
    
//    var BILLID=sender.req.query.BILLID;
//    var PartsYear=sender.req.query.PartsYear;
//    var PartsRule=sender.req.query.PartsRule;
//    var PartsClass=sender.req.query.PartsClass;
//    var PartsApplyDate=sender.req.query.PartsApplyDate;
//    var PartsLimitDate=sender.req.query.PartsLimitDate;
//    var PartsName=sender.req.query.PartsName;
//    var Partsstatus=sender.req.query.Partsstatus;
//    var Staff=sender.req.query.Staff;
//    var Property=sender.req.query.Property;
    var PartsCode='AB1-12345';
//    var SupplyID=sender.req.query.SupplyID;
    
 	var PartsYear = sender.req.query.PartsYear; 
 	var PartsRule = sender.req.query.PartsRule; 
 	var PartsClass = sender.req.query.PartsClass; 
 	var BILLID = sender.req.query.BILLID; 
    var PID='000001';
    console.log('年  '+PartsYear+' 规  '+ PartsRule +' 类 '+ PartsClass );  
    let SQLmax= "select max(PID) as PID from `auto_parts` where Parts_Year=? and Parts_Rule =? and Parts_Class=? ";
    console.log('同意SQLmax  '+SQLmax  );  
    yjDBService.exec({
        sql : SQLmax,
        parameters : [PartsYear, PartsRule ,PartsClass ],
        rowsAsArray : true,
        success : function(r) {
           
		var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
		 
            for (var i = 0; i < data.length; i++) {
			 
		    var temp =   data[i].PID; 
		    if(temp!=null){
			console.log("头AA1-12789次", temp);
			var tempA = parseInt(temp)+1;
			
			var tempATxt = '';
			if(tempA<10){
				tempATxt = '00000'+tempA;
			}else  if(tempA<100){
				tempATxt = '0000'+tempA;
			}else  if(tempA<1000){
				tempATxt = '000'+tempA;
			}else  if(tempA<10000){
				tempATxt = '00'+tempA;
			}else  if(tempA<100000){
				tempATxt = '0'+tempA;
			}else  {
				tempATxt = ''+tempA;
			}  
			PID =tempATxt;
                  PartsCode=PartsRule+PartsClass+"-"+PID ;
                  console.log("存在", PartsCode,"序列号 ",PID);
		    }else{
			PID ='000001';
                  PartsCode=PartsRule+PartsClass+"-"+PID ;
                  console.log("不存", PartsCode,"序列号 ",PID);

		    }

            }
           
             HandleParts();
        },
       
    })
   
    function HandleParts(){
    	 let SQLInsert= "INSERT INTO `auto_parts` (  `BILL_ID`, `Parts_Year`, `Parts_Rule`, `Parts_Class`, `Parts_Apply_Date`, `Parts_Limit_Date`, `Parts_Name`, `Parts_status`, `Staff`, `Property`, `PID`, `Parts_Code`, `Supply_ID`)"+
    	    "select   `BILL_ID`, `Parts_Year`, `Parts_Rule`, `Parts_Class`, `Parts_Apply_Date`, `Parts_Limit_Date`, `Parts_Name`, '1' , `Staff`, `Property`, '"+PID+"','"+PartsCode+"', `Supply_ID` from `auto_rec_parts`"+
    	    "where Parts_Year=? and Parts_Rule=? and BILL_ID=? ";
    	    console.log("SQLInsert:"+SQLInsert);  	
    	    
    	    let SQLDelete="Delete From `auto_rec_parts` where Parts_Year=? and Parts_Rule=? and BILL_ID=?  " ;
    	    console.log("SQLDelete:"+SQLDelete);
		  
		      	       
		  var retcode={"status":"OK","partscode":PartsCode};
		  sender.success(retcode);
		    console.log("钰琪",retcode);
	    
    	    yjDBService.exec({
    	        sql : SQLInsert,
    	        parameters : [ PartsYear, PartsRule ,BILLID ],
    	        rowsAsArray : true,
    	        error : sender.error
    	    });
    	    yjDBService.exec({
    	        sql : SQLDelete,
    	        parameters : [ PartsYear, PartsRule ,BILLID ],
    	        rowsAsArray : true,
    	        success : function(result) {

    	        },
    	        success :sender.success,
    	        error : sender.error
    	    });
    }
   
    
}   // var data=yjDB.dataSet2ObjectList(result.meta,result.rows);
    	      //   success : function(result) {
    	      //       var retcode={"status":"OK"};
    	      //       sender.success(retcode);
    	      //   	console.log("為何不说话",result);
    	      //   },