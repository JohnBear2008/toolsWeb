module.exports = function (sender) {
	var yjDBService_sqlserver = global.yjRequire("yujiang.Foil", "yjDBService.engine.sqlserver");
	var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
	var yjDB = global.yjRequire("yujiang.Foil").yjDB;
	var yjDBServiceUtil = global.yjRequire("yujiang.Foil", 'yjDBService.util.js');
	var connectionOptions=yjGlobal.config.db_Connection.erp_T9.connection;
	// var connectionOptions = yjGlobal.config.db_Connection.rich_T9.connection;
	var connection = null;
	if (connectionOptions) {
		connection = yjDBServiceUtil.extractConnectionOptions(connectionOptions);
	}
	var arrange = sender.req.query.arrange;
	var prodID = sender.req.query.prodID;
	var prodNM = sender.req.query.prodNM;
	var OldMat = sender.req.query.OldMat;
	if (arrange == 'Basic') {
		BasicCate();
	} else if (arrange == 'ReveBasic') {
		ReveBasic();
	} else if (arrange == 'ReveAdv') {
		ReveAdv(prodID, prodNM);
	} else if (arrange == 'Budget') {
		ReveBudget(prodID, prodNM);
	} else if (arrange == 'Caculate') {
		Caculate(prodID, prodNM);
	} else if (arrange == 'CacuBasic') {
		CacuBasic();
	} else if (arrange == 'LookBom') {
		LookBom(OldMat);
	} else {
		AdvCate(prodID, prodNM);
	}
	function LookBom(OldMat) {
		var SQLqry = 
		"SELECT  [MaterialId]  FROM comMaterial tba where tba.[CU_OldMaterialId] = ? ";
		var dataArr = [];
		yjDBService_sqlserver.exec({
			connectionOptions: connection,
			sql: SQLqry,
			parameters: [OldMat],
			success: function (r) {
				var datas = [];
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				console.log("携手共度:"+data.length);
				for (var i = 0; i < data.length; i++) {
					var temp = {
						"MaterialId": data[i].MaterialId, 
					}
					datas.push(temp)
				}
				console.log("携手共度:"+JSON.stringify(datas));
				sender.success(datas);
			},
			error: {},
		});
	}
	function BasicCate() {
		var SQLqry = " select TOP 100  tba.BOMKeyId , tba.BOMKeyName  , tcm.[CU_OldMaterialId] as OldMat, " +
		" tcm.[CU_OldMaterialSpec] as OldSpc from [BOMMainInfo] tba " +
		" LEFT JOIN comMaterial tcm on tba.[BOMKeyId] =tcm.[MaterialId]  ORDER BY tba.CreateTime ";
		var dataArr = [];
		yjDBService_sqlserver.exec({
			connectionOptions: connection,
			sql: SQLqry,
			parameters: [],
			success: function (r) {
				var datas = [];
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				console.log("保养统计:"+data.length);
				for (var i = 0; i < data.length; i++) {
					var OldSpc =data[i].OldSpc;
					OldSpc = nulReplaceTxt(OldSpc);
					if(OldSpc !=undefined && OldSpc !=null  && OldSpc.length>1 ){
						OldSpc = (OldSpc.length  > 50 ? OldSpc.substring(0, 50)  :OldSpc);
					}
					var temp = {
						"ProductID": data[i].BOMKeyId,
						"ProductName": data[i].BOMKeyName,
						"OldMat": data[i].OldMat,
						"OldSpc": OldSpc,
					}
					datas.push(temp)
				}
				// console.log("保养统计:"+JSON.stringify(datas));
				sender.success(datas);
			},
			error: {},
		});
	}
	function AdvCate(prodID, prodNM) {
		var filter = "   1 =1  ";
		var orderBy  = " tba.CreateTime ";
		if (prodID != "" && prodID != "null" && prodID != undefined && prodID.length > 0) {
			filter += "  AND ( tba.[BOMKeyId] LIKE " + "'%" + prodID + "%'";
			filter += "  OR tcm.[CU_OldMaterialId] LIKE  " + "'%" + prodID + "%' )";
		}
		if (prodNM != "" && prodNM != "null" && prodNM != undefined && prodNM.length > 0) {
			filter += "  AND ( tba.BOMKeyName LIKE " + "'%" + prodNM + "%'";
			filter += "  OR tcm.[CU_OldMaterialSpec] LIKE  " + "'%" + prodNM + "%' )";
		}
		var SQLqry = " select TOP 100  tba.BOMKeyId , tba.BOMKeyName  , tcm.[CU_OldMaterialId] as OldMat, " +
		" tcm.[CU_OldMaterialSpec] as OldSpc from [BOMMainInfo] tba " +
		" LEFT JOIN comMaterial tcm on tba.[BOMKeyId] =tcm.[MaterialId]  where " + filter;
		if (orderBy != "" && orderBy != undefined) {
			SQLqry = SQLqry + " Order By " + orderBy;
		}
		console.log("BOM下拉 ", SQLqry);
		var dataArr = [];
		yjDBService_sqlserver.exec({
			connectionOptions: connection,
			sql: SQLqry,
			parameters: [],
			success: function (r) {
				var datas = [];
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				console.log("維修是否:"+data.length);
				for (var i = 0; i < data.length; i++) {
					var OldSpc =data[i].OldSpc;
					OldSpc = nulReplaceTxt(OldSpc);
					if(OldSpc !=undefined && OldSpc !=null  && OldSpc.length>1 ){
						OldSpc = (OldSpc.length  > 50 ? OldSpc.substring(0, 50)  :OldSpc);
					}
					var temp = {
						"ProductID": data[i].BOMKeyId,
						"ProductName": data[i].BOMKeyName,
						"OldMat": data[i].OldMat,
						"OldSpc": OldSpc,
					}
					datas.push(temp)
				}
				// console.log("維修是否:"+JSON.stringify(datas));
				sender.success(datas);
			},
			error: {},
		});
	}
	function ReveBasic() {
		var SQLqry = " select TOP 100 [BOMKeyId] , [SubMaterialSpec]  from  [BOMSubMatInfo] ";
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
						"ProductID": data[i].BOMKeyId,
						"ProductName": data[i].SubMaterialSpec = ((data[i].SubMaterialSpec.length > 60) ?
							(data[i].SubMaterialSpec.substring(0, 60)) : data[i].SubMaterialSpec),
					}
					datas.push(temp)
				}
				// console.log("保养统计:"+JSON.stringify(datas));
				sender.success(datas);
			},
			error: {},
		});
	}
	
	function ReveAdv(prodID, prodNM) {
		var filter = "   1 =1  ";
		if (prodID != "" && prodID != "null" && prodID != undefined && prodID.length > 0) {
			filter += "  AND   BOMKeyId LIKE " + "'%" + prodID + "%'";
		}
		if (prodNM != "" && prodNM != "null" && prodNM != undefined && prodNM.length > 0) {
			filter += "  AND   SubMaterialSpec LIKE " + "'%" + prodNM + "%'";
		}

		var SQLqry = " select TOP 100 [BOMKeyId] , [SubMaterialSpec]  from  [BOMSubMatInfo]  where " + filter;
		console.log("品名", SQLqry);
		yjDBService_sqlserver.exec({
			connectionOptions: connection,
			sql: SQLqry,
			parameters: [],
			success: function (r) {
				var datas = [];
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				for (var i = 0; i < data.length; i++) {
					var temp = {
						"ProductID": data[i].BOMKeyId,
						"ProductName": data[i].SubMaterialSpec = ((data[i].SubMaterialSpec.length > 60) ?
							(data[i].SubMaterialSpec.substring(0, 60)) : data[i].SubMaterialSpec),
					}
					datas.push(temp)
				}
				// console.log("維修是否:"+JSON.stringify(datas));
				sender.success(datas);
			},
			error: {},
		});
	}
	function CacuBasic() {
		var SQLqry =
		"   SELECT TOP 50 BillNo ,MaterialSpec from purBillOrderDetail   "   ;
		yjDBService_sqlserver.exec({
			connectionOptions: connection,
			sql: SQLqry,
			parameters: [ ],
			success: function (r) {
				var datas = [];
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				for (var i = 0; i < data.length; i++) {
					var temp = {
						"ProductID": data[i].BillNo,
						"ProductName": data[i].MaterialSpec ,
					}
					datas.push(temp);
				}
				var dump = JSON.stringify(datas);
				if (dump.length > 100) {
					console.log("韩效:" + dump.substring(0, 100));
				} else {
					console.log("智效:" + JSON.stringify(datas));
				}
				sender.success(datas);
			},
			error: {},
		});
	}
	function Caculate(prodID, prodNM) {
		var SQLqry =
		"   SELECT TOP 50  BillNo ,MaterialSpec from purBillOrderDetail  WHERE  BillNo = ? "   ;
		yjDBService_sqlserver.exec({
			connectionOptions: connection,
			sql: SQLqry,
			parameters: [prodID ],
			success: function (r) {
				var datas = [];
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				for (var i = 0; i < data.length; i++) {
					var temp = {
						"ProductID": data[i].BillNo,
						"ProductName": data[i].MaterialSpec ,
					}
					datas.push(temp);
				}
				var dump = JSON.stringify(datas);
				if (dump.length > 100) {
					console.log("韩效:" + dump.substring(0, 100));
				} else {
					console.log("智效:" + JSON.stringify(datas));
				}
				sender.success(datas);
			},
			error: {},
		});
	}
	function ReveBudget(prodID, prodNM) {
		var SQLqry =
		" SELECT  'A' as ProdRank, tba.[BOMKeyId] as ParentID , tba.[BOMKeyName] as ProductName" +
		" FROM[BOMMainInfo] tba " +
		" LEFT JOIN comMaterial tcm on tba.[BOMKeyId] = tcm.[MaterialId] " +
		" WHERE  tba.BOMKeyId = ? " +
		" Union " +
		" SELECT 'B' as ProdRank, " +
		" 	lvb.SubMaterialId as ParentID , tba.[BOMKeyName] as ProductName" +
		" FROM [BOMMainInfo] tba " +
		" LEFT JOIN BOMSubMatInfo lvb on tba.[BOMKeyId] = lvb.[BOMKeyId] " +
		" LEFT JOIN comMaterial tcm on lvb.SubMaterialId = tcm.[MaterialId] " +
		" WHERE  tba.BOMKeyId = ?  and lvb.[SubMatType] = '0' " +
		" Union " +
		" SELECT 'C' as ProdRank, " +
		" 	lvb.SubMaterialId as ParentID , tba.[SubMaterialSpec] as ProductName" +
		" FROM [BOMSubMatInfo] tba " +
		" LEFT JOIN BOMSubMatInfo lvb on tba.[SubMaterialId] = lvb.[BOMKeyId] " +
		" LEFT JOIN comMaterial tcm on lvb.SubMaterialId = tcm.[MaterialId] " +
		" WHERE  tba.BOMKeyId = ? and lvb.[SubMatType] = '0' " ;
		// " SELECT  'A' as ProdRank,  tba.[BOMKeyId] as ParentID, tba.[BOMKeyName] as ProductName" +
		// "	FROM[BOMMainInfo] tba   " +
		// "    LEFT JOIN comMaterial tcm on tba.[BOMKeyId] =tcm.[MaterialId] " +
		// "    WHERE  tba.BOMKeyId = ?  " +
		// "     Union   " +
		// "    SELECT 'B' as ProdRank,   " +
		// "    tba.[BOMKeyId] as ParentID ,tba.[BOMKeyName] as ProductName  " +
		// "    FROM [RichT9].[dbo].[BOMMainInfo] tba     " +
		// "	LEFT JOIN BOMSubMatInfo lvb on tba.[BOMKeyId] =lvb.[BOMKeyId] " +
		// "    LEFT JOIN comMaterial tcm on lvb.SubMaterialId =tcm.[MaterialId] " +
		// "    WHERE  tba.BOMKeyId = ?  and lvb.[SubMatType]='0' " +
		// "    Union   " +
		// "    SELECT 'C' as ProdRank,   " +
		// "    lvb.[BOMKeyId] as ParentID ,tba.[SubMaterialSpec] as ProductName" + 
		// "	FROM [RichT9].[dbo].[BOMSubMatInfo] tba   " +
		// "	LEFT JOIN BOMSubMatInfo lvb on tba.[SubMaterialId] = lvb.[BOMKeyId]  " +
		// "	LEFT JOIN comMaterial tcm on lvb.SubMaterialId =tcm.[MaterialId] " +
		// "    WHERE  tba.BOMKeyId = ? and lvb.[SubMatType]='0'  " +
		// "     Union   " +
		// "    SELECT 'D' as ProdRank,    " +
		// "    lvv.[BOMKeyId] as ParentID ,tba.[SubMaterialSpec] as ProductName" +
		// "    FROM [RichT9].[dbo].[BOMSubMatInfo] tba   " +
		// "	 LEFT JOIN BOMSubMatInfo lvb on tba.[SubMaterialId] = lvb.[BOMKeyId] " +    
		// "     LEFT JOIN BOMSubMatInfo lvv on lvb.SubMaterialId =lvv.BOMKeyId  " +
		// "	LEFT JOIN comMaterial tcm on lvv.SubMaterialId =tcm.[MaterialId] " +
		// "    WHERE  tba.BOMKeyId = ? and lvb.[SubMatType]='0' and lvv.[SubMatType]='0' " +
		// "     Union   " +
		// "    SELECT 'E' as ProdRank,   " +
		// "    etb.[BOMKeyId] as ParentID,tba.[SubMaterialSpec] as ProductName " +
		// "	FROM [RichT9].[dbo].[BOMSubMatInfo] tba   " +
		// "	LEFT JOIN BOMSubMatInfo lvb on tba.[SubMaterialId] = lvb.[BOMKeyId]     " +
		// "     LEFT JOIN BOMSubMatInfo lvv on lvb.SubMaterialId =lvv.BOMKeyId  " +
		// "     LEFT JOIN BOMSubMatInfo etb on lvv.SubMaterialId =etb.BOMKeyId    " +
		// "    LEFT JOIN comMaterial tcm on etb.SubMaterialId =tcm.[MaterialId]   " +
		// "    WHERE  tba.BOMKeyId = ? and lvb.[SubMatType]='0' and lvv.[SubMatType]='0'  " +
		// "    and etb.[SubMatType]='0' " +
		// "     Union   " +
		// "    SELECT 'F' as ProdRank,   " +
		// "    ftb.[BOMKeyId] as ParentID ,tba.[SubMaterialSpec] as ProductName " +
		// "	FROM [RichT9].[dbo].[BOMSubMatInfo] tba " +
		// "	 LEFT JOIN BOMSubMatInfo lvb on tba.[SubMaterialId] = lvb.[BOMKeyId]   " +  
		// "     LEFT JOIN BOMSubMatInfo lvv on lvb.SubMaterialId =lvv.BOMKeyId  " +
		// "     LEFT JOIN BOMSubMatInfo etb on lvv.SubMaterialId =etb.BOMKeyId    " +
		// "     LEFT JOIN BOMSubMatInfo ftb on etb.SubMaterialId =ftb.BOMKeyId    " +
		// "	LEFT JOIN comMaterial tcm on ftb.SubMaterialId =tcm.[MaterialId] " +
		// "    WHERE  tba.BOMKeyId = ? and lvb.[SubMatType]='0' and lvv.[SubMatType]='0'  " +
		// "    and etb.[SubMatType]='0' and ftb.[SubMatType]='0'  " +
		// "    order by ProdRank  " ;

		//     console.log("诗织", SQLqry,"伊藤",prodID);
		yjDBService_sqlserver.exec({
			connectionOptions: connection,
			sql: SQLqry,
			parameters: [prodID, prodID, prodID, prodID, prodID, prodID],
			success: function (r) {
				var datas = [];
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				for (var i = 0; i < data.length; i++) {
					var temp = {
						"ProductID": data[i].ParentID,
						"ProductName": data[i].ProductName = ((data[i].ProductName.length > 20) ?
							(data[i].ProductName.substring(0, 20)) : data[i].ProductName),
					}
					datas.push(temp);
				}
				var dump = JSON.stringify(datas);
				if (dump.length > 100) {
					console.log("友梨:" + dump.substring(0, 100));
				} else {
					console.log("友梨:" + JSON.stringify(datas));
				}
				sender.success(datas);
			},
			error: {},
		});
	}
	function nulReplaceTxt(passTxt) {
		var ret = '';
		ret = (passTxt == null || passTxt == undefined) ? ('缺省') : passTxt;
		return ret;
	}
};