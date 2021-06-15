require("../../client/js/Date.js");
require("../../client/js/funs.js");
module.exports = function (sender) {
  var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
  var yjDB = global.yjRequire("yujiang.Foil").yjDB;
  var async = require("async");
  var qryBillNo = sender.req.query.BillNo;
  var arrange = sender.req.query.arrange;
  var weekbeg = sender.req.query.weekbeg;
  var weekend = sender.req.query.weekend;
  var orderBy = '';
  var limit = '500';
  var capacity = '';
  if (arrange == 'popup') {
    funAsync(qryBillNo);
  }
  
  function funAsync(qryBillNo) {
    console.log("旅乐-------------", (qryBillNo));
    var dataARR = [];
    async.parallel([PopupMain, PopupDetail, PopupAudit],
      function (err, result) {
        if (err) {

        } else {
          // console.log("陆钰",JSON.stringify(result)); 
          for (var i = 0; i < 20; i++) {
            var BillNo = '';
            var SNNo = '';
            var TrafficA = '';
            var TrafficB = '';
            var TrafficC = '';
            var TrafficD = '';
            var TrafficE = '';
            var TrafficF = '';
            var TicTotal = '';
            var InputVAT = '';
            var TripDate = '';
            var TripCust = '';
            var TripRept = '';
            var TripNote = '';
            if (result[1][i] == null || result[1][i] == undefined) {
            } else {
              BillNo = result[1][i].BillNo; BillNo = nulReplaceTxt(BillNo);
              SNNo = result[1][i].SNNo; SNNo = nulReplaceTxt(SNNo);
              TrafficA = result[1][i].TrafficA; TrafficA = nulReplaceTxt(TrafficA);
              TrafficB = result[1][i].TrafficB; TrafficB = nulReplaceTxt(TrafficB);
              TrafficC = result[1][i].TrafficC; TrafficC = nulReplaceTxt(TrafficC);
              TrafficD = result[1][i].TrafficD; TrafficD = nulReplaceTxt(TrafficD);
              TrafficE = result[1][i].TrafficE; TrafficE = nulReplaceTxt(TrafficE);
              TrafficF = result[1][i].TrafficF; TrafficF = nulReplaceTxt(TrafficF);
              TicTotal = result[1][i].TicTotal; TicTotal = nulReplaceTxt(TicTotal);
              InputVAT = result[1][i].InputVAT; InputVAT = nulReplaceTxt(InputVAT);
              TripDate = result[1][i].TripDate; TripDate = nulReplaceDate(TripDate);
              TripCust = result[1][i].TripCust; TripCust = nulReplaceTxt(TripCust);
              TripRept = result[1][i].TripRept; TripRept = nulReplaceTxt(TripRept);
              TripNote = result[1][i].TripNote; TripNote = nulReplaceTxt(TripNote);
            }
            var obj2 = {
              "BillNo": BillNo,
              "SNNo": SNNo,
              "TrafficA": TrafficA,
              "TrafficB": TrafficB,
              "TrafficC": TrafficC,
              "TrafficD": TrafficD,
              "TrafficE": TrafficE,
              "TrafficF": TrafficF,
              "TicTotal": TicTotal,
              "InputVAT": InputVAT,
              "TripDate": TripDate,
              "TripCust": TripCust,
              "TripRept": TripRept,
              "TripNote": TripNote,
            };
            dataARR.push(obj2);
            if (i > 14 && i < 20) {
              // console.log(  "看里" , JSON.stringify(obj2));
            }
            // console.log("推经络:" + JSON.stringify(obj2));
          }
          if (result[0][0] == null || result[0][0] == undefined) {
          } else {
            var obj = {
              "BillNo": result[0][0].BillNo,
              "ApplicNo": result[0][0].ApplicNo,
              "Version": result[0][0].Version,
              "BusiMan": result[0][0].BusiMan,
              "CompMan": result[0][0].CompMan ,
              "BusiArea": result[0][0].BusiArea,
              "RoomChoice": result[0][0].RoomChoice,
              "DinnerChoice": result[0][0].DinnerChoice,
              "DeptName":(result[0][0].DeptName == null ? '' : result[0][0].DeptName),
              "StaffID": result[0][0].StaffID,
              "StaffName": (result[0][0].StaffName == null ? '' : result[0][0].StaffName),
              "LeaveDate": (result[0][0].LeaveDate == null ? '' : result[0][0].LeaveDate),
              "LeaveHour": result[0][0].LeaveHour,
              "LeaveMin": result[0][0].LeaveMin,
              "BackDate": (result[0][0].BackDate == null ? '' : result[0][0].BackDate),
              "BackHour": result[0][0].BackHour,
              "BackMin": result[0][0].BackMin,
              "LiveDateA": (result[0][0].LiveDateA == null ? '' : result[0][0].LiveDateA),
              "LiveDateB": (result[0][0].LiveDateB == null ? '' : result[0][0].LiveDateB),
              "LiveDateC": (result[0][0].LiveDateC == null ? '' : result[0][0].LiveDateC),
              "LiveDateD": (result[0][0].LiveDateD == null ? '' : result[0][0].LiveDateD),
              "LiveDateE": (result[0][0].LiveDateE == null ? '' : result[0][0].LiveDateE),
              "LiveDateF": (result[0][0].LiveDateF == null ? '' : result[0][0].LiveDateF),
              "LiveExtA": ((result[0][0].LiveExtA != undefined && result[0][0].LiveExtA != '')?  '住'+result[0][0].LiveExtA + '天' : ''),
              "LiveExtB": ((result[0][0].LiveExtB != undefined && result[0][0].LiveExtA != '')?  '住'+result[0][0].LiveExtB + '天' : ''),
              "LiveExtC": ((result[0][0].LiveExtC != undefined && result[0][0].LiveExtA != '')?  '住'+result[0][0].LiveExtC + '天' : ''),
              "LiveExtD": ((result[0][0].LiveExtD != undefined && result[0][0].LiveExtA != '')?  '住'+result[0][0].LiveExtD + '天' : ''),
              "LiveExtE": ((result[0][0].LiveExtE != undefined && result[0][0].LiveExtA != '')?  '住'+result[0][0].LiveExtE + '天' : ''),
              "LiveExtF": ((result[0][0].LiveExtF != undefined && result[0][0].LiveExtA != '')?  '住'+result[0][0].LiveExtF + '天' : ''),
              "Explanation": result[0][0].Explanation,
              "BackMin": result[0][0].BackMin,
              "Overspend": result[0][0].Overspend,
              "OverReason": result[0][0].OverReason,
              "IsOver": result[0][0].IsOver,
              "HotelName": result[0][0].HotelName,
              "HotelTel": result[0][0].HotelTel,
              "EntryDate": (result[0][0].EntryDate == null ? '' : result[0][0].EntryDate),
              "BillStatus": result[0][0].BillStatus,
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
            SendStatus = result[2][0].SendStatus; SendStatus = nulReplaceTxt(SendStatus);
            Reason = result[2][0].Reason; Reason = nulReplaceTxt(Reason);
            CurStatus = result[2][0].CurStatus; CurStatus = nulReplaceTxt(CurStatus);
            CurLevel = result[2][0].CurLevel; CurLevel = nulReplaceTxt(CurLevel); TermiLevel = result[2][0].TermiLevel; TermiLevel = nulReplaceTxt(TermiLevel);
            CurName = result[2][0].CurName; CurName = nulReplaceTxt(CurName); CurText = result[2][0].CurText; CurText = nulReplaceTxt(CurText);
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
          };
          var dumpX = JSON.stringify(objX);
          if (dumpX.length > 500) {
            console.log("大凉:" + dumpX.substring(0, 500));
          } else {
            console.log("大凉:" + JSON.stringify(objX));
          }
          dataARR.push(objX);
          sender.success(dataARR);
          // var dump = JSON.stringify(dataARR);
          // if (dump.length > 100) {
          //   console.log("海钰:" + dump.substring(0, 100));
          // } else {
          //   console.log("海钰:" + JSON.stringify(dataARR));
          // }
        }
      });
    function PopupDetail(cb) {
      // var BillNo = '20201225103088';
      let SQL2 =
        " select     `BillNo`  ,  `SNNo`  ,  `TrafficA`  ,  `TrafficB`  ,  `TrafficC`  ," +
        " `TrafficD`  ,  `TrafficE`  ,  `TrafficF`  ,  `TicTotal`  ,  `InputVAT`  ," +
        " `TripDate` ,  `TripCust`  ,  `TripRept`  ,  `TripNote`   " +
        " from bgu_tripdetail tba  " +
        " where tba.BillNo= ?  order by cast(SNNo as int) ASC ";
      // console.log("朴明恩:", SQL2);
      yjDBService.exec({
        sql: SQL2,
        parameters: [qryBillNo],
        rowsAsArray: true,
        success: function (r) {
          var datas = [];
          var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
          // console.log("秋本麗奈:", data.length);
          var temp = {};
          for (var ki = 0; ki < 20; ki++) {
            temp = {
              "BillNo": qryBillNo,
              "SNNo": '' + ki,
              "TrafficA": '',
              "TrafficB": '',
              "TrafficC": '',
              "TrafficD": '',
              "TrafficE": '',
              "TrafficF": '',
              "TicTotal": '',
              "InputVAT": '',
              "TripDate": '',
              "TripCust": '',
              "TripRept": '',
              "TripNote": '',
            }
            for (var i = 0; i < data.length; i++) {
              if (ki == parseInt(data[i].SNNo, '10')) {
                temp = {
                  "BillNo": qryBillNo,
                  "SNNo": data[i].SNNo,
                  "TrafficA": data[i].TrafficA,
                  "TrafficB": data[i].TrafficB,
                  "TrafficC": data[i].TrafficC,
                  "TrafficD": data[i].TrafficD,
                  "TrafficE": data[i].TrafficE,
                  "TrafficF": data[i].TrafficF,
                  "TicTotal": data[i].TicTotal,
                  "InputVAT": data[i].InputVAT,
                  "TripDate": data[i].TripDate,
                  "TripCust": data[i].TripCust,
                  "TripRept": data[i].TripRept,
                  "TripNote": data[i].TripNote,
                }
                // console.log("-----------------------有值:", i, "才" , ki ,"云",data[i].TicTotal);
                continue;
              }
            }
            datas.push(temp);
            // if (ki >= 14 && ki < 20) {
            //   console.log("抹茶:" + JSON.stringify(temp));
            // }
          }
          cb(null, datas);

          // var dump = JSON.stringify(datas);
          // if (dump.length > 500) {
          //   console.log("禄:" + dump.substring(0, 500));
          // } else {
          //   console.log("禄:" + JSON.stringify(datas));
          // }
        },
        error: sender.error
      });
    }
    function PopupMain(cb) {
      // var BillNo = '20201225093185';
      let SQL2 =
        " select   `BillNo`  ,  `ApplicNo`  ,  `Version`  ,  `BusiMan`  ,  `CompMan`  , `BusiArea`  , " +
        " `RoomChoice`  ,`DinnerChoice`  ,  `DeptName`  ," +
        " `StaffID`  ,  `StaffName`  ,  `LeaveDate`  , `LeaveHour`  ,  `LeaveMin`  ,  `BackDate`  ," +
        " `BackHour`  ,  `BackMin`  ,  `LiveDateA`  ,  `LiveDateB`  ,  `LiveDateC`  ,  `LiveDateD`  ," +
        " `LiveDateE`  ,  `LiveDateF` , `LiveExtA`  ,  `LiveExtB`  ,  `LiveExtC`  ,  `LiveExtD`  ," +
        " `LiveExtE`  ,  `LiveExtF` ,  `Explanation`  ,  `Overspend` ,  `OverReason`  ,  `IsOver`  ,  `HotelName`  ," +
        " `HotelTel`  ,  `EntryDate`  ,  `BillStatus`   " +
        " from bgu_tripmain tba  " +
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
              "ApplicNo": data[i].ApplicNo,
              "Version": data[i].Version,
              "BusiMan": data[i].BusiMan,
              "CompMan": data[i].CompMan,
              "BusiArea": data[i].BusiArea,
              "RoomChoice": data[i].RoomChoice ,
              "DinnerChoice": data[i].DinnerChoice,
              "DeptName": data[i].DeptName,
              "StaffID": data[i].StaffID,
              "StaffName": data[i].StaffName,
              "LeaveDate": data[i].LeaveDate,
              "LeaveHour": data[i].LeaveHour,
              "LeaveMin": data[i].LeaveMin,
              "BackDate": data[i].BackDate,
              "BackHour": data[i].BackHour,
              "BackMin": data[i].BackMin,
              "LiveDateA": data[i].LiveDateA,
              "LiveDateB": data[i].LiveDateB,
              "LiveDateC": data[i].LiveDateC,
              "LiveDateD": data[i].LiveDateD,
              "LiveDateE": data[i].LiveDateE,
              "LiveDateF": data[i].LiveDateF,
              "LiveExtA": data[i].LiveExtA,
              "LiveExtB": data[i].LiveExtB,
              "LiveExtC": data[i].LiveExtC,
              "LiveExtD": data[i].LiveExtD,
              "LiveExtE": data[i].LiveExtE,
              "LiveExtF": data[i].LiveExtF,
              "Explanation": data[i].Explanation,
              "BackMin": data[i].BackMin,
              "Overspend": data[i].Overspend,
              "OverReason": data[i].OverReason,
              "IsOver": data[i].IsOver,
              "HotelName": data[i].HotelName,
              "HotelTel": data[i].HotelTel,
              "EntryDate": data[i].EntryDate,
              "BillStatus": data[i].BillStatus,
            }
            datas.push(temp)
          }
          // var dump = JSON.stringify(datas);
          // if (dump.length > 50) {
          //   console.log("暻频:" + dump.substring(0, 50));
          // } else {
          //   console.log("暻频:" + JSON.stringify(datas));
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
        " `CurName` ,`SendStatus`,`CurText` ,`track` ,`Level1` ,`OppWorkId` ,`OppName` ,`OppDate` ,`Level2` ,`MagWorkId` ,`MagName` ," +
        " `MagDate` ,`Level3` ,`VipWorkId` ,`VipDate` ,`VipName` ,  `Level4` ,`PurWorkId` ,`PurName` ,`PurDate` ,`Level5` ,`PexWorkId` ," +
        " `PexName` ,`PexDate` ,`Level6` ,`CfoWorkId` ,`CfoName` ,`CfoDate` ,`Level7` ,`PsdWorkId` ,`PsdName` ,`PsdDate` , " +
        " `Level8` ,`CeoWorkId` ,`CeoName` ,`CeoDate` ,`Level9` ,`BodWorkId` ,`BodName` ,`BodDate` ,`Reason`  from bgu_rule tba  " +
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
            }
            datas.push(temp)
          }
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
  function nulReplaceDate(passTxt) {
    var ret = '';
    ret = (passTxt == null || passTxt == undefined || passTxt == '') ? (null) : passTxt;
    return ret;
  }
}