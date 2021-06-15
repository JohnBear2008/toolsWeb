require("../../client/js/Date.js");
require("../../client/js/funs.js");
module.exports = function (sender) {
	var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
	var yjDB = global.yjRequire("yujiang.Foil").yjDB;
	var async = require("async");
	var Advstr = sender.req.query.Advstr;
	var arrange = sender.req.query.arrange;
	var BudYear = Advstr.BudYear;
	var BudMonth = Advstr.BudMonth;
	var Pattern = Advstr.Pattern;
	var Formkind = Advstr.Formkind;
	var DeptName = Advstr.DeptName;
	let now = new Date();
	var DeafYear = now.Format("yyyy");
	var DeafMonth = now.Format("MM");
	if (BudYear != "" && BudYear != "null" && BudYear != undefined && BudYear.length > 0) {

	} else {
		BudYear = DeafYear;
	}
	// if (BudMonth != "" && BudMonth != "null" && BudMonth != undefined && BudMonth.length > 0) {

	// } else {
	// 	BudMonth = DeafMonth;
	// }
	if (arrange == 'LookOrig') {
		LookOrig();
	}
	if (arrange == 'LookQuota') {
		LookQuota();
	}
	if (arrange == 'LookCredit') {
		LookCredit();
	}
	function LookQuota() {
		var filter = " 1=1 ";
		var orderBy = ' Subject  ';
		var limit = '5000';
		var capacity = '';
		var BudgetItem = '';
		var SQLExecute =
			// " select tba.`DBID` ,tba.BudgetCID,  tba.BudgetItem, tba.DeptName, " +
			// " tba.AllowMoney , tba.IsOver,  tba.BudYear , tdtl.TotalValue " +
			// " , tdtl.RequestDate , tba.Accumulate from bgu_quota tba " +
			// " LEFT JOIN bgu_quotadetail tdtl on tba.BudgetItem  = tdtl.BudgetItem " ;
			" select tba.`DBID` , tba.Subject ,tba.BudgetCID,  tba.BudgetItem, tba.DeptName, " +
			" tba.AllowMoney , tba.IsOver,  tba.BudYear  , tba.Accumulate , tba.Surplus from bgu_quota tba ";
		if (BudYear != "" && BudYear != "null" && BudYear != undefined && BudYear.length > 0) {
			capacity += " AND  tba.BudYear  = " + "'" + BudYear + "'  ";
		}
		if (BudgetItem != "" && BudgetItem != "null" && BudgetItem != undefined && BudgetItem.length > 0) {
			capacity += " AND tba.BudgetItem  = " + "'" + BudgetItem + "'   ";
		}
		if (DeptName != "" && DeptName != "null" && DeptName != undefined && DeptName.length > 0) {
			capacity += " AND tba.DeptName  = " + "'" + DeptName + "'   ";
		}
		if (filter != "" && filter != undefined) {
			SQLExecute = SQLExecute + " WHERE " + filter;
		}
		if (capacity != "" && capacity != undefined) {
			SQLExecute = SQLExecute + capacity;
		}
		if (orderBy != "" && orderBy != undefined) {
			SQLExecute = SQLExecute + " order By " + orderBy;
		}
		if (limit != "" && limit != undefined) {
			SQLExecute = SQLExecute + " LIMIT " + limit;
		}
		console.log("韩信", Formkind);
		console.log("韩信", SQLExecute);
		var banWord1 = new RegExp("delete");
		var banWord2 = new RegExp("update");
		var banWord3 = new RegExp("insert");
		var resultCheckSQL = banWord1.test(SQLExecute) || banWord2.test(SQLExecute) || banWord3.test(SQLExecute);
		var dataArr = [];
		var paramList = [];
		if (resultCheckSQL) {
			console.log("接受到含有非法关键字的SQL:" + SQLExecute);
		} else {
			yjDBService.exec({
				sql: SQLExecute,
				parameters: paramList,
				rowsAsArray: false,
				success: function (data) {
					for (var i = 0; i < data.length; i++) {
						var IsOverFix = data[i].IsOver;
						IsOverFix = (IsOverFix == 'Y' ? ('是') : ('否'));
						var obj = {
							"DBID": data[i].DBID,
							"Subject": data[i].Subject,
							"BudgetCID": data[i].BudgetCID,
							"BudgetItem": data[i].BudgetItem,
							"DeptName": data[i].DeptName,
							"BudYear": data[i].BudYear,
							"IsOver": (IsOverFix),
							"AllowMoney": data[i].AllowMoney,
							"Accumulate": data[i].Accumulate,
							"Surplus": data[i].Surplus,
						}
						dataArr.push(obj);
					}
					sender.success(dataArr);
				},
				error: sender.error
			});
		}
	}
	function LookCredit() {
		var filter = " 1=1 ";
		var orderBy = ' BudYear  ';
		var limit = '5000';
		var capacity = '';
		var SQLExecute =
			// " select tba.`DBID` ,tba.StaffId,  tba.StaffName, tba.DeptName,  tba.UpperLimit, tba.IsOver,  tba.BudYear ," +
			// " tba.Accumulate , tba.Surplus, tba.SNNO from  bgu_credit tba ";
		" select tba.`DBID` , tba.BffType , tba.BffName ,tba.BudYear ,tba.BudMonth ,tba.UpperLimit, tba.IsOver, tba.Accumulate , tba.Surplus, tba.SNNO  from  bgu_buffer tba ";
		if (BudYear != "" && BudYear != "null" && BudYear != undefined && BudYear.length > 0) {
			capacity += " AND tba.BudYear  = " + "'" + BudYear + "'  ";
		}
		if (BudMonth != "" && BudMonth != "null" && BudMonth != undefined && BudMonth.length > 0) {
			capacity += " AND tba.BudMonth  = " + "'" + BudMonth + "'  ";
		}
		// if (StaffName != "" && StaffName != "null" && StaffName != undefined && StaffName.length > 0) {
		// 	capacity += " AND tba.StaffName  = " + "'" + StaffName + "'   ";
		// }
		// if (DeptName != "" && DeptName != "null" && DeptName != undefined && DeptName.length > 0) {
		// 	capacity += " AND tba.DeptName  = " + "'" + DeptName + "'   ";
		// }
		if (filter != "" && filter != undefined) {
			SQLExecute = SQLExecute + " WHERE " + filter;
		}
		if (capacity != "" && capacity != undefined) {
			SQLExecute = SQLExecute + capacity;
		}
		if (orderBy != "" && orderBy != undefined) {
			SQLExecute = SQLExecute + " order By " + orderBy;
		}
		if (limit != "" && limit != undefined) {
			SQLExecute = SQLExecute + " LIMIT " + limit;
		}
		console.log("荆轲", Formkind);
		console.log("懿司", SQLExecute);
		var banWord1 = new RegExp("delete");
		var banWord2 = new RegExp("update");
		var banWord3 = new RegExp("insert");
		var resultCheckSQL = banWord1.test(SQLExecute) || banWord2.test(SQLExecute) || banWord3.test(SQLExecute);
		var dataArr = [];
		var paramList = [];
		if (resultCheckSQL) {
			console.log("接受到含有非法关键字的SQL:" + SQLExecute);
		} else {
			yjDBService.exec({
				sql: SQLExecute,
				parameters: paramList,
				rowsAsArray: false,
				success: function (data) {
					for (var i = 0; i < data.length; i++) {
						var IsOverFix = data[i].IsOver;
						IsOverFix = (IsOverFix == 'Y' ? ('是') : ('否'));
						var obj = {
							"DBID": data[i].DBID,
							"BffType": data[i].BffType,
							"BffName": data[i].BffName,
							"BudYear": data[i].BudYear,
							"BudMonth": data[i].BudMonth,
							"IsOver": (IsOverFix),
							"UpperLimit": data[i].UpperLimit,
							"Accumulate": data[i].Accumulate,
							"Surplus": data[i].Surplus,
							"SNNO": data[i].SNNO,
						}
						dataArr.push(obj);
						var dump = JSON.stringify(dataArr);
						if (dump.length > 100) {
							console.log("骨骼:" + dump.substring(0, 100));
						} else {
							console.log("骨骼:" + JSON.stringify(dataArr));
						}
					}
					sender.success(dataArr);
				},
				error: sender.error
			});
		}
	}
	
	function LookOrig() {
		var filter = " 1=1 ";
		var orderBy = '';
		var limit = '5000';
		var capacity = '';
		var SQLExecute =
			" select tba.`DBID` , tba.`DeptID` , tba.`DeptName` , tdtl.GroupName , tba.`Loacation` , tba.`Status` ,tba.`Descript` " +
			" from  bgu_orig tba  " +
			" LEFT JOIN bgu_orig_detail tdtl on tba.DeptID  = tdtl.DeptID  ";

		if (Pattern != "" && Pattern != "null" && Pattern != undefined && Pattern.length > 0) {
			capacity += " AND (trul.CurStatus  = " + "'" + Pattern + "' OR trul.SendStatus  = " + "'" + Pattern + "' )  ";
		}
		if (filter != "" && filter != undefined) {
			SQLExecute = SQLExecute + " WHERE " + filter;
		}
		if (capacity != "" && capacity != undefined) {
			SQLExecute = SQLExecute + capacity;
		}
		if (limit != "" && limit != undefined) {
			SQLExecute = SQLExecute + " LIMIT " + limit;
		}
		if (orderBy != "" && orderBy != undefined) {
			SQLExecute = SQLExecute + " Order By " + orderBy;
		}
		var banWord1 = new RegExp("delete");
		var banWord2 = new RegExp("update");
		var banWord3 = new RegExp("insert");
		var resultCheckSQL = banWord1.test(SQLExecute) || banWord2.test(SQLExecute) || banWord3.test(SQLExecute);
		var dataArr = [];
		var paramList = [];
		if (resultCheckSQL) {
			console.log("接受到含有非法关键字的SQL:" + SQLExecute);
		} else {
			yjDBService.exec({
				sql: SQLExecute,
				parameters: paramList,
				rowsAsArray: false,
				success: function (data) {
					for (var i = 0; i < data.length; i++) {
						var obj = {
							"DBID": data[i].DBID,
							"DeptID": data[i].DeptID,
							"DeptName": data[i].DeptName,
							"GroupName": data[i].GroupName,
							"Loacation": data[i].Loacation,
							"Descript": data[i].Descript,
						}
						dataArr.push(obj);
					}
					var dump = JSON.stringify(dataArr);
					if (dump.length > 100) {
						console.log("晴月:" + dump.substring(0, 100));
					} else {
						console.log("晴月:" + JSON.stringify(dataArr));
					}
					sender.success(dataArr);
				},
				error: sender.error
			});
		}
	}

};
