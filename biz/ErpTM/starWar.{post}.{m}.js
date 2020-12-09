module.exports = function (sender) {
	var yjDBService_sqlserver = global.yjRequire("yujiang.Foil", "yjDBService.engine.sqlserver");
	var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
	var yjDB = global.yjRequire("yujiang.Foil").yjDB;
	var yjDBServiceUtil = global.yjRequire("yujiang.Foil", 'yjDBService.util.js');
	// var connectionOptions=yjGlobal.config.db_Connection.erp_Connection.connection;
	var connectionOptions = yjGlobal.config.db_Connection.rich_T9.connection;
	var connection = null;
	if (connectionOptions) {
		connection = yjDBServiceUtil.extractConnectionOptions(connectionOptions);
	}
	
	var arrange = sender.req.query.arrange;
	var prodID = sender.req.query.prodID;
	var prodNM = sender.req.query.prodNM;
	console.log("安排", arrange);
	if (arrange == 'Basic') {
		BasicCate();
	} else if (arrange == 'BasicPers') {
		BasicPers();
	} else if (arrange == 'AdvPers') {
		AdvPers(prodID, prodNM);
	} else if (arrange == 'AdvFinc') {
		AdvFinc(prodID, prodNM);
	} else if (arrange == 'DeptFinc') {
		DeptFinc(prodID, prodNM);
	} else if (arrange == 'BasicFinc') {
		BasicFinc();
	} else {
		AdvCate(prodID, prodNM);
	}


	function BasicFinc() {
		var SQLqry = " select TOP 50 a.[PersonId] ,a.[GroupId], cgp.[PersonName]  from [comPerson] a " +
			" LEFT JOIN [comGroupPerson] cgp on a.PersonId  = cgp.PersonId  where [BelongOrgId]='TM01' ORDER BY a.[PersonId] ";
		var dataArr = [];
		yjDBService_sqlserver.exec({
			connectionOptions: connection,
			sql: SQLqry,
			parameters: [],
			success: function (r) {
				var datas = [];
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				for (var i = 0; i < data.length; i++) {
					var temp = {
						"ProductID": data[i].PersonId,
						"ProductName": data[i].PersonName,
					}
					datas.push(temp)
				}
				// console.log("养生统计:"+JSON.stringify(datas));
				sender.success(datas);
			},
			error: {},
		});
	}
	function BasicPers() {
		var SQLqry = " select TOP 50 [UserId] ,[Username] from [capMembership] ORDER BY [UserId]  ";
		var dataArr = [];
		yjDBService_sqlserver.exec({
			connectionOptions: connection,
			sql: SQLqry,
			parameters: [],
			success: function (r) {
				var datas = [];
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				for (var i = 0; i < data.length; i++) {
					var temp = {
						"ProductID": data[i].UserId,
						"ProductName": data[i].Username,
					}
					datas.push(temp)
				}
				// console.log("养生统计:"+JSON.stringify(datas));
				sender.success(datas);
			},
			error: {},
		});
	}
	function BasicCate() {
		var SQLqry = " select TOP 50[BizPartnerId],[BizPartnerName],[ShortName] from [comBusinessPartner] ORDER BY [BizPartnerId]  ";
		var dataArr = [];
		yjDBService_sqlserver.exec({
			connectionOptions: connection,
			sql: SQLqry,
			parameters: [],
			success: function (r) {
				var datas = [];
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				for (var i = 0; i < data.length; i++) {
					var temp = {
						"ProductID": data[i].BizPartnerId,
						"ProductName": data[i].BizPartnerName,
					}
					datas.push(temp)
				}
				// console.log("保养统计:"+JSON.stringify(datas));
				sender.success(datas);
			},
			error: {},
		});
	}
	function AdvPers(prodID, prodNM) {
		var filter = "  1=1 ";
		if (prodID != "" && prodID != "null" && prodID != undefined && prodID.length > 0) {
			filter += "  AND   UserId LIKE " + "'%" + prodID + "%'";
		}
		if (prodNM != "" && prodNM != "null" && prodNM != undefined && prodNM.length > 0) {
			filter += "  AND   Username LIKE " + "'%" + prodNM + "%'";
		}
		var SQLqry = " select TOP 100 [UserId] ,[Username] from capMembership where " + filter;
		console.log("品名", SQLqry);
		var dataArr = [];
		yjDBService_sqlserver.exec({
			connectionOptions: connection,
			sql: SQLqry,
			parameters: [],
			success: function (r) {
				var datas = [];
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				for (var i = 0; i < data.length; i++) {
					var temp = {
						"ProductID": data[i].UserId,
						"ProductName": data[i].Username,
					}
					datas.push(temp)
				}
				// console.log("維修是否:"+JSON.stringify(datas));
				sender.success(datas);
			},
			error: {},
		});
	}
	function DeptFinc(prodID, prodNM) {
		var filter = "  1=1 ";
		if (prodID != "" && prodID != "null" && prodID != undefined && prodID.length > 0) {
			filter += "  AND   DeptId LIKE " + "'%" + prodID + "%'";
		}
		if (prodNM != "" && prodNM != "null" && prodNM != undefined && prodNM.length > 0) {
			filter += "  AND   DeptName LIKE " + "'%" + prodNM + "%'";
		}
 
		var SQLqry = " select TOP 50 a.[DeptId] ,a.[DeptName]  from [comDepartment] a where " + filter
		console.log("部梦", SQLqry);
		var dataArr = [];
		yjDBService_sqlserver.exec({
			connectionOptions: connection,
			sql: SQLqry,
			parameters: [],
			success: function (r) {
				var datas = [];
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				for (var i = 0; i < data.length; i++) {
					var temp = {
						"ProductID": data[i].DeptId,
						"ProductName": data[i].DeptName,
					}
					datas.push(temp)
				}
				console.log("供给是否:"+JSON.stringify(datas));
				sender.success(datas);
			},
			error: {},
		});
	}
	function AdvFinc(prodID, prodNM) {
		var filter = "  1=1 ";
		if (prodID != "" && prodID != "null" && prodID != undefined && prodID.length > 0) {
			filter += "  AND   PersonId LIKE " + "'%" + prodID + "%'";
		}
		if (prodNM != "" && prodNM != "null" && prodNM != undefined && prodNM.length > 0) {
			filter += "  AND   PersonName LIKE " + "'%" + prodNM + "%'";
		}
		var SQLqry = " select TOP 50 a.[PersonId] ,a.[GroupId], cgp.[PersonName]  from [comPerson] a " +
			" LEFT JOIN [comGroupPerson] cgp on a.PersonId  = cgp.PersonId  where " + filter
		console.log("品名", SQLqry);
		var dataArr = [];
		yjDBService_sqlserver.exec({
			connectionOptions: connection,
			sql: SQLqry,
			parameters: [],
			success: function (r) {
				var datas = [];
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				for (var i = 0; i < data.length; i++) {
					var temp = {
						"ProductID": data[i].PersonId,
						"ProductName": data[i].PersonName,
					}
					datas.push(temp)
				}
				// console.log("維修是否:"+JSON.stringify(datas));
				sender.success(datas);
			},
			error: {},
		});
	}
	function AdvCate(prodID, prodNM) {
		var filter = "  1=1 ";
		if (prodID != "" && prodID != "null" && prodID != undefined && prodID.length > 0) {
			filter += "  AND   BizPartnerId LIKE " + "'%" + prodID + "%'";
		}
		if (prodNM != "" && prodNM != "null" && prodNM != undefined && prodNM.length > 0) {
			filter += "  AND   BizPartnerName LIKE " + "'%" + prodNM + "%'";
		}
		var SQLqry = " select TOP 100 [BizPartnerId],[BizPartnerName],[ShortName]   from comBusinessPartner where " + filter;
		console.log("品名", SQLqry);
		var dataArr = [];
		yjDBService_sqlserver.exec({
			connectionOptions: connection,
			sql: SQLqry,
			parameters: [],
			success: function (r) {
				var datas = [];
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				for (var i = 0; i < data.length; i++) {
					var temp = {
						"ProductID": data[i].BizPartnerId,
						"ProductName": data[i].BizPartnerName,
					}
					datas.push(temp)
				}
				// console.log("維修是否:"+JSON.stringify(datas));
				sender.success(datas);
			},
			error: {},
		});
	}
};