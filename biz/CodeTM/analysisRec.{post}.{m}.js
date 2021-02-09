module.exports = function (sender) {
  var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
  var yjDB = global.yjRequire("yujiang.Foil").yjDB;

  // var queryYear = sender.req.query.PartsYear;  
  var queryBILLID = sender.req.query.BILLID;
  var queryCode = sender.req.query.PartsCode;
  var queryCodeA = sender.req.query.PartsCodeA;
  var queryCodeB = sender.req.query.PartsCodeB;
  var queryClass = sender.req.query.PartsClass;
  var queryDBTable = sender.req.query.DBTable;
  var SMT_ID = sender.req.query.SMTID;
  var Parts_Prop1 = sender.req.query.Parts_Prop1;
  var Parts_Prop2 = sender.req.query.Parts_Prop2;
  var Parts_Prop3 = sender.req.query.Parts_Prop3;
  var Parts_Prop4 = sender.req.query.Parts_Prop4;
  var Parts_Prop5 = sender.req.query.Parts_Prop5;
  var Parts_Prop6 = sender.req.query.Parts_Prop6;
  var Parts_Prop7 = sender.req.query.Parts_Prop7;
  var Parts_Prop8 = sender.req.query.Parts_Prop8;
  var Parts_Prop9 = sender.req.query.Parts_Prop9;
  var Parts_Prop10 = sender.req.query.Parts_Prop10;
  var Parts_Prop11 = sender.req.query.Parts_Prop11;
  var Parts_Prop12 = sender.req.query.Parts_Prop12;
  var Parts_Prop13 = sender.req.query.Parts_Prop13;
  var Parts_Prop14 = sender.req.query.Parts_Prop14;
  var Parts_Prop15 = sender.req.query.Parts_Prop15;
  var Parts_Prop16 = sender.req.query.Parts_Prop16;
  var Parts_Prop17 = sender.req.query.Parts_Prop17;
  var Parts_Prop18 = sender.req.query.Parts_Prop18;
  var Parts_Prop19 = sender.req.query.Parts_Prop19;
  var Parts_Prop20 = sender.req.query.Parts_Prop20;
  var SoftNo = sender.req.query.Soft_No;
  var SupplyID = sender.req.query.SupplyID;
  var arrange = sender.req.query.arrange;

  if (arrange == 'Contrast') {
    Contrast(queryCodeA, queryCodeB);
  } else if (arrange == 'DiffProp') {
    DiffProp(queryCode);
  } else {
    if (queryDBTable == 'auto_rec_parts') {
      console.log("阿莫1");
      HandleRecParts(queryClass, queryBILLID, queryCode);
    } else if (queryDBTable == 'auto_abs_parts') {
      console.log("阿莫2");
      HandleAbsParts(queryClass, queryCode);
    } else if (queryDBTable == 'auto_rec_abso') {
      console.log("阿莫3");
      HandlerecAbso(queryClass, queryBILLID, queryCode);
    } else if (queryDBTable == 'virtual') {
      console.log("阿莫4");
      CheckProp(queryClass);
    } else {
      HandleParts(queryClass, queryCode);
      console.log("阿莫5");
    }
  }
  // select  `FEATURE01`,  `FEATURE02`, `FEATURE03`, `FEATURE04`, `FEATURE05`,`FEATURE06`, `FEATURE07`, `FEATURE08`,
  // `FEATURE09`, `FEATURE10`, `FEATURE11`, `FEATURE12`, `FEATURE13`, `FEATURE14`, `FEATURE15`, `FEATURE16`, `FEATURE17`, `FEATURE18`, `FEATURE19`, `FEATURE20`
  //  from auto_feature a where a.Parts_Class='B1'    UNION   select  
  // `Parts_Prop1`,  `Parts_Prop2`, `Parts_Prop3`, `Parts_Prop4`, `Parts_Prop5`,`Parts_Prop6`, `Parts_Prop7`, `Parts_Prop8`, `Parts_Prop9`, `Parts_Prop10`,  
  //   `Parts_Prop11`, `Parts_Prop12`, `Parts_Prop13`, `Parts_Prop14`, `Parts_Prop15`, `Parts_Prop16`, `Parts_Prop17`, `Parts_Prop18`, `Parts_Prop19`, `Parts_Prop20`   
  //   from auto_parts where Parts_Class='B1' and Parts_Code='AB1-A000001-7TM'  LIMIT 2
  function CheckProp(sClass) {
    console.log("以金", sClass, ">软~<", SoftNo, "> 供~ <", SupplyID, ">");
    let SQL_R2 =
      " select Parts_Name, Parts_Chi, `Parts_Prop1`,  `Parts_Prop2`, `Parts_Prop3`, `Parts_Prop4`, `Parts_Prop5`,`Parts_Prop6`, `Parts_Prop7`, `Parts_Prop8`, `Parts_Prop9`, `Parts_Prop10`,  " +
      " `Parts_Prop11`, `Parts_Prop12`, `Parts_Prop13`, `Parts_Prop14`, `Parts_Prop15`, `Parts_Prop16`, `Parts_Prop17`, `Parts_Prop18`, `Parts_Prop19`, `Parts_Prop20` , `SMT_ID`   " +
      " from `auto_parts`  where  Parts_Class=?  and Parts_Prop1=? and Parts_Prop2=? and Parts_Prop3=? and Parts_Prop4=? and Parts_Prop5=? and Parts_Prop6=? and Parts_Prop7=? and Parts_Prop8=? and Parts_Prop9=? and Parts_Prop10=? " +
      " and Parts_Prop11=? and Parts_Prop12=? and Parts_Prop13=? and Parts_Prop14=? and Parts_Prop15=? and Parts_Prop16=? and Parts_Prop17=? and Parts_Prop18=? and Parts_Prop19=? and Parts_Prop20=?  and Soft_No= ? ";
    let SQLStep2 =
      " select Parts_Name, Parts_Chi, `Parts_Prop1`,  `Parts_Prop2`, `Parts_Prop3`, `Parts_Prop4`, `Parts_Prop5`,`Parts_Prop6`, `Parts_Prop7`, `Parts_Prop8`, `Parts_Prop9`, `Parts_Prop10`,  " +
      " `Parts_Prop11`, `Parts_Prop12`, `Parts_Prop13`, `Parts_Prop14`, `Parts_Prop15`, `Parts_Prop16`, `Parts_Prop17`, `Parts_Prop18`, `Parts_Prop19`, `Parts_Prop20` , `SMT_ID`   " +
      " from `auto_parts`  where  Parts_Class=?  and Parts_Prop1=? and Parts_Prop2=? and Parts_Prop3=? and Parts_Prop4=? and Parts_Prop5=? and Parts_Prop6=? and Parts_Prop7=? and Parts_Prop8=? and Parts_Prop9=? and Parts_Prop10=? " +
      " and Parts_Prop11=? and Parts_Prop12=? and Parts_Prop13=? and Parts_Prop14=? and Parts_Prop15=? and Parts_Prop16=? and Parts_Prop17=? and Parts_Prop18=? and Parts_Prop19=? and Parts_Prop20=?  and Supply_ID= ? ";
    let paramlist2 = [];
    var SQL2 = '';
    if (sClass == 'R1' || sClass == 'R2' || sClass == 'R3' || sClass == 'S1') {
      SQL2 = SQL_R2;
      paramlist2 = [sClass, Parts_Prop1, Parts_Prop2, Parts_Prop3, Parts_Prop4, Parts_Prop5, Parts_Prop6, Parts_Prop7, Parts_Prop8, Parts_Prop9, Parts_Prop10,
        Parts_Prop11, Parts_Prop12, Parts_Prop13, Parts_Prop14, Parts_Prop15, Parts_Prop16, Parts_Prop17, Parts_Prop18, Parts_Prop19, Parts_Prop20, SoftNo];
    } else {
      SQL2 = SQLStep2;
      paramlist2 = [sClass, Parts_Prop1, Parts_Prop2, Parts_Prop3, Parts_Prop4, Parts_Prop5, Parts_Prop6, Parts_Prop7, Parts_Prop8, Parts_Prop9, Parts_Prop10,
        Parts_Prop11, Parts_Prop12, Parts_Prop13, Parts_Prop14, Parts_Prop15, Parts_Prop16, Parts_Prop17, Parts_Prop18, Parts_Prop19, Parts_Prop20, SupplyID];
    }
    // console.log("佐三",SQL2);
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
        var status = '';
        if (datas.length > 0) {
          if (datas[0].Parts_Name != undefined) {
            console.log("你失败了");
            status = "有重复=>FAIL";
          } else {
            status = "无重复=>OK";
          }
        } else {
          console.log("你成功了");
          status = "无重复=>OK";
        }
        HandleVirt(status, queryClass);
      },
      error: sender.error
    });

  }
  function HandleVirt(status, pclass) {
    let SQL =
      " select `FEATURE01`,  `FEATURE02`, `FEATURE03`, `FEATURE04`, `FEATURE05`,`FEATURE06`, `FEATURE07`, `FEATURE08`, " +
      " `FEATURE09`, `FEATURE10`, `FEATURE11`, `FEATURE12`, `FEATURE13`, `FEATURE14`, `FEATURE15`, `FEATURE16`, `FEATURE17`, `FEATURE18`,  " +
      " `FEATURE19`, `FEATURE20` from auto_feature tbf where tbf.Parts_Class=?    ";
    //  console.log(" SQL:"+SQL);   
    //  console.log(" 猴前 "+pcode +"类别 "+pclass );
    yjDBService.exec({
      sql: SQL,
      parameters: [pclass],
      rowsAsArray: false,
      success: function (result) {
        // console.log("盗取",JSON.stringify(result));
        var obj = {
          "status": status,
          "pclass": pclass,
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
        // console.log("西班牙", obj);
      },
      error: sender.error
    });
  }
  function HandlerecAbso(pclass, billid, pcode) {
    let SQL =
      // select `Model` , `Assembly` ,`Parts_Prop1`,  `Parts_Prop2`, `Parts_Prop3`, `Parts_Prop4`, `Parts_Prop5`,`Parts_Prop6`, `Parts_Prop7`, `Parts_Prop8`, `Parts_Prop9`, `Parts_Prop10`,  
      // `Parts_Prop11`, `Parts_Prop12`, `Parts_Prop13`, `Parts_Prop14`, `Parts_Prop15`, `Parts_Prop16`, `Parts_Prop17`, `Parts_Prop18`, `Parts_Prop19`, `Parts_Prop20`   
      // from auto_rec_parts where   BILL_ID='202007281346'  UNION select '型号','组合件', `FEATURE01`,  `FEATURE02`, `FEATURE03`, `FEATURE04`, `FEATURE05`,`FEATURE06`, `FEATURE07`, `FEATURE08`, `FEATURE09`, `FEATURE10`,   
      // `FEATURE11`, `FEATURE12`, `FEATURE13`, `FEATURE14`, `FEATURE15`, `FEATURE16`, `FEATURE17`, `FEATURE18`, `FEATURE19`, `FEATURE20`  from auto_feature a where a.Parts_Class='A3'   
      " select tbb.Model , tbb.Assembly  , tbb.PartsUnitE , tbb.PhaseStatus , tbb.UsePriority ,tbb.Staff , tbb.Parts_Apply_Date ,`Parts_Prop1`,  `Parts_Prop2`, `Parts_Prop3`, `Parts_Prop4`, `Parts_Prop5`,`Parts_Prop6`, `Parts_Prop7`, `Parts_Prop8`, `Parts_Prop9`, `Parts_Prop10`,  " +
      "       `Parts_Prop11`, `Parts_Prop12`, `Parts_Prop13`, `Parts_Prop14`, `Parts_Prop15`, `Parts_Prop16`, `Parts_Prop17`, `Parts_Prop18`, `Parts_Prop19`, `Parts_Prop20` , " +
      "       `FEATURE01`,  `FEATURE02`, `FEATURE03`, `FEATURE04`, `FEATURE05`,`FEATURE06`, `FEATURE07`, `FEATURE08`, " +
      " 	   `FEATURE09`, `FEATURE10`, `FEATURE11`, `FEATURE12`, `FEATURE13`, `FEATURE14`, `FEATURE15`, `FEATURE16`, `FEATURE17`, `FEATURE18`, `FEATURE19`, `FEATURE20` " +
      " from auto_rec_abso tbb LEFT JOIN auto_feature a on tbb.Parts_Class= a.Parts_Class " +
      "       where tbb.Parts_Class=?  and tbb.Parts_Code=?  ";
    //  console.log(" SQL:"+SQL);   
    console.log(" 猫更 " + pclass + "审批号 " + billid + " 码是  " + pcode);
    yjDBService.exec({
      sql: SQL,
      parameters: [pclass, pcode, pclass],
      rowsAsArray: false,
      success: function (result) {
        console.log("盗取", JSON.stringify(result));
        var obj = {
          "pclass": pclass,
          "Model": ((result[0].Model == null || result[0].Model == undefined) ? ('' + '\n') : result[0].Model + '\n'),
          "Assembly": ((result[0].Assembly == null || result[0].Assembly == undefined) ? ('' + '\n') : result[0].Assembly + '\n'),
          "UnitE": ((result[0].PartsUnitE == null || result[0].PartsUnitE == undefined) ? ('' + '\n') : result[0].PartsUnitE + '\n'),
          "Phase": ((result[0].PhaseStatus == null || result[0].PhaseStatus == undefined) ? ('' + '\n') : result[0].PhaseStatus + '\n'),
          "Prior": ((result[0].UsePriority == null || result[0].UsePriority == undefined) ? ('' + '\n') : result[0].UsePriority + '\n'),
          "Staff": ((result[0].Staff == null || result[0].Staff == undefined) ? ('' + '\n') : result[0].Staff + '\n'),
          "ApplyDate": ((result[0].Parts_Apply_Date == null || result[0].Parts_Apply_Date == undefined) ? ('' + '\n') : new Date(result[0].Parts_Apply_Date).Format("yyyy-MM-dd") + '\n'),
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
          "ValueM": '型号：',
          "ValueA": '组合件：',
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
        // console.log("豪大总计",obj);
      },
      error: sender.error
    });
  }
  function HandleRecParts(pclass, billid, pcode) {
    let SQL =
      //  "select `Parts_Prop1`,  `Parts_Prop2`, `Parts_Prop3`, `Parts_Prop4`, `Parts_Prop5`,`Parts_Prop6`, `Parts_Prop7`, `Parts_Prop8`, `Parts_Prop9`, `Parts_Prop10`, "+
      //  " `Parts_Prop11`, `Parts_Prop12`, `Parts_Prop13`, `Parts_Prop14`, `Parts_Prop15`, `Parts_Prop16`, `Parts_Prop17`, `Parts_Prop18`, `Parts_Prop19`, `Parts_Prop20`  "+
      //  " from auto_rec_parts where   Parts_Class=? and BILL_ID=? and Parts_Code=?  UNION select  `FEATURE01`,  `FEATURE02`, `FEATURE03`, `FEATURE04`, `FEATURE05`,`FEATURE06`, `FEATURE07`, `FEATURE08`, `FEATURE09`, `FEATURE10`, "+ 
      //  " `FEATURE11`, `FEATURE12`, `FEATURE13`, `FEATURE14`, `FEATURE15`, `FEATURE16`, `FEATURE17`, `FEATURE18`, `FEATURE19`, `FEATURE20`  from auto_feature a where a.Parts_Class=?  " ;
      " select tbb.Model , tbb.Assembly , tbb.PartsUnitE , tbb.PhaseStatus , tbb.UsePriority , tbb.Staff , tbb.Parts_Apply_Date ,`Parts_Prop1`,  `Parts_Prop2`, `Parts_Prop3`, `Parts_Prop4`, `Parts_Prop5`,`Parts_Prop6`, `Parts_Prop7`, `Parts_Prop8`, `Parts_Prop9`, `Parts_Prop10`,  " +
      "       `Parts_Prop11`, `Parts_Prop12`, `Parts_Prop13`, `Parts_Prop14`, `Parts_Prop15`, `Parts_Prop16`, `Parts_Prop17`, `Parts_Prop18`, `Parts_Prop19`, `Parts_Prop20` , " +
      "       `FEATURE01`,  `FEATURE02`, `FEATURE03`, `FEATURE04`, `FEATURE05`,`FEATURE06`, `FEATURE07`, `FEATURE08`, " +
      " 	   `FEATURE09`, `FEATURE10`, `FEATURE11`, `FEATURE12`, `FEATURE13`, `FEATURE14`, `FEATURE15`, `FEATURE16`, `FEATURE17`, `FEATURE18`, `FEATURE19`, `FEATURE20` " +
      " from auto_rec_parts tbb LEFT JOIN auto_feature a on tbb.Parts_Class= a.Parts_Class " +
      "       where tbb.Parts_Class=? and tbb.BILL_ID=?   ";//and tbb.Parts_Code=?
    //  console.log(" SQL:"+SQL);   
    console.log(" 三文鱼 " + pcode + "审批号<" + pclass + ">表格<" + billid + ">");
    yjDBService.exec({
      sql: SQL,
      parameters: [pclass, billid,],
      rowsAsArray: false,
      success: function (result) {
        //  console.log("点餐",JSON.stringify(result));
        var obj = {
          "pclass": pclass,
          "Model": ((result[0].Model == null || result[0].Model == undefined) ? ('' + '\n') : result[0].Model + '\n'),
          "Assembly": ((result[0].Assembly == null || result[0].Assembly == undefined) ? ('' + '\n') : result[0].Assembly + '\n'),
          "UnitE": ((result[0].PartsUnitE == null || result[0].PartsUnitE == undefined) ? ('' + '\n') : result[0].PartsUnitE + '\n'),
          "Phase": ((result[0].PhaseStatus == null || result[0].PhaseStatus == undefined) ? ('' + '\n') : result[0].PhaseStatus + '\n'),
          "Prior": ((result[0].UsePriority == null || result[0].UsePriority == undefined) ? ('' + '\n') : result[0].UsePriority + '\n'),
          "Staff": ((result[0].Staff == null || result[0].Staff == undefined) ? ('' + '\n') : result[0].Staff + '\n'),
          "ApplyDate": ((result[0].Parts_Apply_Date == null || result[0].Parts_Apply_Date == undefined) ? ('' + '\n') : new Date(result[0].Parts_Apply_Date).Format("yyyy-MM-dd") + '\n'),
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
          "ValueM": '型号：',
          "ValueA": '组合件：',
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
        // console.log("豪大总计",obj);
      },
      error: sender.error
    });
  }
  function HandleAbsParts(pclass, pcode) {
    let SQL =
      // "select `Parts_Prop1`,  `Parts_Prop2`, `Parts_Prop3`, `Parts_Prop4`, `Parts_Prop5`,`Parts_Prop6`, `Parts_Prop7`, `Parts_Prop8`, `Parts_Prop9`, `Parts_Prop10`, "+
      // " `Parts_Prop11`, `Parts_Prop12`, `Parts_Prop13`, `Parts_Prop14`, `Parts_Prop15`, `Parts_Prop16`, `Parts_Prop17`, `Parts_Prop18`, `Parts_Prop19`, `Parts_Prop20`  "+
      // " from auto_abs_parts where Parts_Class=? and Parts_Code=?   UNION select  `FEATURE01`,  `FEATURE02`, `FEATURE03`, `FEATURE04`, `FEATURE05`,`FEATURE06`, `FEATURE07`, `FEATURE08`, `FEATURE09`, `FEATURE10`, "+ 
      // " `FEATURE11`, `FEATURE12`, `FEATURE13`, `FEATURE14`, `FEATURE15`, `FEATURE16`, `FEATURE17`, `FEATURE18`, `FEATURE19`, `FEATURE20`  from auto_feature a where a.Parts_Class=?  " ;
      " select  tbb.Model , tbb.Assembly , tbb.PartsUnitE , tbb.PhaseStatus , tbb.UsePriority , tbb.Staff , tbb.Parts_Apply_Date ,`Parts_Prop1`,  `Parts_Prop2`, `Parts_Prop3`, `Parts_Prop4`, `Parts_Prop5`,`Parts_Prop6`, `Parts_Prop7`, `Parts_Prop8`, `Parts_Prop9`, `Parts_Prop10`,  " +
      "       `Parts_Prop11`, `Parts_Prop12`, `Parts_Prop13`, `Parts_Prop14`, `Parts_Prop15`, `Parts_Prop16`, `Parts_Prop17`, `Parts_Prop18`, `Parts_Prop19`, `Parts_Prop20` , " +
      "       `FEATURE01`,  `FEATURE02`, `FEATURE03`, `FEATURE04`, `FEATURE05`,`FEATURE06`, `FEATURE07`, `FEATURE08`, " +
      " 	   `FEATURE09`, `FEATURE10`, `FEATURE11`, `FEATURE12`, `FEATURE13`, `FEATURE14`, `FEATURE15`, `FEATURE16`, `FEATURE17`, `FEATURE18`, `FEATURE19`, `FEATURE20` " +
      " from auto_abs_parts tbb LEFT JOIN auto_feature a on tbb.Parts_Class= a.Parts_Class " +
      "       where tbb.Parts_Class=? and tbb.Parts_Code=?  ";
    //  console.log(" SQL:"+SQL);    
    // console.log(" 桃果 "+pclass +"审批号 "+pcode );        
    yjDBService.exec({
      sql: SQL,
      parameters: [pclass, pcode, pclass],
      rowsAsArray: false,
      success: function (result) {
        //  console.log("时鱼                            ",JSON.stringify(result));
        var obj = {
          "pclass": pclass,
          "Model": ((result[0].Model == null || result[0].Model == undefined) ? ('' + '\n') : result[0].Model + '\n'),
          "Assembly": ((result[0].Assembly == null || result[0].Assembly == undefined) ? ('' + '\n') : result[0].Assembly + '\n'),
          "UnitE": ((result[0].PartsUnitE == null || result[0].PartsUnitE == undefined) ? ('' + '\n') : result[0].PartsUnitE + '\n'),
          "Phase": ((result[0].PhaseStatus == null || result[0].PhaseStatus == undefined) ? ('' + '\n') : result[0].PhaseStatus + '\n'),
          "Prior": ((result[0].UsePriority == null || result[0].UsePriority == undefined) ? ('' + '\n') : result[0].UsePriority + '\n'),
          "Staff": ((result[0].Staff == null || result[0].Staff == undefined) ? ('' + '\n') : result[0].Staff + '\n'),
          "ApplyDate": ((result[0].Parts_Apply_Date == null || result[0].Parts_Apply_Date == undefined) ? ('' + '\n') : new Date(result[0].Parts_Apply_Date).Format("yyyy-MM-dd") + '\n'),
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
          "ValueM": '型号：',
          "ValueA": '组合件：',
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
        // console.log("豪大总计",obj);
      },
      error: sender.error
    });
  }
  function HandleParts(pclass, pcode) {
    let SQL =
      " select tbb.SMT_Title , tbb.Supply_Title , tbb.Parts_Old_Code , tbb.Parts_Name , tbb.Parts_Old_Name , tbb.Model , tbb.Assembly , tbb.PartsUnitE , tbb.PhaseStatus , tbb.UsePriority , " +
      " tbb.Staff , tbb.Parts_Apply_Date , `Parts_Prop1`,  `Parts_Prop2`, `Parts_Prop3`, `Parts_Prop4`, `Parts_Prop5`,`Parts_Prop6`, `Parts_Prop7`, `Parts_Prop8`, `Parts_Prop9`, `Parts_Prop10`,  " +
      "   `Parts_Prop11`, `Parts_Prop12`, `Parts_Prop13`, `Parts_Prop14`, `Parts_Prop15`, `Parts_Prop16`, `Parts_Prop17`, `Parts_Prop18`, `Parts_Prop19`, `Parts_Prop20` , " +
      "  `FEATURE01`,  `FEATURE02`, `FEATURE03`, `FEATURE04`, `FEATURE05`,`FEATURE06`, `FEATURE07`, `FEATURE08`, " +
      "   `FEATURE09`, `FEATURE10`, `FEATURE11`, `FEATURE12`, `FEATURE13`, `FEATURE14`, `FEATURE15`, `FEATURE16`, `FEATURE17`, `FEATURE18`, `FEATURE19`, `FEATURE20` " +
      " from auto_parts tbb LEFT JOIN auto_feature a on tbb.Parts_Class= a.Parts_Class " +
      "       where  tbb.Parts_Code=?  ";
    // console.log(" 交心SQL:"+SQL); 
    // console.log(" 分析:类别 "+pclass +"编码 "+pcode);        
    yjDBService.exec({
      sql: SQL,
      parameters: [pcode],
      rowsAsArray: false,
      success: function (result) {
        //  console.log("领食",JSON.stringify(result));
        //  console.log("心菜心菜",JSON.stringify(result[0].PartsUnitE));
        //  console.log("田惠田惠",JSON.stringify(result[0].PhaseStatus));
        var obj = {
          "pclass": pclass,
          "PartsOldCode": ((result[0].Parts_Old_Code == null || result[0].Parts_Old_Code == undefined) ? ('') : result[0].Parts_Old_Code),
          "PartsName": ((result[0].Parts_Name == null || result[0].Parts_Name == undefined) ? ('') : result[0].Parts_Name),
          "PartsOldName": ((result[0].Parts_Old_Name == null || result[0].Parts_Old_Name == undefined) ? ('') : result[0].Parts_Old_Name),
          "SMTTitle": ((result[0].SMT_Title == null || result[0].SMT_Title == undefined) ? ('') : result[0].SMT_Title),
          "SupplyTitle": ((result[0].Supply_Title == null || result[0].Supply_Title == undefined) ? ('') : result[0].Supply_Title),
          "Model": ((result[0].Model == null || result[0].Model == undefined) ? ('' + '\n') : result[0].Model),
          "Assembly": ((result[0].Assembly == null || result[0].Assembly == undefined) ? ('' + '\n') : result[0].Assembly),
          "UnitE": ((result[0].PartsUnitE == null || result[0].PartsUnitE == undefined) ? ('' + '\n') : result[0].PartsUnitE),
          "Phase": ((result[0].PhaseStatus == null || result[0].PhaseStatus == undefined) ? ('' + '\n') : result[0].PhaseStatus),
          "Prior": ((result[0].UsePriority == null || result[0].UsePriority == undefined) ? ('' + '\n') : result[0].UsePriority),
          "Staff": ((result[0].Staff == null || result[0].Staff == undefined) ? ('' + '\n') : result[0].Staff),
          "ApplyDate": ((result[0].Parts_Apply_Date == null || result[0].Parts_Apply_Date == undefined) ? ('' + '\n') : new Date(result[0].Parts_Apply_Date).Format("yyyy-MM-dd")),
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
          "ValueM": '型号：',
          "ValueA": '组合件：',
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
        var dump = JSON.stringify(obj);
        if (dump.length > 100) {
          console.log("大凉山:" + dump.substring(0, 100));
        } else {
          console.log("大凉山:" + JSON.stringify(obj));
        }

      },
      error: sender.error
    });
  }
  function Contrast(pcodeA, pcodeB) {
  //   select tbb.SMT_Title , tbb.Supply_Title ,  `Parts_Prop1`,  `Parts_Prop2`, `Parts_Prop3`, `Parts_Prop4`, `Parts_Prop5`,`Parts_Prop6`, `Parts_Prop7`, `Parts_Prop8`, `Parts_Prop9`, `Parts_Prop10`,  
  //   `Parts_Prop11`, `Parts_Prop12`, `Parts_Prop13`, `Parts_Prop14`, `Parts_Prop15`, `Parts_Prop16`, `Parts_Prop17`, `Parts_Prop18`, `Parts_Prop19`, `Parts_Prop20` ,
  //   `FEATURE01`,  `FEATURE02`, `FEATURE03`, `FEATURE04`, `FEATURE05`,`FEATURE06`, `FEATURE07`, `FEATURE08`, `FEATURE09`, `FEATURE10`,
	// `FEATURE11`, `FEATURE12`, `FEATURE13`, `FEATURE14`, `FEATURE15`, `FEATURE16`, `FEATURE17`, `FEATURE18`, `FEATURE19`, `FEATURE20` 
  //  from auto_parts tbb  LEFT JOIN auto_feature a on tbb.Parts_Class= a.Parts_Class  where  tbb.Parts_Code= 'BA2-A000001-000'  OR tbb.Parts_Old_Code='BA2-A000001-000' 
  //  UNION
  //   select tbc.SMT_Title , tbc.Supply_Title ,  `Parts_Prop1`,  `Parts_Prop2`, `Parts_Prop3`, `Parts_Prop4`, `Parts_Prop5`,`Parts_Prop6`, `Parts_Prop7`, `Parts_Prop8`, `Parts_Prop9`, `Parts_Prop10`,  
  //   `Parts_Prop11`, `Parts_Prop12`, `Parts_Prop13`, `Parts_Prop14`, `Parts_Prop15`, `Parts_Prop16`, `Parts_Prop17`, `Parts_Prop18`, `Parts_Prop19`, `Parts_Prop20`, 
  //   `FEATURE01`,  `FEATURE02`, `FEATURE03`, `FEATURE04`, `FEATURE05`,`FEATURE06`, `FEATURE07`, `FEATURE08`, `FEATURE09`, `FEATURE10`,
	// `FEATURE11`, `FEATURE12`, `FEATURE13`, `FEATURE14`, `FEATURE15`, `FEATURE16`, `FEATURE17`, `FEATURE18`, `FEATURE19`, `FEATURE20` 
  //  from auto_parts tbc LEFT JOIN auto_feature a on tbc.Parts_Class= a.Parts_Class where  tbc.Parts_Code= 'BA2-A000002-000'  OR tbc.Parts_Old_Code='BA2-A000002-000' 
 
    let SQL =
    " select tbb.SMT_Title , tbb.Supply_Title ,  `Parts_Prop1`,  `Parts_Prop2`, `Parts_Prop3`, `Parts_Prop4`, `Parts_Prop5`,`Parts_Prop6`, `Parts_Prop7`, `Parts_Prop8`, `Parts_Prop9`, `Parts_Prop10`,  " +
    " `Parts_Prop11`, `Parts_Prop12`, `Parts_Prop13`, `Parts_Prop14`, `Parts_Prop15`, `Parts_Prop16`, `Parts_Prop17`, `Parts_Prop18`, `Parts_Prop19`, `Parts_Prop20` , " +
    " `FEATURE01`,  `FEATURE02`, `FEATURE03`, `FEATURE04`, `FEATURE05`,`FEATURE06`, `FEATURE07`, `FEATURE08`, `FEATURE09`, `FEATURE10`, " +
   	" `FEATURE11`, `FEATURE12`, `FEATURE13`, `FEATURE14`, `FEATURE15`, `FEATURE16`, `FEATURE17`, `FEATURE18`, `FEATURE19`, `FEATURE20`  " +
    " from auto_parts tbb  LEFT JOIN auto_feature a on tbb.Parts_Class= a.Parts_Class  where  tbb.Parts_Code= ?  OR tbb.Parts_Old_Code = ? " +
    " UNION " +
    " select tbc.SMT_Title , tbc.Supply_Title ,  `Parts_Prop1`,  `Parts_Prop2`, `Parts_Prop3`, `Parts_Prop4`, `Parts_Prop5`,`Parts_Prop6`, `Parts_Prop7`, `Parts_Prop8`, `Parts_Prop9`, `Parts_Prop10`,   " +
    " `Parts_Prop11`, `Parts_Prop12`, `Parts_Prop13`, `Parts_Prop14`, `Parts_Prop15`, `Parts_Prop16`, `Parts_Prop17`, `Parts_Prop18`, `Parts_Prop19`, `Parts_Prop20`,  " +
    " `FEATURE01`,  `FEATURE02`, `FEATURE03`, `FEATURE04`, `FEATURE05`,`FEATURE06`, `FEATURE07`, `FEATURE08`, `FEATURE09`, `FEATURE10`, " +
  	" `FEATURE11`, `FEATURE12`, `FEATURE13`, `FEATURE14`, `FEATURE15`, `FEATURE16`, `FEATURE17`, `FEATURE18`, `FEATURE19`, `FEATURE20`  " +
    " from auto_parts tbc LEFT JOIN auto_feature a on tbc.Parts_Class= a.Parts_Class where  tbc.Parts_Code= ?  OR tbc.Parts_Old_Code = ?  " ;
 
    yjDBService.exec({
      sql: SQL,
      parameters: [pcodeA, pcodeA ,pcodeB, pcodeB],
      rowsAsArray: false,
      success: function (result) {
        // console.log("领料", JSON.stringify(result));
        var dataAry = {
          "DiverS":  ((result[0].FEATURE_E  + result[0].SMT_Title    ==result[0].FEATURE_E + result[1].SMT_Title  ) ? ('0' ) :  '1'),
          "DiverP":  ((result[0].FEATURE_F  + result[0].Supply_Title ==result[0].FEATURE_F + result[1].Supply_Title  ) ? ('0' ) :  '1'),
          "Diver1":  ((result[0].FEATURE01  + result[0].Parts_Prop1  ==result[0].FEATURE01 + result[1].Parts_Prop1  ) ? ('0' ) :  '1'),
          "Diver2":  ((result[0].FEATURE02  + result[0].Parts_Prop2  ==result[0].FEATURE02 + result[1].Parts_Prop2  ) ? ('0' ) :  '1'),
          "Diver3":  ((result[0].FEATURE03  + result[0].Parts_Prop3  ==result[0].FEATURE03 + result[1].Parts_Prop3  ) ? ('0' ) :  '1'),
          "Diver4":  ((result[0].FEATURE04  + result[0].Parts_Prop4  ==result[0].FEATURE04 + result[1].Parts_Prop4  ) ? ('0' ) :  '1'),
          "Diver5":  ((result[0].FEATURE05  + result[0].Parts_Prop5  ==result[0].FEATURE05 + result[1].Parts_Prop5  ) ? ('0' ) :  '1'),
          "Diver6":  ((result[0].FEATURE06  + result[0].Parts_Prop6  ==result[0].FEATURE06 + result[1].Parts_Prop6  ) ? ('0' ) :  '1'),
          "Diver7":  ((result[0].FEATURE07  + result[0].Parts_Prop7  ==result[0].FEATURE07 + result[1].Parts_Prop7  ) ? ('0' ) :  '1'),
          "Diver8":  ((result[0].FEATURE08  + result[0].Parts_Prop8  ==result[0].FEATURE08 + result[1].Parts_Prop8  ) ? ('0' ) :  '1'),
          "Diver9":  ((result[0].FEATURE09  + result[0].Parts_Prop9  ==result[0].FEATURE09 + result[1].Parts_Prop9  ) ? ('0' ) :  '1'),
          "Diver10": ((result[0].FEATURE10  + result[0].Parts_Prop10 ==result[0].FEATURE10 + result[1].Parts_Prop10 ) ? ('0' ) :  '1'),
          "Diver11": ((result[0].FEATURE11  + result[0].Parts_Prop11 ==result[0].FEATURE11 + result[1].Parts_Prop11 ) ? ('0' ) :  '1'),
          "Diver12": ((result[0].FEATURE12  + result[0].Parts_Prop12 ==result[0].FEATURE12 + result[1].Parts_Prop12 ) ? ('0' ) :  '1'),
          "Diver13": ((result[0].FEATURE13  + result[0].Parts_Prop13 ==result[0].FEATURE13 + result[1].Parts_Prop13 ) ? ('0' ) :  '1'),
          "Diver14": ((result[0].FEATURE14  + result[0].Parts_Prop14 ==result[0].FEATURE14 + result[1].Parts_Prop14 ) ? ('0' ) :  '1'),
          "Diver15": ((result[0].FEATURE15  + result[0].Parts_Prop15 ==result[0].FEATURE15 + result[1].Parts_Prop15 ) ? ('0' ) :  '1'),
          "Diver16": ((result[0].FEATURE16  + result[0].Parts_Prop16 ==result[0].FEATURE16 + result[1].Parts_Prop16 ) ? ('0' ) :  '1'),
          "Diver17": ((result[0].FEATURE17  + result[0].Parts_Prop17 ==result[0].FEATURE17 + result[1].Parts_Prop17 ) ? ('0' ) :  '1'),
          "Diver18": ((result[0].FEATURE18  + result[0].Parts_Prop18 ==result[0].FEATURE18 + result[1].Parts_Prop18 ) ? ('0' ) :  '1'),
          "Diver19": ((result[0].FEATURE19  + result[0].Parts_Prop19 ==result[0].FEATURE19 + result[1].Parts_Prop19 ) ? ('0' ) :  '1'),
          "Diver20": ((result[0].FEATURE20  + result[0].Parts_Prop20 ==result[0].FEATURE20 + result[1].Parts_Prop20 ) ? ('0' ) :  '1'),
        };
        var testAry = {
          "Diver1": '1',
          "Diver2": '1',
          "Diver3": '0',
          "Diver4": '0',
          "Diver5": '0',
          "Diver6": '0',
          "Diver7": '0',
          "Diver8": '1',
          "Diver9": '1',
          "Diver10": '0',
          "Diver11": '0',
          "Diver12": '0',
          "Diver13": '0',
          "Diver14": '0',
          "Diver15": '0',
          "Diver16": '0',
          "Diver17": '0',
          "Diver18": '0',
          "Diver19": '0',
          "Diver20": '0',
        }
        sender.success(dataAry);
        console.log("九汇",JSON.stringify( result[0].Parts_Prop1));
      },
      error: sender.error
    });



  }
  function DiffProp(pcode) {
    let SQL =
      " select tbb.SMT_Title , tbb.Supply_Title , tbb.Parts_Class , tbb.Parts_Old_Code ,tbb.Parts_Code , tbb.Parts_Name , tbb.Parts_Old_Name , tbb.Model , tbb.Assembly, tbb.PartsUnitE ," +
      " tbb.PhaseStatus , tbb.UsePriority , tbb.Staff , tbb.Parts_Apply_Date  ,`Parts_Prop1`,  `Parts_Prop2`, `Parts_Prop3`, `Parts_Prop4`, `Parts_Prop5`,`Parts_Prop6`, `Parts_Prop7`, `Parts_Prop8`, `Parts_Prop9`, `Parts_Prop10`,  " +
      " `Parts_Prop11`, `Parts_Prop12`, `Parts_Prop13`, `Parts_Prop14`, `Parts_Prop15`, `Parts_Prop16`, `Parts_Prop17`, `Parts_Prop18`, `Parts_Prop19`, `Parts_Prop20` , " +
      " `FEATURE01`,  `FEATURE02`, `FEATURE03`, `FEATURE04`, `FEATURE05`,`FEATURE06`, `FEATURE07`, `FEATURE08`, " +
      " `FEATURE09`, `FEATURE10`, `FEATURE11`, `FEATURE12`, `FEATURE13`, `FEATURE14`, `FEATURE15`, `FEATURE16`, `FEATURE17`, `FEATURE18`, `FEATURE19`, `FEATURE20` " +
      " from auto_parts tbb LEFT JOIN auto_feature a on tbb.Parts_Class= a.Parts_Class " +
      "  where  tbb.Parts_Code=?  OR tbb.Parts_Old_Code=?  ";
    console.log(" 比对编码 " + pcode);
    yjDBService.exec({
      sql: SQL,
      parameters: [pcode, pcode],
      rowsAsArray: false,
      success: function (result) {
        //  console.log("领面",JSON.stringify(result));
        var obj = {
          "PartsClass": ((result[0].Parts_Class == null || result[0].Parts_Class == undefined) ? ('') : result[0].Parts_Class),
          "PartsCode": ((result[0].Parts_Code == null || result[0].Parts_Code == undefined) ? ('') : result[0].Parts_Code),
          "PartsOldCode": ((result[0].Parts_Old_Code == null || result[0].Parts_Old_Code == undefined) ? ('') : result[0].Parts_Old_Code),
          "PartsName": ((result[0].Parts_Name == null || result[0].Parts_Name == undefined) ? ('') : result[0].Parts_Name),
          "PartsOldName": ((result[0].Parts_Old_Name == null || result[0].Parts_Old_Name == undefined) ? ('') : result[0].Parts_Old_Name),
          "SMTTitle": ((result[0].SMT_Title == null || result[0].SMT_Title == undefined) ? ('') : result[0].SMT_Title),
          "SupplyTitle": ((result[0].Supply_Title == null || result[0].Supply_Title == undefined) ? ('') : result[0].Supply_Title),
          "NameS": ((result[0].SMT_Title == null || result[0].SMT_Title == undefined) ? ('') : result[0].SMT_Title),
          "NameP": ((result[0].Supply_Title == null || result[0].Supply_Title == undefined) ? ('') : result[0].Supply_Title),
          "Model": ((result[0].Model == null || result[0].Model == undefined) ? ('' + '\n') : result[0].Model + '\n'),
          "Assembly": ((result[0].Assembly == null || result[0].Assembly == undefined) ? ('' + '\n') : result[0].Assembly + '\n'),
          "UnitE": ((result[0].PartsUnitE == null || result[0].PartsUnitE == undefined) ? ('' + '\n') : result[0].PartsUnitE + '\n'),
          "Phase": ((result[0].PhaseStatus == null || result[0].PhaseStatus == undefined) ? ('' + '\n') : result[0].PhaseStatus + '\n'),
          "Prior": ((result[0].UsePriority == null || result[0].UsePriority == undefined) ? ('' + '\n') : result[0].UsePriority + '\n'),
          "NameM": ((result[0].Model == null || result[0].Model == undefined) ? ('' + '\n') : result[0].Model + '\n'),
          "NameA": ((result[0].Assembly == null || result[0].Assembly == undefined) ? ('' + '\n') : result[0].Assembly + '\n'),
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
          "ValueS": 'EF码：',
          "ValueP": '供应商：',
          "ValueM": '型号：',
          "ValueA": '组合件：',
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
        //  console.log("豪大总计",obj);
      },
      error: sender.error
    });
  }

}    