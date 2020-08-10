var schedule = require("node-schedule");
const https = require("https");
//const querystring = require('querystring');

//报餐通知任务---------
var j1 = schedule.scheduleJob({
	hour: 14,
	minute: 00,
	dayOfWeek: [1, 2, 3, 4, 5]
}, function () {

	var queryParams = {

		"msgtype": "link",
		"link": {
			"text": "报餐了，报餐了，请大家点击登记报餐！2点半之前哦！",
			"title": "机器人报餐通知",
			"picUrl": "",
			"messageUrl": "http://172.16.3.42:8080/rotest/add.php",
			"at": {
				//			         		"atMobiles": mobiles, 
				"isAtAll": true
			}
		}
	};


	var requestData = JSON.stringify(queryParams);
	console.log(requestData);
	var token = "df02ad004120b570b6a0980e5b30470a8ecbfde2a4282e5cf93b5b68e120f889";
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

});

//报餐结果任务---------------
var j2 = schedule.scheduleJob({
	hour: 14,
	minute: 30,
	dayOfWeek: [1, 2, 3, 4, 5]
}, function () {

	var queryParams = {

		"msgtype": "link",
		"link": {
			"text": "报餐了，报餐了，请大家点击登记报餐！2点半之前哦！",
			"title": "机器人报餐结果",
			"picUrl": "",
			"messageUrl": "http://172.16.3.42:8080/rotest/add.php",
			"at": {
				//		         		"atMobiles": mobiles, 
				"isAtAll": true
			}
		}
	};


	var requestData = JSON.stringify(queryParams);
	console.log(requestData);
	var token = "df02ad004120b570b6a0980e5b30470a8ecbfde2a4282e5cf93b5b68e120f889";
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

});


//		var j3 = schedule.scheduleJob({hour: 13, minute: 42, dayOfWeek: 4}, function(){
//			  console.log('Time for tea!');
//			  
//			  var mobiles = [17051095060,15058034628]
//				var queryParams = {
//				    "msgtype": "text",
//		     		"text": {
//		         		"content": 'test..........'
//		     		},
//		     		"at": {
//		         		"atMobiles": mobiles, 
//		         		"isAtAll": true
//		         	}
//		     		
//		     		
//				};
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
//
//			});