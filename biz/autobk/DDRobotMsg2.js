const schedule = require("node-schedule");
const https = require("https");


const token = "55eaea4a1c2794f386689c86254db6884c9d76a7daf326f962fd636be7444779"; //软体课

const sendDDMsg = (msgObj) => {
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
	minute: 0,
	dayOfWeek: [1]
}

const msg1 = {
	"msgtype": "text",
	"text": {
		"content": "[定时提醒]小伙伴们，请及时更新 记录追踪文档。"
	},
	"at": {
		"isAtAll": true
	}
}

schedule.scheduleJob(rule1, function () {
	sendDDMsg(msg1)
});


