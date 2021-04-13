/*
 * @Author: your name
 * @Date: 2021-02-22 14:59:19
 * @LastEditTime: 2021-04-13 10:27:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \toolsWeb\biz\BguTM\sendDingTalk.{post}.{m}.js
 */
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

	const token = "854558d6b78ffb409b8fa639b5b62949608847051fe302d51dfe5dc465093a5d" //测试群

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