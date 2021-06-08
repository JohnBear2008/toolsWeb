/*
 * @Author: your name
 * @Date: 2020-08-17 08:18:38
 * @LastEditTime: 2021-06-04 08:40:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \toolsWeb\biz\PM\lib\sms.{post}.{m}.js
 */
module.exports = function (sender) {
	let {
		phone,
		content
	} = sender.req.query;

	var yjSMS_baidu = yjRequire("yujiang.Foil", "yjSMS.baidu.js");

	var option = {
		phone: phone,
		templateCode: "sms-tmpl-PWZZjq43597",
		contentVar: {
			"code": content,
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