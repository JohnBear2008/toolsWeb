module.exports = function (sender) {
	var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
	var yjDB = global.yjRequire("yujiang.Foil").yjDB;
	var PartsStatus = sender.req.query.PartsStatus;
	var SupplyID = sender.req.query.SupplyID;
	var PartsrowCode = sender.req.query.PartsCode;
	var PartsYear = sender.req.query.PartsYear;
	var PartsYearBF = "A";
	var PartsRule = sender.req.query.PartsRule;
	var PartsClass = sender.req.query.PartsClass;
	var PartsName = sender.req.query.PartsName;
	var BILLID = sender.req.query.BILLID;
	if (PartsYear == "2019") {
		PartsYearBF = "A";
	} else if (PartsYear == "2020") {
		PartsYearBF = "B";
	} else {
		PartsYearBF = "C";
	}
	console.log('龙  ' + PartsName);

	if (PartsStatus == "3") {
		var retcode = { "status": "chkOK", "billid": BILLID };
		sender.success(retcode);
	} else {
		CheckProp(PartsClass, BILLID);
	}

	function CheckProp(sClass, sBILLID) {
		let SQLStep1 = " select Parts_Name, Parts_Chi, Parts_Class ,`Parts_Prop1`,  `Parts_Prop2`, `Parts_Prop3`, `Parts_Prop4`, `Parts_Prop5`,`Parts_Prop6`, `Parts_Prop7`, `Parts_Prop8`, `Parts_Prop9`, `Parts_Prop10`,  " +
			" `Parts_Prop11`, `Parts_Prop12`, `Parts_Prop13`, `Parts_Prop14`, `Parts_Prop15`, `Parts_Prop16`, `Parts_Prop17`, `Parts_Prop18`, `Parts_Prop19`, `Parts_Prop20`,   " +
			" `SMT_ID`, `Supply_ID` , `Soft_No` from `auto_rec_parts`  where  BILL_ID=? ";
		console.log("古惑 :", sClass, sBILLID);

		let SQLStep2 = " select Parts_Name, Parts_Chi, `Parts_Prop1`,  `Parts_Prop2`, `Parts_Prop3`, `Parts_Prop4`, `Parts_Prop5`,`Parts_Prop6`, `Parts_Prop7`, `Parts_Prop8`, `Parts_Prop9`, `Parts_Prop10`,  " +
			" `Parts_Prop11`, `Parts_Prop12`, `Parts_Prop13`, `Parts_Prop14`, `Parts_Prop15`, `Parts_Prop16`, `Parts_Prop17`, `Parts_Prop18`, `Parts_Prop19`, `Parts_Prop20` , `SMT_ID`   " +
			" from `auto_parts`  where  Parts_Class=?  and Parts_Prop1=? and Parts_Prop2=? and Parts_Prop3=? and Parts_Prop4=? and Parts_Prop5=? and Parts_Prop6=? and Parts_Prop7=? and Parts_Prop8=? and Parts_Prop9=? and Parts_Prop10=? " +
			" and Parts_Prop11=? and Parts_Prop12=? and Parts_Prop13=? and Parts_Prop14=? and Parts_Prop15=? and Parts_Prop16=? and Parts_Prop17=? and Parts_Prop18=? and Parts_Prop19=? and Parts_Prop20=?  and Supply_ID = ? ";
		let SQL_R2 = " select Parts_Name, Parts_Chi, `Parts_Prop1`,  `Parts_Prop2`, `Parts_Prop3`, `Parts_Prop4`, `Parts_Prop5`,`Parts_Prop6`, `Parts_Prop7`, `Parts_Prop8`, `Parts_Prop9`, `Parts_Prop10`,  " +
			" `Parts_Prop11`, `Parts_Prop12`, `Parts_Prop13`, `Parts_Prop14`, `Parts_Prop15`, `Parts_Prop16`, `Parts_Prop17`, `Parts_Prop18`, `Parts_Prop19`, `Parts_Prop20` , `SMT_ID`   " +
			" from `auto_parts`  where  Parts_Class=?  and Parts_Prop1=? and Parts_Prop2=? and Parts_Prop3=? and Parts_Prop4=? and Parts_Prop5=? and Parts_Prop6=? and Parts_Prop7=? and Parts_Prop8=? and Parts_Prop9=? and Parts_Prop10=? " +
			" and Parts_Prop11=? and Parts_Prop12=? and Parts_Prop13=? and Parts_Prop14=? and Parts_Prop15=? and Parts_Prop16=? and Parts_Prop17=? and Parts_Prop18=? and Parts_Prop19=? and Parts_Prop20=?  and Soft_No = ? ";

		var Parts_Prop1 = '';
		var Parts_Prop2 = '';
		var Parts_Prop3 = '';
		var Parts_Prop4 = '';
		var Parts_Prop5 = '';
		var Parts_Prop6 = '';
		var Parts_Prop7 = '';
		var Parts_Prop8 = '';
		var Parts_Prop9 = '';
		var Parts_Prop10 = '';
		var Parts_Prop11 = '';
		var Parts_Prop12 = '';
		var Parts_Prop13 = '';
		var Parts_Prop14 = '';
		var Parts_Prop15 = '';
		var Parts_Prop16 = '';
		var Parts_Prop17 = '';
		var Parts_Prop18 = '';
		var Parts_Prop19 = '';
		var Parts_Prop20 = '';
		var SupplyID = '';
		var SupplyTitle = '';
		var SMTID = '';
		var SMTTitle = '';
		var SoftNo = '';
		yjDBService.exec({
			sql: SQLStep1,
			parameters: [sBILLID],
			rowsAsArray: true,
			success: function (result) {
				var data = yjDB.dataSet2ObjectList(result.meta, result.rows);
				for (var i = 0; i < data.length; i++) {
					Parts_Prop1 = data[i].Parts_Prop1;
					Parts_Prop2 = data[i].Parts_Prop2;
					Parts_Prop3 = data[i].Parts_Prop3;
					Parts_Prop4 = data[i].Parts_Prop4;
					Parts_Prop5 = data[i].Parts_Prop5;
					Parts_Prop6 = data[i].Parts_Prop6;
					Parts_Prop7 = data[i].Parts_Prop7;
					Parts_Prop8 = data[i].Parts_Prop8;
					Parts_Prop9 = data[i].Parts_Prop9;
					Parts_Prop10 = data[i].Parts_Prop10;
					Parts_Prop11 = data[i].Parts_Prop11;
					Parts_Prop12 = data[i].Parts_Prop12;
					Parts_Prop13 = data[i].Parts_Prop13;
					Parts_Prop14 = data[i].Parts_Prop14;
					Parts_Prop15 = data[i].Parts_Prop15;
					Parts_Prop16 = data[i].Parts_Prop16;
					Parts_Prop17 = data[i].Parts_Prop17;
					Parts_Prop18 = data[i].Parts_Prop18;
					Parts_Prop19 = data[i].Parts_Prop19;
					Parts_Prop20 = data[i].Parts_Prop20;
					SMTID = data[i].SMT_ID;
					SupplyID = data[i].Supply_ID;
					SoftNo = data[i].Soft_No;
				}
				if (sClass == 'R1' || sClass == 'R2' || sClass == 'R3' || sClass == 'S1') {
					console.log("周伯通", sClass, SMTID, "灵", SoftNo, "瑛姑 ", Parts_Prop1);
					SQL2 = SQL_R2;
					paramlist2 = [sClass, Parts_Prop1, Parts_Prop2, Parts_Prop3, Parts_Prop4, Parts_Prop5, Parts_Prop6, Parts_Prop7, Parts_Prop8, Parts_Prop9, Parts_Prop10,
						Parts_Prop11, Parts_Prop12, Parts_Prop13, Parts_Prop14, Parts_Prop15, Parts_Prop16, Parts_Prop17, Parts_Prop18, Parts_Prop19, Parts_Prop20, SoftNo];
				} else {
					SQL2 = SQLStep2;
					paramlist2 = [sClass, Parts_Prop1, Parts_Prop2, Parts_Prop3, Parts_Prop4, Parts_Prop5, Parts_Prop6, Parts_Prop7, Parts_Prop8, Parts_Prop9, Parts_Prop10,
						Parts_Prop11, Parts_Prop12, Parts_Prop13, Parts_Prop14, Parts_Prop15, Parts_Prop16, Parts_Prop17, Parts_Prop18, Parts_Prop19, Parts_Prop20, SupplyID];
					console.log("九尾狐", sClass, SMTID, "灵", SupplyID, "瑛姑 ", Parts_Prop1);
				}
				yjDBService.exec({
					sql: SQL2,
					parameters: paramlist2,
					rowsAsArray: true,
					success: function (result2) {
						var datas = [];
						var data = yjDB.dataSet2ObjectList(result2.meta, result2.rows);
						var retcode = {};
						for (var i = 0; i < data.length; i++) {
							var temp = {
								"Parts_Name": data[i].Parts_Name,
								"Parts_Chi": data[i].Parts_Chi,
							}
							datas.push(temp);
						}
						if (datas.length > 0) {
							if (datas[0].Parts_Name != undefined) {
								console.log("你失败了");
								retcode = { "status": "fail", "billid": BILLID }
							} else {
								retcode = { "status": "chkOK", "billid": BILLID }
							}
						} else {
							console.log("你成功了");
							retcode = { "status": "chkOK", "billid": BILLID }
						}
						sender.success(retcode);
					},
					error: sender.error
				});

			},
			// success :sender.success,
			error: sender.error
		});

	}

	function CheckName(sName) {
		let SQLInsert = " select Parts_Name, Parts_Chi, `Parts_Prop1`,  `Parts_Prop2`, `Parts_Prop3`, `Parts_Prop4`, `Parts_Prop5`,`Parts_Prop6`, `Parts_Prop7`, `Parts_Prop8`, `Parts_Prop9`, `Parts_Prop10`,  " +
			" `Parts_Prop11`, `Parts_Prop12`, `Parts_Prop13`, `Parts_Prop14`, `Parts_Prop15`, `Parts_Prop16`, `Parts_Prop17`, `Parts_Prop18`, `Parts_Prop19`, `Parts_Prop20`   " +
			" from `auto_parts`  where  Parts_Name=? ";
		console.log("SQLInsert:" + SQLInsert);


		yjDBService.exec({
			sql: SQLInsert,
			parameters: [sName],
			rowsAsArray: true,
			success: function (result) {
				var datas = [];
				var data = yjDB.dataSet2ObjectList(result.meta, result.rows);
				var retcode = {};
				for (var i = 0; i < data.length; i++) {
					var temp = {
						"Parts_Name": data[i].Parts_Name,
						"Parts_Chi": data[i].Parts_Chi,
					}
					datas.push(temp);
				}
				if (datas.length > 0) {
					if (datas[0].Parts_Name != undefined) {
						console.log("你失败了");
						retcode = { "status": "fail", "billid": BILLID }
					} else {
						retcode = { "status": "chkOK", "billid": BILLID }
					}
				} else {
					console.log("你成功了");
					retcode = { "status": "chkOK", "billid": BILLID }
				}
				sender.success(retcode);
				console.log(datas[0].Parts_Name);
			},
			// success :sender.success,
			error: sender.error
		});

	}
}   