require("../../client/js/Date.js");
require("../../client/js/Array.js");

var schedule = require("node-schedule");
const https = require("https");
var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
var yjDB = global.yjRequire("yujiang.Foil").yjDB;
// const querystring = require('querystring');

// 函数-钉钉机器人发送消息
function DDRobotMsgSender(divMsg) {

	var requestData = JSON.stringify(divMsg);
	console.log(requestData);
	//  var token = "c6cbd13c9fa5115f91db5b86bd97ba3d756fe8a0bb6d1000588c6f6c469e5730";//测试群

	// var token ="43e278d8d451875e8be1b5eec0ce66b5d8d51dcb527013cc3e6c2630b612cc30";//软体部

	var token = "3e8814ee63d4a930c45020bafdd0aaedcfff3a4ed4d26c28390a60347767a0f0"; //PPM工具群

	var url = 'oapi.dingtalk.com';
	var req = https.request({
		hostname: url,
		port: 443,
		path: '/robot/send?access_token=' + token,
		method: "POST",
		json: true,
		headers: {
			'Content-Type': "application/json; charset=utf-8"
		}
	});
	req.write(requestData);
	req.on('error', function (err) {
		console.error(err);
	});
	req.end();

}



//生成标准钉钉消息 I={msg:'1111',at:'aaa'} OR I=[{msg:'1111',at:'aaa'}]

//生成标准钉钉消息 I={DDMsg:[{msg:'1111',at:'aaa'}]}
const CreateDDMsgText = (I, O) => {

	let DDText = "";
	for (let i = 0; i < I.DDMsg.length; i++) {
		DDText = DDText + I.DDMsg[i].msg + '@' + I.DDMsg[i].at + '\n\n';
	}
	console.log("DDText:" + DDText)

	O = {
		"actionCard": {
			"title": "[PPM定时提醒]",
			"text": "以下单据未完成，请跟进！\n\n" + DDText,
			"hideAvatar": "0",
			"btnOrientation": "0",
			"btns": [{
				"title": "登陆PPM系统",
				"actionURL": "http://192.168.0.9:2019/app/pm/linkpage"
			}]
		},
		"msgtype": "actionCard",
		"at": {
			"atMobiles": [],
			"isAtAll": false
		}
	};
	return O
}






//i={sql:''}
const sendBillsUndoneDDMsg = async (i, o) => {


	yjDBService.exec({
		sql: i.sql,
		parameters: [],
		rowsAsArray: false, // Chenly 2018-10-19 返回obj arr
		success: function (result) {

			console.log("1.获取sql 结果");

			let R1 = result

			console.log("R1:" + JSON.stringify(R1))

			console.log('2.返回数据转换格式')

			let R2

			console.log("R1.length:" + R1.length)

			switch (R1.length) {
				case 0:
					R2 = {
						DDMsg: []
					}
					break;
				case 1:

					R2 = {
						DDMsg: [{
							msg: R1[0].billText,
							at: R1[0].billStaffs
						}]
					}
					break;

				default:

					// R2={DDMsg:[{msg:R1[0].billText,at:R1[0].billStaffs}]}

					let DDMsgArray = []

					let msgI = R1[0].billText;
					let atI = R1[0].billStaffs;



					for (let i = 1; i < R1.length; i++) {

						console.log("msgI:" + msgI)

						console.log("atI:" + atI)

						if (R1[i].billText === R1[i - 1].billText) {
							// console.log(atI.indexOf(R1[i].billStaffs) === -1)

							console.log('R1[i].billStaffs', R1[i].billStaffs);


							if (R1[i].billStaffs && atI) {
								if (atI.indexOf(R1[i].billStaffs) === -1) {
									atI = atI + "," + R1[i].billStaffs;
								}
							}
						} else {
							DDMsgArray.push({
								msg: msgI,
								at: atI
							})
							msgI = R1[i].billText;
							atI = R1[i].billStaffs;
						}

						// console.log("DDMsgArray:"+JSON.stringify(DDMsgArray))
					}



					DDMsgArray.push({
						msg: msgI,
						at: atI
					})


					R2 = {
						DDMsg: DDMsgArray
					}
					break;
			}

			console.log("R2:" + JSON.stringify(R2))

			console.log('3.生成DDtext')

			let R3 = CreateDDMsgText(R2, o)

			console.log("R3:" + JSON.stringify(R3))

			DDRobotMsgSender(R3)


			// sender.success(result);
		},
		error: function (err) {
			throw err
		}
	});

}


let I = {
	sql: "SELECT '计划单未审核' as billText,A.auditor as billStaffs FROM (SELECT C.* FROM `ppm_bills_plan` C, (SELECT BPID AS billBPID, MAX(version) AS billVersion FROM `ppm_bills_plan` GROUP BY billBPID) D WHERE C.BPID = D.billBPID AND C.version = D.billVersion AND C.WFStatus <> 0 AND C.WFStatus<>100 AND C.effective=1 AND C.auditResult=0) A " + " union " +
		" SELECT '方案单未完成'  as billText, A.PLDPGEMaker as billStaffs FROM (SELECT * FROM  (SELECT tbb.BPID,tbb.version AS PLDVersion,tbb.CTRName AS PLDCTRName,tbb.LimitDate AS PLDLimitDate,tbb.PGEMaker AS PLDPGEMaker,tbb.MHEName AS PLDMHEName,tbb.modelD AS PLDModelD,tbb.modelH AS PLDModelH,tbb.OGNSystemVersion AS PLDOGNSystemVersion FROM `ppm_bills_plan` tbb, (SELECT BPID,MAX(version) AS maxPLDVersion FROM `ppm_bills_plan` WHERE WFStatus<>0 AND WFStatus<>100 AND PLDStatus=1 GROUP BY BPID) tba  WHERE tbb.BPID=tba.BPID AND tbb.version=tba.maxPLDVersion) tbe LEFT JOIN  (SELECT tbd.*,CASE tbd.BPTStatus WHEN 0 THEN '未审核' WHEN 1 THEN '审核通过' WHEN 2 THEN '审核驳回' END AS BPTStatusText  FROM `ppm_bills_blueprint` tbd,(SELECT BPTBPID,MAX(BPTVersion) AS maxBPTVersion FROM `ppm_bills_blueprint` GROUP BY BPTBPID) tbc WHERE tbd.BPTBPID=tbc.BPTBPID AND tbd.BPTVersion=tbc.maxBPTVersion AND tbd.effective=1) tbf  ON tbe.BPID=tbf.BPTBPID) A where auditResult <>1 OR effective IS NULL" + " union " +
		" SELECT '方案单未审核'  as billText, A.auditor as billStaffs FROM (SELECT * FROM  (SELECT tbb.BPID,tbb.version AS PLDVersion,tbb.CTRName AS PLDCTRName,tbb.LimitDate AS PLDLimitDate,tbb.PGEMaker AS PLDPGEMaker,tbb.MHEName AS PLDMHEName,tbb.modelD AS PLDModelD,tbb.modelH AS PLDModelH,tbb.OGNSystemVersion AS PLDOGNSystemVersion FROM `ppm_bills_plan` tbb, (SELECT BPID,MAX(version) AS maxPLDVersion FROM `ppm_bills_plan` WHERE WFStatus<>0 AND WFStatus<>100 AND PLDStatus=1 GROUP BY BPID) tba  WHERE tbb.BPID=tba.BPID AND tbb.version=tba.maxPLDVersion) tbe LEFT JOIN  (SELECT tbd.*,CASE tbd.BPTStatus WHEN 0 THEN '未审核' WHEN 1 THEN '审核通过' WHEN 2 THEN '审核驳回' END AS BPTStatusText  FROM `ppm_bills_blueprint` tbd,(SELECT BPTBPID,MAX(BPTVersion) AS maxBPTVersion FROM `ppm_bills_blueprint` GROUP BY BPTBPID) tbc WHERE tbd.BPTBPID=tbc.BPTBPID AND tbd.BPTVersion=tbc.maxBPTVersion AND tbd.effective=1) tbf  ON tbe.BPID=tbf.BPTBPID) A where BPTStatusText ='未审核'" + " union " +
		" SELECT '任务单未完成'  as billText,A.taskStaff as billStaffs FROM (SELECT tbb.* FROM `ppm_bills_task` tbb,(SELECT BTID,MAX(BTVersion) AS maxBTVersion FROM `ppm_bills_task` GROUP BY BTID) tba WHERE tbb.BTID=tba.BTID AND tbb.BTVersion=tba.maxBTVersion) A where BTStatus <> 3 AND taskType='A' AND WFStatus<>0 AND WFStatus<>100 " + " union " +
		" SELECT '任务单未审核'  as billText,A.recordAuditor as billStaffs FROM ( select recordAuditor,recordStatus,BTStatus,taskType,WFStatus from (SELECT tbb.* FROM `ppm_bills_task` tbb,(SELECT BTID,MAX(BTVersion) AS maxBTVersion FROM `ppm_bills_task` GROUP BY BTID) tba  WHERE tbb.BTID=tba.BTID AND tbb.BTVersion=tba.maxBTVersion) tbc left join ppm_bills_taskrecord tbd on tbc.BTID=tbd.BTID and tbc.BTVersion=tbd.BTVersion) A where BTStatus <> 3 AND taskType='A' AND WFStatus<>0 AND WFStatus<>100 AND recordStatus='已登记,已审核' " + " union " +
		" SELECT 'IPQC单未完成'  as billText,A.IPQCMaker as billStaffs FROM (SELECT tbb.* FROM `ppm_bills_task` tbb,(SELECT BTID,MAX(BTVersion) AS maxBTVersion FROM `ppm_bills_task` GROUP BY BTID) tba WHERE tbb.BTID=tba.BTID AND tbb.BTVersion=tba.maxBTVersion AND tbb.recordNum>0 AND tbb.WFStatus<>0 AND tbb.WFStatus<>100 ) A where IPQCAuditResult<>1 OR IPQCAuditResult IS NULL" + " union " +
		" SELECT 'FQC单未完结'  as billText, A.FQCStaff as billStaffs FROM (SELECT tbc.FQCStaff,tbd.* FROM (SELECT tbb.* FROM `ppm_bills_plan` tbb, (SELECT BPID AS billBPID, MAX(version) AS billVersion FROM `ppm_bills_plan` GROUP BY billBPID) tba WHERE tbb.BPID = tba.billBPID AND tbb.version = tba.billVersion AND tbb.taskNumDone>=tbb.taskNum AND tbb.taskNumDone<>0 AND tbb.WFStatus <> 0 AND tbb.WFStatus<>100 AND tbb.FQCRequest=1 ) tbc LEFT JOIN (SELECT tbf.* FROM `ppm_bills_fqc` tbf,(SELECT fqcBPID,MAX(FQCVersion) AS maxFQCVersion FROM `ppm_bills_fqc` GROUP BY fqcBPID) tbe WHERE tbf.fqcBPID=tbe.fqcBPID AND tbf.FQCVersion=tbe.maxFQCVersion) tbd ON tbc.BPID=tbd.fqcBPID) A WHERE ( FQCStatus <>0 AND FQCStatus <>1)" + " union " +
		" SELECT 'FQC单未审核'  as billText, A.FQCAuditor as billStaffs FROM (SELECT tbc.FQCStaff,tbd.* FROM (SELECT tbb.* FROM `ppm_bills_plan` tbb, (SELECT BPID AS billBPID, MAX(version) AS billVersion FROM `ppm_bills_plan` GROUP BY billBPID) tba WHERE tbb.BPID = tba.billBPID AND tbb.version = tba.billVersion AND tbb.taskNumDone>=tbb.taskNum AND tbb.taskNumDone<>0 AND tbb.WFStatus <> 0 AND tbb.WFStatus<>100 AND tbb.FQCRequest=1 ) tbc LEFT JOIN (SELECT tbf.* FROM `ppm_bills_fqc` tbf,(SELECT fqcBPID,MAX(FQCVersion) AS maxFQCVersion FROM `ppm_bills_fqc` GROUP BY fqcBPID) tbe WHERE tbf.fqcBPID=tbe.fqcBPID AND tbf.FQCVersion=tbe.maxFQCVersion) tbd ON tbc.BPID=tbd.fqcBPID) A WHERE ( FQCStatus <>0 AND FQCStatus <>1)" + " union " +
		" SELECT 'T计划单未填写'  as billText, CASE taskSortType WHEN 'D' THEN '许静静' ELSE '蒋伟贞' END AS billStaffs FROM (SELECT tbb.* FROM `ppm_bills_task` tbb,(SELECT BTID,MAX(BTVersion) AS maxBTVersion FROM `ppm_bills_task` GROUP BY BTID) tba WHERE tbb.BTID=tba.BTID AND tbb.BTVersion=tba.maxBTVersion AND tbb.BTAcceptResult=1 ) A WHERE A.WFStatus <> 0 AND A.WFStatus<>100 AND A.taskType<>'A' AND A.T_BPID IS NULL" + " union " +
		" SELECT 'T计划单未审核' as billText,A.auditor as billStaffs FROM (SELECT C.* FROM `ppm_bills_plan_t` C, (SELECT BPID AS billBPID, MAX(version) AS billVersion FROM `ppm_bills_plan_t` GROUP BY billBPID) D WHERE C.BPID = D.billBPID AND C.version = D.billVersion AND C.WFStatus <> 0 AND C.WFStatus<>100 AND C.effective=1 AND C.auditResult=0) A " + " union " +
		" SELECT 'T方案单未完成'  as billText, A.PLDPGEMaker as billStaffs FROM (SELECT * FROM  (SELECT tbb.BPID,tbb.version AS PLDVersion,tbb.BPIDfrom AS PLDBPIDfrom,tbb.BTIDfrom AS PLDBTIDfrom,tbb.CTRName AS PLDCTRName,tbb.LimitDate AS PLDLimitDate,tbb.PGEMaker AS PLDPGEMaker,tbb.MHEName AS PLDMHEName,tbb.modelD AS PLDModelD,tbb.modelH AS PLDModelH,tbb.OGNSystemVersion AS PLDOGNSystemVersion,tbb.auditor AS PLDAuditor FROM `ppm_bills_plan_t` tbb, (SELECT BPID,MAX(version) AS maxPLDVersion FROM `ppm_bills_plan_t` WHERE WFStatus<>0 AND WFStatus<>100 AND PLDStatus=1 GROUP BY BPID) tba  WHERE tbb.BPID=tba.BPID AND tbb.version=tba.maxPLDVersion) tbe LEFT JOIN  (SELECT tbd.*,CASE tbd.BPTStatus WHEN 0 THEN '未审核' WHEN 1 THEN '审核通过' WHEN 2 THEN '审核驳回' END AS BPTStatusText  FROM `ppm_bills_blueprint_t` tbd,(SELECT BPTBPID,MAX(BPTVersion) AS maxBPTVersion FROM `ppm_bills_blueprint_t` GROUP BY BPTBPID) tbc WHERE tbd.BPTBPID=tbc.BPTBPID AND tbd.BPTVersion=tbc.maxBPTVersion AND tbd.effective=1 ) tbf  ON tbe.BPID=tbf.BPTBPID) A where auditResult <>1 OR effective IS NULL" + " union " +
		" SELECT 'T方案单未审核'  as billText, A.auditor as billStaffs FROM (SELECT * FROM  (SELECT tbb.BPID,tbb.version AS PLDVersion,tbb.BPIDfrom AS PLDBPIDfrom,tbb.BTIDfrom AS PLDBTIDfrom,tbb.CTRName AS PLDCTRName,tbb.LimitDate AS PLDLimitDate,tbb.PGEMaker AS PLDPGEMaker,tbb.MHEName AS PLDMHEName,tbb.modelD AS PLDModelD,tbb.modelH AS PLDModelH,tbb.OGNSystemVersion AS PLDOGNSystemVersion,tbb.auditor AS PLDAuditor FROM `ppm_bills_plan_t` tbb, (SELECT BPID,MAX(version) AS maxPLDVersion FROM `ppm_bills_plan_t` WHERE WFStatus<>0 AND WFStatus<>100 AND PLDStatus=1 GROUP BY BPID) tba  WHERE tbb.BPID=tba.BPID AND tbb.version=tba.maxPLDVersion) tbe LEFT JOIN  (SELECT tbd.*,CASE tbd.BPTStatus WHEN 0 THEN '未审核' WHEN 1 THEN '审核通过' WHEN 2 THEN '审核驳回' END AS BPTStatusText  FROM `ppm_bills_blueprint_t` tbd,(SELECT BPTBPID,MAX(BPTVersion) AS maxBPTVersion FROM `ppm_bills_blueprint_t` GROUP BY BPTBPID) tbc WHERE tbd.BPTBPID=tbc.BPTBPID AND tbd.BPTVersion=tbc.maxBPTVersion AND tbd.effective=1 ) tbf  ON tbe.BPID=tbf.BPTBPID) A where auditResult <>1 OR effective IS NULL" + " union " +
		" SELECT 'T任务单未完成'  as billText,A.taskStaff as billStaffs FROM (SELECT tbb.* FROM `ppm_bills_task_t` tbb,(SELECT BTID,MAX(BTVersion) AS maxBTVersion FROM `ppm_bills_task_t` GROUP BY BTID) tba WHERE tbb.BTID=tba.BTID AND tbb.BTVersion=tba.maxBTVersion) A where BTStatus <> 3 AND WFStatus<>0 AND WFStatus<>100 " + " union " +
		" SELECT 'T任务单未审核'  as billText,A.recordAuditor as billStaffs FROM ( select recordAuditor,recordStatus,BTStatus,taskType,WFStatus from (SELECT tbb.* FROM `ppm_bills_task_t` tbb,(SELECT BTID,MAX(BTVersion) AS maxBTVersion FROM `ppm_bills_task_t` GROUP BY BTID) tba  WHERE tbb.BTID=tba.BTID AND tbb.BTVersion=tba.maxBTVersion) tbc left join ppm_bills_taskrecord_t tbd on tbc.BTID=tbd.BTID and tbc.BTVersion=tbd.BTVersion) A where BTStatus <> 3 AND taskType='A' AND WFStatus<>0 AND WFStatus<>100 AND recordStatus='已登记,已审核' " + " union " +
		" SELECT 'T-IPQC单未完成'  as billText,A.IPQCMaker as billStaffs FROM (SELECT tbb.* FROM `ppm_bills_task_t` tbb,(SELECT BTID,MAX(BTVersion) AS maxBTVersion FROM `ppm_bills_task_t` GROUP BY BTID) tba WHERE tbb.BTID=tba.BTID AND tbb.BTVersion=tba.maxBTVersion AND tbb.recordNum>0 AND tbb.WFStatus<>0 AND tbb.WFStatus<>100 ) A where IPQCAuditResult<>1 OR IPQCAuditResult IS NULL" + " union " +
		" SELECT 'T-FQC单未完成'  as billText,A.FQCStaff as billStaffs FROM (SELECT tbc.FQCStaff,tbc.BPID,tbc.DBID AS PLDDBID,tbc.CTRName AS PLDCTRName,tbd.* FROM (SELECT tbb.* FROM `ppm_bills_plan_t` tbb, (SELECT BPID AS billBPID, MAX(version) AS billVersion FROM `ppm_bills_plan_t` GROUP BY billBPID) tba WHERE tbb.BPID = tba.billBPID AND tbb.version = tba.billVersion AND tbb.taskNumDone>=tbb.taskNum AND tbb.taskNumDone<>0 AND tbb.WFStatus <> 0 AND tbb.WFStatus<>100 AND tbb.FQCRequest=1 ) tbc LEFT JOIN (SELECT tbf.* FROM `ppm_bills_fqc_t` tbf,(SELECT fqcBPID,MAX(FQCVersion) AS maxFQCVersion FROM `ppm_bills_fqc_t` GROUP BY fqcBPID) tbe WHERE tbf.fqcBPID=tbe.fqcBPID AND tbf.FQCVersion=tbe.maxFQCVersion) tbd ON tbc.BPID=tbd.fqcBPID) A WHERE FQCAuditResult<>1 AND FQCAuditResult<>2 OR FQCAuditResult IS NULL" + " union " +
		" SELECT 'T-FQC单未审核'  as billText,A.FQCAuditor as billStaffs FROM (SELECT tbc.FQCStaff,tbc.BPID,tbc.DBID AS PLDDBID,tbc.CTRName AS PLDCTRName,tbd.* FROM (SELECT tbb.* FROM `ppm_bills_plan_t` tbb, (SELECT BPID AS billBPID, MAX(version) AS billVersion FROM `ppm_bills_plan_t` GROUP BY billBPID) tba WHERE tbb.BPID = tba.billBPID AND tbb.version = tba.billVersion AND tbb.taskNumDone>=tbb.taskNum AND tbb.taskNumDone<>0 AND tbb.WFStatus <> 0 AND tbb.WFStatus<>100 AND tbb.FQCRequest=1 ) tbc LEFT JOIN (SELECT tbf.* FROM `ppm_bills_fqc_t` tbf,(SELECT fqcBPID,MAX(FQCVersion) AS maxFQCVersion FROM `ppm_bills_fqc_t` GROUP BY fqcBPID) tbe WHERE tbf.fqcBPID=tbe.fqcBPID AND tbf.FQCVersion=tbe.maxFQCVersion) tbd ON tbc.BPID=tbd.fqcBPID) A WHERE FQCAuditResult<>1 AND FQCAuditResult<>2 OR FQCAuditResult IS NULL AND FQCAuditor is not null"
}
let O;

sendBillsUndoneDDMsg(I, O)

// 通知任务---------
var j1 = schedule
	.scheduleJob({
			hour: 09,
			minute: 08,
			dayOfWeek: [1, 2, 3, 4, 5]
		},
		function () {

			sendBillsUndoneDDMsg(I, O)

		});


var j2 = schedule
	.scheduleJob({
			hour: 13,
			minute: 30,
			dayOfWeek: [1, 2, 3, 4, 5]
		},
		function () {

			sendBillsUndoneDDMsg(I, O)


		});