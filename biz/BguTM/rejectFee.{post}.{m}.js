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
                var SendStatus = '';
                var CurText = '';
                var AppFlag = 0;
                var fixdate = '';
                var fixlv = '';
                for (var i = 0; i < data.length; i++) {
                    Track = data[i].Track;
                    var TrackUU = JSON.parse(Track);
                    // console.log("别问我谁  ", Track); 
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
                        fixdate = "  MagDate ='" + EntryDate + "' ";
                        fixlv = "  Level2 ='N' ";
                    }
                    if (curtjob == 'vip') {
                        fixdate = "  VipDate ='" + EntryDate + "' ";
                        fixlv = "  Level3 ='N' ";
                    }
                    if (curtjob == 'pur') {
                        fixdate = "  PurDate ='" + EntryDate + "' ";
                        fixlv = "  Level4 ='N' ";
                    }
                    if (curtjob == 'pex') {
                        fixdate = "  PexDate ='" + EntryDate + "' ";
                        fixlv = "  Level5 ='N' ";
                    }
                    if (curtjob == 'cfo') {
                        fixdate = "  CfoDate ='" + EntryDate + "' ";
                        fixlv = "  Level6 ='N' ";
                    }
                    if (curtjob == 'psd') {
                        fixdate = "  PsdDate ='" + EntryDate + "' ";
                        fixlv = "  Level7 ='N' ";
                    }
                    if (curtjob == 'ceo') {
                        fixdate = "  CeoDate ='" + EntryDate + "' ";
                        fixlv = "  Level8 ='N' ";
                    }
                    if (curtjob == 'bod') {
                        fixdate = "  BodDate ='" + EntryDate + "' ";
                        fixlv = "  Level9 ='N' ";
                    }
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

                CurStatus = 'R';
                CurText = '退回';
                console.log("赔了夫人....",BillNo, CurText, CurStatus, fixdate, fixlv);

                HandleRule(BillNo, CurText, CurStatus, fixdate, fixlv);
            },
            error: sender.error
        });
    }
    function HandleRule(BillNo, CurText, CurStatus, fixdate, fixlv) {
        let SQL = "Update `bgu_rule` set   CurText = ?, CurStatus = ? , " +
            " " + fixdate + " , " + fixlv + "  where  BillNo=?  ";
        yjDBService.exec({
            sql: SQL,
            parameters: [CurText, CurStatus, BillNo],
            rowsAsArray: true,
            success: function (result) {
                NoticeEvery();
            },
            error: sender.error
        });
    }
    function NoticeEvery() {
        var retcode = { "Status": "OK", "message": "此单驳回不准", "BillNo": BillNo };
        sender.success(retcode);
        console.log("吴宣仪 ", retcode);
    }
}

