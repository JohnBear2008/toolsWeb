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
	var token = "c6cbd13c9fa5115f91db5b86bd97ba3d756fe8a0bb6d1000588c6f6c469e5730";

	// var token ="43e278d8d451875e8be1b5eec0ce66b5d8d51dcb527013cc3e6c2630b612cc30";软体部

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

const getSQLData=async (I,O)=>{

	yjDBService.exec({
		sql: sqlGetUndone,
		parameters: [],
		rowsAsArray: false, // Chenly 2018-10-19 返回obj arr
		success: function(result) {
			sender.success(result);
		},
		error: sender.error
	});

}


// 通知任务---------
var j1 = schedule
	.scheduleJob(
		{
			hour: 08,
			minute: 30,
			dayOfWeek: [1, 2, 3, 4, 5]
		},
		function () {

			 sqlGetUndone = "SELECT A.auditor,CASE auditResult WHEN 1 THEN '审核通过' WHEN 2 THEN '审核驳回' ELSE '未审核' END AS  auditText FROM (SELECT C.* FROM `ppm_bills_plan` C, (SELECT BPID AS billBPID, MAX(version) AS billVersion FROM `ppm_bills_plan` GROUP BY billBPID) D WHERE C.BPID = D.billBPID AND C.version = D.billVersion AND C.WFStatus <> 0 AND C.WFStatus<>100 ) A;"+
			 "SELECT A.auditor FROM (SELECT * FROM  (SELECT tbb.BPID,tbb.version AS PLDVersion,tbb.CTRName AS PLDCTRName,tbb.LimitDate AS PLDLimitDate,tbb.PGEMaker AS PLDPGEMaker,tbb.MHEName AS PLDMHEName,tbb.modelD AS PLDModelD,tbb.modelH AS PLDModelH,tbb.OGNSystemVersion AS PLDOGNSystemVersion FROM `ppm_bills_plan` tbb, (SELECT BPID,MAX(version) AS maxPLDVersion FROM `ppm_bills_plan` WHERE WFStatus<>0 AND WFStatus<>100 AND PLDStatus=1 GROUP BY BPID) tba  WHERE tbb.BPID=tba.BPID AND tbb.version=tba.maxPLDVersion) tbe LEFT JOIN  (SELECT tbd.*,CASE tbd.BPTStatus WHEN 0 THEN '未审核' WHEN 1 THEN '审核通过' WHEN 2 THEN '审核驳回' END AS BPTStatusText  FROM `ppm_bills_blueprint` tbd,(SELECT BPTBPID,MAX(BPTVersion) AS maxBPTVersion FROM `ppm_bills_blueprint` GROUP BY BPTBPID) tbc WHERE tbd.BPTBPID=tbc.BPTBPID AND tbd.BPTVersion=tbc.maxBPTVersion AND tbd.effective=1) tbf  ON tbe.BPID=tbf.BPTBPID) A"
			
			


			var actionCard = {
				"actionCard": {
					"title": "[PPM定时提醒]",
					"text": "[PPM定时提醒]请大家登陆PPM系统个人中心处理相关工作项!\n\n",
					"hideAvatar": "0",
					"btnOrientation": "0",
					"btns": [
						{
							"title": "登陆PPM系统",
							"actionURL": "http://192.168.0.9:2019/app/pm/linkpage"
						}
					]
				},
				"msgtype": "actionCard",
				"at": {
					"atMobiles": [],
					"isAtAll": true
				}
			}

			// DDRobotMsgSender(actionCard);



		});
