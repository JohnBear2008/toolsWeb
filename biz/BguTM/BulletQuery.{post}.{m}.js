require("../../client/js/Date.js");
require("../../client/js/funs.js");
module.exports = function (sender) {
  var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
  var yjDB = global.yjRequire("yujiang.Foil").yjDB;
  var async = require("async");
  var qryBillNo = sender.req.query.BillNo;
  var queryClass = sender.req.query.PartsClass;
  var queryCode = sender.req.query.PartsCode;
  var arrange = sender.req.query.arrange;
  var weekbeg = sender.req.query.weekbeg;
  var weekend = sender.req.query.weekend;
  var orderBy = '';
  var limit = '500';
  var capacity = '';
  funAsync(qryBillNo);
  function funAsync(qryBillNo) {
    console.log("常乐-------------", (qryBillNo));
    var dataARR = [];
    async.parallel([PopupMain, PopupDetail, PopupAudit],
      function (err, result) {
        if (err) {

        } else {
          // console.log("陆钰",JSON.stringify(result)); 
          for (var i = 0; i < 10; i++) {
            var BillNo = '';
            var SNNo = '';
            var BudgetItem = '';
            var ItemNo = '';
            var Description = '';
            var Unit = '';
            var Remain = '';
            var UnitPrice = '';
            var Quantity = '';
            var Subtotal = '';
            var Delivery = '';
            var Supplier = '';
            var Underburget = '';
            var AppendType = '';
            var Department = '';
            if (result[1][i] == null || result[1][i] == undefined) {
            } else {
              BillNo = result[1][i].BillNo; BillNo = nulReplaceTxt(BillNo);
              SNNo = result[1][i].SNNo; SNNo = nulReplaceTxt(SNNo);
              BudgetItem = result[1][i].BudgetItem; BudgetItem = nulReplaceTxt(BudgetItem);
              ItemNo = result[1][i].ItemNo; ItemNo = nulReplaceTxt(ItemNo);
              Description = result[1][i].Description; Description = nulReplaceTxt(Description);
              Unit = result[1][i].Unit; Unit = nulReplaceTxt(Unit);
              Remain = result[1][i].Remain; Remain = nulReplaceTxt(Remain);
              UnitPrice = result[1][i].UnitPrice; UnitPrice = nulReplaceTxt(UnitPrice);
              Quantity = result[1][i].Quantity; Quantity = nulReplaceTxt(Quantity);
              Subtotal = result[1][i].Subtotal; Subtotal = nulReplaceTxt(Subtotal);
              Delivery = result[1][i].Delivery; Delivery = nulReplaceTxt(Delivery);
              Supplier = result[1][i].Supplier; Supplier = nulReplaceTxt(Supplier);
              Underburget = result[1][i].Underburget; Underburget = nulReplaceTxt(Underburget);
              AppendType = result[1][i].AppendType; AppendType = nulReplaceTxt(AppendType);
              Department = result[1][i].Department; Department = nulReplaceTxt(Department);
            }
            var obj2 = {
              "BillNo": BillNo,
              "SNNo": SNNo,
              "BudgetItem": BudgetItem,
              "ItemNo": ItemNo,
              "Description": Description,
              "Unit": Unit,
              "Remain": Remain,
              "UnitPrice": UnitPrice,
              "Quantity": Quantity,
              "Subtotal": Subtotal,
              "Delivery": Delivery,
              "Supplier": Supplier,
              "Underburget": Underburget,
              "AppendType": AppendType,
              "Department": Department,
            };
            dataARR.push(obj2);
          }
          if (result[0][0] == null || result[0][0] == undefined) {
          } else {
            var obj = {
              "BillNo": result[0][0].BillNo,
              "ListNo": result[0][0].ListNo,
              "RequestDate": result[0][0].RequestDate,
              "ProjectNo": result[0][0].ProjectNo,
              "ApplicNo": result[0][0].ApplicNo,
              "DeptName": result[0][0].DeptName,
              "StaffID": result[0][0].StaffID,
              "StaffName": result[0][0].StaffName,
              "TotalValue": result[0][0].TotalValue,
              "Currency": result[0][0].Currency,
              "Payment": result[0][0].Payment,
              "Explanation": result[0][0].Explanation,
              "EntryDate": result[0][0].EntryDate,
            };
            dataARR.push(obj);
          }
          // console.log("定延:" + JSON.stringify(obj));
          var OppName = '';
          var DptName = '';
          var VipName = '';
          var PurName = '';
          var PexName = '';
          var CfoName = '';
          var PsdName = '';
          var CeoName = '';
          var BodName = '';
          var OppDate = '';
          var DptDate = '';
          var VipDate = '';
          var PurDate = '';
          var PexDate = '';
          var CfoDate = '';
          var PsdDate = '';
          var CeoDate = '';
          var BodDate = '';
          var SendStatus = '';
          var CurStatus = '';
          var CurLevel = '';
          var TermiLevel = '';
          var CurName = '';
          var CurText = '';
          if (result[2][0] == null || result[2][0] == undefined) {
          } else {
            OppName = result[2][0].OppName; OppName = nulReplaceTxt(OppName); OppDate = result[2][0].OppDate; OppDate = nulReplaceTxt(OppDate);
            DptName = result[2][0].DptName; DptName = nulReplaceTxt(DptName); DptDate = result[2][0].DptDate; DptDate = nulReplaceTxt(DptDate);
            VipName = result[2][0].VipName; VipName = nulReplaceTxt(VipName); VipDate = result[2][0].VipDate; VipDate = nulReplaceTxt(VipDate);
            PurName = result[2][0].PurName; PurName = nulReplaceTxt(PurName); PurDate = result[2][0].PurDate; PurDate = nulReplaceTxt(PurDate);
            PexName = result[2][0].PexName; PexName = nulReplaceTxt(PexName); PexDate = result[2][0].PexDate; PexDate = nulReplaceTxt(PexDate);
            CfoName = result[2][0].CfoName; CfoName = nulReplaceTxt(CfoName); CfoDate = result[2][0].CfoDate; CfoDate = nulReplaceTxt(CfoDate);
            PsdName = result[2][0].PsdName; PsdName = nulReplaceTxt(PsdName); PsdDate = result[2][0].PsdDate; PsdDate = nulReplaceTxt(PsdDate);
            CeoName = result[2][0].CeoName; CeoName = nulReplaceTxt(CeoName); CeoDate = result[2][0].CeoDate; CeoDate = nulReplaceTxt(CeoDate);
            BodName = result[2][0].BodName; BodName = nulReplaceTxt(BodName); BodDate = result[2][0].BodDate; BodDate = nulReplaceTxt(BodDate);
            SendStatus = result[2][0].SendStatus; SendStatus = nulReplaceTxt(SendStatus); 
            CurStatus = result[2][0].CurStatus; CurStatus = nulReplaceTxt(CurStatus);
            CurLevel = result[2][0].CurLevel; CurLevel = nulReplaceTxt(CurLevel); TermiLevel = result[2][0].TermiLevel; TermiLevel = nulReplaceTxt(TermiLevel);
            CurName = result[2][0].CurName; CurName = nulReplaceTxt(CurName); CurText = result[2][0].CurText; CurText = nulReplaceTxt(CurText);
          }
          var objX = {
            "OppName": OppName, "OppDate": OppDate,
            "DptName": DptName, "DptDate": DptDate,
            "VipName": VipName, "VipDate": VipDate,
            "PurName": PurName, "PurDate": PurDate,
            "PexName": PexName, "PexDate": PexDate,
            "CfoName": CfoName, "CfoDate": CfoDate,
            "PsdName": PsdName, "PsdDate": PsdDate,
            "CeoName": CeoName, "CeoDate": CeoDate,
            "BodName": BodName, "BodDate": BodDate,
            "SendStatus": SendStatus, "CurStatus": CurStatus,
            "CurLevel": CurLevel, "TermiLevel": TermiLevel,
            "CurName": CurName, "CurText": CurText,
          };
          var dumpX = JSON.stringify(objX);
          if (dumpX.length > 50) {
            console.log("井桃:" + dumpX.substring(0, 50));
          } else {
            console.log("井桃:" + JSON.stringify(objX));
          }
          dataARR.push(objX);
          sender.success(dataARR);
          var dump = JSON.stringify(dataARR);
          // if (dump.length > 1000) {
          //   console.log("陆钰:" + dump.substring(0, 1000));
          // } else {
          //   console.log("陆钰:" + JSON.stringify(dataARR));
          // }
        }
      });
    function PopupDetail(cb) {
      // var BillNo = '20201225103088';
      let SQL2 =
        " select  `BillNo` , `SNNo` , `BudgetItem` , `ItemNo` , `Description` , `Unit` , " +
        " `Remain` , `UnitPrice` ,  `Quantity` , `Subtotal` , `Delivery` , `Supplier` ,  `Underburget` ,  `AppendType` ,`Department` " +
        " from bgu_purchdetail tba  " +
        " where tba.BillNo= ?  Order By SNNo ";
      console.log("DDD韩效:", qryBillNo);
      yjDBService.exec({
        sql: SQL2,
        parameters: [qryBillNo],
        rowsAsArray: true,
        success: function (r) {
          var datas = [];
          var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
          for (var i = 0; i < data.length; i++) {
            var temp = {
              "BillNo": qryBillNo,
              "SNNo": data[i].SNNo,
              "BudgetItem": data[i].BudgetItem,
              "ItemNo": data[i].ItemNo,
              "Description": data[i].Description,
              "Unit": data[i].Unit,
              "Remain": data[i].Remain,
              "UnitPrice": data[i].UnitPrice,
              "Quantity": data[i].Quantity,
              "Subtotal": data[i].Subtotal,
              "Delivery": data[i].Delivery,
              "Supplier": data[i].Supplier,
              "Underburget": data[i].Underburget,
              "AppendType": data[i].AppendType,
              "Department": data[i].Department,
            }
            datas.push(temp)
          }
          var dump = JSON.stringify(datas);
          if (dump.length > 500) {
            console.log("世禄:" + dump.substring(0, 500));
          } else {
            console.log("金禄:" + JSON.stringify(datas));
          }
          cb(null, datas);
        },
        error: sender.error
      });
    }
    function PopupMain(cb) {
      // var BillNo = '20201225093185';
      let SQL2 =
        " select  `BillNo` , `ListNo` , `RequestDate` , `ProjectNo` , `ApplicNo` ,  " +
        "`DeptName` , `StaffID`  , `StaffName` ,  `TotalValue`  , `Currency` ,  `Payment` , `Explanation` ,`EntryDate` " +
        " from bgu_purchmain tba  " +
        " where tba.BillNo= ?   ";
      yjDBService.exec({
        sql: SQL2,
        parameters: [qryBillNo],
        rowsAsArray: true,
        success: function (r) {
          var datas = [];
          var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
          for (var i = 0; i < data.length; i++) {
            var temp = {
              "BillNo": data[i].BillNo,
              "ListNo": data[i].ListNo,
              "RequestDate": data[i].RequestDate,
              "ProjectNo": data[i].ProjectNo,
              "ApplicNo": data[i].ApplicNo,
              "DeptName": data[i].DeptName,
              "StaffID": data[i].StaffID,
              "StaffName": data[i].StaffName,
              "TotalValue": data[i].TotalValue,
              "Currency": data[i].Currency,
              "Payment": data[i].Payment,
              "Explanation": data[i].Explanation,
              "EntryDate": data[i].EntryDate,
            }
            datas.push(temp)
          }

          // var dump = JSON.stringify(datas);
          // if (dump.length > 100) {
          //   console.log("彩暻:" + dump.substring(0, 100));
          // } else {
          //   console.log("彩暻:" + JSON.stringify(datas));
          // }
          cb(null, datas);
        },
        error: sender.error
      });
    }
    function PopupAudit(cb) {
      // var BillNo = '20201225103088';
      let SQL2 =
        " select  `BillNo` ,`entryDate` ,`groupLabel` ,`StaffID` ,`StaffName` ,`CurStatus` ,`CurLevel` ,`TermiLevel` ,`CurWorkId` ," +
        " `CurName` ,`SendStatus`,`CurText` ,`track` ,`Level1` ,`OppWorkId` ,`OppName` ,`OppDate` ,`Level2` ,`DptWorkId` ,`DptName` ," +
        " `DptDate` ,`Level3` ,`VipWorkId` ,`VipDate` ,`VipName` ,  `Level4` ,`PurWorkId` ,`PurName` ,`PurDate` ,`Level5` ,`PexWorkId` ," +
        " `PexName` ,`PexDate` ,`Level6` ,`CfoWorkId` ,`CfoName` ,`CfoDate` ,`Level7` ,`PsdWorkId` ,`PsdName` ,`PsdDate` , " +
        " `Level8` ,`CeoWorkId` ,`CeoName` ,`CeoDate` ,`Level9` ,`BodWorkId` ,`BodName` ,`BodDate`  from bgu_rule tba  " +
        " where tba.BillNo= ?   ";
      yjDBService.exec({
        sql: SQL2,
        parameters: [qryBillNo],
        rowsAsArray: true,
        success: function (r) {
          var datas = [];
          var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
          // console.log(  " 詩賢 ", data.length);
          for (var i = 0; i < data.length; i++) {
            // console.log(  " 詩賢 ", data[i].OppName );
            var temp = {
              "Level1": data[i].Level1, "OppWorkId": data[i].OppWorkId, "OppName": data[i].OppName, "OppDate": data[i].OppDate,
              "Level2": data[i].Level2, "DptWorkId": data[i].DptWorkId, "DptName": data[i].DptName, "DptDate": data[i].DptDate,
              "Level3": data[i].Level3, "VipWorkId": data[i].VipWorkId, "VipName": data[i].VipName, "VipDate": data[i].VipDate,
              "Level4": data[i].Level4, "PurWorkId": data[i].PurWorkId, "PurName": data[i].PurName, "PurDate": data[i].PurDate,
              "Level5": data[i].Level5, "PexWorkId": data[i].PexWorkId, "PexName": data[i].PexName, "PexDate": data[i].PexDate,
              "Level6": data[i].Level6, "CfoWorkId": data[i].CfoWorkId, "CfoName": data[i].CfoName, "CfoDate": data[i].CfoDate,
              "Level7": data[i].Level7, "PsdWorkId": data[i].PsdWorkId, "PsdName": data[i].PsdName, "PsdDate": data[i].PsdDate,
              "Level8": data[i].Level8, "CeoWorkId": data[i].CeoWorkId, "CeoName": data[i].CeoName, "CeoDate": data[i].CeoDate,
              "Level9": data[i].Level9, "BodWorkId": data[i].BodWorkId, "BodName": data[i].BodName, "BodDate": data[i].BodDate,
              "BillNo": data[i].BillNo, "SendStatus": data[i].SendStatus, "CurStatus": data[i].CurStatus, "CurLevel": data[i].CurLevel,
              "TermiLevel": data[i].TermiLevel, "CurWorkId": data[i].CurWorkId, "CurName": data[i].CurName, "CurText": data[i].CurText,
            }
            datas.push(temp)
          }
          var dump = JSON.stringify(datas);
          if (dump.length > 100) {
            console.log("荒井:" + dump.substring(0, 100));
          } else {
            console.log("暖菜:" + JSON.stringify(datas));
          }
          cb(null, datas);
        },
        error: sender.error
      });
    }
  }
}
function nulReplaceTxt(passTxt) {
  var ret = '';
  ret = (passTxt == null || passTxt == undefined) ? ('') : passTxt;
  return ret;
} 