require("../../client/js/Date.js");
require("../../client/js/funs.js");
module.exports = function (sender) {
	//RemainVisit
	var yjDBService_sqlserver = global.yjRequire("yujiang.Foil", "yjDBService.engine.sqlserver");
	var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
	var yjDB = global.yjRequire("yujiang.Foil").yjDB;
	var yjDBServiceUtil = global.yjRequire("yujiang.Foil", 'yjDBService.util.js');
	var async = require("async");
	// var connectionOptions=yjGlobal.config.db_Connection.erp_Connection.connection;
	var connectionOptions = yjGlobal.config.db_Connection.rich_T9.connection;
	var connection = null;
	if (connectionOptions) {
		connection = yjDBServiceUtil.extractConnectionOptions(connectionOptions);
	}
	// var Pattern = sender.req.query.Pattern;
	var Advstr = sender.req.query.Advstr;
	var weekbeg = Advstr.weekbeg;
	var weekend = Advstr.weekend;
	var queryBillNo = Advstr.BillNo;
	var queryApplicNo = Advstr.ApplicNo;
	var Pattern = Advstr.Pattern;
	var queryStaffName = Advstr.StaffName;
	var arrange = sender.req.query.arrange;
	var pick = sender.req.query.pick;
	// console.log("酒:", queryBillNo, "日:", queryApplicNo, "金:", Pattern);
	if (arrange == 'Fee') {
		if (pick == 'A') {
			HandleStockA();
		}
		if (pick == 'B') {
			HandleStockB();
		}
	}
	if (arrange == 'Exp') {
		if (pick == 'A') {
			HandleFundA();
		}
		if (pick == 'B') {
			HandleFundB();
		}
	}
	function HandleStockA() {
		var filter = " 1=1 ";
		var orderBy = '';
		var limit = '5000';
		var capacity = '';
		var SQLExecute =
			" SELECT  A.`DBID`, A.`BillNo`,  A.`ListNo`, A.`Formkind` ,A.`Subject` , A.`RequestDate`,  A.`ProjectNo`, A. `ApplicNo`,  " +
			" A.`DeptName`, A.`UnitName`, A.`StaffID`, A.`StaffName` ,trul.`MagName`  ,trul.`VipName`  , trul.`PurName`  ,trul.`PexName` ," +
			" trul.`CfoName`, A.`TotalValue`, A. `Currency`,  A.`Payment`, A. `Explanation`,   " +
			"  A.`EntryDate`, trul.`SendStatus` ,  trul.`CurLevel` ,  trul.`TermiLevel` ,  trul.`CurWorkId` ,  " +
			" trul.`CurName` ,  trul.`CurStatus`,  trul.`CurText` ,  trul.`SendText` ,tdtl.BudgetItem " +
			"  from  bgu_purchmain A LEFT JOIN bgu_rule trul on A.BillNo =trul.BillNo " +
			"  LEFT JOIN bgu_purchdetail tdtl on A.billNo =tdtl.billNo  AND tdtl.SNNo = '1'  ";
		if (weekbeg != "" && weekbeg != "null" && weekbeg != undefined && weekbeg.length > 0) {
			// console.log("...开始日", weekbeg);
			capacity += " AND A.EntryDate >= " + "'" + weekbeg + "' ";
		}
		if (weekend != "" && weekend != "null" && weekend != undefined && weekend.length > 0) {
			// console.log("...结束日", weekend);
			capacity += " AND A.EntryDate <= " + "'" + weekend + "' ";
		}
		if (queryBillNo != "" && queryBillNo != "null" && queryBillNo != undefined && queryBillNo.length > 0) {
			// console.log("...文号 <", queryBillNo, ">");
			capacity += " AND A.BillNo  = " + "'" + queryBillNo + "' ";
		}
		if (queryApplicNo != "" && queryApplicNo != "null" && queryApplicNo != undefined && queryApplicNo.length > 0) {
			// console.log("...申请号 <", queryApplicNo, ">");
			capacity += " AND A.ApplicNo  = " + "'" + queryApplicNo + "' ";
		}
		if (queryStaffName != "" && queryStaffName != "null" && queryStaffName != undefined && queryStaffName.length > 0) {
			// console.log("...本人 <", queryStaffName, ">");
			capacity += " AND ( ";
			capacity += " A.StaffName  = " + "'" + queryStaffName + "' OR trul.CurName  = " + "'" + queryStaffName + "'  ";
			capacity += "  OR  trul.OppName  = " + "'" + queryStaffName + "'  ";
			capacity += "  OR  trul.MagName  = " + "'" + queryStaffName + "'  ";
			capacity += "  OR  trul.VipName  = " + "'" + queryStaffName + "'  ";
			capacity += "  OR  trul.PurName  = " + "'" + queryStaffName + "'  ";
			capacity += "  OR  trul.PexName  = " + "'" + queryStaffName + "'  ";
			capacity += "  OR  trul.CfoName  = " + "'" + queryStaffName + "'  ";
			capacity += "  OR  trul.PsdName  = " + "'" + queryStaffName + "'  ";
			capacity += "  OR  trul.CeoName  = " + "'" + queryStaffName + "'  ";
			capacity += "  OR  trul.BodName  = " + "'" + queryStaffName + "'  ";
			capacity += " ) ";
		}
		if (Pattern != "" && Pattern != "null" && Pattern != undefined && Pattern.length > 0) {
			// console.log("...状态 <", Pattern, ">");
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
							"BillNo": data[i].BillNo,
							"Formkind": data[i].Formkind,
							"Subject": data[i].Subject,
							"BudgetItem": data[i].BudgetItem,
							"ListNo": data[i].ListNo,
							"ProjectNo": data[i].ProjectNo,
							"ApplicNo": data[i].ApplicNo,
							"DeptName": data[i].DeptName,
							"UnitName": data[i].UnitName,
							"StaffID": data[i].StaffID,
							"StaffName": data[i].StaffName,
							"MagName": data[i].MagName,
							"VipName": data[i].VipName,
							"PurName": data[i].PurName,
							"PexName": data[i].PexName,
							"CfoName": data[i].CfoName,
							"TotalValue": data[i].TotalValue,
							"Currency": data[i].Currency,
							"Payment": data[i].Payment,
							"EntryDate": data[i].EntryDate,
							"RequestDate": data[i].RequestDate,
							"CurName": data[i].CurName,
							"CurText": data[i].CurText,
							"SendText": data[i].SendText,
							"Explanation": (data[i].Explanation).length > 8 ? (data[i].Explanation.substring(0, 8)) : data[i].Explanation,
						}
						dataArr.push(obj);
					}
					var dump = JSON.stringify(dataArr);
					if (dump.length > 100) {
						console.log("采购单:" + dump.substring(0, 100));
					} else {
						console.log("采购单:" + JSON.stringify(dataArr));
					}
					sender.success(dataArr);
				},
				error: sender.error
			});
		}
	}
	function HandleStockB() {
		var filter = " 1=1 ";
		var orderBy = '';
		var limit = '5000';
		var capacity = '';
		var SQLExecute =
			" SELECT  A.`DBID`, A.`BillNo`, A.`ApplicNo`, A.Formkind ,A.`Subject` , A.`BusiMan`, A.`BusiArea`, A.`LeaveDate`, "+
			" A.`StaffID`, A.`StaffName`, trul.`MagName`  ,trul.`VipName` ,trul.`PurName`  ,trul.`PexName`,trul.`CfoName` ,  "+
			" A.`DeptName`,  A.`UnitName`,  A.`IsOver`, A. `Overspend`,   " +
			" A.`EntryDate`, A.`Explanation`, trul.`SendStatus` ,  trul.`CurLevel` ,  trul.`TermiLevel` ,  trul.`CurWorkId` ,  " +
			" trul.`CurName` ,  trul.`CurStatus`,  trul.`CurText` ,  trul.`SendText` ,tdtl.TicTotal " +
			"  from  bgu_tripmain A LEFT JOIN bgu_rule trul on A.BillNo =trul.BillNo " +
			"  LEFT JOIN bgu_tripdetail tdtl on A.billNo =tdtl.billNo  AND tdtl.SNNo = '1'  ";
		if (weekbeg != "" && weekbeg != "null" && weekbeg != undefined && weekbeg.length > 0) {
			// console.log("...开始日", weekbeg);
			capacity += " AND A.EntryDate >= " + "'" + weekbeg + "' ";
		}
		if (weekend != "" && weekend != "null" && weekend != undefined && weekend.length > 0) {
			// console.log("...结束日", weekend);
			capacity += " AND A.EntryDate <= " + "'" + weekend + "' ";
		}
		if (queryBillNo != "" && queryBillNo != "null" && queryBillNo != undefined && queryBillNo.length > 0) {
			// console.log("...文号 <", queryBillNo, ">");
			capacity += " AND A.BillNo  = " + "'" + queryBillNo + "' ";
		}
		if (queryApplicNo != "" && queryApplicNo != "null" && queryApplicNo != undefined && queryApplicNo.length > 0) {
			// console.log("...申请号 <", queryApplicNo, ">");
			capacity += " AND A.ApplicNo  = " + "'" + queryApplicNo + "' ";
		}
		if (queryStaffName != "" && queryStaffName != "null" && queryStaffName != undefined && queryStaffName.length > 0) {
			capacity += " AND (A.StaffName  = " + "'" + queryStaffName + "' OR trul.CurName  = " + "'" + queryStaffName + "' ) ";
		}
		if (Pattern != "" && Pattern != "null" && Pattern != undefined && Pattern.length > 0) {
			// console.log("...状态 <", Pattern, ">");
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
					console.log("曜子", data.length);
					for (var i = 0; i < data.length; i++) {
						var obj = {
							"DBID": data[i].DBID,
							"BillNo": data[i].BillNo,
							"Formkind": data[i].Formkind,
							"Subject": data[i].Subject,
							"ApplicNo": data[i].ApplicNo,
							"BusiMan": data[i].BusiMan,
							"BusiArea": data[i].BusiArea,
							"LeaveDate": data[i].LeaveDate,
							"StaffID": data[i].StaffID,
							"StaffName": data[i].StaffName,
							"MagName": data[i].MagName,
							"VipName": data[i].VipName,
							"PurName": data[i].PurName,
							"PexName": data[i].PexName,
							"CfoName": data[i].CfoName,
							"DeptName": data[i].DeptName,
							"UnitName": data[i].UnitName,
							"IsOver": data[i].IsOver,
							"Overspend": data[i].Overspend,
							"CurName": data[i].CurName,
							"CurText": data[i].CurText,
							"SendText": data[i].SendText,
							"EntryDate": data[i].EntryDate,
							"Explanation": (data[i].Explanation).length > 8 ? (data[i].Explanation.substring(0, 8)) : data[i].Explanation,
						}
						dataArr.push(obj);
					}
					// var dump = JSON.stringify(dataArr);
					// if (dump.length > 100) {
					// 	console.log("出差单:" + dump.substring(0, 100));
					// } else {
					// 	console.log("出差单:" + JSON.stringify(dataArr));
					// }
					sender.success(dataArr);
				},
				error: sender.error
			});
		}
	}
	function HandleFundA() {
		var filter = " 1=1 ";
		var orderBy = '';
		var limit = '5000';
		var capacity = '';
		var SQLExecute =
			" SELECT  A.`DBID`, A.`BillNo`,  A.`ListNo`, A.`Formkind` ,A.`Subject` , A.`RequestDate`,  A.`ProjectNo`, A. `ApplicNo`,  " +
			" A.`DeptName`, A.`StaffID`, A.`StaffName` ,trul.`MagName`  ,trul.`VipName`  , trul.`PurName`  ,trul.`PexName` ," +
			" trul.`CfoName`, A.`TotalValue`,A. `RealValue`, A. `Currency`,  A.`Payment`, A. `Explanation`,   " +
			"  A.`EntryDate`, trul.`SendStatus` ,  trul.`CurLevel` ,  trul.`TermiLevel` ,  trul.`CurWorkId` ,  " +
			" trul.`CurName` ,  trul.`CurStatus`,  trul.`CurText` ,  trul.`SendText` ,tdtl.BudgetItem " +
			"  from  bgu_expmain A LEFT JOIN bgu_rule trul on A.BillNo =trul.BillNo " +
			"  LEFT JOIN bgu_expdetail tdtl on A.billNo =tdtl.billNo  AND tdtl.SNNo = '1'  ";
		if (weekbeg != "" && weekbeg != "null" && weekbeg != undefined && weekbeg.length > 0) {
			// console.log("...开始日", weekbeg);
			capacity += " AND A.EntryDate >= " + "'" + weekbeg + "' ";
		}
		if (weekend != "" && weekend != "null" && weekend != undefined && weekend.length > 0) {
			// console.log("...结束日", weekend);
			capacity += " AND A.EntryDate <= " + "'" + weekend + "' ";
		}
		if (queryBillNo != "" && queryBillNo != "null" && queryBillNo != undefined && queryBillNo.length > 0) {
			// console.log("...文号 <", queryBillNo, ">");
			capacity += " AND A.BillNo  = " + "'" + queryBillNo + "' ";
		}
		if (queryApplicNo != "" && queryApplicNo != "null" && queryApplicNo != undefined && queryApplicNo.length > 0) {
			// console.log("...申请号 <", queryApplicNo, ">");
			capacity += " AND A.ApplicNo  = " + "'" + queryApplicNo + "' ";
		}
		if (queryStaffName != "" && queryStaffName != "null" && queryStaffName != undefined && queryStaffName.length > 0) {
			// console.log("...本人 <", queryStaffName, ">");
			capacity += " AND (A.StaffName  = " + "'" + queryStaffName + "' OR trul.CurName  = " + "'" + queryStaffName + "' ) ";
		}
		if (Pattern != "" && Pattern != "null" && Pattern != undefined && Pattern.length > 0) {
			// console.log("...状态 <", Pattern, ">");
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
							"BillNo": data[i].BillNo,
							"Formkind": data[i].Formkind,
							"Subject": data[i].Subject,
							"BudgetItem": data[i].BudgetItem,
							"ListNo": data[i].ListNo,
							"ProjectNo": data[i].ProjectNo,
							"ApplicNo": data[i].ApplicNo,
							"DeptName": data[i].DeptName,
							"StaffID": data[i].StaffID,
							"StaffName": data[i].StaffName,
							"MagName": data[i].MagName,
							"VipName": data[i].VipName,
							"PurName": data[i].PurName,
							"PexName": data[i].PexName,
							"CfoName": data[i].CfoName,
							"TotalValue": data[i].TotalValue,
							"RealValue": data[i].RealValue,
							"Currency": data[i].Currency,
							"Payment": data[i].Payment,
							"EntryDate": data[i].EntryDate,
							"RequestDate": data[i].RequestDate,
							"CurName": data[i].CurName,
							"CurText": data[i].CurText,
							"SendText": data[i].SendText,
							"Explanation": (data[i].Explanation).length > 8 ? (data[i].Explanation.substring(0, 8)) : data[i].Explanation,
						}
						dataArr.push(obj);
					}
					var dump = JSON.stringify(dataArr);
					if (dump.length > 100) {
						console.log("采购单:" + dump.substring(0, 100));
					} else {
						console.log("采购单:" + JSON.stringify(dataArr));
					}
					sender.success(dataArr);
				},
				error: sender.error
			});
		}
	}
	function HandleFundB() {
		var filter = " 1=1 ";
		var orderBy = '';
		var limit = '5000';
		var capacity = '';
		var SQLExecute =
			" SELECT  A.`DBID`, A.`BillNo`, A.`ApplicNo`, A.Formkind ,A.`Subject` , A.`BusiMan`, A.`BusiArea`, A.`LeaveDate`, "+
			" A.`StaffID`, A.`StaffName`, trul.`MagName`  ,trul.`VipName` ,trul.`PurName`  ,trul.`PexName`,trul.`CfoName` ,  A.`DeptName`,  " +
			" A.`IsOver`, A. `RealValue` ,A. `Overspend`,   " +
			" A.`EntryDate`, A.`Explanation`, trul.`SendStatus` ,  trul.`CurLevel` ,  trul.`TermiLevel` ,  trul.`CurWorkId` ,  " +
			" trul.`CurName` ,  trul.`CurStatus`,  trul.`CurText` ,  trul.`SendText` ,tdtl.TicTotal " +
			"  from  bgu_tripmain A LEFT JOIN bgu_rule trul on A.BillNo =trul.BillNo " +
			"  LEFT JOIN bgu_tripdetail tdtl on A.billNo =tdtl.billNo  AND tdtl.SNNo = '1'  ";
		if (weekbeg != "" && weekbeg != "null" && weekbeg != undefined && weekbeg.length > 0) {
			// console.log("...开始日", weekbeg);
			capacity += " AND A.EntryDate >= " + "'" + weekbeg + "' ";
		}
		if (weekend != "" && weekend != "null" && weekend != undefined && weekend.length > 0) {
			// console.log("...结束日", weekend);
			capacity += " AND A.EntryDate <= " + "'" + weekend + "' ";
		}
		if (queryBillNo != "" && queryBillNo != "null" && queryBillNo != undefined && queryBillNo.length > 0) {
			// console.log("...文号 <", queryBillNo, ">");
			capacity += " AND A.BillNo  = " + "'" + queryBillNo + "' ";
		}
		if (queryApplicNo != "" && queryApplicNo != "null" && queryApplicNo != undefined && queryApplicNo.length > 0) {
			// console.log("...申请号 <", queryApplicNo, ">");
			capacity += " AND A.ApplicNo  = " + "'" + queryApplicNo + "' ";
		}
		if (queryStaffName != "" && queryStaffName != "null" && queryStaffName != undefined && queryStaffName.length > 0) {
			capacity += " AND (A.StaffName  = " + "'" + queryStaffName + "' OR trul.CurName  = " + "'" + queryStaffName + "' ) ";
		}
		if (Pattern != "" && Pattern != "null" && Pattern != undefined && Pattern.length > 0) {
			// console.log("...状态 <", Pattern, ">");
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
					console.log("曜子", data.length);
					for (var i = 0; i < data.length; i++) {
						var obj = {
							"DBID": data[i].DBID,
							"BillNo": data[i].BillNo,
							"Formkind": data[i].Formkind,
							"Subject": data[i].Subject,
							"ApplicNo": data[i].ApplicNo,
							"BusiMan": data[i].BusiMan,
							"BusiArea": data[i].BusiArea,
							"LeaveDate": data[i].LeaveDate,
							"StaffID": data[i].StaffID,
							"StaffName": data[i].StaffName,
							"MagName": data[i].MagName,
							"VipName": data[i].VipName,
							"PurName": data[i].PurName,
							"PexName": data[i].PexName,
							"CfoName": data[i].CfoName,
							"DeptName": data[i].DeptName,
							"IsOver": data[i].IsOver,
							"RealValue": data[i].RealValue,
							"Overspend": data[i].Overspend,
							"CurName": data[i].CurName,
							"CurText": data[i].CurText,
							"SendText": data[i].SendText,
							"EntryDate": data[i].EntryDate,
							"Explanation": (data[i].Explanation).length > 8 ? (data[i].Explanation.substring(0, 8)) : data[i].Explanation,
						}
						dataArr.push(obj);
					}
					// var dump = JSON.stringify(dataArr);
					// if (dump.length > 100) {
					// 	console.log("出差单:" + dump.substring(0, 100));
					// } else {
					// 	console.log("出差单:" + JSON.stringify(dataArr));
					// }
					sender.success(dataArr);
				},
				error: sender.error
			});
		}
	}
};
