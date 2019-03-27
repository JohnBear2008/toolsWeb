module.exports = function(sender) {
	
//	    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
//	    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
	    
//	     console.log("get:"+JSON.stringify(sender.req.query));
	     
//	     var mailData=sender.req.query;
	     
	     var Msg=sender.req.query.Msg;
//	     var fnum=sender.req.query.fnum;
//	     var frate=sender.req.query.frate;
	     
	     const https = require("https");
	     const querystring = require('querystring');

	     	
	     		const mobiles = [17051095060,15058034628]
	     		const queryParams = {
	     		    "msgtype": "text",
	          		"text": {
	              		"content": Msg
	          		},
	          		"at": {
	              		"atMobiles": mobiles, 
	              		"isAtAll": true
	              	}
	     		};
	     		const requestData = JSON.stringify(queryParams);
//	     		console.log(requestData);
	     		const token = "df02ad004120b570b6a0980e5b30470a8ecbfde2a4282e5cf93b5b68e120f889";
	     		const url = 'oapi.dingtalk.com';
	     		const req = https.request({
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
//	     			console.error(err);
	     		});
	     		req.end();
	     		
	     		sender.success("发送成功!");


};