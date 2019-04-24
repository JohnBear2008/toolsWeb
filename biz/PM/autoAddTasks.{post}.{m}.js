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
  let bindsInfo=sender.req.query.bindsInfo;
  
  console.log("bindsInfo:"+JSON.stringify(bindsInfo));
  
  let bindsInfoJ=JSON.parse(bindsInfo);
  console.log("bindsInfo222:"+bindsInfoJ.DBID);

  console.log("BTIDNum:"+BTIDNum);
  
  if(BTIDNum<9){
	  var BTIDdsp=BTIDPart+"_DA_0"+BTIDNum;
	  var BTIDhmi=BTIDPart+"_HA_0"+(BTIDNum+1);
	  
  }else if(BTIDNum==9){
	  var BTIDdsp=BTIDPart+"_DA_09";
	  var BTIDhmi=BTIDPart+"_HA_10";
	  
  }else if(BTIDNum>9){
	  var BTIDdsp=BTIDPart+"_DA_"+BTIDNum;
	  var BTIDhmi=BTIDPart+"_HA_"+(BTIDNum+1);
	  
  }
  
  let SQLValues="(" +
	"'"+BTIDdsp+"','0','D','DSP任务单','A','APP'," +
	"'"+taskCTRName+"','"+bindsInfoJ.DStaffName+"','"+taskBPID+"','"+taskLimitDate+"','"+bindsInfoJ.MHEName+"','"+bindsInfoJ.DModelName+"'," +
	"'"+taskMaker+"','"+taskMakeDate+"','1','新增'" +
	"),(" +
	"'"+BTIDhmi+"','0','H','HMI任务单','A','APP'," +
	"'"+taskCTRName+"','"+bindsInfoJ.HStaffName+"','"+taskBPID+"','"+taskLimitDate+"','"+bindsInfoJ.MHEName+"','"+bindsInfoJ.HModelName+"'," +
	"'"+taskMaker+"','"+taskMakeDate+"','1','新增'" +
	")";
  

  

  let SQLInsert="INSERT INTO `ppm_bills_task` (" +
  		"BTID,BTVersion,taskSortType,taskSortTypeText,taskType,taskTypeText," +
  		"taskCTRName,taskStaff,taskBPID,taskLimitDate,taskMHEName,taskModel," +
  		"taskMaker,taskMakeDate,BTStatus,BTStatusText" +
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
  


};