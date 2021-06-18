/*
 * @Author: your name
 * @Date: 2021-06-18 13:08:52
 * @LastEditTime: 2021-06-18 14:19:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \toolsWeb\biz\PM\lib\api.{post}.{m}.js
 */
const https = require("https");
module.exports = function (sender) {

	let params = sender.req.body
	console.log("params:" + JSON.stringify(params));
	let paramJson = JSON.stringify(params)

	const req = https.request({
		hostname: '192.168.0.9',
		port: 8000,
		path: '/api/ppm/lin/autoFile',
		method: "POST",
		json: true,
		headers: {
			'Content-Type': "application/json; charset=utf-8"
		}
	});
	req.write(paramJson);
	req.on('error', function (err) {
		console.error(err);
		sender.error(
			"fail!"
		);
	});


	sender.success("success");
	req.end();
};