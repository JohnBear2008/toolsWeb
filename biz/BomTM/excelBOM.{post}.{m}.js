module.exports = function (sender) {
	var yjDBService_sqlserver = global.yjRequire("yujiang.Foil", "yjDBService.engine.sqlserver");
	var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
	var yjDB = global.yjRequire("yujiang.Foil").yjDB;
	var yjDBServiceUtil = global.yjRequire("yujiang.Foil", 'yjDBService.util.js');
	var async = require("async");
	var connectionOptions=yjGlobal.config.db_Connection.erp_T9.connection;
	// var connectionOptions = yjGlobal.config.db_Connection.rich_T9.connection;
	var connection = null;
	if (connectionOptions) {
		connection = yjDBServiceUtil.extractConnectionOptions(connectionOptions);
	}
	var ProductName = sender.req.query.ProductName;
	var ProductID = sender.req.query.ProductID;
	var sendshowTime = sender.req.query.showTime;
	var showTime = parseInt(sendshowTime, 10);
	if (ProductID != undefined && ProductID != '') {

	} else {
		ProductID = 'AU2-AWY0019-001'  ;//'AU5-AAK0001-001';
	}
	var Pattern = sender.req.query.Pattern;
	var OutSour = sender.req.query.OutSour;
	console.log(" BOM名：", ProductID);
	let binrec = [];
	//A仓版
	var DEBUG = '1'; //0不除错 1 显示输出
	let record = [];
	var cnt = 0;
	let sizeB = [];
	let lengthB = 0;
	let psizeB = [];   //计算子数量
	let enuchB = [];   //计算子数量
	let splenB = 0;    //计算子数量
	let middlB = [];
	let psizeC = [];   //计算子数量
	let enuchC = [];   //计算子数量
	let splenC = 0;    //计算子数量
	let middlC = [];
	let psizeD = [];   //计算子数量
	let enuchD = [];   //计算子数量
	let splenD = 0;    //计算子数量
	let middlD = [];
	let psizeE = [];   //计算子数量
	let enuchE = [];   //计算子数量
	let middlE = [];
	let splenE = 0;    //计算子数量
	let prodB = [];
	let upperB = [];
	let lowerB = [];
	let sizeC = [];
	let lengthC = 0;
	let prodC = [];
	let upperC = [];
	let lowerC = [];
	let sizeD = [];
	let lengthD = 0;
	let prodD = [];
	let upperD = [];
	let lowerD = [];
	let sizeE = [];
	let lengthE = 0;
	let prodE = [];
	let upperE = [];
	let lowerE = [];
	if (ProductID != "" && ProductID != "null" && ProductID != undefined && ProductID.length > 0) {
		loop_Count(ProductID);
	} else {
		var datas = [];
		let level3 = {
			"status": "FAIL"
			, enname: 'NA'  //集成总号：statNNN[0] 
			, id: '0' //不可以设其他的，会无法relaod
			, field: '000'
			, encode: '123'
			, oldmat: '123'
			, oldspc: '123'
			, totqty: '123'
			, cabinA: '123'
			, seed: '0'
			, price: '0'
			, cost: '0'
			, spread: true  //展开或不展开 
		};
		datas.push(level3);
		sender.success(datas);
	}
	function loop_Count(loopProdID) {
		var SQLqry =
		// SELECT 'szB' as ProdRank, lvb.[BOMKeyId] as MiddleID, count(*) as TMC  
		// FROM [BOMSubMatInfo] tba   
		// LEFT JOIN BOMSubMatInfo lvb on tba.[SubMaterialId] = lvb.[BOMKeyId]   
		//   LEFT JOIN [BOMMainInfo] vat on vat.[BOMKeyId] =lvb.BOMKeyId  
		// WHERE  tba.BOMKeyId = 'AU2-AWY0019-001'   and lvb.[SubMatType]='0' 
		// and ( vat.[ValidityToDate] = '99999999' OR vat.[ValidityToDate] is null )	 
		// group by lvb.[BOMKeyId] 
			"	SELECT 'szB' as ProdRank, lvb.[BOMKeyId] as MiddleID, '' as OptionID , count(*) as TMC " +
			"	FROM [BOMSubMatInfo] tba  " +
			"	LEFT JOIN BOMSubMatInfo lvb on tba.[SubMaterialId] = lvb.[BOMKeyId]  " +
			"     LEFT JOIN [BOMMainInfo] vat on vat.[BOMKeyId] =lvb.BOMKeyId " +
			"	WHERE  tba.BOMKeyId = '" + loopProdID + "' and lvb.[SubMatType]='0'  " +
			"     and ( vat.[ValidityToDate] = '99999999' OR vat.[ValidityToDate] is null ) " +
			"	group by lvb.[BOMKeyId] " +
			"     UNION " +
			// SELECT 'spB' as ProdRank, lvb.[SubMaterialId]  as MiddleID , lvv.BOMKeyId as OptionID , 
			// count(lvv.BOMKeyId) as TMC  FROM [BOMMainInfo] tba 
			//  LEFT JOIN BOMSubMatInfo lvb on tba.[BOMKeyId] =lvb.[BOMKeyId]  
			//  LEFT JOIN [BOMMainInfo] vat on vat.[BOMKeyId] =lvb.SubMaterialId    
			//  LEFT JOIN BOMSubMatInfo lvv on lvb.SubMaterialId =lvv.BOMKeyId     
			// and tba.BOMKeyId = 'AU2-AWY0019-001' and lvb.[SubMatType]='0' and lvv.[SubMatType]='0'    
			// WHERE  tba.BOMKeyId =  'AU2-AWY0019-001'  and lvb.[SubMatType]='0' 
			// and ( vat.[ValidityToDate] = '99999999' OR vat.[ValidityToDate] is null )
			// group by lvb.[SubMaterialId] , lvv.BOMKeyId  	
			"   SELECT 'spB' as ProdRank, lvb.[SubMaterialId]  as MiddleID , lvv.BOMKeyId as OptionID , " +
			"   count(lvv.BOMKeyId) as TMC  FROM [BOMMainInfo] tba   " +
			"   LEFT JOIN BOMSubMatInfo lvb on tba.[BOMKeyId] =lvb.[BOMKeyId] " +
			" LEFT JOIN [BOMMainInfo] vat on vat.[BOMKeyId] =lvb.SubMaterialId    "+
			"   LEFT JOIN BOMSubMatInfo lvv on lvb.SubMaterialId =lvv.BOMKeyId  " +
			"    and tba.BOMKeyId = '" + loopProdID + "' and lvb.[SubMatType]='0' and lvv.[SubMatType]='0' " +
			"    WHERE  tba.BOMKeyId =  '" + loopProdID + "'  and lvb.[SubMatType]='0' " +
			" and ( vat.[ValidityToDate] = '99999999' OR vat.[ValidityToDate] is null ) " +
			"    group by lvb.[SubMaterialId] , lvv.BOMKeyId " +
			"	 union " +
			"	SELECT 'szC' as ProdRank, lvv.[BOMKeyId] as MiddleID, '' as OptionID , count(*) as TMC   " +
			"	FROM [BOMSubMatInfo] tba   " +
			"    LEFT JOIN BOMSubMatInfo lvb on tba.[SubMaterialId] = lvb.[BOMKeyId]   " +
			// "    LEFT JOIN [BOMMainInfo] vat on vat.[BOMKeyId] = lvv.[BOMKeyId] " +
			"    LEFT JOIN BOMSubMatInfo lvv on lvb.SubMaterialId =lvv.BOMKeyId  " +
			"	WHERE  tba.BOMKeyId =  ? and lvb.[SubMatType]='0' and lvv.[SubMatType]='0' " +
			// "    and ( vat.[ValidityToDate] = '99999999' OR vat.[ValidityToDate] is null ) " +
			"	group by lvv.[BOMKeyId]    " +
			"	union " +
			// SELECT 'spC' as ProdRank,  
			// lvb.SubMaterialId   as MiddleID, lvv.BOMKeyId as OptionID , 
			//  count(lvv.BOMKeyId) as TMC   FROM [BOMSubMatInfo] tba      
			// LEFT JOIN BOMSubMatInfo lvb on tba.[SubMaterialId] = lvb.[BOMKeyId]     
			// LEFT JOIN BOMSubMatInfo lvv on lvb.SubMaterialId =lvv.BOMKeyId       
			// WHERE  tba.BOMKeyId =  'AA3-A000022-003' 
			// and lvb.[SubMatType]='0'  
			// Group by  lvb.SubMaterialId,lvv.BOMKeyId		    
			" SELECT 'spC' as ProdRank, lvb.SubMaterialId   as MiddleID, lvv.BOMKeyId as OptionID  , " +
			" count(lvv.BOMKeyId) as TMC   FROM [BOMSubMatInfo] tba  " +
			" LEFT JOIN BOMSubMatInfo lvb on tba.[SubMaterialId] = lvb.[BOMKeyId]  " +
			// " LEFT JOIN [BOMMainInfo] vat on vat.[BOMKeyId] = lvb.SubMaterialId   " +
			" LEFT JOIN BOMSubMatInfo lvv on lvb.SubMaterialId =lvv.BOMKeyId        " +
			" WHERE  tba.BOMKeyId =   '" + loopProdID + "'  " +
			" and lvb.[SubMatType]='0'          " +
			//这印刻有效
			// "   and lvb.SubMaterialId <> 'AF4-A000039-A1T'  " + 
			// " and ( vat.[ValidityToDate] = '99999999' OR vat.[ValidityToDate] is null ) " +
			" Group by  lvb.SubMaterialId,lvv.BOMKeyId " +
			"	union " +
			"	  SELECT 'szD' as ProdRank, etb.[BOMKeyId] as MiddleID,'' as OptionID , count(*) as TMC  " +
			"	FROM [BOMSubMatInfo] tba   " +
			"	 LEFT JOIN BOMSubMatInfo lvb on tba.[SubMaterialId] = lvb.[BOMKeyId]    " +
			"	 LEFT JOIN BOMSubMatInfo lvv on lvb.SubMaterialId =lvv.BOMKeyId  " +
			"	 LEFT JOIN BOMSubMatInfo etb on lvv.SubMaterialId =etb.BOMKeyId    " +
			"	WHERE  tba.BOMKeyId =  ? and lvb.[SubMatType]='0' and lvv.[SubMatType]='0'  " +
			"	and etb.[SubMatType]='0' group by etb.[BOMKeyId]    " +
			"     union " +
			"   SELECT 'spD' as ProdRank, " +
			"   lvv.SubMaterialId  as MiddleID , etb.BOMKeyId as OptionID,  count(etb.BOMKeyId) as TMC   FROM [BOMSubMatInfo] tba     " +
			"   LEFT JOIN BOMSubMatInfo lvb on tba.[SubMaterialId] = lvb.[BOMKeyId]     " +
			"   LEFT JOIN BOMSubMatInfo lvv on lvb.SubMaterialId =lvv.BOMKeyId      " +
			"  LEFT JOIN BOMSubMatInfo etb on lvv.SubMaterialId =etb.BOMKeyId    " +
			"   WHERE  tba.BOMKeyId = '" + loopProdID + "'  and lvb.[SubMatType]='0' and lvv.[SubMatType]='0'    " +
			"   group By  lvv.SubMaterialId , etb.BOMKeyId    " +
			"     union " +
			"     SELECT 'szE' as ProdRank, ftb.[BOMKeyId] as MiddleID, '' as OptionID ,count(*) as TMC   " +
			"	FROM [BOMSubMatInfo] tba   " +
			"	 LEFT JOIN BOMSubMatInfo lvb on tba.[SubMaterialId] = lvb.[BOMKeyId]     " +
			"	 LEFT JOIN BOMSubMatInfo lvv on lvb.SubMaterialId =lvv.BOMKeyId  " +
			"	 LEFT JOIN BOMSubMatInfo etb on lvv.SubMaterialId =etb.BOMKeyId    " +
			"	 LEFT JOIN BOMSubMatInfo ftb on etb.SubMaterialId =ftb.BOMKeyId    " +
			"	WHERE  tba.BOMKeyId =  ? and lvb.[SubMatType]='0' and lvv.[SubMatType]='0'  " +
			"	and etb.[SubMatType]='0' and ftb.[SubMatType]='0' group by ftb.[BOMKeyId]  " +
			"     union " +
			"    SELECT distinct 'spE' as ProdRank,  etb.SubMaterialId  as MiddleID , ftb.BOMKeyId as OptionID," +
			"    count(ftb.BOMKeyId) as TMC  " +
			"    FROM [BOMSubMatInfo] tba    " +
			"    LEFT JOIN BOMSubMatInfo lvb on tba.[SubMaterialId] = lvb.[BOMKeyId]   " +
			"    LEFT JOIN BOMSubMatInfo lvv on lvb.SubMaterialId =lvv.BOMKeyId    " +
			"    LEFT JOIN BOMSubMatInfo etb on lvv.SubMaterialId =etb.BOMKeyId  " +
			"    LEFT JOIN BOMSubMatInfo ftb on etb.SubMaterialId =ftb.BOMKeyId   	  " +
			"    WHERE  tba.BOMKeyId =  '" + loopProdID + "'  and lvb.[SubMatType]='0' " +
			"    and lvv.[SubMatType]='0' and etb.[SubMatType]='0'  " +
			"    group By  etb.SubMaterialId , ftb.BOMKeyId " +
			// "	SELECT 'spE' as ProdRank,   " +
			// "	etb.SubMaterialId  as MiddleID ,'' as OptionID , count(*) as TMC  FROM [BOMSubMatInfo] tba   " +
			// "	LEFT JOIN BOMSubMatInfo lvb on tba.[SubMaterialId] = lvb.[BOMKeyId]  " +
			// "	LEFT JOIN BOMSubMatInfo lvv on lvb.SubMaterialId =lvv.BOMKeyId    " +
			// "	LEFT JOIN BOMSubMatInfo etb on lvv.SubMaterialId =etb.BOMKeyId    " +
			// "	WHERE  tba.BOMKeyId = '" + loopProdID + "' and lvb.[SubMatType]='0' and lvv.[SubMatType]='0'  " +
			// "	and etb.[SubMatType]='0' group By  etb.SubMaterialId   " +
			"	order by ProdRank ,MiddleID  ";

		yjDBService_sqlserver.exec({
			connectionOptions: connection,
			sql: SQLqry,
			parameters: [loopProdID, loopProdID, loopProdID, loopProdID, OutSour, OutSour],
			success: function (r) {
				var datas = []
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				for (var i = 0; i < data.length; i++) {
					var temp = {
						"TMC": data[i].TMC,
						"MiddleID": data[i].MiddleID,
					}

					var TMC = data[i].TMC;
					var MiddleID = data[i].MiddleID;
					var Rank = data[i].ProdRank;
					var spName = '';
					if (Rank == 'szA') {

					} else if (Rank == 'szB') {
						sizeB[lengthB] = TMC;
						prodB[lengthB] = MiddleID;
						if (lengthB > 0 && lengthB < 30) {
							// console.log("序：", lengthB, "西B永", sizeB[lengthB], ":", prodB[lengthB]);
						}
						lengthB++;
					} else if (Rank == 'spB') {
						var TMCTot = ''; var MLBTot = 0; var EndFlag = 'N';
						if (TMC != undefined && TMC != '') {
							TMCTot = parseInt(TMC, 10);
							MLBTot = parseInt(TMC, 10);
							if (TMCTot == 0) {
								TMCTot = '1'; 
							} else {
								 
							}
						} else {
							TMCTot = '1';  
						}
						if(MLBTot >= 1){
							EndFlag = '否';
						}else{
							EndFlag = '是';
						}
						psizeB[splenB] = TMC;
						middlB[splenB] = MiddleID;
						enuchB[splenB] =  EndFlag;
						if (splenB > 0 && splenB < 3) {
						    console.log("B人爱", MLBTot ,"东B", psizeB[splenB], "帮到忙", middlB[splenB], "好勒", enuchB[splenB]);
						}
						splenB++;
					} else if (Rank == 'szC') {
						sizeC[lengthC] = TMC;
						prodC[lengthC] = MiddleID;
						// console.log("西C永", sizeC[lengthC]);
						lengthC++;
					} else if (Rank == 'spC') {
						var TMCTot = ''; var MLBTot = 0; var EndFlag = 'N';
						if (TMC != undefined && TMC != '') {
							TMCTot = parseInt(TMC, 10);
							MLBTot = parseInt(TMC, 10);
							if (TMCTot == 0) {
								TMCTot = '1'; 
							} else {
								 
							}
						} else {
							TMCTot = '1';  
						}
						if(MLBTot >= 1){//避免 压力传感器AF4-A000039-A1T 为否
							EndFlag = '否';
						}else{
							EndFlag = '是';
						}
						enuchC[splenC] = EndFlag;
						psizeC[splenC] = TMCTot;
						middlC[splenC] = MiddleID;
						if (splenC > 0 && splenC < 500) {
							if(middlC[splenC]=='AEK-A020120-A00'){
								console.log( "零度", enuchC[splenC] ,"应该是终点", psizeC[splenC], "帮到忙", middlC[splenC]);
							}
							// console.log("东C涌", psizeC[splenC], "帮到忙", middlC[splenC], "零度", enuchC[splenC]);
						}
						splenC++;
					} else if (Rank == 'szD') {
						sizeD[lengthD] = TMC;
						prodD[lengthD] = MiddleID;
						// console.log("西D永", sizeD[lengthD]);
						lengthD++;
					} else if (Rank == 'spD') {
						var TMCTot = ''; var MLBTot = 0; var EndFlag = 'N';
						if (TMC != undefined && TMC != '') {
							TMCTot = parseInt(TMC, 10);
							MLBTot = parseInt(TMC, 10);
							if (TMCTot == 0) {
								TMCTot = '1'; 
							} else {
								 
							}
						} else {
							TMCTot = '1';  
						}
						if(MLBTot >= 1){
							EndFlag = '否';
						}else{
							EndFlag = '是';
						}
						enuchD[splenD] = EndFlag;
						psizeD[splenD] = TMCTot;
						middlD[splenD] = MiddleID;
						if (splenD > 0 && splenD < 30) {
							// console.log("东D涌", splenD, "套餐", psizeD[splenD], "帮", middlD[splenD]);
						}
						splenD++;
					} else if (Rank == 'szE') {
						sizeE[lengthE] = TMC;
						prodE[lengthE] = MiddleID;
						// console.log("西E永", sizeE[lengthE], "啥看",lengthE);
						lengthE++;
					} else if (Rank == 'spE') {
						var TMCTot = ''; var MLBTot = 0; var EndFlag = 'N';
						if (TMC != undefined && TMC != '') {
							TMCTot = parseInt(TMC, 10);
							if (TMCTot == 0) {
								TMCTot = '1'; MLBTot = 0;
							} else {
								MLBTot = TMCTot;
							}
						} else {
							TMCTot = '1'; MLBTot = 0;
						}
						if(MLBTot >= 1){
							EndFlag = '否';
						}else{
							EndFlag = '是';
						}
						enuchE[splenE] = EndFlag;
						psizeE[splenE] = TMCTot;
						middlE[splenE] = MiddleID;
						if (splenE > 0 && splenE < 5) {
							// console.log("东E涌", splenE, "优雅", psizeE[splenE]);
						}
						splenE++;
					} else {

					}
					// datas.push(temp);
				}
				caculate();
			},
			error: sender.error
		})
	}
	function caculate() {
		var quanity = 0;
		var accumu = 0;
		for (var i = 0; i < lengthB; i++) {
			quanity = sizeB[i];
			lowerB[i] = accumu;
			upperB[i] = lowerB[i] + sizeB[i];
			// console.log("南", lowerB[i], "帝", upperB[i], "对=>", sizeB[i]);
			accumu = accumu + quanity;
		}
		var quan = 0;
		var accu = 0;
		for (var i = 0; i < lengthC; i++) {
			quan = sizeC[i];
			lowerC[i] = accu;
			upperC[i] = lowerC[i] + sizeC[i];
			accu = accu + quan;
			// console.log("------------市", lowerC[i], "橋", upperC[i], "对=>", sizeC[i]);
		}
		var quanD = 0;
		var accuD = 0;
		for (var i = 0; i < lengthD; i++) {
			quanD = sizeD[i];
			lowerD[i] = accuD;
			upperD[i] = lowerD[i] + sizeD[i];
			accuD = accuD + quanD;
			// console.log("$$$$$$$$$$$$$$$$$$$$$$$$$陆", lowerD[i], "钰", upperD[i], "对=>", sizeD[i]);
		}
		var quanE = 0;
		var accuE = 0;
		for (var i = 0; i < lengthE; i++) {
			quanE = sizeE[i];
			lowerE[i] = accuE;
			upperE[i] = lowerE[i] + sizeE[i];
			accuE = accuE + quanE;
			// console.log("台", lowerE[i], "敏", upperE[i], "对=>", sizeE[i]);
		}
		loop_NLevel(lowerB, upperB, lowerC, upperC, lowerD, upperD, lowerE, upperE);
	}
	function loop_NLevel(lowerB, upperB, lowerC, upperC, lowerD, upperD, lowerE, upperE) {
		let state = []; let statAAA = []; let statRRR = []; let statQTY = []; let statCAB = []; let statNNN = []; let statCCC = []; let statUSG = []; let statWAS = []; let statCHI = []; let statDES = []; let statPPP = []; let statlen = 0; let statCHD = []; let statSTP = [];
		let statSED = []; let statPRC = []; let statCOS = [];let statEND = [];
		var datas = [];
		var SQLqry =
			" SELECT  DISTINCT 'A' as ProdRank,  tba.BOMKeyName as MaterialName ,tba.BOMKeyName as ClassID , tba.BOMKeyName  as PartsChi ,tba.BOMStyleId, tba.[BOMKeyId] as ParentID,  " +
			" tba.[BOMKeyId] as MiddleID , '' as  LastID  , 0 as [UnitQty] , 0 as [WasteRate] ,'' as Remark ,  tba.[BOMKeyName] as ProdName , " +
			"  convert (varchar(20),prc.StandPrice  )  as StandPrice,  " +
			"  tcm.[CU_OldMaterialId] as OldMat ,tcm.[CU_OldMaterialSpec] as OldSpc , tcm.[TotalStkQty] as TotQty , '' as CabinA   FROM [BOMMainInfo] tba   " +
			" LEFT JOIN comMaterial tcm on tba.[BOMKeyId] =tcm.[MaterialId] " +
			" LEFT JOIN comMaterialPurchases prc on tba.[BOMKeyId] = prc.MaterialId  " +
			" WHERE  tba.BOMKeyId =  ?  " +
			"  Union   " +
			" SELECT DISTINCT 'B' as ProdRank, ktb.MaterialName , subString(lvb.SubMaterialId,2,2) as ClassID , tic.MaterialCategoryName as PartsChi,tba.BOMStyleId, tba.[BOMKeyId] as ParentID,  " +
			" tba.[BOMKeyId] as MiddleID ,lvb.SubMaterialId  as LastID, lvb.UnitQty as [UnitQty] ,lvb.WasteRate as [WasteRate] , '' as Remark , lvb.[SubMaterialSpec] as ProdName  , " +
			" convert (varchar(20),prc.StandPrice  )  as StandPrice," +
			" tcm.[CU_OldMaterialId] as OldMat , tcm.[CU_OldMaterialSpec] as OldSpc , tcm.[TotalStkQty] as TotQty ," +
			"   convert (varchar(20),cmv.Quantity  ) as CabinA  FROM [BOMMainInfo] tba   " +
			" LEFT JOIN BOMSubMatInfo lvb on tba.[BOMKeyId] =lvb.[BOMKeyId] " +
			" LEFT JOIN comMaterial tcm on lvb.SubMaterialId =tcm.[MaterialId] " +
			" LEFT JOIN  [stkWareHouseAccountDetail]  cmv on tcm.[MaterialId] = cmv.[MaterialId]  and cmv.[WarehouseId] = 'NBA'  and StkBizAttr='1'   " +
			" LEFT JOIN comMaterialCategory tic on subString(lvb.SubMaterialId,2,2) =tic.MaterialCategoryId  " +
			" LEFT JOIN [comMaterialGroup] ktb on ktb.MaterialId  = lvb.SubMaterialId  " +
			" LEFT JOIN comMaterialPurchases prc on lvb.SubMaterialId = prc.MaterialId " +
			" WHERE  tba.BOMKeyId =  ?  and lvb.[SubMatType]='0' " +
			" Union   " +
			" SELECT 'C' as ProdRank, ktb.MaterialName ,  subString(lvb.SubMaterialId,2,2) as ClassID, tic.MaterialCategoryName as PartsChi , lvb.[SubMatType],  lvb.[BOMKeyId] as ParentID,  " +
			" lvb.[BOMKeyId] as MiddleID , lvb.SubMaterialId as LastID, lvb.UnitQty as [UnitQty] ,lvb.WasteRate as [WasteRate] , '' as Remark , lvb.[SubMaterialSpec] as ProdName  ,   " +
			" convert (varchar(20),prc.StandPrice  )  as StandPrice," +
			" tcm.[CU_OldMaterialId] as OldMat , tcm.[CU_OldMaterialSpec] as OldSpc  , tcm.[TotalStkQty] as TotQty ,  convert (varchar(20),cmv.Quantity  ) as CabinA  FROM [BOMSubMatInfo] tba   " +
			" LEFT JOIN BOMSubMatInfo lvb on tba.[SubMaterialId] = lvb.[BOMKeyId] " +
			" LEFT JOIN [BOMMainInfo] vat on vat.[BOMKeyId] = lvb.SubMaterialId " +
			" LEFT JOIN comMaterial tcm on lvb.SubMaterialId =tcm.[MaterialId] " +
			" LEFT JOIN  [stkWareHouseAccountDetail]  cmv on tcm.[MaterialId] = cmv.[MaterialId]  and cmv.[WarehouseId] = 'NBA'  and StkBizAttr='1'   " +
			" LEFT JOIN comMaterialCategory tic on subString(lvb.SubMaterialId,2,2) =tic.MaterialCategoryId  " +
			" LEFT JOIN [comMaterialGroup] ktb on ktb.MaterialId  = lvb.SubMaterialId  " +
			" LEFT JOIN comMaterialPurchases prc on lvb.SubMaterialId = prc.MaterialId " +
			" WHERE  tba.BOMKeyId =  ?  and lvb.[SubMatType]='0'  " +
			" and ( vat.[ValidityToDate] = '99999999' OR vat.[ValidityToDate] is null ) " +
			"  Union   " +
			" SELECT 'D' as ProdRank,  ktb.MaterialName ,   subString(lvv.SubMaterialId,2,2) as ClassID , tic.MaterialCategoryName as PartsChi , lvv.[SubMatType],  lvv.[BOMKeyId] as ParentID,  " +
			"  lvv.BOMKeyId  as MiddleID , lvv.SubMaterialId as LastID, lvv.UnitQty as [UnitQty] , lvv.WasteRate as [WasteRate] , '' as Remark , lvv.[SubMaterialSpec] as ProdName , " +
			"  convert (varchar(20),prc.StandPrice  )  as StandPrice, " +
			"  tcm.[CU_OldMaterialId] as OldMat , tcm.[CU_OldMaterialSpec] as OldSpc  , tcm.[TotalStkQty] as TotQty ,   convert (varchar(20),cmv.Quantity  ) as CabinA  FROM [BOMSubMatInfo] tba   " +
			"  LEFT JOIN BOMSubMatInfo lvb on tba.[SubMaterialId] = lvb.[BOMKeyId]     " +
			"  LEFT JOIN BOMSubMatInfo lvv on lvb.SubMaterialId =lvv.BOMKeyId " +
			"  LEFT JOIN comMaterial tcm on lvv.SubMaterialId =tcm.[MaterialId] " +
			" LEFT JOIN  [stkWareHouseAccountDetail]  cmv on tcm.[MaterialId] = cmv.[MaterialId]  and cmv.[WarehouseId] = 'NBA'  and StkBizAttr='1'   " +
			" LEFT JOIN comMaterialCategory tic on subString(lvv.SubMaterialId,2,2) =tic.MaterialCategoryId  " +
			" LEFT JOIN [comMaterialGroup] ktb on ktb.MaterialId  = lvv.SubMaterialId  " +
			" LEFT JOIN comMaterialPurchases prc on lvv.SubMaterialId = prc.MaterialId " +
			" WHERE  tba.BOMKeyId =  ?  and lvb.[SubMatType]='0' and lvv.[SubMatType]='0' " +
			"  Union   " +
			" SELECT 'E' as ProdRank,  ktb.MaterialName ,  subString(etb.SubMaterialId,2,2) as ClassID, tic.MaterialCategoryName as PartsChi , etb.[SubMatType],  etb.[BOMKeyId] as ParentID,  " +
			"  etb.BOMKeyId  as MiddleID , etb.SubMaterialId as LastID, etb.UnitQty as [UnitQty] , etb.WasteRate as [WasteRate] ,'' as Remark , etb.[SubMaterialSpec] as ProdName , " +
			" convert (varchar(20),prc.StandPrice  )  as StandPrice, " +
			"  tcm.[CU_OldMaterialId] as OldMat , tcm.[CU_OldMaterialSpec] as OldSpc , tcm.[TotalStkQty] as TotQty ,    convert (varchar(20),cmv.Quantity  ) as CabinA  FROM [BOMSubMatInfo] tba   " +
			"  LEFT JOIN BOMSubMatInfo lvb on tba.[SubMaterialId] = lvb.[BOMKeyId]     " +
			"  LEFT JOIN BOMSubMatInfo lvv on lvb.SubMaterialId =lvv.BOMKeyId  " +
			"  LEFT JOIN BOMSubMatInfo etb on lvv.SubMaterialId =etb.BOMKeyId " +
			"  LEFT JOIN comMaterial tcm on etb.SubMaterialId =tcm.[MaterialId]   " +
			" LEFT JOIN  [stkWareHouseAccountDetail]  cmv on tcm.[MaterialId] = cmv.[MaterialId]  and cmv.[WarehouseId] = 'NBA'  and StkBizAttr='1'   " +
			" LEFT JOIN comMaterialCategory tic on subString(etb.SubMaterialId,2,2) =tic.MaterialCategoryId  " +
			" LEFT JOIN [comMaterialGroup] ktb on ktb.MaterialId  = etb.SubMaterialId  " +
			" LEFT JOIN comMaterialPurchases prc on etb.SubMaterialId = prc.MaterialId " +
			" WHERE  tba.BOMKeyId =  ?  and lvb.[SubMatType]='0' and lvv.[SubMatType]='0'  " +
			" and etb.[SubMatType]='0' " +
			"  Union   " +
			" SELECT 'F' as ProdRank,  ktb.MaterialName ,  subString(ftb.SubMaterialId,2,2) as ClassID , tic.MaterialCategoryName as PartsChi , ftb.[SubMatType],  ftb.[BOMKeyId] as ParentID, " +
			"  ftb.BOMKeyId  as MiddleID , ftb.SubMaterialId as LastID , ftb.UnitQty as [UnitQty] , ftb.WasteRate as [WasteRate] , '' as Remark , ftb.[SubMaterialSpec] as ProdName , " +
			" convert (varchar(20),prc.StandPrice  )  as StandPrice," +
			"   tcm.[CU_OldMaterialId] as OldMat , tcm.[CU_OldMaterialSpec] as OldSpc , tcm.[TotalStkQty] as TotQty ,   convert (varchar(20),cmv.Quantity  ) as CabinA  FROM [BOMSubMatInfo] tba   " +
			"  LEFT JOIN BOMSubMatInfo lvb on tba.[SubMaterialId] = lvb.[BOMKeyId]     " +
			"  LEFT JOIN BOMSubMatInfo lvv on lvb.SubMaterialId =lvv.BOMKeyId  " +
			"  LEFT JOIN BOMSubMatInfo etb on lvv.SubMaterialId =etb.BOMKeyId    " +
			"  LEFT JOIN BOMSubMatInfo ftb on etb.SubMaterialId =ftb.BOMKeyId " +
			"  LEFT JOIN comMaterial tcm on ftb.SubMaterialId =tcm.[MaterialId]  " +
			" LEFT JOIN  [stkWareHouseAccountDetail]  cmv on tcm.[MaterialId] = cmv.[MaterialId]  and cmv.[WarehouseId] = 'NBA'  and StkBizAttr='1'   " +
			" LEFT JOIN comMaterialCategory tic on subString(ftb.SubMaterialId,2,2) =tic.MaterialCategoryId  " +
			" LEFT JOIN [comMaterialGroup] ktb on ktb.MaterialId  = ftb.SubMaterialId  " +
			" LEFT JOIN comMaterialPurchases prc on ftb.SubMaterialId = prc.MaterialId " +
			" WHERE  tba.BOMKeyId =  ?  and lvb.[SubMatType]='0' and lvv.[SubMatType]='0'  " +
			" and etb.[SubMatType]='0' and ftb.[SubMatType]='0'  " +
			" order by ProdRank ,MiddleID ";
		let root = [];
		const promise = new Promise((resolve, reject) => {
			yjDBService_sqlserver.exec({
				connectionOptions: connection,
				sql: SQLqry,
				parameters: [ProductID, ProductID, ProductID, ProductID, ProductID, ProductID],
				success: function (r) {
					var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
					console.log("得天下", data.length); //725
					if (data.length == 0) {
						let level3 = {
							"status": "FAIL"
							, enname: 'NA'
							, id: '0' //不可以设其他的，会无法relaod
							, field: '000'
							, encode: '123'
							, oldmat: '123'
							, oldspc: '123'
							, totqty: '123'
							, cabinA: '123'
							, seed: '123'
							, price: '123'
							, spread: true  //展开或不展开
							, cost: '0'
							, isend: 'N'
							, children: root
						};
						binrec.push('NA' + "##" + '000' + "##" + '123' + "##" + '123' + "##" + '123' + "##" + '123' + "##" + '123' + "##" + '123' + "##" + '123' + "##" + '123' + "##"+ '123' + "##");
						datas.push(level3);
						sender.success(datas);
						return;
					}
					for (var i = 0; i < 1; i++) {
						var combine = '';
						var Rank = data[i].ProdRank;
						var OID = '101';
						var PID = '00';
						var PartsOldName = data[i].ProdName; PartsOldName = nulReplaceTxt(PartsOldName);
						var PartsName = data[i].ProdName; PartsName = nulReplaceTxt(PartsName);
						var PartsOldCode = data[i].ParentID; PartsOldCode = nulReplaceNum(PartsOldCode);
						var PartsCode = data[i].ParentID; PartsCode = nulReplaceNum(PartsCode);
						var Dosage = data[i].UnitQty; Dosage = nulReplaceNum(Dosage);
						var Damage = data[i].WasteRate; Damage = nulReplaceNum(Damage);
						var PartsChi = data[i].PartsChi;
						var Descrip = data[i].MaterialName; Descrip = nulReplaceTxt(Descrip);
						var OldMat = data[i].OldMat; OldMat = nulReplaceTxt(OldMat);
						var OldSpc = data[i].OldSpc; OldSpc = nulReplaceTxt(OldSpc);
						var TotQty = data[i].TotQty; TotQty = nulReplaceTxt(TotQty);
						var CabinA = data[i].CabinA; CabinA = nulReplaceTxt(CabinA);
						var StandPrice = data[i].StandPrice; StandPrice = nanReplaceZero(StandPrice);
						var display = '';
						var displayCode = '';
						display = PartsOldName;
						displayCode = PartsOldCode;
						if (Rank == 'A') {
							state.push(OID);
							statNNN.push(display);
							statCCC.push(displayCode);
							statPPP.push(PID);
							statUSG.push(Dosage);
							statWAS.push(Damage);
							statCHI.push(PartsChi);
							statDES.push(Descrip);
							statAAA.push(OldMat);
							statRRR.push(OldSpc);
							statQTY.push(TotQty);
							statCAB.push(CabinA);
							statSED.push("" + splenB);
							statPRC.push(StandPrice);
							statCOS.push(StandPrice);
							statEND.push('否');
							let level3 = {
								enname: '' + statNNN[0] //集成总号：statNNN[0] 
								, id: '0' //不可以设其他的，会无法relaod
								, field: '000'
								, encode: statCCC[0]
								, stock: statUSG[0]
								, waste: statWAS[0]
								, belong: statCHI[0]
								, descrip: statDES[0]
								, oldmat: statAAA[0]
								, oldspc: statRRR[0]
								, totqty: statQTY[0]
								, cabinA: statCAB[0]
								, seed: statSED[0]
								, price: statPRC[0]
								, cost: '0'
								, isend: statEND[0]
								, spread: true  //展开或不展开
								, children: root
							};
							binrec.push('' + '0' + "##" + statPPP[0] + "##" + statNNN[0] + "##" + statCCC[0] + "##" +
								statUSG[0] + "##" + statWAS[0] + "##" + statCHI[0] + "##" + statDES[0] + "##" + statAAA[0] + "##" +
								statRRR[0] + "##" + statQTY[0] + "##" + statCAB[0] + "##" + statSED[0] + "##" + statPRC[0] + "##" + statCOS[0] + "##" + statEND[0] + "##");
							datas.push(level3);
							div2Floor(root, statCCC[statlen], statPPP[statlen], data, lowerB, upperB, lowerC, upperC, lowerD, upperD, lowerE, upperE); //原state
							root = [];
							statlen++;
							cnt++;
						}
					}
					resolve('长安城少东');
					for (var i = 0; i < binrec.length; i++) {
						if (i >= 0 && i < 1) {
							console.log("皮", binrec[i]);
						}
					}
					// var dump = JSON.stringify(datas);
					// if (dump.length > 100) {
					// 	console.log("很複杂:" + dump.substring(0, 100));
					// } else {
					// 	console.log("很简单:" + JSON.stringify(datas));
					// }
					console.log("多少长安", cnt);
				},
				error: function () {
					reject('失败了');
				}
			});
		});
		promise.then(data => {
			sender.success(binrec);
			// sender.success(datas);
			console.log("这是 excel", data);
		}).catch(data => {
			let level3 = {
				"status": "FAIL"
				, enname: 'NA'
				, id: '0' //不可以设其他的，会无法relaod
				, field: '000'
				, encode: '123'
				, oldmat: '123'
				, oldspc: '123'
				, totqty: '123'
				, cabinA: '123'
				, seed: '123'
				, price: '123'
				, cost: '0'
				, isend: 'N'
				, spread: true
				, children: root
			};
			datas.push(level3);
			// sender.success(datas);
			sender.success(binrec);
			console.log("异常", data);
		});
	}
	function div2Floor(root, SN1No, lv2OID, data, lowerB, upperB, lowerC, upperC, lowerD, upperD, lowerE, upperE) {
		let dataAA = [];
		var lenAA = 0;
		let dataBB = [];
		var lenBB = 0;
		let dataCC = [];
		var lenCC = 0;
		let dataDD = [];
		var lenDD = 0;
		let dataEE = [];
		var lenEE = 0;
		let dataFF = [];
		var lenFF = 0;
		let datafront = [];
		var lenFront = 0;
		let dataBack = [];
		var lenBack = 0;
		for (var i = 0; i < data.length; i++) {
			var Rank = data[i].ProdRank;
			if (Rank == 'A') {
				dataAA[lenAA] = data[i];
				lenAA++;
			} else if (Rank == 'B') {
				dataBB[lenBB] = data[i];
				if(data[i].LastID =='AF4-A000040-A1T'){
					console.log("B男神....", data[i].LastID);
				}
				lenBB++;
			} else if (Rank == 'C') {
				dataCC[lenCC] = data[i];
				if(data[i].LastID =='AF4-A000039-A1T'){
					console.log("C男神....", data[i].LastID);
				}
				lenCC++;
			} else if (Rank == 'D') {
				dataDD[lenDD] = data[i];
				if(data[i].LastID =='AF4-A000050-A7R'){
					console.log("D男神....", data[i].LastID,"粗暴--",lenDD);
				}
				lenDD++;
			} else if (Rank == 'E') {
				dataEE[lenEE] = data[i];
				lenEE++;
			} else if (Rank == 'F') {
				dataFF[lenFF] = data[i];
				// if (lenFF > 152) {
				// 	console.log("F男神....154", dataFF[lenFF]);
				// }
				lenFF++;
				// if (lenFF > 152) {
				// 	console.log("Rich", lenFF);
				// }
			} else {
				dataBack[lenBack] = data[i];
				lenBack++;
			}
		}
		run2Floor(root, SN1No, lv2OID, dataBB, dataCC, dataDD, dataEE, dataFF, lowerB, upperB, lowerC, upperC, lowerD, upperD, lowerE, upperE);
	}
	function run2Floor(root, SN1No, lv2OID, data, dataCC, dataDD, dataEE, dataFF, lowerB, upperB, lowerC, upperC, lowerD, upperD, lowerE, upperE) {
		let provi = []; let provAAA = []; let provRRR = []; let provQTY = []; let provCAB = []; let provNNN = []; let provCCC = []; let provUSG = []; let provWAS = []; let provCHI = []; let provDES = []; let provPPP = []; let provlen = 0; let provCHD = [];
		let provSED = []; let provPRC = []; let provCOS = []; let provEND = []; let AAA = [];
		var SN2No = 1;
		if (DEBUG == '1') {

		}
		console.log("2年级有==", data.length);
		for (var i = 0; i < data.length; i++) {
			var combine = '';
			var OID = '2' + SN2No;
			var Rank = data[i].ProdRank;
			var PID = '101';
			var PartsOldName = data[i].MaterialName; PartsOldName = nulReplaceTxt(PartsOldName);
			var PartsName = data[i].MaterialName; PartsName = nulReplaceTxt(PartsName);
			var PartsOldCode = data[i].LastID; PartsOldCode = nulReplaceNum(PartsOldCode);
			var PartsCode = data[i].LastID; PartsCode = nulReplaceNum(PartsCode);
			var Dosage = data[i].UnitQty; Dosage = nulReplaceNum(Dosage);
			var Damage = data[i].WasteRate; Damage = nulReplaceNum(Damage);
			var PartsChi = data[i].PartsChi;
			var Descrip = data[i].ProdName; Descrip = nulReplaceTxt(Descrip);
			var display = '';
			var displayCode = '';
			var OldMat = data[i].OldMat; OldMat = nulReplaceTxt(OldMat);
			var OldSpc = data[i].OldSpc; OldSpc = nulReplaceTxt(OldSpc);
			var TotQty = data[i].TotQty; TotQty = nulReplaceTxt(TotQty);
			var CabinA = data[i].CabinA; CabinA = nulReplaceTxt(CabinA);
			var StandPrice = data[i].StandPrice; StandPrice = nanReplaceZero(StandPrice);
			display = PartsOldName;
			displayCode = PartsOldCode;
			// var sibling = psizeB[SN2No - 1];
			var sibling = '1'; var enuch = '是';
			for (var ki = 0; ki < data.length; ki++) {
				if (middlB[ki] == displayCode) {
					sibling = psizeB[ki]; enuch= enuchB[ki];
					// console.log("砸场B", sibling);
				}
			}
			if (Rank == 'B') {
				provSED.push("" + sibling);  //sizeB[0]
				SN2No++;
				provi.push(OID);
				provNNN.push(display);
				provCCC.push(displayCode);
				provPPP.push(PID);
				provUSG.push(Dosage);
				provWAS.push(Damage);
				provCHI.push(PartsChi);
				provDES.push(Descrip);
				provAAA.push(OldMat);
				provRRR.push(OldSpc);
				provQTY.push(TotQty);
				provCAB.push(CabinA);
				var finprice = '';
				var costTOT = ''; var fincost = '';
				if (StandPrice != undefined && StandPrice != '') {
					StandPrice = parseFloat(StandPrice);
					finprice = StandPrice.toFixed(2);
				}
				var costTOT = sibling * StandPrice;
				if (costTOT != undefined && costTOT != '') {
					costTOT = parseFloat(costTOT);
					costTOT = costTOT.toFixed(2);
					fincost = '' + costTOT;
				} else {
					fincost = '0';
				}
				provPRC.push(finprice);
				provCOS.push(fincost);
				provEND.push(enuch);
				var temp = {
					enname: "" + provNNN[provlen]
					, id: provi[provlen]
					, field: provPPP[provlen]
					, encode: provCCC[provlen]
					, stock: provUSG[provlen]
					, waste: provWAS[provlen]
					, belong: provCHI[provlen]
					, descrip: provDES[provlen]
					, oldmat: provAAA[provlen]
					, oldspc: provRRR[provlen]
					, totqty: provQTY[provlen]
					, cabinA: provCAB[provlen]
					, seed: provSED[provlen]
					, price: provPRC[provlen]
					, cost: provCOS[provlen]
					, isend: provEND[provlen]
					, children: AAA
				}
				root.push(temp);
				binrec.push('' + provi[provlen] + "##" + provPPP[provlen] + "##" + provNNN[provlen] + "##" + provCCC[provlen] + "##"
					+ provUSG[provlen] + "##" + provWAS[provlen] + "##" + provCHI[provlen] + "##" + provDES[provlen] + "##" + provAAA[provlen] + "##"
					+ provRRR[provlen] + "##" + provQTY[provlen] + "##" + provCAB[provlen] + "##" + provSED[provlen] + "##" + provPRC[provlen] + "##" 
					+ provCOS[provlen] + "##" + provEND[provlen] + "##");
				if (DEBUG == '1') {
				}
				if (showTime > 2) {
					for (var ki = 0; ki < lengthB; ki++) {
						if (prodB[ki] == provCCC[provlen]) {// 瞬移
							if(prodB[ki] =='AF4-A000039-A1T'){
								console.log("比特币", provCCC[provlen]);
							}
							run3Floor(AAA, provi[provlen], provCCC[provlen], dataCC, dataDD, dataEE, dataFF, lowerB[ki], upperB[ki], lowerC, upperC, lowerD, upperD, lowerE, upperE);
						}
					}
				}
				// console.log("比比", provCCC[provlen], "2橘", provNNN[provlen], "廣", provi[provlen], "序号=", SN2No, " 艺琳", provPPP[provlen]);
				cnt++;
				provlen++;
				AAA = []; //超级重要
			}
		}
	}
	function run3Floor(AAA, SN2No, lv3OID, data, dataDD, dataEE, dataFF, lowB, uppB, lowerC, upperC, lowerD, upperD) {
		let citie = []; let cityAAA = []; let cityRRR = []; let cityQTY = []; let cityCAB = []; let cityNNN = []; let cityCCC = []; let cityUSG = []; let cityWAS = []; let cityCHI = []; let cityDES = []; let cityPPP = []; let citylen = 0; let cityCHD = [];
		let citySED = []; let cityPRC = []; let cityCOS = []; let cityEND = [];
		let BBB = [];
		var SN3No = 1;
		// for (var i = 0; i < data.length; i++) {
		var lowFix = 0;
		if(lowB <=0 ){
			
		}else{
			lowFix = lowB-1;
		}
		for (var i = lowFix; i < (uppB); i++) {   //这是OK的 
			SN3No++;
			var Rank = data[i].ProdRank;
			if (Rank == 'C') {
				var combine = '';
				var OID = '3' + SN3No;
				var PID = SN2No;
				var MiddleID = data[i].MiddleID;
				var PartsOldName = data[i].MaterialName; PartsOldName = nulReplaceTxt(PartsOldName);
				var PartsName = data[i].MaterialName; PartsName = nulReplaceTxt(PartsName);
				var PartsOldCode = data[i].LastID; PartsOldCode = nulReplaceNum(PartsOldCode);
				var PartsCode = data[i].LastID; PartsCode = nulReplaceNum(PartsCode);
				var Dosage = data[i].UnitQty; Dosage = nulReplaceNum(Dosage);
				var Damage = data[i].WasteRate; Damage = nulReplaceNum(Damage);
				var PartsChi = data[i].PartsChi;
				var Descrip = data[i].ProdName; Descrip = nulReplaceTxt(Descrip);
				var OldMat = data[i].OldMat; OldMat = nulReplaceTxt(OldMat);
				var OldSpc = data[i].OldSpc; OldSpc = nulReplaceTxt(OldSpc);
				var TotQty = data[i].TotQty; TotQty = nulReplaceTxt(TotQty);
				var CabinA = data[i].CabinA; CabinA = nulReplaceTxt(CabinA);
				var StandPrice = data[i].StandPrice; StandPrice = nanReplaceZero(StandPrice);
				var display = '';
				var displayCode = '';
				display = PartsOldName;
				displayCode = PartsOldCode;
				// var sibling = psizeC[SN3No - 2];
				var sibling = '1'; var enuch = '是';
				for (var gi = 0; gi < splenC; gi++) {
					if (middlC[gi] == displayCode) {
						sibling = psizeC[gi]; enuch = enuchC[gi];
						// console.log("砸场C", sibling ,"爱：",displayCode);
					}
				}
				if (lv3OID == MiddleID) {
					citie.push(OID);
					cityNNN.push(display);
					cityCCC.push(displayCode);
					cityPPP.push(PID);
					cityUSG.push(Dosage);
					cityWAS.push(Damage);
					cityCHI.push(PartsChi);
					cityDES.push(Descrip);
					cityAAA.push(OldMat);
					cityRRR.push(OldSpc);
					cityQTY.push(TotQty);
					cityCAB.push(CabinA);
					citySED.push("" + sibling);
					var finprice = '';
					var costTOT = ''; var fincost = '';
					// console.log("再无涅槃", StandPrice , displayCode );
					if (StandPrice != undefined && StandPrice != '') {
						StandPrice = parseFloat(StandPrice);
						finprice = StandPrice.toFixed(2);
					}
					var costTOT = sibling * StandPrice;
					if (costTOT != undefined && costTOT != '') {
						costTOT = parseFloat(costTOT);
						costTOT = costTOT.toFixed(2);
						fincost = '' + costTOT;
					} else {
						fincost = '0';
					}
					cityPRC.push(finprice);
					cityCOS.push(fincost);
					cityEND.push(enuch);
					var temp = {
						enname: "" + cityNNN[citylen]
						, id: citie[citylen]
						, field: cityPPP[citylen]
						, encode: cityCCC[citylen]
						, stock: cityUSG[citylen]
						, waste: cityWAS[citylen]
						, belong: cityCHI[citylen]
						, descrip: cityDES[citylen]
						, oldmat: cityAAA[citylen]
						, oldspc: cityRRR[citylen]
						, totqty: cityQTY[citylen]
						, cabinA: cityCAB[citylen]
						, seed: citySED[citylen]
						, price: cityPRC[citylen]
						, cost: cityCOS[citylen]
						, isend: cityEND[citylen]
						, children: BBB
					}
					AAA.push(temp);
					binrec.push('' + citie[citylen] + "##" + cityPPP[citylen] + "##" + cityNNN[citylen] + "##" + cityCCC[citylen] + "##" +
						cityUSG[citylen] + "##" + cityWAS[citylen] + "##" + cityCHI[citylen] + "##" + cityDES[citylen] + "##" + 
						cityAAA[citylen] + "##" + cityRRR[citylen] + "##" + cityQTY[citylen] + "##" + cityCAB[citylen] + "##" + 
						citySED[citylen] + "##" + cityPRC[citylen] + "##" + cityCOS[citylen] + "##" + cityEND[citylen] + "##");
					cnt++;
					if (DEBUG == '1') {
						if (i > 10 && i < 15) {
							//CCC 要有 1BP_S600_AD05FM1
							// console.log("------山西", cityCCC[citylen], "媒", ParentID, "碳", cityPPP[citylen]);
						}
					}
					if (showTime > 3) {
						for (var ki = 0; ki < lengthC; ki++) {
							// if(prodC[ki] =='AF4-A000039-A1T'){
							// 	console.log("狗狗币", prodC[ki] );
							// }
							if (prodC[ki] == cityCCC[citylen]) {
								// console.log("骑射 ", ki , "喷 "+psizeD[ki]);
								 run4Floor(ki, BBB, citie[citylen], cityCCC[citylen], dataDD, dataEE, dataFF, lowerC[ki], upperC[ki], lowerD, upperD, lowerE, upperE);
							}
						}
					}
					if (cityCCC[citylen] == '1BP_S600_AD05FM1' || cityCCC[citylen] == '2BP_MMI_2386A') {
						// console.log("------喷了 ", cityCCC[citylen]);
					}
					citylen++;
					BBB = []; //超级重要
				}
			}
		}
	}
	function run4Floor(nowki, BBB, SN3No, lv4OID, data, dataEE, dataFF, lowC, uppC, lowerD, upperD, lowerE, upperE) {
		let areai = []; let areaAAA = []; let areaRRR = []; let areaQTY = []; let areaCAB = []; let areaNNN = []; let areaCCC = []; let areaUSG = []; let areaWAS = []; let areaCHI = []; let areaDES = []; let areaPPP = []; let arealen = 0; let areaCHD = [];
		let areaSED = []; let areaPRC = []; let areaCOS = []; let areaEND = [];
		let CCC = [];
		var SN4No = 0;
		console.log("凑", lowC ,"最大 ",uppC ,"正确",data.length ,"夏 ",lv4OID);
		var lowFix = 0;
		if(lowC <=0 ){
			
		}else{
			lowFix = lowC-1;
		}
		for (var i = lowFix; i < uppC; i++) {
			if (data[i] != null && data[i] != undefined) {
				SN4No++;
				var combine = '';
				var OID = '4' + SN4No;
				var Rank = data[i].ProdRank;
				var PID = SN3No;
				var MiddleID = data[i].MiddleID;
				var PartsOldName = data[i].MaterialName; PartsOldName = nulReplaceTxt(PartsOldName);
				var PartsName = data[i].MaterialName; PartsName = nulReplaceTxt(PartsName);
				var PartsOldCode = data[i].LastID; PartsOldCode = nulReplaceNum(PartsOldCode);
				var PartsCode = data[i].LastID; PartsCode = nulReplaceNum(PartsCode);
				var Dosage = data[i].UnitQty; Dosage = nulReplaceNum(Dosage);
				var Damage = data[i].WasteRate; Damage = nulReplaceNum(Damage);
				var PartsChi = data[i].PartsChi;
				var Descrip = data[i].ProdName; Descrip = nulReplaceTxt(Descrip);
				var OldMat = data[i].OldMat; OldMat = nulReplaceTxt(OldMat);
				var OldSpc = data[i].OldSpc; OldSpc = nulReplaceTxt(OldSpc);
				var TotQty = data[i].TotQty; TotQty = nulReplaceTxt(TotQty);
				var CabinA = data[i].CabinA; CabinA = nulReplaceTxt(CabinA);
				var StandPrice = data[i].StandPrice; StandPrice = nanReplaceZero(StandPrice);
				var display = '';
				var displayCode = '';
				display = PartsOldName;
				displayCode = PartsOldCode;
				// combine =   display + '##'  +  OID + '##' + displayCode + '##' + PID + '##' + Dosage + '##' + Damage + '##' + PartsChi + '##' + Descrip;
				if (Rank == 'D' && lv4OID == MiddleID) {  //1BP_S600_AD05FM1   AD板
					if(MiddleID =='AF4-A000039-A1T'){
						console.log("@@@@@@@抓到狗币", lv4OID,"才闪亮", PartsCode);
					}					 
					areai.push(OID);
					areaNNN.push(display);
					areaCCC.push(displayCode);
					areaPPP.push(PID);
					areaUSG.push(Dosage);
					areaWAS.push(Damage);
					areaCHI.push(PartsChi);
					areaDES.push(Descrip);
					areaAAA.push(OldMat);
					areaRRR.push(OldSpc);
					areaQTY.push(TotQty);
					areaCAB.push(CabinA);
					// var sibling = psizeD[SN4No - 1];
					var sibling = '1'; var enuch = '是';
					// if('AEK-A030053-A61'==displayCode){
					for (var gi = 0; gi < splenD; gi++) {
						if (middlD[gi] == displayCode) {
							sibling = psizeD[gi]; enuch = enuchD[gi];
						//      console.log("砸场D", sibling ,"爱：",displayCode);
						}
					}
					// }
					areaSED.push("" + sibling);
					var finprice = '';
					var costTOT = ''; var fincost = '';
					if (StandPrice != undefined && StandPrice != '') {
						StandPrice = parseFloat(StandPrice);
						finprice = StandPrice.toFixed(2);
					}
					var costTOT = sibling * StandPrice;
					if (costTOT != undefined && costTOT != '') {
						costTOT = parseFloat(costTOT);
						costTOT = costTOT.toFixed(2);
						fincost = '' + costTOT;
					} else {
						fincost = '0';
					}
					areaPRC.push(finprice);
					areaCOS.push(fincost);
					areaEND.push(enuch);
					var temp = {
						enname: "" + areaNNN[arealen]
						, id: areai[arealen]       //OID
						, field: areaPPP[arealen]  //PID
						, encode: areaCCC[arealen]
						, stock: areaUSG[arealen]
						, waste: areaWAS[arealen]
						, belong: areaCHI[arealen]
						, descrip: areaDES[arealen]
						, oldmat: areaAAA[arealen]
						, oldspc: areaRRR[arealen]
						, totqty: areaQTY[arealen]
						, cabinA: areaCAB[arealen]
						, seed: areaSED[arealen]
						, price: areaPRC[arealen]
						, cost: areaCOS[arealen]
						, isend: areaEND[arealen]
						, children: CCC
					}
					if (areaCCC[arealen] == 'AF4-A000050-A7R' ) {
						console.log("斗酒酒", areaCCC[arealen]);
						console.log("曲长歌", sibling, "傻才是", areaSED[arealen]);
						console.log("剑天涯", StandPrice, "沧海笑", areaPRC[arealen] );
						console.log("一一一", fincost);
					}
					if (DEBUG == '1') {
						if (areai[arealen] > '400' && areai[arealen] < '410') {
							// console.log("@@@诗人", areai[arealen], "智", areaCCC[arealen], "泉梓", areaNNN[arealen]);
						}
					}
					binrec.push('' + areai[arealen] + "##" + areaPPP[arealen] + "##" + areaNNN[arealen] + "##" + areaCCC[arealen] + "##" +
						areaUSG[arealen] + "##" + areaWAS[arealen] + "##" + areaCHI[arealen] + "##" + areaDES[arealen] + "##" + areaAAA[arealen] + "##" +
						areaRRR[arealen] + "##" + areaQTY[arealen] + "##" + areaCAB[arealen] + "##" + areaSED[arealen] + "##" + 
						areaPRC[arealen] + "##" + areaCOS[arealen] + "##" + areaEND[arealen] + "##");
					BBB.push(temp);
					cnt++;
					//  if (areaCCC[arealen] == '2BP_S600_AD05FM1') {
					//   	console.log(" 4明恩", areai[arealen], "智", areaCCC[arealen], "妃", areaNNN[arealen], "空", ParentID, "夏恋", areaPPP[arealen]);
					//   }
					if (showTime > 4) {
						for (var ki = 0; ki < lengthD; ki++) {
							if (prodD[ki] == areaCCC[arealen]) {
								// console.log(" 泄了", areaCCC[arealen]);
								run5Floor(CCC, areai[arealen], areaCCC[arealen], dataEE, dataFF, lowerD[ki], upperD[ki], lowerE, upperE);
							}
						}
					}
					arealen++;
					CCC = []; //超级重要
				}
			}
		}
	}
	function run5Floor(CCC, SN4No, lv5OID, data, dataFF, lowerD, upperD, lowerE, upperE) { //lv4OID== 2BP_S600_AD05FM1 為识别条件
		let allie = []; let allyAAA = []; let allyRRR = []; let allyQTY = []; let allyCAB = []; let allyNNN = []; let allyCCC = []; let allyUSG = []; let allyWAS = []; let allyCHI = []; let allyDES = []; let allyPPP = []; let allylen = 0; let allyCHD = [];
		let allySED = []; let allyPRC = []; let allyCOS = []; let allyEND = [];
		let DDD = [];
		var SN5No = 0;
		// console.log("殿昌", lowerD, "可欣 ", upperD, "正确", data.length, "好看 ", lv5OID);
		// for (var i = 0; i < data.length; i++) {
		for (var i = lowerD; i < upperD; i++) {
			if (data[i] != null && data[i] != undefined) {
				SN5No++;
				var combine = '';
				var OID = '5' + SN5No;
				var Rank = data[i].ProdRank;
				var PID = SN4No;
				var MiddleID = data[i].MiddleID;
				var PartsOldName = data[i].MaterialName; PartsOldName = nulReplaceTxt(PartsOldName);
				var PartsName = data[i].MaterialName; PartsName = nulReplaceTxt(PartsName);
				var PartsOldCode = data[i].LastID; PartsOldCode = nulReplaceNum(PartsOldCode);
				var PartsCode = data[i].LastID; PartsCode = nulReplaceNum(PartsCode);
				var Dosage = data[i].UnitQty; Dosage = nulReplaceNum(Dosage);
				var Damage = data[i].WasteRate; Damage = nulReplaceNum(Damage);
				var PartsChi = data[i].PartsChi;
				var Descrip = data[i].ProdName; Descrip = nulReplaceTxt(Descrip);
				var OldMat = data[i].OldMat; OldMat = nulReplaceTxt(OldMat);
				var OldSpc = data[i].OldSpc; OldSpc = nulReplaceTxt(OldSpc);
				var TotQty = data[i].TotQty; TotQty = nulReplaceTxt(TotQty);
				var CabinA = data[i].CabinA; CabinA = nulReplaceTxt(CabinA);
				var StandPrice = data[i].StandPrice; StandPrice = nanReplaceZero(StandPrice);
				var display = '';
				var displayCode = '';
				display = PartsOldName;
				displayCode = PartsOldCode;
				// combine =   display + '##'  +  OID + '##' + displayCode + '##' + PID + '##' + Dosage + '##' + Damage + '##' + PartsChi + '##' + Descrip;
				if (Rank == 'E' && lv5OID == MiddleID) {
					// if (i < 2) {
					// 	console.log("殿昌惠末 ", combine);
					// }
					allie.push(OID);
					allyNNN.push(display);
					allyCCC.push(displayCode);
					allyPPP.push(PID);
					allyUSG.push(Dosage);
					allyWAS.push(Damage);
					allyCHI.push(PartsChi);
					allyDES.push(Descrip);
					allyAAA.push(OldMat);
					allyRRR.push(OldSpc);
					allyQTY.push(TotQty);
					allyCAB.push(CabinA);
					var finprice = '';
					// var sibling = psizeE[SN5No - 1];
					var sibling = '1'; var enuch = '是';
					for (var gi = 0; gi < splenE; gi++) {
						if (middlE[gi] == displayCode) {
							sibling = psizeE[gi]; enuch = enuchE[gi];
							// console.log("砸场E", sibling ,"爱：",displayCode);
						}
					}
					allySED.push("" + sibling);
					var costTOT = ''; var fincost = '';
					if (StandPrice != undefined && StandPrice != '') {
						StandPrice = parseFloat(StandPrice);
						finprice = StandPrice.toFixed(2);
					}
					var costTOT = sibling * StandPrice;
					if (costTOT != undefined && costTOT != '') {
						costTOT = parseFloat(costTOT);
						costTOT = costTOT.toFixed(2);
						fincost = '' + costTOT;
					} else {
						fincost = '0';
					}
					allyPRC.push(finprice);
					allyCOS.push(fincost);
					allyEND.push(enuch);
					var temp3 = {
						enname: "" + allyNNN[allylen]
						, id: allie[allylen]
						, field: allyPPP[allylen]
						, encode: allyCCC[allylen]
						, stock: allyUSG[allylen]
						, waste: allyWAS[allylen]
						, belong: allyCHI[allylen]
						, descrip: allyDES[allylen]
						, oldmat: allyAAA[allylen]
						, oldspc: allyRRR[allylen]
						, totqty: allyQTY[allylen]
						, cabinA: allyCAB[allylen]
						, seed: allySED[allylen]
						, price: allyPRC[allylen]
						, cost: allyCOS[allylen]
						, isend: allyEND[allylen]
						, children: DDD
					}
					CCC.push(temp3);
					binrec.push('' + allie[allylen] + "##" + allyPPP[allylen] + "##" + allyNNN[allylen] + "##" + allyCCC[allylen] + "##" +
						allyUSG[allylen] + "##" + allyWAS[allylen] + "##" + allyCHI[allylen] + "##" + allyDES[allylen] +
						 "##" + allyAAA[allylen] + "##" + allyRRR[allylen] + "##" + allyQTY[allylen] + "##" + allyCAB[allylen] +
						 "##" + allySED[allylen] + "##" + allyPRC[allylen] + "##" + allyCOS[allylen] + "##"+ allyEND[allylen] + "##");
					if (DEBUG == '1') {
						if (allie[allylen] > '5200' && allie[allylen] < '5220') {
							// console.log("五乡", allie[allylen], "楽意", allyCCC[allylen], "意足", allyPPP[allylen]);
						}
					}
					// if (allyCCC[allylen] == '3CDTP105_025') { //3CD6XP225_016_NMS
					// 	console.log("都", allylen, "楽意", allyCCC[allylen], "石川", lv4OID, "意足", allyPPP[allylen]);
					// }
					if (showTime > 5) {
						for (var ki = 0; ki < lengthE; ki++) {
							if (prodE[ki] == allyCCC[allylen]) {
								// console.log("^^^^流了", allyCCC[allylen], "昂康复...", dataFF.length);
								run6Floor(DDD, allie[allylen], allyCCC[allylen], dataFF, lowerE[ki], upperE[ki]);
							}
						}
					}
					cnt++;
					allylen++;
					DDD = []; //超级重要
				}
			}
		}
	}
	function run6Floor(DDD, SN5No, lv6OID, data, low6, upp6) {
		let lingi = []; let lingAAA = []; let lingRRR = []; let lingQTY = []; let lingCAB = []; let lingNNN = []; let lingCCC = []; let lingUSG = []; let lingWAS = []; let lingCHI = []; let lingDES = []; let lingPPP = []; let linglen = 0;
		let lingSED = []; let lingPRC = []; let lingCOS = [];  let lingEND = [];
		let EEE = [];
		var SN6No = 0;
		// console.log("6添", low6, "栗田 ", upp6, " 惠 ", lv6OID, "恐 ", data.length);
		// for (var i = 0; i < data.length; i++) {
		for (var i = low6; i < upp6; i++) {
			if (data[i] != undefined && data[i] != null) {
				SN6No++;
				var combine = '';
				var OID = '6' + SN6No;
				var Rank = data[i].ProdRank;
				var PID = SN5No;
				var MiddleID = data[i].MiddleID;
				var PartsOldName = data[i].MaterialName; PartsOldName = nulReplaceTxt(PartsOldName);
				var PartsName = data[i].MaterialName; PartsName = nulReplaceTxt(PartsName);
				var PartsOldCode = data[i].LastID; PartsOldCode = nulReplaceNum(PartsOldCode);
				var PartsCode = data[i].LastID; PartsCode = nulReplaceNum(PartsCode);
				var Dosage = data[i].UnitQty; Dosage = nulReplaceNum(Dosage);
				var Damage = data[i].WasteRate; Damage = nulReplaceNum(Damage);
				var PartsChi = data[i].PartsChi;
				var Descrip = data[i].ProdName; Descrip = nulReplaceTxt(Descrip);
				var OldMat = data[i].OldMat; OldMat = nulReplaceTxt(OldMat);
				var OldSpc = data[i].OldSpc; OldSpc = nulReplaceTxt(OldSpc);
				var TotQty = data[i].TotQty; TotQty = nulReplaceTxt(TotQty);
				var CabinA = data[i].CabinA; CabinA = nulReplaceTxt(CabinA);
				var StandPrice = data[i].StandPrice; StandPrice = nanReplaceZero(StandPrice);
				var display = '';
				var displayCode = '';
				display = PartsOldName;
				displayCode = PartsOldCode;
				if (Rank == 'F' && lv6OID == MiddleID) {
					lingi.push(OID);
					lingNNN.push(display);
					lingCCC.push(displayCode);
					lingPPP.push(PID);
					lingUSG.push(Dosage);
					lingWAS.push(Damage);
					lingCHI.push(PartsChi);
					lingDES.push(Descrip);
					lingAAA.push(OldMat);
					lingRRR.push(OldSpc);
					lingQTY.push(TotQty);
					lingCAB.push(CabinA);
					lingSED.push("1");
					var finprice = '';
					var sibling = '1';var enuch = '是';
					var costTOT = ''; var fincost = '';
					if (StandPrice != undefined && StandPrice != '') {
						StandPrice = parseFloat(StandPrice);
						finprice = StandPrice.toFixed(2);
					}
					var costTOT = sibling * StandPrice;
					if (costTOT != undefined && costTOT != '') {
						costTOT = parseFloat(costTOT);
						costTOT = costTOT.toFixed(2);
						fincost = '' + costTOT;
					} else {
						fincost = '0';
					}
					lingPRC.push(finprice);
					lingCOS.push(fincost);
					lingEND.push(enuch);
					var temp3 = {
						enname: "" + lingNNN[linglen]
						, id: lingi[linglen]
						, field: lingPPP[linglen]
						, encode: lingCCC[linglen]
						, stock: lingUSG[linglen]
						, waste: lingWAS[linglen]
						, belong: lingCHI[linglen]
						, descrip: lingDES[linglen]
						, oldmat: lingAAA[linglen]
						, oldspc: lingRRR[linglen]
						, totqty: lingQTY[linglen]
						, cabinA: lingCAB[linglen]
						, seed: lingSED[linglen]
						, price: lingPRC[linglen]
						, cost: lingCOS[linglen]
						, isend: lingEND[linglen]
						, children: EEE
					}
					binrec.push('' + lingi[linglen] + "##" + lingPPP[linglen] + "##" + lingNNN[linglen] + "##" + lingCCC[linglen] + "##" +
						lingUSG[linglen] + "##" + lingWAS[linglen] + "##" + lingCHI[linglen] + "##" + lingDES[linglen] + "##" +
						lingAAA[linglen] + "##" + lingRRR[linglen] + "##" + lingQTY[linglen] + "##" + lingCAB[linglen] + "##" +
						lingSED[linglen] + "##" + lingPRC[linglen] + "##" + lingCOS[linglen] + "##" + lingEND[linglen] + "##");
					DDD.push(temp3);
					if (DEBUG == '1') {
						if (lingi[linglen] > '6100' && lingi[linglen] < '6110') {
							// console.log("流星", lingi[linglen], "崔", lingCCC[linglen], "裕", lingNNN[linglen]);
						}
					}
					cnt++;
					linglen++;
					EEE = []; //超级重要
				}

			}
		}
	}
	function run7Floor(EEE, SN6No, lv7OID, data, low7, upp7) {
		var SN7No = 0;
		let house = []; let housAAA = []; let housRRR = []; let housNNN = []; let housCCC = []; let housUSG = []; let housWAS = []; let housCHI = []; let housDES = []; let housPPP = []; let houslen = 0; let housCHD = [];
		for (var i = low7; i < upp7; i++) {
			SN7No++;
			var combine = '';
			var OID = '7' + SN7No;
			var Rank = data[i].ProdRank;
			var PID = SN6No;
			var MiddleID = data[i].MiddleID;
			var PartsOldName = data[i].MaterialName; PartsOldName = nulReplaceTxt(PartsOldName);
			var PartsName = data[i].MaterialName; PartsName = nulReplaceTxt(PartsName);
			var PartsOldCode = data[i].LastID; PartsOldCode = nulReplaceNum(PartsOldCode);
			var PartsCode = data[i].LastID; PartsCode = nulReplaceNum(PartsCode);
			var Dosage = data[i].UnitQty; Dosage = nulReplaceNum(Dosage);
			var Damage = data[i].WasteRate; Damage = nulReplaceNum(Damage);
			var PartsChi = data[i].PartsChi;
			var Descrip = data[i].ProdName; Descrip = nulReplaceTxt(Descrip);
			var display = '';
			var displayCode = '';
			display = PartsOldName;
			displayCode = PartsOldCode;
			if (Rank == 'G' && lv7OID == MiddleID) {
				house.push(OID);
				housNNN.push(PartsOldName);
				housCCC.push(PartsOldCode);
				housPPP.push(PID);
				housUSG.push(Dosage);
				housWAS.push(Damage);
				housCHI.push(PartsChi);
				housDES.push(Descrip);
				if (housi[i] == '701') {
					console.log(" 橋", housi[i], " 還", housPPP[i], "藤", houslen, " 本", housNNN[i],);
				}
				var temp = {
					enname: "" + housNNN[i]
					, id: housi[i]
					, field: housPPP[i]
					, encode: housCCC[i]
					, stock: housUSG[i]
					, waste: housWAS[i]
					, belong: housCHI[i]
					, descrip: housDES[i]
					, children: FFF
				}
				EEE.push(temp);
				cnt++;
				houslen++;
				FFF = []; //超级重要
			}
		}

	}
	function nulReplaceNum(passTxt) {
		var ret = '';
		ret = (passTxt == null || passTxt == undefined) ? ('0') : passTxt;
		return ret;
	}
	function nulReplaceTxt(passTxt) {
		var ret = '';
		ret = (passTxt == null || passTxt == undefined) ? ('缺省') : passTxt;
		return ret;
	}
	function nanReplaceZero(passTxt) {
		var ret = '';
		if (isNaN(passTxt)) {
			ret = '0';
		} else if (passTxt == '') {
			ret = '0';
		} else if (passTxt == null) {
			ret = '0';
		} else if (passTxt == 'null') {
			ret = '0';
		} else {
			ret = (passTxt == null || passTxt == undefined) ? ('0') : passTxt;
		}
		return ret;
	}
};
