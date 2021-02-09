module.exports = function (sender) {
	var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
	var yjDB = global.yjRequire("yujiang.Foil").yjDB;
	var async = require("async");
	var Category = sender.req.query.Category;
	var filter = sender.req.query.filter;
	var limit = sender.req.query.limit;
	var orderBy = sender.req.query.orderBy;
	var Property = sender.req.query.Property;
	var Deptunit = sender.req.query.Deptunit;
	var Produce = sender.req.query.Produce;
	console.log("贵妃躺", filter);
	console.log("贵妃躺", Deptunit);
	console.log("贵妃躺", Produce);
	var paramList = []; 
 
	 
      var SQLExecute =
 	"  select  `Parts_Code` ,`Parts_Year` ,`Parts_Rule` ,`Parts_Class` , `Reason` from auto_parts A "  ;
       
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
 
	// console.log("东游:" + SQLExecute);
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
						var UniqueCode = '';
						let burnList =[];
						burnList = data[i].Parts_Code.split('-');
						UniqueCode = burnList[0]+'-'+burnList[1];
						var UniqueRule = '';
						UniqueRule = data[i].Parts_Class + '-' + data[i].Parts_Rule;
						var obj = {
							"Deptunit": Deptunit,
							"Produce": Produce, 
							"UniqueCode":  UniqueCode,
							"Parts_Rule":  data[i].Parts_Rule,
							"UniqueRule":  UniqueRule,
							"E_value":  '0',
							"F_value":  '0',
							"Parts_Code":  data[i].Parts_Code,
							"Parts_Apply_Date": data[i].Parts_Apply_Date,
						}
						dataArr.push(obj);
					}
					sender.success(dataArr);
				},
				error: sender.error
			});
		}
	}
	function nulReplaceNum(passTxt) {
		var ret = '';
		ret = (passTxt == null || passTxt == undefined) ? ('NA') : passTxt;
		return ret;
	}
	function nulReplaceTxt(passTxt) {
		var ret = '';
		ret = (passTxt == null || passTxt == undefined) ? ('缺省') : passTxt;
		return ret;
	}

};
