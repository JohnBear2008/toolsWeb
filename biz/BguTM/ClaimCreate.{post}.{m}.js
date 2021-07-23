require("../../client/js/Date.js");
require("../../client/js/funs.js");
module.exports = function (sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
    var arrange = sender.req.query.arrange;
    var BillNo = sender.req.query.BillNo;
    var pick = sender.req.query.pick;
    let now = new Date();
    var EntryDate = now.Format("yyyyMMdd");
    if (arrange == 'addInvoice') {
        if (pick == 'A') {
            addInvoice();
            auditSayNo();
        }
        if (pick == 'B') {
            addInvoiceB();
            auditSayNoB();
        }
        Notice();
    }
    if (arrange == 'beginInvoice') {
        if (pick == 'A') {
           checkClaim();
        }
        if (pick == 'B') {
            checkBClaim() 
        }
    }
    if (arrange == 'exceedBud') {
        if (pick == 'A') {
            exceedBud();
        }
        if (pick == 'B') {
            exceedBudB();
        }

    }
    if (arrange == 'examine') {
        if (pick == 'A') {
            examine();
        }
        if (pick == 'B') {
            examine();
        }
    }
    if (arrange == 'redoApply') {
        redoApply();
    }
    if (arrange == 'seeInvoice') {
        seeInvoice();
    }
    if (arrange == 'auditSay') {
        if (pick == 'A') {
            auditSay();
        }
        if (pick == 'B') {
            auditSay();
        }
    }
    function Notice() {
        var Advstr = sender.req.query.Advstr;
        var BillNo = Advstr.BillNo;
        var retcode = { "status": "OK", "message": "核销已被财务核可", "BillNo": BillNo };
        sender.success(retcode);
    }
    function examine() {
        var filter = " 1=1 ";
        var orderBy = '';
        var limit = '5000';
        var capacity = '';
        var SQLExecute =
            " select tba.`DBID` ,  tba.`EntryDate`  ,  tba.`RequestDate`  ,  tba.`BillNo` ,   tba.`TotalValue`  ," +
            "  tba.`UpperLimit`  ,   tba.`Accumulate`  ,   tba.`Surplus` , tba.`IsOver`  ," +
            "  tba.`StaffID`  ,  tba. `StaffName`  ,   tba.`SNNO`  ,   tba.`Descript`   " +
            " from  bgu_claim tba     ";
        if (BillNo != "" && BillNo != "null" && BillNo != undefined && BillNo.length > 0) {
            capacity += " AND  tba.BillNo  = " + "'" + BillNo + "'  ";
        }
        if (filter != "" && filter != undefined) {
            SQLExecute = SQLExecute + " WHERE " + filter;
        }
        if (capacity != "" && capacity != undefined) {
            SQLExecute = SQLExecute + capacity;
        }
        if (limit != "" && limit != undefined) {
            SQLExecute = SQLExecute + " LIMIT " + limit;
        }
        if (orderBy != "" && orderBy != undefined) {
            SQLExecute = SQLExecute + " Order By " + orderBy;
        }
        var banWord1 = new RegExp("delete");
        var banWord2 = new RegExp("update");
        var banWord3 = new RegExp("insert");
        var resultCheckSQL = banWord1.test(SQLExecute) || banWord2.test(SQLExecute) || banWord3.test(SQLExecute);
        var dataArr = [];
        var paramList = [];
        if (resultCheckSQL) {
            console.log("接受到含有非法关键字的SQL:" + SQLExecute);
        } else {
            yjDBService.exec({
                sql: SQLExecute,
                parameters: paramList,
                rowsAsArray: false,
                success: function (data) {
                    for (var i = 0; i < data.length; i++) {
                        var obj = {
                            "DBID": data[i].DBID,
                            "BillNo": data[i].BillNo,
                            "RequestDate": data[i].RequestDate,
                            "TotalValue": data[i].TotalValue,
                            "UpperLimit": data[i].UpperLimit,
                            "Accumulate": data[i].Accumulate,
                            "Surplus": data[i].Surplus,
                            "SNNO": data[i].SNNO,
                            "IsOver": ((data[i].IsOver == 'N') ? '否' : '是'),
                        }
                        dataArr.push(obj);
                    }
                    var dump = JSON.stringify(dataArr);
                    if (dump.length > 500) {
                        console.log("晴月:" + dump.substring(0, 500));
                    } else {
                        console.log("晴月:" + JSON.stringify(dataArr));
                    }
                    sender.success(dataArr);
                },
                error: sender.error
            });
        }
    }
    function auditSay() {
        var Advstr = sender.req.query.Advstr;
        var RequestDate = EntryDate;
        var BillNo = Advstr.BillNo;
        var SemText = '核准';
        var SemStatus = 'Q';
        var SemWorkId = Advstr.CurWorkId;
        var SemName = Advstr.CurName;
        let paramList = [SemText, SemStatus, SemWorkId, SemName];
        console.log("多么痛彻的领悟 ", SemText, SemStatus, SemWorkId, SemName);
        var SQLUPt = "Update `bgu_claim` set SemText =? , SemStatus =? , StaffID =? , StaffName =?   " +
            " where  BillNo = '" + BillNo + "' ";
        yjDBService.exec({
            sql: SQLUPt,
            parameters: paramList,
            rowsAsArray: true,
            success: function (result) {
                console.log(" 领悟 ", BillNo);
                auditDetailSay();
            },
            error: sender.error
        });
    }
    function auditDetailSay() {
        var Advstr = sender.req.query.Advstr;
        var RequestDate = EntryDate;
        var BillNo = Advstr.BillNo;
        var SemText = '核准';
        var SemStatus = 'Q';
        var SemWorkId = Advstr.CurWorkId;
        var SemName = Advstr.CurName;
        let paramList = [SemText, SemStatus, SemWorkId, SemName];
        console.log("这么幸福 ", SemText, SemStatus, SemWorkId, SemName);
        var SQLUPt = "Update `bgu_claimdetail` set SemText =? , SemStatus =? , SemWorkId =? , SemName =?   " +
            " where  BillNo = '" + BillNo + "'  ";
        yjDBService.exec({
            sql: SQLUPt,
            parameters: paramList,
            rowsAsArray: true,
            success: function (result) {
                console.log("  幸福 ", BillNo);
                var retcode = { "status": "OK", "message": "核销已被财务核可", "BillNo": BillNo };
                sender.success(retcode);
            },
            error: sender.error
        });
    }
    function auditSayNo() {
        var Advstr = sender.req.query.Advstr;
        var RequestDate = EntryDate;
        var BillNo = Advstr.BillNo;
        var SemText = '审批';
        var SemStatus = 'P';
        var SemWorkId = Advstr.CurWorkId;
        var SemName = Advstr.CurName;
        let paramList = [SemText, SemStatus, SemWorkId, SemName];
        console.log("多么痛彻的领悟 ", SemText, SemStatus, SemWorkId, SemName);
        var SQLUPt = "Update `bgu_claim` set SemText =? , SemStatus =? , StaffID =? , StaffName =?   " +
            " where  BillNo = '" + BillNo + "' ";
        yjDBService.exec({
            sql: SQLUPt,
            parameters: paramList,
            rowsAsArray: true,
            success: function (result) {
                console.log(" 领悟 ", BillNo);
            
            },
            error: sender.error
        });
    }
    function excBudMain() { // 超过申请额， 须审批 UpperLimit> TotalValue  , IsOver =Y, Accumulate 0 ,
        var Advstr = sender.req.query.Advstr;
        var RequestDate = EntryDate;
        var BillNo = Advstr.BillNo;
        var Surplus = '';
        var TotalValue = Advstr.TotalValue; TotalValue = nulReplace0(TotalValue); TotalValue = parseInt(TotalValue, 10);
        var UpperLimit = Advstr.UpperLimit; UpperLimit = nulReplace0(UpperLimit); UpperLimit = parseInt(UpperLimit, 10);
        var IsOver = 'Y';
        var DivideValue = Advstr.DivideValue; DivideValue = nulReplace0(DivideValue); DivideValue = parseInt(DivideValue, 10);
        var Accumulate = 0;
        let paramList = [UpperLimit, IsOver, Accumulate];
        console.log("真诚的爱情 ", UpperLimit, IsOver, Accumulate);
        var SQLUPt = "Update `bgu_purchmain` set ExceedValue =? , IsOver =? , Accumulate =?    " +
            " where  BillNo = '" + BillNo + "' ";
        yjDBService.exec({
            sql: SQLUPt,
            parameters: paramList,
            rowsAsArray: true,
            success: function (result) {
                console.log("爱情 ", BillNo);
            },
            error: sender.error
        });
    }
    function uptBudMain() {  //上限没有超过申请额，不须审批 ExceedValue<=TotalValue , IsOver =N,  Accumulate 0 ,
        var Advstr = sender.req.query.Advstr;
        var RequestDate = EntryDate;
        var BillNo = Advstr.BillNo;
        var Surplus = '';
        var TotalValue = Advstr.TotalValue; TotalValue = nulReplace0(TotalValue); TotalValue = parseInt(TotalValue, 10);
        var UpperLimit = Advstr.UpperLimit; UpperLimit = nulReplace0(UpperLimit); UpperLimit = parseInt(UpperLimit, 10);
        var IsOver = 'N';
        var DivideValue = Advstr.DivideValue; DivideValue = nulReplace0(DivideValue); DivideValue = parseInt(DivideValue, 10);
        var Accumulate = 0;
        let paramList = [UpperLimit, IsOver, Accumulate];
        console.log("什么会痛苦 ", UpperLimit, IsOver, Accumulate);
        var SQLUPt = "Update `bgu_purchmain` set ExceedValue =? , IsOver =? , Accumulate =?    " +
            " where  BillNo = '" + BillNo + "' ";
        yjDBService.exec({
            sql: SQLUPt,
            parameters: paramList,
            rowsAsArray: true,
            success: function (result) {
                // console.log("什么痛苦 ", result);
            },
            error: sender.error
        });
    }
    function excBudDetail() {
    }
    function seeInvoice() {
        var filter = " 1=1 ";
        var orderBy = '';
        var limit = '5000';
        var capacity = '';
        var SQLExecute =
            " select tba.`DBID` , tba.`BillNo` ,  tba.`TotalValue` ,tba.`UpperLimit` ,  tba.`Surplus`  as mainSurplus ," +
            "  tdtl.`Surplus` as detailSurplus  , tba.`Accumulate` as mainAccum, tdtl.`Accumulate`  as detailAccum ,  " +
            " tdtl.DivideValue  , tdtl.Invoice, tdtl.`SNNO` , tdtl.`Descript`, tdtl.`RequestDate` " +
            " from  bgu_claim tba  " +
            " LEFT JOIN bgu_claimdetail tdtl on tba.BillNo  = tdtl.BillNo  ";
        if (BillNo != "" && BillNo != "null" && BillNo != undefined && BillNo.length > 0) {
            capacity += " AND  tba.BillNo  = " + "'" + BillNo + "'  ";
        }
        if (filter != "" && filter != undefined) {
            SQLExecute = SQLExecute + " WHERE " + filter;
        }
        if (capacity != "" && capacity != undefined) {
            SQLExecute = SQLExecute + capacity;
        }
        if (limit != "" && limit != undefined) {
            SQLExecute = SQLExecute + " LIMIT " + limit;
        }
        if (orderBy != "" && orderBy != undefined) {
            SQLExecute = SQLExecute + " Order By " + orderBy;
        }
        // console.log("贴金刚:" + SQLExecute);
        var banWord1 = new RegExp("delete");
        var banWord2 = new RegExp("update");
        var banWord3 = new RegExp("insert");
        var resultCheckSQL = banWord1.test(SQLExecute) || banWord2.test(SQLExecute) || banWord3.test(SQLExecute);
        var dataArr = [];
        var paramList = [];
        if (resultCheckSQL) {
            console.log("接受到含有非法关键字的SQL:" + SQLExecute);
        } else {
            yjDBService.exec({
                sql: SQLExecute,
                parameters: paramList,
                rowsAsArray: false,
                success: function (data) {
                    for (var i = 0; i < data.length; i++) {
                        var Surplus = '';
                        if (data[i].detailSurplus != null && data[i].detailSurplus != undefined) {
                            Surplus = data[i].detailSurplus;
                        } else if (data[i].mainSurplus != null && data[i].mainSurplus != undefined) {
                            Surplus = data[i].mainSurplus;
                        } else {

                        }
                        var Accumulate = '';
                        if (data[i].detailAccum != null && data[i].detailAccum != undefined) {
                            Accumulate = data[i].detailAccum;
                        } else if (data[i].mainAccum != null && data[i].mainAccum != undefined) {
                            Accumulate = data[i].mainAccum;
                        } else {

                        }
                        var obj = {
                            "DBID": data[i].DBID,
                            "BillNo": data[i].BillNo,
                            "RequestDate": data[i].RequestDate,
                            "TotalValue": data[i].TotalValue,
                            "UpperLimit": data[i].UpperLimit,
                            "Surplus": Surplus,
                            "Accumulate": Accumulate,
                            "SNNO": data[i].SNNO,
                            "DivideValue": data[i].DivideValue,
                            "Invoice": data[i].Invoice,
                            "Descript": data[i].Descript,
                        }
                        dataArr.push(obj);
                    }
                    // var dump = JSON.stringify(dataArr);
                    // if (dump.length > 500) {
                    // 	console.log("晴月:" + dump.substring(0, 500));
                    // } else {
                    // 	console.log("晴月:" + JSON.stringify(dataArr));
                    // }
                    sender.success(dataArr);
                },
                error: sender.error
            });
        }
    }
    function checkClaim() {
         // INSERT INTO `bgu_claim` 但如果已有BillNo，将update,
        // Surplus 比须计算原单与本单差额 加上
        //1.查询单据 ，如无  INSERT into ，如有 找出老Surplus  老UpperLimit, 新UpperLimit-老UpperLimit=diffvalue 
        //把diffvalue加上老Surplus ,update bgu_claim
        var flag ='N';
        var Advstr = sender.req.query.Advstr;
        var BillNo = Advstr.BillNo;
        let SQL3 =
            " select tba.*  from  bgu_claim tba where  tba.BillNo ='"+BillNo+"'  ";
        var qryUpper  = Advstr.UpperLimit; qryUpper = nulReplace0(qryUpper); qryUpper = parseInt(qryUpper, 10);
        var Surplus = 0;
        var UpperLimit = 0;
        var newSurplus = 0;
        var newUpperLimit = 0;
        var diffvalue = 0;
        yjDBService.exec({
            sql: SQL3,
            parameters: [],
            rowsAsArray: true,
            success: function (r) {
                var datas = [];
                var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                for (var i = 0; i < data.length; i++) {
                    Surplus = data[i].Surplus; Surplus = nulReplace0(Surplus); Surplus = parseInt(Surplus, 10);
                    UpperLimit = data[i].UpperLimit;  UpperLimit = nulReplace0(UpperLimit); UpperLimit = parseInt(UpperLimit, 10);
                    flag ='Y';
                    diffvalue = qryUpper-UpperLimit;
                    newSurplus = Surplus+diffvalue;
                    newUpperLimit = qryUpper;
                }
                if(flag=='Y'){  //已存在
                    uptBudMain();
                    beginRule();
                    updateInvoice(newUpperLimit, newSurplus);
                    console.log("若兮已存在:" );
                }
                if(flag=='N'){  //不存在
                    uptBudMain();
                    beginRule();
                    beginIns("采购单");
                    console.log("若兮不存在:" );
                }
                
            },
            error: sender.error
        });
    }
    function checkBClaim() {
        // INSERT INTO `bgu_claim` 但如果已有BillNo，将update,
       // Surplus 比须计算原单与本单差额 加上
       //1.查询单据 ，如无  INSERT into ，如有 找出老Surplus  老UpperLimit, 新UpperLimit-老UpperLimit=diffvalue 
       //把diffvalue加上老Surplus ,update bgu_claim
       var flag ='N';
       var Advstr = sender.req.query.Advstr;
       var BillNo = Advstr.BillNo;
       console.log("髒兮:",  BillNo);
       let SQL3 =
           " select tba.*  from  bgu_claim tba where  tba.BillNo ='"+BillNo+"'  ";
       var qryUpper  = Advstr.UpperLimit; qryUpper = nulReplace0(qryUpper); qryUpper = parseInt(qryUpper, 10);
       var Surplus = 0;
       var UpperLimit = 0;
       var newSurplus = 0;
       var newUpperLimit = 0;
       var diffvalue = 0;
       yjDBService.exec({
           sql: SQL3,
           parameters: [],
           rowsAsArray: true,
           success: function (r) {
               var datas = [];
               var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
               for (var i = 0; i < data.length; i++) {
                   Surplus = data[i].Surplus; Surplus = nulReplace0(Surplus); Surplus = parseInt(Surplus, 10);
                   UpperLimit = data[i].UpperLimit;  UpperLimit = nulReplace0(UpperLimit); UpperLimit = parseInt(UpperLimit, 10);
                   flag ='Y';
                   diffvalue = qryUpper-UpperLimit;
                   newSurplus = Surplus+diffvalue;
                   newUpperLimit = qryUpper;
                   console.log("髒兮已存在:",newUpperLimit, newSurplus,flag, BillNo);
               }
               if(flag=='Y'){  //已存在
                uptBudBMain();
                beginBRule();
                   updateInvoice(newUpperLimit, newSurplus);
                   console.log("髒兮已存在:" );
               }
               if(flag=='N'){  //不存在
                uptBudBMain();
                beginBRule();
                   beginIns("出差单");
                   console.log("髒兮不存在:" );
               }
             
           },
           error: sender.error
       });
   }
    function updateInvoice(newUpperLimit, newSurplus) {   
        var Advstr = sender.req.query.Advstr;
        var BillNo = Advstr.BillNo;
        var IsOver = '否';
        let SQLDelete1 = "Update `bgu_claim` set UpperLimit=? , Surplus=? , IsOver=?  where BillNo=?   ";
        yjDBService.exec({
            sql: SQLDelete1,
            parameters: [newUpperLimit, newSurplus, IsOver, BillNo],
            success: function (result) {
                var retcode = { "status": "OK", "message": "单据建立完成", "BillNo": BillNo };
                sender.success(retcode);
            },
            error: {},
        });
    }
    function beginRule() {
        var RequestDate = EntryDate;
        var ClaimText = '报销';
        var ClaimStatus = 'T';
        var Advstr = sender.req.query.Advstr;
        var BillNo = Advstr.BillNo;
        var UpperLimit = Advstr.UpperLimit; UpperLimit = nulReplace0(UpperLimit); UpperLimit = parseInt(UpperLimit, 10);
        let paramList = [ClaimText, ClaimStatus, BillNo];
        var SQLUPt = "Update `bgu_rule` set ClaimText =? , ClaimStatus =?  where  BillNo = '" + BillNo + "' ";
        yjDBService.exec({
            sql: SQLUPt,
            parameters: paramList,
            rowsAsArray: true,
            success: function (result) {
                console.log("神前1:", ClaimText, ClaimStatus, BillNo);                
            },
            error: sender.error
        });
    }
    function beginIns(Formkind) {
        var RequestDate = EntryDate;
        var Advstr = sender.req.query.Advstr;
        var BillNo = Advstr.BillNo;
        var UpperLimit = Advstr.UpperLimit; UpperLimit = nulReplace0(UpperLimit); UpperLimit = parseInt(UpperLimit, 10);
        var TotalValue = Advstr.TotalValue; TotalValue = nulReplace0(TotalValue); TotalValue = parseInt(TotalValue, 10);
        var Accumulate = '0';
        var Surplus = UpperLimit;
        var IsOver = '否';
        var StaffID = Advstr.StaffID;
        var StaffName = Advstr.StaffName;
        var SNNO = '0';
        var Descript = '123';
        let paramList2 = [RequestDate, EntryDate, BillNo,  Formkind , TotalValue, UpperLimit, Accumulate,
            Surplus, IsOver, StaffID, StaffName, SNNO, Descript];
        var SQLInsert = "INSERT INTO `bgu_claim` ( `RequestDate` , `EntryDate` , `BillNo` , `Formkind` ,`TotalValue` , `UpperLimit` , `Accumulate` , " +
            " `Surplus`,  `IsOver` , `StaffID` , `StaffName`, `SNNO` , `Descript`) " +
            "  VALUES ( ?,?,?,?,?,?,?,?,?,?,  ?,?,? )";
            // console.log("征服了:",SQLInsert);
        yjDBService.exec({
            sql: SQLInsert,
            parameters: paramList2,
            rowsAsArray: true,
            success: function (result) {
               
                var retcode = { "status": "OK", "message": "单据已可开始报销", "BillNo": BillNo };
                sender.success(retcode);
            },
            error: sender.error
        });
    }
    function uptInvoice() {
        var Advstr = sender.req.query.Advstr;
        var RequestDate = EntryDate;
        var BillNo = Advstr.BillNo;
        var UpperLimit = Advstr.UpperLimit; UpperLimit = nulReplace0(UpperLimit); UpperLimit = parseInt(UpperLimit, 10);
        var SNNO = Advstr.SNNO;
        SNNO = nulReplace0(SNNO); SNNO = parseInt(SNNO, 10) + 1;
        var IsOver = '否';
        var Surplus = '';
        var DivideValue = Advstr.DivideValue;
        DivideValue = nulReplace0(DivideValue); DivideValue = parseInt(DivideValue, 10);
        var Accumulate = Advstr.Accumulate;
        Accumulate = nulReplace0(Accumulate); Accumulate = parseInt(Accumulate, 10);
        Accumulate += DivideValue;
        console.log("成为爱豆", UpperLimit, Accumulate, DivideValue);
        if (Accumulate >= UpperLimit) {
            IsOver = '是';
            Surplus = 0;
        } else {
            Surplus = UpperLimit - Accumulate;
        }
        let paramList = [Accumulate, Surplus, IsOver, SNNO];
        console.log("垂涎于我美貌的人", Accumulate, Surplus, IsOver, SNNO);
        var SQLUPt = "Update `bgu_claim` set Accumulate =? , Surplus =? , IsOver =?,  SNNO  =?   " +
            " where  BillNo = '" + BillNo + "'   ";
        yjDBService.exec({
            sql: SQLUPt,
            parameters: paramList,
            rowsAsArray: true,
            success: function (result) {
                // var retcode = { "status": "OK", "message": "单据建立完成", "BillNo": BillNo };
                // sender.success(retcode);
            },
            error: sender.error
        });
    }
    function addInvoice() {
        var Advstr = sender.req.query.Advstr;
        var RequestDate = EntryDate;
        var BillNo = Advstr.BillNo;
        var SNNO = Advstr.SNNO;
        SNNO = nulReplace0(SNNO); SNNO = parseInt(SNNO, 10) + 1;
        var Surplus = 0;
        var UpperLimit = Advstr.UpperLimit;
        var DivideValue = Advstr.DivideValue; DivideValue = nulReplace0(DivideValue); DivideValue = parseInt(DivideValue, 10);
        var Accumulate = Advstr.Accumulate; Accumulate = nulReplace0(Accumulate); Accumulate = parseInt(Accumulate, 10);
        Accumulate += DivideValue;
        if (Accumulate >= UpperLimit) {
            Surplus = 0;
        } else {
            Surplus = UpperLimit - Accumulate;
        }
        var Invoice = Advstr.Invoice;
        var Descript = Advstr.Descript;
        let paramList = [RequestDate, BillNo, SNNO, DivideValue, Invoice, Accumulate, Surplus, Descript, EntryDate];
        // console.log("久痒", RequestDate, BillNo, SNNO, DivideValue, Invoice, Accumulate, Surplus, Descript, EntryDate);
        var SQLInsert = "INSERT INTO `bgu_claimdetail` ( `RequestDate` , `BillNo` , `SNNO` , `DivideValue` , `Invoice` ," +
            " `Accumulate` , `Surplus` , `Descript` , `EntryDate` ) " +
            "  VALUES ( ?,?,?,?,?,  ?,?,?,?  )";
        yjDBService.exec({
            sql: SQLInsert,
            parameters: paramList,
            rowsAsArray: true,
            success: function (result) {
                uptInvoice();
            },
            error: sender.error
        });
    }
    function excBudRule() {
        var Advstr = sender.req.query.Advstr;
        var RequestDate = EntryDate;
        var BillNo = Advstr.BillNo;
        var qryCurJob = Advstr.CurJob;
        var Surplus = '';
        var CurStatus = 'P';
        var CurLevel = '';
        var CurText = '审批';
        var ClaimText = '';
        var ClaimStatus = '';
        var Level7 = 'N';
        var PsdDate = null;
        var CurJob = '';
        if (qryCurJob == 'ceo') {
            CurJob = 'psd';
        }
        if (qryCurJob == 'bod') {
            CurJob = 'ceo';
        }
        let paramList = [CurStatus, CurText, ClaimText, ClaimStatus, CurJob];
        console.log("嘴上说不要  ", CurStatus, CurText, ClaimText, ClaimStatus, CurJob);
        var SQLUPt = "Update `bgu_rule` set CurStatus =? , CurText =? , ClaimText =?  , ClaimStatus =? , CurJob =? , CurLevel = CurLevel-1 , " +
            " Level7 = '', PsdDate = null , Level8 = '', CeoDate = null , Level9='', BodDate = null  " +
            " where  BillNo = '" + BillNo + "' ";
        yjDBService.exec({
            sql: SQLUPt,
            parameters: paramList,
            rowsAsArray: true,
            success: function (result) {
                console.log("很诚实 ", BillNo);
                var retcode = { "status": "OK", "message": "追加单据送出", "BillNo": BillNo };
                sender.success(retcode);
            },
            error: sender.error
        });
    }
    function exceedBud() {
        excBudMain();
        excBudDetail();
        excBudRule();
    }
    function addInvoiceB() {
        var Advstr = sender.req.query.Advstr;
        var RequestDate = EntryDate;
        var BillNo = Advstr.BillNo;
        var SNNO = Advstr.SNNO;
        SNNO = nulReplace0(SNNO); SNNO = parseInt(SNNO, 10) + 1;
        var Surplus = 0;
        var UpperLimit = Advstr.UpperLimit;
        var DivideValue = Advstr.DivideValue; DivideValue = nulReplace0(DivideValue); DivideValue = parseInt(DivideValue, 10);
        var Accumulate = Advstr.Accumulate; Accumulate = nulReplace0(Accumulate); Accumulate = parseInt(Accumulate, 10);
        Accumulate += DivideValue;
        if (Accumulate >= UpperLimit) {
            Surplus = 0;
        } else {
            Surplus = UpperLimit - Accumulate;
        }
        var Invoice = Advstr.Invoice;
        var Descript = Advstr.Descript;
        let paramList = [RequestDate, BillNo, SNNO, DivideValue, Invoice, Accumulate, Surplus, Descript, EntryDate];
        // console.log("久痒", RequestDate, BillNo, SNNO, DivideValue, Invoice, Accumulate, Surplus, Descript, EntryDate);
        var SQLInsert = "INSERT INTO `bgu_claimdetail` ( `RequestDate` , `BillNo` , `SNNO` , `DivideValue` , `Invoice` ," +
            " `Accumulate` , `Surplus` , `Descript` , `EntryDate` ) " +
            "  VALUES ( ?,?,?,?,?,  ?,?,?,?  )";
        yjDBService.exec({
            sql: SQLInsert,
            parameters: paramList,
            rowsAsArray: true,
            success: function (result) {
                uptInvoice();
            },
            error: sender.error
        });
    }
    function auditSayNoB() {
        var Advstr = sender.req.query.Advstr;
        var RequestDate = EntryDate;
        var BillNo = Advstr.BillNo;
        var SemText = '审批';
        var SemStatus = 'P';
        var SemWorkId = Advstr.CurWorkId;
        var SemName = Advstr.CurName;
        let paramList = [SemText, SemStatus, SemWorkId, SemName];
        console.log("多么痛彻的领悟 ", SemText, SemStatus, SemWorkId, SemName);
        var SQLUPt = "Update `bgu_claim` set SemText =? , SemStatus =? , StaffID =? , StaffName =?   " +
            " where  BillNo = '" + BillNo + "' ";
        yjDBService.exec({
            sql: SQLUPt,
            parameters: paramList,
            rowsAsArray: true,
            success: function (result) {                
            },
            error: sender.error
        });
    }
    function excBudMainB() { // 超过申请额， 须审批 UpperLimit > TotalValue  , IsOver =Y, Accumulate 0 ,
        var Advstr = sender.req.query.Advstr;
        var RequestDate = EntryDate;
        var BillNo = Advstr.BillNo;
        var Surplus = '';
        var TotalValue = Advstr.TotalValue; TotalValue = nulReplace0(TotalValue); TotalValue = parseInt(TotalValue, 10);
        var UpperLimit = Advstr.UpperLimit; UpperLimit = nulReplace0(UpperLimit); UpperLimit = parseInt(UpperLimit, 10);
        var IsOver = 'Y';
        var DivideValue = Advstr.DivideValue; DivideValue = nulReplace0(DivideValue); DivideValue = parseInt(DivideValue, 10);
        var Accumulate = 0;
        let paramList = [UpperLimit, IsOver, Accumulate];
        console.log("真诚的爱情 ", UpperLimit, IsOver, Accumulate);
        var SQLUPt = "Update `bgu_tripmain` set ExceedValue =? , IsOver =? , Accumulate =?    " +
            " where  BillNo = '" + BillNo + "' ";
        yjDBService.exec({
            sql: SQLUPt,
            parameters: paramList,
            rowsAsArray: true,
            success: function (result) {
                console.log("爱情 ", BillNo);
            },
            error: sender.error
        });
    }
    function excBudDetailB() {
    }
    function excBudRuleB() {
        var Advstr = sender.req.query.Advstr;
        var RequestDate = EntryDate;
        var BillNo = Advstr.BillNo;
        var qryCurJob = Advstr.CurJob;
        var Surplus = '';
        var CurStatus = 'P';
        var CurLevel = '';
        var CurText = '审批';
        var ClaimText = '';
        var ClaimStatus = '';
        var CurJob = '';
        if (qryCurJob == 'ceo') {
            CurJob = 'psd';
        }
        if (qryCurJob == 'bod') {
            CurJob = 'ceo';
        }
        if (qryCurJob == 'vip') {
            CurJob = 'dpt';
        }

        let paramList = [CurStatus, CurText, ClaimText, ClaimStatus, CurJob];
        console.log("与你携手共度  ", CurStatus, CurText, ClaimText, ClaimStatus, CurJob);
        var SQLUPt = "Update `bgu_rule` set CurStatus =? , CurText =? , ClaimText =?  , ClaimStatus =? , CurJob =? , CurLevel = CurLevel-1 , " +
            "  Level3 = '', VipDate = null    " +
            " where  BillNo = '" + BillNo + "' ";
        yjDBService.exec({
            sql: SQLUPt,
            parameters: paramList,
            rowsAsArray: true,
            success: function (result) {
                console.log("携手 ", BillNo);
                var retcode = { "status": "OK", "message": "追加单据送出", "BillNo": BillNo };
                sender.success(retcode);
            },
            error: sender.error
        });
    }
    function exceedBudB() {
        excBudMainB();
        excBudDetailB();
        excBudRuleB();
    }
    
    
    function uptBudBMain() {  //上限没有超过申请额，不须审批 ExceedValue<=TotalValue , IsOver =N,  Accumulate 0 ,
        var Advstr = sender.req.query.Advstr;
        var RequestDate = EntryDate;
        var BillNo = Advstr.BillNo;
        var Surplus = '';
        var TotalValue = Advstr.TotalValue; TotalValue = nulReplace0(TotalValue); TotalValue = parseInt(TotalValue, 10);
        var UpperLimit = Advstr.UpperLimit; UpperLimit = nulReplace0(UpperLimit); UpperLimit = parseInt(UpperLimit, 10);
        var IsOver = 'N';
        var DivideValue = Advstr.DivideValue; DivideValue = nulReplace0(DivideValue); DivideValue = parseInt(DivideValue, 10);
        var Accumulate = 0;
        let paramList = [UpperLimit, IsOver, Accumulate];
        var SQLUPt = "Update `bgu_tripmain` set ExceedValue =? , IsOver =? , Accumulate =?    " +
            " where  BillNo = '" + BillNo + "' ";
        yjDBService.exec({
            sql: SQLUPt,
            parameters: paramList,
            rowsAsArray: true,
            success: function (result) {
            },
            error: sender.error
        });
    }
    function beginBRule() {
        var RequestDate = EntryDate;
        var ClaimText = '报销';
        var ClaimStatus = 'T';
        var Advstr = sender.req.query.Advstr;
        var BillNo = Advstr.BillNo;
        var UpperLimit = Advstr.UpperLimit; UpperLimit = nulReplace0(UpperLimit); UpperLimit = parseInt(UpperLimit, 10);
        let paramList = [ClaimText, ClaimStatus, BillNo];
        var SQLUPt = "Update `bgu_rule` set ClaimText =? , ClaimStatus =?  where  BillNo = '" + BillNo + "' ";
        yjDBService.exec({
            sql: SQLUPt,
            parameters: paramList,
            rowsAsArray: true,
            success: function (result) {
            },
            error: sender.error
        });
    }
    function redoApply() {
        var Advstr = sender.req.query.Advstr;
        var RequestDate = EntryDate;
        var BillNo = Advstr.BillNo;
        let paramList = [BillNo];
        console.log("多么痛彻的领悟", BillNo);
        // Update `bgu_rule` set CurWorkId = OppWorkId , CurName = OppName , CurJob = 'dpt' , 
        // CurText ='审批',  CurStatus  ='P' ,  SendStatus ='K' , SendText='保存',
        //   ClaimText ='' , ClaimStatus ='' , CurLevel ='1' , Level2='', MagDate=null,
        //   Level3='', MagDate=VipDate,  Level4='', PurDate = null, Level5='', 
        //   PexDate=null , Level6='', CfoDate =null,   Level7='', PsdDate =null , Level8='',
        //   CeoDate =null , Level9='', BodDate =null where  BillNo = '20210512085432'
        var SQLUPt = "Update `bgu_rule` set CurWorkId = OppWorkId , CurName = OppName , CurJob = 'dpt' , CurText ='审批',  " +
            " CurStatus  ='P' ,  SendStatus ='K' , SendText='保存', " +
            " ClaimText ='' , ClaimStatus ='' , CurLevel ='1' , Level2='', MagDate=null, Level3='', MagDate=VipDate, " +
            " Level4='', PurDate = null, Level5='', PexDate=null , Level6='', CfoDate =null,  " +
            " Level7='', PsdDate =null , Level8='', CeoDate =null , Level9='', BodDate =null" +
            " where  BillNo = '" + BillNo + "'   ";
        console.log("足踏迭起的", SQLUPt);
        yjDBService.exec({
            sql: SQLUPt,
            parameters: paramList,
            rowsAsArray: true,
            success: function (result) {
                var retcode = { "status": "OK", "message": "单据建立完成", "BillNo": BillNo };
                sender.success(retcode);
            },
            error: sender.error
        });
    }
    function nulReplaceTxt(passTxt) {
        var ret = '';
        ret = (passTxt == null || passTxt == undefined) ? ('') : passTxt;
        return ret;
    }
    function nulReplace0(passTxt) {
        var ret = '';
        ret = (passTxt == null || passTxt == undefined || passTxt == '') ? ('0') : passTxt;
        return ret;
    }
}
    // function eraseInvoice() {
    //     var Advstr = sender.req.query.Advstr;
    //     var BillNo = Advstr.BillNo;
    //     let SQLDelete1 = "Delete From `bgu_claim` where BillNo=?   ";
    //     let SQLDelete2 = "Delete From `bgu_claimdetail` where BillNo=?   ";

    //     yjDBService.exec({
    //         sql: SQLDelete1,
    //         parameters: [BillNo],
    //         success: function (result) {

    //             yjDBService.exec({
    //                 sql: SQLDelete2,
    //                 parameters: [BillNo],
    //                 success: function (result2) {
    //                     console.log("大乔@@", BillNo);
    //                     beginInvoice();
    //                 },
    //                 error: {},
    //             });
    //         },
    //         error: {},
    //     });
    // }