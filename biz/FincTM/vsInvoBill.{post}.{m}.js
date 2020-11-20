module.exports = function (sender) {
	//RemainVisit
	var yjDBService_sqlserver = global.yjRequire("yujiang.Foil", "yjDBService.engine.sqlserver");
	var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
	var yjDB = global.yjRequire("yujiang.Foil").yjDB;
	var yjDBServiceUtil = global.yjRequire("yujiang.Foil", 'yjDBService.util.js');
	var async = require("async");
	// var connectionOptions=yjGlobal.config.db_Connection.erp_Connection.connection;
	var connectionOptions = yjGlobal.config.db_Connection.rich_T9.connection;
	var connection = null;
	if (connectionOptions) {
		connection = yjDBServiceUtil.extractConnectionOptions(connectionOptions);
	}
	var Pattern = sender.req.query.Pattern;
	var Advstr = sender.req.query.Advstr;
	var SIGN = Advstr.SIGN;
	var BillNo = Advstr.BillNo;
	var placeForB = Advstr.placeForB;
	var placeForE = Advstr.placeForE;
	var PersonId = Advstr.PersonId;
	console.log("江南:" ,SIGN, "才 " ,BillNo , "良:" ,placeForB ,"辰:" ,placeForE,"佳人:" ,PersonId );
	loop_NLevel();
	function loop_NLevel() {
		var dataARR = [];
		// select 
		// a.BillNo,
		// a.BillDate,
		// a.PersonId,cm1.Username,
		// a.DeptId,tcd.DeptName,
		// a.Remark,
		// a.CompId,tcg.OrgName,
		// a.CreatorId,cm2.Username,
		// a.PermitterId,cm3.Username,
		// tvb.FromBillNo,
		// tvb.OAmount,
		// tvb.WriteOffOAmount,
		// tvb.RowCode,
		// acb.InvoiceBillNo
		// from [arTransferBill] a LEFT JOIN [arTransferBillOut] tvb  on a.BillNo=tvb.BillNo
		// LEFT JOIN [arCheckBill] acb  on tvb.FromBillNo=acb.BillNo
		//  LEFT JOIN capMembership cm1 on a.PersonId  = cm1.UserId
		//  LEFT JOIN capMembership cm2 on a.CreatorId  = cm2.UserId
		//  LEFT JOIN capMembership cm3 on a.PermitterId  = cm3.UserId
		//  LEFT JOIN capOrganization tcg on a.CompId = tcg.OrgId
		//  LEFT JOIN comDepartment tcd on a.DeptId = tcd.DeptId
		// where a.BillDate > '20201002'

	// Category="%"+Category+"%";
	var SQLExecute =
	      " select TOP 1000  a.BillNo,  a.BillDate, a.PersonId,cm1.Username as Personname,  a.DeptId,tcd.DeptName, " +
		" a.Remark,  a.CompId, tcg.OrgName,  a.CreatorId,cm2.Username as Creatorname,  a.PermitterId,cm3.Username as Permitname, " +
		" tvb.FromBillNo,  tvb.OAmount,  tvb.WriteOffOAmount,  tvb.RowCode,  acb.InvoiceBillNo " +
		" from [arTransferBill] a LEFT JOIN [arTransferBillOut] tvb  on a.BillNo=tvb.BillNo " +
		" LEFT JOIN [arCheckBill] acb  on tvb.FromBillNo=acb.BillNo " +
		"  LEFT JOIN capMembership cm1 on a.PersonId  = cm1.UserId " +
		"  LEFT JOIN capMembership cm2 on a.CreatorId  = cm2.UserId " +
		"  LEFT JOIN capMembership cm3 on a.PermitterId  = cm3.UserId " +
		"  LEFT JOIN capOrganization tcg on a.CompId = tcg.OrgId " +
		"  LEFT JOIN comDepartment tcd on a.DeptId = tcd.DeptId " ;
		var filter = ' 1=1 '; 
		if (BillNo != "" && BillNo != "null" && BillNo != undefined && BillNo.length > 0) {
			console.log("岸号", BillNo);
			filter += " AND  A.[BillNo]  LIKE " + "'%" + BillNo + "%'";
		}
		if (placeForB != "" && placeForB != "null" && placeForB != undefined && placeForB.length > 0) {
			console.log("需求日期开始日", placeForB);
			filter += " AND A.BillDate >=  " + "'" + placeForB + "'";
		}
		if (placeForE != "" && placeForE != "null" && placeForE != undefined && placeForE.length > 0) {
			console.log("需求日期结束日", placeForE);
			filter += " AND A.BillDate <=  " + "'" + placeForE + "'";
		}
		if (PersonId != "" && PersonId != "null" && PersonId != undefined && PersonId.length > 0) {
			console.log("业务员", PersonId);
			filter += " AND A.PersonId =  " + "'" + PersonId + "'";
		}
		if (filter != "" && filter != undefined) {
			SQLExecute = SQLExecute + " WHERE " + filter;
		}
		//  console.log("夜色:" ,SQLExecute );
			yjDBService_sqlserver.exec({
			connectionOptions: connection,
			sql: SQLExecute,
			parameters: [ ],
			success: function (r) {
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				var obj = '';
				console.log("太美:" ,data.length );
				for (var i = 0; i < data.length; i++) {
					obj = {
						"BillNo": data[i].BillNo,
						"BillDate": data[i].BillDate,
						"Personname": data[i].Personname  ,
						"DeptName": data[i].DeptName,
						"Remark": data[i].Remark  ,
						"OrgName": data[i].OrgName,
						"Creatorname": data[i].Creatorname,
						"Permitname": data[i].Permitname,
						"FromBillNo": data[i].FromBillNo,
						"OAmount": data[i].OAmount,
						"WriteOffOAmount": data[i].WriteOffOAmount,
						"RowCode": data[i].RowCode,
						"InvoiceBillNo": data[i].InvoiceBillNo,
					};
					dataARR.push(obj);
				}
				var dump = JSON.stringify(dataARR);
				if (dump.length > 100) {
					console.log("塞热啊:" + dump.substring(0, 100));
				} else {
					console.log("塞热啊:" + JSON.stringify(dataARR));
				}
				sender.success(dataARR);
			},
			error: sender.error
		})
	}
};
