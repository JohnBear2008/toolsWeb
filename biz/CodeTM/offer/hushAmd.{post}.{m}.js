module.exports = function (sender) {
	//只得1
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
		console.log("Amd没涙:",FieldTypeId);
	} else {
		FieldTypeId = 'A2'+rule;
	}
	if (CategoryId != undefined && CategoryId != null && CategoryId != '') {
		CategoryId = CategoryId;
	} else {
		CategoryId = 'A2';
	}
	console.log("Amd賀:" + CategoryId, "就",FieldTypeId);
	var Schedobj = {};
	var Property = sender.req.query.Property;
	var Archives = sender.req.query.Archives;
	let ArchList = [];
	let PairLbl = [];
	let Pairval = [];
	var pcnt = 0;
	if (Archives != "" && Archives != undefined) {
		ArchList = Archives.split('##');
		for (var ki = 0; ki < ArchList.length; ki++) {
			if (ArchList[ki].indexOf("共用") != -1 || ArchList[ki].indexOf("预留") != -1 || ArchList[ki].indexOf("缺省") != -1) {
				// console.log("~~阴性不选~~" + (ArchList[ki]));
			} else {
				var tmpList = [];
				tmpList = ArchList[ki].split('::');
				if ((tmpList[0] != null && tmpList[0] != '') && (tmpList[1] != null && tmpList[1] != '')) {
					PairLbl[pcnt] = tmpList[0];
					Pairval[pcnt] = tmpList[1];
					pcnt++;
					console.log("妃好了" + (pcnt), "可以选妃^=^", (tmpList[0]), (tmpList[1]));
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
	mutliChoice('');
	function FirstStep() {
		var dataArr = [];
		var SQL1 = "  SELECT TOP 100 a.MaterialId FROM [comMaterial] a where  1 = 1 and [MaterialCategoryId]= ? ";
		var foodtown = '(';
		yjDBService_sqlserver.exec({
			connectionOptions: connection,
			sql: SQL1,
			parameters: [CategoryId],
			success: function (r) {
				var datas = []
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				console.log("平桃", data.length);
				for (var i = 0; i < data.length; i++) {
					var MateId = data[i].MaterialId;
					foodtown = foodtown + '\'' + MateId + '\'';
					if(i < data.length-1){
						foodtown = foodtown + ' , ';
					}
				}
				foodtown = foodtown + ')';
				mutliChoice(foodtown);
			},
			error: sender.error
		});
	}

	function mutliChoice(foodtown) {
		// console.log("妃-----------------" + (foodtown));
		var SQLUniver = "";
		for (var mi = 0; mi < pcnt; mi++) {
			// console.log("封妃    " , (PairLbl[mi]), "皇上  " , (Pairval[mi]));
			if (mi == 0) {
				SQLUniver = SQLUniver + " and ( ";
			} else {
				SQLUniver = SQLUniver + " OR ";
			}
			SQLUniver = SQLUniver + " ( lpm.MatPropertyName='" + PairLbl[mi] + "' and cpd.MatPropertyVal='" + Pairval[mi] + "' )  ";
			if (mi == (pcnt - 1)) {
				SQLUniver = SQLUniver + " ) ";
			}
		}
		console.log("册封cpd无用  ", SQLUniver);
		var SQLExecute =
			" SELECT count(*) AS SZE, A.MaterialId  FROM [comMaterial] A  " +
			" LEFT JOIN [X_comMatProD] xcp  on a.MaterialId  = xcp.MaterialId " +
			" LEFT JOIN [X_comMatlPropertyM] lpm  on xcp.[MatPropertyId] = lpm.[MatPropertyId] " +
			" LEFT JOIN X_comMatlPropertyD cpd on xcp.[MatPropertyKey] = cpd.[MatPropertyKey] " +
			" and cpd.[FieldTypeId]='" + FieldTypeId + "'  and  xcp.MatPropertyId=cpd.[MatPropertyId]  " +
			" WHERE  1=1  AND  A.MaterialCategoryId ='" + CategoryId + "'    " +
			SQLUniver +
		      // " and  a.MaterialId IN  " + foodtown + "  and [MaterialCategoryId] = '" + CategoryId + "'  " +
		      "  and  a.MaterialId IN (SELECT TOP 5000 a.MaterialId  FROM  [comMaterial] a where  1 = 1 and [MaterialCategoryId] = '" + CategoryId + "'  )    " +
                  " GROUP BY A.MaterialId ";
		// console.log("干楽多:" + SQLExecute);
		var dataArr = [];

		if (SQLExecute.length > 1000) {
			console.log("啊莫:" + SQLExecute.substring(0, 1000));
		} else {
			console.log("啊莫:" + JSON.stringify(SQLExecute));
		}
		console.log("欧110:" + pcnt );
		var dinner = '(';
		yjDBService_sqlserver.exec({
			connectionOptions: connection,
			sql: SQLExecute,
			parameters: [],
			success: function (r) {
				var datas = []
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				console.log("欧666:" , data.length );
				if(data.length==0){
					var retcode={"status": "fail"};
					sender.success(retcode);
				}
				for (var i = 0; i < data.length; i++) {
					var SZE = data[i].SZE;
					var MateId = data[i].MaterialId;
					if(pcnt>0){
						if (SZE == '' + pcnt) {
							if(i>0 && i<2) {console.log("合格", SZE ,"====",pcnt );}
							dinner = dinner + '\'' + MateId + '\'';
							if(i > 0){
								dinner = dinner + ' , ';
							}
							
						} else {
							//  console.log("@@@@@@@@@@@@@@@@@不合格", SZE);
						}
					}else{
						if(i>0 && i<5) {console.log("合格", SZE ,"====",pcnt );}
							dinner = dinner + '\'' + MateId + '\'';
							if(i > 0){
								dinner = dinner + ' , ';
							}
					}
					
					if(i == data.length-1){
						dinner = dinner + ' \'\' ';
					}
				}
				dinner = dinner + ')';	 
				combyChoice(dinner);
			},
			error: sender.error
		});
	}
	function combyChoice(dinner) {
		// console.log("贵人-----------------" + (dinner));
		//  SELECT  distinct TOP 1000 xic.MatPropertyVal ,lvb.MatPropertyName ,a.FOrgId , a.MaterialId  , a.MaterialTypeId , a.MaterialCategoryId , a.InvoiceName  
		// ,a.InvoiceSpec , a.CreatorId  ,a.CreateTime , a.LastOperatorId  ,a.LastOperateTime   ,a.Remark ,
		//  a.InternalId , a.VaryState , a.MergeOutState , a.IsInUsed , a.CurrentState , a.CU_OldMaterialId  ,
		//  a.CU_OldMaterialSpec , a.CU_type FROM [RichT9].[dbo].[comMaterial] a  LEFT JOIN [X_comMatProD] xcb
		//    on a.MaterialId  = xcb.MaterialId  LEFT JOIN [X_comMatlPropertyM] lvb 
		//    on xcb.[MatPropertyId] = lvb.[MatPropertyId]   LEFT JOIN X_comMatlPropertyD xic 
		//    on xcb.[MatPropertyKey] = xic.[MatPropertyKey] 
		//    and xic.[FieldTypeId]='A3A'  and  xcb.MatPropertyId=xic.[MatPropertyId] 
		//   WHERE  1=1  AND    A.MaterialCategoryId ='A3' and ( 
		//     ( lvb.MatPropertyName='款型' and xic.MatPropertyVal='通用伺服Ⅰ' )  
		//  OR
		//     ( lvb.MatPropertyName='散热方式' and xic.MatPropertyVal='油冷' ) 
		//    )
		//  and  a.MaterialId IN ('AA3-A000547-001','AA3-A000566-001')

		// LEFT JOIN [X_comManufacturer] xmf on substring(a.[MaterialId],13,15) = xmf.ManufacturerId 
		// and xmf.ManufacturerName ='宁波弘讯'

		var SQLExecute =
			" SELECT  distinct TOP 500  cpd.MatPropertyVal as EFCode , a.FOrgId , a.MaterialId  , a.MaterialTypeId , " +
			" a.MaterialCategoryId , a.InvoiceName   " +
			" ,a.InvoiceSpec , a.CreatorId  ,a.CreateTime , a.LastOperatorId  ,a.LastOperateTime   ,a.Remark , " +
			"  a.VaryState , a.MergeOutState , a.IsInUsed , a.CurrentState , a.CU_OldMaterialId  , " +
			" a.CU_OldMaterialSpec , a.CU_type ,  xmf.ManufacturerName AS ManufacturerName  FROM [comMaterial] a  " +
			" LEFT JOIN [X_comMatProD] xcp  on a.MaterialId  = xcp.MaterialId and  xcp.RowCode='1'" +
			" LEFT JOIN [X_comMatlPropertyM] lpm  on xcp.[MatPropertyId] = lpm.[MatPropertyId] " +
			" LEFT JOIN [X_comMatlPropertyD] cpd on xcp.[MatPropertyKey] = cpd.[MatPropertyKey] " +
			" and cpd.[FieldTypeId]='" + FieldTypeId + "'  and  xcp.MatPropertyId=cpd.[MatPropertyId]  " +
			" LEFT JOIN [X_comManufacturer] xmf on substring(a.[MaterialId],13,15) = xmf.ManufacturerId  " +
			"  and xmf.ManufacturerId IS not NULL   " +
			" WHERE  1=1  AND    A.MaterialCategoryId ='" + CategoryId + "'  " +
		" and  a.MaterialId IN  " + dinner + "   and [MaterialCategoryId] = '" + CategoryId + "'  ";
		if (SQLExecute.length > 500) {
			console.log("干码多:" + SQLExecute.substring(0, 500));
		} else {
			console.log("干码多:" + JSON.stringify(SQLExecute));
		}
		var dataArr = [];

		if (dinner.length > 100) {
			console.log("啊金:" + dinner.substring(0, 100));
		} else {
			console.log("啊金:" + JSON.stringify(dinner));
		}
		yjDBService_sqlserver.exec({
			connectionOptions: connection,
			sql: SQLExecute,
			parameters: [],
			success: function (r) {
				var datas = []
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				for (var i = 0; i < data.length; i++) {
					var MateId = data[i].MaterialId;
					let BurnList = [];
					BurnList = MateId.split('-');
					var SMTtxt = BurnList[1];
					var SMT_Title = SMTtxt.substring(1, 3);
					var Supply_Title = BurnList[2];
					if (i > 5 && i < 8) {
						console.log("金世", Supply_Title, "世禄", SMT_Title, "郑艺", data[i].ManufacturerName);
					}
					var obj = {
						"status": "OK",
						"DBID": data[i].MaterialId,
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
						"Combo_Title": data[i].EFCode + '/' + data[i].ManufacturerName,
						"Combo_Staff": data[i].CreatorId,
						"Reason": data[i].Remark,
						"SMT_Title": SMT_Title,
						"Supply_Title": data[i].ManufacturerName,
					}
					dataArr.push(obj);
				}
				var dump = JSON.stringify(dataArr);
				console.log("安倍 :" + dataArr.length);
				if (dump.length > 100) {
					console.log("春野:" + dump.substring(0, 100));
				} else {
					console.log("春野:" + JSON.stringify(dataArr));
				}
				sender.success(dataArr);
			},
			error: sender.error
		});

	}
	function HandleRecord() {
		var SQLExecute =
			" SELECT   a.MaterialId   FROM  [comMaterial] a  " +
			" where  1 = 1 and [MaterialCategoryId]='" + CategoryId + "'  ";
		var dataArr = [];

		yjDBService_sqlserver.exec({
			connectionOptions: connection,
			sql: SQLExecute,
			parameters: [],
			success: function (r) {
				var datas = []
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				console.log("平桃", data.length);
				for (var i = 0; i < data.length; i++) {

					var MateId = data[i].MaterialId;
					let BurnList = [];
					BurnList = MateId.split('-');
					var SMTtxt = BurnList[1];
					var SMT_Title = SMTtxt.substring(1, 3);
					var Supply_Title = BurnList[2];
					if (i > 5 && i < 8) {
						console.log("金世", Supply_Title, "世禄", SMT_Title, "郑艺", data[i].ManufacturerName);
					}
					var obj = {
						// " SELECT TOP 5000 [FOrgId]  ,[MaterialId]  ,[MaterialTypeId]  ,[MaterialCategoryId]  ,[InvoiceName] " +
						// " ,[InvoiceSpec]  ,[CreatorId]  ,[CreateTime]  ,[LastOperatorId]  ,[LastOperateTime] " +
						// " ,[Remark]  ,[VaryState]  ,[MergeOutState]  ,[IsInUsed]  ,[CurrentState]    ,[CU_OldMaterialId]   " + 
						// " ,[CU_OldMaterialSpec]  ,[CU_type]  FROM [RichT9].[dbo].[comMaterial] a   " ;
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
						"Combo_Title": SMT_Title + '/' + data[i].ManufacturerName,
						"Combo_Staff": data[i].CreatorId,
						"Reason": data[i].Remark,
						"SMT_Title": SMT_Title,
						"Supply_Title": data[i].ManufacturerName,
					}
					dataArr.push(obj);
				}
				var dump = JSON.stringify(dataArr);
				if (dump.length > 100) {
					console.log("雪妹:" + dump.substring(0, 100));
				} else {
					console.log("雪妹:" + JSON.stringify(dataArr));
				}
				sender.success(dataArr);
			},
			error: sender.error
		});

	}
	function AddMatProperty() {
		console.log("妃-----------------" + (pcnt));
		for (var mi = 0; mi < pcnt; mi++) {
			console.log("封妃    ", (PairLbl[mi]), "皇上  ", (Pairval[mi]));
			if (mi == 0) {
				SQLExecute = SQLExecute + " and ( ";
			} else {
				SQLExecute = SQLExecute + " OR ";
			}
			SQLExecute = SQLExecute + " ( lpm.MatPropertyName='" + PairLbl[mi] + "' and cpd.MatPropertyVal='" + Pairval[mi] + "' )  ";
			if (mi == (pcnt - 1)) {
				SQLExecute = SQLExecute + " ) ";
			}
		}
	}


};

