require("../../client/js/Date.js");
require("../../client/js/funs.js");
module.exports = function (sender) {
	var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
	var yjDB = global.yjRequire("yujiang.Foil").yjDB;
	var queryBillNo = sender.req.query.BillNo;
	var queryApplicNo = sender.req.query.ApplicNo;
	var arrange = sender.req.query.arrange;
	var weekbeg = sender.req.query.weekbeg;
	var weekend = sender.req.query.weekend;
	var CurWorkId = sender.req.query.CurWorkId;
	var CurName = sender.req.query.CurName;

	if (arrange == 'Purch') {
		QueryPurch();
	} if (arrange == 'Trip') {
		QueryTrip();
	} else {
	}
	function QueryTrip() {
		var filter = " 1=1 ";
		var orderBy = '  tba.BillNo  desc';
		var limit = '5000';
		var capacity = '';
		let SQLExecute = "  SELECT tba.*, trul.CurWorkId, trul.CurName, trul.CurJob ,trul.VipName from  bgu_tripmain tba LEFT JOIN bgu_rule trul on tba.BillNo =trul.BillNo  " +
			" where trul.CurStatus ='P' and trul.SendStatus ='D' ";
		if (weekbeg != "" && weekbeg != "null" && weekbeg != undefined && weekbeg.length > 0) {
			capacity += " AND tba.EntryDate >= " + "'" + weekbeg + "' ";
		}
		if (weekend != "" && weekend != "null" && weekend != undefined && weekend.length > 0) {
			capacity += " AND tba.EntryDate <= " + "'" + weekend + "' ";
		}
		if (queryBillNo != "" && queryBillNo != "null" && queryBillNo != undefined && queryBillNo.length > 0) {
			capacity += " AND tba.BillNo  = " + "'" + queryBillNo + "' ";
		}
		if (CurName != "" && CurName != "null" && CurName != undefined && CurName.length > 0) {
			capacity += " AND  trul.CurName = " + "'" + CurName + "' ";
		}
		// if (filter != "" && filter != undefined) {
		//     SQLExecute = SQLExecute + " WHERE " + filter;
		// }
		if (capacity != "" && capacity != undefined) {
			SQLExecute = SQLExecute + capacity;
		}
		if (orderBy != "" && orderBy != undefined) {
			SQLExecute = SQLExecute + " ORDER BY " + orderBy;
		}
		// if (limit != "" && limit != undefined) {
		//     SQLExecute = SQLExecute + " LIMIT " + limit;
		// }
		//   console.log(" 吉木 :" , SQLExecute); 
		let paramelist = [CurName];
		let dataArr = [];
		yjDBService.exec({
			sql: SQLExecute,
			parameters: paramelist,
			rowsAsArray: true,
			success: function (result) {
				var data = yjDB.dataSet2ObjectList(result.meta, result.rows);
				for (var i = 0; i < data.length; i++) {
					var obj = {
						"BillNo": ((data[i].BillNo == null || data[i].BillNo == undefined) ? ('') : data[i].BillNo),
						"Subject": ((data[i].Subject == null || data[i].Subject == undefined) ? ('') : data[i].Subject),
						"ApplicNo": ((data[i].ApplicNo == null || data[i].ApplicNo == undefined) ? ('') : data[i].ApplicNo),
						"BusiMan": ((data[i].BusiMan == null || data[i].BusiMan == undefined) ? ('') : data[i].BusiMan),
						"BusiArea": ((data[i].BusiArea == null || data[i].BusiArea == undefined) ? ('') : data[i].BusiArea),
						"LeaveDate": ((data[i].LeaveDate == null || data[i].LeaveDate == undefined) ? ('') : data[i].LeaveDate),
						"BackDate": ((data[i].BackDate == null || data[i].BackDate == undefined) ? ('') : data[i].BackDate),
						"DeptName": ((data[i].DeptName == null || data[i].DeptName == undefined) ? ('') : data[i].DeptName),
						"UnitName": ((data[i].UnitName == null || data[i].UnitName == undefined) ? ('') : data[i].UnitName),
						"VipName": ((data[i].VipName == null || data[i].VipName == undefined) ? ('') : data[i].VipName),
						"StaffName": ((data[i].StaffName == null || data[i].StaffName == undefined) ? ('') : data[i].StaffName),
						"StaffID": ((data[i].StaffID == null || data[i].StaffID == undefined) ? ('') : data[i].StaffID),
						"IsOver": ((data[i].IsOver == null || data[i].IsOver == undefined) ? ('') : data[i].IsOver),
						"Overspend": ((data[i].Overspend == null || data[i].Overspend == undefined) ? ('') : data[i].Overspend),
						"EntryDate": ((data[i].EntryDate == null || data[i].EntryDate == undefined) ? ('') : data[i].EntryDate),
						"TotalValue": ((data[i].TotalValue == null || data[i].TotalValue == undefined) ? ('') : data[i].TotalValue),
						"Explanation": ((data[i].Explanation == null || data[i].Explanation == undefined) ? ('') : data[i].Explanation),
						"CurJob": ((data[i].CurJob == null || data[i].CurJob == undefined) ? ('') : data[i].CurJob),
						"CurPhone": ((data[i].CurWorkId == null || data[i].CurWorkId == undefined) ? ('') : data[i].CurWorkId),
						"CurName": ((data[i].CurName == null || data[i].CurName == undefined) ? ('') : data[i].CurName),
					};
					dataArr.push(obj);
				}
				sender.success(dataArr);
				// var dump = JSON.stringify(dataArr);
				// if (dump.length > 100) {
				// 	console.log("子弹:" + dump.substring(0, 100));
				// } else {
				// 	console.log("子弹:" + JSON.stringify(dataArr));
				// }
			},
			error: sender.error
		});
	}
	function QueryPurch() {
		var filter = " 1=1 ";
		var orderBy = '  tba.BillNo  desc';
		var limit = '5000';
		var capacity = '';
		let SQLExecute =
			" SELECT tba.*, trul.CurWorkId, trul.CurName , trul.CurJob , trul.VipName ,tdel.ItemNo ,tdel.BudgetItem from  bgu_purchmain tba " +
			" LEFT JOIN bgu_rule trul on tba.BillNo =trul.BillNo   " +
			" LEFT JOIN bgu_purchdetail tdel on tdel.BillNo  =tba.BillNo  and SNNo='1' " +
			" where trul.CurStatus ='P' and trul.SendStatus ='D' ";
		if (weekbeg != "" && weekbeg != "null" && weekbeg != undefined && weekbeg.length > 0) {
			// console.log("...开始日", weekbeg);
			capacity += " AND tba.EntryDate >= " + "'" + weekbeg + "' ";
		}
		if (weekend != "" && weekend != "null" && weekend != undefined && weekend.length > 0) {
			// console.log("...结束日", weekend);
			capacity += " AND tba.EntryDate <= " + "'" + weekend + "' ";
		}
		if (queryBillNo != "" && queryBillNo != "null" && queryBillNo != undefined && queryBillNo.length > 0) {
			// console.log("...文号 <", queryBillNo, ">");
			capacity += " AND tba.BillNo  = " + "'" + queryBillNo + "' ";
		}
		if (CurName != "" && CurName != "null" && CurName != undefined && CurName.length > 0) {
			// console.log("...查无此人", CurName);
			capacity += " AND  trul.CurName = " + "'" + CurName + "' ";
		}
		// if (filter != "" && filter != undefined) {
		//     SQLExecute = SQLExecute + " WHERE " + filter;
		// }
		if (capacity != "" && capacity != undefined) {
			SQLExecute = SQLExecute + capacity;
		}
		if (orderBy != "" && orderBy != undefined) {
			SQLExecute = SQLExecute + " ORDER BY " + orderBy;
		}
		//   console.log(" 胜利 :" , CurName); 
		//   console.log(" 模特 :" , SQLExecute); 
		let paramelist = [CurName];
		let dataArr = [];
		yjDBService.exec({
			sql: SQLExecute,
			parameters: paramelist,
			rowsAsArray: true,
			success: function (result) {
				var data = yjDB.dataSet2ObjectList(result.meta, result.rows);
				for (var i = 0; i < data.length; i++) {
					var obj = {
						"BillNo": ((data[i].BillNo == null || data[i].BillNo == undefined) ? ('') : data[i].BillNo),
						"Subject": ((data[i].Subject == null || data[i].Subject == undefined) ? ('') : data[i].Subject),
						"ListNo": ((data[i].ListNo == null || data[i].ListNo == undefined) ? ('') : data[i].ListNo),
						"ItemNo": ((data[i].ItemNo == null || data[i].ItemNo == undefined) ? ('') : data[i].ItemNo),
						"RequestDate": ((data[i].RequestDate == null || data[i].RequestDate == undefined) ? ('') : data[i].RequestDate),
						"ProjectNo": ((data[i].ProjectNo == null || data[i].ProjectNo == undefined) ? ('') : data[i].ProjectNo),
						"ApplicNo": ((data[i].ApplicNo == null || data[i].ApplicNo == undefined) ? ('') : data[i].ApplicNo),
						"VipName": ((data[i].VipName == null || data[i].VipName == undefined) ? ('') : data[i].VipName),
						"DeptName": ((data[i].DeptName == null || data[i].DeptName == undefined) ? ('') : data[i].DeptName),
						"UnitName": ((data[i].UnitName == null || data[i].UnitName == undefined) ? ('') : data[i].UnitName),
						"StaffID": ((data[i].StaffID == null || data[i].StaffID == undefined) ? ('') : data[i].StaffID),
						"StaffName": ((data[i].StaffName == null || data[i].StaffName == undefined) ? ('') : data[i].StaffName),
						"TotalValue": ((data[i].TotalValue == null || data[i].TotalValue == undefined) ? ('') : data[i].TotalValue),
						"Currency": ((data[i].Currency == null || data[i].Currency == undefined) ? ('') : data[i].Currency),
						"Payment": ((data[i].Payment == null || data[i].Payment == undefined) ? ('') : data[i].Payment),
						"Explanation": ((data[i].Explanation == null || data[i].Explanation == undefined) ? ('') : data[i].Explanation),
						"EntryDate": ((data[i].EntryDate == null || data[i].EntryDate == undefined) ? ('') : data[i].EntryDate),
						"IsBillUnder": ((data[i].IsBillUnder == null || data[i].IsBillUnder == undefined) ? ('') : data[i].IsBillUnder),
						"CurName": ((data[i].CurName == null || data[i].CurName == undefined) ? ('') : data[i].CurName),
						"CurJob": ((data[i].CurJob == null || data[i].CurJob == undefined) ? ('') : data[i].CurJob),
						"CurPhone": ((data[i].CurWorkId == null || data[i].CurWorkId == undefined) ? ('') : data[i].CurWorkId),
						"BudgetItem": ((data[i].BudgetItem == null || data[i].BudgetItem == undefined) ? ('') : data[i].BudgetItem),
					};
					dataArr.push(obj);
					// var dump = JSON.stringify(dataArr);
					// if (dump.length > 1000) {
					// 	console.log("瑜子:" + dump.substring(0, 1000));
					// } else {
					// 	console.log("瑜子:" + JSON.stringify(dataArr));
					// }
				}
				sender.success(dataArr);
			},
			error: sender.error
		});
	}
}    