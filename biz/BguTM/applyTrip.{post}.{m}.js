require("../../client/js/Date.js");
require("../../client/js/funs.js");
module.exports = function (sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
    var async = require("async");
    var arrange = sender.req.query.arrange;
    var edituse = sender.req.query.edituse;
    let now = new Date();
    var swift = Math.random(100) * 100;
    swift = swift.toFixed(0);
    if (swift.length < 2) {
        swift = '0' + swift;
    }
    var ApplyDate = now.Format("yyyyMMdd");
    var ApplyYear = now.Format("yyyy");
    var BILLDate = now.Format("yyyyMMddHHmm") + swift;
    var BillNo = BILLDate + "";
    var TESTstaffUser = 'wqy';
    var FlowDept = '';
    var FlowGroup = '';
    var qryDept = '';
    var qryGroup = '';
    var FlowOrig = '';
    var FlowRole = '';
    var flowphone ='';
    if (arrange == 'confirm') {
        uptRuleStatus();
    } else if (arrange == 'saveSend') {
        var Advstr = sender.req.query.Advstr;
        var yjFun = require("./yjFun");
        let pwYY = yjFun.ExchYear(ApplyYear);
        var MD = now.Format("MMdd");
        var ApplicNo = pwYY + MD + swift + 'TA';
        var Version = Advstr.Version;
        var Subject = '差旅费';
        var BusiMan = Advstr.BusiMan;
        var CompMan = Advstr.CompMan;
        var BusiArea = Advstr.BusiArea;
        qryDept = Advstr.DeptName;
        FlowOrig = Advstr.OrigName;
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
        var RoomChoice   = Advstr.RoomChoice ;
        var DinnerChoice = Advstr.DinnerChoice;
        var StaffID = Advstr.StaffID;
        var StaffName = Advstr.StaffName;
        var TotalValue = Advstr.TotalValue;
        var LeaveDate = Advstr.LeaveDate; LeaveDate = nulReplaceDate(LeaveDate);
        var LeaveHour = Advstr.LeaveHour;
        var LeaveMin = Advstr.LeaveMin;
        var BackDate = Advstr.BackDate; BackDate = nulReplaceDate(BackDate);
        var BackHour = Advstr.BackHour;
        var BackMin = Advstr.BackMin;
        var LiveDateA = Advstr.LiveDateA; LiveDateA = nulReplaceDate(LiveDateA);
        var LiveDateB = Advstr.LiveDateB; LiveDateB = nulReplaceDate(LiveDateB);
        var LiveDateC = Advstr.LiveDateC; LiveDateC = nulReplaceDate(LiveDateC);
        var LiveDateD = Advstr.LiveDateD; LiveDateD = nulReplaceDate(LiveDateD);
        var LiveDateE = Advstr.LiveDateE; LiveDateE = nulReplaceDate(LiveDateE);
        var LiveDateF = Advstr.LiveDateF; LiveDateF = nulReplaceDate(LiveDateF);
        var LiveExtA = Advstr.LiveExtA; 
        var LiveExtB = Advstr.LiveExtB; 
        var LiveExtC = Advstr.LiveExtC; 
        var LiveExtD = Advstr.LiveExtD; 
        var LiveExtE = Advstr.LiveExtE; 
        var LiveExtF = Advstr.LiveExtF; 
        var Explanation = Advstr.Explanation;
        var OverReason = Advstr.OverReason;
        var Overspend = Advstr.Overspend;
        var OverChoice = Advstr.OverChoice;
        var HotelName = Advstr.HotelName;
        var HotelTel = Advstr.HotelTel;
        var BillStatus = '1';
        var EntryDate = now.Format("yyyy-MM-dd");
        var hideBillNo = Advstr.hideBillNo;
        if (edituse == 'U') {
            BillNo = hideBillNo;
            console.log(" 心魔", BillNo, "叫嚣", edituse);
        }
        // seeflowDept();
        validOrig();
    } else if (arrange == 'loadSend') {
        loadSend();
    } else {

    }
    function validOrig(){
        // select tba.StaffID as OppWorkId,tba.StaffName as OppName ,tdpt.Mobiles ,tdpt.StaffID as MagWorkId, tdpt.StaffName as MagName,tvip.StaffID as VipWorkId, tvip.StaffName as VipName
        // ,tpur.StaffID as PurWorkId, tpur.StaffName as PurName,tpex.StaffID as PexWorkId, tpex.StaffName as PexName,tcfo.StaffID as CfoWorkId, tcfo.StaffName as CfoName
        // ,tpsd.StaffID as PsdWorkId, tpsd.StaffName as PsdName,tceo.StaffID as CeoWorkId, tceo.StaffName as CeoName,tbod.StaffID as BodWorkId, tbod.StaffName as BodName 
        // from  bgu_staffs tba  
        // LEFT JOIN bgu_staffs tdpt on tdpt.GroupLabel like CONCAT('%', '工程部-系统开发部', '%')  and tdpt.staffLevel='2
        // LEFT JOIN bgu_staffs tvip on tvip.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tvip.staffLevel='3' 
        // LEFT JOIN bgu_staffs tpur on tpur.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tpur.staffLevel='4' 
        // LEFT JOIN bgu_staffs tpex on tpex.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tpex.staffLevel='5' 
        // LEFT JOIN bgu_staffs tcfo on tcfo.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tcfo.staffLevel='6' 
        // LEFT JOIN bgu_staffs tpsd on tpsd.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tpsd.staffLevel='7' 
        // LEFT JOIN bgu_staffs tceo on tceo.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tceo.staffLevel='8' 
        // LEFT JOIN bgu_staffs tbod on tbod.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tbod.staffLevel='9' 
        // where  tba.DeptLabel ='工程部' and tba.StaffLevel='1' and tba.StaffName='崔文娇'       
        let SQL3 =
            " select tba.StaffID as OppWorkId,tba.StaffName as OppName ,tdpt.Mobiles ,tdpt.StaffID as MagWorkId, tdpt.StaffName as MagName,tvip.StaffID as VipWorkId, tvip.StaffName as VipName" +
            " ,tpur.StaffID as PurWorkId, tpur.StaffName as PurName,tpex.StaffID as PexWorkId, tpex.StaffName as PexName,tcfo.StaffID as CfoWorkId, tcfo.StaffName as CfoName" +
            " ,tpsd.StaffID as PsdWorkId, tpsd.StaffName as PsdName,tceo.StaffID as CeoWorkId, tceo.StaffName as CeoName,tbod.StaffID as BodWorkId, tbod.StaffName as BodName " +
            " from  bgu_staffs tba  " +
            " LEFT JOIN bgu_staffs tdpt on tdpt.GroupLabel like CONCAT('%', '" + FlowGroup + "', '%')  and tdpt.staffLevel='2' and tdpt.staffLevel='2' " +
            " LEFT JOIN bgu_staffs tvip on tvip.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tvip.staffLevel='3' " +
            " LEFT JOIN bgu_staffs tpur on tpur.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tpur.staffLevel='4' " +
            " LEFT JOIN bgu_staffs tpex on tpex.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tpex.staffLevel='5' " +
            " LEFT JOIN bgu_staffs tcfo on tcfo.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tcfo.staffLevel='6' " +
            " LEFT JOIN bgu_staffs tpsd on tpsd.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tpsd.staffLevel='7' " +
            " LEFT JOIN bgu_staffs tceo on tceo.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tceo.staffLevel='8' " +
            " LEFT JOIN bgu_staffs tbod on tbod.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tbod.staffLevel='9' " +
            " where  tba.DeptLabel =? and tba.StaffLevel='1' and tba.StaffName=? ";
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
        console.log("李白虎",  FlowDept ,OppName);
        yjDBService.exec({
            sql: SQL3,
            parameters: [ FlowDept ,OppName],
            rowsAsArray: true,
            success: function (r) {
                var datas = [];
                var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                // console.log("孙膑", JSON.stringify(data));
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
                }
                if (MagName != "" && MagName != undefined) {
                    if(MagName == StaffName){
                        FlowRole = '部门主管';
                        console.log("姜子牙", FlowRole);
                    }
                } else {
                    Flag = '0';
                }
                if (VipName != "" && VipName != undefined) {
                    if(VipName ==StaffName){
                        FlowRole = '副总';
                        console.log("妲己", FlowRole);
                    }
                } else {
                    Flag = '0';
                }
                if (Flag == '0') {
                    var retcode = { "status": "Fail", "message": "送审不成功，审批人不完整", "BillNo": BillNo };
                    sender.success(retcode);
                    console.log("裴擒虎", retcode);
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
        var BudgetType = 'C';
        console.log("血型", BudgetType);
        async.parallel([FunLimit, FunOrig, FunSubject],
            function (err, result) {
                if (err) {

                } else {

                    for (var i = 0; i < 1; i++) {
                        if (result[0][i] == null || result[0][i] == undefined) {
                            UpperLimit = '0';
                        } else {
                            UpperLimit = result[0][i].UpperLimit;
                            if (TotalValue > UpperLimit) {
                                flagLimit = 'Y';
                                if (BudgetType == 'A') {
                                    TermiLevel = '6';
                                }
                                if (BudgetType == 'B') {
                                    TermiLevel = '8';
                                }
                                if (BudgetType == 'C') {
                                    TermiLevel = '2';
                                }
                            } else {
                                if (BudgetType == 'A') {
                                    TermiLevel = '4';
                                }
                                if (BudgetType == 'B') {
                                    TermiLevel = '6';
                                }
                                if (BudgetType == 'C') {
                                    TermiLevel = '2';
                                }
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
                            if (flagLimit == 'Y') {
                                CeoWorkId = result[1][i].CeoWorkId;
                                CeoName = result[1][i].CeoName;
                                BodWorkId = result[1][i].BodWorkId;
                                BodName = result[1][i].BodName;
                            } else {

                            }
                            var CurLevel = '1';
                            if (FlowRole == '副总' || FlowRole == '总经理' || FlowRole == '财务总监'  || FlowRole == 'CEO' || FlowRole == '董事长' ) {
                              //出差单最高也是2
                                CurWorkId = VipWorkId ;
                                CurName = VipName;
                                CurJob = 'vip';
                                CurLevel = '2';
                                VipDate = nulReplaceDate(VipDate);
                                MagDate = ApplyDate;
                            }else if (FlowRole == '部门主管') {
                                CurWorkId = VipWorkId ;
                                CurName = VipName;
                                VipDate = nulReplaceDate(VipDate);
                                MagDate = ApplyDate;
                                CurJob = 'vip';
                                CurLevel = '2';
                            }else if (FlowRole == '文员') {
                                CurWorkId = MagWorkId;
                                CurName = MagName;
                                VipDate = nulReplaceDate(VipDate);
                                MagDate = nulReplaceDate(MagDate);
                                CurJob = 'dpt';
                                CurLevel = '1';
                            }else {
                                CurWorkId = MagWorkId;
                                CurName = MagName;
                                VipDate = nulReplaceDate(VipDate);
                                MagDate = nulReplaceDate(MagDate);
                                CurJob = 'dpt';
                                CurLevel = '1';
                            }
                        }
                        if (result[2][i] == null || result[2][i] == undefined) {
                            Track = '[{"Level1":"adm","Level2":"dpt","Level3":"vip"}]';
                        } else {
                            Track = result[2][i].Track;
                            // console.log("導航條", result[1][i]);
                        }
                    }
                    handleRule(TermiLevel,  CurLevel, CurWorkId, CurName, CurJob, OppWorkId, OppName, MagWorkId, MagName, MagDate, VipWorkId, VipName,  VipDate ,PurWorkId, PurName, PexWorkId, PexName,
                        CfoWorkId, CfoName, PsdWorkId, PsdName, CeoWorkId, CeoName, BodWorkId, BodName, Track);
                }
            });
        function FunLimit(cb) {
            var datas = [];
            var temp = {
                "UpperLimit": '100000000',
            }
            datas.push(temp);
            cb(null, datas);
        }
        function FunOrig(cb) {
            // select tba.staffID ,tba.staffName ,tdpt.staffID , tdpt.staffName ,tvip.staffID , tvip.staffName
            // ,tpur.staffID , tpur.staffName,tpex.staffID , tpex.staffName,tcfo.staffID , tcfo.staffName
            // ,tpsd.staffID , tpsd.staffName,tceo.staffID , tceo.staffName ,tbod.staffID , tbod.staffName 
            // from  bgu_staffs tba  
            // LEFT JOIN bgu_staffs tdpt on 'MIS'  =tdpt.groupLabel and tdpt.staffLevel='2'
            // LEFT JOIN bgu_staffs tvip on tvip.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tvip.staffLevel='3'
            // LEFT JOIN bgu_staffs tpur on tpur.DeptLabel like CONCAT('%' , tba.DeptLabel , '%') and tpur.staffLevel='4'
            // LEFT JOIN bgu_staffs tpex on tpex.DeptLabel like CONCAT('%' , tba.DeptLabel , '%') and tpex.staffLevel='5' 
            // LEFT JOIN bgu_staffs tcfo on tcfo.DeptLabel like CONCAT('%' , tba.DeptLabel , '%') and tcfo.staffLevel='6'
            // LEFT JOIN bgu_staffs tpsd on tpsd.DeptLabel like CONCAT('%' , tba.DeptLabel , '%') and tpsd.staffLevel='7'
            // LEFT JOIN bgu_staffs tceo on tceo.DeptLabel like CONCAT('%' , tba.DeptLabel , '%') and tceo.staffLevel='8'
            // LEFT JOIN bgu_staffs tbod on tbod.DeptLabel like CONCAT('%' , tba.DeptLabel , '%') and tbod.staffLevel='9'
            // where  tba.DeptLabel='软体部' and tba.StaffLevel='1' 
            let SQL3 =
                " select tba.Mobiles as OppWorkId,tba.StaffName as OppName ,tdpt.Mobiles as MagWorkId, tdpt.StaffName as MagName,tvip.Mobiles as VipWorkId, tvip.StaffName as VipName" +
                " ,tpur.Mobiles as PurWorkId, tpur.StaffName as PurName,tpex.Mobiles as PexWorkId, tpex.StaffName as PexName,tcfo.Mobiles as CfoWorkId, tcfo.StaffName as CfoName" +
                " ,tpsd.Mobiles as PsdWorkId, tpsd.StaffName as PsdName,tceo.Mobiles as CeoWorkId, tceo.StaffName as CeoName,tbod.Mobiles as BodWorkId, tbod.StaffName as BodName " +
                " from  bgu_staffs tba  " +
                " LEFT JOIN bgu_staffs tdpt on ?  =tdpt.GroupLabel and tdpt.staffLevel='2' " +
                " LEFT JOIN bgu_staffs tvip on tvip.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tvip.staffLevel='3' " +
                " LEFT JOIN bgu_staffs tpur on tpur.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tpur.staffLevel='4' " +
                " LEFT JOIN bgu_staffs tpex on tpex.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tpex.staffLevel='5' " +
                " LEFT JOIN bgu_staffs tcfo on tcfo.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tcfo.staffLevel='6' " +
                " LEFT JOIN bgu_staffs tpsd on tpsd.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tpsd.staffLevel='7' " +
                " LEFT JOIN bgu_staffs tceo on tceo.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tceo.staffLevel='8' " +
                " LEFT JOIN bgu_staffs tbod on tbod.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tbod.staffLevel='9' " +
                " where  tba.DeptLabel =? and tba.StaffLevel='1'  ";
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
                parameters: [FlowGroup, FlowDept],
                rowsAsArray: true,
                success: function (r) {
                    var datas = [];
                    var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                    if (data.length == 0) {
                        var retcode = { "status": "Fail", "message": "送审不成功，没有使用者", "BillNo": BillNo };
                        sender.success(retcode);
                        console.log("茄不对@@@@", retcode);
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
                        // console.log("志效:" + JSON.stringify(temp));
                    }
                    cb(null, datas);
                },
                error: sender.error
            });
        }
        function FunSubject(cb) {
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
    function handleRule(TermiLevel, CurLevel, CurWorkId, CurName, CurJob, OppWorkId, OppName, MagWorkId, MagName, MagDate, VipWorkId, VipName,  VipDate ,PurWorkId, PurName, PexWorkId, PexName,
        CfoWorkId, CfoName, PsdWorkId, PsdName, CeoWorkId, CeoName, BodWorkId, BodName, Track) {
        let paramList = [];
        var UpperLimit = '';
        var flagLimit = 'N';
        var BudgetType = 'A';
        // var GroupLabel = 'MIS';
        var CurStatus = 'P';
        var CurText = '审批';
        var SendStatus = 'K';
        var SendText = '保存';
        let SQLInsert = "INSERT INTO `bgu_rule` ( `BillNo`,  `EntryDate` ,  `OrigLabel` , `GroupLabel`,  `DeptLabel`, `StaffID`, `StaffName`,  " +
            " `CurStatus`, `CurText`,  `SendStatus`, `SendText`, `CurLevel`,  `TermiLevel`, `CurWorkId`, `CurName`, `CurJob` ," +
            " `Track`, `OppWorkId`, `OppName`, `oppDate`,  `MagWorkId`, `MagName`,  `MagDate` , `VipWorkId`, `VipName`,  `VipDate` ,  " +
            " `PurWorkId`, `PurName`,   `PexWorkId`, `PexName`,   `CfoWorkId`, `CfoName`,  `PsdWorkId`, `PsdName`,  " +
            " `CeoWorkId`, `CeoName`,  `BodWorkId`, `BodName` )" +
            " Values (  '" + BillNo + "',  '" + EntryDate + "' ,  '" + FlowOrig + "', '" + FlowGroup + "', '" + FlowDept + "','" + StaffID + "', '" + StaffName + "',  " +
            " '" + CurStatus + "', '" + CurText + "', '" + SendStatus + "', '" + SendText + "', '" + CurLevel + "', " +
            " '" + TermiLevel + "', '" + CurWorkId + "', '" + CurName + "', '" + CurJob + "', '" + Track + "' , " +
            " '" + OppWorkId + "' , '" + OppName + "' , '" + EntryDate + "' ,  '" + MagWorkId + "', '" + MagName + "', " + MagDate + " , " +
            " '" + VipWorkId + "', '" + VipName + "', " + VipDate + " , '" + PurWorkId + "',  '" + PurName + "',   '" + PexWorkId + "', " +
            " '" + PexName + "',  '" + CfoWorkId + "', '" + CfoName + "',  '" + PsdWorkId + "', '" + PsdName + "'," +
            " '" + CeoWorkId + "', '" + CeoName + "', '" + BodWorkId + "', '" + BodName + "' ) ";
        yjDBService.exec({
            sql: SQLInsert,
            parameters: paramList,
            rowsAsArray: true,
            success: function (result) {
                // console.log("黄忠：", result);
                saveDetail();
            },
            error: sender.error
        });
    }
    function saveDetail() {
        var sData = sender.req.query.sData;
        for (var i = 0; i < sData.length; i++) {
            var SNNo = sData[i].SNNo;
            var TrafficA = sData[i].TrafficA; TrafficA = nulReplaceTxt(TrafficA);
            var TrafficB = sData[i].TrafficB; TrafficB = nulReplaceTxt(TrafficB);
            var TrafficC = sData[i].TrafficC; TrafficC = nulReplaceTxt(TrafficC);
            var TrafficD = sData[i].TrafficD; TrafficD = nulReplaceTxt(TrafficD);
            var TrafficE = sData[i].TrafficE; TrafficE = nulReplaceTxt(TrafficE);
            var TrafficF = sData[i].TrafficF; TrafficF = nulReplaceTxt(TrafficE);
            var TicTotal = sData[i].TicTotal;
            var InputVAT = sData[i].InputVAT;
            var TripDate = sData[i].TripDate;
            var TripCust = sData[i].TripCust;
            var TripRept = sData[i].TripRept;
            var TripNote = sData[i].TripNote;
            if (i <= 14) {
                if (sData[i].TicTotal != "" && sData[i].TicTotal != undefined) {
                    let paramList = [BillNo, SNNo, TrafficA, TrafficB, TrafficC,
                        TrafficD, TrafficE, TrafficF, TicTotal, InputVAT,
                        TripDate, TripCust, TripRept, TripNote, EntryDate];
                    var SQLInsert = "INSERT INTO `bgu_tripdetail` (  `BillNo`  ,  `SNNo`  ,  `TrafficA`  ,  `TrafficB`  ,  `TrafficC`   , " +
                        " `TrafficD`  ,  `TrafficE`  ,  `TrafficF`  ,  `TicTotal`  ,  `InputVAT`  , " +
                        " `TripDate` ,  `TripCust`  ,  `TripRept`  ,  `TripNote` , `EntryDate`  ) " +
                        "  VALUES (?,?,?,?,?,?,?,?,?,?,  ?,?,?,?,?   )";
                    yjDBService.exec({
                        sql: SQLInsert,
                        parameters: paramList,
                        rowsAsArray: true,
                        success: function (result) {
                            // console.log("趙高:", result);
                        },
                        error: sender.error
                    });
                }
            }
            if (i > 14) {
                if (sData[i].TripDate != "" && sData[i].TripDate != undefined) {
                    let paramList = [BillNo, SNNo, TrafficA, TrafficB, TrafficC,
                        TrafficD, TrafficE, TrafficF, TicTotal, InputVAT,
                        TripDate, TripCust, TripRept, TripNote , EntryDate];
                    var SQLInsert = "INSERT INTO `bgu_tripdetail` (  `BillNo`  ,  `SNNo`  ,  `TrafficA`  ,  `TrafficB`  ,  `TrafficC`   , " +
                        " `TrafficD`  ,  `TrafficE`  ,  `TrafficF`  ,  `TicTotal`  ,  `InputVAT`  , " +
                        " `TripDate` ,  `TripCust`  ,  `TripRept`  ,  `TripNote`, `EntryDate`  ) " +
                        "  VALUES (?,?,?,?,?,?,?,?,?,?,  ?,?,?,?,? )";
                    yjDBService.exec({
                        sql: SQLInsert,
                        parameters: paramList,
                        rowsAsArray: true,
                        success: function (result) {
                            // console.log("趙云:", result);
                        },
                        error: sender.error
                    });
                }
            }
        }
        FinStage();
    }
    function FinStage() {
        var retcode = { "status": "OK", "message": "送审完成", "BillNo": BillNo , "Phone": flowphone};
        sender.success(retcode);
        console.log("司马昭@@", retcode);
    }
    function clearMain() {

        let SQLDelete1 = "Delete From `bgu_tripmain` where BillNo=?   ";
        let SQLDelete2 = "Delete From `bgu_tripdetail` where BillNo=?   ";
        let SQLDelete3 = "Delete From `bgu_rule` where BillNo=?   ";

        yjDBService.exec({
            sql: SQLDelete1,
            parameters: [hideBillNo],
            success: function (result) {

                yjDBService.exec({
                    sql: SQLDelete2,
                    parameters: [hideBillNo],
                    success: function (result2) {
                        console.log("大乔@@", hideBillNo);
                        yjDBService.exec({
                            sql: SQLDelete3,
                            parameters: [hideBillNo],
                            success: function (result3) {
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
        var Formkind = '出差单';
        let paramList = [BillNo, ApplicNo, Formkind, Subject, Version, 
            BusiMan, CompMan ,  BusiArea , RoomChoice , DinnerChoice ,
            FlowDept, StaffID, StaffName, LeaveDate, LeaveHour,
            LeaveMin, BackDate, BackHour, BackMin, LiveDateA,
            LiveDateB, LiveDateC, LiveDateD,  LiveDateE, LiveDateF, 
            LiveExtA, LiveExtB, LiveExtC, LiveExtD,  LiveExtE,
            LiveExtF, Explanation, Overspend ,  OverReason, OverChoice, 
            TotalValue , HotelName, HotelTel, EntryDate, BillStatus ];
        // console.log('差旅申请', paramList);
        var SQLInsert = "INSERT INTO `bgu_tripmain` ( `BillNo`  ,  `ApplicNo`  ,  `Formkind` ,  `Subject`  ,  `Version`  , " + 
            " `BusiMan`  , `CompMan`  , `BusiArea`  ,  `RoomChoice` ,  `DinnerChoice` ,  " +
            " `DeptName` ,  `StaffID` ,  `StaffName`  ,  `LeaveDate` , `LeaveHour`  , " +
            " `LeaveMin`  ,  `BackDate`  ,   `BackHour`  , `BackMin` ,  `LiveDateA`  , " +
            " `LiveDateB`  ,  `LiveDateC`  ,  `LiveDateD`  ,   `LiveDateE` , `LiveDateF`, " +
            " `LiveExtA`  ,  `LiveExtB`  ,  `LiveExtC`  , `LiveExtD` ,   `LiveExtE`  ," +
            " `LiveExtF`  ,  `Explanation`  ,  `Overspend`  , `OverReason`  , `OverChoice`  , " +
            " `TotalValue` ,  `HotelName`  ,  `HotelTel`  , `EntryDate`  , `BillStatus` )" +
            " VALUES (?,?,?,?,?,?,?,?,?,?,   ?,?,?,?,?,?,?,?,?,?,  ?,?,?,?,?,?,?,?,?,?,  ?,?,?,?,?,?,?,?,?,? )";
        yjDBService.exec({
            sql: SQLInsert,
            parameters: paramList,
            rowsAsArray: true,
            success: function (result) {
                saveRule();
            },
            error: sender.error
        });
    }
    function uptRuleStatus() {
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
        console.log('恩赐', BillNo, " TEL:", mobiles);
        if(BillNo != '' && BillNo !=undefined){
          
        }else{
            var retcode = { "status": "Fail", "message": "送审已完成，不可再次送审\n"  };
            sender.success(retcode);
            console.log("司", retcode);
            return;
        }
        var SQLInsert = "Update `bgu_rule` set SendStatus  = 'D'  , SendText  = '送出' where BillNo= ?";
        yjDBService.exec({
            sql: SQLInsert,
            parameters: [BillNo],
            success: function (result) {
                var Msg = "出差单送审" + "\n文号: " + BillNo + "\n部門: " + DeptName + "\n课组: " + GroupName + "\n文员: " + StaffName + "\n职位: " + idleRole;
                console.log("町町发送 ", Msg);
                var yjDing = require("./yjDing");
                let pw = yjDing["HelloMsg"].talk(Msg, mobiles);
                var retcode = { "status": "OK", "message": "送审完成\n" + pw, "BillNo": BillNo };
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
    function nulReplaceDate(passTxt) {
        var ret = '';
        ret = (passTxt == null || passTxt == undefined || passTxt == '') ? (null) : passTxt;
        return ret;
    }
    function seeflowDept() {
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
}

// " select tba.StaffID as OppWorkId,tba.StaffName as OppName ,tdpt.StaffID as MagWorkId, tdpt.StaffName as MagName,tvip.StaffID as VipWorkId, tvip.StaffName as VipName" +
// " ,tpur.StaffID as PurWorkId, tpur.StaffName as PurName,tpex.StaffID as PexWorkId, tpex.StaffName as PexName,tcfo.StaffID as CfoWorkId, tcfo.StaffName as CfoName" +
// " ,tpsd.StaffID as PsdWorkId, tpsd.StaffName as PsdName,tceo.StaffID as CeoWorkId, tceo.StaffName as CeoName,tbod.StaffID as BodWorkId, tbod.StaffName as BodName " +
// " from  bgu_staffs tba  " +
// " LEFT JOIN bgu_staffs tdpt on ?  =tdpt.GroupLabel and tdpt.staffLevel='2' " +
// " LEFT JOIN bgu_staffs tvip on tvip.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tvip.staffLevel='3' " +
// " LEFT JOIN bgu_staffs tpur on tpur.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tpur.staffLevel='4' " +
// " LEFT JOIN bgu_staffs tpex on tpex.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tpex.staffLevel='5' " +
// " LEFT JOIN bgu_staffs tcfo on tcfo.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tcfo.staffLevel='6' " +
// " LEFT JOIN bgu_staffs tpsd on tpsd.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tpsd.staffLevel='7' " +
// " LEFT JOIN bgu_staffs tceo on tceo.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tceo.staffLevel='8' " +
// " LEFT JOIN bgu_staffs tbod on tbod.DeptLabel like CONCAT('%', tba.DeptLabel, '%') and tbod.staffLevel='9' " +
// " where  tba.DeptLabel =? and tba.StaffLevel='1'  ";