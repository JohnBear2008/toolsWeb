module.exports = function (sender) {
	var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
	var yjDB = global.yjRequire("yujiang.Foil").yjDB;
	var Advstr = sender.req.query.Advstr;
	var Pattern = Advstr.Pattern;
	var EmpValue = Advstr.EmpValue;
	let PropList = [];
	var StaffID = '';
	var StaffUser = '';
	var StaffName = '';
	var Mobiles = '';
	if (EmpValue != "" && EmpValue != undefined) {
		PropList = EmpValue.split('##');
		StaffID = PropList[0];
		StaffUser = PropList[1];
		StaffName = PropList[2];
		Mobiles = PropList[3];
	}
	var StaffLevel = Advstr.StaffLevel;
	var DeptLabel = Advstr.PowerLabel;
	var GroupLabel = Advstr.RingLabel;
	var StaffRole = Advstr.StaffRole;
	var LastModify = Advstr.LastModify;
	var GroupSQL = '';
	var DeptSQL = '';
	var Arrange = sender.req.query.Arrange;
	console.log("霖霖是：", EmpValue, "喜");
	console.log("霖霖是：", StaffName, StaffID, StaffLevel, DeptLabel, StaffID, Mobiles, "悲");
	if (Pattern == 'Dept') {  //部門
		DeptSQL = " DeptLabel = '" + DeptLabel + "' ";
	}
	if (Pattern == 'Group') {  //组别
		GroupSQL = " GroupLabel = '" + GroupLabel + "' ";
	}
	if (Arrange == 'JobSet') {
		JobSet(StaffName);
	}
	if (Arrange == 'JobReach') {
		JobReach(StaffName, StaffLevel);
	}
	if (Arrange == 'JobReset') {
		JobReset(StaffName, StaffLevel);
	}
	if (Arrange == 'CreatePeople') {
		var Advstr = sender.req.query.Advstr;
		var LastModify = Advstr.LastModify;
		var StaffID = Advstr.StaffID;
		var StaffUser = Advstr.StaffUser;
		var StaffName = Advstr.StaffName;
		var Mobiles = Advstr.Mobiles;
		CreatePeople(LastModify ,StaffID, StaffUser, StaffName, Mobiles );
	}
	function CreatePeople(LastModify ,StaffID, StaffUser, StaffName, Mobiles ) {
		// console.log("只相信本能",LastModify ,StaffID, StaffUser, StaffName, Mobiles);
		let SQL = "Update `bgu_staffs` set  LastModify = ?  where  StaffID =? and StaffUser =? and StaffName =? and Mobiles =?  ";
		yjDBService.exec({
			sql: SQL,
			parameters: [LastModify ,StaffID, StaffUser, StaffName, Mobiles ],
			rowsAsArray: true,
			success: function (result) {
			},
			error: sender.error
		});
	}
	function JobReach(StaffName, StaffLevel) {
		if (StaffLevel != null || StaffLevel != undefined || StaffLevel != '') {

		} else {
			StaffLevel = '0';
		}

		var SQLqry = " select tba.DeptLabel , tba.GroupLabel from  bgu_staffs tba where StaffName = ? and StaffLevel =? ";
		yjDBService.exec({
			sql: SQLqry,
			parameters: [StaffName, StaffLevel],
			success: function (r) {
				var datas = []
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				for (var i = 0; i < data.length; i++) {
					var temp = {
						"DeptLabel": data[i].DeptLabel,
						"GroupLabel": data[i].GroupLabel,
					}

					datas.push(temp)
				}
				// var dump = JSON.stringify(datas);
				// if (dump.length > 100) {
				// 	console.log("孝恩:" + dump.substring(0, 100));
				// } else {
				// 	console.log("孝恩:" + JSON.stringify(datas));
				// }
				sender.success(datas);
			},
			error: {},
		});
	}
	function JobReset(StaffName, StaffLevel) {
		var SQLInsert = "";
		if (StaffLevel != null && StaffLevel != undefined) {
			if (StaffLevel == '1') {
				SQLInsert = "Update `bgu_staffs` set StaffLevel = '1', DeptLabel='', GroupLabel='', StaffRole = '文员' " +
					" where  StaffName=? ";
			} else {
				SQLInsert = "Delete from `bgu_staffs` where StaffName=? and  StaffLevel =? and  StaffLevel !='1' ";
			}
		} else {
			SQLInsert = "Update `bgu_staffs` set StaffLevel = '1', DeptLabel='', GroupLabel='', StaffRole = '文员' " +
				" where  StaffName=? ";
		}
		console.log("露:", SQLInsert, " 密 ", StaffLevel);
		let paramList = [StaffName, StaffLevel];
		yjDBService.exec({
			sql: SQLInsert,
			parameters: paramList,
			rowsAsArray: true,
			success: function (result) {
				console.log("露娜:", result);
				var retcode = { "status": "OK" };
				sender.success(retcode);
			},
			error: sender.error
		});
		// let SQLUPt = "Update `bgu_staffs` set StaffLevel = '', DeptLabel='', GroupLabel='', StaffRole = '' " +
		// " where  StaffName=? ";
		// console.log("改跑車 :" , SQLUPt,StaffName);
		// yjDBService.exec({
		// 	sql: SQLUPt,
		// 	parameters: [StaffName],
		// 	success: function (result) {
		// 		var retcode = { "status": "OK"  };
		// 		sender.success(retcode);
		// 		console.log("沃尔馬", retcode);
		// 	},
		// 	error: {},
		// });
	}
	function JobSet(StaffName) {
		var SQLInsert = "Delete from `bgu_staffs` where StaffName=? and  StaffRole =? ";
		let paramList = [StaffName, StaffRole];
		yjDBService.exec({
			sql: SQLInsert,
			parameters: paramList,
			rowsAsArray: true,
			success: function (result) {
				console.log("露娜:", result);
				JobSetPlug(StaffName);
			},
			error: sender.error
		});
	}
	function JobSetPlug(StaffName) {
		var SQLInsert = "INSERT INTO `bgu_staffs` " +
			"(`StaffID`, `StaffUser`, `StaffName`, `StaffLevel`, `DeptLabel`, `DeptDefault`, `GroupLabel`, `GroupDefault`, `StaffRole`, `Mobiles`, `Status`, `StatusText` , `LastModify`) " +
			"  VALUES (?,?,?,?,?,?,?,?,?,?,  ?,?,?  )";
		var Status = '';
		if (StaffRole == '文员') {
			Status = '0';
		} else {
			Status = '1';
		}
		var StatusText = '正常';
		console.log("露娜:", StaffID, StaffUser, StaffName, StaffLevel, DeptLabel, DeptLabel, GroupLabel, GroupLabel, StaffRole, Mobiles, Status, StatusText,LastModify);
		let paramList = [StaffID, StaffUser, StaffName, StaffLevel, DeptLabel, DeptLabel, GroupLabel, GroupLabel, StaffRole, Mobiles, Status, StatusText,LastModify];
		yjDBService.exec({
			sql: SQLInsert,
			parameters: paramList,
			rowsAsArray: true,
			success: function (result) {
				console.log("露娜:", result);
			},
			error: sender.error
		});
	}
}
	      // let SQLInsert = "Update `bgu_staffs` set StaffLevel = '" + StaffLevel + "', StaffRole = '" + StaffRole + "', "+ DeptSQL +" "+ GroupSQL +" " +
		// " where  StaffName=? ";
		// yjDBService.exec({
		// 	sql: SQLInsert,
		// 	parameters: [StaffName],
		// 	success: function (result) {
		// 		var retcode = { "status": "OK"  };
		// 		sender.success(retcode);
		// 		console.log("窝括台", retcode);
		// 	},
		// 	error: {},
		// });