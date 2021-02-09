module.exports = function (sender) {
	var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
	var yjDB = global.yjRequire("yujiang.Foil").yjDB;
	var async = require("async");
	var Category = sender.req.query.Category;
	var filter = sender.req.query.filter;
	var limit = sender.req.query.limit;
	var orderBy = sender.req.query.orderBy;
	var Property = sender.req.query.Property;
	console.log("欧之", filter);
	console.log("欧之", limit);
	console.log("欧之", orderBy);
	var paramList = []; 
 
	let PropList = [];
	if (Property != "" && Property != undefined) {
		PropList = Property.split('##');
		for (var ki = 0; ki < PropList.length; ki++) {
			// console.log("当头:" + (PropList[ki]));
		}
	}	 
	 
var SQLExecute =
 	"  select  `Parts_Code` , `MPSwift` , `ExpSN` , `ExpMark` , `ExpSrc` , `PropDesc` , `PartsSort` , `PropValue` , `ExpNoSrc`  from `auto_exp`       ";
      
	if (filter != "" && filter != undefined) {
		SQLExecute = SQLExecute + " WHERE " + filter;
	}
	// AddPropMater();
	if (orderBy != "" && orderBy != undefined) {
		SQLExecute = SQLExecute + " ORDER BY " + orderBy;
	}

	if (limit != "" && limit != undefined) {
		SQLExecute = SQLExecute + " LIMIT " + limit;
	}
 
	console.log("东游:" + SQLExecute);
	HandleRecord(SQLExecute);     

	function HandleRecord(SQLExecute) {

		var banWord1 = new RegExp("delete");
		var banWord2 = new RegExp("update");
		var banWord3 = new RegExp("insert");
		var resultCheckSQL = banWord1.test(SQLExecute) || banWord2.test(SQLExecute) || banWord3.test(SQLExecute);
		var dataArr = [];
		if (resultCheckSQL) {
			//console.log("接受到含有非法关键字的SQL:"+SQL);
		} else {
			// console.log("小栗", JSON.stringify(paramList ));
			yjDBService.exec({
				sql: SQLExecute,
				parameters:paramList,
 
				rowsAsArray: false,
				success: function (data) {
					// console.log("曜子", data.length);
					for (var i = 0; i < data.length; i++) {
						// `Parts_Code` , `MPSwift` , `ExpSN` , `ExpMark` , `ExpSrc` , `PropDesc` , `PartsSort` , `PropValue` , `ExpNoSr
						var obj = {
							"DBID": data[i].DBID,
							"Parts_Code":  data[i].Parts_Code,
							"MPSwift": data[i].MPSwift,
							"ExpSN": data[i].ExpSN,
							"ExpMark": data[i].ExpMark,
							"ExpSrc":  data[i].ExpSrc,
							"PropDesc": data[i].PropDesc,
							"PartsSort": data[i].PartsSort,
							"PropValue": data[i].PropValue,
							"ExpNoSr": data[i].ExpNoSr,
						}
						dataArr.push(obj);
					}
					sender.success(dataArr);
				},
				error: sender.error
			});
		}
	}
};
