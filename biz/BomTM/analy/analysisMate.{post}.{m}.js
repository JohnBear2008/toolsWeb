module.exports = function (sender) {
  var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
  var yjDB = global.yjRequire("yujiang.Foil").yjDB;
  var queryCode = sender.req.query.PartsCode;
  console.log('取经queryCode  ' + queryCode);
  var queryClass = '';
  findClass();
  function findClass() {
    let SQLmax = "select Parts_Class  from `auto_parts` where  Parts_Code  =? OR Parts_Old_Code  =? ";
    yjDBService.exec({
      sql: SQLmax,
      parameters: [queryCode, queryCode],
      rowsAsArray: true,
      success: function (r) {
        var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
        for (var i = 0; i < data.length; i++) {
          queryClass = data[i].Parts_Class;
        }
        if (queryClass != null && queryClass != undefined && queryClass != '') {
          HandleParts(queryClass, queryCode);
        } else {
          var retcode = { "status": "Fail" };
          sender.success(retcode);
        }
      },
    })
  }
  function HandleParts(pclass, pcode) {
    let SQL =
      " select `Parts_Old_Code`, `Parts_Name` , `Parts_Old_Name` , `Parts_Code` , `Parts_Prop1` ,  `Parts_Prop2`, `Parts_Prop3`, `Parts_Prop4`, `Parts_Prop5`,`Parts_Prop6`, `Parts_Prop7`, `Parts_Prop8`, `Parts_Prop9`, `Parts_Prop10`,  " +
      "        `Parts_Prop11`, `Parts_Prop12`, `Parts_Prop13`, `Parts_Prop14`, `Parts_Prop15`, `Parts_Prop16`, `Parts_Prop17`, `Parts_Prop18`, `Parts_Prop19`, `Parts_Prop20` , " +
      "        `FEATURE01`,  `FEATURE02`, `FEATURE03`, `FEATURE04`, `FEATURE05`,`FEATURE06`, `FEATURE07`, `FEATURE08`, " +
      " 	   `FEATURE09`, `FEATURE10`, `FEATURE11`, `FEATURE12`, `FEATURE13`, `FEATURE14`, `FEATURE15`, `FEATURE16`, `FEATURE17`, `FEATURE18`, `FEATURE19`, `FEATURE20` " +
      " from auto_parts tbb LEFT JOIN auto_feature a on tbb.Parts_Class= a.Parts_Class " +
      "       where tbb.Parts_Class=? and (tbb.Parts_Code=? OR tbb.Parts_Old_Code=? ) ";

    yjDBService.exec({
      sql: SQL,
      parameters: [pclass, pcode, pcode],
      rowsAsArray: false,
      success: function (result) {

        console.log("取息", result[0].Parts_Old_Name);
        var obj = {
          "pclass": pclass,
          "PartsOldCode": ((result[0].Parts_Old_Code == null || result[0].Parts_Old_Code == undefined) ? ('') : result[0].Parts_Old_Code),
          "PartsOldName": ((result[0].Parts_Old_Name == null || result[0].Parts_Old_Name == undefined) ? ('') : result[0].Parts_Old_Name),
          "PartsCode": ((result[0].Parts_Code == null || result[0].Parts_Code == undefined) ? ('') : result[0].Parts_Code),
          "PartsName": ((result[0].Parts_Name == null || result[0].Parts_Name == undefined) ? ('') : result[0].Parts_Name),
          "Name1": ((result[0].Parts_Prop1 == null || result[0].Parts_Prop1 == undefined) ? ('' + '\n') : result[0].Parts_Prop1 + '\n'),
          "Name2": ((result[0].Parts_Prop2 == null || result[0].Parts_Prop2 == undefined) ? ('' + '\n') : result[0].Parts_Prop2 + '\n'),
          "Name3": ((result[0].Parts_Prop3 == null || result[0].Parts_Prop3 == undefined) ? ('' + '\n') : result[0].Parts_Prop3 + '\n'),
          "Name4": ((result[0].Parts_Prop4 == null || result[0].Parts_Prop4 == undefined) ? ('' + '\n') : result[0].Parts_Prop4 + '\n'),
          "Name5": ((result[0].Parts_Prop5 == null || result[0].Parts_Prop5 == undefined) ? ('' + '\n') : result[0].Parts_Prop5 + '\n'),
          "Name6": ((result[0].Parts_Prop6 == null || result[0].Parts_Prop6 == undefined) ? ('' + '\n') : result[0].Parts_Prop6 + '\n'),
          "Name7": ((result[0].Parts_Prop7 == null || result[0].Parts_Prop7 == undefined) ? ('' + '\n') : result[0].Parts_Prop7 + '\n'),
          "Name8": ((result[0].Parts_Prop8 == null || result[0].Parts_Prop8 == undefined) ? ('' + '\n') : result[0].Parts_Prop8 + '\n'),
          "Name9": ((result[0].Parts_Prop9 == null || result[0].Parts_Prop9 == undefined) ? ('' + '\n') : result[0].Parts_Prop9 + '\n'),
          "Name10": ((result[0].Parts_Prop10 == null || result[0].Parts_Prop10 == undefined) ? ('' + '\n') : result[0].Parts_Prop10 + '\n'),
          "Name11": ((result[0].Parts_Prop11 == null || result[0].Parts_Prop11 == undefined) ? ('' + '\n') : result[0].Parts_Prop11 + '\n'),
          "Name12": ((result[0].Parts_Prop12 == null || result[0].Parts_Prop12 == undefined) ? ('' + '\n') : result[0].Parts_Prop12 + '\n'),
          "Name13": ((result[0].Parts_Prop13 == null || result[0].Parts_Prop13 == undefined) ? ('' + '\n') : result[0].Parts_Prop13 + '\n'),
          "Name14": ((result[0].Parts_Prop14 == null || result[0].Parts_Prop14 == undefined) ? ('' + '\n') : result[0].Parts_Prop14 + '\n'),
          "Name15": ((result[0].Parts_Prop15 == null || result[0].Parts_Prop15 == undefined) ? ('' + '\n') : result[0].Parts_Prop15 + '\n'),
          "Name16": ((result[0].Parts_Prop16 == null || result[0].Parts_Prop16 == undefined) ? ('' + '\n') : result[0].Parts_Prop16 + '\n'),
          "Name17": ((result[0].Parts_Prop17 == null || result[0].Parts_Prop17 == undefined) ? ('' + '\n') : result[0].Parts_Prop17 + '\n'),
          "Name18": ((result[0].Parts_Prop18 == null || result[0].Parts_Prop18 == undefined) ? ('' + '\n') : result[0].Parts_Prop18 + '\n'),
          "Name19": ((result[0].Parts_Prop19 == null || result[0].Parts_Prop19 == undefined) ? ('' + '\n') : result[0].Parts_Prop19 + '\n'),
          "Name20": ((result[0].Parts_Prop20 == null || result[0].Parts_Prop20 == undefined) ? ('' + '\n') : result[0].Parts_Prop20 + '\n'),
          "Value1": (result[0].FEATURE01 == undefined || result[0].FEATURE01 == '' || result[0].FEATURE01 == 'NA' || result[0].FEATURE01 == '缺省' ? ('') : result[0].FEATURE01 + ' : '),
          "Value2": (result[0].FEATURE02 == undefined || result[0].FEATURE02 == '' || result[0].FEATURE02 == 'NA' || result[0].FEATURE02 == '缺省' ? ('') : result[0].FEATURE02 + ' : '),
          "Value3": (result[0].FEATURE03 == undefined || result[0].FEATURE03 == '' || result[0].FEATURE03 == 'NA' || result[0].FEATURE03 == '缺省' ? ('') : result[0].FEATURE03 + ' : '),
          "Value4": (result[0].FEATURE04 == undefined || result[0].FEATURE04 == '' || result[0].FEATURE04 == 'NA' || result[0].FEATURE04 == '缺省' ? ('') : result[0].FEATURE04 + ' : '),
          "Value5": (result[0].FEATURE05 == undefined || result[0].FEATURE05 == '' || result[0].FEATURE05 == 'NA' || result[0].FEATURE05 == '缺省' ? ('') : result[0].FEATURE05 + ' : '),
          "Value6": (result[0].FEATURE06 == undefined || result[0].FEATURE06 == '' || result[0].FEATURE06 == 'NA' || result[0].FEATURE06 == '缺省' ? ('') : result[0].FEATURE06 + ' : '),
          "Value7": (result[0].FEATURE07 == undefined || result[0].FEATURE07 == '' || result[0].FEATURE07 == 'NA' || result[0].FEATURE07 == '缺省' ? ('') : result[0].FEATURE07 + ' : '),
          "Value8": (result[0].FEATURE08 == undefined || result[0].FEATURE08 == '' || result[0].FEATURE08 == 'NA' || result[0].FEATURE08 == '缺省' ? ('') : result[0].FEATURE08 + ' : '),
          "Value9": (result[0].FEATURE09 == undefined || result[0].FEATURE09 == '' || result[0].FEATURE09 == 'NA' || result[0].FEATURE09 == '缺省' ? ('') : result[0].FEATURE09 + ' : '),
          "Value10": (result[0].FEATURE10 == undefined || result[0].FEATURE10 == '' || result[0].FEATURE10 == 'NA' || result[0].FEATURE10 == '缺省' ? ('') : result[0].FEATURE10 + ' : '),
          "Value11": (result[0].FEATURE11 == undefined || result[0].FEATURE11 == '' || result[0].FEATURE11 == 'NA' || result[0].FEATURE11 == '缺省' ? ('') : result[0].FEATURE11 + ' : '),
          "Value12": (result[0].FEATURE12 == undefined || result[0].FEATURE12 == '' || result[0].FEATURE12 == 'NA' || result[0].FEATURE12 == '缺省' ? ('') : result[0].FEATURE12 + ' : '),
          "Value13": (result[0].FEATURE13 == undefined || result[0].FEATURE13 == '' || result[0].FEATURE13 == 'NA' || result[0].FEATURE13 == '缺省' ? ('') : result[0].FEATURE13 + ' : '),
          "Value14": (result[0].FEATURE14 == undefined || result[0].FEATURE14 == '' || result[0].FEATURE14 == 'NA' || result[0].FEATURE14 == '缺省' ? ('') : result[0].FEATURE14 + ' : '),
          "Value15": (result[0].FEATURE15 == undefined || result[0].FEATURE15 == '' || result[0].FEATURE15 == 'NA' || result[0].FEATURE15 == '缺省' ? ('') : result[0].FEATURE15 + ' : '),
          "Value16": (result[0].FEATURE16 == undefined || result[0].FEATURE16 == '' || result[0].FEATURE16 == 'NA' || result[0].FEATURE16 == '缺省' ? ('') : result[0].FEATURE16 + ' : '),
          "Value17": (result[0].FEATURE17 == undefined || result[0].FEATURE17 == '' || result[0].FEATURE17 == 'NA' || result[0].FEATURE17 == '缺省' ? ('') : result[0].FEATURE17 + ' : '),
          "Value18": (result[0].FEATURE18 == undefined || result[0].FEATURE18 == '' || result[0].FEATURE18 == 'NA' || result[0].FEATURE18 == '缺省' ? ('') : result[0].FEATURE18 + ' : '),
          "Value19": (result[0].FEATURE19 == undefined || result[0].FEATURE19 == '' || result[0].FEATURE19 == 'NA' || result[0].FEATURE19 == '缺省' ? ('') : result[0].FEATURE19 + ' : '),
          "Value20": (result[0].FEATURE20 == undefined || result[0].FEATURE20 == '' || result[0].FEATURE20 == 'NA' || result[0].FEATURE20 == '缺省' ? ('') : result[0].FEATURE20 + ' : '),
        };
        sender.success(obj);
        //  console.log("存本",obj);
      },
      error: sender.error
    });
  }


}    