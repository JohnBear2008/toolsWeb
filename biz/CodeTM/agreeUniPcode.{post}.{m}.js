module.exports = function (sender) {
	var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
	var yjDB = global.yjRequire("yujiang.Foil").yjDB;
	var async = require("async");

	let now = new Date();
	var PartsApplyDate = now.Format("yyyy-MM-dd");
	var PartsName = '';
	var PartsStatus = sender.req.query.PartsStatus;
	var Pattern = sender.req.query.Pattern;
	var PartsCode = 'B1-19A-12345';
	var PartsrowCode = sender.req.query.PartsCode;
	var PartsOldCode = sender.req.query.PartsOldCode;
	var PartsYearBF = "B";
	var PartsRuleBF = "A";
	var PartsClass = sender.req.query.PartsClass;
	var BILLID = sender.req.query.BILLID;
	var Auditor = sender.req.query.Auditor;
	var Source = 'A';

	let PropValue = [];
	let FeatLebel = [];
	let PartsSort = [];
	let MPSwift = [];
	let AtLayer = [];

	console.log('CherryAgree 类 ' + PartsClass + ' 文 ' + BILLID);
	var sClass = PartsClass;
	var sBILLID = BILLID;
	console.log('路线B  ', sBILLID, "分分 ", sClass);
	var PartsYear = '';
	var PartsRule = '';
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
	// Pattern
	// 修改 
	// 引用 
	// 新增 
	// 制造
	if (Pattern == "新增" || Pattern == "引用") {
		console.log('路线A  ', Pattern);
		// PastHandleParts(BILLID, PartsrowCode,PartsOldCode);
		runDouble();
	} else if (Pattern == "修改" || Pattern == "制造") {
		console.log('路线B  ', Pattern);
		runDouble();
	} else {
		runDouble();
	}
	function runDouble() {
		var SQL2 = '';
		let SQLStep1 = " select Parts_Year , Parts_Rule ,Parts_Name, Parts_Chi, Parts_Class ,Parts_Code,`Parts_Prop1`,  `Parts_Prop2`, `Parts_Prop3`, `Parts_Prop4`, `Parts_Prop5`,`Parts_Prop6`, `Parts_Prop7`, `Parts_Prop8`, `Parts_Prop9`, `Parts_Prop10`,  " +
			" `Parts_Prop11`, `Parts_Prop12`, `Parts_Prop13`, `Parts_Prop14`, `Parts_Prop15`, `Parts_Prop16`, `Parts_Prop17`, `Parts_Prop18`, `Parts_Prop19`, `Parts_Prop20` ,  " +
			" `SMT_ID`,`SMT_Title`,`Supply_ID`,`Supply_Title`, `Soft_No` from `auto_rec_parts`  where  BILL_ID=? ";
		//     console.log("古惑 :" + sClass, sBILLID);

		let SQL_Supply = " select Parts_Year , Parts_Rule ,Parts_Name, Parts_Chi, `Parts_Prop1`,  `Parts_Prop2`, `Parts_Prop3`, `Parts_Prop4`, `Parts_Prop5`,`Parts_Prop6`, `Parts_Prop7`, `Parts_Prop8`, `Parts_Prop9`, `Parts_Prop10`,  " +
			" `Parts_Prop11`, `Parts_Prop12`, `Parts_Prop13`, `Parts_Prop14`, `Parts_Prop15`, `Parts_Prop16`, `Parts_Prop17`, `Parts_Prop18`, `Parts_Prop19`, `Parts_Prop20` ,   " +
			" `SMT_ID`,`SMT_Title`,`Supply_ID`,`Supply_Title` from `auto_parts`  where  Parts_Class=? and Parts_Prop1=? and Parts_Prop2=? and Parts_Prop3=? and Parts_Prop4=? and Parts_Prop5=? and Parts_Prop6=? and Parts_Prop7=? and Parts_Prop8=? and Parts_Prop9=? and Parts_Prop10=? " +
			" and Parts_Prop11=? and Parts_Prop12=? and Parts_Prop13=? and Parts_Prop14=? and Parts_Prop15=? and Parts_Prop16=? and Parts_Prop17=? and Parts_Prop18=? and Parts_Prop19=? and Parts_Prop20=?   and Supply_ID= ?";
		let SQLStepR2 = " select Parts_Year , Parts_Rule ,Parts_Name, Parts_Chi, `Parts_Prop1`,  `Parts_Prop2`, `Parts_Prop3`, `Parts_Prop4`, `Parts_Prop5`,`Parts_Prop6`, `Parts_Prop7`, `Parts_Prop8`, `Parts_Prop9`, `Parts_Prop10`,  " +
			" `Parts_Prop11`, `Parts_Prop12`, `Parts_Prop13`, `Parts_Prop14`, `Parts_Prop15`, `Parts_Prop16`, `Parts_Prop17`, `Parts_Prop18`, `Parts_Prop19`, `Parts_Prop20` ,   " +
			" `SMT_ID`,`SMT_Title`,`Supply_ID`,`Supply_Title`, `Soft_No` from `auto_parts`  where  Parts_Class=? and Parts_Prop1=? and Parts_Prop2=? and Parts_Prop3=? and Parts_Prop4=? and Parts_Prop5=? and Parts_Prop6=? and Parts_Prop7=? and Parts_Prop8=? and Parts_Prop9=? and Parts_Prop10=? " +
			" and Parts_Prop11=? and Parts_Prop12=? and Parts_Prop13=? and Parts_Prop14=? and Parts_Prop15=? and Parts_Prop16=? and Parts_Prop17=? and Parts_Prop18=? and Parts_Prop19=? and Parts_Prop20=?   and Soft_No= ? ";

		let paramlist2 = [];
		yjDBService.exec({
			sql: SQLStep1,
			parameters: [sBILLID],
			rowsAsArray: true,
			success: function (result) {
				var data = yjDB.dataSet2ObjectList(result.meta, result.rows);
				for (var i = 0; i < data.length; i++) {
					PartsYear = data[i].Parts_Year;
					PartsRule = data[i].Parts_Rule;
					Parts_Prop1 = data[i].Parts_Prop1; PropValue[1] = Parts_Prop1;
					Parts_Prop2 = data[i].Parts_Prop2; PropValue[2] = Parts_Prop2;
					Parts_Prop3 = data[i].Parts_Prop3; PropValue[3] = Parts_Prop3;
					Parts_Prop4 = data[i].Parts_Prop4; PropValue[4] = Parts_Prop4;
					Parts_Prop5 = data[i].Parts_Prop5; PropValue[5] = Parts_Prop5;
					Parts_Prop6 = data[i].Parts_Prop6; PropValue[6] = Parts_Prop6;
					Parts_Prop7 = data[i].Parts_Prop7; PropValue[7] = Parts_Prop7;
					Parts_Prop8 = data[i].Parts_Prop8; PropValue[8] = Parts_Prop8;
					Parts_Prop9 = data[i].Parts_Prop9; PropValue[9] = Parts_Prop9;
					Parts_Prop10 = data[i].Parts_Prop10; PropValue[10] = Parts_Prop10;
					Parts_Prop11 = data[i].Parts_Prop11; PropValue[11] = Parts_Prop11;
					Parts_Prop12 = data[i].Parts_Prop12; PropValue[12] = Parts_Prop12;
					Parts_Prop13 = data[i].Parts_Prop13; PropValue[13] = Parts_Prop13;
					Parts_Prop14 = data[i].Parts_Prop14; PropValue[14] = Parts_Prop14;
					Parts_Prop15 = data[i].Parts_Prop15; PropValue[15] = Parts_Prop15;
					Parts_Prop16 = data[i].Parts_Prop16; PropValue[16] = Parts_Prop16;
					Parts_Prop17 = data[i].Parts_Prop17; PropValue[17] = Parts_Prop17;
					Parts_Prop18 = data[i].Parts_Prop18; PropValue[18] = Parts_Prop18;
					Parts_Prop19 = data[i].Parts_Prop19; PropValue[19] = Parts_Prop19;
					Parts_Prop20 = data[i].Parts_Prop20; PropValue[20] = Parts_Prop20;
					PartsName = data[i].Parts_Name;
					PartsCode = data[i].Parts_Code;
					SMTID = data[i].SMT_ID;
					SMTTitle = data[i].SMT_Title; PropValue[0] = SMTTitle;
					SupplyID = data[i].Supply_ID;
					SupplyTitle = data[i].Supply_Title;
					SoftNo = data[i].Soft_No;
				}
				if (sClass == 'R1' || sClass == 'R2' || sClass == 'R3' || sClass == 'S1') {
					SQL2 = SQLStepR2;
					paramlist2 = [sClass, Parts_Prop1, Parts_Prop2, Parts_Prop3, Parts_Prop4, Parts_Prop5, Parts_Prop6, Parts_Prop7, Parts_Prop8, Parts_Prop9, Parts_Prop10,
						Parts_Prop11, Parts_Prop12, Parts_Prop13, Parts_Prop14, Parts_Prop15, Parts_Prop16, Parts_Prop17, Parts_Prop18, Parts_Prop19, Parts_Prop20, SoftNo];
				} else {
					SQL2 = SQL_Supply;
					paramlist2 = [sClass, Parts_Prop1, Parts_Prop2, Parts_Prop3, Parts_Prop4, Parts_Prop5, Parts_Prop6, Parts_Prop7, Parts_Prop8, Parts_Prop9, Parts_Prop10,
						Parts_Prop11, Parts_Prop12, Parts_Prop13, Parts_Prop14, Parts_Prop15, Parts_Prop16, Parts_Prop17, Parts_Prop18, Parts_Prop19, Parts_Prop20, SupplyID];
				}
				console.log("鼻子 ", PartsYear, PartsRule, " 挺胸 ", sClass, SMTID, SMTTitle, "假 ", SoftNo, " 人", SupplyID, "共奋 ", SupplyTitle);
				//  console.log("妲己",Parts_Prop1,Parts_Prop2,Parts_Prop3,Parts_Prop4,Parts_Prop5);
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
								retcode = { "status": "fail", "billid": BILLID, "partscode": BILLID }
								sender.success(retcode);
							} else {
							}
						} else {
							console.log("你成功了");
							if (Pattern == "修改") {
								var PBornCode = PartsCode;
								console.log('WANG抽中  ', PBornCode);
								HandleRevise(PartsStatus, Pattern, PartsYear, PartsRule, sClass, PBornCode, sBILLID, SMTID, SMTTitle, SupplyID, SoftNo, Parts_Prop1, Parts_Prop2, Parts_Prop3, Parts_Prop4, Parts_Prop5, Parts_Prop6, Parts_Prop7, Parts_Prop8, Parts_Prop9, Parts_Prop10,
									Parts_Prop11, Parts_Prop12, Parts_Prop13, Parts_Prop14, Parts_Prop15, Parts_Prop16, Parts_Prop17, Parts_Prop18, Parts_Prop19, Parts_Prop20);
							} else if (Pattern == "制造") {
								var PBornCode = '';
								let BurnList = [];
								BurnList = PartsCode.split('-');
								if (sClass == 'R1' || sClass == 'R2' || sClass == 'R3' || sClass == 'S1') {
									PBornCode = BurnList[0] + '-' + BurnList[1] + '-' + SoftNo;
								} else {
									PBornCode = BurnList[0] + '-' + BurnList[1] + '-' + SupplyID;
								}
								console.log('汽车抽中  ', PBornCode);
								HandleRevise(PartsStatus, Pattern, PartsYear, PartsRule, sClass, PBornCode, sBILLID, SMTID, SMTTitle, SupplyID, SoftNo, Parts_Prop1, Parts_Prop2, Parts_Prop3, Parts_Prop4, Parts_Prop5, Parts_Prop6, Parts_Prop7, Parts_Prop8, Parts_Prop9, Parts_Prop10,
									Parts_Prop11, Parts_Prop12, Parts_Prop13, Parts_Prop14, Parts_Prop15, Parts_Prop16, Parts_Prop17, Parts_Prop18, Parts_Prop19, Parts_Prop20);
							} else if (Pattern == "新增" || Pattern == "引用") {
								runAddOne(PartsStatus, Pattern, PartsYear, PartsRule, sClass, sBILLID, SMTID, SMTTitle, SupplyID, SoftNo, Parts_Prop1, Parts_Prop2, Parts_Prop3, Parts_Prop4, Parts_Prop5, Parts_Prop6, Parts_Prop7, Parts_Prop8, Parts_Prop9, Parts_Prop10,
									Parts_Prop11, Parts_Prop12, Parts_Prop13, Parts_Prop14, Parts_Prop15, Parts_Prop16, Parts_Prop17, Parts_Prop18, Parts_Prop19, Parts_Prop20);
							} else {
								runAddOne(PartsStatus, Pattern, PartsYear, PartsRule, sClass, sBILLID, SMTID, SMTTitle, SupplyID, SoftNo, Parts_Prop1, Parts_Prop2, Parts_Prop3, Parts_Prop4, Parts_Prop5, Parts_Prop6, Parts_Prop7, Parts_Prop8, Parts_Prop9, Parts_Prop10,
									Parts_Prop11, Parts_Prop12, Parts_Prop13, Parts_Prop14, Parts_Prop15, Parts_Prop16, Parts_Prop17, Parts_Prop18, Parts_Prop19, Parts_Prop20);
							}
						}
					},
					error: sender.error
				});
			},
			// success :sender.success,
			error: sender.error
		});
	}

	//软件 不用supplyID当ccc ,用softID当eeee
	//新增 引用 序号+1  , 供应商 修改单 不需要序号+1
	function runAddOne(PStatus, Pattern, xYear, xRule, xClass, xBILLID, xSMTID, xSMTTitle, xSupplyID, xSoftNo, xProp1, xProp2, xProp3, xProp4, xProp5, xProp6, xProp7, xProp8, xProp9, xProp10,
		xProp11, xProp12, xProp13, xProp14, xProp15, xProp16, xProp17, xProp18, xProp19, xProp20) {
		var PID = '0001';
		let SQLmax = '';
		let paramlist = [];

		if (xClass == 'R1' || xClass == 'R2' || xClass == 'R3' || xClass == 'S1') {
			paramlist = [PartsYear, PartsRule, xClass, xSMTID];
			SQLmax = "select max(PID) as PID from `auto_parts` where Parts_Year=? and Parts_Rule =? and Parts_Class=?  and SMT_ID=?  ";//and Soft_No = ?
		} else {
			paramlist = [PartsYear, PartsRule, xClass, xSMTID];
			SQLmax = "select max(PID) as PID from `auto_parts` where Parts_Year=? and Parts_Rule =? and Parts_Class=?  and SMT_ID=? "; // and Supply_ID = ?
		}
		console.log('同意SQLmax  ' + SQLmax);
		console.log(' runAgree机发理  ', xYear, xRule);
		yjDBService.exec({
			sql: SQLmax,
			parameters: paramlist,
			rowsAsArray: true,
			success: function (r) {
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				for (var i = 0; i < data.length; i++) {
					var temp = data[i].PID;
					if (temp != null) {
						var tempA = parseInt(temp) + 1;
						var tempATxt = '';
						if (tempA < 10) {
							tempATxt = '000' + tempA;
						} else if (tempA < 100) {
							tempATxt = '00' + tempA;
						} else if (tempA < 1000) {
							tempATxt = '0' + tempA;
						} else if (tempA < 10000) {
							tempATxt = '' + tempA;
						} else if (tempA < 100000) {
							tempATxt = '' + tempA;
						} else {
							tempATxt = '' + tempA;
						}
						PID = tempATxt;
					} else {
						PID = '0001';
						console.log("不存在", PID);
					}
				}
				var PBornCode = PartsYearBF + PartsClass + "-" + PartsRuleBF + xSMTID + PID + "-" + xSupplyID;
				if (PartsClass == 'R1' || PartsClass == 'R2' || PartsClass == 'R3') {
					PBornCode = PartsYearBF + PartsClass + "-" + PartsRuleBF + xSMTID + PID + '-' + xSoftNo;
				}
				console.log("油永节", PartsYearBF, "光", PartsClass, "更", PartsRuleBF, "脚", xSMTID, "足", PID, " 麻 ", xSupplyID);
				console.log("劳动节", PBornCode, " 序列号 ", PID, " 文号 ", xBILLID);
				HandleParts(Pattern, PID, xBILLID, PBornCode, xYear, xRule, xClass, xSMTTitle, xProp1, xProp2, xProp3, xProp4, xProp5, xProp6, xProp7, xProp8, xProp9, xProp10,
					xProp11, xProp12, xProp13, xProp14, xProp15, xProp16, xProp17, xProp18, xProp19, xProp20);
			},

		})
	}
	function HandleRevise(PartsStatus, xPattern, xYear, xRule, xClass, PBorn, sBILLID, xSMTID, xSMTTitle, xSupplyID, xSoftNo,
		xProp1, xProp2, xProp3, xProp4, xProp5, xProp6, xProp7, xProp8, xProp9, xProp10,
		xProp11, xProp12, xProp13, xProp14, xProp15, xProp16, xProp17, xProp18, xProp19, xProp20) {
		let SQLclear = "delete from  `auto_parts` where   Parts_Code=  ? ";
		console.log("思我故乡 :" + PBorn);

		let SQLInsert = "INSERT INTO `auto_parts` (  `BILL_ID`, `Parts_Year`, `Parts_Rule`, `Parts_Class`, `Parts_Chi`,  `Model` , `Assembly`  , `PartsUnitE`, `PhaseStatus` , `UsePriority` ,`Parts_Apply_Date`, `Parts_Limit_Date`, `Parts_Name`, `Source` ,`Parts_status`, " +
			" `Pattern`, `Staff`, `Auditor`, `Property`, `PID`, `Parts_Code`, `Supply_ID`, `Supply_Title` , `SMT_ID` , `SMT_Title`,  `Parts_Old_Code` ,   `Parts_Prop1`,  `Parts_Prop2`, `Parts_Prop3`, `Parts_Prop4`, `Parts_Prop5`,`Parts_Prop6`, `Parts_Prop7`, `Parts_Prop8`, `Parts_Prop9`, `Parts_Prop10`, " +
			" `Parts_Prop11`, `Parts_Prop12`, `Parts_Prop13`, `Parts_Prop14`, `Parts_Prop15`, `Parts_Prop16`, `Parts_Prop17`, `Parts_Prop18`, `Parts_Prop19`, `Parts_Prop20` , `Soft_No`  )" +
			"  select   `BILL_ID`, `Parts_Year`, `Parts_Rule`, `Parts_Class`, `Parts_Chi`,  `Model` , `Assembly`  , `PartsUnitE`, `PhaseStatus` , `UsePriority` ,`Parts_Apply_Date`, `Parts_Limit_Date`, `Parts_Name`, `Source` , '1' , '" + xPattern + "' , `Staff`, '" + Auditor + "' ,`Property`, `PID` , '" + PBorn + "', `Supply_ID` , `Supply_Title` , `SMT_ID` , `SMT_Title`,  `Parts_Old_Code` , " +
			" `Parts_Prop1`,  `Parts_Prop2`, `Parts_Prop3`, `Parts_Prop4`, `Parts_Prop5`,`Parts_Prop6`, `Parts_Prop7`, `Parts_Prop8`, `Parts_Prop9`, `Parts_Prop10`, `Parts_Prop11`, `Parts_Prop12`, `Parts_Prop13`, `Parts_Prop14`, `Parts_Prop15`, `Parts_Prop16`, `Parts_Prop17`, `Parts_Prop18`, `Parts_Prop19`, `Parts_Prop20` , `Soft_No`  from `auto_rec_parts`" +
			" where BILL_ID=? ";
		// console.log("趙露眯:" + SQLInsert);

		console.log('鸭杀 ' + xRule + ' 类 ' + xClass + ' 码 ' + sBILLID);

		let SQLrecUpt = "delete from  `auto_rec_parts`  where  BILL_ID=?   ";
		console.log("SQLrecUpt:" + SQLrecUpt);

		yjDBService.exec({
			sql: SQLclear,
			parameters: [PBorn],
			rowsAsArray: true,
			success: function (result) {
				console.log("一线");
				yjDBService.exec({
					sql: SQLInsert,
					parameters: [sBILLID],
					rowsAsArray: true,
					success: function (result) {
						console.log("二线");
						yjDBService.exec({
							sql: SQLrecUpt,
							parameters: [sBILLID],
							rowsAsArray: true,
							success: function (result2) {
								cleanExp(PBorn, xYear, xRule, xClass, xSMTTitle, xProp1, xProp2, xProp3, xProp4, xProp5, xProp6, xProp7, xProp8, xProp9, xProp10,
									xProp11, xProp12, xProp13, xProp14, xProp15, xProp16, xProp17, xProp18, xProp19, xProp20);
								var retcode = { "status": "OK", "message": "审批完成", "partscode": PBorn };
								sender.success(retcode);
								console.log("钰三线", retcode);
							},
							error: sender.error
						});
					},
					error: sender.error
				});
			},
			error: sender.error
		});
	}

	function HandleParts(xPattern, sPID, xBILLID, PBorn, xYear, xRule, xClass, xSMTTitle, xProp1, xProp2, xProp3, xProp4, xProp5, xProp6, xProp7, xProp8, xProp9, xProp10,
		xProp11, xProp12, xProp13, xProp14, xProp15, xProp16, xProp17, xProp18, xProp19, xProp20) {
		let SQLInsert = "INSERT INTO `auto_parts` (  `BILL_ID`, `Parts_Year`, `Parts_Rule`, `Parts_Class`, `Parts_Chi`,  `Model` , `Assembly`  , `PartsUnitE`, `PhaseStatus` , `UsePriority` ,`Parts_Apply_Date`, `Parts_Limit_Date`, `Parts_Name`, `Source` , `Parts_status`, `Pattern`, " +
			" `Staff`, `Auditor`, `Property`, `PID`, `Parts_Code`, `Supply_ID`, `Supply_Title` , `SMT_ID` , `SMT_Title`,  `Parts_Old_Code` ,   `Parts_Prop1`,  `Parts_Prop2`, `Parts_Prop3`, `Parts_Prop4`, `Parts_Prop5`,`Parts_Prop6`, `Parts_Prop7`, `Parts_Prop8`, `Parts_Prop9`, `Parts_Prop10`, " +
			" `Parts_Prop11`, `Parts_Prop12`, `Parts_Prop13`, `Parts_Prop14`, `Parts_Prop15`, `Parts_Prop16`, `Parts_Prop17`, `Parts_Prop18`, `Parts_Prop19`, `Parts_Prop20` , `Soft_No`  )" +
			"  select   `BILL_ID`, `Parts_Year`, `Parts_Rule`, `Parts_Class`, `Parts_Chi`,  `Model` , `Assembly`  , `PartsUnitE`, `PhaseStatus` , `UsePriority` ,`Parts_Apply_Date`, `Parts_Limit_Date`, `Parts_Name`, `Source` , '1' , '" + xPattern + "' ,  `Staff`, '" + Auditor + "' ,`Property`, '" + sPID + "','" + PBorn + "', `Supply_ID` , `Supply_Title` , `SMT_ID` , `SMT_Title`,  `Parts_Old_Code` , " +
			" `Parts_Prop1`,  `Parts_Prop2`, `Parts_Prop3`, `Parts_Prop4`, `Parts_Prop5`,`Parts_Prop6`, `Parts_Prop7`, `Parts_Prop8`, `Parts_Prop9`, `Parts_Prop10`, `Parts_Prop11`, `Parts_Prop12`, `Parts_Prop13`, `Parts_Prop14`, `Parts_Prop15`, `Parts_Prop16`, `Parts_Prop17`, `Parts_Prop18`, `Parts_Prop19`, `Parts_Prop20` , `Soft_No`  from `auto_rec_parts`" +
			" where   BILL_ID=? ";
		// console.log("SQL狠心:" + SQLInsert);

		console.log('体验琪 ', sPID, ' 规  ', PBorn, ' 石原  ', xPattern);

		let SQLDelete = "delete from `auto_rec_parts`  where   BILL_ID=?  ";
		// console.log("SQLDelete:" + SQLDelete);

		yjDBService.exec({
			sql: SQLInsert,
			parameters: [xBILLID],
			rowsAsArray: true,
			success: function (result) {
				yjDBService.exec({
					sql: SQLDelete,
					parameters: [BILLID],
					rowsAsArray: true,
					success: function (result2) {
						cleanExp(PBorn, xYear, xRule, xClass, xSMTTitle, xProp1, xProp2, xProp3, xProp4, xProp5, xProp6, xProp7, xProp8, xProp9, xProp10,
							xProp11, xProp12, xProp13, xProp14, xProp15, xProp16, xProp17, xProp18, xProp19, xProp20);
						var retcode = { "status": "OK", "message": "审批完成", "partscode": PBorn };
						sender.success(retcode);
						console.log("进那 ", retcode);
					},
					error: sender.error
				});
			},
			error: sender.error
		});

	}
	function cleanExp(PBorn, xYear, xRule, xClass, xSMTTitle, xProp1, xProp2, xProp3, xProp4, xProp5, xProp6, xProp7, xProp8, xProp9, xProp10,
		xProp11, xProp12, xProp13, xProp14, xProp15, xProp16, xProp17, xProp18, xProp19, xProp20) {
		var SQLDelete = "  delete from `auto_exp`  where Parts_Code= ? OR Parts_Old_Code =? ";
		yjDBService.exec({
			sql: SQLDelete,
			parameters: [PBorn, PBorn],
			rowsAsArray: true,
			success: function (result2) {
				runExp(PBorn, xYear, xRule, xClass, xSMTTitle, xProp1, xProp2, xProp3, xProp4, xProp5, xProp6, xProp7, xProp8, xProp9, xProp10,
					xProp11, xProp12, xProp13, xProp14, xProp15, xProp16, xProp17, xProp18, xProp19, xProp20);
			},
			error: sender.error
		});
	}
	function runExp(xBorn, xYear, xRule, xClass, xSMT, xProp1, xProp2, xProp3, xProp4, xProp5, xProp6, xProp7, xProp8, xProp9, xProp10,
		xProp11, xProp12, xProp13, xProp14, xProp15, xProp16, xProp17, xProp18, xProp19, xProp20) {
		// var sql_AreaE = " select Supp_CID as PartsAttr , '客户' as FeatLebel, tbm.MPSwift  from auto_supplier tba LEFT JOIN eng_mpcode tbm ON '客户'=tbm.MPKind where  ( Area='1' OR Area='2'  )  and Supp_Name= ? ";
		var sql_AreaE = " select tba.PartsAttr,tbf.FEATURE_E as FeatLebel,tbm.MPSwift from auto_nature tba LEFT JOIN auto_feature tbf ON tba.PartsClass=tbf.Parts_Class LEFT JOIN eng_mpcode tbm ON tbf.FEATURE01=tbm.MPKind where ClassRule= ? and PartsPID='1' AND PartsDesc =  ?";
		var sql_Area1 = " select tba.PartsAttr,tbf.FEATURE01 as FeatLebel,tbm.MPSwift from auto_nature tba LEFT JOIN auto_feature tbf ON tba.PartsClass=tbf.Parts_Class LEFT JOIN eng_mpcode tbm ON tbf.FEATURE01=tbm.MPKind where ClassRule= ? and PartsPID='2' AND PartsDesc =  ? ";
		var sql_Area2 = " select tba.PartsAttr,tbf.FEATURE02 as FeatLebel,tbm.MPSwift from auto_nature tba LEFT JOIN auto_feature tbf ON tba.PartsClass=tbf.Parts_Class LEFT JOIN eng_mpcode tbm ON tbf.FEATURE02=tbm.MPKind where ClassRule= ? and PartsPID='3' AND PartsDesc =  ? ";
		var sql_Area3 = " select tba.PartsAttr,tbf.FEATURE03 as FeatLebel,tbm.MPSwift from auto_nature tba LEFT JOIN auto_feature tbf ON tba.PartsClass=tbf.Parts_Class LEFT JOIN eng_mpcode tbm ON tbf.FEATURE03=tbm.MPKind where ClassRule= ? and PartsPID='4' AND PartsDesc =  ? ";
		var sql_Area4 = " select tba.PartsAttr,tbf.FEATURE04 as FeatLebel,tbm.MPSwift from auto_nature tba LEFT JOIN auto_feature tbf ON tba.PartsClass=tbf.Parts_Class LEFT JOIN eng_mpcode tbm ON tbf.FEATURE04=tbm.MPKind where ClassRule= ? and PartsPID='5' AND PartsDesc =  ? ";
		var sql_Area5 = " select tba.PartsAttr,tbf.FEATURE05 as FeatLebel,tbm.MPSwift from auto_nature tba LEFT JOIN auto_feature tbf ON tba.PartsClass=tbf.Parts_Class LEFT JOIN eng_mpcode tbm ON tbf.FEATURE05=tbm.MPKind where ClassRule= ? and PartsPID='6' AND PartsDesc =  ? ";
		var sql_Area6 = " select tba.PartsAttr,tbf.FEATURE06 as FeatLebel,tbm.MPSwift from auto_nature tba LEFT JOIN auto_feature tbf ON tba.PartsClass=tbf.Parts_Class LEFT JOIN eng_mpcode tbm ON tbf.FEATURE06=tbm.MPKind where ClassRule= ? and PartsPID='7' AND PartsDesc =  ? ";
		var sql_Area7 = " select tba.PartsAttr,tbf.FEATURE07 as FeatLebel,tbm.MPSwift from auto_nature tba LEFT JOIN auto_feature tbf ON tba.PartsClass=tbf.Parts_Class LEFT JOIN eng_mpcode tbm ON tbf.FEATURE07=tbm.MPKind where ClassRule= ? and PartsPID='8' AND PartsDesc =  ? ";
		var sql_Area8 = " select tba.PartsAttr,tbf.FEATURE08 as FeatLebel,tbm.MPSwift from auto_nature tba LEFT JOIN auto_feature tbf ON tba.PartsClass=tbf.Parts_Class LEFT JOIN eng_mpcode tbm ON tbf.FEATURE08=tbm.MPKind where ClassRule= ? and PartsPID='9' AND PartsDesc =  ? ";
		var sql_Area9 = " select tba.PartsAttr,tbf.FEATURE09 as FeatLebel,tbm.MPSwift from auto_nature tba LEFT JOIN auto_feature tbf ON tba.PartsClass=tbf.Parts_Class LEFT JOIN eng_mpcode tbm ON tbf.FEATURE09=tbm.MPKind where ClassRule= ? and PartsPID='10' AND PartsDesc =  ? ";
		var sql_Area10 = " select tba.PartsAttr,tbf.FEATURE10 as FeatLebel,tbm.MPSwift from auto_nature tba LEFT JOIN auto_feature tbf ON tba.PartsClass=tbf.Parts_Class LEFT JOIN eng_mpcode tbm ON tbf.FEATURE10=tbm.MPKind where ClassRule= ? and PartsPID='11' AND PartsDesc =  ? ";
		var sql_Area11 = " select tba.PartsAttr,tbf.FEATURE11 as FeatLebel,tbm.MPSwift from auto_nature tba LEFT JOIN auto_feature tbf ON tba.PartsClass=tbf.Parts_Class LEFT JOIN eng_mpcode tbm ON tbf.FEATURE11=tbm.MPKind where ClassRule= ? and PartsPID='12' AND PartsDesc =  ? ";
		var sql_Area12 = " select tba.PartsAttr,tbf.FEATURE12 as FeatLebel,tbm.MPSwift from auto_nature tba LEFT JOIN auto_feature tbf ON tba.PartsClass=tbf.Parts_Class LEFT JOIN eng_mpcode tbm ON tbf.FEATURE12=tbm.MPKind where ClassRule= ? and PartsPID='13' AND PartsDesc =  ? ";
		var sql_Area13 = " select tba.PartsAttr,tbf.FEATURE13 as FeatLebel,tbm.MPSwift from auto_nature tba LEFT JOIN auto_feature tbf ON tba.PartsClass=tbf.Parts_Class LEFT JOIN eng_mpcode tbm ON tbf.FEATURE13=tbm.MPKind where ClassRule= ? and PartsPID='14' AND PartsDesc =  ? ";
		var sql_Area14 = " select tba.PartsAttr,tbf.FEATURE14 as FeatLebel,tbm.MPSwift from auto_nature tba LEFT JOIN auto_feature tbf ON tba.PartsClass=tbf.Parts_Class LEFT JOIN eng_mpcode tbm ON tbf.FEATURE14=tbm.MPKind where ClassRule= ? and PartsPID='15' AND PartsDesc =  ? ";
		var sql_Area15 = " select tba.PartsAttr,tbf.FEATURE15 as FeatLebel,tbm.MPSwift from auto_nature tba LEFT JOIN auto_feature tbf ON tba.PartsClass=tbf.Parts_Class LEFT JOIN eng_mpcode tbm ON tbf.FEATURE15=tbm.MPKind where ClassRule= ? and PartsPID='16' AND PartsDesc =  ? ";
		var sql_Area16 = " select tba.PartsAttr,tbf.FEATURE16 as FeatLebel,tbm.MPSwift from auto_nature tba LEFT JOIN auto_feature tbf ON tba.PartsClass=tbf.Parts_Class LEFT JOIN eng_mpcode tbm ON tbf.FEATURE16=tbm.MPKind where ClassRule= ? and PartsPID='17' AND PartsDesc =  ? ";
		var sql_Area17 = " select tba.PartsAttr,tbf.FEATURE17 as FeatLebel,tbm.MPSwift from auto_nature tba LEFT JOIN auto_feature tbf ON tba.PartsClass=tbf.Parts_Class LEFT JOIN eng_mpcode tbm ON tbf.FEATURE17=tbm.MPKind where ClassRule= ? and PartsPID='18' AND PartsDesc =  ? ";
		var sql_Area18 = " select tba.PartsAttr,tbf.FEATURE18 as FeatLebel,tbm.MPSwift from auto_nature tba LEFT JOIN auto_feature tbf ON tba.PartsClass=tbf.Parts_Class LEFT JOIN eng_mpcode tbm ON tbf.FEATURE18=tbm.MPKind where ClassRule= ? and PartsPID='19' AND PartsDesc =  ? ";
		var sql_Area19 = " select tba.PartsAttr,tbf.FEATURE19 as FeatLebel,tbm.MPSwift from auto_nature tba LEFT JOIN auto_feature tbf ON tba.PartsClass=tbf.Parts_Class LEFT JOIN eng_mpcode tbm ON tbf.FEATURE19=tbm.MPKind where ClassRule= ? and PartsPID='20' AND PartsDesc =  ? ";
		var sql_Area20 = " select tba.PartsAttr,tbf.FEATURE20 as FeatLebel,tbm.MPSwift from auto_nature tba LEFT JOIN auto_feature tbf ON tba.PartsClass=tbf.Parts_Class LEFT JOIN eng_mpcode tbm ON tbf.FEATURE20=tbm.MPKind where ClassRule= ? and PartsPID='21' AND PartsDesc =  ? ";
		var comboClass = xClass + xRule;
		console.log("放生： ", comboClass);
		async.parallel([funAreaE, funArea1, funArea2, funArea3, funArea4, funArea5, funArea6, funArea7, funArea8, funArea9, funArea10, funArea11, funArea12,
			funArea13, funArea14, funArea15, funArea16, funArea17, funArea18, funArea19, funArea20],
			function (err, result) {
				if (err) {
					console.log("皮不司", JSON.stringify(result));
				} else {
					console.log("湖南技师", JSON.stringify(result));
					var cnt = 0;
					const promise = new Promise((resolve, reject) => {
						for (var i = 0; i < 21; i++) {
							if (result[i] != null && result[i] != undefined) {
								if (result[i][0] != null && result[i][0] != undefined) {
									cnt++;
									AtLayer[i] = result[i][0].PartsAttr;//修掉
									FeatLebel[i] = result[i][0].FeatLebel; //属性中文標识feature
									PartsSort[i] = result[i][0].PartsAttr; //按键下拉值
									MPSwift[i] = result[i][0].MPSwift;
									// PropValue 按键下拉中文
									console.log("楠：", "" + (i + 1), " 馬赛 ", FeatLebel[i], PartsSort[i], PropValue[i]);
									runEngExp(xYear, xRule, xBorn, "" + (cnt), MPSwift[i], FeatLebel[i], PartsSort[i], PropValue[i]);
								}
							}
						}
						resolve('成功进入resolve中');
					});
					promise.then(data => {
						console.log("正常", data);
					}).catch(data => {
						console.log("异常", data);
					});
				}
			});
		function funAreaE(cb) {
			yjDBService.exec({
				sql: sql_AreaE,
				parameters:[comboClass, xSMT],  
				rowsAsArray: true,
				success: function (r) {
					var datas = []
					var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
					for (var i = 0; i < data.length; i++) {
						var temp = {
							"PartsAttr": data[i].PartsAttr,
							"FeatLebel": data[i].FeatLebel,
							"MPSwift": data[i].MPSwift,
						}
						datas.push(temp);
						console.log("E汉丢 : ", JSON.stringify(temp), "  大眼亀：", SMTTitle);
					}
					cb(null, datas);
				},
				error: sender.error
			})
		}
		function funArea1(cb) {
			yjDBService.exec({
				sql: sql_Area1,
				parameters: [comboClass, xProp1],
				rowsAsArray: true,
				success: function (r) {
					var datas = []
					var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
					for (var i = 0; i < data.length; i++) {
						var temp = {
							"PartsAttr": data[i].PartsAttr,
							"FeatLebel": data[i].FeatLebel,
							"MPSwift": data[i].MPSwift,
						}
						datas.push(temp);
						console.log("1周敏 : ", JSON.stringify(temp));
					}
					console.log("1小典 : ", JSON.stringify(xProp1), " 韩宫：", comboClass);
					cb(null, datas);
				},
				error: sender.error
			})
		}
		function funArea2(cb) {
			yjDBService.exec({
				sql: sql_Area2,
				parameters: [comboClass, xProp2],
				rowsAsArray: true,
				success: function (r) {
					var datas = []
					var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
					for (var i = 0; i < data.length; i++) {
						var temp = {
							"PartsAttr": data[i].PartsAttr,
							"FeatLebel": data[i].FeatLebel,
							"MPSwift": data[i].MPSwift,
						}
						datas.push(temp);
						console.log("2周敏 : ", JSON.stringify(temp));
					}
					cb(null, datas);
				},
				error: sender.error
			})
		}
		function funArea3(cb) {
			yjDBService.exec({
				sql: sql_Area3,
				parameters: [comboClass, xProp3],
				rowsAsArray: true,
				success: function (r) {
					var datas = []
					var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
					for (var i = 0; i < data.length; i++) {
						var temp = {
							"PartsAttr": data[i].PartsAttr,
							"FeatLebel": data[i].FeatLebel,
							"MPSwift": data[i].MPSwift,
						}
						datas.push(temp);
						// console.log("3周敏 : ", JSON.stringify(temp));
					}
					cb(null, datas);
				},
				error: sender.error
			})
		}
		function funArea4(cb) {
			yjDBService.exec({
				sql: sql_Area4,
				parameters: [comboClass, xProp4],
				rowsAsArray: true,
				success: function (r) {
					var datas = []
					var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
					for (var i = 0; i < data.length; i++) {
						var temp = {
							"PartsAttr": data[i].PartsAttr,
							"FeatLebel": data[i].FeatLebel,
							"MPSwift": data[i].MPSwift,
						}
						datas.push(temp);
						// console.log("4周敏 : ", JSON.stringify(temp));
					}
					cb(null, datas);
				},
				error: sender.error
			})
		}
		function funArea5(cb) {
			yjDBService.exec({
				sql: sql_Area5,
				parameters: [comboClass, xProp5],
				rowsAsArray: true,
				success: function (r) {
					var datas = []
					var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
					for (var i = 0; i < data.length; i++) {
						var temp = {
							"PartsAttr": data[i].PartsAttr,
							"FeatLebel": data[i].FeatLebel,
							"MPSwift": data[i].MPSwift,
						}
						datas.push(temp);
						// console.log("5周敏 : ", JSON.stringify(temp));
					}
					cb(null, datas);
				},
				error: sender.error
			})
		}
		function funArea6(cb) {
			yjDBService.exec({
				sql: sql_Area6,
				parameters: [comboClass, xProp6],
				rowsAsArray: true,
				success: function (r) {
					var datas = []
					var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
					for (var i = 0; i < data.length; i++) {
						var temp = {
							"PartsAttr": data[i].PartsAttr,
							"FeatLebel": data[i].FeatLebel,
							"MPSwift": data[i].MPSwift,
						}
						datas.push(temp)
					}
					cb(null, datas);
				},
				error: sender.error
			})
		}
		function funArea7(cb) {
			yjDBService.exec({
				sql: sql_Area7,
				parameters: [comboClass, xProp7],
				rowsAsArray: true,
				success: function (r) {
					var datas = []
					var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
					for (var i = 0; i < data.length; i++) {
						var temp = {
							"PartsAttr": data[i].PartsAttr,
							"FeatLebel": data[i].FeatLebel,
							"MPSwift": data[i].MPSwift,
						}
						datas.push(temp)
					}
					cb(null, datas);
				},
				error: sender.error
			})
		}
		function funArea8(cb) {
			yjDBService.exec({
				sql: sql_Area8,
				parameters: [comboClass, xProp8],
				rowsAsArray: true,
				success: function (r) {
					var datas = []
					var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
					for (var i = 0; i < data.length; i++) {
						var temp = {
							"PartsAttr": data[i].PartsAttr,
							"FeatLebel": data[i].FeatLebel,
							"MPSwift": data[i].MPSwift,
						}
						datas.push(temp)
					}
					cb(null, datas);
				},
				error: sender.error
			})
		}
		function funArea9(cb) {
			yjDBService.exec({
				sql: sql_Area9,
				parameters: [comboClass, xProp9],
				rowsAsArray: true,
				success: function (r) {
					var datas = []
					var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
					for (var i = 0; i < data.length; i++) {
						var temp = {
							"PartsAttr": data[i].PartsAttr,
							"FeatLebel": data[i].FeatLebel,
							"MPSwift": data[i].MPSwift,
						}
						datas.push(temp)
					}
					cb(null, datas);
				},
				error: sender.error
			})
		}
		function funArea10(cb) {
			yjDBService.exec({
				sql: sql_Area10,
				parameters: [comboClass, xProp10],
				rowsAsArray: true,
				success: function (r) {
					var datas = []
					var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
					for (var i = 0; i < data.length; i++) {
						var temp = {
							"PartsAttr": data[i].PartsAttr,
							"FeatLebel": data[i].FeatLebel,
							"MPSwift": data[i].MPSwift,
						}
						datas.push(temp)
					}
					cb(null, datas);
				},
				error: sender.error
			})
		}
		function funArea11(cb) {
			yjDBService.exec({
				sql: sql_Area11,
				parameters: [comboClass, xProp11],
				rowsAsArray: true,
				success: function (r) {
					var datas = []
					var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
					for (var i = 0; i < data.length; i++) {
						var temp = {
							"PartsAttr": data[i].PartsAttr,
							"FeatLebel": data[i].FeatLebel,
							"MPSwift": data[i].MPSwift,
						}
						datas.push(temp)
					}
					cb(null, datas);
				},
				error: sender.error
			})
		}
		function funArea12(cb) {
			yjDBService.exec({
				sql: sql_Area12,
				parameters: [comboClass, xProp12],
				rowsAsArray: true,
				success: function (r) {
					var datas = []
					var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
					for (var i = 0; i < data.length; i++) {
						var temp = {
							"PartsAttr": data[i].PartsAttr,
							"FeatLebel": data[i].FeatLebel,
							"MPSwift": data[i].MPSwift,
						}
						datas.push(temp)
					}
					cb(null, datas);
				},
				error: sender.error
			})
		}
		function funArea13(cb) {
			yjDBService.exec({
				sql: sql_Area13,
				parameters: [comboClass, xProp13],
				rowsAsArray: true,
				success: function (r) {
					var datas = []
					var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
					for (var i = 0; i < data.length; i++) {
						var temp = {
							"PartsAttr": data[i].PartsAttr,
							"FeatLebel": data[i].FeatLebel,
							"MPSwift": data[i].MPSwift,
						}
						datas.push(temp)
					}
					cb(null, datas);
				},
				error: sender.error
			})
		}
		function funArea14(cb) {
			yjDBService.exec({
				sql: sql_Area14,
				parameters: [comboClass, xProp14],
				rowsAsArray: true,
				success: function (r) {
					var datas = []
					var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
					for (var i = 0; i < data.length; i++) {
						var temp = {
							"PartsAttr": data[i].PartsAttr,
							"FeatLebel": data[i].FeatLebel,
							"MPSwift": data[i].MPSwift,
						}
						datas.push(temp)
					}
					cb(null, datas);
				},
				error: sender.error
			})
		}
		function funArea15(cb) {
			yjDBService.exec({
				sql: sql_Area15,
				parameters: [comboClass, xProp15],
				rowsAsArray: true,
				success: function (r) {
					var datas = []
					var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
					for (var i = 0; i < data.length; i++) {
						var temp = {
							"PartsAttr": data[i].PartsAttr,
							"FeatLebel": data[i].FeatLebel,
							"MPSwift": data[i].MPSwift,
						}
						datas.push(temp)
					}
					cb(null, datas);
				},
				error: sender.error
			})
		}
		function funArea16(cb) {
			yjDBService.exec({
				sql: sql_Area16,
				parameters: [comboClass, xProp16],
				rowsAsArray: true,
				success: function (r) {
					var datas = []
					var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
					for (var i = 0; i < data.length; i++) {
						var temp = {
							"PartsAttr": data[i].PartsAttr,
							"FeatLebel": data[i].FeatLebel,
							"MPSwift": data[i].MPSwift,
						}
						datas.push(temp)
					}
					cb(null, datas);
				},
				error: sender.error
			})
		}
		function funArea17(cb) {
			yjDBService.exec({
				sql: sql_Area17,
				parameters: [comboClass, xProp17],
				rowsAsArray: true,
				success: function (r) {
					var datas = []
					var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
					for (var i = 0; i < data.length; i++) {
						var temp = {
							"PartsAttr": data[i].PartsAttr,
							"FeatLebel": data[i].FeatLebel,
							"MPSwift": data[i].MPSwift,
						}
						datas.push(temp)
					}
					cb(null, datas);
				},
				error: sender.error
			})
		}
		function funArea18(cb) {
			yjDBService.exec({
				sql: sql_Area18,
				parameters: [comboClass, xProp18],
				rowsAsArray: true,
				success: function (r) {
					var datas = []
					var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
					for (var i = 0; i < data.length; i++) {
						var temp = {
							"PartsAttr": data[i].PartsAttr,
							"FeatLebel": data[i].FeatLebel,
							"MPSwift": data[i].MPSwift,
						}
						datas.push(temp)
					}
					cb(null, datas);
				},
				error: sender.error
			})
		}
		function funArea19(cb) {
			yjDBService.exec({
				sql: sql_Area19,
				parameters: [comboClass, xProp19],
				rowsAsArray: true,
				success: function (r) {
					var datas = []
					var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
					for (var i = 0; i < data.length; i++) {
						var temp = {
							"PartsAttr": data[i].PartsAttr,
							"FeatLebel": data[i].FeatLebel,
							"MPSwift": data[i].MPSwift,
						}
						datas.push(temp)
					}
					cb(null, datas);
				},
				error: sender.error
			})
		}
		function funArea20(cb) {
			yjDBService.exec({
				sql: sql_Area20,
				parameters: [comboClass, xProp20],
				rowsAsArray: true,
				success: function (r) {
					var datas = []
					var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
					for (var i = 0; i < data.length; i++) {
						var temp = {
							"PartsAttr": data[i].PartsAttr,
							"FeatLebel": data[i].FeatLebel,
							"MPSwift": data[i].MPSwift,
						}
						datas.push(temp)
					}
					cb(null, datas);
				},
				error: sender.error
			})
		}
		function runEngExp(yYear, yRule, yBorn, Mark, Swift, PDesc, PSort, PValue) {

			var sql = " insert into `auto_exp` (`Parts_Year`, `Parts_Rule` , `Parts_Class` , `Parts_Code`, `Parts_Old_Code`,`Parts_Old_Name`,  `MPSwift`, " +
				" `ExpSN` , `ExpMark` ,`ExpSrc` ,`PropDesc` , `PartsSort`,  `PropValue` , `Parts_Date`,  `Status`  )" +
				" VALUES ( ?,?,?,?,?,?,?,?,?,?,  ?,?,?,?,?   )";
			// console.log("池夏", Mark, " 田 ", PDesc, " 间 ", PValue);
			var ExpSN = Mark;
			var ExpMark = Mark;
			var ExpSrc = '1';
			var Status = '1';
			yjDBService.exec({
				sql: sql,
				parameters: [yYear, yRule, PartsClass, yBorn, yBorn, PartsName, Swift,
					ExpSN, ExpMark, ExpSrc, PDesc, PSort, PValue, PartsApplyDate, Status],
				rowsAsArray: true,
				success: function (result) {
					// var data=yjDB.dataSet2ObjectList(result.meta,result.rows);
					// var retcode = { "status": "applyOK" };
					// sender.success(retcode);
					// console.log("前世",result);
				},
				// success :sender.success,
				error: sender.error
			});
		}
	}
}

			// var data=yjDB.dataSet2ObjectList(result.meta,result.rows);
			    //   success : function(result) {
			    //       var retcode={"status":"OK"};
			    //       sender.success(retcode);
			    //   	console.log("為何不说话",result);
			    //   },
				    // success :sender.success,