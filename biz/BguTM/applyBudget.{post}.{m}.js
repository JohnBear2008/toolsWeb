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
    var Advstr = sender.req.query.Advstr;
    var ListNo = Advstr.ListNo;
    var RequestDate = Advstr.RequestDate;
    var ProjectNo = Advstr.ProjectNo;
    var ApplicNo = Advstr.ApplicNo;
    var deptName = Advstr.deptName;
    var staffID = Advstr.staffID;
    var staffName = Advstr.staffName;
    var TotalValue = Advstr.TotalValue;
    var Currency = Advstr.Currency;
    var payment = Advstr.payment;
    var Explanation = Advstr.Explanation;
    var entryDate = now.Format("yyyyMMdd");
    var TESTstaffUser ='wqy';
    validInput();
    function saveRule() {
        var upperLimit = '';
        var flagLimit = 'N'; 
        var termiLevel = '';
        var curWorkId = '';
        var curName = '';
        var oppWorkId = '';
        var oppName = '';
        var dptWorkId = '';
        var dptName = '';
        var vipWorkId = '';
        var vipName = '';
        var purWorkId = '';
        var purName = '';
        var pexWorkId = '';
        var pexName = '';
        var cfoWorkId = '';
        var cfoName = '';
        var psdWorkId = '';
        var psdName = '';
        var ceoWorkId = '';
        var ceoName = '';
        var bodWorkId = '';
        var bodName = '';
        var track = '';
        var sData = sender.req.query.sData; 
        var BudStr = sData[0].BudgetItem;
        var BudgetType = BudStr.substring(0,1);
        console.log(">>>科目AB：" ,BudgetType ,"血型",BudStr);
        async.parallel([FunLimit, FunOrig, FunSubject],
            function (err, result) {
                if (err) {

                } else {

                    for (var i = 0; i < 1; i++) {
                        if (result[0][i] == null || result[0][i] == undefined) {
                        } else {
                            upperLimit = result[0][i].upperLimit;
                            if (TotalValue > upperLimit  ) {  //超过预算
                                flagLimit = 'Y';
                                if(BudgetType=='A'){
                                    termiLevel = '8' ;
                                }
                                if(BudgetType=='B'){
                                    termiLevel = '6' ;
                                }
                                console.log(">>>超过预算",upperLimit,"崔崔",BudgetType);
                            }else{
                                if(BudgetType=='A'){
                                    termiLevel = '6' ;
                                }
                                if(BudgetType=='B'){
                                    termiLevel = '4' ;
                                }
                                console.log("<<<未达预算",upperLimit,"崔崔",BudgetType);
                            }
                        }
                        if (result[1][i] == null || result[1][i] == undefined) {
                        } else {
                            oppWorkId = result[1][i].oppWorkId;
                            oppName = result[1][i].oppName;
                            dptWorkId = result[1][i].dptWorkId;
                            dptName = result[1][i].dptName;
                            vipWorkId = result[1][i].vipWorkId;
                            vipName = result[1][i].vipName;
                            if(BudgetType=='A'){
                                purWorkId = result[1][i].purWorkId;
                                purName = result[1][i].purName;
                                pexWorkId = result[1][i].pexWorkId;
                                pexName = result[1][i].pexName;
                            }
                            cfoWorkId = result[1][i].cfoWorkId;
                            cfoName = result[1][i].cfoName;
                            psdWorkId = result[1][i].psdWorkId;
                            psdName = result[1][i].psdName;
                            if (flagLimit == 'Y') {
                                ceoWorkId = result[1][i].ceoWorkId;
                                ceoName = result[1][i].ceoName;
                                bodWorkId = result[1][i].bodWorkId;
                                bodName = result[1][i].bodName;
                            } else {

                            }
                            console.log("丁妃", result[1][i]);
                            curWorkId =dptWorkId;
                            curName =dptName;
                        }
                        if (result[2][i] == null || result[2][i] == undefined) {
                            console.log("壞壞壞壞壞壞壞壞壞" );
                            track = '[{"Level1":"adm","Level2":"dpt","Level3":"vip","Level4":"pur","Level5":"pEx","Level6":"cfo","Level7":"psd","Level8":"ceo","Level9":"bod"}]';
                        } else {
                            track = result[2][i].track;
                            console.log("導航條", result[1][i]);
                        }
                    }
                    handleRule( termiLevel ,curWorkId ,curName ,oppWorkId , oppName , dptWorkId, dptName, vipWorkId, vipName, purWorkId, purName, pexWorkId, pexName,
                        cfoWorkId, cfoName, psdWorkId, psdName, ceoWorkId, ceoName, bodWorkId, bodName, track);
                }

            });
        function FunLimit(cb) {
            var staffName = '周筱龙';
            let SQL2 = "select tvip.staffID , tvip.staffName ,tquo.upperLimit from  bgu_staffs tba " +
            "LEFT JOIN bgu_staffs tvip on tba.deptLabel =tvip.deptLabel and tvip.staffLevel='3' " +
            "LEFT JOIN bgu_quota tquo on tvip.staffName = tquo.staffName  " +              
            "where tba.staffUser= ?   ";
            yjDBService.exec({
                sql: SQL2,
                parameters: [TESTstaffUser],
                rowsAsArray: true,
                success: function (r) {
                    var datas = [];
                    var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                    for (var i = 0; i < data.length; i++) {
                        upperLimit = data[i].upperLimit;
                        var temp = {
                            "upperLimit": upperLimit,
                        }
                        console.log("仔延:" + JSON.stringify(temp));
                        datas.push(temp)
                    }
                    cb(null, datas);
                },
                error: sender.error
            });
        }
        function FunOrig(cb) {
            // oppWorkId , oppName , dptWorkId, dptName, vipWorkId, vipName, purWorkId, purName, pexWorkId, pexName,
            //     cfoWorkId, cfoName, psdWorkId, psdName, ceoWorkId, ceoName, bodWorkId, bodName
            let SQL3 =
                " select tba.staffID as oppWorkId,tba.staffName as oppName ,tdpt.staffID as dptWorkId, tdpt.staffName as dptName,tvip.staffID as vipWorkId, tvip.staffName as vipName" +
                " ,tpur.staffID as purWorkId, tpur.staffName as purName,tpex.staffID as pexWorkId, tpex.staffName as pexName,tcfo.staffID as cfoWorkId, tcfo.staffName as cfoName" +
                " ,tpsd.staffID as psdWorkId, tpsd.staffName as psdName,tceo.staffID as ceoWorkId, tceo.staffName as ceoName,tbod.staffID as bodWorkId, tbod.staffName as bodName " +
                " from  bgu_staffs tba  " +
                " LEFT JOIN bgu_staffs tdpt on tba.groupLabel  =tdpt.groupLabel and tdpt.staffLevel='2' " +
                " LEFT JOIN bgu_staffs tvip on tba.deptLabel  =tvip.deptLabel and tvip.staffLevel='3' " +
                " LEFT JOIN bgu_staffs tpur on tba.deptLabel  =tpur.deptLabel and tpur.staffLevel='4' " +
                " LEFT JOIN bgu_staffs tpex on tba.deptLabel  =tpex.deptLabel and tpex.staffLevel='5' " +
                " LEFT JOIN bgu_staffs tcfo on tba.deptLabel  =tcfo.deptLabel and tcfo.staffLevel='6' " +
                " LEFT JOIN bgu_staffs tpsd on tba.deptLabel  =tpsd.deptLabel and tpsd.staffLevel='7' " +
                " LEFT JOIN bgu_staffs tceo on tba.deptLabel  =tceo.deptLabel and tceo.staffLevel='8' " +
                " LEFT JOIN bgu_staffs tbod on tba.deptLabel  =tbod.deptLabel and tbod.staffLevel='9' " +
                " where  tba.staffUser= ?  ";
            var oppWorkId = '';
            var oppName = '';
            var dptWorkId = '';
            var dptName = '';
            var vipWorkId = '';
            var vipName = '';
            var purWorkId = '';
            var purName = '';
            var pexWorkId = '';
            var pexName = '';
            var cfoWorkId = '';
            var cfoName = '';
            var psdWorkId = '';
            var psdName = '';
            var ceoWorkId = '';
            var ceoName = '';
            var bodWorkId = '';
            var bodName = '';
            yjDBService.exec({
                sql: SQL3,
                parameters: [TESTstaffUser],
                rowsAsArray: true,
                success: function (r) {
                    var datas = [];
                    var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                    for (var i = 0; i < data.length; i++) {
                        oppWorkId = data[i].oppWorkId;
                        oppName = data[i].oppName;
                        dptWorkId = data[i].dptWorkId;
                        dptName = data[i].dptName;
                        vipWorkId = data[i].vipWorkId;
                        vipName = data[i].vipName;
                        purWorkId = data[i].purWorkId;
                        purName = data[i].purName;
                        pexWorkId = data[i].pexWorkId;
                        pexName = data[i].pexName;
                        cfoWorkId = data[i].cfoWorkId;
                        cfoName = data[i].cfoName;
                        psdWorkId = data[i].psdWorkId;
                        psdName = data[i].psdName;
                        ceoWorkId = data[i].ceoWorkId;
                        ceoName = data[i].ceoName;
                        bodWorkId = data[i].bodWorkId;
                        bodName = data[i].bodName;
                        var temp = {
                            "oppWorkId": oppWorkId,
                            "oppName": oppName,
                            "dptWorkId": dptWorkId,
                            "dptName": dptName,
                            "vipWorkId": vipWorkId,
                            "vipName": vipName,
                            "purWorkId": purWorkId,
                            "purName": purName,
                            "pexWorkId": pexWorkId,
                            "pexName": pexName,
                            "cfoWorkId": cfoWorkId,
                            "cfoName": cfoName,
                            "psdWorkId": psdWorkId,
                            "psdName": psdName,
                            "ceoWorkId": ceoWorkId,
                            "ceoName": ceoName,
                            "bodWorkId": bodWorkId,
                            "bodName": bodName,
                        }
                        datas.push(temp)
                        console.log("定延:" + JSON.stringify(temp));
                    }
                    cb(null, datas);
                },
                error: sender.error
            });
        }
        function FunSubject(cb) {
            console.log("A或B:" ,BudgetType);
            var track = '';
            let SQL4 =
                " select track from  bgu_rule_def where ruleType =?  ";
            yjDBService.exec({
                sql: SQL4,
                parameters: [BudgetType],
                rowsAsArray: true,
                success: function (r) {
                    var datas = [];
                    var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                    for (var i = 0; i < data.length; i++) {
                        track = data[i].track;
                        var temp = {
                            "track": track,
                        }
                        console.log("看延:" + JSON.stringify(temp));
                        datas.push(temp);
                    }
                    cb(null, datas);
                },
                error: sender.error
            });
        }
    }
    function handleRule(termiLevel ,curWorkId ,curName ,oppWorkId, oppName, dptWorkId, dptName, vipWorkId, vipName, purWorkId, purName, pexWorkId, pexName,
        cfoWorkId, cfoName, psdWorkId, psdName, ceoWorkId, ceoName, bodWorkId, bodName, track) {
        let paramList = [];
        var upperLimit = '';
        var flagLimit = 'N';
        var BudgetType = 'A';
        var entryDate = ApplyDate;
        var groupLabel = 'MIS';
        var curStatus = 'P';
        var curLevel = '1';
        var status = '0';
        var statusText = '审批中';

        let SQLInsert = "INSERT INTO `bgu_rule` ( `billNo`,  `entryDate` ,  `groupLabel`, `staffID`, `staffName`, `curStatus`, `curLevel`," +
            " `termiLevel`, `curWorkId`, `curName`, `status`, `statusText`, " +
            " `track`, `oppWorkId`, `oppName`, `oppDate`,  `dptWorkId`, `dptName`, `vipWorkId`, `vipName`,  `purWorkId`, " +
            " `purName`,   `pexWorkId`, `pexName`,   `cfoWorkId`, `cfoName`,  `psdWorkId`, `psdName`,  " +
            "  `ceoWorkId`, `ceoName`,  `bodWorkId`, `bodName` )" +
            " Values (  '" + billNo + "',  '" + entryDate + "' ,  '" + groupLabel + "', '" + staffID + "', '" + staffName + "', '" + curStatus + "', '" + curLevel + "', " +
            " '" + termiLevel + "', '" + curWorkId + "', '" + curName + "', '" + status + "', '" + statusText + "', " +
            " '" + track + "' , '" + oppWorkId + "' , '" + oppName + "' , '" + entryDate + "' ,  '" + dptWorkId + "', '" + dptName + "',  '" + vipWorkId + "', '" + vipName + "', " +
            "    '" + purWorkId + "',  '" + purName + "',   '" + pexWorkId + "', '" + pexName + "',  '" + cfoWorkId + "', '" + cfoName + "',  " +
            "   '" + psdWorkId + "', '" + psdName + "'," +
            " '" + ceoWorkId + "', '" + ceoName + "', '" + bodWorkId + "', '" + bodName + "' ) ";

        // console.log('友梨', SQLInsert);
        yjDBService.exec({
            sql: SQLInsert,
            parameters: paramList,
            rowsAsArray: true,
            success: function (result) {
                // var data=yjDB.dataSet2ObjectList(result.meta,result.rows);
                console.log(result);
                var retcode = { "status": "OK", "message": "审批完成", "BillNo": billNo };
				sender.success(retcode);
                console.log("昭希@@",retcode);
            },
            error: sender.error
        });

    }
    function saveDetail() {
        var sData = sender.req.query.sData;
        // console.log('艺珍', JSON.stringify(sData));
        for (var i = 0; i < sData.length; i++) {
            var SNNo = sData[i].SNNo;
            var BudgetItem = sData[i].BudgetItem;
            var ItemNo = sData[i].ItemNo;
            var Descript = sData[i].Description;
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

                // console.log('@@@@@@@@@@@池夏', SQLInsert);
                yjDBService.exec({
                    sql: SQLInsert,
                    parameters: paramList,
                    rowsAsArray: true,
                    success: function (result) {
                        console.log("saveDetail:",result);
                        saveRule();
                    },
                    error: sender.error
                });
            }
        }
    }
    function validInput() {
        if(isNaN(RequestDate)&&!isNaN(Date.parse(RequestDate))){
            console.log("data是日期格式！");
            saveMain() ;
        }else{
            var retcode = { "status": "Fail", "message": "审批不成功", "BillNo": billNo };
            sender.success(retcode);
            console.log("安熙@@日期格式",retcode);
        }
    }
    function saveMain() {

       
        let paramList = [billNo,
            ListNo, RequestDate, ProjectNo, ApplicNo, deptName,
            staffID, staffName, TotalValue, Currency,
            payment, Explanation, entryDate];

        console.log('申请', paramList);
        var SQLInsert = "INSERT INTO `bgu_purchmain` ( `billNo` , `ListNo` , `RequestDate` , `ProjectNo` , `ApplicNo` ,  " +
            "`deptName` , `staffID`  , `staffName` ,  `TotalValue`  , `Currency` ,  `payment` , `Explanation` ,`entryDate` ) " +
            "  VALUES (?,?,?,?,?,?,?,?,?,?,  ?,?,?  )";

        console.log('友梨', SQLInsert);
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
}
// function saveTestDetail() {

//     let paramList = [billNo, SNNo, BudgetItem, ItemNo, Description, Unit,
//         Remain, UnitPrice, Quantity, Subtotal, Delivery, Supplier, Underburget, Department];

//     console.log('表身', paramList);
//     var SQLInsert = "INSERT INTO `bgu_purchdetail` (  `billNo` , `SNNo`  , `BudgetItem` , `ItemNo`  , `Description` , `Unit`   ,  " +
//         " `Remain` , `UnitPrice` ,  `Quantity` , `Subtotal` , `Delivery` , `Supplier` ,  `Underburget` , `Department` ) " +
//         "  VALUES (?,?,?,?,?,?,?,?,?,?,  ?,?,?,?  )";

//     console.log('友梨', SQLInsert);
//     yjDBService.exec({
//         sql: SQLInsert,
//         parameters: paramList,
//         rowsAsArray: true,
//         success: function (result) {
//             // var data=yjDB.dataSet2ObjectList(result.meta,result.rows);
//             var retcode = { "status": "applyOK", "billNo": billNo };
//             sender.success(retcode);
//             console.log(result)
//         },
//         error: sender.error
//     });
// }