require("../../client/js/Date.js");
require("../../client/js/funs.js");

module.exports = function (sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
    var async = require("async");
    var arrange = sender.req.query.arrange;
    var edituse = sender.req.query.edituse;
    var editmoney = sender.req.query.editmoney;
    let now = new Date();
    var swift = Math.random(100) * 100;
    swift = swift.toFixed(0);
    if (swift.length < 2) {
        swift = '0' + swift;
    }
    var ApplyDate = now.Format("yyyyMMdd");
    var ApplyYear = now.Format("yyyy");
    var BILLDate = now.Format("yyyyMMddHHmm") + swift;
    var EntryDate = now.Format("yyyyMMdd");
    var BudYear = now.Format("yyyy");
    var BudMonth = now.Format("MM");
    var BillNo = BILLDate + "";
    var Formkind = "采购单";
    var FlowGroup = '';
    var FlowDept = '';
    var FlowUnit = '';
    var FlowRole = '';
    var FlowVip = '';
    var FlowCID = '';
    var FlowItem = '';
    var flowphone = '';
    var qryDept = '';
    var qryGroup = '';
    var Smalltotal = 0;
    var IsAuditChange = 'N';
    if (arrange == 'confirm') {
        chkNextAudit();
    } else if (arrange == 'saveSend') {
        var Advstr = sender.req.query.Advstr;
        var yjFun = require("./yjFun");
        let pwYY = yjFun.ExchYear(ApplyYear);
        var MD = now.Format("MMdd");
        var ListNo = pwYY + MD + swift + 'PL';
        var ApplicNo = pwYY + MD + swift + 'PA';
        var RequestDate = Advstr.RequestDate;
        var ProjectNo = Advstr.ProjectNo;
        qryDept = Advstr.DeptName;
        FlowUnit = Advstr.UnitName;
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
        var Currency = Advstr.Currency;
        var Payment = Advstr.Payment;
        var Explanation = Advstr.Explanation;
        var EntryDate = now.Format("yyyyMMdd");
        var hideBillNo = Advstr.hideBillNo;

        if (editmoney == 'U') {
            BillNo = hideBillNo;
            console.log("肩挑凡世", BillNo);
            clearMoney();
        } else {
            if (edituse == 'U') {
                BillNo = hideBillNo;
                console.log(" 心魔叫嚣", BillNo);
            }
            validOrig();
        }
    } else {

    }

    function validOrig() {
        var sData = sender.req.query.sData;
        var BudgetCID = sData[0].BudgetCID;
        FlowItem = sData[0].BudgetItem;
        if (BudgetCID != null && BudgetCID != undefined) {
            var BudgetBID = BudgetCID.substring(1, 2); BudgetBID = nulReplaceWord(BudgetBID, "0");
            FlowCID = BudgetCID;
        }
        var StaffRole = "采购承办人";
        if (BudgetBID == "1") {
            StaffRole = "资讯承办人";
        } else if (BudgetBID == "2") {
            StaffRole = "行政承办人";
        } else {
            StaffRole = "采购承办人";
        }
        console.log("刘备", StaffRole, "露娜", FlowGroup, FlowDept, FlowCID, FlowItem);
        let SQL3 =
            " select tba.StaffID as OppWorkId,tba.StaffName as OppName ,tdpt.Mobiles ,tdpt.StaffID as MagWorkId, tdpt.StaffName as MagName,tvip.StaffID as VipWorkId, tvip.StaffName as VipName" +
            " ,tpur.StaffID as PurWorkId, tpur.StaffName as PurName,tpex.StaffID as PexWorkId, tpex.StaffName as PexName,tcfo.StaffID as CfoWorkId, tcfo.StaffName as CfoName" +
            " ,tpsd.StaffID as PsdWorkId, tpsd.StaffName as PsdName,tceo.StaffID as CeoWorkId, tceo.StaffName as CeoName,tbod.StaffID as BodWorkId, tbod.StaffName as BodName " +
            " from  bgu_staffs tba  " +
            " LEFT JOIN bgu_staffs tdpt on tdpt.GroupLabel like CONCAT('%', '" + FlowGroup + "', '%')  and tdpt.staffLevel='2' " +
            " LEFT JOIN bgu_staffs tvip on tvip.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tvip.staffLevel='3' " +
            " LEFT JOIN bgu_staffs tpur on tpur.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tpur.staffLevel='4' and tpur.StaffRole='" + StaffRole + "' " +
            " LEFT JOIN bgu_staffs tpex on tpex.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tpex.staffLevel='5' " +
            " LEFT JOIN bgu_staffs tcfo on tcfo.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tcfo.staffLevel='6' " +
            " LEFT JOIN bgu_staffs tpsd on tpsd.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tpsd.staffLevel='7' " +
            " LEFT JOIN bgu_staffs tceo on tceo.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tceo.staffLevel='8' " +
            " LEFT JOIN bgu_staffs tbod on tbod.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tbod.staffLevel='9' " +
            " where  tba.DeptLabel =? and tba.StaffLevel='1'  and tba.StaffName=?   ";
        var OppWorkId = StaffID;
        var OppName = StaffName;
        var MagName = '';
        var VipName = '';
        var PurName = '';
        var PexName = '';
        var CfoName = '';
        var PsdName = '';
        var CeoName = '';
        var BodName = '';
        var Flag = '1';

        yjDBService.exec({
            sql: SQL3,
            parameters: [FlowDept, OppName],
            rowsAsArray: true,
            success: function (r) {
                var datas = [];
                var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                for (var i = 0; i < data.length; i++) {
                    flowphone = data[i].Mobiles;
                    MagName = data[i].MagName;
                    VipName = data[i].VipName;
                    PurName = data[i].PurName;
                    PexName = data[i].PexName;
                    CfoName = data[i].CfoName;
                    PsdName = data[i].PsdName;
                    CeoName = data[i].CeoName;
                    BodName = data[i].BodName;
                    console.log("裴擒虎", MagName, VipName, PurName, PexName, CfoName, PsdName, CeoName, BodName);
                }
                if (MagName != "" && MagName != undefined) {
                    if (MagName == StaffName) {
                        FlowRole = '部门主管';
                    }
                } else {
                    Flag = '0';
                }
                if (VipName != "" && VipName != undefined) {
                    if (VipName == StaffName) {
                        FlowRole = '副总';
                    }
                } else {
                    Flag = '0';
                }
                if (PurName != "" && PurName != undefined) {
                } else {
                    Flag = '0';
                }
                if (PexName != "" && PexName != undefined) {
                } else {
                    Flag = '0';
                }
                if (CfoName != "" && CfoName != undefined) {
                } else {
                    Flag = '0';
                }
                if (PsdName != "" && PsdName != undefined) {
                } else {
                    Flag = '0';
                }
                if (CeoName != "" && CeoName != undefined) {
                } else {
                    Flag = '0';
                }
                if (BodName != "" && BodName != undefined) {
                } else {
                    Flag = '0';
                }
                if (Flag == '0') {
                    var retcode = { "status": "Fail", "message": "送审不成功，审批人不完整", "BillNo": BillNo };
                    sender.success(retcode);
                    console.log("裴虎", retcode);
                } else {
                    clearMain();
                }
            },
            error: sender.error
        });
    }
    function saveRule() {
        var UpperLimit = '';
        var flagLimit = 'N';
        var TermiLevel = '';
        var CurWorkId = '';
        var CurName = '';
        var CurJob = '';
        var OppWorkId = '';
        var OppName = '';
        var MagWorkId = '';
        var MagName = '';
        var MagDate = '';
        var VipWorkId = '';
        var VipName = '';
        var VipDate = '';
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
        var BudgetItem = sData[0].BudgetItem;
        var Subject = sData[0].Subject;
        var BudgetCID = sData[0].BudgetCID;
        if (BudgetCID != null && BudgetCID != undefined) {
            var BudgetBID = BudgetCID.substring(1, 2); BudgetBID = nulReplaceWord(BudgetBID, "0"); FlowCID = BudgetCID;
            var BudgetType = BudgetCID.substring(0, 1); BudgetCID = nulReplaceWord(BudgetCID, "0");
        }
        async.parallel([FunLimit, FunOrig, FunSubject],
            function (err, result) {
                if (err) {
                } else {
                    for (var i = 0; i < 1; i++) {
                        if (result[0][i] == null || result[0][i] == undefined) {
                            UpperLimit = '0';
                        } else {
                            UpperLimit = result[0][i].UpperLimit;
                            if (IsAuditChange == 'Y') {  //超过预算
                                flagLimit = 'Y';
                                if (BudgetType == 'A') {
                                    TermiLevel = '6';
                                }
                                if (BudgetType == 'B') {
                                    TermiLevel = '8';
                                }
                                console.log(">>>超过预算", UpperLimit, "项目", BudgetType);
                            } else {
                                if (BudgetType == 'A') {
                                    TermiLevel = '4';
                                }
                                if (BudgetType == 'B') {
                                    TermiLevel = '6';
                                }
                                // console.log("<<<未达预算", UpperLimit, "项目", BudgetType);
                            }
                        }
                        if (result[1][i] == null || result[1][i] == undefined) {
                        } else {
                            OppWorkId = result[1][i].OppWorkId;
                            OppName = result[1][i].OppName;
                            MagWorkId = result[1][i].MagWorkId;
                            MagName = result[1][i].MagName;
                            VipWorkId = result[1][i].VipWorkId;
                            VipName = result[1][i].VipName;
                            if (BudgetType == 'B') {
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
                            var CurLevel = '1';
                            if (FlowRole == '副总' || FlowRole == '总经理' || FlowRole == '财务总监' || FlowRole == 'CEO' || FlowRole == '董事长') {
                                if (BudgetType == 'B') {
                                    CurJob = 'pur';
                                    CurWorkId = PurWorkId;
                                    CurName = PurName;
                                } else {
                                    CurJob = 'cfo';
                                    CurWorkId = CfoWorkId;
                                    CurName = CfoName;
                                }
                                VipDate = ApplyDate;
                                MagDate = ApplyDate;
                                CurLevel = '3';
                            } else if (FlowRole == '部门主管') {
                                CurWorkId = VipWorkId;
                                CurName = VipName;
                                VipDate = nulReplaceDate(VipDate);
                                MagDate = ApplyDate;
                                CurJob = 'vip';
                                CurLevel = '2';
                            } else if (FlowRole == '文员') {
                                CurWorkId = MagWorkId;
                                CurName = MagName;
                                VipDate = nulReplaceDate(VipDate);
                                MagDate = nulReplaceDate(MagDate);
                                CurJob = 'dpt';
                                CurLevel = '1';
                            } else {
                                CurWorkId = MagWorkId;
                                CurName = MagName;
                                VipDate = nulReplaceDate(VipDate);
                                MagDate = nulReplaceDate(MagDate);
                                CurJob = 'dpt';
                                CurLevel = '1';
                            }
                        }
                        if (result[2][i] == null || result[2][i] == undefined) {
                            Track = '[{"Level1":"adm","Level2":"dpt","Level3":"vip","Level4":"pur","Level5":"pEx","Level6":"cfo","Level7":"psd","Level8":"ceo","Level9":"bod"}]';
                        } else {
                            Track = result[2][i].Track;
                            // console.log("導航條", result[1][i]);
                        }
                    }
                    handleRule(TermiLevel, CurLevel, CurWorkId, CurName, CurJob, OppWorkId, OppName, MagWorkId, MagName, MagDate, VipWorkId, VipName, VipDate, PurWorkId, PurName, PexWorkId, PexName,
                        CfoWorkId, CfoName, PsdWorkId, PsdName, CeoWorkId, CeoName, BodWorkId, BodName, Track);
                }
            });
        function FunLimit(cb) {
            var sData = sender.req.query.sData;
            var IsZero = 'N';
            for (var i = 0; i < sData.length; i++) {
                if (sData[i].Remain == '0') {
                    IsZero = 'Y';
                }
                Smalltotal = sData[0].Subtotal;
            }
            let SQLExecute =
                " select 'A' as Rank, AllowMoney as AllowValue, Accumulate , Surplus ,IsOver from bgu_quota " +
                " where BudgetItem =? and BudYear = ? and DeptName = ?  " +
                " Union " +
                " select 'B' as Rank, UpperLimit  as AllowValue, Accumulate , Surplus ,IsOver from bgu_buffer " +
                " where  BffType = 'A' and BudYear =? and BudMonth = ? ";
            let paramelist = [FlowItem, BudYear, FlowUnit, BudYear, BudMonth];
            console.log("控股", FlowItem, BudYear, FlowUnit, BudYear, BudMonth)
            yjDBService.exec({
                sql: SQLExecute,
                parameters: paramelist,
                rowsAsArray: true,
                success: function (result) {
                    var data = yjDB.dataSet2ObjectList(result.meta, result.rows);
                    var UpperLimit = 0;
                    var UpperLimitB = 0;
                    var Surplus = 0;
                    var qryAIsOver = '';
                    var IsQuoOver = '';  //提交$减项目$ 
                    var qryBIsOver = '';
                    var datas = [];
                    for (var i = 0; i < data.length; i++) {
                        var Rank = data[i].Rank;
                        if (Rank == 'A') {
                            qryAIsOver = data[i].IsOver;
                            Surplus = data[i].Surplus;
                            Surplus = nulReplace0(Surplus); Surplus = parseInt(Surplus, 10);
                            UpperLimit = Surplus;
                        }
                        if (Rank == 'B') {
                            qryBIsOver = data[i].IsOver;
                            Surplus = data[i].Surplus;
                            Surplus = nulReplace0(Surplus);
                            Surplus = parseInt(Surplus, 10);
                            UpperLimitB = Surplus;
                        }
                    }
                    let now = new Date();
                    var labDate = now.Format("yyyyMMdd");
                    RequestDate = labDate;
                    if(Smalltotal > UpperLimit ){
                        IsQuoOver ='Y';
                    }
                    console.log("很报歉",Smalltotal , UpperLimit);
                    if (IsZero == 'Y' && qryBIsOver == 'Y') {
                        IsAuditChange = 'Y';
                    }
                    if (IsQuoOver == 'Y' && qryBIsOver == 'Y') {
                        IsAuditChange = 'Y';
                    }
                    console.log("双飞:", IsQuoOver, "求", qryAIsOver, "天", qryBIsOver);
                    var temp = {
                        "UpperLimit": UpperLimit,
                        "UpperLimitB": UpperLimitB,
                        "IsAuditChange": IsAuditChange,
                    }
                    console.log("飞翼:" + JSON.stringify(temp));
                    datas.push(temp)
                    cb(null, datas);
                }
            });
        }
        function FunOrig(cb) {
            var StaffRole = "采购承办人";
            if (BudgetBID == "1") {
                StaffRole = "资讯承办人";
            } else if (BudgetBID == "2") {
                StaffRole = "行政承办人";
            } else {
                StaffRole = "采购承办人";
            }
            let SQL3 =
                " select tba.Mobiles as OppWorkId,tba.StaffName as OppName ,tdpt.Mobiles as MagWorkId, tdpt.StaffName as MagName,tvip.Mobiles as VipWorkId, tvip.StaffName as VipName" +
                " ,tpur.Mobiles as PurWorkId, tpur.StaffName as PurName,tpex.Mobiles as PexWorkId, tpex.StaffName as PexName,tcfo.Mobiles as CfoWorkId, tcfo.StaffName as CfoName" +
                " ,tpsd.Mobiles as PsdWorkId, tpsd.StaffName as PsdName,tceo.Mobiles as CeoWorkId, tceo.StaffName as CeoName,tbod.Mobiles as BodWorkId, tbod.StaffName as BodName " +
                " from  bgu_staffs tba  " +
                " LEFT JOIN bgu_staffs tdpt on tdpt.GroupLabel like CONCAT('%', '" + FlowGroup + "', '%')  and tdpt.staffLevel='2' " +
                " LEFT JOIN bgu_staffs tvip on tvip.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tvip.staffLevel='3' " +
                " LEFT JOIN bgu_staffs tpur on tpur.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tpur.staffLevel='4' and tpur.StaffRole='" + StaffRole + "' " +
                " LEFT JOIN bgu_staffs tpex on tpex.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tpex.staffLevel='5' " +
                " LEFT JOIN bgu_staffs tcfo on tcfo.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tcfo.staffLevel='6' " +
                " LEFT JOIN bgu_staffs tpsd on tpsd.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tpsd.staffLevel='7' " +
                " LEFT JOIN bgu_staffs tceo on tceo.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tceo.staffLevel='8' " +
                " LEFT JOIN bgu_staffs tbod on tbod.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tbod.staffLevel='9' " +
                " where  tba.DeptLabel =? and tba.StaffLevel='1'   ";
            var OppWorkId = StaffID;
            var OppName = StaffName;
            var MagWorkId = '';
            var MagName = '';
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

            yjDBService.exec({
                sql: SQL3,
                parameters: [FlowDept],
                rowsAsArray: true,
                success: function (r) {
                    var datas = [];
                    var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                    if (data.length == 0) {
                        var retcode = { "status": "Fail", "message": "送审不成功，没有使用者", "BillNo": BillNo };
                        sender.success(retcode);
                        console.log("瑜@@", retcode);
                    }
                    for (var i = 0; i < data.length; i++) {
                        MagWorkId = data[i].MagWorkId;
                        MagName = data[i].MagName;
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
                            "MagWorkId": MagWorkId,
                            "MagName": MagName,
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
                        // console.log("研雨:" + JSON.stringify(temp));
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
    function handleRule(TermiLevel, CurLevel, CurWorkId, CurName, CurJob, OppWorkId, OppName, MagWorkId, MagName, MagDate, VipWorkId, VipName, VipDate, PurWorkId, PurName, PexWorkId, PexName,
        CfoWorkId, CfoName, PsdWorkId, PsdName, CeoWorkId, CeoName, BodWorkId, BodName, Track) {
        let paramList = [];
        var UpperLimit = '';
        var flagLimit = 'N';
        var BudgetType = 'A';
        var EntryDate = ApplyDate;
        var CurStatus = 'P';
        var CurText = '审批';
        var SendStatus = 'K';
        var SendText = '保存';

        let SQLInsert = "INSERT INTO `bgu_rule` ( `BillNo`,  `EntryDate` ,  `GroupLabel`,  `DeptLabel`, `StaffID`, `StaffName`,  " +
            " `CurStatus`, `CurText`,  `SendStatus`, `SendText`, `CurLevel`,  `TermiLevel`, `CurWorkId`, `CurName`, `CurJob` ," +
            " `Track`, `OppWorkId`, `OppName`, `OppDate`,  `MagWorkId`, `MagName` , `MagDate` , `VipWorkId`, `VipName`,  `VipDate` ,  `PurWorkId`, " +
            " `PurName`,   `PexWorkId`, `PexName`,   `CfoWorkId`, `CfoName`,  `PsdWorkId`, `PsdName`,  " +
            "  `CeoWorkId`, `CeoName`,  `BodWorkId`, `BodName` )" +
            " Values (  '" + BillNo + "',  '" + EntryDate + "' ,  '" + FlowGroup + "', '" + FlowDept + "','" + StaffID + "', '" + StaffName + "',  " +
            " '" + CurStatus + "', '" + CurText + "', '" + SendStatus + "', '" + SendText + "', '" + CurLevel + "', " +
            " '" + TermiLevel + "', '" + CurWorkId + "', '" + CurName + "','" + CurJob + "',  " +
            " '" + Track + "' , '" + OppWorkId + "' , '" + OppName + "' , '" + EntryDate + "' ,  '" + MagWorkId + "', '" + MagName + "', " + MagDate + " , " +
            " '" + VipWorkId + "', '" + VipName + "', " + VipDate + " ,  '" + PurWorkId + "',  '" + PurName + "',   '" + PexWorkId + "', '" + PexName + "'," +
            "  '" + CfoWorkId + "', '" + CfoName + "', '" + PsdWorkId + "', '" + PsdName + "'," +
            " '" + CeoWorkId + "', '" + CeoName + "', '" + BodWorkId + "', '" + BodName + "' ) ";

        yjDBService.exec({
            sql: SQLInsert,
            parameters: paramList,
            rowsAsArray: true,
            success: function (result) {
                var retcode = { "status": "OK", "message": "送审完成", "BillNo": BillNo, "Phone": flowphone };
                sender.success(retcode);
                // console.log("昭@@", retcode);
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
            var Delivery = sData[i].Delivery; Delivery = nulReplaceDate(Delivery);
            var Supplier = sData[i].Supplier;
            // var Underburget = sDigit[i];
            var Underburget = ((sData[i].Remain == '0') ? ('否') : ('是'));
            var AppendType = sData[i].AppendType;
            var Department = sData[i].Department;
            let paramList = [BillNo, SNNo, Subject, BudgetCID, BudgetItem, ItemNo, Descript, Unit,
                Remain, UnitPrice, Quantity, Subtotal, Delivery, Supplier, Underburget, AppendType, Department, EntryDate];
            if (ItemNo != "" && ItemNo != undefined) {
                var SQLInsert = "INSERT INTO `bgu_purchdetail` (  `BillNo` , `SNNo`  , `Subject` , `BudgetCID` , `BudgetItem` , `ItemNo`  , `Description` , `Unit`   ,  " +
                    " `Remain` , `UnitPrice` ,  `Quantity` , `Subtotal` , `Delivery` , `Supplier` ,  `Underburget` , `AppendType`, `Department` , `EntryDate`) " +
                    "  VALUES (?,?,?,?,?,?,?,?,?,?,  ?,?,?,?,?,?,?,?  )";
                yjDBService.exec({
                    sql: SQLInsert,
                    parameters: paramList,
                    rowsAsArray: true,
                    success: function (result) {
                        // console.log("拳握初心:", result);
                    },
                    error: sender.error
                });
            }
        }
        if (editmoney == 'U') {
            var retcode = { "status": "OK", "message": "采购修该金额完成", "BillNo": BillNo, "Phone": flowphone };
            sender.success(retcode);
        } else {
            saveRule();
        }
    }
    function clearMoney() {
        var uData = sender.req.query.uData;
        // console.log("身为君主就是这么任性", uData);
        let SQLDelete2 = "Delete From `bgu_purchdetail` where BillNo=?   ";
        yjDBService.exec({
            sql: SQLDelete2,
            parameters: [hideBillNo],
            success: function (result2) {
                uptMain();
            },
            error: {},
        });
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
    function uptMain() {
        var sData = sender.req.query.sData;
        var BudgetCID = sData[0].BudgetCID;
        var Subject = sData[0].Subject;
        var BudgetItem = sData[0].BudgetItem;
        console.log("时间", TotalValue, "和波浪", BudgetItem);
        let SQL = "Update `bgu_purchmain` set  Subject = ?,  BudgetCID = ?, BudgetItem = ?, ListNo = ?, RequestDate = ?, " +
            " ProjectNo = ?, ApplicNo = ?,TotalValue = ?,Currency = ?,Payment = ?, Explanation = ?   where    BillNo =?     ";
        yjDBService.exec({
            sql: SQL,
            parameters: [Subject, BudgetCID, BudgetItem, ListNo, RequestDate, ProjectNo, ApplicNo,
                TotalValue, Currency, Payment, Explanation, BillNo],
            rowsAsArray: true,
            success: function (result) {
                saveDetail();
            },
            error: sender.error
        });


    }
    function saveMain() {
        var sData = sender.req.query.sData;
        var BudgetCID = sData[0].BudgetCID;
        var Subject = sData[0].Subject;
        var BudgetItem = sData[0].BudgetItem;
        let paramList = [BillNo, Formkind, Subject, BudgetCID, BudgetItem, ListNo,
            RequestDate, ProjectNo, ApplicNo, FlowDept, FlowUnit, FlowGroup,
            StaffID, StaffName, TotalValue, Currency, Payment,
            Explanation, EntryDate];
        var SQLInsert = "INSERT INTO `bgu_purchmain` ( `BillNo` , `Formkind` , `Subject` , `BudgetCID` , `BudgetItem` , `ListNo` ,  `RequestDate` , `ProjectNo` , `ApplicNo` ,  " +
            "`DeptName` , `UnitName` ,`GroupName` , `StaffID`  , `StaffName` ,  `TotalValue`  , `Currency` ,  `Payment` , `Explanation` ,`EntryDate`  ) " +
            "  VALUES (?,?,?,?,?,?,?,?,?,?,  ?,?,?,?,?,?,?,?,?  )";
        yjDBService.exec({
            sql: SQLInsert,
            parameters: paramList,
            rowsAsArray: true,
            success: function (result) {
                saveDetail();
            },
            error: sender.error
        });
    }
    function chkNextAudit() {
        var Basstr = sender.req.query.Basstr;
        var BillNo = Basstr.hideBillNo;
        var ItemNo = Basstr.ItemNo;
        let SQL3 =
            " select  tba.CurName, tba.CurJob from  bgu_rule tba  " +
            " where  tba.BillNo =?   ";
        yjDBService.exec({
            sql: SQL3,
            parameters: [BillNo],
            rowsAsArray: true,
            success: function (r) {
                var datas = [];
                var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                for (var i = 0; i < data.length; i++) {
                    CurName = data[i].CurName;
                    CurJob = data[i].CurJob; 
                }
                uptRuleStatus(CurName, ItemNo);
            },
            error: sender.error
        });
    }
    function uptRuleStatus(CurName ,ItemNo) {
        var Basstr = sender.req.query.Basstr;
        var BillNo = Basstr.hideBillNo;
        var DeptName = Basstr.DeptName;
        var GroupName = Basstr.GroupName;
        var StaffName = Basstr.StaffName;
        var idleRole = Basstr.FlowRole;
        var idlephone = Basstr.hidePhone;
        // var mobiles = ['17051095060'] ;
        var mobiles = [];
        mobiles.push(idlephone);
        // console.log('何以缘起何以缘起', BillNo, " TEL:", mobiles);
        if (BillNo != '' && BillNo != undefined) {

        } else {
            var retcode = { "status": "Fail", "message": "送审已完成，不可再次送审\n" };
            sender.success(retcode);
            console.log("不良送审", retcode);
            return;
        }
        var SQLInsert = "Update `bgu_rule` set SendStatus  = 'D'  , SendText  = '送出' where BillNo= ?";
        yjDBService.exec({
            sql: SQLInsert,
            parameters: [BillNo],
            success: function (result) {
                var Msg = "@"+ CurName + " ，请审批采购单" + "\n文号: " + BillNo +  "\n部門: " + GroupName +   "\n品项: " + ItemNo;
                // console.log("町町发送 ");
                // console.log(Msg);
                var yjDing = require("./yjDing");
                let pw = yjDing["HelloMsg"].talk(Msg, mobiles);
                var retcode = { "status": "OK", "message": "送审完成\n" + pw, "BillNo": BillNo };
                sender.success(retcode);
                // console.log("懿", retcode);
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
    function seeFlowDept() {
        let SQL4 =
            " select GroupName ,DeptName from bgu_orig_detail where GroupName = ?  ";
        yjDBService.exec({
            sql: SQL4,
            parameters: [GroupName],
            rowsAsArray: true,
            success: function (r) {
                var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                for (var i = 0; i < data.length; i++) {
                    FlowDept = data[i].DeptName;
                    FlowGroup = data[i].GroupName;
                }
                clearMain();
            },
            error: sender.error
        });
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
