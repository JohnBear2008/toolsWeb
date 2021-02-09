module.exports = function (sender) {
  var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
  var yjDB = global.yjRequire("yujiang.Foil").yjDB;

  // var queryYear = sender.req.query.PartsYear;  
  // var queryRule = sender.req.query.PartsRule; 
  var queryBILLID = sender.req.query.BILLID;
  var queryCode = sender.req.query.PartsCode;
  var queryOldCode = sender.req.query.PartsOldCode;

  HandleParts(queryCode, queryOldCode);

  function HandleParts(param1, param2) {
    var paramREP = '';
    var SQL = '';
    let SQL1 = "select  `BILL_ID`, `Parts_Year`, `Parts_Rule`, `Parts_Class`, `Parts_Status` , `Pattern` , `Parts_Apply_Date`, `Parts_Limit_Date`, `Parts_Name`,`Parts_Chi`, `Model` , `Assembly` , `PartsUnitE` ," +
      " `PhaseStatus` , `UsePriority` ,`Parts_Code`, `PID`, `Supply_ID` , `SMT_ID` , `Parts_Old_Code` ," +
      " `Parts_Prop1`,  `Parts_Prop2`, `Parts_Prop3`, `Parts_Prop4`, `Parts_Prop5`,`Parts_Prop6`, `Parts_Prop7`, `Parts_Prop8`, `Parts_Prop9`, `Parts_Prop10`, " +
      " `Parts_Prop11`, `Parts_Prop12`, `Parts_Prop13`, `Parts_Prop14`, `Parts_Prop15`, `Parts_Prop16`, `Parts_Prop17`, `Parts_Prop18`, `Parts_Prop19`, `Parts_Prop20` ,`Soft_No` " +
      " from auto_rec_parts where  ( Parts_Code=?  ) ";

    let SQL2 = "select  `BILL_ID`, `Parts_Year`, `Parts_Rule`, `Parts_Class`, `Parts_Status` , `Pattern` ,`Parts_Apply_Date`, `Parts_Limit_Date`, `Parts_Name`, `Parts_Chi`, `Model` , `Assembly` , `PartsUnitE` , " +
      " `PhaseStatus` , `UsePriority` ,`Parts_Code`, `PID`,`Supply_ID` , `SMT_ID` , `Parts_Old_Code` ," +
      " `Parts_Prop1`,  `Parts_Prop2`, `Parts_Prop3`, `Parts_Prop4`, `Parts_Prop5`,`Parts_Prop6`, `Parts_Prop7`, `Parts_Prop8`, `Parts_Prop9`, `Parts_Prop10`, " +
      " `Parts_Prop11`, `Parts_Prop12`, `Parts_Prop13`, `Parts_Prop14`, `Parts_Prop15`, `Parts_Prop16`, `Parts_Prop17`, `Parts_Prop18`, `Parts_Prop19`, `Parts_Prop20` , `Soft_No`  " +
      " from auto_rec_parts where  (  Parts_Old_Code=?) ";

    if (param1 != null) {
      SQL = SQL1; paramREP = param1;
    } else {
      SQL = SQL2; paramREP = param2;
    }
    if (param1 == null && param2 == null) {
      console.log("傻了");
      var obj = {}
      sender.success(obj);
    }
    console.log(" 凡迪索SQL: ", SQL, " 泰来 ", param1, " 匹極 ", param2);
    yjDBService.exec({
      sql: SQL,
      parameters: [paramREP],
      rowsAsArray: false,
      success: function (result) {
        // console.log("傻了没",JSON.stringify(result));  
        console.log("傻了没", (result.length));
        if (result.length == 0) {
          console.log("傻比了");
          var obj = {}
          sender.success(obj);
        }
        var obj = {
          "parts_chi": result[0].Parts_Chi, //ERROR
          "Model": result[0].Model,
          "Assembly": result[0].Assembly,
          "PartsUnitE": result[0].PartsUnitE,
          "PhaseStatus": result[0].PhaseStatus,
          "UsePriority": result[0].UsePriority,
          "parts_name": result[0].Parts_Name,
          "bill_id": result[0].BILL_ID,
          "parts_year": result[0].Parts_Year,
          "parts_rule": result[0].Parts_Rule,
          "parts_class": result[0].Parts_Class,
          "supply_id": result[0].Supply_ID,
          "smt_id": result[0].SMT_ID,
          "PartsStatus": result[0].Parts_Status,
          "Pattern": result[0].Pattern,
          "parts_old_code": result[0].Parts_Old_Code,
          "parts_code": result[0].Parts_Code,
          "pid": result[0].PID,
          "Value0": result[0].Parts_Prop1,
          "Value1": result[0].Parts_Prop2,
          "Value2": result[0].Parts_Prop3,
          "Value3": result[0].Parts_Prop4,
          "Value4": result[0].Parts_Prop5,
          "Value5": result[0].Parts_Prop6,
          "Value6": result[0].Parts_Prop7,
          "Value7": result[0].Parts_Prop8,
          "Value8": result[0].Parts_Prop9,
          "Value9": result[0].Parts_Prop10,
          "Value10": result[0].Parts_Prop11,
          "Value11": result[0].Parts_Prop12,
          "Value12": result[0].Parts_Prop13,
          "Value13": result[0].Parts_Prop14,
          "Value14": result[0].Parts_Prop15,
          "Value15": result[0].Parts_Prop16,
          "Value16": result[0].Parts_Prop17,
          "Value17": result[0].Parts_Prop18,
          "Value18": result[0].Parts_Prop19,
          "Value19": result[0].Parts_Prop20,
          "SoftNo": result[0].Soft_No,
        };
        sender.success(obj);
        var dump = JSON.stringify(obj);
        if (dump.length > 100) {
          console.log("酷库小:" + dump.substring(0, 100));
        } else {
          console.log("酷库大:" + JSON.stringify(obj));
        }
      },
      error: sender.error
    });
  }


}    