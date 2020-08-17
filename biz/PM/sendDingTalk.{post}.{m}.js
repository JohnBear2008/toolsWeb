module.exports = function (sender) {

	var msg = sender.req.query.msg;
	var at = sender.req.query.at;


	console.log("msg:" + msg);
	console.log("at:" + at);

	const https = require("https");
	const querystring = require('querystring');


	const mobiles = [at];



	var textMsg = {
		"msgtype": "text",
		"text": {
			"content": "[PPM流程提醒]" + msg + "\n\n",
		},
		"at": {
			"atMobiles": mobiles,
			"isAtAll": false
		}
	}

	const requestData = JSON.stringify(textMsg);


	//  const token = "c6cbd13c9fa5115f91db5b86bd97ba3d756fe8a0bb6d1000588c6f6c469e5730";
	const token = "854558d6b78ffb409b8fa639b5b62949608847051fe302d51dfe5dc465093a5d" //测试群

	// var token = "43e278d8d451875e8be1b5eec0ce66b5d8d51dcb527013cc3e6c2630b612cc30";软体部

	//  const token ="7468a90ef8f5c1e8f1a24b91e63077fddd6792e29f8e4192e1b2043d851e9f09"// 工具提醒群


	// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; //只要调用了没有受信的https就会报错：CERT_UNTRUSTED 简单的解决方法就是设置环境变量回避非授信证书的问题。
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
		//	     			console.error(err);
	});
	req.end();

	sender.success("发送成功!");
};