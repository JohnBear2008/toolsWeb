module.exports = function (sender) {
	var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
	var yjDB = global.yjRequire("yujiang.Foil").yjDB;
	var async = require("async");  
	var arrange = sender.req.query.arrange;
	if (arrange == 'seeCredit') {
		seeCredit();
	}
	if (arrange == 'seeQuota') {
		seeQuota();
	}
	function seeQuota() {
		var BudgetCID = sender.req.query.BudgetCID;
		var BudYear = sender.req.query.BudYear;
		var DeptName = sender.req.query.DeptName;
		var SQLqry = " select tba.*  from  bgu_quotadetail  tba " +
		" where BudgetCID =? AND DeptName =?  AND BudYear =?   ";
		console.log("你被捕了",SQLqry);
		console.log("你被捕了",BudgetCID, DeptName ,BudYear);
		yjDBService.exec({
			sql: SQLqry,
			parameters: [BudgetCID, DeptName, BudYear],
			success: function (r) {
				var datas = []
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				for (var i = 0; i < data.length; i++) {
					var DBID = data[i].DBID;
					var temp = {
						"DBID": DBID,
						"BudgetCID": data[i].BudgetCID,
						"BudgetItem": data[i].BudgetItem,
						"BudYear": data[i].BudYear,
						"RequestDate": data[i].RequestDate,
						"BillNo": data[i].BillNo,
						"SNNO": data[i].SNNO,
						"TotalValue": data[i].TotalValue,
						"DesCript": data[i].DesCript,
					}
					datas.push(temp)
				}
				var dump = JSON.stringify(datas);
				if (dump.length > 100) {
					console.log("奇迹:" + dump.substring(0, 100));
				} else {
					console.log("奇迹:" + JSON.stringify(datas));
				}
				sender.success(datas);
			},
			error: {},
		});
	}
	  
	function seeCredit() {
		var StaffId = sender.req.query.StaffId;
		var BudYear = sender.req.query.BudYear;
		var SQLqry = " select tba.*  from  bgu_creditdetail  tba " +
		" where StaffId =? AND BudYear =?  ";
		yjDBService.exec({
			sql: SQLqry,
			parameters: [StaffId, BudYear],
			success: function (r) {
				var datas = []
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				for (var i = 0; i < data.length; i++) {
					var DBID = data[i].DBID;
					var StaffName = data[i].StaffName;
					var BudYear = data[i].BudYear;
					var RequestDate = data[i].RequestDate;
					var BillNo = data[i].BillNo;
					var SNNO = data[i].SNNO;
					var TotalValue = data[i].TotalValue;
					var DesCript = data[i].DesCript;
					var temp = {
						"DBID": DBID,
						"StaffId": data[i].StaffId,
						"StaffName": data[i].StaffName,
						"BudYear": data[i].BudYear,
						"RequestDate": data[i].RequestDate,
						"BillNo": data[i].BillNo,
						"SNNO": data[i].SNNO,
						"TotalValue": data[i].TotalValue,
						"DesCript": data[i].DesCript,
					}
					datas.push(temp)
				}
				var dump = JSON.stringify(datas);
				if (dump.length > 100) {
					console.log("奇迹:" + dump.substring(0, 100));
				} else {
					console.log("奇迹:" + JSON.stringify(datas));
				}
				sender.success(datas);
			},
			error: {},
		});
	}
	 
};
 