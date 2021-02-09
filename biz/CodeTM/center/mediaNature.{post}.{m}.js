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
  console.log(" 啊依 ", RawName, " 金 ", KeyName);
  
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
    // var obj = xlsx.parse('./uploaded/jessi/aJAUCpiRWQwsZtvj9bTk0d2b.xlsx');
    // var obj = xlsx.parse('./uploaded/jessi/6gjgG2IGg5Y2ekPafLGkuiAQ.xlsx');
    var excelObj = obj[0].data;
    // console.log("砍", excelObj);
    var data = [];
    for (var i in excelObj) {
      var arr = [];
      var value = excelObj[i];
      for (var j in value) {
        arr.push(value[j]);
        carData = JSON.stringify(value[j]);
        catlist.push(value[j]);
        if (i > 50 && i < 60) console.log("交三次：", JSON.stringify(value[j]));
      }
      data.push(arr);
    }


  }
  function runTrain() {
 //9557
 var colNum = 5;
 var irow = catlist.length / colNum;  //9558
 console.log("47790吹三次：", (catlist.length),"> 9558 欧尼：", (irow));
    for (var i = 0; i < catlist.length; i++) {
      if (i > 50 && i < 100) {
        if (catlist[i] != undefined) {
          // catlist[i] =catlist[i].replace(new RegExp("\"","gm"),"");
        }
        console.log("鱼真唯", (catlist[i]));
      }
      var icnt = i % colNum;
     
      if (icnt == 0 && i >= colNum) {
        // var BomList = catlist[icnt].split(',');
        var ClassRule = catlist[i];
        var PartsClass = ClassRule.substr(0, 2);
        var PartsRule = ClassRule.substr(2, 1);
        var PartsAttr = catlist[i + 1];
        var PartsDesc = catlist[i + 2];
        var PartsPID = catlist[i + 3];
        var PartsOID = catlist[i + 4];
        var PartsSort = '1';
        if ((i/colNum) > irow-2 ) {
          console.log("  老大很之  " + i ); 
          PartsSort = '999';
          var message = '上传完成！';
          var retcode={"status":"OK","message":message };
          sender.success(retcode);
          console.log("丁敏君",retcode);
        }
        let SQLInsert = "INSERT INTO `auto_nature_lab` (  `PartsRule` , `PartsClass` , `ClassRule` , `PartsAttr` , `PartsDesc` , `PartsPID` , `PartsOID` , `PartsSort` ) VALUES " +
          " (?,?,?,?,?,?,?,?)  ";
        yjDBService.exec({
          sql: SQLInsert,
          parameters: [PartsRule, PartsClass, ClassRule, PartsAttr, PartsDesc, PartsPID, PartsOID, PartsSort],
          success: function (result) {
          },
        });
       
      }


    }
    // var Bom =' "A1A",2,"PB加滤波",20,2,null ';
    // var BomList = Bom.split(',');
    // var ClassRule = BomList[0];
    // var PartsClass = ClassRule.substr(0, 2);
    // var PartsRule = ClassRule.substr(2, 1);
    // var PartsAttr = BomList[1];
    // var PartsDesc = BomList[2];
    // var PartsPID = BomList[3];
    // var PartsOID = BomList[4];
    // var PartsSort = '1';
    // let SQLInsert = "INSERT INTO `auto_nature_lab` (  `PartsRule` , `PartsClass` , `ClassRule` , `PartsAttr` , `PartsDesc` , `PartsPID` , `PartsOID` , `PartsSort` ) VALUES " +
    //   " (?,?,?,?,?,?,?,?)  ";
    // yjDBService.exec({
    //   sql: SQLInsert,
    //   parameters: [PartsRule, PartsClass, ClassRule, PartsAttr, PartsDesc, PartsPID, PartsOID, PartsSort],
    //   success: function (result) {
    //   },
    // });
  }


  function clsPool() {
    // 类别代码 	属性键	属性值	父标识号	标识号
    let SQLDelete = "delete from `auto_nature_lab`   ";
    console.log("SQLDelete:" + SQLDelete);
    yjDBService.exec({
      sql: SQLDelete,
      parameters: [ ],
      success: function (result) {
      },
      error: sender.error
    });
  }



};
// function read_Inject(file) {
//   var fs = require('fs');
//   var bitmap = fs.readFileSync(file);
//   //     console.log('@  文件读取了 @');
//   return new Buffer(bitmap).toString('utf8');
// }
// function runPool() {
//   var PartsAttr = '';
//   var PartsDesc = '';
//   var PartsPID = '';
//   var PartsOID = '';
//   var PartsSort = '';
//   // console.log("慧的： ", carData.length );
//   for (var i = 0; i < carData.length; i++) {
//     ClassRule = carData[i].类别代码;
//     PartsClass = ClassRule.substr(0, 2);
//     PartsRule = ClassRule.substr(2, 1);
//     PartsAttr = carData[i].属性键;
//     PartsDesc = carData[i].属性值;
//     PartsPID = carData[i].父标识号;
//     PartsOID = carData[i].标识号;
//     PartsSort = '';
//     // console.log("月落鸡啼：", i, " 啼：", (ClassRule), "  叫 ", (PartsAttr), " 客床 ", (PartsDesc));
//     let SQLInsert = "INSERT INTO `auto_nature_lab` (  `PartsRule` , `PartsClass` , `ClassRule` , `PartsAttr` , `PartsDesc` , `PartsPID` , `PartsOID` , `PartsSort` ) VALUES " +
//       " (?,?,?,?,?,?,?,?)  ";
//     yjDBService.exec({
//       sql: SQLInsert,
//       parameters: [PartsRule, PartsClass, ClassRule, PartsAttr, PartsDesc, PartsPID, PartsOID, PartsSort],
//       success: function (result) {
//       },
//     });
//   }

//   var retcode = { "status": "OK" };
//   sender.success(retcode);
//   console.log("慧文", retcode);
// }
// function fixdata(data) { //文件流转BinaryString
//   var o = "",
//     l = 0,
//     w = 10240;
//   for (; l < data.byteLength / w; ++l) o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w, l * w + w)));
//   o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)));
//   return o;
// }
// function handle_Inject(KeyName) {
//   try {
//     console.log(" 馬屁 ", KeyName);
//     var base64str = read_Inject('./uploaded/jessi/' + KeyName);

//     console.log("虾:", base64str);
//     // clsPool();
//     // runPool();

//   } catch (error) {
//     console.log("归", JSON.stringify(error));
//   }
// }
// function handle_ExDoor(KeyName) {
//   try {

//     var wb;//读取完成的数据
//     var rABS = false; //是否将文件读取为二进制字符串
//     console.log(" 狗屁 ", KeyName);
//     var base64str = read_Inject('./uploaded/jessi/' + KeyName);
//     var f = './uploaded/jessi/' + KeyName;
//     wb = XLSX.read(base64str, {
//       type: 'binary'
//     });
//     var reader = new FileReader();
//     reader.onload = function (e) {
//       var data = e.target.result;
//      {
//         wb = XLSX.read(data, {
//           type: 'binary'
//         });
//       }
//       // carData就是我们需要的JSON数据
//     carData = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
//     console.log("喊三次：", carData);
//     catlist.push(carData);
//     console.log("世禄：", JSON.stringify(catlist));

//     };
//     if (rABS) {
//       reader.readAsArrayBuffer(f);
//     } else {
//       reader.readAsBinaryString(f);
//     }
//     console.log("梭:",base64str);
//     clsPool();
//     runPool();

//   } catch (error) {
//     console.log("归", JSON.stringify(error));
//   }
// }