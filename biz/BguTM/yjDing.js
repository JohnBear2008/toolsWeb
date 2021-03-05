/**
* var yjDing = require("./yjDing");
* let pw = yjDing["HelloMsg"].talk(GroupName,phone);
*/
if (typeof module !== 'undefined' && module.exports) {

}

var yjDing = {
	"HelloMsg": {
		talk: function (MsgBody, mobiles) {

			const https = require("https");
			const querystring = require('querystring');
			const textMsg = {
				"msgtype": "text",
				"text": {
					"content": "[预算系统通知]" + MsgBody + "\n\n",
				},
				"at": {
					"atMobiles": mobiles,
					"isAtAll": false
				}
			}

			const requestData = JSON.stringify(textMsg);
 
			// const token = "5b4fd0a118117ab5fb1e674cedd287de0a73835549586de601035f33b747d543";		 
			// const url = 'oapi.dingtalk.com';
			// const req = https.request({
			// 	hostname: url,
			// 	port: 443,
			// 	path: '/robot/send?access_token=' + token,
			// 	method: "POST",
			// 	json: true,
			// 	headers: {
			// 		'Content-Type': "application/json; charset=utf-8"
			// 	}
			// });
			// req.write(requestData);
			// req.on('error', function (err) {
			// });
			// req.end();

			var signedStr = "发送釘釘成功";
			return signedStr;
		}
	}
}

if (typeof module !== 'undefined' && module.exports) {
	module.exports = yjDing;
}