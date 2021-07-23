require("../../client/js/Date.js");
require("../../client/js/funs.js");
module.exports = function (sender) {
	//RemainVisit
	var yjDBService_sqlserver = global.yjRequire("yujiang.Foil", "yjDBService.engine.sqlserver");
	var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
	var yjDB = global.yjRequire("yujiang.Foil").yjDB;
	var yjDBServiceUtil = global.yjRequire("yujiang.Foil", 'yjDBService.util.js');
	var async = require("async");
	 
	// var Pattern = sender.req.query.Pattern;
	var Advstr = sender.req.query.Advstr;
	var Micstr = sender.req.query.Micstr;
	var qryMicroName =  '';
	var qryMicroOrig =  '';
	var qryMicroDept =  '';
	var qryMicroGroup =  '';
	var qryMicroWord =  '';
	var qryMicroRole =  '';
	// console.log("啊", Advstr);
	// console.log("浴", Micstr);  
	if ( Micstr != undefined && Micstr != null   ) {
		qryMicroName =  Micstr.MicroName;
		qryMicroOrig =  Micstr.MicroOrig;
		qryMicroGroup =  Micstr.MicroGroup;
		qryMicroDept =  Micstr.MicroDept;
		qryMicroWord =  Micstr.MicroWord;
		qryMicroRole =  Micstr.MicroRole;
		console.log("酒:", qryMicroOrig,"啬",qryMicroGroup);
		console.log("温:", qryMicroName,"暖",qryMicroRole);
	}else{
		// console.log("品:", qryMicroName);
	}

	var weekbeg = Advstr.weekbeg;
	var weekend = Advstr.weekend; 
	var queryBillNo = Advstr.BillNo;
	var queryApplicNo = Advstr.ApplicNo;
	var Pattern = Advstr.Pattern;
	var queryStaffName = Advstr.StaffName;
	var arrange = sender.req.query.arrange;
	var pick = sender.req.query.pick;
	var CapMode = Advstr.CapMode;
	if (arrange == 'ClaimSite') {
		if (pick == 'A') {
			ClaimSiteA();
		}
		if (pick == 'B') {
			ClaimSiteB();
		}
	}
	if (arrange == 'Fee') {
		if (pick == 'A') {
			HandleStockA();
		}
		if (pick == 'B') {
			HandleStockB();
		}
	}
	if (arrange == 'Exp') {
		if (pick == 'A') {
			HandleFundA();
		}
		if (pick == 'B') {
			HandleFundB();
		}
	}
	function ClaimSiteA() {
		var BguYear = Advstr.BguYear;
		var BguDate =  BguYear+'-01-01';
		var EndDate =  BguYear+'-12-31';
		var DeptName = Advstr.DeptName;
		var filter = " 1=1 AND ( ClaimStatus= 'T' OR ClaimStatus ='V' ) ";
		var orderBy = '';
		var limit = '5000';
		var capacity = '';
		var SQLExecute =
			" SELECT  A.`DBID`, A.`BillNo`,  A.`ListNo`, A.`Formkind` ,A.`Subject` , A.`RequestDate`,  A.`ProjectNo`, A. `ApplicNo`,  " +
			" A.`DeptName`, A.`UnitName`, A.`StaffID`, A.`StaffName` ,trul.`MagName`  ,trul.`VipName`  , trul.`PurName`  ,trul.`PexName` ," +
			" trul.`CfoName`, A.`TotalValue`, A. `Currency`,  A.`Payment`, A. `Explanation`,   " +
			"  A.`EntryDate`, trul.`SendStatus` ,  trul.`CurLevel` ,  trul.`TermiLevel` ,  trul.`CurWorkId` ,  " +
			" trul.`CurName` ,   trul.`ClaimText` , trul.`SendText` ,tdtl.BudgetItem , " +
			" clm.`Surplus`, clm.`IsOver`,clm.`SemStatus`, clm.`SemText` from  bgu_purchmain A LEFT JOIN bgu_rule trul on A.BillNo =trul.BillNo " +
			"  LEFT JOIN bgu_purchdetail tdtl on A.BillNo =tdtl.BillNo  AND tdtl.SNNo = '1'  " +
			"  LEFT JOIN bgu_claim clm on A.BillNo =clm.BillNo  ";
		if (BguYear != "" && BguYear != "null" && BguYear != undefined && BguYear.length > 0) {
			console.log("...BguDate", BguDate);
			capacity += " AND A.EntryDate <= " + "'" + EndDate + "'  AND A.EntryDate >= " + "'" + BguDate + "' ";
		}
		if (DeptName != "" && DeptName != "null" && DeptName != undefined && DeptName.length > 0) {
			console.log("...DeptName", DeptName);
			capacity += " AND A.DeptName = " + "'" + DeptName + "' ";
		}
		if (weekbeg != "" && weekbeg != "null" && weekbeg != undefined && weekbeg.length > 0) {
			// console.log("...开始日", weekbeg);
			capacity += " AND A.EntryDate >= " + "'" + weekbeg + "' ";
		}
		if (weekend != "" && weekend != "null" && weekend != undefined && weekend.length > 0) {
			// console.log("...结束日", weekend);
			capacity += " AND A.EntryDate <= " + "'" + weekend + "' ";
		}
		if (queryBillNo != "" && queryBillNo != "null" && queryBillNo != undefined && queryBillNo.length > 0) {
			// console.log("...文号 <", queryBillNo, ">");
			capacity += " AND A.BillNo  = " + "'" + queryBillNo + "' ";
		}
		if (queryApplicNo != "" && queryApplicNo != "null" && queryApplicNo != undefined && queryApplicNo.length > 0) {
			// console.log("...申请号 <", queryApplicNo, ">");
			capacity += " AND A.ApplicNo  = " + "'" + queryApplicNo + "' ";
		}
		if (qryMicroName != "" && qryMicroName != "null" && qryMicroName != undefined && qryMicroName.length > 0) {
			// console.log("...过滤人名 <", qryMicroName, ">");
			capacity += " AND ( ";
			capacity += " A.StaffName  = " + "'" + qryMicroName + "' OR trul.CurName  = " + "'" + qryMicroName + "'  ";
			capacity += "  OR  trul.DeptLabel  = " + "'" + qryMicroName + "'  ";
			capacity += "  OR  trul.MagName  = " + "'" + qryMicroName + "'  ";
			capacity += "  OR  trul.VipName  = " + "'" + qryMicroName + "'  ";
			capacity += "  OR  trul.PurName  = " + "'" + qryMicroName + "'  ";
			capacity += "  OR  trul.PexName  = " + "'" + qryMicroName + "'  ";
			capacity += "  OR  trul.CfoName  = " + "'" + qryMicroName + "'  ";
			capacity += "  OR  trul.PsdName  = " + "'" + qryMicroName + "'  ";
			capacity += "  OR  trul.CeoName  = " + "'" + qryMicroName + "'  ";
			capacity += "  OR  trul.BodName  = " + "'" + qryMicroName + "'  ";
			capacity += " ) ";
		}
		// console.log("1335135135",qryMicroGroup);
		// console.log("879876554",qryMicroRole);
		// console.log("963258744",qryMicroOrig);
		if (qryMicroGroup != "" && qryMicroGroup != "null" && qryMicroGroup != undefined && qryMicroGroup.length > 0) {
			if (qryMicroGroup == "工程部-MIS课" ||qryMicroGroup == "财务部-财务组"  ) {
			
			}else if (qryMicroRole == "CEO" ||qryMicroRole == "董事长"  ) {
			
			}else{
				if (qryMicroOrig != "" && qryMicroOrig != "null" && qryMicroOrig != undefined && qryMicroOrig.length > 0) {
					capacity += " AND ( ";
					capacity += "     trul.OrigLabel  = " + "'" + qryMicroOrig + "'  ";
					capacity += " ) ";
				}
			}	
		}else{
			
		}
		if (qryMicroDept != "" && qryMicroDept != "null" && qryMicroDept != undefined && qryMicroDept.length > 0) {
			// console.log("...过滤部 <", qryMicroDept, ">");
			capacity += " AND ( ";
			capacity += "     trul.DeptLabel  = " + "'" + qryMicroDept + "'  ";
			capacity += " ) ";
		}
		if (qryMicroWord != "" && qryMicroWord != "null" && qryMicroWord != undefined && qryMicroWord.length > 0) {
			// console.log("...过滤字 <", qryMicroWord, ">");
			capacity += " AND ( ";
			capacity += "     tdtl.ItemNo  = " + "'" + qryMicroWord + "'  ";
			capacity += " ) ";
		}
		if (queryStaffName != "" && queryStaffName != "null" && queryStaffName != undefined && queryStaffName.length > 0) {
			// console.log("...本人 <", queryStaffName, ">");
			capacity += " AND ( ";
			capacity += " A.StaffName  = " + "'" + queryStaffName + "' OR trul.CurName  = " + "'" + queryStaffName + "'  ";
			capacity += "  OR  trul.OppName  = " + "'" + queryStaffName + "'  ";
			capacity += "  OR  trul.MagName  = " + "'" + queryStaffName + "'  ";
			capacity += "  OR  trul.VipName  = " + "'" + queryStaffName + "'  ";
			capacity += "  OR  trul.PurName  = " + "'" + queryStaffName + "'  ";
			capacity += "  OR  trul.PexName  = " + "'" + queryStaffName + "'  ";
			capacity += "  OR  trul.CfoName  = " + "'" + queryStaffName + "'  ";
			capacity += "  OR  trul.PsdName  = " + "'" + queryStaffName + "'  ";
			capacity += "  OR  trul.CeoName  = " + "'" + queryStaffName + "'  ";
			capacity += "  OR  trul.BodName  = " + "'" + queryStaffName + "'  ";
			capacity += " ) ";
		}
		if (Pattern != "" && Pattern != "null" && Pattern != undefined && Pattern.length > 0) {
			// console.log("...状态 <", Pattern, ">");
			capacity += " AND (trul.CurStatus  = " + "'" + Pattern + "' OR trul.SendStatus  = " + "'" + Pattern + "' )  ";
		}
		if (filter != "" && filter != undefined) {
			SQLExecute = SQLExecute + " WHERE " + filter;
		}
		if (capacity != "" && capacity != undefined) {
			SQLExecute = SQLExecute + capacity;
		}
		if (limit != "" && limit != undefined) {
			SQLExecute = SQLExecute + " LIMIT " + limit;
		}
		console.log("云缨A",SQLExecute);
		var banWord1 = new RegExp("delete");
		var banWord2 = new RegExp("update");
		var banWord3 = new RegExp("insert");
		var resultCheckSQL = banWord1.test(SQLExecute) || banWord2.test(SQLExecute) || banWord3.test(SQLExecute);
		var dataArr = [];
		var paramList = [];
		if (resultCheckSQL) {
			console.log("接受到含有非法关键字的SQL:" + SQLExecute);
		} else {
			yjDBService.exec({
				sql: SQLExecute,
				parameters: paramList,
				rowsAsArray: false,
				success: function (data) {
					for (var i = 0; i < data.length; i++) {
						var obj = {
							"DBID": data[i].DBID,
							"BillNo": data[i].BillNo,
							"Formkind": data[i].Formkind,
							"Subject": data[i].Subject,
							"BudgetItem": data[i].BudgetItem,
							"ListNo": data[i].ListNo,
							"ProjectNo": data[i].ProjectNo,
							"ApplicNo": data[i].ApplicNo,
							"DeptName": data[i].DeptName,
							"UnitName": data[i].UnitName,
							"StaffName": data[i].StaffName,
							"PurName": data[i].PurName,
							"PexName": data[i].PexName,
							"TotalValue": data[i].TotalValue,
							"Currency": data[i].Currency,
							"Payment": data[i].Payment,
							"RequestDate": data[i].RequestDate,
							"EntryDate": data[i].EntryDate,
							"CurName": data[i].CurName,
							"SendText": data[i].SendText,
							"ClaimText": data[i].ClaimText,
							"SemText": data[i].SemText,
							"SemStatus": data[i].SemStatus,
							"IsOver": data[i].IsOver,
							"Surplus": data[i].Surplus,
							"Explanation": (data[i].Explanation).length > 8 ? (data[i].Explanation.substring(0, 8)) : data[i].Explanation,
							"MagName": data[i].MagName,
							"VipName": data[i].VipName,
							"CfoName": data[i].CfoName,
						}
						dataArr.push(obj);
					}
					// var dump = JSON.stringify(dataArr);
					// if (dump.length > 1000) {
					// 	console.log("别有洞天:" + dump.substring(0, 1000));
					// } else {
					// 	console.log("别有洞天:" + JSON.stringify(dataArr));
					// }
					sender.success(dataArr);
				},
				error: sender.error
			});
		}
	}
	function ClaimSiteB() {
		var BguYear = Advstr.BguYear;
		var BguDate =  BguYear+'-01-01';
		var EndDate =  BguYear+'-12-31';
		console.log("覆巢", BguYear);
		var DeptName = Advstr.DeptName;
		console.log("覆巢", DeptName);
		var filter = " 1=1 AND ( ClaimStatus= 'T' OR ClaimStatus ='V' ) ";
		var orderBy = '';
		var limit = '5000';
		var capacity = '';
		var SQLExecute =
		" SELECT  A.`DBID`, A.`BillNo`,   A.`Formkind` ,A.`Subject` ,  " +
		" A. `ApplicNo`,    A.`DeptName`, A.`UnitName`, A.`StaffID`, A.`StaffName` , " +
	      " trul.`MagName`  ,trul.`VipName`  , trul.`PurName`  ,trul.`PexName` ,  " +
	      " trul.`CfoName`, A.`TotalValue`,    A. `Explanation`,  A.`EntryDate`, trul.`SendStatus` ," +
		"  trul.`CurLevel` ,  trul.`TermiLevel` ,  trul.`CurWorkId` , trul.`CurName` ,  " +
		" trul.`ClaimText` ,  trul.`SendText`  ,  " +
		" clm.`Surplus`, clm.`IsOver`, clm.`SemStatus`, clm.`SemText` " +
		" from  bgu_tripmain A LEFT JOIN bgu_rule trul on A.BillNo =trul.BillNo   " +
		" LEFT JOIN bgu_tripdetail tdtl on A.BillNo =tdtl.BillNo  AND tdtl.SNNo = '1'   " + 
		" LEFT JOIN bgu_claim clm on A.BillNo =clm.BillNo   " ;
		if (BguYear != "" && BguYear != "null" && BguYear != undefined && BguYear.length > 0) {
			console.log("...BguDate", BguDate);
			capacity += " AND A.EntryDate <= " + "'" + EndDate + "'  AND A.EntryDate >= " + "'" + BguDate + "' ";
		}
		if (qryMicroGroup != "" && qryMicroGroup != "null" && qryMicroGroup != undefined && qryMicroGroup.length > 0) {
			if (qryMicroGroup == "工程部-MIS课" ||qryMicroGroup == "财务部-财务组"  ) {
			
			}else if (qryMicroRole == "CEO" ||qryMicroRole == "董事长"  ) {
			
			}else{
				if (qryMicroOrig != "" && qryMicroOrig != "null" && qryMicroOrig != undefined && qryMicroOrig.length > 0) {
					// console.log("...财务部-财务组 工程部-MIS课 <", qryMicroOrig, ">");
					capacity += " AND ( ";
					capacity += "     trul.OrigLabel  = " + "'" + qryMicroOrig + "'  ";
					capacity += " ) ";
				}
			}	
		}else{
			
		}
		if (DeptName != "" && DeptName != "null" && DeptName != undefined && DeptName.length > 0) {
			console.log("...DeptName", DeptName);
			capacity += " AND A.DeptName = " + "'" + DeptName + "' ";
		}
		if (weekbeg != "" && weekbeg != "null" && weekbeg != undefined && weekbeg.length > 0) {
			// console.log("...开始日", weekbeg);
			capacity += " AND A.EntryDate >= " + "'" + weekbeg + "' ";
		}
		if (weekend != "" && weekend != "null" && weekend != undefined && weekend.length > 0) {
			// console.log("...结束日", weekend);
			capacity += " AND A.EntryDate <= " + "'" + weekend + "' ";
		}
		if (queryBillNo != "" && queryBillNo != "null" && queryBillNo != undefined && queryBillNo.length > 0) {
			// console.log("...文号 <", queryBillNo, ">");
			capacity += " AND A.BillNo  = " + "'" + queryBillNo + "' ";
		}
		 
		if (qryMicroName != "" && qryMicroName != "null" && qryMicroName != undefined && qryMicroName.length > 0) {
			// console.log("...过滤人名 <", qryMicroName, ">");
			capacity += " AND ( ";
			capacity += " A.StaffName  = " + "'" + qryMicroName + "' OR trul.CurName  = " + "'" + qryMicroName + "'  ";
			capacity += "  OR  trul.DeptLabel  = " + "'" + qryMicroName + "'  ";
			capacity += "  OR  trul.MagName  = " + "'" + qryMicroName + "'  ";
			capacity += "  OR  trul.VipName  = " + "'" + qryMicroName + "'  ";
			capacity += "  OR  trul.PurName  = " + "'" + qryMicroName + "'  ";
			capacity += "  OR  trul.PexName  = " + "'" + qryMicroName + "'  ";
			capacity += "  OR  trul.CfoName  = " + "'" + qryMicroName + "'  ";
			capacity += "  OR  trul.PsdName  = " + "'" + qryMicroName + "'  ";
			capacity += "  OR  trul.CeoName  = " + "'" + qryMicroName + "'  ";
			capacity += "  OR  trul.BodName  = " + "'" + qryMicroName + "'  ";
			capacity += " ) ";
		}
		if (qryMicroDept != "" && qryMicroDept != "null" && qryMicroDept != undefined && qryMicroDept.length > 0) {
			// console.log("...过滤部 <", qryMicroDept, ">");
			capacity += " AND ( ";
			capacity += "     trul.DeptLabel  = " + "'" + qryMicroDept + "'  ";
			capacity += " ) ";
		}
		 
		if (queryStaffName != "" && queryStaffName != "null" && queryStaffName != undefined && queryStaffName.length > 0) {
			// console.log("...本人 <", queryStaffName, ">");
			capacity += " AND ( ";
			capacity += " A.StaffName  = " + "'" + queryStaffName + "' OR trul.CurName  = " + "'" + queryStaffName + "'  ";
			capacity += "  OR  trul.OppName  = " + "'" + queryStaffName + "'  ";
			capacity += "  OR  trul.MagName  = " + "'" + queryStaffName + "'  ";
			capacity += "  OR  trul.VipName  = " + "'" + queryStaffName + "'  ";
			capacity += "  OR  trul.PurName  = " + "'" + queryStaffName + "'  ";
			capacity += "  OR  trul.PexName  = " + "'" + queryStaffName + "'  ";
			capacity += "  OR  trul.CfoName  = " + "'" + queryStaffName + "'  ";
			capacity += "  OR  trul.PsdName  = " + "'" + queryStaffName + "'  ";
			capacity += "  OR  trul.CeoName  = " + "'" + queryStaffName + "'  ";
			capacity += "  OR  trul.BodName  = " + "'" + queryStaffName + "'  ";
			capacity += " ) ";
		}
		if (Pattern != "" && Pattern != "null" && Pattern != undefined && Pattern.length > 0) {
			// console.log("...状态 <", Pattern, ">");
			capacity += " AND (trul.CurStatus  = " + "'" + Pattern + "' OR trul.SendStatus  = " + "'" + Pattern + "' )  ";
		}
		if (filter != "" && filter != undefined) {
			SQLExecute = SQLExecute + " WHERE " + filter;
		}
		if (capacity != "" && capacity != undefined) {
			SQLExecute = SQLExecute + capacity;
		}
		if (limit != "" && limit != undefined) {
			SQLExecute = SQLExecute + " LIMIT " + limit;
		}
		console.log("云缨",SQLExecute);
		var banWord1 = new RegExp("delete");
		var banWord2 = new RegExp("update");
		var banWord3 = new RegExp("insert");
		var resultCheckSQL = banWord1.test(SQLExecute) || banWord2.test(SQLExecute) || banWord3.test(SQLExecute);
		var dataArr = [];
		var paramList = [];
		if (resultCheckSQL) {
			console.log("接受到含有非法关键字的SQL:" + SQLExecute);
		} else {
			yjDBService.exec({
				sql: SQLExecute,
				parameters: paramList,
				rowsAsArray: false,
				success: function (data) {
					for (var i = 0; i < data.length; i++) {
						var obj = {
							"DBID": data[i].DBID,
							"BillNo": data[i].BillNo,
							"Formkind": data[i].Formkind,
							"Subject": data[i].Subject,
							"DeptName": data[i].DeptName,
							"UnitName": data[i].UnitName,
							"StaffID": data[i].StaffID,
							"StaffName": data[i].StaffName,
							"PurName": data[i].PurName,
							"PexName": data[i].PexName,
							"TotalValue": data[i].TotalValue,
							"EntryDate": data[i].EntryDate, 
							"CurName": data[i].CurName, 
							"SemText": data[i].SemText,
							"SendText": data[i].SendText,
							"ClaimText": data[i].ClaimText,
							"SemStatus": data[i].SemStatus,
							"Surplus": data[i].Surplus,
							"IsOver": data[i].IsOver,
							"Explanation": (data[i].Explanation).length > 8 ? (data[i].Explanation.substring(0, 8)) : data[i].Explanation,
							"MagName": data[i].MagName,
							"VipName": data[i].VipName,
							"CfoName": data[i].CfoName,
						}
						dataArr.push(obj);
					}
					// var dump = JSON.stringify(dataArr);
					// if (dump.length > 1000) {
					// 	console.log("镜水月:" + dump.substring(0, 1000));
					// } else {
					// 	console.log("镜水月:" + JSON.stringify(dataArr));
					// }
					sender.success(dataArr);
				},
				error: sender.error
			});
		}
	}
	function HandleStockA() {
		var filter = " 1=1 ";
		var orderBy = '';
		var limit = '5000';
		var capacity = '';
		var SQLExecute =
			" SELECT  A.`DBID`, A.`BillNo`,  A.`ListNo`, A.`Formkind` ,A.`Subject` , A.`RequestDate`,  A.`ProjectNo`, A. `ApplicNo`,  " +
			" A.`DeptName`, A.`UnitName`, A.`StaffID`, A.`StaffName` ,trul.`MagName`  ,trul.`VipName`  , trul.`PurName`  ,trul.`PexName` ," +
			" trul.`CfoName`, trul.`CurJob`, A.`TotalValue`, A.`ExceedValue`, A. `Currency`,  A.`Payment`, A. `Explanation`,   " +
			"  A.`EntryDate`, trul.`SendStatus` ,  trul.`CurLevel` ,  trul.`TermiLevel` ,  trul.`CurWorkId` ,  " +
			" trul.`CurName` ,  trul.`CurStatus`,  trul.`CurText` ,  trul.`SendText` , trul.`ClaimText` ,tdtl.BudgetItem " +
			"  from  bgu_purchmain A LEFT JOIN bgu_rule trul on A.BillNo =trul.BillNo " +
			"  LEFT JOIN bgu_purchdetail tdtl on A.BillNo = tdtl.BillNo  AND tdtl.SNNo = '1'  ";
		if (weekbeg != "" && weekbeg != "null" && weekbeg != undefined && weekbeg.length > 0) {
			// console.log("...开始日", weekbeg);
			capacity += " AND A.EntryDate >= " + "'" + weekbeg + "' ";
		}
		if (weekend != "" && weekend != "null" && weekend != undefined && weekend.length > 0) {
			// console.log("...结束日", weekend);
			capacity += " AND A.EntryDate <= " + "'" + weekend + "' ";
		}
		if (queryBillNo != "" && queryBillNo != "null" && queryBillNo != undefined && queryBillNo.length > 0) {
			// console.log("...文号 <", queryBillNo, ">");
			capacity += " AND A.BillNo  = " + "'" + queryBillNo + "' ";
		}
		if (queryApplicNo != "" && queryApplicNo != "null" && queryApplicNo != undefined && queryApplicNo.length > 0) {
			// console.log("...申请号 <", queryApplicNo, ">");
			capacity += " AND A.ApplicNo  = " + "'" + queryApplicNo + "' ";
		}
		if (qryMicroName != "" && qryMicroName != "null" && qryMicroName != undefined && qryMicroName.length > 0) {
			// console.log("...过滤人名 <", qryMicroName, ">");
			capacity += " AND ( ";
			capacity += " A.StaffName  = " + "'" + qryMicroName + "' OR trul.CurName  = " + "'" + qryMicroName + "'  ";
			capacity += "  OR  trul.DeptLabel  = " + "'" + qryMicroName + "'  ";
			capacity += "  OR  trul.MagName  = " + "'" + qryMicroName + "'  ";
			capacity += "  OR  trul.VipName  = " + "'" + qryMicroName + "'  ";
			capacity += "  OR  trul.PurName  = " + "'" + qryMicroName + "'  ";
			capacity += "  OR  trul.PexName  = " + "'" + qryMicroName + "'  ";
			capacity += "  OR  trul.CfoName  = " + "'" + qryMicroName + "'  ";
			capacity += "  OR  trul.PsdName  = " + "'" + qryMicroName + "'  ";
			capacity += "  OR  trul.CeoName  = " + "'" + qryMicroName + "'  ";
			capacity += "  OR  trul.BodName  = " + "'" + qryMicroName + "'  ";
			capacity += " ) ";
		}
		if (qryMicroGroup != "" && qryMicroGroup != "null" && qryMicroGroup != undefined && qryMicroGroup.length > 0) {
			if (qryMicroGroup == "工程部-MIS课" ||qryMicroGroup == "财务部-财务组"  ) {
			
			}else if (qryMicroRole == "CEO" ||qryMicroRole == "董事长"  ) {
			
			}else{
				if (qryMicroOrig != "" && qryMicroOrig != "null" && qryMicroOrig != undefined && qryMicroOrig.length > 0) {
					// console.log("...财务部-财务组 工程部-MIS课 <", qryMicroOrig, ">");
					capacity += " AND ( ";
					capacity += "     trul.OrigLabel  = " + "'" + qryMicroOrig + "'  ";
					capacity += " ) ";
				}
			}	
		}else{
			
		}
		
		if (qryMicroDept != "" && qryMicroDept != "null" && qryMicroDept != undefined && qryMicroDept.length > 0) {
			// console.log("...过滤部 <", qryMicroDept, ">");
			capacity += " AND ( ";
			capacity += "     trul.DeptLabel  = " + "'" + qryMicroDept + "'  ";
			capacity += " ) ";
		}
		if (qryMicroWord != "" && qryMicroWord != "null" && qryMicroWord != undefined && qryMicroWord.length > 0) {
			// console.log("...过滤字 <", qryMicroWord, ">");
			capacity += " AND ( ";
			capacity += "     tdtl.ItemNo  = " + "'" + qryMicroWord + "'  ";
			capacity += " ) ";
		}
		if (queryStaffName != "" && queryStaffName != "null" && queryStaffName != undefined && queryStaffName.length > 0) {
			// console.log("...本人 <", queryStaffName, ">");
			capacity += " AND ( ";
			capacity += " A.StaffName  = " + "'" + queryStaffName + "' OR trul.CurName  = " + "'" + queryStaffName + "'  ";
			capacity += "  OR  trul.OppName  = " + "'" + queryStaffName + "'  ";
			capacity += "  OR  trul.MagName  = " + "'" + queryStaffName + "'  ";
			capacity += "  OR  trul.VipName  = " + "'" + queryStaffName + "'  ";
			capacity += "  OR  trul.PurName  = " + "'" + queryStaffName + "'  ";
			capacity += "  OR  trul.PexName  = " + "'" + queryStaffName + "'  ";
			capacity += "  OR  trul.CfoName  = " + "'" + queryStaffName + "'  ";
			capacity += "  OR  trul.PsdName  = " + "'" + queryStaffName + "'  ";
			capacity += "  OR  trul.CeoName  = " + "'" + queryStaffName + "'  ";
			capacity += "  OR  trul.BodName  = " + "'" + queryStaffName + "'  ";
			capacity += " ) ";
		}
		if (Pattern != "" && Pattern != "null" && Pattern != undefined && Pattern.length > 0) {
			// console.log("...状态 <", Pattern, ">");
			capacity += " AND (trul.CurStatus  = " + "'" + Pattern + "' OR trul.SendStatus  = " + "'" + Pattern + "' )  ";
		}
		if (filter != "" && filter != undefined) {
			SQLExecute = SQLExecute + " WHERE " + filter;
		}
		if (capacity != "" && capacity != undefined) {
			SQLExecute = SQLExecute + capacity;
		}
		if (limit != "" && limit != undefined) {
			SQLExecute = SQLExecute + " LIMIT " + limit;
		}
		// console.log("寒流:" + SQLExecute);
		var banWord1 = new RegExp("delete");
		var banWord2 = new RegExp("update");
		var banWord3 = new RegExp("insert");
		var resultCheckSQL = banWord1.test(SQLExecute) || banWord2.test(SQLExecute) || banWord3.test(SQLExecute);
		var dataArr = [];
		var paramList = [];
		if (resultCheckSQL) {
			console.log("接受到含有非法关键字的SQL:" + SQLExecute);
		} else {
			yjDBService.exec({
				sql: SQLExecute,
				parameters: paramList,
				rowsAsArray: false,
				success: function (data) {
					for (var i = 0; i < data.length; i++) {
						var Explanation =data[i].Explanation;
						if(Explanation !=undefined && Explanation!=null){
							 
						}else{
							Explanation ='';
						}
						var obj = {
							"DBID": data[i].DBID,
							"BillNo": data[i].BillNo,
							"Formkind": data[i].Formkind,
							"Subject": data[i].Subject,
							"BudgetItem": data[i].BudgetItem,
							"ListNo": data[i].ListNo,
							"ProjectNo": data[i].ProjectNo,
							"ApplicNo": data[i].ApplicNo,
							"DeptName": data[i].DeptName,
							"UnitName": data[i].UnitName,
							"StaffID": data[i].StaffID,
							"StaffName": data[i].StaffName,
							"MagName": data[i].MagName,
							"VipName": data[i].VipName,
							"PurName": data[i].PurName,
							"PexName": data[i].PexName,
							"CfoName": data[i].CfoName,
							"CurJob": data[i].CurJob,
							"TotalValue": data[i].TotalValue,
							"ExceedValue": data[i].ExceedValue,
							"Currency": data[i].Currency,
							"Payment": data[i].Payment,
							"EntryDate": data[i].EntryDate,
							"RequestDate": data[i].RequestDate,
							"CurName": data[i].CurName,
							"CurText": data[i].CurText,
							"SendText": data[i].SendText,
							"ClaimText": data[i].ClaimText,
							"Explanation":  (Explanation.length > 8 ? (Explanation.substring(0, 8)) :Explanation),
						}
						dataArr.push(obj);
					}
					 
					sender.success(dataArr);
				},
				error: sender.error
			});
		}
	}
	function HandleStockB() {
		var filter = " 1=1 ";
		var orderBy = '';
		var limit = '5000';
		var capacity = '';
		var SQLExecute =
			" SELECT  A.`DBID`, A.`BillNo`, A.`ApplicNo`, A.Formkind ,A.`Subject` , A.`BusiMan`, A.`BusiArea`, A.`LeaveDate`, A.`BackDate` ,"+
			" A.`StaffID`, A.`StaffName`, trul.`MagName`  ,trul.`VipName` ,trul.`PurName`  ,trul.`PexName`,trul.`CfoName` ,  "+
			" A.`DeptName`,  A.`UnitName`, A.`TotalValue`, A.`ExceedValue` ,  A.`IsOver`, A. `Overspend`,   " +
			" A.`EntryDate`, A.`Explanation`, trul.`SendStatus` ,  trul.`CurLevel` ,  trul.`TermiLevel` ,  trul.`CurWorkId` ,  " +
			" trul.`CurName` ,  trul.`CurStatus`,  trul.`CurText` ,  trul.`SendText` , trul.`CurJob`, tdtl.TicTotal " +
			"  from  bgu_tripmain A LEFT JOIN bgu_rule trul on A.BillNo =trul.BillNo " +
			"  LEFT JOIN bgu_tripdetail tdtl on A.BillNo =tdtl.BillNo  AND tdtl.SNNo = '1'  ";
		if (weekbeg != "" && weekbeg != "null" && weekbeg != undefined && weekbeg.length > 0) {
			// console.log("...开始日", weekbeg);
			capacity += " AND A.EntryDate >= " + "'" + weekbeg + "' ";
		}
		if (weekend != "" && weekend != "null" && weekend != undefined && weekend.length > 0) {
			// console.log("...结束日", weekend);
			capacity += " AND A.EntryDate <= " + "'" + weekend + "' ";
		}
		if (queryBillNo != "" && queryBillNo != "null" && queryBillNo != undefined && queryBillNo.length > 0) {
			// console.log("...文号 <", queryBillNo, ">");
			capacity += " AND A.BillNo  = " + "'" + queryBillNo + "' ";
		}
		if (queryApplicNo != "" && queryApplicNo != "null" && queryApplicNo != undefined && queryApplicNo.length > 0) {
			// console.log("...申请号 <", queryApplicNo, ">");
			capacity += " AND A.ApplicNo  = " + "'" + queryApplicNo + "' ";
		}
		if (queryStaffName != "" && queryStaffName != "null" && queryStaffName != undefined && queryStaffName.length > 0) {
			capacity += " AND (A.StaffName  = " + "'" + queryStaffName + "' OR trul.CurName  = " + "'" + queryStaffName + "' ) ";
		}
		if (Pattern != "" && Pattern != "null" && Pattern != undefined && Pattern.length > 0) {
			// console.log("...状态 <", Pattern, ">");
			capacity += " AND (trul.CurStatus  = " + "'" + Pattern + "' OR trul.SendStatus  = " + "'" + Pattern + "' )  ";
		}
		if (qryMicroGroup != "" && qryMicroGroup != "null" && qryMicroGroup != undefined && qryMicroGroup.length > 0) {
			if (qryMicroGroup == "工程部-MIS课" ||qryMicroGroup == "财务部-财务组"  ) {
			
			}else{
				if (qryMicroOrig != "" && qryMicroOrig != "null" && qryMicroOrig != undefined && qryMicroOrig.length > 0) {
					// console.log("...财务部-财务组 工程部-MIS课 <", qryMicroOrig, ">");
					capacity += " AND ( ";
					capacity += "     trul.OrigLabel  = " + "'" + qryMicroOrig + "'  ";
					capacity += " ) ";
				}
			}	
		}
		if (filter != "" && filter != undefined) {
			SQLExecute = SQLExecute + " WHERE " + filter;
		}
		if (capacity != "" && capacity != undefined) {
			SQLExecute = SQLExecute + capacity;
		}
		if (limit != "" && limit != undefined) {
			SQLExecute = SQLExecute + " LIMIT " + limit;
		}
		var banWord1 = new RegExp("delete");
		var banWord2 = new RegExp("update");
		var banWord3 = new RegExp("insert");
		var resultCheckSQL = banWord1.test(SQLExecute) || banWord2.test(SQLExecute) || banWord3.test(SQLExecute);
		var dataArr = [];
		var paramList = [];
		if (resultCheckSQL) {
			console.log("接受到含有非法关键字的SQL:" + SQLExecute);
		} else {
			yjDBService.exec({
				sql: SQLExecute,
				parameters: paramList,
				rowsAsArray: false,
				success: function (data) {
					for (var i = 0; i < data.length; i++) {
						var Overspend =data[i].Overspend;
						if(Overspend !=undefined && Overspend!=null){
							 
						}else{
							Overspend ='';
						}
						var Explanation =data[i].Explanation;
						if(Explanation !=undefined && Explanation!=null){
							 
						}else{
							Explanation ='';
						}
						var obj = {
							"DBID": data[i].DBID,
							"BillNo": data[i].BillNo,
							"Formkind": data[i].Formkind,
							"Subject": data[i].Subject,
							"ApplicNo": data[i].ApplicNo,
							"BusiMan": data[i].BusiMan,
							"BusiArea": data[i].BusiArea,
							"LeaveDate": data[i].LeaveDate,
							"BackDate": data[i].BackDate,
							"StaffID": data[i].StaffID,
							"StaffName": data[i].StaffName,
							"TotalValue": data[i].TotalValue,
							"ExceedValue": data[i].ExceedValue,
							"MagName": data[i].MagName,
							"VipName": data[i].VipName,
							"PurName": data[i].PurName,
							"PexName": data[i].PexName,
							"CfoName": data[i].CfoName,
							"DeptName": data[i].DeptName,
							"UnitName": data[i].UnitName,
							"IsOver": data[i].IsOver,
							"Overspend": (Overspend.length > 8 ? (Overspend.substring(0, 8)) :Overspend),
							"CurName": data[i].CurName,
							"CurText": data[i].CurText,
							"SendText": data[i].SendText,
							"CurJob": data[i].CurJob,
							"EntryDate": data[i].EntryDate,
							"Explanation":  (Explanation.length > 8 ? (Explanation.substring(0, 8)) :Explanation),
						}
						dataArr.push(obj);
					}
					// var dump = JSON.stringify(dataArr);
					// if (dump.length > 100) {
					// 	console.log("出差单:" + dump.substring(0, 100));
					// } else {
					// 	console.log("出差单:" + JSON.stringify(dataArr));
					// }
					sender.success(dataArr);
				},
				error: sender.error
			});
		}
	}
	
	function HandleFundB() {
		var filter = " 1=1 ";
		var orderBy = '';
		var limit = '5000';
		var capacity = '';
		var SQLExecute =
			" SELECT  A.`DBID`, A.`BillNo`, A.`ApplicNo`, A.Formkind ,A.`Subject` , A.`BusiMan`, A.`BusiArea`, A.`LeaveDate`, "+
			" A.`StaffID`, A.`StaffName`, trul.`MagName`  ,trul.`VipName` ,trul.`PurName`  ,trul.`PexName`,trul.`CfoName` ,  A.`DeptName`,  " +
			" A.`IsOver`, A. `RealValue` ,A. `Overspend`,   " +
			" A.`EntryDate`, A.`Explanation`, trul.`SendStatus` ,  trul.`CurLevel` ,  trul.`TermiLevel` ,  trul.`CurWorkId` ,  " +
			" trul.`CurName` ,  trul.`CurStatus`,  trul.`CurText` ,  trul.`SendText` ,tdtl.TicTotal " +
			"  from  bgu_tripmain A LEFT JOIN bgu_rule trul on A.BillNo =trul.BillNo " +
			"  LEFT JOIN bgu_tripdetail tdtl on A.BillNo =tdtl.BillNo  AND tdtl.SNNo = '1'  ";
		if (weekbeg != "" && weekbeg != "null" && weekbeg != undefined && weekbeg.length > 0) {
			// console.log("...开始日", weekbeg);
			capacity += " AND A.EntryDate >= " + "'" + weekbeg + "' ";
		}
		if (weekend != "" && weekend != "null" && weekend != undefined && weekend.length > 0) {
			// console.log("...结束日", weekend);
			capacity += " AND A.EntryDate <= " + "'" + weekend + "' ";
		}
		if (queryBillNo != "" && queryBillNo != "null" && queryBillNo != undefined && queryBillNo.length > 0) {
			// console.log("...文号 <", queryBillNo, ">");
			capacity += " AND A.BillNo  = " + "'" + queryBillNo + "' ";
		}
		if (queryApplicNo != "" && queryApplicNo != "null" && queryApplicNo != undefined && queryApplicNo.length > 0) {
			// console.log("...申请号 <", queryApplicNo, ">");
			capacity += " AND A.ApplicNo  = " + "'" + queryApplicNo + "' ";
		}
		if (queryStaffName != "" && queryStaffName != "null" && queryStaffName != undefined && queryStaffName.length > 0) {
			capacity += " AND (A.StaffName  = " + "'" + queryStaffName + "' OR trul.CurName  = " + "'" + queryStaffName + "' ) ";
		}
		if (Pattern != "" && Pattern != "null" && Pattern != undefined && Pattern.length > 0) {
			// console.log("...状态 <", Pattern, ">");
			capacity += " AND (trul.CurStatus  = " + "'" + Pattern + "' OR trul.SendStatus  = " + "'" + Pattern + "' )  ";
		}
		if (filter != "" && filter != undefined) {
			SQLExecute = SQLExecute + " WHERE " + filter;
		}
		if (capacity != "" && capacity != undefined) {
			SQLExecute = SQLExecute + capacity;
		}
		if (limit != "" && limit != undefined) {
			SQLExecute = SQLExecute + " LIMIT " + limit;
		}
		var banWord1 = new RegExp("delete");
		var banWord2 = new RegExp("update");
		var banWord3 = new RegExp("insert");
		var resultCheckSQL = banWord1.test(SQLExecute) || banWord2.test(SQLExecute) || banWord3.test(SQLExecute);
		var dataArr = [];
		var paramList = [];
		if (resultCheckSQL) {
			console.log("接受到含有非法关键字的SQL:" + SQLExecute);
		} else {
			yjDBService.exec({
				sql: SQLExecute,
				parameters: paramList,
				rowsAsArray: false,
				success: function (data) {
					console.log("曜子", data.length);
					for (var i = 0; i < data.length; i++) {
						var Explanation =data[i].Explanation;
						if(Explanation !=undefined && Explanation!=null){
							 
						}else{
							Explanation ='';
						}
						var obj = {
							"DBID": data[i].DBID,
							"BillNo": data[i].BillNo,
							"Formkind": data[i].Formkind,
							"Subject": data[i].Subject,
							"ApplicNo": data[i].ApplicNo,
							"BusiMan": data[i].BusiMan,
							"BusiArea": data[i].BusiArea,
							"LeaveDate": data[i].LeaveDate,
							"StaffID": data[i].StaffID,
							"StaffName": data[i].StaffName,
							"MagName": data[i].MagName,
							"VipName": data[i].VipName,
							"PurName": data[i].PurName,
							"PexName": data[i].PexName,
							"CfoName": data[i].CfoName,
							"DeptName": data[i].DeptName,
							"IsOver": data[i].IsOver,
							"RealValue": data[i].RealValue,
							"Overspend": data[i].Overspend,
							"CurName": data[i].CurName,
							"CurText": data[i].CurText,
							"SendText": data[i].SendText,
							"EntryDate": data[i].EntryDate,
							"Explanation":  (Explanation.length > 8 ? (Explanation.substring(0, 8)) :Explanation),
						}
						dataArr.push(obj);
					}
					// var dump = JSON.stringify(dataArr);
					// if (dump.length > 100) {
					// 	console.log("出差单:" + dump.substring(0, 100));
					// } else {
					// 	console.log("出差单:" + JSON.stringify(dataArr));
					// }
					sender.success(dataArr);
				},
				error: sender.error
			});
		}
	}
};
