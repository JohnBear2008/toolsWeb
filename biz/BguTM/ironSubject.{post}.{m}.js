module.exports = function (sender) {
//ironSubject
	var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
	var yjDB = global.yjRequire("yujiang.Foil").yjDB;
	var async = require("async");  
	var arrange = sender.req.query.arrange;
	if (arrange == 'itemBasic') {
		HandleSupp();
	}
	if (arrange == 'HandleOrig') {
		HandleOrig();
	}
	if (arrange == 'findOrig') {
		findOrig();
	}
	if (arrange == 'findOrigDtl') {
		findOrigDtl();
	}
	if (arrange == 'findDept') {
		var loginName = sender.req.query.loginName;
		findDept();
	}
	function findDept() {
		var SQLqry = " select tba.`DeptLabel` , tba.`GroupLabel`, tba.`StaffRole`  from  bgu_staffs tba " +
		" where tba.StaffName = ? ";
		yjDBService.exec({
			sql: SQLqry,
			parameters: [loginName],
			success: function (r) {
				var datas = []
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				for (var i = 0; i < data.length; i++) {
					var flowDept = ''; 
					var flowGroup = '';
					var qryDept = data[i].DeptLabel;
					let DeptList = [];
					if (qryDept != "" && qryDept != undefined) {
					    DeptList = qryDept.split(',');
					    flowDept = DeptList[0];
					}
					qryGroup = data[i].GroupLabel;
					let GroupList = [];
					if (qryGroup != "" && qryGroup != undefined) {
					    GroupList = qryGroup.split(',');
					    flowGroup = GroupList[0];
					}
					var temp = {
						"DeptLabel": flowDept,
						"GroupLabel": flowGroup,
						"StaffRole": data[i].StaffRole,
					}
					datas.push(temp)
				}
				// var dump = JSON.stringify(datas);
				// if (dump.length > 100) {
				// 	console.log("姑瑛:" + dump.substring(0, 100));
				// } else {
				// 	console.log("姑瑛:" + JSON.stringify(datas));
				// }
				sender.success(datas);
			},
			error: {},
		});
	}
	function findOrigDtl() {
		var SQLqry = " select tba.`DeptID` , tba.`DeptName` , tdtl.GroupID , tdtl.GroupName  from  bgu_orig tba " +
		" LEFT JOIN bgu_orig_detail tdtl on tba.DeptName  = tdtl.DeptName ";
		yjDBService.exec({
			sql: SQLqry,
			parameters: [],
			success: function (r) {
				var datas = []
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				for (var i = 0; i < data.length; i++) {
					var temp = {
						"Record_CID": data[i].GroupID,
						"Record_Name": data[i].GroupName,
					}
					datas.push(temp)
				}
				// var dump = JSON.stringify(datas);
				// if (dump.length > 100) {
				// 	console.log("昭瑛:" + dump.substring(0, 100));
				// } else {
				// 	console.log("昭瑛:" + JSON.stringify(datas));
				// }
				sender.success(datas);
			},
			error: {},
		});
	}
	function findOrig() {
		var SQLqry = " select tba.`DeptID` , tba.`DeptName`  from  bgu_orig tba  ";
		var dataArr = [];
		yjDBService.exec({
			sql: SQLqry,
			parameters: [],
			success: function (r) {
				var datas = []
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				for (var i = 0; i < data.length; i++) {
					var temp = {
						"Record_CID": data[i].DeptID,
						"Record_Name": data[i].DeptName,
					}
					datas.push(temp)
				}
				// var dump = JSON.stringify(datas);
				// if (dump.length > 100) {
				// 	console.log("昭瑛:" + dump.substring(0, 100));
				// } else {
				// 	console.log("昭瑛:" + JSON.stringify(datas));
				// }
				sender.success(datas);
			},
			error: {},
		});
	}
	function HandleSupp() {
		var SQLqry = " select Subject , BudgetItem, BudgetCID from bgu_Subject  ";
		var dataArr = [];
		yjDBService.exec({
			sql: SQLqry,
			parameters: [],
			success: function (r) {
				var datas = []
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				for (var i = 0; i < data.length; i++) {
					var temp = {
						"Sub_CID": data[i].BudgetCID,
						"Sub_Prime": data[i].Subject,
						"Sub_Secon": data[i].BudgetItem,
					}
					datas.push(temp)
				}
				// var dump = JSON.stringify(datas);
				// if (dump.length > 100) {
				// 	console.log("昭瑛:" + dump.substring(0, 100));
				// } else {
				// 	console.log("昭瑛:" + JSON.stringify(datas));
				// }
				sender.success(datas);
			},
			error: {},
		});
	}
	function HandleOrig() {
		var SQLqry = " select DeptName, DeptID from bgu_orig  ";
		yjDBService.exec({
			sql: SQLqry,
			parameters: [],
			success: function (r) {
				var datas = []
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				for (var i = 0; i < data.length; i++) {
					var temp = {
						"Record_CID": data[i].DeptID,
						"Record_Name": data[i].DeptName, 
					}
					datas.push(temp)
				}
				// var dump = JSON.stringify(datas);
				// if (dump.length > 100) {
				// 	console.log("昭瑛:" + dump.substring(0, 100));
				// } else {
				// 	console.log("昭瑛:" + JSON.stringify(datas));
				// }
				sender.success(datas);
			},
			error: {},
		});
	}
};
 