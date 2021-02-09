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
  console.log(" 二 ", RawName, " 逼 ", KeyName);

  if (RawName != undefined && RawName != '' && KeyName != undefined && KeyName != '') {
    let tmpList = [];
    if (RawName != "" && RawName != undefined) {
      tmpList = RawName.split('.');
      RawHalf = tmpList[0];
    }
    clsPool();

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
    var colLen = 3;
    var excelObj = obj[0].data;   //第二张Excel
    var data = [];
    for (var i = 0; i < excelObj.length; i++) {
      // var arr = [];
      var value = excelObj[i];
      for (var j = 0; j < colLen; j++) {
        // arr.push(value[j]);
        carData = JSON.stringify(value[j]);
        catlist.push(value[j]);
        if (i >= 2 && i <= 3) console.log("夜半：", JSON.stringify(value[j]));
      }
      // data.push(arr);
    }
  }
  function runTrain() {
    var flag = false ;
    console.log("1587撞聲：", (catlist.length));
    var colNum = 3;
    for (var i = 0; i < catlist.length; i++) {
      if (i > 3 && i < 12) {
        // console.log("---------------------桥本香 ", (catlist[i]));
      }
      var icnt = i % colNum;
      var irow = (catlist.length)/colNum;
      if (icnt == 0 && i >= colNum) {
        var Area = '1';
        var Level = '1';
        var Supp_Name = catlist[i];
        var Supp_CID = catlist[i + 1];
        var Supp_Note = catlist[i + 2];
        if (i/colNum > irow-2 ) {
          console.log("  老大很之  " + i ); 
          var message = '上传完成！';
          var retcode={"status":"OK","message":message };
          sender.success(retcode);
          console.log("丁敏君",retcode);
        }
        if (Level == undefined || Level == null || Level == '') {
          console.log("杜白特 ", icnt, "第N笔:", i);
        } else {
          if (i >  500) {
            console.log(" 中文  ", (Supp_Name), " 公里  ", (i), " ID ", (Supp_CID), " Level ", (Level));
          }
          if (Supp_Name == undefined || Supp_Name == null || Supp_Name == '' 
             || Supp_CID == undefined || Supp_CID == null || Supp_CID == ''   ) {
          } else {
            let SQLInsert = "INSERT INTO `auto_supplier_lab` ( `Area`,  `Level` , `Supp_Name` ,`Supp_CID` ,`Supp_Note`   ) VALUES " +
              " (?,?,?,?,?  )  ";
            yjDBService.exec({
              sql: SQLInsert,
              parameters: [Area, Level, Supp_Name,  Supp_CID, Supp_Note],
              success: function (result) {
              },
            });
          }
        }
      }
    }

  }
  function clsPool() {
    let SQLDelete = "delete from `auto_supplier_lab` where area = '1'  ";
    yjDBService.exec({
      sql: SQLDelete,
      parameters: [],
      success: function (result) {
      },
      error: sender.error
    });
  }

};