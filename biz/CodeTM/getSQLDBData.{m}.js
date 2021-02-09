require("../../client/js/Date.js");
require("../../client/js/SQL.js");
require("../../client/js/SQLTMCode.js");


module.exports = function (sender) {
	var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
	var yjDB = global.yjRequire("yujiang.Foil").yjDB;

	//     console.log("get:"+JSON.stringify(sender.req.query));

	var SQL = sender.req.query.SQL;
	var DBTable = sender.req.query.DBTable;
	var DBID = sender.req.query.DBID;
	var filter = sender.req.query.filter;
	var orderBy = sender.req.query.orderBy;
	var limit = sender.req.query.limit;
	var capacity = sender.req.query.capacity;


	// console.log("SQL:" + SQL);

	var param1 = "";
	var param2 = "";
	var param3 = "";
	var param4 = "";



	//    console.log("orderBy:"+orderBy);
	//    console.log("DBID:"+DBID);
	//选择执行的SQL语句
	switch (SQL) {
		case "SQLExpEng":
			var SQLExecute = SQLExpEng;
			param1 = sender.req.query.pclass;
			break;
		case "SQLExpFilter":
			var SQLExecute = SQLExpFilter;
			param1 = sender.req.query.pyear;
			param2 = sender.req.query.pclass;
			break;
		case "SQLExpOLDFilter":
			var SQLExecute = SQLExpOLDFilter;
			param1 = sender.req.query.pyear;
			param2 = sender.req.query.pclass;
			break;
		case "SQLPartsExp":
			var SQLExecute = SQLPartsExp;
			param1 = sender.req.query.weekbeg;
			param2 = sender.req.query.weekend;
			param3 = sender.req.query.pyear;
			param4 = sender.req.query.pclass;
			break;
		case "SQLHistoryAbs":
			var SQLExecute = SQLHistoryAbs;
			param1 = sender.req.query.weekbeg;
			break;
		case "SQLAutoParts":
			var SQLExecute = SQLAutoParts;
			param1 = sender.req.query.weekbeg;
			break;
		case "SQLPartsAgree":
			var SQLExecute = SQLPartsAgree;
			param1 = sender.req.query.weekbeg;
			param2 = sender.req.query.weekend;
			break;
		case "SQLPartsAgreeAny":
			var SQLExecute = SQLPartsAgreeAny;
			param1 = sender.req.query.rule;
			break;
		case "SQLPartsAgreeSelf":
			var SQLExecute = SQLPartsAgreeSelf;
			param1 = sender.req.query.weekbeg;
			param2 = sender.req.query.weekend;
			break;
		case "SQLBillHistAny":
			var SQLExecute = SQLBillHistAny;
			param1 = sender.req.query.rule;
			break;
		case "SQLAbsoHistAny":
			var SQLExecute = SQLAbsoHistAny;
			param1 = sender.req.query.rule;
			console.log("SQLAbsoHistAny:" + param1  );
			break;
		case "SQLAbsoHistory":
			var SQLExecute = SQLAbsoHistory;
			param1 = sender.req.query.weekbeg;
			param2 = sender.req.query.weekend;
			param3 = sender.req.query.weekbeg;
			param4 = sender.req.query.weekend;
			console.log("SQLAbsoHistory:" + param1 + "param2:" + param2);
			break;
		case "SQLBillHistory":
			var SQLExecute = SQLBillHistory;
			param1 = sender.req.query.weekbeg;
			param2 = sender.req.query.weekend;
			param3 = sender.req.query.weekbeg;
			param4 = sender.req.query.weekend;
			console.log("SQLBillHistory:" + param1 + "param2:" + param2);
			break;
		case "SQLAbsoHistorySelf":
			var SQLExecute = SQLAbsoHistorySelf;
			param1 = sender.req.query.weekbeg;
			param2 = sender.req.query.weekend;
			param3 = sender.req.query.weekbeg;
			param4 = sender.req.query.weekend;
			console.log("SQLAbsoHistorySelf:" + param1 + "param2:" + param2);
			break;
		case "SQLBillHistorySelf":
			var SQLExecute = SQLBillHistorySelf;
			param1 = sender.req.query.weekbeg;
			param2 = sender.req.query.weekend;
			param3 = sender.req.query.weekbeg;
			param4 = sender.req.query.weekend;
			console.log("SQLBillHistorySelf:" + param1 + "param2:" + param2);
			break;
		case "SQLPartsAbsolete":
			var SQLExecute = SQLPartsAbsolete;
			param1 = sender.req.query.weekbeg;
			param2 = sender.req.query.weekend;
			// console.log("SQLPartsAbsolete:"+param1+"param2:"+param2);
			break;
		case "SQLPartsDateAbso":
			var SQLExecute = SQLPartsDateAbso;
			param1 = sender.req.query.weekbeg;
			param2 = sender.req.query.weekend;
			// console.log("SQLPartsAbsoDate:"+param1+"param2:"+param2);
			break;
		case "SQLPartsAbsoApply":
			var SQLExecute = SQLPartsAbsoApply;
			param1 = sender.req.query.weekbeg;
			param2 = sender.req.query.weekend;
			// console.log("SQLPartsAbsoApply:"+param1+"param2:"+param2);
			break;
		case "SQLAbsoAgree":
			var SQLExecute = SQLAbsoAgree;
			param1 = sender.req.query.weekbeg;
			param2 = sender.req.query.weekend;
			console.log("SQLAbsoAgree:" + param1 + "param2:" + param2);
			break;
		case "SQLAbsoDateAgree":
			var SQLExecute = SQLAbsoDateAgree;
			param1 = sender.req.query.weekbeg;
			param2 = sender.req.query.weekend;
			console.log("SQLAbsoDateAgree:" + param1 + "param2:" + param2);
			break;
		default:
			var SQLExecute = SQL;
			break;
	}

	if (DBID != "" && DBID != undefined) {
		SQLExecute = SQLExecute + " WHERE A.DBID=" + DBID;
	}

	if (filter != "" && filter != undefined) {
		SQLExecute = SQLExecute + " WHERE " + filter;
	}

	if (orderBy != "" && orderBy != undefined) {
		SQLExecute = SQLExecute + " ORDER BY " + orderBy;
	}

	if (limit != "" && limit != undefined) {
		SQLExecute = SQLExecute + " LIMIT " + limit;
	}

	if (capacity != "" && capacity != undefined) {
		SQLExecute = SQLExecute + capacity;
	}

	//     console.log("三顾毛:"+SQLExecute);

	//增加关键字防护,防止使用非法关键字操作数据库
	var banWord1 = new RegExp("delete");
	var banWord2 = new RegExp("update");
	var banWord3 = new RegExp("insert");
	var resultCheckSQL = banWord1.test(SQLExecute) || banWord2.test(SQLExecute) || banWord3.test(SQLExecute);


	if (resultCheckSQL) {
		//    	console.log("接受到含有非法关键字的SQL:"+SQL);
	} else {

		yjDBService.exec({
			sql: SQLExecute,
			parameters: [param1, param2, param3, param4],
			rowsAsArray: false,
			success: function (result) {
				//    	        	
				//    	        	result=NulltoEmpty(result);
				//     console.log("雪妹:"+JSON.stringify(result));
				sender.success(result);
			},
			error: sender.error
		});

	}






};