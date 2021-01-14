require("../../client/js/Date.js");
require("../../client/js/funs.js");
module.exports = function (sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
    var async = require("async");
    var arrange = sender.req.query.arrange;
    let now = new Date();
    var swift = Math.random(100) * 100;
    swift = swift.toFixed(0);
    if (swift.length < 2) {
        swift = '0' + swift;
    }
    var ApplyDate = now.Format("yyyyMMdd");
    var BILLDate = now.Format("yyyyMMddHHmm") + swift;
    var billNo = BILLDate + "";
    var Subject = "采购申请单";
    var TESTstaffUser = 'wqy';
    if (arrange == 'confirm') {
        uptRuleStatus();
    } else if (arrange == 'saveSend') {
        var Advstr = sender.req.query.Advstr;
        var ListNo = Advstr.ListNo;
        var RequestDate = Advstr.RequestDate;
        var ProjectNo = Advstr.ProjectNo;
        var ApplicNo = Advstr.ApplicNo;
        var DeptName = Advstr.DeptName;
        var StaffID = Advstr.StaffID;
        var StaffName = Advstr.StaffName;
        var TotalValue = Advstr.TotalValue;
        var Currency = Advstr.Currency;
        var Payment = Advstr.Payment;
        var Explanation = Advstr.Explanation;
        var EntryDate = now.Format("yyyyMMdd");
        var hideBillNo = Advstr.hideBillNo;
        validInput();
    } else if (arrange == 'loadSend') {
        loadSend();
    } else {

    }

    function saveRule() {
        var UpperLimit = '';
        var flagLimit = 'N';
        var TermiLevel = '';
        var CurWorkId = '';
        var CurName = '';
        var OppWorkId = '';
        var OppName = '';
        var DptWorkId = '';
        var DptName = '';
        var VipWorkId = '';
        var VipName = '';
        var PurWorkId = '';
        var PurName = '';
        var PexWorkId = '';
        var PexName = '';
        var CfoWorkId = '';
        var CfoName = '';
        var PsdWorkId = '';
        var PsdName = '';
        var CeoWorkId = '';
        var CeoName = '';
        var BodWorkId = '';
        var BodName = '';
        var Track = '';
        var sData = sender.req.query.sData;
        var BudStr = sData[0].BudgetItem;
        var BudgetType = BudStr.substring(0, 1);
        console.log(">>>科目AB：", BudgetType, "血型", BudStr);
        async.parallel([FunLimit, FunOrig, FunSubject],
            function (err, result) {
                if (err) {

                } else {

                    for (var i = 0; i < 1; i++) {
                        if (result[0][i] == null || result[0][i] == undefined) {
                            UpperLimit = '0';
                        } else {
                            UpperLimit = result[0][i].UpperLimit;
                            if (TotalValue > UpperLimit) {  //超过预算
                                flagLimit = 'Y';
                                if (BudgetType == 'A') {
                                    TermiLevel = '8';
                                }
                                if (BudgetType == 'B') {
                                    TermiLevel = '6';
                                }
                                console.log(">>>超过预算", UpperLimit, "崔崔", BudgetType);
                            } else {
                                if (BudgetType == 'A') {
                                    TermiLevel = '6';
                                }
                                if (BudgetType == 'B') {
                                    TermiLevel = '4';
                                }
                                console.log("<<<未达预算", UpperLimit, "崔崔", BudgetType);
                            }
                        }
                        if (result[1][i] == null || result[1][i] == undefined) {
                        } else {
                            OppWorkId = result[1][i].OppWorkId;
                            OppName = result[1][i].OppName;
                            DptWorkId = result[1][i].DptWorkId;
                            DptName = result[1][i].DptName;
                            VipWorkId = result[1][i].VipWorkId;
                            VipName = result[1][i].VipName;
                            if (BudgetType == 'A') {
                                PurWorkId = result[1][i].PurWorkId;
                                PurName = result[1][i].PurName;
                                PexWorkId = result[1][i].PexWorkId;
                                PexName = result[1][i].PexName;
                            }
                            CfoWorkId = result[1][i].CfoWorkId;
                            CfoName = result[1][i].CfoName;
                            PsdWorkId = result[1][i].PsdWorkId;
                            PsdName = result[1][i].PsdName;
                            if (flagLimit == 'Y') {
                                CeoWorkId = result[1][i].CeoWorkId;
                                CeoName = result[1][i].CeoName;
                                BodWorkId = result[1][i].BodWorkId;
                                BodName = result[1][i].BodName;
                            } else {

                            }
                            CurWorkId = DptWorkId;
                            CurName = DptName;
                        }
                        if (result[2][i] == null || result[2][i] == undefined) {
                            Track = '[{"Level1":"adm","Level2":"dpt","Level3":"vip","Level4":"pur","Level5":"pEx","Level6":"cfo","Level7":"psd","Level8":"ceo","Level9":"bod"}]';
                        } else {
                            Track = result[2][i].Track;
                            // console.log("導航條", result[1][i]);
                        }
                    }
                    handleRule(TermiLevel, CurWorkId, CurName, OppWorkId, OppName, DptWorkId, DptName, VipWorkId, VipName, PurWorkId, PurName, PexWorkId, PexName,
                        CfoWorkId, CfoName, PsdWorkId, PsdName, CeoWorkId, CeoName, BodWorkId, BodName, Track);
                }
            });
        function FunLimit(cb) {
            var StaffName = '周筱龙';
            let SQL2 = "select tvip.StaffID , tvip.StaffName ,tquo.UpperLimit from  bgu_staffs tba " +
                "LEFT JOIN bgu_staffs tvip on tba.DeptLabel =tvip.DeptLabel and tvip.staffLevel='3' " +
                "LEFT JOIN bgu_quota tquo on tvip.StaffName = tquo.StaffName  " +
                "where tba.StaffName= ? ";
            yjDBService.exec({
                sql: SQL2,
                parameters: [StaffName],
                rowsAsArray: true,
                success: function (r) {
                    var datas = [];
                    var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                    for (var i = 0; i < data.length; i++) {
                        UpperLimit = data[i].UpperLimit;
                        var temp = {
                            "UpperLimit": UpperLimit,
                        }
                        // console.log("仔延:" + JSON.stringify(temp));
                        datas.push(temp)
                    }
                    cb(null, datas);
                },
                error: sender.error
            });
        }
        function FunOrig(cb) {
            let SQL3 =
            // select tba.staffID, tba.staffName, tdpt.staffID, tdpt.staffName, tvip.staffID, tvip.staffName
            // , tpur.staffID, tpur.staffName, tpex.staffID, tpex.staffName, tcfo.staffID, tcfo.staffName
            // , tpsd.staffID, tpsd.staffName, tceo.staffID, tceo.staffName, tbod.staffID, tbod.staffName
            // from  bgu_staffs tba
            // LEFT JOIN bgu_staffs tdpt on tba.groupLabel = tdpt.groupLabel and tdpt.staffLevel = '2'
            // LEFT JOIN bgu_staffs tvip on tvip.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tvip.staffLevel = '3'
            // LEFT JOIN bgu_staffs tpur on tpur.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tpur.staffLevel = '4'
            // LEFT JOIN bgu_staffs tpex on tpex.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tpex.staffLevel = '5'
            // LEFT JOIN bgu_staffs tcfo on tcfo.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tcfo.staffLevel = '6'
            // LEFT JOIN bgu_staffs tpsd on tpsd.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tpsd.staffLevel = '7'
            // LEFT JOIN bgu_staffs tceo on tceo.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tceo.staffLevel = '8'
            // LEFT JOIN bgu_staffs tbod on tbod.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tbod.staffLevel = '9'
            // where  tba.staffName = '王启源'

            " select tba.StaffID as OppWorkId,tba.StaffName as OppName ,tdpt.StaffID as DptWorkId, tdpt.StaffName as DptName,tvip.StaffID as VipWorkId, tvip.StaffName as VipName" +
                " ,tpur.StaffID as PurWorkId, tpur.StaffName as PurName,tpex.StaffID as PexWorkId, tpex.StaffName as PexName,tcfo.StaffID as CfoWorkId, tcfo.StaffName as CfoName" +
                " ,tpsd.StaffID as PsdWorkId, tpsd.StaffName as PsdName,tceo.StaffID as CeoWorkId, tceo.StaffName as CeoName,tbod.StaffID as BodWorkId, tbod.StaffName as BodName " +
                " from  bgu_staffs tba  " +
                " LEFT JOIN bgu_staffs tdpt on tba.GroupLabel  =tdpt.GroupLabel and tdpt.staffLevel='2' " +
                " LEFT JOIN bgu_staffs tvip on tvip.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tvip.staffLevel='3' " +
                " LEFT JOIN bgu_staffs tpur on tpur.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tpur.staffLevel='4' " +
                " LEFT JOIN bgu_staffs tpex on tpex.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tpex.staffLevel='5' " +
                " LEFT JOIN bgu_staffs tcfo on tcfo.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tcfo.staffLevel='6' " +
                " LEFT JOIN bgu_staffs tpsd on tpsd.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tpsd.staffLevel='7' " +
                " LEFT JOIN bgu_staffs tceo on tceo.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tceo.staffLevel='8' " +
                " LEFT JOIN bgu_staffs tbod on tbod.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tbod.staffLevel='9' " +
                " where  tba.StaffName= ?  ";
            var OppWorkId = StaffID;   
            var OppName = StaffName;
            var DptWorkId = '';
            var DptName = '';
            var VipWorkId = '';
            var VipName = '';
            var PurWorkId = '';
            var PurName = '';
            var PexWorkId = '';
            var PexName = '';
            var CfoWorkId = '';
            var CfoName = '';
            var PsdWorkId = '';
            var PsdName = '';
            var CeoWorkId = '';
            var CeoName = '';
            var BodWorkId = '';
            var BodName = '';
            console.log(" 遛伊 ", OppWorkId);
            console.log(" 遛伊 ", OppName);
            yjDBService.exec({
                sql: SQL3,
                parameters: [StaffName],
                rowsAsArray: true,
                success: function (r) {
                    var datas = [];
                    var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                    if (data.length == 0) {
                        var retcode = { "status": "Fail", "message": "送审不成功，没有使用者", "BillNo": billNo };
                        sender.success(retcode);
                        console.log("瑜@@", retcode);
                    }
                    for (var i = 0; i < data.length; i++) {
                        DptWorkId = data[i].DptWorkId;
                        DptName = data[i].DptName;
                        VipWorkId = data[i].VipWorkId;
                        VipName = data[i].VipName;
                        PurWorkId = data[i].PurWorkId;
                        PurName = data[i].PurName;
                        PexWorkId = data[i].PexWorkId;
                        PexName = data[i].PexName;
                        CfoWorkId = data[i].CfoWorkId;
                        CfoName = data[i].CfoName;
                        PsdWorkId = data[i].PsdWorkId;
                        PsdName = data[i].PsdName;
                        CeoWorkId = data[i].CeoWorkId;
                        CeoName = data[i].CeoName;
                        BodWorkId = data[i].BodWorkId;
                        BodName = data[i].BodName;
                        var temp = {
                            "OppWorkId": OppWorkId,
                            "OppName": OppName,
                            "DptWorkId": DptWorkId,
                            "DptName": DptName,
                            "VipWorkId": VipWorkId,
                            "VipName": VipName,
                            "PurWorkId": PurWorkId,
                            "PurName": PurName,
                            "PexWorkId": PexWorkId,
                            "PexName": PexName,
                            "CfoWorkId": CfoWorkId,
                            "CfoName": CfoName,
                            "PsdWorkId": PsdWorkId,
                            "PsdName": PsdName,
                            "CeoWorkId": CeoWorkId,
                            "CeoName": CeoName,
                            "BodWorkId": BodWorkId,
                            "BodName": BodName,
                        }
                        datas.push(temp)
                        // console.log("定延:" + JSON.stringify(temp));
                    }
                    cb(null, datas);
                },
                error: sender.error
            });
        }
        function FunSubject(cb) {
            console.log("A或B:", BudgetType);
            var Track = '';
            let SQL4 =
                " select Track from  bgu_rule_def where RuleType =?  ";
            yjDBService.exec({
                sql: SQL4,
                parameters: [BudgetType],
                rowsAsArray: true,
                success: function (r) {
                    var datas = [];
                    var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                    for (var i = 0; i < data.length; i++) {
                        Track = data[i].Track;
                        var temp = {
                            "Track": Track,
                        }
                        // console.log("看延:" + JSON.stringify(temp));
                        datas.push(temp);
                    }
                    cb(null, datas);
                },
                error: sender.error
            });
        }
    }
    function handleRule(TermiLevel, CurWorkId, CurName, OppWorkId, OppName, DptWorkId, DptName, VipWorkId, VipName, PurWorkId, PurName, PexWorkId, PexName,
        CfoWorkId, CfoName, PsdWorkId, PsdName, CeoWorkId, CeoName, BodWorkId, BodName, Track) {
        let paramList = [];
        var UpperLimit = '';
        var flagLimit = 'N';
        var BudgetType = 'A';
        var EntryDate = ApplyDate;
        var GroupLabel = 'MIS';
        var CurStatus = 'P';
        var CurText = '审批';
        var CurLevel = '1';
        var SendStatus = 'K';
        var SendText = '保存';

        let SQLInsert = "INSERT INTO `bgu_rule` ( `billNo`,  `EntryDate` ,  `GroupLabel`, `StaffID`, `StaffName`,  " +
            " `CurStatus`, `CurText`,  `SendStatus`, `SendText`, `CurLevel`,  `TermiLevel`, `CurWorkId`, `CurName`," +
            " `Track`, `OppWorkId`, `OppName`, `oppDate`,  `DptWorkId`, `DptName`, `VipWorkId`, `VipName`,  `PurWorkId`, " +
            " `PurName`,   `PexWorkId`, `PexName`,   `CfoWorkId`, `CfoName`,  `PsdWorkId`, `PsdName`,  " +
            "  `CeoWorkId`, `CeoName`,  `BodWorkId`, `BodName` )" +
            " Values (  '" + billNo + "',  '" + EntryDate + "' ,  '" + GroupLabel + "', '" + StaffID + "', '" + StaffName + "',  " +
            " '" + CurStatus + "', '" + CurText + "', '" + SendStatus + "', '" + SendText + "', '" + CurLevel + "', " +
            " '" + TermiLevel + "', '" + CurWorkId + "', '" + CurName + "',  " +
            " '" + Track + "' , '" + OppWorkId + "' , '" + OppName + "' , '" + EntryDate + "' ,  '" + DptWorkId + "', '" + DptName + "',  '" + VipWorkId + "', '" + VipName + "', " +
            "    '" + PurWorkId + "',  '" + PurName + "',   '" + PexWorkId + "', '" + PexName + "',  '" + CfoWorkId + "', '" + CfoName + "',  " +
            "   '" + PsdWorkId + "', '" + PsdName + "'," +
            " '" + CeoWorkId + "', '" + CeoName + "', '" + BodWorkId + "', '" + BodName + "' ) ";

        yjDBService.exec({
            sql: SQLInsert,
            parameters: paramList,
            rowsAsArray: true,
            success: function (result) {
                // var data=yjDB.dataSet2ObjectList(result.meta,result.rows);
                console.log(result);
                var retcode = { "status": "OK", "message": "送审完成", "BillNo": billNo };
                sender.success(retcode);
                console.log("昭@@", retcode);
            },
            error: sender.error
        });

    }
    function saveDetail() {
        var sData = sender.req.query.sData;
        for (var i = 0; i < sData.length; i++) {
            var SNNo = sData[i].SNNo;
            var BudgetItem = sData[i].BudgetItem;
            var ItemNo = sData[i].ItemNo;
            var Descript = sData[i].Descript;
            var Unit = sData[i].Unit;
            var Remain = sData[i].Remain;
            var UnitPrice = sData[i].UnitPrice;
            var Quantity = sData[i].Quantity;
            var Subtotal = sData[i].Subtotal;
            var Delivery = sData[i].Delivery;
            var Supplier = sData[i].Supplier;
            var Underburget = sData[i].Underburget;
            var AppendType = sData[i].AppendType;
            var Department = sData[i].Department;
            let paramList = [billNo, SNNo, BudgetItem, ItemNo, Descript, Unit,
                Remain, UnitPrice, Quantity, Subtotal, Delivery, Supplier, Underburget, AppendType, Department];
            if (ItemNo != "" && ItemNo != undefined) {
                var SQLInsert = "INSERT INTO `bgu_purchdetail` (  `billNo` , `SNNo`  , `BudgetItem` , `ItemNo`  , `Description` , `Unit`   ,  " +
                    " `Remain` , `UnitPrice` ,  `Quantity` , `Subtotal` , `Delivery` , `Supplier` ,  `Underburget` , `AppendType`, `Department` ) " +
                    "  VALUES (?,?,?,?,?,?,?,?,?,?,  ?,?,?,?,?  )";

                yjDBService.exec({
                    sql: SQLInsert,
                    parameters: paramList,
                    rowsAsArray: true,
                    success: function (result) {
                        console.log("saveDetail:", result);
                        saveRule();
                    },
                    error: sender.error
                });
            }
        }
    }
    function validInput() {
        if (isNaN(RequestDate) && !isNaN(Date.parse(RequestDate))) {
            // console.log("data是日期格式！");
            clearMain();
        } else {
            var retcode = { "status": "Fail", "message": "审批不成功", "BillNo": billNo };
            sender.success(retcode);
            console.log("错误@@日期格式", retcode);
        }
    }
    function clearMain() {
        let SQLDelete1 = "Delete From `bgu_purchmain` where BillNo=?   ";
        let SQLDelete2 = "Delete From `bgu_purchdetail` where BillNo=?   ";
        let SQLDelete3 = "Delete From `bgu_rule` where BillNo=?   ";

        yjDBService.exec({
            sql: SQLDelete1,
            parameters: [hideBillNo],
            success: function (result) {

                yjDBService.exec({
                    sql: SQLDelete2,
                    parameters: [hideBillNo],
                    success: function (result2) {

                        yjDBService.exec({
                            sql: SQLDelete3,
                            parameters: [hideBillNo],
                            rowsAsArray: true,
                            success: function (result) {
                                saveMain();
                            },
                            error: sender.error
                        });
                    },
                    error: {},
                });
            },
            error: {},
        });
    }
    function saveMain() {
        let paramList = [billNo, Subject,
            ListNo, RequestDate, ProjectNo, ApplicNo, DeptName,
            StaffID, StaffName, TotalValue, Currency,
            Payment, Explanation, EntryDate];
        // console.log('申请', paramList);
        var SQLInsert = "INSERT INTO `bgu_purchmain` ( `billNo` , `Subject`, `ListNo` ,  `RequestDate` , `ProjectNo` , `ApplicNo` ,  " +
            "`DeptName` , `StaffID`  , `StaffName` ,  `TotalValue`  , `Currency` ,  `Payment` , `Explanation` ,`EntryDate`  ) " +
            "  VALUES (?,?,?,?,?,?,?,?,?,?,  ?,?,?,?  )";
        yjDBService.exec({
            sql: SQLInsert,
            parameters: paramList,
            rowsAsArray: true,
            success: function (result) {
                // var data=yjDB.dataSet2ObjectList(result.meta,result.rows);
                saveDetail();
            },
            error: sender.error
        });
    }
    function uptRuleStatus() {
        var Basstr = sender.req.query.Basstr;
        var hideBillNo = Basstr.hideBillNo;
        console.log('送修', hideBillNo);
        var SQLInsert = "Update `bgu_rule` set SendStatus  = 'D'  , SendText  = '送出' where BillNo= ?";
        yjDBService.exec({
            sql: SQLInsert,
            parameters: [hideBillNo],
            success: function (result) {
                var retcode = { "status": "OK", "message": "送审完成", "BillNo": hideBillNo };
                sender.success(retcode);
                console.log("懿@@", retcode);
            },
            error: {},
        });
    }

    function nulReplaceTxt(passTxt) {
        var ret = '';
        ret = (passTxt == null || passTxt == undefined) ? ('') : passTxt;
        return ret;
    }
}