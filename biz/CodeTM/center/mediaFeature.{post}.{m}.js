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
  console.log(" 三六 ", RawName, " 啡 ", KeyName);

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
    var colNum = 29;
    var excelObj = obj[0].data;   //1是第二张Excel
    var data = [];
    for (var i = 0; i < excelObj.length; i++) {
      // var arr = [];
      var value = excelObj[i];
      //会大小不一  ，表头29
      for (var j = 0; j < colNum; j++) {
        // arr.push(value[j]);
        carData = JSON.stringify(value[j]);
        catlist.push(value[j]);
        // if (i >= 2 && i <= 3) console.log("舔三次：", JSON.stringify(value[j]));
      }
      // data.push(arr);
    }
  }
  function runTrain() {
    console.log("4089洗三次：", (catlist.length));
    var colNum = 29;
    for (var i = 0; i < catlist.length; i++) {
      if (i > 58 && i < 88) {
        console.log("佐山彩 ", (catlist[i]));
      }
      var icnt = i % colNum;
      if (icnt == 0 && i >= colNum) {
        var Parts_Rule = 'A';
        var Parts_Year = '2020';
        var Parts_Chi = catlist[i];
        var Parts_Class = catlist[i + 1];
        var Unit_C = catlist[i + 2];
        var Unit_E = catlist[i + 3];
        var Design_Name = catlist[i + 4];
        var Default_Name = catlist[i + 4];
        var Model = catlist[i + 5];
        var Design_Spec = catlist[i + 6];
        var Default_Spec = catlist[i + 6];
        var FEATURE_E = catlist[i + 7];
        var FEATURE_F = catlist[i + 8];
        var FEATURE01 = catlist[i + 9];
        var FEATURE02 = catlist[i + 10];
        var FEATURE03 = catlist[i + 11];
        var FEATURE04 = catlist[i + 12];
        var FEATURE05 = catlist[i + 13];
        var FEATURE06 = catlist[i + 14];
        var FEATURE07 = catlist[i + 15];
        var FEATURE08 = catlist[i + 16];
        var FEATURE09 = catlist[i + 17];
        var FEATURE10 = catlist[i + 18];
        var FEATURE11 = catlist[i + 19];
        var FEATURE12 = catlist[i + 20];
        var FEATURE13 = catlist[i + 21];
        var FEATURE14 = catlist[i + 22];
        var FEATURE15 = catlist[i + 23];
        var FEATURE16 = catlist[i + 24];
        var FEATURE17 = catlist[i + 25];
        var FEATURE18 = catlist[i + 26];
        var FEATURE19 = catlist[i + 27];
        var FEATURE20 = catlist[i + 28];
        if (i > 58 && i < 200) {
          console.log(" 中文  ", (Parts_Chi ));
          console.log(" 富堅  ", (Parts_Class ));
          console.log(" 属E  ", (FEATURE_E ));
          console.log(" 属04  ", (FEATURE04 ));
        }

        if (Parts_Chi == undefined || Parts_Chi == null || Parts_Chi == '') {
          console.log("杜绿特 ", icnt, "第N笔:", i, " 杨 ", Parts_Chi);
        } else {
          var irow = (catlist.length)/colNum;
          let SQLInsert = "INSERT INTO `auto_feature_lab` (  `Parts_Rule`  ,`Parts_Year`  ,`Parts_Chi` ,`Parts_Class`  ,`Unit_C` ,`Unit_E` ,`Design_Name` ,`Default_Name` ,`Design_Spec` ,`Default_Spec`  ,`Model`    ,`FEATURE_E`  ,`FEATURE_F`  ,`FEATURE01`  ,`FEATURE02`  ,`FEATURE03`  ,`FEATURE04`  ,`FEATURE05`  ,`FEATURE06`  ,`FEATURE07`  ,`FEATURE08`  ,`FEATURE09`  ,`FEATURE10`  ,`FEATURE11`  ,`FEATURE12`  ,`FEATURE13`  ,`FEATURE14`  ,`FEATURE15`  ,`FEATURE16`  ,`FEATURE17`  ,`FEATURE18`  ,`FEATURE19`  ,`FEATURE20`   ) VALUES " +
            " (?,?,?,?,?,?,?,?,?,?,   ?,?,?,?,?,?,?,?,?,?,  ?,?,?,?,?,?,?,?,?,?, ?,?,? )  ";
          yjDBService.exec({
            sql: SQLInsert,
            parameters: [Parts_Rule, Parts_Year, Parts_Chi, Parts_Class, Unit_C, Unit_E, Design_Name, Default_Name,
              Design_Spec, Default_Spec, Model, FEATURE_E, FEATURE_F, FEATURE01, FEATURE02, FEATURE03, FEATURE04, FEATURE05, FEATURE06, FEATURE07, FEATURE08, FEATURE09, FEATURE10,
              FEATURE11, FEATURE12, FEATURE13, FEATURE14, FEATURE15, FEATURE16, FEATURE17, FEATURE18, FEATURE19, FEATURE20],
            success: function (result) {
            },
          });

          if (i/colNum > irow-2 ) {
            console.log("  老大很之  " + i ); 
            var message = '上传完成！';
            var retcode={"status":"OK","message":message };
            sender.success(retcode);
            console.log("丁敏君",retcode);
          }
        }

      }


    }

  }
  function clsPool() {
    let SQLDelete = "delete from `auto_feature_lab`   ";
    yjDBService.exec({
      sql: SQLDelete,
      parameters: [],
      success: function (result) {
      },
      error: sender.error
    });
  }

};