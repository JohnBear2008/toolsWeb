/*
 * @Author: your name
 * @Date: 2018-11-13 15:10:05
 * @LastEditTime: 2021-04-02 12:51:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \toolsWeb\biz\PM\updDBData.{post}.{m}.js
 */
module.exports = function (sender) {
	var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
	var yjDB = global.yjRequire("yujiang.Foil").yjDB;

	// console.log("get:"+JSON.stringify(sender.req.query));

	////   console.log("PM2333 test");
	//       
	// var obj = sender.req.query;
	var obj=sender.req.body

	console.log('updDBData get obj:', obj);
	//    
	var updateContent = "";


	for (var key in obj) {
		if (key == "DBTable") {
			var DBTable = obj[key];
		} else if (key == "DBID") {
			var DBID = obj[key];
		} else {

			//增加为空判断,为空则替换为null 防止插入数据库格式类型不对错误
			if (obj[key] == "") {
				updateContent = updateContent + key + "=" + null + ",";
			} else {
				updateContent = updateContent + key + "=" + "'" + obj[key] + "',";
			}

			//    		tableTitle=tableTitle+key+",";
			//    		tableData=tableData+obj[key]+",";
		}
	}


	//    
	updateContent = updateContent.substr(0, updateContent.length - 1);



	var SQLUpdate = " update " + DBTable + " set " + updateContent + " where DBID=" + DBID;


	//
	//
	////var SQLInsert="insert into PM_customer (cust_FID,cust_Name) values(110,110)";

	console.log("SQLUpdate:" + SQLUpdate);
	//
	yjDBService.exec({
		sql: SQLUpdate,
		parameters: [],
		success: function (data) {
			console.log('SQLUpdate success', data);
			sender.success(data)
		},
		error: function (error) {
			console.log('SQLUpdate error', error);
			sender.error
		}
	});


};