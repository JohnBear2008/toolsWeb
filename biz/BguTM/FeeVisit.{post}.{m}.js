require("../../client/js/Date.js");
require("../../client/js/funs.js");
module.exports = function (sender) {
	//RemainVisit
	var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
	var yjDB = global.yjRequire("yujiang.Foil").yjDB;
	var async = require("async");
	var Pattern = sender.req.query.Pattern;
	var Advstr = sender.req.query.Advstr;
	var arrange = sender.req.query.arrange;
	var BudYear = Advstr.BudYear;
	var Pattern = Advstr.Pattern;
	let now = new Date();
	var DeafYear = now.Format("yyyy");
	if (BudYear != "" && BudYear != "null" && BudYear != undefined && BudYear.length > 0) {

	}else{
		BudYear = DeafYear;
	}
	console.log("明井:", Advstr);
	if (arrange == 'LookOrig') {
		LookOrig();
	}
	if (arrange == 'LookCredit') {
		LookCredit();
	}
	function LookCredit() {
		var filter = " 1=1 ";
		var orderBy = ' StaffName ,RequestDate ';
		var limit = '5000';
		var capacity = '';
		var StaffName = '';
		var SQLExecute =
			" select tba.`DBID` ,tba.StaffId,  tba.StaffName,  tba.UpperLimit, tdtl.BudgetYear , tdtl.UseAmount " +
			" , tdtl.RequestDate , tdtl.Accumulate  from  bgu_credit tba     " +
			" LEFT JOIN bgu_credit_detail tdtl on tba.StaffName  = tdtl.StaffName   ";
		if (BudYear != "" && BudYear != "null" && BudYear != undefined && BudYear.length > 0) {
			capacity += " AND tdtl.BudgetYear  = " + "'" + BudYear + "'  ";
		}
		if (StaffName != "" && StaffName != "null" && StaffName != undefined && StaffName.length > 0) {
			capacity += " AND tdtl.StaffName  = " + "'" + StaffName + "'   ";
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
		console.log("  佐藤由加里:" + SQLExecute);
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
							"StaffId": data[i].StaffId,
							"StaffName": data[i].StaffName,
							"BudgetYear": data[i].BudgetYear,
							"UpperLimit": data[i].UpperLimit,
							"UseAmount": data[i].UseAmount,
							"Accumulate": data[i].Accumulate,
							"RequestDate": data[i].RequestDate,
						}
						dataArr.push(obj);
					}
					var dump = JSON.stringify(dataArr);
					if (dump.length > 100) {
						console.log("明井:" + dump.substring(0, 100));
					} else {
						console.log("明井:" + JSON.stringify(dataArr));
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
			" LEFT JOIN bgu_orig_detail tdtl on tba.DeptID  = tdtl.DeptID ";

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
