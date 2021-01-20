/*融合addDBData和updDBData
 * 判断DBID为空则添加否则更新
 * 
 * 
 * 
 * */




module.exports = function (sender) {

	var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
	var yjDB = global.yjRequire("yujiang.Foil").yjDB;

	//   console.log("PM2333 test");
	var obj = sender.req.body;


	

	// obj.emailContent = obj.emailContent.replace(/"/g, '')


	console.log("obj", obj);


	var DBID = obj.DBID;

	if (DBID == "") {
		//	    console.log("执行新增");
		//	    console.log("DBID:"+DBID);

		var tableTitle = "";
		var tableData = "";

		for (var key in obj) {
			switch (key) {
				case "DBID":
					break;
				case "DBTable":
					var DBTable = obj[key];
					break;
				default:
					tableTitle = tableTitle + key + ",";
					//增加为空判断,为空则替换为null 防止插入数据库格式类型不对错误
					if (obj[key] == "") {
						tableData = tableData + null + ",";
					} else {
						tableData = tableData + "'" + obj[key] + "',";
					}


			}

		}

		tableTitle = tableTitle.substr(0, tableTitle.length - 1);
		tableData = tableData.substr(0, tableData.length - 1);

		var SQLInsert = "insert into `" + DBTable + "` (" + tableTitle + ") values " + "(" + tableData + ")";

		//	console.log(SQLInsert)
		//		console.log("SQLInsert:"+SQLInsert);

		yjDBService.exec({
			sql: SQLInsert,
			parameters: [],
			success: function (result) {

				sender.success(result)
			},
			error: {},
		});


	} else {

		//	 console.log("执行更新");
		//	 console.log("DBID:"+DBID);

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

				//	    		tableTitle=tableTitle+key+",";
				//	    		tableData=tableData+obj[key]+",";
			}
		}

		updateContent = updateContent.substr(0, updateContent.length - 1);
		var SQLUpdate = " update " + DBTable + " set " + updateContent + " where DBID=" + DBID;

		yjDBService.exec({
			sql: SQLUpdate,
			parameters: [],
			success: sender.success,
			error: sender.error
		});

	}


};