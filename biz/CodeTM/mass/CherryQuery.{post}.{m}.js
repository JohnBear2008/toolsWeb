module.exports = function (sender) {
  var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
  var yjDB = global.yjRequire("yujiang.Foil").yjDB;

  var queryBillid = sender.req.query.BILLID;
  var queryClass = sender.req.query.PartsClass;
  var queryCode = sender.req.query.PartsCode;
  var arrange = sender.req.query.arrange;
  var weekbeg = sender.req.query.weekbeg;
  var weekend = sender.req.query.weekend;
  var filter = "   Parts_Status IN ('0', '3') ";
  var orderBy = '';
  var limit = '500';
  var capacity = '';
  let SQLExecute = "SELECT tbb.PID , tbb.DBID, tsu.Supp_Name ,`BILL_ID`, `Parts_Year`, `Parts_Rule`, `Parts_Class`, `Parts_Chi`,`Parts_Apply_Date`, `Parts_Limit_Date`, `Parts_Name`,LEFT(`Parts_Old_Name`, 20) as Parts_Old_Name, " +
  " `Parts_Status`, `Pattern`, `Staff`, `Property`, `Parts_Code`, `Supply_ID`,`Supply_Title` ,  `SMT_ID` , `SMT_Title` , CONCAT(`Supply_Title`,'/',`SMT_Title` ) as ComboTitle , "+
  "  CONCAT(`Staff`,case Parts_Status  when 0 then '/未审批' when 1 then '/已通过' when 2 then '/退回' when 3 then '修改中' end ) as ComboAgree , `Parts_Old_Code` , `Reason`  FROM `auto_rec_parts` tbb LEFT JOIN auto_supplier tsu on tsu.Supp_CID=tbb.Supply_ID " ;
  if (weekbeg != "" && weekbeg != "null" && weekbeg != undefined && weekbeg.length > 0) {
     console.log("开始日", weekbeg);
     capacity += " AND Parts_Apply_Date >= " + "'" + weekbeg + "' ";
  }
  if (weekend != "" && weekend != "null" && weekend != undefined && weekend.length > 0) {
      console.log("结束日", weekend);
      capacity += " AND Parts_Apply_Date <= " + "'" + weekend + "' ";
  }
  if (queryBillid != "" && queryBillid != "null" && queryBillid != undefined && queryBillid.length > 0) {
      console.log("文号 ", queryBillid);
      capacity += " AND BILL_ID  = " + "'" + queryBillid + "' ";
  }
  if (queryClass != "" && queryClass != "null" && queryClass != undefined && queryClass.length > 0) {
      console.log("类别 ", queryClass);
      capacity += " AND Parts_Class  = " + "'" + queryClass + "' ";
  }
 
  if (filter != "" && filter != undefined) {
      SQLExecute = SQLExecute + " WHERE " + filter;
  }
  if (capacity != "" && capacity != undefined) {
    SQLExecute = SQLExecute + capacity;
  }
  if (orderBy != "" && orderBy != undefined) {
      SQLExecute = SQLExecute + " ORDER BY " + orderBy;
  }
  if (limit != "" && limit != undefined) {
      SQLExecute = SQLExecute + " LIMIT " + limit;
  }

  if (arrange == 'search') {
      QueryParts(queryBillid , queryClass);
  } else {
      PopupParts(queryClass, queryBillid, queryCode);
  }

  function QueryParts(Billid , pclass) {
    let dataArr = [];
    // console.log(" 图模 :"+SQLExecute); 
    yjDBService.exec({
      sql: SQLExecute,
      parameters: [],
      rowsAsArray: true,
      success: function (result) {
        var data = yjDB.dataSet2ObjectList(result.meta, result.rows);
        for (var i = 0; i < data.length; i++) {
          var obj = {
            "PID": data[i].PID,
            "PartsClass": ((data[i].Parts_Class == null || data[i].Parts_Class == undefined) ? ('') : data[i].Parts_Class),
            "PartsChi": ((data[i].Parts_Chi == null || data[i].Parts_Chi == undefined) ? ('') : data[i].Parts_Chi),
            "PartsCode": ((data[i].Parts_Code == null || data[i].Parts_Code == undefined) ? ('') : data[i].Parts_Code),
            "PartsOldCode": ((data[i].Parts_Old_Code == null || data[i].Parts_Old_Code == undefined) ? ('') : data[i].Parts_Old_Code),
            "PartsName": ((data[i].Parts_Name == null || data[i].Parts_Name == undefined) ? ('') : data[i].Parts_Name),
            "PartsOldName": ((data[i].Parts_Old_Name == null || data[i].Parts_Old_Name == undefined) ? ('') : data[i].Parts_Old_Name),
            "SMTTitle": ((data[i].SMT_Title == null || data[i].SMT_Title == undefined) ? ('') : data[i].SMT_Title),
            "SupplyTitle": ((data[i].Supply_Title == null || data[i].Supply_Title == undefined) ? ('') : data[i].Supply_Title),
            "BILLID": ((data[i].BILL_ID == null || data[i].BILL_ID == undefined) ? ('') : data[i].BILL_ID),
            "Staff": ((data[i].Staff == null || data[i].Staff == undefined) ? ('') : data[i].Staff),
            "PartsApplyDate": ((data[i].Parts_Apply_Date == null || data[i].Parts_Apply_Date == undefined) ? ('') : data[i].Parts_Apply_Date),
            "ComboTitle": ((data[i].ComboTitle == null || data[i].ComboTitle == undefined) ? ('') : data[i].ComboTitle),
            "ComboAgree": ((data[i].ComboAgree == null || data[i].ComboAgree == undefined) ? ('') : data[i].ComboAgree),
            "PartsStatus": ((data[i].Parts_Status == null || data[i].Parts_Status == undefined) ? ('') : data[i].Parts_Status),
            "Pattern": ((data[i].Pattern == null || data[i].Pattern == undefined) ? ('') : data[i].Pattern),
            "Reason": ((data[i].Reason == null || data[i].Reason == undefined) ? ('') : data[i].Reason),
          };
          dataArr.push(obj);
        }
        sender.success(dataArr);
        //  console.log("豪小总计",JSON.stringify(dataArr));
      },
      error: sender.error
    });
  }

  function PopupParts(pclass, billid, pcode) {
    let SQL2 =
      " select tbb.Supply_Title , tbb.SMT_Title , tbb.Model , tbb.Assembly , tbb.PartsUnitE , tbb.PhaseStatus , tbb.UsePriority , tbb.Staff , tbb.Parts_Apply_Date ,`Parts_Prop1`,  `Parts_Prop2`, `Parts_Prop3`, `Parts_Prop4`, `Parts_Prop5`,`Parts_Prop6`, `Parts_Prop7`, `Parts_Prop8`, `Parts_Prop9`, `Parts_Prop10`,  " +
      "       `Parts_Prop11`, `Parts_Prop12`, `Parts_Prop13`, `Parts_Prop14`, `Parts_Prop15`, `Parts_Prop16`, `Parts_Prop17`, `Parts_Prop18`, `Parts_Prop19`, `Parts_Prop20` , " +
      "       `FEATURE01`,  `FEATURE02`, `FEATURE03`, `FEATURE04`, `FEATURE05`,`FEATURE06`, `FEATURE07`, `FEATURE08`, " +
      " 	   `FEATURE09`, `FEATURE10`, `FEATURE11`, `FEATURE12`, `FEATURE13`, `FEATURE14`, `FEATURE15`, `FEATURE16`, `FEATURE17`, `FEATURE18`, `FEATURE19`, `FEATURE20` " +
      " from auto_rec_parts tbb LEFT JOIN auto_feature a on tbb.Parts_Class= a.Parts_Class " +
      "       where tbb.Parts_Class=? and tbb.BILL_ID=?   ";//and tbb.Parts_Code=?
    //  console.log(" SQL:"+SQL);   
    console.log(" 金枪鱼 " + pcode + "审批号<" + pclass + ">表格<" + billid + ">");
    yjDBService.exec({
      sql: SQL2,
      parameters: [pclass, billid,],
      rowsAsArray: false,
      success: function (result) {
        console.log("分合 ", JSON.stringify(result));
        var obj = {
          "pclass": pclass,
          "SupplyTitle": result[0].Supply_Title,
          "SMTTitle": result[0].SMT_Title,
          "Reason": ((result[0].Reason == null || result[0].Reason == undefined) ? ('') : result[0].Reason),
          "NameM": ((result[0].Model == null || result[0].Model == undefined) ? ('' + '\n') : result[0].Model + '\n'),
          "NameA": ((result[0].Assembly == null || result[0].Assembly == undefined) ? ('' + '\n') : result[0].Assembly + '\n'),
          "Model": ((result[0].Model == null         || result[0].Model == undefined       ) ? ('' + '\n') : result[0].Model + '\n'),
          "Assembly": ((result[0].Assembly == null      || result[0].Assembly == undefined    ) ? ('' + '\n') : result[0].Assembly + '\n'),
          "UnitE": ((result[0].PartsUnitE == null    || result[0].PartsUnitE == undefined  ) ? ('' + '\n') : result[0].PartsUnitE + '\n'),
          "Phase": ((result[0].PhaseStatus == null   || result[0].PhaseStatus == undefined ) ? ('' + '\n') : result[0].PhaseStatus + '\n'),
          "Prior": ((result[0].UsePriority == null    || result[0].UsePriority == undefined  ) ? ('' + '\n') : result[0].UsePriority + '\n'),
          "Staff": ((result[0].Staff == null || result[0].Staff == undefined ) ? ('' + '\n') : result[0].Staff + '\n'),
          "ApplyDate": ((result[0].Parts_Apply_Date == null    || result[0].Parts_Apply_Date == undefined  ) ? ('' + '\n') : new Date(result[0].Parts_Apply_Date).Format("yyyy-MM-dd") + '\n'),
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
          "Value1":  (result[0].FEATURE01 == undefined || result[0].FEATURE01 == '' || result[0].FEATURE01 == 'NA' || result[0].FEATURE01 == '缺省' ? ('') : result[0].FEATURE01 + ' : '),
          "Value2":  (result[0].FEATURE02 == undefined || result[0].FEATURE02 == '' || result[0].FEATURE02 == 'NA' || result[0].FEATURE02 == '缺省' ? ('') : result[0].FEATURE02 + ' : '),
          "Value3":  (result[0].FEATURE03 == undefined || result[0].FEATURE03 == '' || result[0].FEATURE03 == 'NA' || result[0].FEATURE03 == '缺省' ? ('') : result[0].FEATURE03 + ' : '),
          "Value4":  (result[0].FEATURE04 == undefined || result[0].FEATURE04 == '' || result[0].FEATURE04 == 'NA' || result[0].FEATURE04 == '缺省' ? ('') : result[0].FEATURE04 + ' : '),
          "Value5":  (result[0].FEATURE05 == undefined || result[0].FEATURE05 == '' || result[0].FEATURE05 == 'NA' || result[0].FEATURE05 == '缺省' ? ('') : result[0].FEATURE05 + ' : '),
          "Value6":  (result[0].FEATURE06 == undefined || result[0].FEATURE06 == '' || result[0].FEATURE06 == 'NA' || result[0].FEATURE06 == '缺省' ? ('') : result[0].FEATURE06 + ' : '),
          "Value7":  (result[0].FEATURE07 == undefined || result[0].FEATURE07 == '' || result[0].FEATURE07 == 'NA' || result[0].FEATURE07 == '缺省' ? ('') : result[0].FEATURE07 + ' : '),
          "Value8":  (result[0].FEATURE08 == undefined || result[0].FEATURE08 == '' || result[0].FEATURE08 == 'NA' || result[0].FEATURE08 == '缺省' ? ('') : result[0].FEATURE08 + ' : '),
          "Value9":  (result[0].FEATURE09 == undefined || result[0].FEATURE09 == '' || result[0].FEATURE09 == 'NA' || result[0].FEATURE09 == '缺省' ? ('') : result[0].FEATURE09 + ' : '),
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

}    