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
  console.log(" 彝族 ", RawName, " 成都 ", KeyName);

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
    timer(1000);

    function timer2(time2) {
      setTimeout(function () {
        runTrain();
      }, time2);
    }
    timer2(1000);
  }
  function handle_ExHole(KeyName) {
    var xlsx = require('node-xlsx');
    var fs = require('fs');
    //读取文件内容
    var obj = xlsx.parse('./uploaded/jessi/' + KeyName);
    var excelObj = obj[0].data;
    // console.log("砍", JSON.stringify(excelObj));
    var colLen = 36;
    var data = [];
    console.log(" 取会 ！", excelObj.length);
    // for (var i in excelObj) {
    for (var i = 0; i < excelObj.length; i++) {
      // var arr = [];
      var value = excelObj[i];
      //会大小不一  ，表头36  表身35 
      for (var j = 0; j < colLen; j++) {
        // arr.push(value[j]);
        carData = JSON.stringify(value[j]);
        catlist.push(value[j]);
        // if (i >= 2 && i <= 3) console.log("吸三次：", JSON.stringify(value[j]));
      }
      // data.push(arr);
    }
  }
  function runTrain() {
    var colNum = 36;
    console.log("12+20+4喷三次：", (catlist.length));//731736
    var upper = 800000;   //729358
    var lower = 0;
    for (var i = lower; i < catlist.length && (i < upper); i++) {
      if (i > 72 && i < 108) {
        if (catlist[i] != undefined) {
          // catlist[i] =catlist[i].replace(new RegExp("\"","gm"),"");
        }
        console.log("施贤", (catlist[i]), "~~ ", i);
      }
      var icnt = i % colNum;
      if (icnt == 0 && i >= colNum * 2) {
        // if (icnt == 0  ) {
        var Parts_Old_Code = catlist[i];
        var Parts_Old_Name = catlist[i + 1];
        var PID = '1';
        var Parts_Name = '';
        var Parts_Year = '2019';
        var Parts_Rule = 'A';

        var Parts_Apply_Date = '2020-08-11';
        var Parts_Limit_Date = '2099-08-11';
        var Parts_Status = '1';
        var Source = 'T';
        var Staff = 'Admin';
        var Supply_ID = '00';
        var NOUSE_BUY = catlist[i + 2];
        var Parts_Chi = catlist[i + 3];
        var NOUSE_STOCK = catlist[i + 4];
        var NOUSE_LIST = catlist[i + 5];
        var Supply_Title = catlist[i + 6];
        var SMT_Title = catlist[i + 7];
        var NOUSE_F = catlist[i + 8];
        var SMT_ID = catlist[i + 9];
        var NOUSE_PS = catlist[i + 10];
        var Model = catlist[i + 11];
        var Parts_Prop1 = catlist[i + 12];
        var Parts_Prop2 = catlist[i + 13];
        var Parts_Prop3 = catlist[i + 14];
        var Parts_Prop4 = catlist[i + 15];
        var Parts_Prop5 = catlist[i + 16];
        var Parts_Prop6 = catlist[i + 17];
        var Parts_Prop7 = catlist[i + 18];
        var Parts_Prop8 = catlist[i + 19];
        var Parts_Prop9 = catlist[i + 20];
        var Parts_Prop10 = catlist[i + 21];
        var Parts_Prop11 = catlist[i + 22];
        var Parts_Prop12 = catlist[i + 23];
        var Parts_Prop13 = catlist[i + 24];
        var Parts_Prop14 = catlist[i + 25];
        var Parts_Prop15 = catlist[i + 26];
        var Parts_Prop16 = catlist[i + 27];
        var Parts_Prop17 = catlist[i + 28];
        var Parts_Prop18 = catlist[i + 29];
        var Parts_Prop19 = catlist[i + 30];
        var Parts_Prop20 = catlist[i + 31];
        var Parts_Prop21 = catlist[i + 32];
        var Soft_No = catlist[i + 33];
        var Parts_Code = catlist[i + 34]; //42-2
        var Parts_Class = 'A9';
        var NOUSE_Handle = catlist[i + 35];
        
        if (i < 200) {
          console.log("          0舊编码  " + Parts_Old_Code);
          console.log("          12属A  " + Parts_Prop1);
          console.log("          34编码  " + Parts_Code);
          console.log("          35处理  " + NOUSE_Handle);
        }
        if (Parts_Code == '7-23处理' || Parts_Code == '標準') {
          console.log("库 ", Parts_Old_Code, "第N笔:", i, "谁", Parts_Code);
        }
        if (Parts_Code == undefined || Parts_Code == null || Parts_Code == '') {
          console.log("杜蓝 ", icnt, "第N笔:", i, "谁", Parts_Code);
        } else {
          PID = Parts_Code.substring(8, 11);
          Parts_Class = Parts_Code.substring(1, 3);
          qryEmpty(i, catlist.length , Parts_Old_Code, Parts_Old_Name, PID, Parts_Name, Parts_Year, Parts_Rule, Parts_Class, Parts_Apply_Date, Parts_Limit_Date, Parts_Status, Source, Staff, Supply_ID, Parts_Chi, Supply_Title, SMT_Title, SMT_ID, Model, Parts_Prop1, Parts_Prop2, Parts_Prop3, Parts_Prop4, Parts_Prop5, Parts_Prop6, Parts_Prop7, Parts_Prop8, Parts_Prop9, Parts_Prop10, Parts_Prop11, Parts_Prop12, Parts_Prop13, Parts_Prop14, Parts_Prop15, Parts_Prop16, Parts_Prop17, Parts_Prop18, Parts_Prop19, Parts_Prop20, Soft_No, Parts_Code);
        }

      }
    }
    
  }
  //插入SuppCID 到 Supply_ID栏位
  function qryEmpty(nowi, totallen , Parts_Old_Code, Parts_Old_Name, PID, Parts_Name, Parts_Year, Parts_Rule, Parts_Class, Parts_Apply_Date, Parts_Limit_Date, Parts_Status, Source, Staff, Supply_ID, Parts_Chi, Supply_Title, SMT_Title, SMT_ID, Model, Parts_Prop1, Parts_Prop2, Parts_Prop3, Parts_Prop4, Parts_Prop5, Parts_Prop6, Parts_Prop7, Parts_Prop8, Parts_Prop9, Parts_Prop10, Parts_Prop11, Parts_Prop12, Parts_Prop13, Parts_Prop14, Parts_Prop15, Parts_Prop16, Parts_Prop17, Parts_Prop18, Parts_Prop19, Parts_Prop20, Soft_No, Parts_Code) {
    var colNum = 36;
    var irow = totallen/colNum;
   if(nowi>728000 && (nowi % colNum)==0 ){
     console.log(  "  大悝：", nowi ,"吞 ", irow);
   }
    var sql_AreaE = " select Supp_CID from auto_supplier tba where ( Area='1' OR Area='2'  )  and Supp_Name= ? ";
    var EndFlag = '0' ;
    Supply_Title = (Supply_Title == null || Supply_Title == undefined) ? ('宁波弘讯') : Supply_Title;
    yjDBService.exec({
      sql: sql_AreaE,
      parameters: [Supply_Title],
      rowsAsArray: true,
      success: function (r) {
        var datas = []
        var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
        var SuppCID = '000';
        for (var i = 0; i < data.length; i++) {
          SuppCID = data[i].Supp_CID;
          // console.log(  "  大眼悝：", SuppCID);
        }
        if ((nowi/colNum) > irow-2 ) {
          console.log("  老大很之  " + nowi ); 
          var message = '上传完成！';
          EndFlag = '999' ;
          var retcode={"status":"OK","message":message };
          sender.success(retcode);
          console.log("丁敏君",retcode);
        }
        let SQLInsert = "INSERT INTO `eng_imp_lab` ( `Parts_Old_Code`, `Parts_Old_Name`, `PID`, `Parts_Name`, `Parts_Year`, `Parts_Rule`, `Parts_Class`, `Parts_Apply_Date`, `Parts_Limit_Date`, `Parts_Status`, `Source`, `Staff`, `Supply_ID`,  `Parts_Chi`, `Supply_Title`, `SMT_Title`,  `SMT_ID`, `Model`,  `Parts_Prop1`, `Parts_Prop2`, `Parts_Prop3`, `Parts_Prop4`, `Parts_Prop5`, `Parts_Prop6`, `Parts_Prop7`, `Parts_Prop8`, `Parts_Prop9`, `Parts_Prop10`,"+
        " `Parts_Prop11`, `Parts_Prop12`, `Parts_Prop13`, `Parts_Prop14`, `Parts_Prop15`, `Parts_Prop16`, `Parts_Prop17`, `Parts_Prop18`, `Parts_Prop19`, `Parts_Prop20`, `Soft_No`, `Parts_Code` , `EndFlag`) VALUES " +
          " (?,?,?,?,?,  ?,?,?,?,?, ?,?,?,?,?, ?,?,?,?,?, ?,?,?,?,?, ?,?,?,?,?,  ?,?,?,?,?, ?,?,?,?,?, ? )  ";
        yjDBService.exec({
          sql: SQLInsert,
          parameters: [Parts_Old_Code, Parts_Old_Name, PID, Parts_Name, Parts_Year, Parts_Rule, Parts_Class, Parts_Apply_Date, Parts_Limit_Date, Parts_Status, Source, Staff, SuppCID, Parts_Chi, Supply_Title, SMT_Title, SMT_ID, Model, Parts_Prop1, Parts_Prop2, Parts_Prop3, Parts_Prop4, Parts_Prop5, Parts_Prop6, Parts_Prop7, Parts_Prop8, Parts_Prop9, Parts_Prop10, Parts_Prop11, Parts_Prop12, Parts_Prop13, Parts_Prop14, Parts_Prop15, Parts_Prop16, Parts_Prop17, Parts_Prop18, Parts_Prop19, Parts_Prop20, Soft_No, Parts_Code ,EndFlag],
          success: function (result) {
          },
        });
      },
      error: sender.error
    })
  }
  function clsPool() {
    // 类别代码 	属性键	属性值	父标识号	标识号
    let SQLDelete = "delete from `eng_imp_lab` where Parts_Class NOT IN ( 'R1','R2','R3','R4' ,'S1')  ";
    console.log("SQLDelete:" + SQLDelete);
    yjDBService.exec({
      sql: SQLDelete,
      parameters: [],
      success: function (result) {
      },
      error: sender.error
    });
  }
};
  // `Parts_Code`  ,
    // `PID`  ,
    // `Parts_Old_Code`  ,
    // `Parts_Name`  ,
    // `Parts_Old_Name`  ,
    // `Parts_Year`  ,
    // `Parts_Rule` ,
    // `Parts_Class`  ,
    // `Parts_Apply_Date`  ,
    // `Parts_Limit_Date`  ,
    // `Parts_Status`  ,
    // `Source`  ,
    // `Staff`  ,
    // `Model`                              
    // `Parts_Chi`  , 
    // `Parts_Prop1`  ,
    // `Parts_Prop2`  ,
    // `Parts_Prop3`  ,
    // `Parts_Prop4`  ,
    // `Parts_Prop5`  ,
    // `Parts_Prop6`  ,
    // `Parts_Prop7`  ,
    // `Parts_Prop8`  ,
    // `Parts_Prop9`  ,
    // `Parts_Prop10`  ,
    // `Parts_Prop11`  ,
    // `Parts_Prop12`  ,
    // `Parts_Prop13`  ,
    // `Parts_Prop14`  ,
    // `Parts_Prop15`  ,
    // `Parts_Prop16`  ,
    // `Parts_Prop17`  ,
    // `Parts_Prop18`  ,
    // `Parts_Prop19`  ,
    // `Parts_Prop20`  ,
    // `Soft_No`  ,
    // `Supply_ID`  ,
    // `Supply_Title`   ,
    // `SMT_ID` ,
    // `SMT_Title` ,