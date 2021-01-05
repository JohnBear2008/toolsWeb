require("../../client/js/Date.js");
require("../../client/js/funs.js");
module.exports = function (sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
    var async = require("async");

    let now = new Date();
    var EntryDate = now.Format("yyyyMMdd");
    var BillNo = sender.req.query.BillNo;
	var queryApplicNo = sender.req.query.ApplicNo;
	var qryCurWorkId = sender.req.query.CurWorkId;
	var qryCurName = sender.req.query.CurName;
	console.log("查询ID", qryCurWorkId);
	console.log("查询人", qryCurName);
	console.log("查询号", BillNo);
    QueryParts();
    function QueryParts() {
        var filter = " 1=1 ";
        var orderBy = '';
        var limit = '5000';
        var capacity = '';
        let SQLExecute = "  SELECT  * from bgu_rule trul  where  trul.billNo= ?   ";
        let paramelist = [BillNo];
        let dataArr = [];
        yjDBService.exec({
            sql: SQLExecute,
            parameters: paramelist,
            rowsAsArray: true,
            success: function (result) {
                var data = yjDB.dataSet2ObjectList(result.meta, result.rows);
                var nextLevel = '';
                var nextjob = '';
                var curtjob = '';
                var nextWorkId = '';
                var nextName = '';
                let Track = [];
                var TermiLevel = '';
				var CurLevel = '';
				var CurWorkId = '';
				var CurName = '';
                var CurStatus = 'R';
                var Status = '';
                var StatusText = '';
                var AppFlag = 0;
                var fixdate = '';
                var fixlv = '';
                for (var i = 0; i < data.length; i++) {
                    Track = data[i].Track;
                    var TrackUU = JSON.parse(Track);
                    console.log("别问我谁  ", Track);
                    console.log("矢发的  ", TrackUU);
                    console.log("矢纱夏  ", TrackUU[0].Level2);
                    CurLevel = data[i].CurLevel;
                    TermiLevel = data[i].TermiLevel;
                    CurWorkId = data[i].CurWorkId;
                    CurName = data[i].CurName;
                    nextLevel = parseInt(CurLevel) + 1;
                    if (nextLevel == TermiLevel) {
                        AppFlag = 1;
                    }
                    if (nextLevel == 2) {
                        curtjob = TrackUU[0].Level1;   
                        nextjob = TrackUU[0].Level2;   
                        console.log("-----------------推2推推  ", nextjob);
                    }
                    if (nextLevel == 3) {
                        curtjob = TrackUU[0].Level2;   
                        nextjob = TrackUU[0].Level3;   
                        console.log("---------------推3推推  ", nextjob);
                    }
                    if (nextLevel == 4) {
                        curtjob = TrackUU[0].Level3;  
                        nextjob = TrackUU[0].Level4;
                        console.log("---------------推4推推  ", nextjob);
                    }
                    if (nextLevel == 5) {
                        curtjob = TrackUU[0].Level4;  
                        nextjob = TrackUU[0].Level5;
                        console.log("---------------推5推  ", nextjob);
                    }
                    if (nextLevel == 6) {
                        curtjob = TrackUU[0].Level5;  
                        nextjob = TrackUU[0].Level6;
                        console.log("---------------推6推  ", nextjob);
                    }
                    if (nextLevel == 7) {
                        curtjob = TrackUU[0].Level6;  
                        nextjob = TrackUU[0].Level7;
                        console.log("---------------推7推  ", nextjob);
                    }
                    if (nextLevel == 8) {
                        curtjob = TrackUU[0].Level7;  
                        nextjob = TrackUU[0].Level8;
                        console.log("---------------推8推  ", nextjob);
                    }
                    if (nextLevel == 9) {
                        curtjob = TrackUU[0].Level8;  
                        nextjob = TrackUU[0].Level9;
                        console.log("---------------推10推  ", nextjob);
                    }
                    if (curtjob == 'dpt') {
                        fixdate = "  dptDate ='" + EntryDate + "' ";
                        fixlv = "  Level2 ='N' ";
                    }
                    if (curtjob == 'vip') {
                        fixdate = "  vipDate ='" + EntryDate + "' ";
                        fixlv = "  Level3 ='N' ";
                    }
                    if (curtjob == 'pur') {
                        fixdate = "  purDate ='" + EntryDate + "' ";
                        fixlv = "  Level4 ='N' ";
                    }
                    if (curtjob == 'pex') {
                        fixdate = "  pexDate ='" + EntryDate + "' ";
                        fixlv = "  Level5 ='N' ";
                    }
                    if (curtjob == 'cfo') {
                        fixdate = "  cfoDate ='" + EntryDate + "' ";
                        fixlv = "  Level6 ='N' ";
                    }
                    if (curtjob == 'psd') {
                        fixdate = "  psdDate ='" + EntryDate + "' ";
                        fixlv = "  Level7 ='N' ";
                    }
                    if (curtjob == 'ceo') {
                        fixdate = "  ceoDate ='" + EntryDate + "' ";
                        fixlv = "  Level8 ='N' ";
                    }
                    if (curtjob == 'bod') {
                        fixdate = "  bodDate ='" + EntryDate + "' ";
                        fixlv = "  Level9 ='N' ";
                    }
                    console.log("塞值8  ", fixdate);
                    if (nextjob == 'vip') {
                        nextWorkId = data[i].VipWorkId;
                        nextName = data[i].VipName;
                    }
                    if (nextjob == 'pur') {
                        nextWorkId = data[i].PurWorkId;
                        nextName = data[i].PurName;
                    }
                    if (nextjob == 'pex') {
                        nextWorkId = data[i].PexWorkId;
                        nextName = data[i].PexName;
                    }
                    if (nextjob == 'cfo') {
                        nextWorkId = data[i].CfoWorkId;
                        nextName = data[i].CfoName;
                    }
                    if (nextjob == 'psd') {
                        nextWorkId = data[i].PsdWorkId;
                        nextName = data[i].PsdName;
                    }
                    if (nextjob == 'ceo') {
                        nextWorkId = data[i].CeoWorkId;
                        nextName = data[i].CeoName;
                    }
                    if (nextjob == 'bod') {
                        nextWorkId = data[i].BodWorkId;
                        nextName = data[i].BodName;
                    }
                }
                if (AppFlag == 1) {
                    Status = '1';
                    console.log("翻盘成功  ", AppFlag);
                } else {
                    Status = '2';
                    StatusText = '退回';
                    console.log("翻盘失算....", AppFlag);
                }
                HandleParts(BillNo, Status , StatusText , CurStatus, fixdate, fixlv);
                console.log("妲己nextLevel", nextLevel);
                console.log("妲己EntryDate", EntryDate);
                console.log("妲己nextName", nextName);
                console.log("妲己nextWorkId", nextWorkId);
            },
            error: sender.error
        });
    }
    function HandleParts(BillNo, Status, StatusText , CurStatus, fixdate, fixlv) {
        let SQL = "Update `bgu_rule` set  Status = ? , StatusText = ?, CurStatus = ? , " +
            " " + fixdate + " , " + fixlv + "  where  BillNo=?  ";
        console.log("香月SQL:", SQL);

        yjDBService.exec({
            sql: SQL,
            parameters: [Status, StatusText , CurStatus, BillNo],
            rowsAsArray: true,
            success: function (result) {
                var retcode = { "Status": "OK", "message": "审批完成", "BillNo": BillNo };
                sender.success(retcode);
                console.log("进那 ", retcode);
            },
            error: sender.error
        });
    }
}

