require("../../../client/report/xlsx.core.min.js");
require("../../../client/report/xlsx.full.min.js");
require("../../../client/report/FileSaver.js");
module.exports = function (sender) {
  var schedule = require("node-schedule");
  const https = require("https");
  var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
  var yjDB = global.yjRequire("yujiang.Foil").yjDB;
  var RawName = sender.req.query.RawName;
  var qryClassRule = 'A1A';
  var RawHalf = '';
  var KeyName = sender.req.query.KeyName;
  var carData;
  let catlist = [];
  console.log(" 三 ", RawName, " 五 ", KeyName);

  if (RawName != undefined && RawName != '' && KeyName != undefined && KeyName != '') {
    let tmpList = [];
    if (RawName != "" && RawName != undefined) {
      tmpList = RawName.split('.');
      RawHalf = tmpList[0];
    }
    clsPool();
    clsSwin();
    function timer(time) {
      setTimeout(function () {
        handle_ExHole(KeyName);
      }, time);
    }
    timer(2000);

    function timer2(time2) {
      setTimeout(function () {
        runTrain();
      }, time2);
    }
    timer2(2000);
  }
  function handle_ExHole(KeyName) {
    var xlsx = require('node-xlsx');
    var fs = require('fs');
    //读取文件内容
    var obj = xlsx.parse('./uploaded/jessi/' + KeyName);
    var colNum = 4;
    var excelObj = obj[0].data;   //第二张Excel
    var data = [];
    for (var i = 0; i < excelObj.length; i++) {
      // var arr = [];
      var value = excelObj[i];
      for (var j = 0; j < colNum; j++) {
        // arr.push(value[j]);
        carData = JSON.stringify(value[j]);
        catlist.push(value[j]);
        if (i >= 2 && i <= 3) console.log("推三次：", JSON.stringify(value[j]));
      }
      // data.push(arr);
    }
  }
  function runTrain() {
    console.log("颜射：", (catlist.length));
    var colNum = 4;
    for (var i = 0; i < catlist.length; i++) {
      if (i > 4 && i < 12) {
        console.log("---------------------村上梨 ", (catlist[i]));
      }
      var icnt = i % colNum;
      var irow = (catlist.length)/colNum;
      if (icnt == 0 && i >= colNum) {
        var Area = '2';
        var SMT_Name = catlist[i];
        var Level = catlist[i + 1];
        var SMT_CID = catlist[i + 2];
        var SMT_Note = catlist[i + 3];
        if (i/colNum > irow-2 ) {
          console.log("  老大很之  " + i ); 
          var message = '上传完成！';
          var retcode={"status":"OK","message":message };
          sender.success(retcode);
          console.log("丁敏君",retcode);
        }
        if (Level == undefined || Level == null || Level == '') {
          console.log("杜黄特 ", icnt, "第N笔:", i);
        } else {
          if (i > 4 && i < 120) {
            console.log(" 中文  ", (SMT_Name), " 类别  ", (Level), " ID ", (SMT_CID), " Level ", (Level));
          }
          if (SMT_CID == undefined || SMT_CID == null || SMT_CID == ''  || SMT_CID =='EF代码' || SMT_Name =='属性E' ) {

          } else {
            let SQLInsert = "INSERT INTO `auto_smtdip_lab` ( `Area`, `SMT_Name`  ,`Level`  ,`SMT_CID` ,`SMT_Note`   ) VALUES " +
              " (?,?,?,?,?  )  ";
            yjDBService.exec({
              sql: SQLInsert,
              parameters: [Area, SMT_Name, Level, SMT_CID, SMT_Note],
              success: function (result) {
              },
            });
             
            let SQLInsSupp = "INSERT INTO `auto_supplier_lab` ( `Area`, `Supp_Name`  ,`Level`  ,`Supp_CID` ,`Supp_Note`   ) VALUES " +
              " (?,?,?,?,?  )  ";
            yjDBService.exec({
              sql: SQLInsSupp,
              parameters: [ Area, SMT_Name, Level, SMT_CID, SMT_Note],
              success: function (result) {
              },
            });
          }

        }

      }


    }

  }
  function clsPool() {
    let SQLDelete = "delete from `auto_smtdip_lab` where area = '2'  ";
    yjDBService.exec({
      sql: SQLDelete,
      parameters: [],
      success: function (result) {
      },
      error: sender.error
    });
  }
  function clsSwin() {
    let SQLDelete = "delete from `auto_supplier_lab` where area = '2'  ";
    yjDBService.exec({
      sql: SQLDelete,
      parameters: [],
      success: function (result) {
      },
      error: sender.error
    });
  }

};