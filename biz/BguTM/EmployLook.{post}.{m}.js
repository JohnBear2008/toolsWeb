module.exports = function (sender) {
	var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
	var yjDB = global.yjRequire("yujiang.Foil").yjDB;
	var async = require("async");
	var arrange = sender.req.query.arrange;
	if (arrange == 'MgrJob') {
		MgrJob();
	}
	if (arrange == 'ReadJob') {
		ReadJob();
	}
	function ReadJob() {
		let SQLMgr =
		" select  distinct tba.`StaffID`, tba.`StaffUser` , tba.`StaffName`, tba.`Mobiles`  " +
		" from bgu_staffs tba   " +
		" where   StaffRole ='文员' and (StaffID NOT LIKE '%-%') Order By tba.`StaffID`  ASC " ;
		// console.log("貂蝉",SQLMgr);
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
						"StaffID": data[i].StaffID,
						"StaffUser": data[i].StaffUser,
						"StaffName": data[i].StaffName,  
						"Mobiles": data[i].Mobiles,
					}
					datas.push(temp)
				}
				sender.success(datas);
			},
			error: sender.error
		});
	}
	function MgrJob() {
		let SQLMgr =
		// " select tba.`DBID`, tbu.`UserAID`, tba.`StaffID`, tba.`StaffUser`, tba.`StaffLevel` , " +
		// " tba.`StaffName`, tba.`StaffRole` , " +
		// " tba.`DeptLabel` , tba.`GroupLabel`, tbu.MobilePhone from bgu_staffs tba   " +
		// " LEFT JOIN users tbu on tba.StaffUser = tbu.UserAID  where tba.Status = '1' " +
		// " Order By tba.`StaffID`  ASC " ;
		" select  distinct tba.DBID ,tba.`StaffID`, tba.`StaffUser` , tba.`StaffName`, tba.`StaffLevel`, tba.`StaffRole` ,  " +
		" tba.`DeptLabel`, tba.`GroupLabel`, tba.`Mobiles` from bgu_staffs tba   " +
		" where   StatusText ='正常' Order By tba.`StaffID`  ASC " ;
		// console.log("白梅落下",SQLMgr);
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
						"StaffID": data[i].StaffID,
						"StaffUser": data[i].StaffUser,
						"StaffName": data[i].StaffName,
						"StaffLevel": data[i].StaffLevel,
						"StaffRole": data[i].StaffRole,
						"DeptLabel": data[i].DeptLabel,
						"GroupLabel": data[i].GroupLabel,
						"Mobiles": data[i].Mobiles,
					}
					datas.push(temp);
				}
				// var dump = JSON.stringify(datas);
				// if (dump.length > 100) {
				// 	console.log("姑瑛:" + dump.substring(0, 100));
				// } else {
				// 	console.log("姑瑛:" + JSON.stringify(datas));
				// }
				sender.success(datas);
			},
			error: sender.error
		});
	} 
};