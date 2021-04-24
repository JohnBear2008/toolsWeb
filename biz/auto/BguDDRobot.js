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
	// var token = "c6cbd13c9fa5115f91db5b86bd97ba3d756fe8a0bb6d1000588c6f6c469e5730";

	// https://oapi.dingtalk.com/robot/send?access_token=854558d6b78ffb409b8fa639b5b62949608847051fe302d51dfe5dc465093a5d

	var token = "854558d6b78ffb409b8fa639b5b62949608847051fe302d51dfe5dc465093a5d"; //测试群

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

//生成标准钉钉消息 I={DDMsg:[{msg:'1111',at:'aaa'}],atMobiles:[]}
const CreateDDMsgText = (I, O) => {

	let DDText = "";
	for (let i = 0; i < I.DDMsg.length; i++) {
		DDText = DDText + I.DDMsg[i].msg + '@' + I.DDMsg[i].at + '\n\n' +
			'内网登录:http://192.168.0.9:2019/app/TMFinc/feeAgreeForm' + '\n\n' +
			'外网登录:http://60.190.61.10:8091/app/TMFinc/feeAgreeForm';
	}
	console.log("DDText:" + DDText)

	// O = {
	// 	"actionCard": {
	// 		"title": "[预算系统定时提醒]",
	// 		"text": "[预算系统定时提醒]检测到系统存在未审核单据，请您登录系统审核！\n\n," + DDText,
	// 		"hideAvatar": "0",
	// 		"btnOrientation": "0",
	// 		"btns": [{
	// 			"title": "登陆PPM系统",
	// 			"actionURL": "http://192.168.0.9:2019/app/pm/linkpage"
	// 		}]
	// 	},
	// 	"msgtype": "actionCard",
	// 	"at": {
	// 		"atMobiles": ["17051095060"],
	// 		"isAtAll": false
	// 	}
	// };

	if (!I.atMobiles) {
		I.atMobiles = []
	}

	O = {
		"msgtype": "text",
		"text": {
			"content": "[预算系统定时提醒]您存在未审核单据，请登录审核！\n\n" + DDText,
		},
		"at": {
			"atMobiles": I.atMobiles,
			"isAtAll": false
		}
	}
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

					let atMobiles = []



					for (let i = 1; i < R1.length; i++) {

						console.log("msgI:" + msgI)

						console.log("atI:" + atI)

						if (R1[i].billText === R1[i - 1].billText) {



							// console.log(atI.indexOf(R1[i].billStaffs) === -1)

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

						if (atMobiles.indexOf(R1[i].Mobiles) === -1) {
							atMobiles.push(R1[i].Mobiles)
						}

						// console.log("DDMsgArray:"+JSON.stringify(DDMsgArray))
					}



					DDMsgArray.push({
						msg: msgI,
						at: atI
					})


					R2 = {
						DDMsg: DDMsgArray,
						atMobiles: atMobiles
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
	sql: "SELECT '采购申请单待审核' as billText, ta.CurName AS billStaffs,tb.Mobiles FROM bgu_rule ta  LEFT JOIN bgu_staffs tb ON ta.CurName=tb.StaffName WHERE CurText='审批' AND sendText='送出'"
}
let O;

// sendBillsUndoneDDMsg(I, O)





// 通知任务---------
var j1 = schedule
	.scheduleJob({
			hour: 09,
			minute: 13,
			dayOfWeek: [1, 2, 3, 4, 5]

		},
		function () {

			sendBillsUndoneDDMsg(I, O)

		});


var j2 = schedule
	.scheduleJob({
			hour: 12,
			minute: 53,
			dayOfWeek: [1, 2, 3, 4, 5]

		},
		function () {

			sendBillsUndoneDDMsg(I, O)


		});