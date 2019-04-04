module.exports = function(sender) {

    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
    
  console.log("get:"+JSON.stringify(sender.req.query));
  
  let BTID=sender.req.query.BTID;
  let BTIDPart=BTID.substring(0,11);
  let BTIDNum=parseInt(BTID.substring(BTID.length-2,BTID.length));
  
  let CTRDBID=sender.req.query.CTRDBID;
  let taskBPID=sender.req.query.taskBPID;
  let taskCTRName=sender.req.query.taskCTRName;
  let taskMaker=sender.req.query.taskMaker;
  let taskMakeDate=sender.req.query.taskMakeDate;
  let taskLimitDate=sender.req.query.taskLimitDate;
  let bindStaffs=sender.req.query.bindStaffs;
  
  let taskStaffs=JSON.parse(bindStaffs);

  let SQLValues="";
  
  let BTIDcreate="";
  
  let BTIDNumNew=0;
  
  for(let i=0;i<taskStaffs.length;i++){
	  
	  switch(taskStaffs[i].staffSort){
	  case "DSP":
		  if(BTIDNum>10){
			   BTIDNumNew=parseInt(BTIDNum+i);
		  }else{
			   BTIDNumNew="0"+parseInt(BTIDNum+i);
		  }
		   BTIDcreate=BTIDPart+"_DA_"+BTIDNumNew;

		  SQLValues=SQLValues+"(" +
		  		"'"+BTIDcreate+"','0','D','DSP任务单','D','APP'," +
		  		"'"+taskCTRName+"','"+taskStaffs[i].staffName+"','"+taskBPID+"','"+taskLimitDate+"','"+taskMaker+"','"+taskMakeDate+"'," +
		  		"'1','新增'" +
		  		"),";
		  break;
	  case "HMI":
		  if(BTIDNum>10){
			   BTIDNumNew=parseInt(BTIDNum+i);
		  }else{
			   BTIDNumNew="0"+parseInt(BTIDNum+i);
		  }
		   BTIDcreate=BTIDPart+"_HA_"+BTIDNumNew;

		  SQLValues=SQLValues+"(" +
		  		"'"+BTIDcreate+"','0','H','HMI任务单','A','APP'," +
		  		"'"+taskCTRName+"','"+taskStaffs[i].staffName+"','"+taskBPID+"','"+taskLimitDate+"','"+taskMaker+"','"+taskMakeDate+"'," +
		  		"'1','新增'" +
		  		"),";
		  break;

	  }
	  
  }
  
  SQLValues=SQLValues.substring(0,SQLValues.length-1);
  
  let SQLInsert="INSERT INTO `ppm_bills_task` (" +
  		"BTID,BTVersion,taskSortType,taskSortTypeText,taskType,taskTypeText," +
  		"taskCTRName,taskStaff,taskBPID,taskLimitDate,taskMaker,taskMakeDate," +
  		"BTStatus,BTStatusText" +
  		") VALUES "+SQLValues;

  
  console.log("SQLInsert:"+SQLInsert);
  
  
  
  
  yjDBService.exec({
    sql: SQLInsert,
    parameters: [],
    success:  function(result) {
    	
//    	let resultM1=yjDB.dataSet2ObjectList(result.meta, result.rows);
//    	let resultM2=resultM1[0].bindsInfo;
//    	let resultM3=JSON.parse(resultM2);
    	
   	console.log("result:"+JSON.stringify(result));

    	sender.success(result)
    },
    error: {},
});
  
    

       
//    var obj=sender.req.query;
//    
//    var tableTitle="";
//    var tableData="";
//    
//    for(var key in obj){ 	
//    	if(key=="DBTable"){
//    		var DBTable=obj[key];
//    	}else{
//    		tableTitle=tableTitle+key+",";
//    		
//    		
//    		//增加为空判断,为空则替换为null 防止插入数据库格式类型不对错误
//    		if(obj[key]==""){
//    			tableData=tableData+null+",";
//    		}else{
//    			tableData=tableData+"'"+obj[key]+"',";
//    		}
//    		
//    		
//    	}
//    }
//    
//    tableTitle=tableTitle.substr(0, tableTitle.length - 1);  
//    tableData=tableData.substr(0, tableData.length - 1);  
//    
//    
////    console.log("tableTitle:"+tableTitle);
////	console.log("tableData:"+tableData);
//	
//var SQLInsert="insert into `"+DBTable+"` ("+tableTitle+") values "+"("+tableData+")";
//
////console.log(SQLInsert)
////var SQLInsert="insert into PM_customer (cust_FID,cust_Name) values(110,110)";
//	console.log("SQLInsert:"+SQLInsert);
//
//yjDBService.exec({
//    sql: SQLInsert,
//    parameters: [],
//    success:  function(result) {
// //   	console.log("result:"+JSON.stringify(result));
//
//    	sender.success(result)
//    },
//    error: {},
//});
////sender.success({status:1})

};