module.exports = function (sender) {
	var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
	var yjDB = global.yjRequire("yujiang.Foil").yjDB;
	var Advstr = sender.req.query.Advstr;
	var Pattern = Advstr.Pattern;
	var EmpValue = Advstr.EmpValue;
	let PropList = [];
	var StaffID = '';
	var StaffID_Clone = '';
	var StaffUser = '';
	var StaffName = '';
	var DeptLabel = Advstr.PowerLabel;
	var GroupLabel = Advstr.RingLabel;
	var StaffRole = Advstr.StaffRole;
	var LastModify = Advstr.LastModify;
	var Mobiles = '';
	if (EmpValue != "" && EmpValue != undefined) {
		PropList = EmpValue.split('##');
		StaffID = PropList[0];
		StaffUser = PropList[1];
		StaffName = PropList[2];
		Mobiles = PropList[3];
	}
	var StaffLevel = Advstr.StaffLevel;
	var PurLabel = '0';
	if (StaffLevel != 1) {
		if (StaffLevel == 4) {
			if (StaffRole == "资讯承办人") {
				PurLabel = "1";
			} else if (StaffRole == "行政承办人") {
				PurLabel = "2";
			} else {
				PurLabel = "0";
			}
			StaffID_Clone = StaffID + StaffLevel + PurLabel ;
		}else{
			StaffID_Clone = StaffID + StaffLevel;
		}
	} else {
		StaffID_Clone = StaffID;
	}
	var GroupSQL = '';
	var DeptSQL = '';
	var Arrange = sender.req.query.Arrange;
	console.log("霖霖是：", EmpValue, "喜", StaffRole);
	console.log("霖霖是：", StaffName, StaffID, StaffLevel, DeptLabel, StaffID_Clone , Mobiles , "悲");
	if (Pattern == 'Dept') {  //部門
		DeptSQL = " DeptLabel = '" + DeptLabel + "' ";
	}
	if (Pattern == 'Group') {  //组别
		GroupSQL = " GroupLabel = '" + GroupLabel + "' ";
	}
	if (Arrange == 'JobSet') {
		if(StaffLevel == '1'){
			JobOppSet( DeptLabel, GroupLabel );
		}else{
			JobSet(StaffName);
		}
	}
	if (Arrange == 'JobReach') {
		if(StaffLevel == '1'){
			JobOppReach(StaffName, StaffLevel);
		}else{
			JobReach(StaffName, StaffLevel);
		}
		
	}
	if (Arrange == 'JobReset') {
		if(StaffLevel == '1'){
			JobOppReset(StaffName, StaffLevel);
		}else{
			JobReset(StaffName, StaffLevel);
		}
		
	}
	if (Arrange == 'CreatePeople') {
		var Advstr = sender.req.query.Advstr;
		var LastModify = Advstr.LastModify;
		var StaffID = Advstr.StaffID;
		var StaffUser = Advstr.StaffUser;
		var StaffName = Advstr.StaffName;
		var Mobiles = Advstr.Mobiles;
		CreatePeople(LastModify, StaffID, StaffUser, StaffName, Mobiles);
	}
	if (Arrange == 'UpdatePeople') {
		var Advstr = sender.req.query.Advstr;
		var LastModify = Advstr.LastModify;
		var StaffID = Advstr.StaffID;
		var StaffUser = Advstr.StaffUser;
		var StaffName = Advstr.StaffName;
		var Mobiles = Advstr.Mobiles;
		UpdatePeople(LastModify, StaffID, StaffUser, StaffName, Mobiles);
	}
	//nouse
	function CreatePeople(LastModify, StaffID, StaffUser, StaffName, Mobiles) {
		var SQLInsert = "INSERT INTO `bgu_staffs` " +
			"(`StaffID`, `StaffUser`, `StaffName`, `StaffLevel` , `StaffRole`, `Mobiles`, `Status`, `StatusText` , `LastModify`) " +
			"  VALUES (?,?,?,?,?,?,?,?,? )";

		var StaffLevel = '1';
		var Status = '0';
		var StaffRole = '文员';
		var StatusText = '正常';
		console.log("蔡文姬:", StaffID, StaffUser, StaffName, StaffLevel, StaffRole, Mobiles, Status, StatusText, LastModify);
		let paramList = [StaffID, StaffUser, StaffName, StaffLevel, StaffRole, Mobiles, Status, StatusText, LastModify];
		yjDBService.exec({
			sql: SQLInsert,
			parameters: paramList,
			rowsAsArray: true,
			success: function (result) {
				console.log("蔡文姬:", result);
				var retcode = { "status": "OK" };
				sender.success(retcode);
			},
			error: sender.error
		});
	}
	function UpdatePeople(LastModify, StaffID, StaffUser, StaffName, Mobiles) {
		console.log("只相信本能", LastModify, StaffID, StaffUser, StaffName, Mobiles);
		let SQL = "Update `bgu_staffs` set  LastModify = ?  where    StaffUser =? and StaffName =?    ";
		yjDBService.exec({
			sql: SQL,
			parameters: [LastModify, StaffUser, StaffName, Mobiles],
			rowsAsArray: true,
			success: function (result) {
			},
			error: sender.error
		});
	}
	function JobOppReach(StaffName, StaffLevel) {
		if (StaffLevel != null || StaffLevel != undefined || StaffLevel != '') {

		} else {
			StaffLevel = '0';
		}
		var SQLqry = " select distinct tba.DeptLabel , tba.GroupLabel from  bgu_staffs tba where StaffName = ? and StaffLevel =? ";
		yjDBService.exec({
			sql: SQLqry,
			parameters: [StaffName, StaffLevel],
			success: function (r) {
				var datas = []
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				var DeptStrCat = '';
				var GroupStrCat = '';
				for (var i = 0; i < data.length; i++) {
					if(i==0){
						DeptStrCat =  data[i].DeptLabel;
					      GroupStrCat =  data[i].GroupLabel;
					}else{
						DeptStrCat = DeptStrCat+','+data[i].DeptLabel;
						GroupStrCat = GroupStrCat+','+data[i].GroupLabel;
					}
				}
				var temp = {
					"DeptLabel": DeptStrCat,
					"GroupLabel": GroupStrCat,
				}

				datas.push(temp)
				var dump = JSON.stringify(datas);
				if (dump.length > 100) {
					console.log("孝恩:" + dump.substring(0, 100));
				} else {
					console.log("孝恩:" + JSON.stringify(datas));
				}
				sender.success(datas);
			},
			error: {},
		});
	}
	function JobReach(StaffName, StaffLevel) {
		if (StaffLevel != null || StaffLevel != undefined || StaffLevel != '') {

		} else {
			StaffLevel = '0';
		}
		var SQLqry = " select distinct tba.DeptLabel , tba.GroupLabel from  bgu_staffs tba where StaffName = ? and StaffLevel =? ";
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
	function JobOppReset(StaffName, StaffLevel) {
		var SQLDelete =  "Delete From `bgu_staffs` where StaffName=? and StaffLevel ='1' and  (StaffID LIKE '%-%') ";
		SQLInsert = "Update `bgu_staffs` set StaffLevel = '1', DeptLabel='', GroupLabel='', StaffRole = '文员' " +
		 " where  StaffName=? ";
		if (StaffLevel != null && StaffLevel != undefined) {
			 
		} else {
			SQLInsert = "Update `bgu_staffs` set StaffLevel = '1', DeptLabel='', GroupLabel='', StaffRole = '文员' " +
				" where  StaffName=? ";
		}
		console.log("露:", SQLInsert, " 密 ", StaffLevel);
		let paramList = [StaffName, StaffLevel];
		yjDBService.exec({
			sql: SQLDelete,
			parameters: paramList,
			rowsAsArray: true,
			success: function (result) {
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
			},
			error: sender.error
		});
	}
	function JobReset(StaffName, StaffLevel) {
		var SQLInsert = "";
		if (StaffLevel != null && StaffLevel != undefined) {
			SQLInsert = "Delete from `bgu_staffs` where StaffName=? and  StaffLevel =? and  StaffLevel !='1' ";
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
	}
	function JobOppSet(DeptLabel,GroupLabel) {
		var SQLInsert = "Delete from `bgu_staffs` where StaffID  like CONCAT('%', '" + StaffID_Clone + "', '%') and StaffLevel= '1'";
		// console.log("苦尽干来:", SQLInsert);
		let paramList = [ StaffID_Clone];
		yjDBService.exec({
			sql: SQLInsert,
			parameters: paramList,
			rowsAsArray: true,
			success: function (result) {
				JobOppSetPlug(DeptLabel,GroupLabel);
			},
			error: sender.error
		});
	}
	function JobOppSetPlug(DeptLabel,GroupLabel) {
		let SfOppID = [];
		var cnt =0 ;
		let GrupList = [];let DepList = [];
		if (GroupLabel != "" && GroupLabel != undefined) {
			GrupList = GroupLabel.split(',');
			for (var ki = 0; ki < GrupList.length; ki++) {
				if(ki>0){
					SfOppID[ki]= StaffID_Clone+'-'+ki;
				}else{
					SfOppID[ki]= StaffID_Clone;
				}
				
				let qryDept  = GrupList[ki]; 
				if (qryDept != "" && qryDept != undefined) {
					let BurnList = [];
					BurnList = qryDept.split('-');
					DepList[ki] = BurnList[0];
					console.log( "金刚", DepList[ki] , "酷斯拉", GrupList[ki] ,"生长： ",SfOppID[ki]);
				}
				
				cnt ++;
			}
		}
		for (var ki = 0; ki < cnt; ki++) {
			JobOppSetIns(SfOppID[ki],DepList[ki],GrupList[ki]);
		}
		var retcode = { "status": "OK" };
		sender.success(retcode);
	}
	function JobOppSetIns(SfOppIDTxt,DepListTxt,GrupListTxt) {
            var SQLInsert = "INSERT INTO `bgu_staffs` " +
			"(`StaffID`, `StaffUser`, `StaffName`, `StaffLevel`, `DeptLabel`, `DeptDefault`, `GroupLabel`, `GroupDefault`, `StaffRole`, `Mobiles`, `Status`, `StatusText` , `LastModify`) " +
			"  VALUES (?,?,?,?,?,?,?,?,?,?,  ?,?,?  )";
		var Status = '0';
		var StatusText = '正常';
		// console.log("李白:", SfOppIDTxt, StaffUser, StaffName, StaffLevel, DepListTxt, DepListTxt, GrupListTxt, GrupListTxt, StaffRole, Mobiles, Status, StatusText, LastModify);
		let paramList = [SfOppIDTxt, StaffUser, StaffName, StaffLevel, DepListTxt, DepListTxt, GrupListTxt, GrupListTxt, StaffRole, Mobiles, Status, StatusText, LastModify];
		yjDBService.exec({
			sql: SQLInsert,
			parameters: paramList,
			rowsAsArray: true,
			success: function (result) {
			},
			error: sender.error
		});

	}
	function JobSet(StaffName) {
		var SQLInsert = "Delete from `bgu_staffs` where StaffID =? ";
		let paramList = [ StaffID_Clone];
		yjDBService.exec({
			sql: SQLInsert,
			parameters: paramList,
			rowsAsArray: true,
			success: function (result) {
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
		console.log("露娜:", StaffID_Clone, StaffUser, StaffName, StaffLevel, DeptLabel, DeptLabel, GroupLabel, GroupLabel, StaffRole, Mobiles, Status, StatusText, LastModify);
		let paramList = [StaffID_Clone, StaffUser, StaffName, StaffLevel, DeptLabel, DeptLabel, GroupLabel, GroupLabel, StaffRole, Mobiles, Status, StatusText, LastModify];
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
	}
}
	       