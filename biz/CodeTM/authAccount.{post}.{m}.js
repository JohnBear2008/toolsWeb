module.exports = function (sender) {
	var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
	var yjDB = global.yjRequire("yujiang.Foil").yjDB;

	var arrange = sender.req.query.arrange;
	var UserOID = sender.req.query.UserOID;
	var AuditOID = sender.req.query.AuditOID;
	var UserName = sender.req.query.UserName;
	var AuditName = sender.req.query.AuditName;

	if (arrange == 'PowerType') {
		CheckPower(UserOID);
	} else if (arrange == 'CivilOID') {
		CheckCivilOID(UserOID , AuditOID);
	} else if (arrange == 'CivilName') {
		CheckCivilName(UserName , AuditName );
	} else if (arrange == 'CivilNameOID') {
		CheckCivilNameOID(UserName , AuditName , AuditOID);
	}
	function CheckCivilOID(UserOID , AuditOID ) {
		let SQLStep1 = " select * from auto_civil where UserOID=? and IsBoss='0' and Dept IN (select Dept from auto_civil where UserOID= ? and IsBoss='1' )  " ;
		// console.log(" 梦瑶SQL: ",SQLStep1 ," CUser: ",UserName, " Audit: ", AuditName );          
		yjDBService.exec({
			sql: SQLStep1,
			parameters: [UserOID , AuditOID],
			rowsAsArray: false,
			success: function (result) {
				console.log("安倍",JSON.stringify(result)); 
				var obj = {};
				if (result.length > 0) {
					obj = {
						"UserName": result[0].UserName,
						"status": 'OK',
					};
				} else {
					obj = {
						"status": 'Fail',
					};
				}
				sender.success(obj);
			},
			error: sender.error
		});
	}
	function CheckCivilName(UserName , AuditName ) {
		let SQLStep1 = " select * from auto_civil where UserName=? and IsBoss='0' and Dept IN (select Dept from auto_civil where UserName= ? and IsBoss='1' ) UNION select * from auto_civil where UserName=? and IsBoss='1'  " ;
		console.log(" 梦瑶SQL: ",SQLStep1 ," CUser: ",UserName, " Audit: ", AuditName );          
		yjDBService.exec({
			sql: SQLStep1,
			parameters: [UserName , AuditName ,UserName],
			rowsAsArray: false,
			success: function (result) {
				console.log("安倍",JSON.stringify(result)); 
				var obj = {};
				if (result.length > 0) {
					obj = {
						"UserName": result[0].UserName,
						"status": 'OK',
					};
				} else {
					obj = {
						"status": 'Fail',
					};
				}
				sender.success(obj);
			},
			error: sender.error
		});
	}
	// function CheckAuditNameOID(UserName , AuditName , AuditOID) { //nouse
	// 	let SQLStep1 = "Select tbu.UserOID,tbu.UserName from autoauthority tbu where (tbu.UserName = ? AND tbu.AuditName = ?) "+
	// 	" UNION Select  tbu.UserOID ,tbs.Name as UserName from usersauthority tbu  LEFT JOIN users tbs ON tbu.UserOID=tbs.UserOID  "+
	// 	" where (ProcessOID = '16' OR ProcessOID = '14' ) AND tbu.UserOID = ? ";

	// 	// console.log(" 梦玲SQL: ",SQLStep1 ," CUser: ",UserName, " Audit: ", AuditName );          
	// 	yjDBService.exec({
	// 		sql: SQLStep1,
	// 		parameters: [UserName , AuditName, AuditOID],
	// 		rowsAsArray: false,
	// 		success: function (result) {
	// 			console.log("梦妤",JSON.stringify(result)); 
	// 			var obj = {};
	// 			if (result.length > 0) {
	// 				obj = {
	// 					"UserName": result[0].UserName,
	// 					"status": 'OK',
	// 				};
	// 			} else {
	// 				obj = {
	// 					"status": 'Fail',
	// 				};
	// 			}
	// 			sender.success(obj);
	// 		},
	// 		error: sender.error
	// 	});
	// }
	function CheckPower(UserOID) {
		let SQLStep1 = " Select tbu.*,tbr.RoleAID from usersauthority tbu LEFT JOIN roles tbr ON tbu.ProcessOID = tbr.RoleOID  where UserOID = ? ";
		//      console.log(" 凡迪SQL: ",SQLStep1 ," 动来 ",UserOID );          
		yjDBService.exec({
			sql: SQLStep1,
			parameters: [UserOID],
			rowsAsArray: false,
			success: function (result) {
				//    console.log("傻笔没",JSON.stringify(result)); 
				var obj = {};
				if (result.length > 0) {
					obj = {
						"RoleAID": result[0].RoleAID,
						"status": 'OK',
					};
				} else {
					obj = {
						"status": 'Fail',
					};
				}
				sender.success(obj);
			},
			error: sender.error
		});
	}
	//  
}   