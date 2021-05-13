require("../../client/js/Date.js");
require("../../client/js/funs.js");
module.exports = function (sender) {
  var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
  var yjDB = global.yjRequire("yujiang.Foil").yjDB;
  var async = require("async");
  let now = new Date();
	var BudYear = now.Format("yyyy");
	var BudMonth = now.Format("MM");
  var qryBillNo = sender.req.query.BillNo;
  var queryClass = sender.req.query.PartsClass;
  var queryCode = sender.req.query.PartsCode;
  var arrange = sender.req.query.arrange;
  var weekbeg = sender.req.query.weekbeg;
  var weekend = sender.req.query.weekend;
  var FlowBudget = sender.req.query.FlowBudget;
  var FlowVip = sender.req.query.FlowVip;
  var FlowDept = sender.req.query.FlowDept; 
  console.log("及时 ", qryBillNo );
  var orderBy = '';
  var limit = '500';
  var capacity = '';
  funAsync(qryBillNo);
  function funAsync(qryBillNo) {
    var dataARR = [];
    async.parallel([PopupMain, PopupDetail, PopupAudit, PopupCredit],
      function (err, result) {
        if (err) {

        } else {
          // console.log("陆钰",JSON.stringify(result)); 
          for (var i = 0; i < 10; i++) {
            var BillNo = '';
            var SNNo = '';
            var Subject = '';
            var BudgetCID = '';
            var BudgetItem = '';
            var ItemNo = '';
            var Description = '';
            var Unit = '';
            var Remain = '';
            var UnitPrice = '';
            var Quantity = '';
            var Subtotal = '';
            var Realtotal = '';
            var Delivery = '';
            var Supplier = '';
            var Underburget = '';
            var AppendType = '';
            var Department = '';
            if (result[1][i] == null || result[1][i] == undefined) {
            } else {
              BillNo = result[1][i].BillNo; BillNo = nulReplaceTxt(BillNo);
              SNNo = result[1][i].SNNo; SNNo = nulReplaceTxt(SNNo);
              Subject = result[1][i].Subject; Subject = nulReplaceTxt(Subject);
              BudgetCID = result[1][i].BudgetCID; BudgetCID = nulReplaceTxt(BudgetCID);
              BudgetItem = result[1][i].BudgetItem; BudgetItem = nulReplaceTxt(BudgetItem);
              ItemNo = result[1][i].ItemNo; ItemNo = nulReplaceTxt(ItemNo);
              Description = result[1][i].Description; Description = nulReplaceTxt(Description);
              Unit = result[1][i].Unit; Unit = nulReplaceTxt(Unit);
              Remain = result[1][i].Remain; Remain = nulReplaceTxt(Remain);
              UnitPrice = result[1][i].UnitPrice; UnitPrice = nulReplaceTxt(UnitPrice);
              Quantity = result[1][i].Quantity; Quantity = nulReplaceTxt(Quantity);
              Subtotal = result[1][i].Subtotal; Subtotal = nulReplaceTxt(Subtotal);
              Realtotal = result[1][i].Realtotal; Realtotal = nulReplaceTxt(Realtotal);
              Delivery = result[1][i].Delivery; Delivery = nulReplaceTxt(Delivery);
              Supplier = result[1][i].Supplier; Supplier = nulReplaceTxt(Supplier);
              Underburget = result[1][i].Underburget; Underburget = nulReplaceTxt(Underburget);
              AppendType = result[1][i].AppendType; AppendType = nulReplaceTxt(AppendType);
              Department = result[1][i].Department; Department = nulReplaceTxt(Department);
            }
            var obj2 = {
              "BillNo": BillNo,
              "SNNo": SNNo,
              "Subject": Subject,
              "BudgetCID": BudgetCID,
              "BudgetItem": BudgetItem,
              "ItemNo": ItemNo,
              "Description": Description,
              "Unit": Unit,
              "Remain": Remain,
              "UnitPrice": UnitPrice,
              "Quantity": Quantity,
              "Subtotal": Subtotal,
              "Realtotal": Realtotal,
              "Delivery": Delivery,
              "Supplier": Supplier,
              "Underburget": Underburget,
              "AppendType": AppendType,
              "Department": Department,
            };
            dataARR.push(obj2);
            // console.log("推油:" + JSON.stringify(obj2));
          }
          if (result[0][0] == null || result[0][0] == undefined) {
          } else {
            var obj = {
              "BillNo": result[0][0].BillNo,
              "ListNo": result[0][0].ListNo,
              "Subject": result[0][0].Subject,
              "BudgetCID": result[0][0].BudgetCID,
              "BudgetItem": result[0][0].BudgetItem,
              "RequestDate": result[0][0].RequestDate,
              "ProjectNo": result[0][0].ProjectNo,
              "ApplicNo": result[0][0].ApplicNo,
              "GroupName": result[0][0].GroupName,
              "DeptName": result[0][0].DeptName,
              "StaffID": result[0][0].StaffID,
              "StaffName": result[0][0].StaffName,
              "TotalValue": result[0][0].TotalValue,
              "RealValue": result[0][0].RealValue,
              "Currency": result[0][0].Currency,
              "Payment": result[0][0].Payment,
              "Explanation": result[0][0].Explanation,
              "EntryDate": result[0][0].EntryDate,
            };
            dataARR.push(obj);
          }
          // console.log("定延:" + JSON.stringify(obj));
          var OppName = '';
          var MagName = '';
          var VipName = '';
          var PurName = '';
          var PexName = '';
          var CfoName = '';
          var PsdName = '';
          var CeoName = '';
          var BodName = '';
          var OppDate = '';
          var MagDate = '';
          var VipDate = '';
          var PurDate = '';
          var PexDate = '';
          var CfoDate = '';
          var PsdDate = '';
          var CeoDate = '';
          var BodDate = '';
          var Reason = '';
          var SendStatus = '';
          var CurStatus = '';
          var CurLevel = '';
          var TermiLevel = '';
          var CurName = '';
          var CurText = '';
          var CurJob = '';
          if (result[2][0] == null || result[2][0] == undefined) {
          } else {
            OppName = result[2][0].OppName; OppName = nulReplaceTxt(OppName); OppDate = result[2][0].OppDate; OppDate = nulReplaceTxt(OppDate);
            MagName = result[2][0].MagName; MagName = nulReplaceTxt(MagName); MagDate = result[2][0].MagDate; MagDate = nulReplaceTxt(MagDate);
            VipName = result[2][0].VipName; VipName = nulReplaceTxt(VipName); VipDate = result[2][0].VipDate; VipDate = nulReplaceTxt(VipDate);
            PurName = result[2][0].PurName; PurName = nulReplaceTxt(PurName); PurDate = result[2][0].PurDate; PurDate = nulReplaceTxt(PurDate);
            PexName = result[2][0].PexName; PexName = nulReplaceTxt(PexName); PexDate = result[2][0].PexDate; PexDate = nulReplaceTxt(PexDate);
            CfoName = result[2][0].CfoName; CfoName = nulReplaceTxt(CfoName); CfoDate = result[2][0].CfoDate; CfoDate = nulReplaceTxt(CfoDate);
            PsdName = result[2][0].PsdName; PsdName = nulReplaceTxt(PsdName); PsdDate = result[2][0].PsdDate; PsdDate = nulReplaceTxt(PsdDate);
            CeoName = result[2][0].CeoName; CeoName = nulReplaceTxt(CeoName); CeoDate = result[2][0].CeoDate; CeoDate = nulReplaceTxt(CeoDate);
            BodName = result[2][0].BodName; BodName = nulReplaceTxt(BodName); BodDate = result[2][0].BodDate; BodDate = nulReplaceTxt(BodDate);
            Reason = result[2][0].Reason; Reason = nulReplaceTxt(Reason);
            CurStatus = result[2][0].CurStatus; CurStatus = nulReplaceTxt(CurStatus);
            CurLevel = result[2][0].CurLevel; CurLevel = nulReplaceTxt(CurLevel); TermiLevel = result[2][0].TermiLevel; TermiLevel = nulReplaceTxt(TermiLevel);
            CurName = result[2][0].CurName; CurName = nulReplaceTxt(CurName); CurText = result[2][0].CurText; CurText = nulReplaceTxt(CurText);
            CurJob = result[2][0].CurJob; CurJob = nulReplaceTxt(CurJob); 
          }
          var objX = {
            "OppName": OppName, "OppDate": OppDate,
            "MagName": MagName, "MagDate": MagDate,
            "VipName": VipName, "VipDate": VipDate,
            "PurName": PurName, "PurDate": PurDate,
            "PexName": PexName, "PexDate": PexDate,
            "CfoName": CfoName, "CfoDate": CfoDate,
            "PsdName": PsdName, "PsdDate": PsdDate,
            "CeoName": CeoName, "CeoDate": CeoDate,
            "BodName": BodName, "BodDate": BodDate,
            "Reason": Reason, 
            "SendStatus": SendStatus, "CurStatus": CurStatus,
            "CurLevel": CurLevel, "TermiLevel": TermiLevel,
            "CurName": CurName, "CurText": CurText,
            "CurJob": CurJob, 
          };
          dataARR.push(objX);
          var objW = {
            "CreditA": result[3][0].CreditA,
            "CreditB": result[3][0].CreditB,
            "CreditC": result[3][0].CreditC,
            "CreditD": result[3][0].CreditD,
            // "CreditA": '预算内额度已超过：',  
            // "CreditB": '预算5000已用5000：',  
            // "CreditC": '预算外额度未超过：',  
            // "CreditD": '额度3500已用2500',  
          }
          dataARR.push(objW);
          sender.success(dataARR);
          // var dump = JSON.stringify(dataARR);
          // if (dump.length > 1000) {
          //   console.log("鲁班:" + dump.substring(0, 1000));
          // } else {
          //   console.log("鲁班:" + JSON.stringify(dataARR));
          // }
        }
      });
    function PopupDetail(cb) {
      // var BillNo = '20201225103088';
      let SQL2 =
        " select  `BillNo` , `SNNo` , `Subject` , `BudgetCID` , `BudgetItem` , `ItemNo` , `Description` , `Unit` , " +
        " `Remain` , `UnitPrice` ,  `Quantity` , `Subtotal` , `Realtotal` , `Delivery` , `Supplier` ,  `Underburget` ,  `AppendType` ,`Department` " +
        " from bgu_expdetail tba  " +
        " where tba.BillNo= ?  Order By SNNo ";
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
              "Subject": data[i].Subject,
              "BudgetCID": data[i].BudgetCID,
              "BudgetItem": data[i].BudgetItem,
              "ItemNo": data[i].ItemNo,
              "Description": data[i].Description,
              "Unit": data[i].Unit,
              "Remain": data[i].Remain,
              "UnitPrice": data[i].UnitPrice,
              "Quantity": data[i].Quantity,
              "Subtotal": data[i].Subtotal,
              "Realtotal": data[i].Realtotal,
              "Delivery": data[i].Delivery,
              "Supplier": data[i].Supplier,
              "Underburget": data[i].Underburget,
              "AppendType": data[i].AppendType,
              "Department": data[i].Department,
            }
            datas.push(temp)
          }
          cb(null, datas);
        },
        error: sender.error
      });
    }
    function PopupMain(cb) {
      // var BillNo = '20201225093185';
      let SQL2 =
        " select  `Subject`, `BudgetCID` , `BudgetItem`, `BillNo` , `ListNo` , `RequestDate` , `ProjectNo` , `ApplicNo` ,  " +
        "`GroupName` ,  `DeptName` , `StaffID`  , `StaffName` ,  `TotalValue`  , `RealValue` , `Currency` ,  `Payment` , `Explanation` ,`EntryDate` " +
        " from bgu_expmain tba  " +
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
              "Subject": data[i].Subject,
              "BudgetCID": data[i].BudgetCID,
              "BudgetItem": data[i].BudgetItem,
              "RequestDate": data[i].RequestDate,
              "ProjectNo": data[i].ProjectNo,
              "ApplicNo": data[i].ApplicNo,
              "GroupName": data[i].GroupName,
              "DeptName": data[i].DeptName,
              "StaffID": data[i].StaffID,
              "StaffName": data[i].StaffName,
              "RealValue": data[i].RealValue,
              "TotalValue": data[i].TotalValue,
              "Currency": data[i].Currency,
              "Payment": data[i].Payment,
              "Explanation": data[i].Explanation,
              "EntryDate": data[i].EntryDate,
            }
            datas.push(temp)
          }
          cb(null, datas);
        },
        error: sender.error
      });
    }
    function PopupAudit(cb) {
      // var BillNo = '20201225103088';
      let SQL2 =
        " select  `BillNo` ,`entryDate` ,`StaffID` ,`StaffName` ,`CurStatus` ,`CurLevel` ,`TermiLevel` ,`CurWorkId` ," +
        " `CurName` , `CurJob` , `SendStatus`,`CurText` ,`track` ,`Level1` ,`OppWorkId` ,`OppName` ,`OppDate` ,`Level2` ,`MagWorkId` ,`MagName` ," +
        " `MagDate` ,`Level3` ,`VipWorkId` ,`VipDate` ,`VipName` ,  `Level4` ,`PurWorkId` ,`PurName` ,`PurDate` ,`Level5` ,`PexWorkId` ," +
        " `PexName` ,`PexDate` ,`Level6` ,`CfoWorkId` ,`CfoName` ,`CfoDate` ,`Level7` ,`PsdWorkId` ,`PsdName` ,`PsdDate` , " +
        " `Level8` ,`CeoWorkId` ,`CeoName` ,`CeoDate` ,`Level9` ,`BodWorkId` ,`BodName` ,`BodDate` ,`Reason`  from bgu_rule tba  " +
        " where tba.BillNo= ? ";
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
              "Level2": data[i].Level2, "MagWorkId": data[i].MagWorkId, "MagName": data[i].MagName, "MagDate": data[i].MagDate,
              "Level3": data[i].Level3, "VipWorkId": data[i].VipWorkId, "VipName": data[i].VipName, "VipDate": data[i].VipDate,
              "Level4": data[i].Level4, "PurWorkId": data[i].PurWorkId, "PurName": data[i].PurName, "PurDate": data[i].PurDate,
              "Level5": data[i].Level5, "PexWorkId": data[i].PexWorkId, "PexName": data[i].PexName, "PexDate": data[i].PexDate,
              "Level6": data[i].Level6, "CfoWorkId": data[i].CfoWorkId, "CfoName": data[i].CfoName, "CfoDate": data[i].CfoDate,
              "Level7": data[i].Level7, "PsdWorkId": data[i].PsdWorkId, "PsdName": data[i].PsdName, "PsdDate": data[i].PsdDate,
              "Level8": data[i].Level8, "CeoWorkId": data[i].CeoWorkId, "CeoName": data[i].CeoName, "CeoDate": data[i].CeoDate,
              "Level9": data[i].Level9, "BodWorkId": data[i].BodWorkId, "BodName": data[i].BodName, "BodDate": data[i].BodDate,
              "Reason": data[i].Reason, 
              "BillNo": data[i].BillNo, "SendStatus": data[i].SendStatus, "CurStatus": data[i].CurStatus, "CurLevel": data[i].CurLevel,
              "TermiLevel": data[i].TermiLevel, "CurWorkId": data[i].CurWorkId, "CurName": data[i].CurName, "CurText": data[i].CurText,
              "CurJob": data[i].CurJob,
            }
            datas.push(temp)
          }
          cb(null, datas);
        },
        error: sender.error
      });
    }
    function PopupCredit(cb) {
      let SQL2 =
      // " select 'A' as Rank, AllowMoney as AllowValue, Accumulate , Surplus ,IsOver from bgu_quota where BudgetItem = ? and DeptName = ?  " +
      // " Union " +
      // " select 'B' as Rank, UpperLimit  as AllowValue, Accumulate , Surplus ,IsOver from bgu_credit where StaffName = ?   ";
      // console.log("柳惠濬:",  FlowBudget, "亚",FlowDept ,"瑟", FlowVip);
      " select 'A' as Rank, AllowMoney as AllowValue, Accumulate , Surplus ,IsOver from bgu_quota " +
      " where BudgetItem =? and BudYear = ? and DeptName = ?  " +
      " Union " +
      " select 'B' as Rank, UpperLimit  as AllowValue, Accumulate , Surplus ,IsOver from bgu_buffer " +
      " where  BffType = 'A' and BudYear =? and BudMonth = ? "  ;
      let paramelist = [FlowBudget, BudYear, FlowDept, BudYear, BudMonth];
      var itemAllow = '0';
      var itemAccu = '0';
      var itemSurp = '0';
      var itemIsOver = '';
      var vvipAllow = '0';
      var vvipAccu = '0';
      var vvipSurp = '0';
      var vvipIsOver = '';
      yjDBService.exec({
        sql: SQL2,
        parameters: paramelist , 
        rowsAsArray: true,
        success: function (r) {
          var datas = [];
          var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
          for (var i = 0; i < data.length; i++) {
            if (data[i] != null && data[i] != undefined) {
              var Rank = data[i].Rank;
              if (Rank == 'A') {
                itemAllow = data[i].AllowValue; itemAllow = nulReplace0(itemAllow);
                itemAccu = data[i].Accumulate; itemAccu = nulReplace0(itemAccu);
                itemSurp = data[i].Surplus; itemSurp = nulReplace0(itemSurp);
                itemIsOver = data[i].IsOver; 
              }
              if (Rank == 'B') {
                vvipAllow = data[i].AllowValue; vvipAllow = nulReplace0(vvipAllow);
                vvipAccu = data[i].Accumulate; vvipAccu = nulReplace0(vvipAccu);
                vvipSurp = data[i].Surplus; vvipSurp = nulReplace0(vvipSurp);
                vvipIsOver = data[i].IsOver;  
              }
            } else {

            }
          }
          itemMsg = '预算内额度未超过：';
          vvipMsg = '预算外额度未超过：';
          itemSurp = parseInt(itemSurp, 10);
          if (itemIsOver == 'Y') {
            itemMsg = '预算内额度已超过：';
          }
          if (vvipIsOver == 'Y') {
            vvipMsg = '预算外额度已超过：';
          }
          var temp = {
            "CreditA": itemMsg, "CreditB": '预算' + itemAllow + '已用' + itemAccu, "CreditC": vvipMsg, "CreditD": '预算' + vvipAllow + '已用' + vvipAccu,
          }
          datas.push(temp);
          console.log("是否超预算:"  ,itemIsOver ,vvipIsOver); 
          // var dump = JSON.stringify(datas);
          // if (dump.length > 500) {
          //   console.log("达摩:" + dump.substring(0, 500));
          // } else {
          //   console.log("达摩:" + JSON.stringify(datas));
          // }
          cb(null, datas);
        },
        error: sender.error
      });
    }
  }
  function nulReplaceTxt(passTxt) {
    var ret = '';
    ret = (passTxt == null || passTxt == undefined) ? ('') : passTxt;
    return ret;
  }
  function nulReplace0(passTxt) {
    var ret = '';
    ret = (passTxt == null || passTxt == undefined) ? ('0') : passTxt;
    return ret;
  }
}
