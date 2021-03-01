module.exports = function (sender) {

	const msg = sender.req.query.msg;
	const at = sender.req.query.at;

	console.log("msg:" + msg);
	console.log("at:" + at);

	const https = require("https");
	const mobiles = [at];

	const textMsg = {
		"msgtype": "text",
		"text": {
			"content": "[预算系统通知]" + "@" + at + msg + "\n\n",
		},
		"at": {
			"atMobiles": mobiles,
			"isAtAll": false
		}
	}

	const requestData = JSON.stringify(textMsg);

	const token = "5b4fd0a118117ab5fb1e674cedd287de0a73835549586de601035f33b747d543" //测试群
	const url = 'oapi.dingtalk.com';
	const req = https.request({
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

	sender.success("发送成功!");
};