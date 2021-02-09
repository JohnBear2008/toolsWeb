module.exports = function (sender) {
	//用OR查找
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
	var DBTable = sender.req.query.DBTable;
	var DBID = sender.req.query.DBID;
	var filter = sender.req.query.filter;
	var orderBy = sender.req.query.orderBy;
	var limit = sender.req.query.limit;
	var capacity = sender.req.query.capacity;
	var rule = 'A';
	var CategoryId = sender.req.query.CategoryId;
	var FieldTypeId = sender.req.query.FieldTypeId;
	if (FieldTypeId != undefined && FieldTypeId != null && FieldTypeId != '') {
		FieldTypeId = FieldTypeId + rule;
		console.log("OR没涙:",FieldTypeId);
	} else {
		FieldTypeId = 'A2'+rule;
	}
	if (CategoryId != undefined && CategoryId != null && CategoryId != '') {
		CategoryId = CategoryId;
	} else {
		CategoryId = 'A2';
	}
	console.log("OR賀:" + CategoryId, "就",FieldTypeId);
	var Schedobj = {};
	var Property = sender.req.query.Property;
	var Archives = sender.req.query.Archives;
	let ArchList = [];
	let PairLbl = [];
	let Pairval = [];
	var pcnt =0 ;
	if (Archives != "" && Archives != undefined) {
		ArchList = Archives.split('##');
		for (var ki = 0; ki < ArchList.length; ki++) {
			if(ArchList[ki].indexOf("共用")!= -1 || ArchList[ki].indexOf("预留")!= -1 || ArchList[ki].indexOf("缺省") != -1 ){
				// console.log("~~阴性不选~~" + (ArchList[ki]));
			}else{
				var tmpList = [];
				tmpList = ArchList[ki].split('::');
				if((tmpList[0] != null && tmpList[0] != '' )   && (tmpList[1] != null && tmpList[1] != '') ){
					PairLbl[pcnt] = tmpList[0] ;
					Pairval[pcnt] = tmpList[1] ;
					pcnt++;
					console.log("君好了" + (pcnt),"可以选君^=^" , (tmpList[0]) ,(tmpList[1]));
				}
			
			}
		}
	}
	
	var paramList = [];
	let PropList = [];
	if (Property != "" && Property != undefined) {
		PropList = Property.split('##');
		for (var ki = 0; ki < PropList.length; ki++) {
			 
		}
	}
	var param1 = "";
	var param2 = "";
	var param3 = "";
	var param4 = "";
	let supy_cut = "";
	var SQLExecute =

// SELECT TOP 1000 [FOrgId]  ,[MaterialId]  ,[MaterialTypeId]  ,[MaterialCategoryId]  ,[InvoiceName]  
// ,[InvoiceSpec]  ,[CreatorId]  ,[CreateTime]  ,[LastOperatorId]  ,[LastOperateTime]  
//   ,[Remark]  , [InternalId] ,[VaryState]  ,[MergeOutState]  ,[IsInUsed]  ,[CurrentState],[CU_OldMaterialId]     
//   ,[CU_OldMaterialSpec]  ,[CU_type]  FROM [RichT9].[dbo].[comMaterial] a   
//   where a.[MaterialId] IN(	SELECT  
//    a.MaterialId     
// FROM [RichT9].[dbo].[comMaterial] a
// LEFT JOIN [X_comMatProD] xcb   on a.MaterialId  = xcb.MaterialId
// LEFT JOIN [X_comMatlPropertyM] lvb on xcb.[MatPropertyId] = lvb.[MatPropertyId] 
// LEFT JOIN X_comMatlPropertyD xic on xcb.[MatPropertyKey] = xic.[MatPropertyKey] 
// and xic.[FieldTypeId]='A2A' and  xcb.MatPropertyId=xic.[MatPropertyId]   
// where   lvb.MatPropertyName='客户' and xic.MatPropertyVal='爱科' )


// SELECT TOP 1000 [FOrgId]  ,[MaterialId]  ,[MaterialTypeId]  ,[MaterialCategoryId]  ,[InvoiceName]  
// ,[InvoiceSpec]      
//   ,[CU_OldMaterialSpec]  ,[CU_type] ,
//    [ManufacturerId]
// ,[ManufacturerName] FROM [RichT9].[dbo].[comMaterial] a   
// LEFT JOIN [RichT9].[dbo].[X_comManufacturer] lvb ON substring(a.[MaterialId],13,15) = lvb.ManufacturerId 
//  where a.[MaterialId] IN(	 'AA2-AAK0007-001'  )



// FROM [comMaterial] a  
// LEFT JOIN [X_comMatProD] xcp  on a.MaterialId  = xcp.MaterialId  
// LEFT JOIN [X_comMatlPropertyM] lpm  on xcp.[MatPropertyId] = lpm.[MatPropertyId] 
// LEFT JOIN X_comMatlPropertyD cpd on xcp.[MatPropertyKey] = cpd.[MatPropertyKey]  and cpd.[FieldTypeId]='A3A'
//  and  xcp.MatPropertyId=cpd.[MatPropertyId]
//  LEFT JOIN [X_comManufacturer] xmf on  xmf.ManufacturerId = substring(a.[MaterialId],13,15)

	" SELECT TOP 1000 a.FOrgId ,  cpd.MatPropertyVal as EFCode ,a.MaterialId  , a.MaterialTypeId , a.MaterialCategoryId , a.InvoiceName " + 
	" ,a.InvoiceSpec , a.CreatorId  ,a.CreateTime , a.LastOperatorId  ,a.LastOperateTime  " + 
	" ,a.Remark , a.InternalId , a.VaryState , a.MergeOutState , a.IsInUsed , a.CurrentState , a.CU_OldMaterialId " +  
	" ,a.CU_OldMaterialSpec , a.CU_type , lvb.ManufacturerName FROM comMaterial a   " + 
	" LEFT JOIN [X_comMatProD] xcp  on a.MaterialId  = xcp.MaterialId and  xcp.RowCode='1'" +
	" LEFT JOIN [X_comMatlPropertyD] cpd on xcp.[MatPropertyKey] = cpd.[MatPropertyKey] " +
	" and cpd.[FieldTypeId]='" + FieldTypeId + "'  and  xcp.MatPropertyId=cpd.[MatPropertyId]  " +
	" LEFT JOIN X_comManufacturer lvb ON substring(a.[MaterialId],13,15) = lvb.ManufacturerId  " +
	" where a.[MaterialId] IN ( SELECT   a.MaterialId  " + 
	" FROM  [comMaterial] a " + 
	" LEFT JOIN [X_comMatProD] xcb   on a.MaterialId  = xcb.MaterialId " + 
	" LEFT JOIN [X_comMatlPropertyM] lvb on xcb.[MatPropertyId] = lvb.[MatPropertyId]  " + 
	" LEFT JOIN X_comMatlPropertyD xic on xcb.[MatPropertyKey] = xic.[MatPropertyKey]  and xic.[FieldTypeId]='" + FieldTypeId + "' " + 
	" and  xcb.MatPropertyId=xic.[MatPropertyId] " +
	" and xic.[FieldTypeId]='"+FieldTypeId+"'  " + 
	"    " ; 
	console.log("传奇:" , filter);
	if (filter != "" && filter != undefined) {
		SQLExecute = SQLExecute + " WHERE " + filter;
	}
      AddMatProperty();
	// if (orderBy != "" && orderBy != undefined) {
	// 	SQLExecute = SQLExecute + " ORDER BY " + orderBy;
	// }
	SQLExecute =SQLExecute+")";
	console.log("非多:" + SQLExecute);
	HandleRecord(SQLExecute);

	function HandleRecord(SQLExecute) {
		var banWord1 = new RegExp("delete");
		var banWord2 = new RegExp("update");
		var banWord3 = new RegExp("insert");
		var resultCheckSQL = banWord1.test(SQLExecute) || banWord2.test(SQLExecute) || banWord3.test(SQLExecute);
		var dataArr = [];
		if (resultCheckSQL) {
		} else {
			yjDBService_sqlserver.exec({
				connectionOptions: connection,
				sql: SQLExecute,
				parameters: [ ],
				success: function (r) {
					var datas = []
					var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
					console.log("雅桃", data.length);
					for (var i = 0; i < data.length; i++) {
						
						var MateId  = data[i].MaterialId;
						let BurnList = [];
						BurnList = MateId.split('-');
						var SMTtxt = BurnList[1] ;
						var SMT_Title = SMTtxt.substring(1,3) ;
						var Supply_Title = BurnList[2] ;
						if(i>5 && i <8){
							console.log("银世", Supply_Title ,"世禄",SMT_Title,"郑艺", data[i].ManufacturerName);
						}
						var obj = {
							"status": "OK",
							"DBID": data[i].InternalId,
							"Parts_Class": data[i].MaterialCategoryId,
							"Parts_Chi": data[i].MaterialCategoryId,
							"Parts_Code": data[i].MaterialId,
							"Parts_Name": data[i].InvoiceName,
							"Parts_Old_Code": data[i].CU_OldMaterialId,
							"Parts_Old_Name": data[i].CU_OldMaterialSpec,
							"BILL_ID": '',
							"Property": data[i].InvoiceSpec,
							"Parts_Apply_Date": data[i].LastOperateTime,
							"Parts_Status": data[i].CurrentState,
							"Combo_Title": data[i].EFCode +'/'+data[i].ManufacturerName,
							"Combo_Staff":  data[i].CreatorId,
							"Reason": data[i].Remark,
							"SMT_Title": SMT_Title,
							"Supply_Title": data[i].ManufacturerName,
						}
						dataArr.push(obj);
					}
					var dump = JSON.stringify(dataArr);
					if (dump.length > 100) {
						console.log("雪结:" + dump.substring(0, 100));
					} else {
						console.log("雪结:" + JSON.stringify(dataArr));
					}
					sender.success(dataArr);
				},
				error: sender.error
			});
		}
	}
	function HandleMe(i, result) {
		var MateId  = result[i].MaterialId;
		// [X_comManufacturer]
		// [X_comMatKeyFieldTypeCmpD]
		supy_cut = spectemp;
	}
	function AddMatProperty() {
		console.log("君-----------------" + (pcnt));
		for (var mi = 0; mi < pcnt ; mi++) {
			console.log("封君    " , (PairLbl[mi]), "皇上  " , (Pairval[mi]));
			if(mi == 0){
				SQLExecute = SQLExecute + " and ( ";
			}else{
				// SQLExecute = SQLExecute + " AND ";
				SQLExecute = SQLExecute + " OR ";
			}
			SQLExecute = SQLExecute + " ( lvb.MatPropertyName='"+PairLbl[mi]+"' and xic.MatPropertyVal='"+Pairval[mi]+"' )  ";
			if(mi == (pcnt-1) ){
				SQLExecute = SQLExecute + " ) ";
			}
		}
	}
	// function AddMatProperty() {
	// 	console.log("妃-----------------" + (pcnt));
	// 	for (var mi = 0; mi < pcnt ; mi++) {
	// 		console.log("封妃    " , (PairLbl[mi]), "皇上  " , (Pairval[mi]));
	// 		if(mi == 0){
	// 			SQLExecute = SQLExecute + " and ( ";
	// 		}else{
	// 			// SQLExecute = SQLExecute + " AND ";
	// 			SQLExecute = SQLExecute + " OR ";
	// 		}
	// 		SQLExecute = SQLExecute + " ( lvb.MatPropertyName='"+PairLbl[mi]+"' and xic.MatPropertyVal='"+Pairval[mi]+"' )  ";
	// 		if(mi == (pcnt-1) ){
	// 			SQLExecute = SQLExecute + " ) ";
	// 		}
	// 	}
	// }
	function AddInvoiceSpec() {
		if (PropList[0] != "" && PropList[0] != "null" && PropList[0] != "缺省" && PropList[0] != undefined && PropList[0].length > 1) {
			SQLExecute = SQLExecute + " and A.[InvoiceSpec] LIKE '%"+PropList[0]+"%' ";
			console.log("0罡精:" + PropList[0]);
		}
		if (PropList[1] != "" && PropList[1] != "null" && PropList[1] != "缺省" && PropList[1] != undefined && PropList[1].length > 1) {
			SQLExecute = SQLExecute + " and A.[InvoiceSpec] LIKE '%"+PropList[1]+"%' ";
			console.log("0罡精:" + PropList[1]);
		}
		if (PropList[2] != "" && PropList[2] != "null" && PropList[2] != "缺省" && PropList[2] != undefined && PropList[2].length > 1) {
			SQLExecute = SQLExecute + " and A.[InvoiceSpec] LIKE '%"+PropList[2]+"%' ";
			console.log("0罡精:" + PropList[2]);
		}
		if (PropList[3] != "" && PropList[3] != "null" && PropList[3] != "缺省" && PropList[3] != undefined && PropList[3].length > 1) {
			SQLExecute = SQLExecute + " and A.[InvoiceSpec] LIKE '%"+PropList[3]+"%' ";
			console.log("0罡精:" + PropList[3]);
		}
		if (PropList[4] != "" && PropList[4] != "null" && PropList[4] != "缺省" && PropList[4] != undefined && PropList[4].length > 1) {
			SQLExecute = SQLExecute + " and A.[InvoiceSpec] LIKE '%"+PropList[4]+"%' ";
			console.log("0罡精:" + PropList[4]);
		}
		if (PropList[5] != "" && PropList[5] != "null" && PropList[5] != "缺省" && PropList[5] != undefined && PropList[5].length > 1) {
			SQLExecute = SQLExecute + " and A.[InvoiceSpec] LIKE '%"+PropList[5]+"%' ";
			console.log("0罡精:" + PropList[5]);
		}
		if (PropList[6] != "" && PropList[6] != "null" && PropList[6] != "缺省" && PropList[6] != undefined && PropList[6].length > 1) {
			SQLExecute = SQLExecute + " and A.[InvoiceSpec] LIKE '%"+PropList[6]+"%' ";
			console.log("0罡精:" + PropList[6]);
		}
		if (PropList[7] != "" && PropList[7] != "null" && PropList[7] != "缺省" && PropList[7] != undefined && PropList[7].length > 1) {
			SQLExecute = SQLExecute + " and A.[InvoiceSpec] LIKE '%"+PropList[7]+"%' ";
			console.log("0罡精:" + PropList[7]);
		}
		if (PropList[8] != "" && PropList[8] != "null" && PropList[8] != "缺省" && PropList[8] != undefined && PropList[8].length > 1) {
			SQLExecute = SQLExecute + " and A.[InvoiceSpec] LIKE '%"+PropList[8]+"%' ";
			console.log("0罡精:" + PropList[8]);
		}
		if (PropList[9] != "" && PropList[9] != "null" && PropList[9] != "缺省" && PropList[9] != undefined && PropList[9].length > 1) {
			SQLExecute = SQLExecute + " and A.[InvoiceSpec] LIKE '%"+PropList[9]+"%' ";
			console.log("0罡精:" + PropList[9]);
		}
		if (PropList[10] != "" && PropList[10] != "null" && PropList[10] != "缺省" && PropList[10] != undefined && PropList[10].length > 1) {
			SQLExecute = SQLExecute + " and A.[InvoiceSpec] LIKE '%"+PropList[10]+"%' ";
			console.log("0罡精:" + PropList[10]);
		}
		if (PropList[11] != "" && PropList[11] != "null" && PropList[11] != "缺省" && PropList[11] != undefined && PropList[11].length > 1) {
			SQLExecute = SQLExecute + " and A.[InvoiceSpec] LIKE '%"+PropList[11]+"%' ";
			console.log("0罡精:" + PropList[11]);
		}
		if (PropList[12] != "" && PropList[12] != "null" && PropList[12] != "缺省" && PropList[12] != undefined && PropList[12].length > 1) {
			SQLExecute = SQLExecute + " and A.[InvoiceSpec] LIKE '%"+PropList[12]+"%' ";
			console.log("0罡精:" + PropList[12]);
		}
		if (PropList[13] != "" && PropList[13] != "null" && PropList[13] != "缺省" && PropList[13] != undefined && PropList[13].length > 1) {
			SQLExecute = SQLExecute + " and A.[InvoiceSpec] LIKE '%"+PropList[13]+"%' ";
			console.log("0罡精:" + PropList[13]);
		}
		if (PropList[14] != "" && PropList[14] != "null" && PropList[14] != "缺省" && PropList[14] != undefined && PropList[14].length > 1) {
			SQLExecute = SQLExecute + " and A.[InvoiceSpec] LIKE '%"+PropList[14]+"%' ";
			console.log("0罡精:" + PropList[14]);
		}
		if (PropList[15] != "" && PropList[15] != "null" && PropList[15] != "缺省" && PropList[15] != undefined && PropList[15].length > 1) {
			SQLExecute = SQLExecute + " and A.[InvoiceSpec] LIKE '%"+PropList[15]+"%' ";
			console.log("0罡精:" + PropList[15]);
		}
		if (PropList[16] != "" && PropList[16] != "null" && PropList[16] != "缺省" && PropList[16] != undefined && PropList[16].length > 1) {
			SQLExecute = SQLExecute + " and A.[InvoiceSpec] LIKE '%"+PropList[16]+"%' ";
			console.log("0罡精:" + PropList[16]);
		}
		if (PropList[17] != "" && PropList[17] != "null" && PropList[17] != "缺省" && PropList[17] != undefined && PropList[17].length > 1) {
			SQLExecute = SQLExecute + " and A.[InvoiceSpec] LIKE '%"+PropList[17]+"%' ";
			console.log("0罡精:" + PropList[17]);
		}
		if (PropList[18] != "" && PropList[18] != "null" && PropList[18] != "缺省" && PropList[18] != undefined && PropList[18].length > 1) {
			SQLExecute = SQLExecute + " and A.[InvoiceSpec] LIKE '%"+PropList[18]+"%' ";
			console.log("0罡精:" + PropList[18]);
		}
		if (PropList[19] != "" && PropList[19] != "null" && PropList[19] != "缺省" && PropList[19] != undefined && PropList[19].length > 1) {
			SQLExecute = SQLExecute + " and A.[InvoiceSpec] LIKE '%"+PropList[19]+"%' ";
			console.log("0罡精:" + PropList[19]);
		}
	}
};

// "  SELECT  A.DBID ,tbf.Design_Spec, A.`BILL_ID`, A.`Parts_Year`, A.`Parts_Rule`,  A.`Parts_Class`, A. `Parts_Apply_Date`,  A.`Parts_Limit_Date`,  A.`Parts_Name`,  " +
// "  LEFT( A.`Parts_Old_Name`, 20) as Parts_Old_Name,  A.`Parts_Chi`,  case  A.Parts_Status  when 1 then '正常' when 2 then '报废申请中' " +
// "  when 3 then '修改申请中' end as  Parts_Status, " +
// "  A.`Staff`,   A.`Property` ,  A.`Parts_Code`,  A.`Supply_ID` ,  A.`Supply_Title` ,   A.`SMT_ID` ,  A.`SMT_Title` , " +
// "  CONCAT(`SMT_Title`,'/',`Supply_Title` ) as Combo_Title, CONCAT(`Staff`,'/',`Auditor` ) as Combo_Staff , `Reason` ,`Parts_Old_Code` , " +
// " `Parts_Prop1`,  `Parts_Prop2`, `Parts_Prop3`, `Parts_Prop4`,  " +
// " `Parts_Prop5`, `Parts_Prop6`, `Parts_Prop7`, `Parts_Prop8`, `Parts_Prop9`, `Parts_Prop10`,  " +
// " `Parts_Prop11`, `Parts_Prop12`, `Parts_Prop13`, `Parts_Prop14`, `Parts_Prop15`, `Parts_Prop16`,  " +
// " `Parts_Prop17`, `Parts_Prop18`, `Parts_Prop19`, `Parts_Prop20`, " +
// " `FEATURE_E`,  `FEATURE_F`,  `FEATURE01`,  `FEATURE02`,  `FEATURE03`,  `FEATURE04`,  `FEATURE05`,    " +
// " `FEATURE06`,  `FEATURE07`,  `FEATURE08`,  `FEATURE09`,  `FEATURE10`,  `FEATURE11`,  `FEATURE12`,    " +
// " `FEATURE13`,  `FEATURE14`,  `FEATURE15`,  `FEATURE16`,  `FEATURE17`,  `FEATURE18`,  `FEATURE19`,    " +
// " `FEATURE20`  FROM `auto_parts` A LEFT JOIN `auto_feature` tbf  on A.Parts_Class= tbf.Parts_Class  ";