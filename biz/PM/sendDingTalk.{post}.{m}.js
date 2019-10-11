module.exports = function(sender) {
	
//	    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
//	    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
	    
//	     console.log("get:"+JSON.stringify(sender.req.query));
	     
//	     var mailData=sender.req.query;
	     
	     var msg=sender.req.query.msg;
	     var at=sender.req.query.at;
//	     var fnum=sender.req.query.fnum;
//	     var frate=sender.req.query.frate;
	     
	     
	     console.log("msg:"+msg);
	     console.log("at:"+at);
	     
	     const https = require("https");
	     const querystring = require('querystring');

	     	
	     		const mobiles = [at];
//	     		const queryParams = {
//	     		    "msgtype": "text",
//	          		"text": {
//	              		"content": msg
//	          		},
//	          		"at": {
//	              		"atMobiles": mobiles, 
//	              		"isAtAll": false
//	              	}
//	     		};
	     		
	     		var  actionCard={
					    "actionCard": {
					        "title": "[PPM流程提醒]", 
					        "text": "[PPM流程提醒]"+msg+"\n\n",
					        "hideAvatar": "0", 
					        "btnOrientation": "0", 
					        "btns": [
					            {
					            	 "title": "登陆PPM系统", 
						             "actionURL": "http://192.168.0.9:2019/app/pm/linkpage"
					            }
					        ]
					    }, 
					    "msgtype": "actionCard",
					    "at" : {
							"atMobiles" : mobiles,
							"isAtAll" : false
						}
					}
	     		
	     		
	     		const requestData = JSON.stringify(actionCard);
//	     		console.log(requestData);
	     		const token = "c6cbd13c9fa5115f91db5b86bd97ba3d756fe8a0bb6d1000588c6f6c469e5730";
	     		
	     	// var token = "43e278d8d451875e8be1b5eec0ce66b5d8d51dcb527013cc3e6c2630b612cc30";软体部
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