module.exports = function (sender) {
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
  var queryCode = sender.req.query.PartsCode;
  // console.log('存本queryCode  ' + queryCode);
  findClass();
  function findClass() {
    var FieldTypeId = '';
    var queryClass = '';
    var queryRule = '';
    let BurnList = [];
    BurnList = queryCode.split('-');
    queryClass = BurnList[0].substring(1, 3);
    queryRule = BurnList[1];
    queryRule = queryRule.substring(0, 1);
    FieldTypeId = queryClass + queryRule;
    // console.log('银行queryClass  ', queryClass, '存本FieldTypeId  ', FieldTypeId);
    HandleParts(FieldTypeId, queryClass, queryCode);
  }
  function HandleParts(pfield, pclass, pcode) {
    let SQLqry =

      //   SELECT a.[MaterialId]
      //   ,a.[RowNo]
      //   ,a.[RowCode] 
      //   ,a.[MatPropertyId]  
      //   ,lvb.MatPropertyName
      //   ,tic.[CU_OldMaterialId]
      //   ,tic.[CU_type]
      //   ,tic.[CU_OldMaterialSpec]
      //   ,xic.MatPropertyVal
      //   FROM  [X_comMatProD] a  
      //   LEFT JOIN [X_comMatlPropertyM] lvb on a.[MatPropertyId] = lvb.[MatPropertyId] 
      // LEFT JOIN comMaterial tic on a.[MaterialId] = tic.[MaterialId] 
      // LEFT JOIN X_comMatlPropertyD xic on a.[MatPropertyKey] = xic.[MatPropertyKey] 
      //   and xic.FieldTypeId ='E2A' and  a.MatPropertyId=xic.[MatPropertyId]
      //   where a.[MaterialId]='AE2-A010222-ABN'
      //   order by a.RowNo


      //  "   SELECT a.[MaterialId] ,a.[RowNo] ,a.[RowCode]   ,a.[MatPropertyId] ,tic.CreatorId ,tic.CU_type ,tic.MergeNo ,tic.CurrentState ,tic.IsInUsed , " +
      //  "   lvb.MatPropertyName  , tic.[InvoiceSpec]  , tic.[CU_OldMaterialId]  , tic.[CU_type]   ,tic.[CU_OldMaterialSpec] , " +
      //  "   xic.MatPropertyVal , cmc.[CU_UnitId]  FROM  [X_comMatProD] a   " +
      //  "   LEFT JOIN [X_comMatlPropertyM] lvb on a.[MatPropertyId] = lvb.[MatPropertyId]  " +
      //  "   LEFT JOIN comMaterial tic on a.[MaterialId] = tic.[MaterialId]  " +
      //  "   LEFT JOIN X_comMatlPropertyD xic on a.[MatPropertyKey] = xic.[MatPropertyKey]  " +
      //  "   and xic.FieldTypeId = ? and  a.MatPropertyId=xic.[MatPropertyId] " +
      //  "   LEFT JOIN [comMaterialCategory] cmc on '"+pclass+"' = cmc.[MaterialCategoryId] " +
      //  "   where a.[MaterialId]= ? " +
      //  "   order by a.RowNo " ;

      //  SELECT distinct a.[MaterialId] ,a.[RowNo] ,a.[RowCode]   ,a.[MatPropertyId] ,tic.CreatorId ,tic.CU_type  
      //  ,tic.CurrentState ,tic.IsInUsed , tic.[MaterialSpec]  , tic.[CU_OldMaterialId]  , tic.[CU_type] , lvb.MatPropertyName 
      //  ,tic.[CU_OldMaterialSpec] ,    tic.[MaterialUsedStateId],
      //   [X_Supplier]  ,[X_SupplierEx],
      //  xic.MatPropertyVal , cmc.[CU_UnitId]  FROM  [X_comMatProD] a    
      //  LEFT JOIN [X_comMatlPropertyM] lvb on a.[MatPropertyId] = lvb.[MatPropertyId]   
      //  LEFT JOIN [comMaterialGroup] tic on a.[MaterialId] = tic.[MaterialId]   
      //  LEFT JOIN X_comMatlPropertyD xic on a.[MatPropertyKey] = xic.[MatPropertyKey]   
      //  and xic.FieldTypeId = 'E2A' and  a.MatPropertyId=xic.[MatPropertyId]  
      //  LEFT JOIN [comMaterialCategory] cmc on 'E2' = cmc.[MaterialCategoryId]  
      //  where a.[MaterialId]= 'AE2-A010222-ABN'  
      //  order by a.RowNo  
      // SELECT distinct a.[MaterialId] ,a.[RowNo] ,a.[RowCode]   ,a.[MatPropertyId] ,tic.CreatorId ,tic.CU_type  
      // ,tic.CurrentState ,tic.IsInUsed , tic.[MaterialSpec]  , tic.[CU_OldMaterialId]  , tic.[CU_type] , lvb.MatPropertyName 
      // ,tic.[CU_OldMaterialSpec] , tic.HasComboProd,   tic.[MaterialUsedStateId],
      // tic.X_Supplier  ,tic.X_SupplierEx, xbc.[ManufacturerName],
      // xic.MatPropertyVal , cmc.[CU_UnitId]  FROM  [X_comMatProD] a    
      // LEFT JOIN [X_comMatlPropertyM] lvb on a.[MatPropertyId] = lvb.[MatPropertyId]   
      // LEFT JOIN [comMaterialGroup] tic on a.[MaterialId] = tic.[MaterialId]   
      // LEFT JOIN X_comMatlPropertyD xic on a.[MatPropertyKey] = xic.[MatPropertyKey]   
      // and xic.FieldTypeId = 'A2A' and  a.MatPropertyId=xic.[MatPropertyId] 
      //  LEFT JOIN [X_comManufacturer] xbc on tic.[X_Supplier] = xbc.[ManufacturerId]  
      // LEFT JOIN [comMaterialCategory] cmc on 'A2' = cmc.[MaterialCategoryId]  
      // where a.[MaterialId]= 'AA2-AAK0007-001'  

      " SELECT distinct a.[MaterialId] ,a.[RowNo] ,a.[RowCode]   ,a.[MatPropertyId] ,tic.[MaterialName] , tic.CreatorId ,tic.CU_type  ,  " +
      "  tic.CurrentState ,  tic.HasComboProd , tic.CreateTime  ,  tic.[MaterialSpec]  , tic.[CU_OldMaterialId]  , tic.[CU_type] , lvb.MatPropertyName ,  " +
      "  tic.[CU_OldMaterialSpec] ,    tic.[MaterialUsedStateId],  " +
      "   tic.X_Supplier  ,tic.X_SupplierEx, xbc.[ManufacturerName], " +
      "  xic.MatPropertyVal , cmc.[CU_UnitId]  FROM  [X_comMatProD] a      " +
      "  LEFT JOIN [X_comMatlPropertyM] lvb on a.[MatPropertyId] = lvb.[MatPropertyId]     " +
      "  LEFT JOIN [comMaterialGroup] tic on a.[MaterialId] = tic.[MaterialId]     " +
      "  LEFT JOIN [X_comMatlPropertyD] xic on a.[MatPropertyKey] = xic.[MatPropertyKey]     " +
      "  and xic.FieldTypeId =  ? and  a.MatPropertyId=xic.[MatPropertyId]    " +
      "  LEFT JOIN [X_comManufacturer] xbc on tic.[X_Supplier] = xbc.[ManufacturerId]  " +
      "  LEFT JOIN [comMaterialCategory] cmc on '" + pclass + "' = cmc.[MaterialCategoryId]    " +
      "  where a.[MaterialId]= ?    " +
      "  order by a.RowNo    ";
    // console.log("带路:" + SQLqry);

    yjDBService_sqlserver.exec({
      connectionOptions: connection,
      sql: SQLqry,
      parameters: [pfield, pcode],
      success: function (r) {
        var datas = []
        var result = yjDB.dataSet2ObjectList(r.meta, r.rows);
        for (var i = 0; i < result.length; i++) {
          var Parts_ary = result[0].MaterialName;
          let BurnList = [];
          BurnList = Parts_ary.split('/');
          var Parts_Prop1 = (result[0] == null || result[0] == undefined) ? ('') : result[0].MatPropertyVal;
          var Parts_Prop2 = (result[1] == null || result[1] == undefined) ? ('') : result[1].MatPropertyVal;
          var Parts_Prop3 = (result[2] == null || result[2] == undefined) ? ('') : result[2].MatPropertyVal;
          var Parts_Prop4 = (result[3] == null || result[3] == undefined) ? ('') : result[3].MatPropertyVal;
          var Parts_Prop5 = (result[4] == null || result[4] == undefined) ? ('') : result[4].MatPropertyVal;
          var Parts_Prop6 = (result[5] == null || result[5] == undefined) ? ('') : result[5].MatPropertyVal;
          var Parts_Prop7 = (result[6] == null || result[6] == undefined) ? ('') : result[6].MatPropertyVal;
          var Parts_Prop8 = (result[7] == null || result[7] == undefined) ? ('') : result[7].MatPropertyVal;
          var Parts_Prop9 = (result[8] == null || result[8] == undefined) ? ('') : result[8].MatPropertyVal;
          var Parts_Prop10 = (result[9] == null || result[9] == undefined) ? ('') : result[9].MatPropertyVal;
          var Parts_Prop11 = (result[10] == null || result[10] == undefined) ? ('') : result[10].MatPropertyVal;
          var Parts_Prop12 = (result[11] == null || result[11] == undefined) ? ('') : result[11].MatPropertyVal;
          var Parts_Prop13 = (result[12] == null || result[12] == undefined) ? ('') : result[12].MatPropertyVal;
          var Parts_Prop14 = (result[13] == null || result[13] == undefined) ? ('') : result[13].MatPropertyVal;
          var Parts_Prop15 = (result[14] == null || result[14] == undefined) ? ('') : result[14].MatPropertyVal;
          var Parts_Prop16 = (result[15] == null || result[15] == undefined) ? ('') : result[15].MatPropertyVal;
          var Parts_Prop17 = (result[16] == null || result[16] == undefined) ? ('') : result[16].MatPropertyVal;
          var Parts_Prop18 = (result[17] == null || result[17] == undefined) ? ('') : result[17].MatPropertyVal;
          var Parts_Prop19 = (result[18] == null || result[18] == undefined) ? ('') : result[18].MatPropertyVal;
          var Parts_Prop20 = (result[19] == null || result[19] == undefined) ? ('') : result[19].MatPropertyVal;
          var FEATURE01 = (result[0] == null || result[0] == undefined) ? ('') : result[0].MatPropertyName;
          var FEATURE02 = (result[1] == null || result[1] == undefined) ? ('') : result[1].MatPropertyName;
          var FEATURE03 = (result[2] == null || result[2] == undefined) ? ('') : result[2].MatPropertyName;
          var FEATURE04 = (result[3] == null || result[3] == undefined) ? ('') : result[3].MatPropertyName;
          var FEATURE05 = (result[4] == null || result[4] == undefined) ? ('') : result[4].MatPropertyName;
          var FEATURE06 = (result[5] == null || result[5] == undefined) ? ('') : result[5].MatPropertyName;
          var FEATURE07 = (result[6] == null || result[6] == undefined) ? ('') : result[6].MatPropertyName;
          var FEATURE08 = (result[7] == null || result[7] == undefined) ? ('') : result[7].MatPropertyName;
          var FEATURE09 = (result[8] == null || result[8] == undefined) ? ('') : result[8].MatPropertyName;
          var FEATURE10 = (result[9] == null || result[9] == undefined) ? ('') : result[9].MatPropertyName;
          var FEATURE11 = (result[10] == null || result[10] == undefined) ? ('') : result[10].MatPropertyName;
          var FEATURE12 = (result[11] == null || result[11] == undefined) ? ('') : result[11].MatPropertyName;
          var FEATURE13 = (result[12] == null || result[12] == undefined) ? ('') : result[12].MatPropertyName;
          var FEATURE14 = (result[13] == null || result[13] == undefined) ? ('') : result[13].MatPropertyName;
          var FEATURE15 = (result[14] == null || result[14] == undefined) ? ('') : result[14].MatPropertyName;
          var FEATURE16 = (result[15] == null || result[15] == undefined) ? ('') : result[15].MatPropertyName;
          var FEATURE17 = (result[16] == null || result[16] == undefined) ? ('') : result[16].MatPropertyName;
          var FEATURE18 = (result[17] == null || result[17] == undefined) ? ('') : result[17].MatPropertyName;
          var FEATURE19 = (result[18] == null || result[18] == undefined) ? ('') : result[18].MatPropertyName;
          var FEATURE20 = (result[19] == null || result[19] == undefined) ? ('') : result[19].MatPropertyName;
        }
        // console.log("贷息", result[0].CU_OldMaterialId);
        var obj = {
          "pclass": pclass,
          "PartsOldCode": ((result[0].CU_OldMaterialId == null || result[0].CU_OldMaterialId == undefined) ? ('') : result[0].CU_OldMaterialId),
          "PartsOldName": ((result[0].CU_OldMaterialSpec == null || result[0].CU_OldMaterialSpec == undefined) ? ('') : result[0].CU_OldMaterialSpec),
          "PartsCode": ((result[0].MaterialId == null || result[0].MaterialId == undefined) ? ('') : result[0].MaterialId),
          "PartsName": ((result[0].MatPropertyName == null || result[0].MatPropertyName == undefined) ? ('') : result[0].MatPropertyName),

          "Model": ((result[0].CU_type == null || result[0].CU_type == undefined) ? ('' + '\n') : result[0].CU_type + '\n'),
          "Assembly": ((result[0].HasComboProd == null || result[0].HasComboProd == undefined) ? ('' + '\n') : ((result[0].HasComboProd == true) ? ('是' + '\n') : '否' + '\n')),
          "UnitE": ((result[0].CU_UnitId == null || result[0].CU_UnitId == undefined) ? ('' + '\n') : result[0].CU_UnitId + '\n'),
          "Phase": ((result[0].MaterialUsedStateId == null || result[0].MaterialUsedStateId == undefined) ? ('' + '\n') : result[0].MaterialUsedStateId + '\n'),
          "Prior": ((result[0].CurrentState == null || result[0].CurrentState == undefined) ? ('' + '\n') : result[0].CurrentState + '\n'),
          "Staff": ((result[0].CreatorId == null || result[0].CreatorId == undefined) ? ('' + '\n') : result[0].CreatorId + '\n'),
          "SupplyTitle": ((result[0].ManufacturerName == null || result[0].ManufacturerName == undefined) ? ('' + '\n') : result[0].ManufacturerName + '\n'),

          "ApplyDate": ((result[0].CreateTime == null || result[0].CreateTime == undefined) ? ('' + '\n') : new Date(result[0].CreateTime).Format("yyyy-MM-dd") + '\n'),
          "Name1": ((Parts_Prop1 == null || Parts_Prop1 == undefined) ? ('' + '\n') : Parts_Prop1 + '\n'),
          "Name2": ((Parts_Prop2 == null || Parts_Prop2 == undefined) ? ('' + '\n') : Parts_Prop2 + '\n'),
          "Name3": ((Parts_Prop3 == null || Parts_Prop3 == undefined) ? ('' + '\n') : Parts_Prop3 + '\n'),
          "Name4": ((Parts_Prop4 == null || Parts_Prop4 == undefined) ? ('' + '\n') : Parts_Prop4 + '\n'),
          "Name5": ((Parts_Prop5 == null || Parts_Prop5 == undefined) ? ('' + '\n') : Parts_Prop5 + '\n'),
          "Name6": ((Parts_Prop6 == null || Parts_Prop6 == undefined) ? ('' + '\n') : Parts_Prop6 + '\n'),
          "Name7": ((Parts_Prop7 == null || Parts_Prop7 == undefined) ? ('' + '\n') : Parts_Prop7 + '\n'),
          "Name8": ((Parts_Prop8 == null || Parts_Prop8 == undefined) ? ('' + '\n') : Parts_Prop8 + '\n'),
          "Name9": ((Parts_Prop9 == null || Parts_Prop9 == undefined) ? ('' + '\n') : Parts_Prop9 + '\n'),
          "Name10": ((Parts_Prop10 == null || Parts_Prop10 == undefined) ? ('' + '\n') : Parts_Prop10 + '\n'),
          "Name11": ((Parts_Prop11 == null || Parts_Prop11 == undefined) ? ('' + '\n') : Parts_Prop11 + '\n'),
          "Name12": ((Parts_Prop12 == null || Parts_Prop12 == undefined) ? ('' + '\n') : Parts_Prop12 + '\n'),
          "Name13": ((Parts_Prop13 == null || Parts_Prop13 == undefined) ? ('' + '\n') : Parts_Prop13 + '\n'),
          "Name14": ((Parts_Prop14 == null || Parts_Prop14 == undefined) ? ('' + '\n') : Parts_Prop14 + '\n'),
          "Name15": ((Parts_Prop15 == null || Parts_Prop15 == undefined) ? ('' + '\n') : Parts_Prop15 + '\n'),
          "Name16": ((Parts_Prop16 == null || Parts_Prop16 == undefined) ? ('' + '\n') : Parts_Prop16 + '\n'),
          "Name17": ((Parts_Prop17 == null || Parts_Prop17 == undefined) ? ('' + '\n') : Parts_Prop17 + '\n'),
          "Name18": ((Parts_Prop18 == null || Parts_Prop18 == undefined) ? ('' + '\n') : Parts_Prop18 + '\n'),
          "Name19": ((Parts_Prop19 == null || Parts_Prop19 == undefined) ? ('' + '\n') : Parts_Prop19 + '\n'),
          "Name20": ((Parts_Prop20 == null || Parts_Prop20 == undefined) ? ('' + '\n') : Parts_Prop20 + '\n'),
          "Value1": (FEATURE01 == undefined || FEATURE01 == '' || FEATURE01 == 'NA' || FEATURE01 == '缺省' ? ('') : FEATURE01 + ' : '),
          "Value2": (FEATURE02 == undefined || FEATURE02 == '' || FEATURE02 == 'NA' || FEATURE02 == '缺省' ? ('') : FEATURE02 + ' : '),
          "Value3": (FEATURE03 == undefined || FEATURE03 == '' || FEATURE03 == 'NA' || FEATURE03 == '缺省' ? ('') : FEATURE03 + ' : '),
          "Value4": (FEATURE04 == undefined || FEATURE04 == '' || FEATURE04 == 'NA' || FEATURE04 == '缺省' ? ('') : FEATURE04 + ' : '),
          "Value5": (FEATURE05 == undefined || FEATURE05 == '' || FEATURE05 == 'NA' || FEATURE05 == '缺省' ? ('') : FEATURE05 + ' : '),
          "Value6": (FEATURE06 == undefined || FEATURE06 == '' || FEATURE06 == 'NA' || FEATURE06 == '缺省' ? ('') : FEATURE06 + ' : '),
          "Value7": (FEATURE07 == undefined || FEATURE07 == '' || FEATURE07 == 'NA' || FEATURE07 == '缺省' ? ('') : FEATURE07 + ' : '),
          "Value8": (FEATURE08 == undefined || FEATURE08 == '' || FEATURE08 == 'NA' || FEATURE08 == '缺省' ? ('') : FEATURE08 + ' : '),
          "Value9": (FEATURE09 == undefined || FEATURE09 == '' || FEATURE09 == 'NA' || FEATURE09 == '缺省' ? ('') : FEATURE09 + ' : '),
          "Value10": (FEATURE10 == undefined || FEATURE10 == '' || FEATURE10 == 'NA' || FEATURE10 == '缺省' ? ('') : FEATURE10 + ' : '),
          "Value11": (FEATURE11 == undefined || FEATURE11 == '' || FEATURE11 == 'NA' || FEATURE11 == '缺省' ? ('') : FEATURE11 + ' : '),
          "Value12": (FEATURE12 == undefined || FEATURE12 == '' || FEATURE12 == 'NA' || FEATURE12 == '缺省' ? ('') : FEATURE12 + ' : '),
          "Value13": (FEATURE13 == undefined || FEATURE13 == '' || FEATURE13 == 'NA' || FEATURE13 == '缺省' ? ('') : FEATURE13 + ' : '),
          "Value14": (FEATURE14 == undefined || FEATURE14 == '' || FEATURE14 == 'NA' || FEATURE14 == '缺省' ? ('') : FEATURE14 + ' : '),
          "Value15": (FEATURE15 == undefined || FEATURE15 == '' || FEATURE15 == 'NA' || FEATURE15 == '缺省' ? ('') : FEATURE15 + ' : '),
          "Value16": (FEATURE16 == undefined || FEATURE16 == '' || FEATURE16 == 'NA' || FEATURE16 == '缺省' ? ('') : FEATURE16 + ' : '),
          "Value17": (FEATURE17 == undefined || FEATURE17 == '' || FEATURE17 == 'NA' || FEATURE17 == '缺省' ? ('') : FEATURE17 + ' : '),
          "Value18": (FEATURE18 == undefined || FEATURE18 == '' || FEATURE18 == 'NA' || FEATURE18 == '缺省' ? ('') : FEATURE18 + ' : '),
          "Value19": (FEATURE19 == undefined || FEATURE19 == '' || FEATURE19 == 'NA' || FEATURE19 == '缺省' ? ('') : FEATURE19 + ' : '),
          "Value20": (FEATURE20 == undefined || FEATURE20 == '' || FEATURE20 == 'NA' || FEATURE20 == '缺省' ? ('') : FEATURE20 + ' : '),
        };
        sender.success(obj);
        var dump = JSON.stringify(obj);
        if (dump.length > 100) {
          // console.log("@@强精..:" + dump.substring(0, 100));
        } else {
          // console.log("@@强精..:" + JSON.stringify(obj));
        }
      },
      error: sender.error
    });
  }
}    