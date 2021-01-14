const schedule = require("node-schedule");
const https = require("https");


//const token = "854558d6b78ffb409b8fa639b5b62949608847051fe302d51dfe5dc465093a5d"; //div测试群
 const token = "81375e2ff0ca9c18d5262adb94d19c194dd51f383351ed72a7d8b0ab69961983" //工程单位

const sendDDMsg = (msgObj) => {
	console.log(111111);
	var requestData = JSON.stringify(msgObj);

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

//周报提醒-----------------

const rule1 = {
	hour: 9,
	minute: 30,
	dayOfWeek: [4]
}

const msg1 = {
	"msgtype": "text",
	"text": {
		"content": "[PPM定时提醒]今天是周四,大家记得准时交周报哦!"
	},
	"at": {
		"isAtAll": true
	}
}

schedule.scheduleJob(rule1, function () {
	sendDDMsg(msg1)
});


//报餐通知
const rule2 = {
	hour: 14,
	minute: 00,
	dayOfWeek: [1, 2, 3, 4, 5]
}

// const msg2 = {
// 	"msgtype": "link",
// 	"link": {
// 		"text": "[PPM定时提醒]报餐啦,需要的小伙伴请找谢丽君登记,2点半之前哦！",
// 		"title": "[PPM定时提醒]",
// 		"picUrl": "",
// 		"messageUrl": "",
// 		"at": {
// 			"isAtAll": true
// 		}
// 	}
// };

const msg2 = {
	"msgtype": "text",
	"text": {
		"content": "[PPM定时提醒]报餐啦,需要的小伙伴请找谢丽君登记,2点半之前哦！"
	},
	"at": {
		"isAtAll": true
	}
}

schedule.scheduleJob(rule2, function () {
	sendDDMsg(msg2)
});



