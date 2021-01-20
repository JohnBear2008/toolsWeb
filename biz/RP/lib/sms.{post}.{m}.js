module.exports = function (sender) {


	console.log("ajax Postqqq:" + JSON.stringify(sender.req.query));

	let r1 = sender.req.query;

	var yjSMS_baidu = yjRequire("yujiang.Foil", "yjSMS.baidu.js");
	console.log("come in testSMS");


	var option = {
		//18205849527
		phone: "17051095060",
		// //维修收费01
		// templateCode:"smsTpl:3ffad050-814a-40a7-8689-35430ceef9b7",
		// //维修收费02
		// templateCode:"smsTpl:adb893e7-288c-4348-95ef-0d0f6369e6fa",
		//维修收费03
		templateCode: "sms-tmpl-Gxyyaf75958",
		contentVar: {
			"count": "3",
			"cost": "3000"
		},
		success: function (data) {
			console.log(data);
			sender.success(data)
		},
		error: function (err) {
			console.log(err);
		}
	}

	yjSMS_baidu.send(option);


};