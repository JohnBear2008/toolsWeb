module.exports = function (sender) {
	var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
	var yjDB = global.yjRequire("yujiang.Foil").yjDB;
	var async = require("async");
	var arrange = sender.req.query.arrange;
	if (arrange == 'MgrJob') {
		MgrJob();
	}
	function MgrJob() {
		let SQLMgr =
			" select `DBID`, `StaffUser`, `StaffLevel` , `StaffName`, `StaffRole` ,`DeptLabel` , `GroupLabel` from bgu_staffs tba where Status = '1'  Order By StaffLevel ASC ";
		yjDBService.exec({
			sql: SQLMgr,
			parameters: [ ],
			rowsAsArray: true,
			success: function (r) {
				var datas = [];
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				for (var i = 0; i < data.length; i++) {
					var temp = {
						"DBID": data[i].DBID,
						"PersonUser": data[i].StaffUser,
						"StaffLevel": data[i].StaffLevel,
						"PersonName": data[i].StaffName,
						"StaffRole": data[i].StaffRole,
						"DeptLabel": data[i].DeptLabel,
						"GroupLabel": data[i].GroupLabel,
					}
					datas.push(temp)
				}
				sender.success(datas);
			},
			error: sender.error
		});
	}
	// function MgrJob55(prodID, prodNM) {
	// 	var filter = "  1=1 ";
	// 	if (prodID != "" && prodID != "null" && prodID != undefined && prodID.length > 0) {
	// 		filter += "  AND   PersonId LIKE " + "'%" + prodID + "%'";
	// 	}
	// 	if (prodNM != "" && prodNM != "null" && prodNM != undefined && prodNM.length > 0) {
	// 		filter += "  AND   PersonName LIKE " + "'%" + prodNM + "%'";
	// 	}
	// 	var SQLqry = " select TOP 50 a.[PersonId] ,a.[GroupId], cgp.[PersonName]  from [comPerson] a " +
	// 		" LEFT JOIN [comGroupPerson] cgp on a.PersonId  = cgp.PersonId  where " + filter
	// 	console.log("品名", SQLqry);
	// 	var dataArr = [];
	// 	yjDBService_sqlserver.exec({
	// 		connectionOptions: connection,
	// 		sql: SQLqry,
	// 		parameters: [],
	// 		success: function (r) {
	// 			var datas = [];
	// 			var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
	// 			for (var i = 0; i < data.length; i++) {
	// 				var temp = {
	// 					"ProductID": data[i].PersonId,
	// 					"ProductName": data[i].PersonName,
	// 				}
	// 				datas.push(temp)
	// 			}
	// 			// console.log("維修是否:"+JSON.stringify(datas));
	// 			sender.success(datas);
	// 		},
	// 		error: {},
	// 	});
	// }

};