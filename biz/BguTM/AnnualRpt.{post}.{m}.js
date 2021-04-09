require("../../client/js/Date.js");
require("../../client/js/funs.js");
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
		let now = new Date();
		var BudMonth = now.Format("MM");
		var BudYear = sender.req.query.BudYear;
		var DeptName = sender.req.query.DeptName;
		var SQLqry = " select tba.*  from  bgu_quotadetail  tba " +
			" where BudgetCID =? AND DeptName =?  AND BudYear =?   ";
		console.log("你被捕了", SQLqry);
		console.log("你被捕了", BudgetCID, DeptName, BudYear);
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
						"Subject": data[i].Subject,
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
					console.log("暴雪:" + dump.substring(0, 100));
				} else {
					console.log("暴雪:" + JSON.stringify(datas));
				}
				sender.success(datas);
			},
			error: {},
		});
	}

	function seeCredit() {
		// var StaffId = sender.req.query.StaffId;
		// let now = new Date();
		// var BudMonth = now.Format("MM");
		var BudYear = sender.req.query.BudYear;
		var BudMonth = sender.req.query.BudMonth;
		var SQLqry = " select tba.DBID, tba.BffType , tba.BffName ,tba.BudYear ,tba.BudMonth ,tba.RequestDate ," +
		" tba.BillNo ,tba.SNNO ,tba.TotalValue ,tba.DesCript from  bgu_bufdetail  tba " +
			" where BudYear =? AND BudMonth =?  ";
		yjDBService.exec({
			sql: SQLqry,
			parameters: [BudYear, BudMonth],
			success: function (r) {
				var datas = []
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				for (var i = 0; i < data.length; i++) {
					var DBID = data[i].DBID;
					var temp = {
						"DBID": DBID,
						"BffType": data[i].BffType,
						"BffName": data[i].BffName,
						"BudYear": data[i].BudYear,
						"BudMonth": data[i].BudMonth,
						"RequestDate": data[i].RequestDate,
						"BillNo": data[i].BillNo,
						"SNNO": data[i].SNNO,
						"TotalValue": data[i].TotalValue,
						"DesCript": data[i].DesCript,
					}
					datas.push(temp)
				}
				var dump = JSON.stringify(datas);
				if (dump.length > 1000) {
					console.log("发迹:" + dump.substring(0, 1000));
				} else {
					console.log("发迹:" + JSON.stringify(datas));
				}
				sender.success(datas);
			},
			error: {},
		});
	}

};
