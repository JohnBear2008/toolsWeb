require("../../client/js/Date.js");
require("../../client/js/funs.js");

module.exports = function (sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
    var async = require("async");
    var arrange = sender.req.query.arrange;
    let now = new Date();
    
    var ApplyDate = now.Format("yyyyMMdd");
    var ApplyYear = now.Format("yyyy");
    var EntryDate = now.Format("yyyyMMdd");
    var BudYear = now.Format("yyyy");
    var BudMonth = now.Format("MM");
    var BillNo =  "";
    var Formkind = "采购单";
    var FlowGroup = '';
    var FlowDept = '';
  
    var qryDept = '';
    var qryGroup = ''; 
    var Transaction = 0;
    if (arrange == 'saveSend') {
        var Advstr = sender.req.query.Advstr;
        var yjFun = require("./yjFun");
        let pwYY = yjFun.ExchYear(ApplyYear);
        var MD = now.Format("MMdd");
        var ListNo = Advstr.ListNo;
        var ApplicNo = Advstr.ApplicNo;
        var RequestDate = Advstr.RequestDate;
        var ProjectNo = Advstr.ProjectNo;
        qryDept = Advstr.DeptName;
        let DeptList = [];
        if (qryDept != "" && qryDept != undefined) {
            DeptList = qryDept.split(',');
            FlowDept = DeptList[0];
        }
        qryGroup = Advstr.GroupName;
        let GroupList = [];
        if (qryGroup != "" && qryGroup != undefined) {
            GroupList = qryGroup.split(',');
            FlowGroup = GroupList[0];
        }
        var StaffID = Advstr.StaffID;
        var StaffName = Advstr.StaffName;
        var TotalValue = Advstr.TotalValue;
        var RealValue = Advstr.RealValue;
        var Currency = Advstr.Currency;
        var Payment = Advstr.Payment;
        var Explanation = Advstr.Explanation;
        var EntryDate = now.Format("yyyyMMdd");
        var hideBillNo = Advstr.hideBillNo;
                BillNo = hideBillNo;
                PopupMain( ) ;
         
    } else {

    }
    function PopupMain( ) {
        let SQL2 =
          " select  `Transaction` from bgu_expmain tba  " +
          " where tba.BillNo= ?   ";
        yjDBService.exec({
          sql: SQL2,
          parameters: [BillNo],
          rowsAsArray: true,
          success: function (r) {
            var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
            for (var i = 0; i < data.length; i++) {
                Transaction =  data[i].Transaction ;
                console.log(" 长安城城管 ", Transaction);
            }
            clearMain(Transaction);
            // var dump = JSON.stringify(datas);
            // if (dump.length > 100) {
            //   console.log("彩暻:" + dump.substring(0, 100));
            // } else {
            //   console.log("彩暻:" + JSON.stringify(datas));
            // }
          
          },
          error: sender.error
        });
      }
    function saveDetail() {
        var sData = sender.req.query.sData;
        var EntryDate = ApplyDate;
        for (var i = 0; i < sData.length; i++) {
            var SNNo = sData[i].SNNo;
            var Subject = sData[i].Subject;
            var BudgetCID = sData[i].BudgetCID;
            var BudgetItem = sData[i].BudgetItem;
            var ItemNo = sData[i].ItemNo;
            var Descript = sData[i].Descript;
            var Unit = sData[i].Unit;
            var Remain = sData[i].Remain;
            var UnitPrice = sData[i].UnitPrice;
            var Quantity = sData[i].Quantity;
            var Subtotal = sData[i].Subtotal;
            var Realtotal = sData[i].Realtotal;
            var Delivery = sData[i].Delivery; Delivery = nulReplaceDate(Delivery);
            var Supplier = sData[i].Supplier;
            var Underburget = ((sData[i].Remain == '0') ? ('否') : ('是'));
            var AppendType = sData[i].AppendType;
            var Department = sData[i].Department;
            let paramList = [BillNo, SNNo, Subject, BudgetCID, BudgetItem, ItemNo, Descript, Unit,
                Remain, UnitPrice, Quantity, Subtotal, Realtotal , Delivery, Supplier, Underburget, AppendType, Department, EntryDate];
            if (ItemNo != "" && ItemNo != undefined) {
                var SQLInsert = "INSERT INTO `bgu_expdetail` (  `BillNo` , `SNNo`  , `Subject` , `BudgetCID` , `BudgetItem` , `ItemNo`  , `Description` , `Unit`   ,  " +
                    " `Remain` , `UnitPrice` ,  `Quantity` , `Subtotal` , `Realtotal` ,`Delivery` , `Supplier` ,  `Underburget` , `AppendType`, `Department` , `EntryDate`) " +
                    "  VALUES (?,?,?,?,?,?,?,?,?,?,  ?,?,?,?,?,?,?,?,?  )";
                yjDBService.exec({
                    sql: SQLInsert,
                    parameters: paramList,
                    rowsAsArray: true,
                    success: function (result) {
                        console.log("不可不胜:", StaffName ,ItemNo);
                        uptRuleStatus(StaffName ,ItemNo);
                    },
                    error: sender.error
                });
            }
        }
        
  
    }
    function clearMain() {
        let SQLDelete1 = "Delete From `bgu_expmain` where BillNo=?   ";
        let SQLDelete2 = "Delete From `bgu_expdetail` where BillNo=?   ";

        yjDBService.exec({
            sql: SQLDelete1,
            parameters: [hideBillNo],
            success: function (result) {

                yjDBService.exec({
                    sql: SQLDelete2,
                    parameters: [hideBillNo],
                    success: function (result2) {
                        saveMain();
                    },
                    error: {},
                });
            },
            error: {},
        });
    }
    function saveMain() {
        Transaction = nulReplace0(Transaction); Transaction = parseInt(Transaction, 10);
        Transaction = Transaction +1;
        var sData = sender.req.query.sData;
        var BudgetCID = sData[0].BudgetCID;
        var Subject = sData[0].Subject;
        var BudgetItem = sData[0].BudgetItem;
        let paramList = [BillNo, Formkind, Subject, BudgetCID, BudgetItem, ListNo,
            RequestDate, ProjectNo, ApplicNo, FlowDept, FlowGroup,
            StaffID, StaffName, TotalValue, RealValue, Currency, Payment,
            Explanation, Transaction , EntryDate];
        var SQLInsert = "INSERT INTO `bgu_expmain` ( `BillNo` , `Formkind` , `Subject` , `BudgetCID` , `BudgetItem` , `ListNo` ,  `RequestDate` , `ProjectNo` , `ApplicNo` ,  " +
            "`DeptName` , `GroupName` , `StaffID`  , `StaffName` ,  `TotalValue`  ,  `RealValue` ,`Currency` ,  `Payment` , `Explanation` , `Transaction` ,`EntryDate`  ) " +
            "  VALUES (?,?,?,?,?,?,?,?,?,?,  ?,?,?,?,?,?,?,?,?,  ?  )";
        yjDBService.exec({
            sql: SQLInsert,
            parameters: paramList,
            rowsAsArray: true,
            success: function (result) {
                console.log("冤孽:", result);
                saveDetail();
            },
            error: sender.error
        });
    }
    function uptRuleStatus(StaffName ,ItemNo) {
        var mobiles = [];
        var idlephone = '15052222222';
        mobiles.push(idlephone);
        if (BillNo != '' && BillNo != undefined) {

        } else {
            NoticeFail();
            console.log("不良件");
            return;
        }
        var SQLInsert = "Update `bgu_rule` set CurStatus  = 'T'  , CurText  = '结算' where BillNo= ?";
        yjDBService.exec({
            sql: SQLInsert,
            parameters: [BillNo],
            success: function (result) {
                Notice();
            },
            error: {},
        });
    }
    function nulReplaceTxt(passTxt) {
        var ret = '';
        ret = (passTxt == null || passTxt == undefined) ? ('') : passTxt;
        return ret;
    }
    function nulReplaceWord(passTxt, WordTxt) {
        var ret = '';
        WordTxt = (WordTxt == null || WordTxt == undefined) ? ('') : WordTxt;
        ret = (passTxt == null || passTxt == undefined) ? (WordTxt) : passTxt;
        return ret;
    }
    function validInput() {
        if (isNaN(RequestDate) && !isNaN(Date.parse(RequestDate))) {
            clearMain();
        } else {
            var retcode = { "status": "Fail", "message": "审批不成功", "BillNo": BillNo };
            sender.success(retcode);
            console.log("错误@@日期格式", retcode);
        }
    }
    function Notice() {
        var retcode = { "status": "OK", "message": "财务结算金额完成", "BillNo": BillNo  };
        console.log("结算OK",retcode);
        sender.success(retcode);
    }
    function NoticeFail() {
        var retcode = { "status": "Fail", "message": "结算金额不成功" };
        console.log("结算不OK",retcode);
        sender.success(retcode);
    }
    function nulReplaceDate(passTxt) {
        var ret = '';
        ret = (passTxt == null || passTxt == undefined || passTxt == '') ? (null) : passTxt;
        return ret;
    }
    function nulReplace0(passTxt) {
        var ret = '';
        ret = (passTxt == null || passTxt == undefined) ? ('0') : passTxt;
        return ret;
    }
}
