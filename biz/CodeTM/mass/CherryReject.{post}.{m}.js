module.exports = function (sender) {
  var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
  var yjDB = global.yjRequire("yujiang.Foil").yjDB;
  var async = require("async");

  let now = new Date();
  var PartsApplyDate = now.Format("yyyy-MM-dd");
  var PartsName = '';
  var PartsStatus = sender.req.query.PartsStatus;
  var Status = '';
  var PartsCode = 'B1-19A-12345';
  var PartsrowCode = sender.req.query.PartsCode;
  var PartsOldCode = sender.req.query.PartsOldCode;
  var PartsYear = sender.req.query.PartsYear;
  var PartsYearBF = "B";
  var PartsRuleBF = "A";
  var PartsRule = sender.req.query.PartsRule;
  var PartsClass = sender.req.query.PartsClass;
  var BILLID = sender.req.query.BILLID;
  var Auditor = sender.req.query.Auditor;
  var Source = 'A'; 

  console.log('rejectPcode 类 ' + PartsClass + ' 文 ' + BILLID);
  var comboClass = PartsClass + PartsRuleBF;

  runReject(BILLID);

  function runReject(xBILLID) {
    var PartsYear = sender.req.query.PartsYear;
    var PartsRule = sender.req.query.PartsRule; 

    console.log('拒绝 ' , xBILLID);

    let SQL = "Update `auto_rec_parts` set  Parts_status ='2' , Auditor = ? where   BILL_ID=?  ";
    console.log("SQL:" + SQL);

    yjDBService.exec({
      sql: SQL,
      parameters: [  Auditor , xBILLID ],
      rowsAsArray: true,
      success: function (result) {
        //            var data=yjDB.dataSet2ObjectList(result.meta,result.rows);
        var retcode = { "status": "OK", "message": "审批完成" };
        sender.success(retcode);
        console.log("不可", result)
      },
      //        success :sender.success,
      error: sender.error
    });
  }
}
