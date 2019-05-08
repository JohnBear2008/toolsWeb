require("../../client/js/Date.js");

var schedule = require("node-schedule");
const https = require("https");
var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
var yjDB = global.yjRequire("yujiang.Foil").yjDB;
//const querystring = require('querystring');

//函数-钉钉机器人发送消息
function DDRobotMsgSender(divMsg){

	
		var requestData = JSON.stringify(divMsg);
		console.log(requestData);
//		var token = "df02ad004120b570b6a0980e5b30470a8ecbfde2a4282e5cf93b5b68e120f889";
		
		var token = "43e278d8d451875e8be1b5eec0ce66b5d8d51dcb527013cc3e6c2630b612cc30";
		
		var url = 'oapi.dingtalk.com';
		var req = https.request({
		    hostname: url,
		    port: 443,
		    path: '/robot/send?access_token=' + token,
		    method: "POST",
		    json: true,
		    headers: {
		        'Content-Type' : "application/json; charset=utf-8"
		    }
		});
		req.write(requestData);
		req.on('error',function(err){
			console.error(err);
		});
		req.end();

	
}



//var queryParams = {
// 		
// 		"msgtype": "link", 
// 	    "link": {
// 	        "text":DDtext, 
// 	        "title": "[PPM消息]未完成订单", 
// 	        "picUrl": "", 
// 	        "messageUrl": "http://172.16.3.48:2019/app/PM/billsTrack",
// 	        "at": {
////         		"atMobiles": mobiles, 
//         		"isAtAll": true
//         	}
// 	    }
//	};
//
//var markdown={
//	     "msgtype": "markdown",
//	     "markdown": {
//	         "title":"[PPM消息]未完成订单",
//	         "text": DDtext
//	     },
//	    "at": {
//	        "atMobiles": [], 
//	        "isAtAll": true
//	    }
//	 }
//
//
//var actionCard={
//    "actionCard": {
//        "title": "[PPM提醒]", 
//        "text": DDtext, 
//        "hideAvatar": "1", 
//        "btnOrientation": "0", 
//        "btns": [
//            {
//                "title": "登陆PPM系统", 
//                "actionURL": "http://172.16.3.48:2019/app/PM/billsTrack"
//            }
//        ]
//    }, 
//    "msgtype": "actionCard"
//}
//  
//var feedCard={
//    "feedCard": {
//        "links": [
//            {
//                "title": "时代的火车向前开", 
//                "messageURL": "https://www.dingtalk.com/s?__biz=MzA4NjMwMTA2Ng==&mid=2650316842&idx=1&sn=60da3ea2b29f1dcc43a7c8e4a7c97a16&scene=2&srcid=09189AnRJEdIiWVaKltFzNTw&from=timeline&isappinstalled=0&key=&ascene=2&uin=&devicetype=android-23&version=26031933&nettype=WIFI", 
//                "picURL": "https://www.dingtalk.com/"
//            },
//            {
//                "title": "时代的火车向前开2", 
//                "messageURL": "https://www.dingtalk.com/s?__biz=MzA4NjMwMTA2Ng==&mid=2650316842&idx=1&sn=60da3ea2b29f1dcc43a7c8e4a7c97a16&scene=2&srcid=09189AnRJEdIiWVaKltFzNTw&from=timeline&isappinstalled=0&key=&ascene=2&uin=&devicetype=android-23&version=26031933&nettype=WIFI", 
//                "picURL": "https://www.dingtalk.com/"
//            }
//        ]
//    }, 
//    "msgtype": "feedCard"
//}


//报餐通知任务---------
var j1 = schedule.scheduleJob({hour: 09, minute: 00, dayOfWeek:[1,2,3,4,5]}, function(){

var SQLExcute = "SELECT BPID,CTRName,PGEMaker,limitDate FROM  (SELECT tbb.*  FROM `ppm_bills_plan` tbb, (SELECT BPID,MAX(version) AS maxPLDVersion FROM `ppm_bills_plan` WHERE WFStatus<>0 AND WFStatus<>100 GROUP BY BPID) tba  WHERE tbb.BPID=tba.BPID AND tbb.version=tba.maxPLDVersion ) tbe ";

yjDBService.exec({
	sql: SQLExcute,
	parameters: [],
	rowsAsArray: false,
	success: function(result) {
	console.log("result"+JSON.stringify(result));
//	DDRobotMsgSender(result);
	
	let DDtext="";
	DDtext="【PPM提醒】共有"+result.length+"条订单未完成!,请相关人员跟进!\n\n";

	for(let i=0;i<result.length;i++){
		DDtext=DDtext+"单号:"+result[i].BPID+" 客户:"+result[i].CTRName+" 完成期限:"+result[i].limitDate.Format('yyyy-MM-dd')+" 方案人:"+result[i].PGEMaker+"\n\n";
	}
	console.log(DDtext);
	
	let actionCard={
			"actionCard": 
			{
				"title": "[PPM提醒]", 
				"text": DDtext, 
				"hideAvatar": "0", 
				"btnOrientation": "0", 
				"btns": [
					{
						"title": "登陆PPM系统", 
						"actionURL": "http://172.16.3.48:2019/app/PM/linkPage"
							}
					]
	        }, 
	        "msgtype": "actionCard"
		}
	DDRobotMsgSender(actionCard);
	
//	let ppmUrl = {
//		"msgtype": "link", 
//	    "link": {
//	        "text":"", 
//	        "title": "点击跳转到PPM个人中心", 
//	        "picUrl": "", 
//	        "messageUrl": "http://172.16.3.48:2019/app/PM/workCenter",
//	        "at": {
////     		"atMobiles": mobiles, 
//     		"isAtAll": true
//     	    }
//	    }
//    };
//	DDRobotMsgSender(ppmUrl);
	
	
	
	},
	error: function(error) {
	console.log("error"+JSON.stringify(error));
	},
});
			
			
			


//				var queryParams = {
//		     		
//		     		"msgtype": "link", 
//		     	    "link": {
//		     	        "text":"报餐了，报餐了，请大家点击登记报餐！2点半之前哦！", 
//		     	        "title": "机器人报餐通知", 
//		     	        "picUrl": "", 
//		     	        "messageUrl": "http://172.16.3.42:8080/rotest/add.php",
//		     	        "at": {
////			         		"atMobiles": mobiles, 
//			         		"isAtAll": true
//			         	}
//		     	    }
//				};
//			  
//			  
//				var requestData = JSON.stringify(queryParams);
//				console.log(requestData);
//				var token = "df02ad004120b570b6a0980e5b30470a8ecbfde2a4282e5cf93b5b68e120f889";
//				var url = 'oapi.dingtalk.com';
//				var req = https.request({
//				    hostname: url,
//				    port: 443,
//				    path: '/robot/send?access_token=' + token,
//				    method: "POST",
//				    json: true,
//				    headers: {
//				        'Content-Type' : "application/json; charset=utf-8"
//				    }
//				});
//				req.write(requestData);
//				req.on('error',function(err){
//					console.error(err);
//				});
//				req.end();

			});
		



	
