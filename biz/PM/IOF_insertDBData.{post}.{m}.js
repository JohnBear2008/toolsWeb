module.exports = function(sender) {
	
	var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
	var yjDB = global.yjRequire("yujiang.Foil").yjDB;
	var obj = sender.req.query;
	console.log("obj:" + JSON.stringify(obj));

//	var tableTitle = "";
//	var tableData = "";
//	for ( var key in obj) {
//		if (key == "DBTable") {
//			var DBTable = obj[key];
//		} else {
//			tableTitle = tableTitle + key + ",";
//			//增加为空判断,为空则替换为null 防止插入数据库格式类型不对错误
//			if (obj[key] == "") {
//				tableData = tableData + null + ",";
//			} else {
//				tableData = tableData + "'" + obj[key] + "',";
//			}
//		}
//	}
	
	let tableName=obj.tableName;
	let tableTitles=obj.tableTitles;
	let tableDatas=obj.tableDatas;
	
//	console.log("tableDatas:"+tableDatas.length);
	
	if(tableTitles.length>0){
		
		var  tableTitlesSQL = "";
		for(let i=0;i<tableTitles.length;i++){
			tableTitlesSQL = tableTitlesSQL + tableTitles[i] + ",";
		}
		
		tableTitlesSQL = "("+tableTitlesSQL.substr(0, tableTitlesSQL.length - 1)+")";
		
	}
	
	
	
	if(tableDatas.length>0){
		
		
		
//		console.log("tableTitles:"+tableTitles);
		
		var insertDatasSQL = "";
		
		for(let i=0;i<tableDatas.length;i++){
			
//			console.log("tableDatas[i]:"+JSON.stringify(tableDatas[i]));
//			let tableDataRow=JSON.parse(tableDatas[i]);
//			console.log("tableDataRow:"+tableDataRow);
			
			var insertDataRow="";
			
			for(let j=0;j<tableDatas[i].length;j++){
				
//				console.log("tableDatas[i][key]:"+tableDatas[i][key]);

				if (tableDatas[i][j] == "") {
					insertDataRow = insertDataRow + null + ",";
				} else {
					insertDataRow = insertDataRow + "'" + tableDatas[i][j] + "',";
				}
				
//				console.log("insertDataRow:"+insertDataRow);
			}
			
			insertDataRow="("+insertDataRow.substring(0,insertDataRow.length-1)+")";
			
			insertDatasSQL=insertDatasSQL+insertDataRow+",";
			
		}
		
		insertDatasSQL = insertDatasSQL.substr(0, insertDatasSQL.length - 1);
//		console.log("insertDatasSQL"+insertDatasSQL);
	}

	var SQLInsert = "insert into `" + tableName + "` " + tableTitlesSQL
			+ " values " +insertDatasSQL;

	console.log("SQLInsert:" + SQLInsert);

	yjDBService.exec({
		sql : SQLInsert,
		parameters : [],
		success : function(result) {
			//   	console.log("result:"+JSON.stringify(result));

			sender.success(result)
		},
		error : {},
	});

};