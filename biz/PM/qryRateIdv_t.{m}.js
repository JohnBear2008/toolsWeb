require("../../client/js/Date.js");

module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
    var async = require("async");
    var obj = sender.req.query;
    var param1=sender.req.query.weekbeg;  
    var param2=sender.req.query.weekend; 
    var lastbeg=sender.req.query.lastbeg;  
    var lastend=sender.req.query.lastend;  
 
    var DBTable=sender.req.query.DBTable; 
    var sqlGetTableData = "SELECT * FROM "+DBTable;
    sqlGetTableData = "SELECT * FROM ms_agent where FID=?  ";
    var sql_SoftDep1 = " Select `BPID`,`CTRName`, `PGEMaker`,`taskStaffs`,  `applyDate`," +
    " `limitDate`,  `makeDate`, auditDate,`PLDArea`,LEFT(tbb.`topic`, 256) as topic_cut" +
    " from `ppm_bills_plan_t` tbb where tbb.LimitDate >'2019-11-20' and tbb.LimitDate < '2019-11-24' and PGEMaker in (Select staffName from ppm_staffs tb1 where tb1.staffRole='程序员' order by staffID)  ";

    var sql_SoftDep2 = "SELECT *  FROM `pm_Shipment` where staff in (Select staffName from ppm_staffs tb1 where tb1.staffRole='程序员' order by staffID) " ;

    var sql_SoftDep3 = " SELECT *  FROM `pm_neworder` where staff in (Select staffName from ppm_staffs tb1 where tb1.staffRole='程序员' order by staffID)  " ;
   
    var sql_Page2Num = "Select  count(*) as times from `ppm_bills_plan_t` tbb where tbb.LimitDate >'2019-11-20' and tbb.LimitDate < '2019-11-24' and tbb.LimitDate > tbb.WFEndDate  "+
                       " and PGEMaker in (Select staffName from ppm_staffs tb1 where tb1.staffRole='程序员' order by staffID) "; 

    var staff =[ "梅迪凡","王涛","王浩宇","沈航凯","虞晔文","俞洋","裘凯迪", "王锋","陈浩天","张铖","单霖霖","孙维泽","方林杰","柳张成", "谷永亮","赵韦","杨金鑫","谢涛","戎桂"];
    var dpt = "A";
    var dptB = "B";
    let now  = new Date();
    var duedate = now.Format("yyyy-MM-dd");;
     //表头 FQC测试完成时间，若超出任务单中的需求完成日期（当多个任务单需求日期不一致时，抓取期限最长的日期），则算为延误
    var sql_Page2Head =  " Select groupLabel,staffName,staffWorkType from ppm_staffs tb1 where tb1.staffRole='程序员' and staffName<>'周筱龙' order by staffID "; 
    //上周单   1118-1125
    var sql_Page2A1 = 
    " SELECT  count(*) as times FROM (SELECT * FROM  (SELECT tbb.*,CASE tbb.WFStatus WHEN 0 THEN '终止归档' WHEN 100 THEN '完结归档' END "+ 
    " AS WFEndText  FROM `ppm_bills_plan_t` tbb, (SELECT BPID,MAX(version) AS maxPLDVersion FROM `ppm_bills_plan_t`  GROUP BY BPID) tba  "+ 
    " WHERE tbb.BPID=tba.BPID AND tbb.version=tba.maxPLDVersion ) ta Left join (SELECT tbc.pbhBPID,tbc.emailDate  FROM `ppm_bills_pbh` tbc, "+ 
    " (SELECT pbhBPID,MAX(PBHVersion) AS maxPBHVersion FROM `ppm_bills_pbh`GROUP BY pbhBPID) tbd  WHERE tbc.pbhBPID=tbd.pbhBPID AND tbc.PBHVersion=tbd.maxPBHVersion ) "+ 
    " tb on ta.BPID=tb.pbhBPID ) A  where ApplyDate <=? and emaildate >=? and emaildate <=? ";
    //本周新单  1125~1202
    var sql_Page2A2 = 
" SELECT  count(*) as times FROM (SELECT * FROM  (SELECT tbb.*,CASE tbb.WFStatus WHEN 0 THEN '终止归档' WHEN 100 THEN '完结归档' END "+ 
" AS WFEndText  FROM `ppm_bills_plan_t` tbb, (SELECT BPID,MAX(version) AS maxPLDVersion FROM `ppm_bills_plan_t`  GROUP BY BPID) tba  "+ 
" WHERE tbb.BPID=tba.BPID AND tbb.version=tba.maxPLDVersion ) ta Left join (SELECT tbc.pbhBPID,tbc.emailDate  FROM `ppm_bills_pbh` tbc, "+ 
" (SELECT pbhBPID,MAX(PBHVersion) AS maxPBHVersion FROM `ppm_bills_pbh`GROUP BY pbhBPID) tbd  WHERE tbc.pbhBPID=tbd.pbhBPID AND tbc.PBHVersion=tbd.maxPBHVersion ) "+ 
" tb on ta.BPID=tb.pbhBPID ) A  where ApplyDate >=? and ApplyDate <= ? ";

      //按时完成 
    var sql_Page2B1 =
    //  " Select count(distinct BPID) as times from `ppm_bills_plan_t` tbb LEFT JOIN (select  MAX(taskFinishDate) AS taskFinishDate, taskBPID  from ppm_bills_task  GROUP by BTID ) tbk "+ 
    // " ON tbb.BPID=tbk.taskBPID where tbk.taskFinishDate > tbb.limitdate and tbb.applyDate >? and tbb.applyDate <?    "; 
    " SELECT  count(*) as times FROM (SELECT * FROM  (SELECT tbb.*,CASE tbb.WFStatus WHEN 0 THEN '终止归档' WHEN 100 THEN '完结归档' END "+ 
    " AS WFEndText  FROM `ppm_bills_plan_t` tbb, (SELECT BPID,MAX(version) AS maxPLDVersion FROM `ppm_bills_plan_t`  GROUP BY BPID) tba  "+ 
    " WHERE tbb.BPID=tba.BPID AND tbb.version=tba.maxPLDVersion ) ta Left join (SELECT tbc.pbhBPID,tbc.emailDate  FROM `ppm_bills_pbh` tbc, "+ 
    " (SELECT pbhBPID,MAX(PBHVersion) AS maxPBHVersion FROM `ppm_bills_pbh`GROUP BY pbhBPID) tbd  WHERE tbc.pbhBPID=tbd.pbhBPID AND tbc.PBHVersion=tbd.maxPBHVersion ) "+ 
    " tb on ta.BPID=tb.pbhBPID ) A  where emaildate <= limitdate and ApplyDate >=? and ApplyDate <= ?   ";
        
   //延期已完成 ok
    var sql_Page2B2 =
    //  " Select count(distinct BPID) as times from `ppm_bills_plan_t` tbb LEFT JOIN (select  MAX(taskFinishDate) AS taskFinishDate, taskBPID  from ppm_bills_task  GROUP by BTID ) tbk "+ 
    // " ON tbb.BPID=tbk.taskBPID where tbk.taskFinishDate <= tbb.limitdate and tbb.applyDate >? and tbb.applyDate <?    "; 
    " SELECT  count(*) as times FROM (SELECT * FROM  (SELECT tbb.*,CASE tbb.WFStatus WHEN 0 THEN '终止归档' WHEN 100 THEN '完结归档' END "+ 
    " AS WFEndText  FROM `ppm_bills_plan_t` tbb, (SELECT BPID,MAX(version) AS maxPLDVersion FROM `ppm_bills_plan_t`  GROUP BY BPID) tba  "+ 
    " WHERE tbb.BPID=tba.BPID AND tbb.version=tba.maxPLDVersion ) ta Left join (SELECT tbc.pbhBPID,tbc.emailDate  FROM `ppm_bills_pbh` tbc, "+ 
    " (SELECT pbhBPID,MAX(PBHVersion) AS maxPBHVersion FROM `ppm_bills_pbh`GROUP BY pbhBPID) tbd  WHERE tbc.pbhBPID=tbd.pbhBPID AND tbc.PBHVersion=tbd.maxPBHVersion ) "+ 
    " tb on ta.BPID=tb.pbhBPID ) A  where emaildate > limitdate and ApplyDate >=? and ApplyDate <= ? and WFEndText is not null";
    //客户取消
    var sql_Page2B3 = 
    // " Select count(distinct BPID) as times from `ppm_bills_plan_t` tbb LEFT JOIN (select  MAX(taskFinishDate) AS taskFinishDate, taskBPID  from ppm_bills_task  GROUP by BTID ) tbk "+ 
    // " ON tbb.BPID=tbk.taskBPID where tbk.taskFinishDate is null and tbb.applyDate >? and tbb.applyDate <?    ";               
    " SELECT  count(*) as times FROM (SELECT * FROM  (SELECT tbb.*,CASE tbb.WFStatus WHEN 0 THEN '终止归档' WHEN 100 THEN '完结归档' END "+ 
    " AS WFEndText  FROM `ppm_bills_plan_t` tbb, (SELECT BPID,MAX(version) AS maxPLDVersion FROM `ppm_bills_plan_t`  GROUP BY BPID) tba  "+ 
    " WHERE tbb.BPID=tba.BPID AND tbb.version=tba.maxPLDVersion ) ta Left join (SELECT tbc.pbhBPID,tbc.emailDate  FROM `ppm_bills_pbh` tbc, "+ 
    " (SELECT pbhBPID,MAX(PBHVersion) AS maxPBHVersion FROM `ppm_bills_pbh`GROUP BY pbhBPID) tbd  WHERE tbc.pbhBPID=tbd.pbhBPID AND tbc.PBHVersion=tbd.maxPBHVersion ) "+ 
    " tb on ta.BPID=tb.pbhBPID ) A  where WFEndText='终止归档'  and ApplyDate >=? and ApplyDate <= ?   ";
  
    //延期未完成 3参数   and emailDate is null
    var sql_Page2C1 = 
    // "Select count(distinct BPID) as times from `ppm_bills_plan_t` tbb LEFT JOIN (select  MAX(taskFinishDate) AS taskFinishDate, taskBPID  from ppm_bills_task  GROUP by BTID ) tbk "+ 
    // " ON tbb.BPID=tbk.taskBPID where tbb.applyDate >? and tbb.applyDate <? and (tbb.LimitDate > ? and tbb.LimitDate <> '') and tbk.taskFinishDate is null   "; 
    " SELECT  count(*) as times FROM (SELECT * FROM  (SELECT tbb.*,CASE tbb.WFStatus WHEN 0 THEN '终止归档' WHEN 100 THEN '完结归档' END "+ 
    " AS WFEndText  FROM `ppm_bills_plan_t` tbb, (SELECT BPID,MAX(version) AS maxPLDVersion FROM `ppm_bills_plan_t`  GROUP BY BPID) tba  "+ 
    " WHERE tbb.BPID=tba.BPID AND tbb.version=tba.maxPLDVersion ) ta Left join (SELECT tbc.pbhBPID,tbc.emailDate  FROM `ppm_bills_pbh` tbc, "+ 
    " (SELECT pbhBPID,MAX(PBHVersion) AS maxPBHVersion FROM `ppm_bills_pbh`GROUP BY pbhBPID) tbd  WHERE tbc.pbhBPID=tbd.pbhBPID AND tbc.PBHVersion=tbd.maxPBHVersion ) "+ 
    " tb on ta.BPID=tb.pbhBPID ) A  where  ApplyDate >=? and ApplyDate <= ?  and ? > LimitDate and emailDate is null and WFEndDate is NUll  and WFEndText is NULL ";

    //期限未到  // (tbb.LimitDate <= dueDate and tbb.LimitDate <> '' ) and tbk.taskFinishDate is null
    var sql_Page2C2 =
    //  "Select count(distinct BPID) as times from `ppm_bills_plan_t` tbb LEFT JOIN (select  MAX(taskFinishDate) AS taskFinishDate, taskBPID  from ppm_bills_task  GROUP by BTID ) tbk "+ 
    // " ON tbb.BPID=tbk.taskBPID where tbb.applyDate >? and tbb.applyDate <? and (tbb.LimitDate <= ? and tbb.LimitDate <> '') and tbk.taskFinishDate is null   "; 
    " SELECT  count(*) as times FROM (SELECT * FROM  (SELECT tbb.*,CASE tbb.WFStatus WHEN 0 THEN '终止归档' WHEN 100 THEN '完结归档' END "+ 
    " AS WFEndText  FROM `ppm_bills_plan_t` tbb, (SELECT BPID,MAX(version) AS maxPLDVersion FROM `ppm_bills_plan_t`  GROUP BY BPID) tba  "+ 
    " WHERE tbb.BPID=tba.BPID AND tbb.version=tba.maxPLDVersion ) ta Left join (SELECT tbc.pbhBPID,tbc.emailDate  FROM `ppm_bills_pbh` tbc, "+ 
    " (SELECT pbhBPID,MAX(PBHVersion) AS maxPBHVersion FROM `ppm_bills_pbh`GROUP BY pbhBPID) tbd  WHERE tbc.pbhBPID=tbd.pbhBPID AND tbc.PBHVersion=tbd.maxPBHVersion ) "+ 
    " tb on ta.BPID=tb.pbhBPID ) A  where  ApplyDate >=? and ApplyDate <= ?  and ? <= LimitDate  and WFEndDate is NUll  and WFEndText is NULL ";

   //上周遗留按时通过
    var sql_RemainDone = 
    " SELECT  count(*) as times FROM (SELECT * FROM  (SELECT tbb.*,CASE tbb.WFStatus WHEN 0 THEN '终止归档' WHEN 100 THEN '完结归档' END "+ 
    " AS WFEndText  FROM `ppm_bills_plan_t` tbb, (SELECT BPID,MAX(version) AS maxPLDVersion FROM `ppm_bills_plan_t`  GROUP BY BPID) tba  "+ 
    " WHERE tbb.BPID=tba.BPID AND tbb.version=tba.maxPLDVersion ) ta Left join (SELECT tbc.pbhBPID,tbc.emailDate  FROM `ppm_bills_pbh` tbc, "+ 
    " (SELECT pbhBPID,MAX(PBHVersion) AS maxPBHVersion FROM `ppm_bills_pbh`GROUP BY pbhBPID) tbd  WHERE tbc.pbhBPID=tbd.pbhBPID AND tbc.PBHVersion=tbd.maxPBHVersion ) "+ 
    " tb on ta.BPID=tb.pbhBPID ) A  where ApplyDate <=? and emaildate >=? and emaildate <=? and emaildate <= limitdate  and WFEndText is not null";

    //上周遗留延时通过 
    var sql_RemainLateDone = 
    " SELECT  count(*) as times FROM (SELECT * FROM  (SELECT tbb.*,CASE tbb.WFStatus WHEN 0 THEN '终止归档' WHEN 100 THEN '完结归档' END "+ 
    " AS WFEndText  FROM `ppm_bills_plan_t` tbb, (SELECT BPID,MAX(version) AS maxPLDVersion FROM `ppm_bills_plan_t`  GROUP BY BPID) tba  "+ 
    " WHERE tbb.BPID=tba.BPID AND tbb.version=tba.maxPLDVersion ) ta Left join (SELECT tbc.pbhBPID,tbc.emailDate  FROM `ppm_bills_pbh` tbc, "+ 
    " (SELECT pbhBPID,MAX(PBHVersion) AS maxPBHVersion FROM `ppm_bills_pbh`GROUP BY pbhBPID) tbd  WHERE tbc.pbhBPID=tbd.pbhBPID AND tbc.PBHVersion=tbd.maxPBHVersion ) "+ 
    " tb on ta.BPID=tb.pbhBPID ) A  where ApplyDate <=? and emaildate >=? and emaildate <=? and emaildate > limitdate  and WFEndText is not null";

   //上周遗留未完成
    var sql_RemainNotDo = 
    " SELECT  count(*) as times FROM (SELECT * FROM  (SELECT tbb.*,CASE tbb.WFStatus WHEN 0 THEN '终止归档' WHEN 100 THEN '完结归档' END "+ 
    " AS WFEndText  FROM `ppm_bills_plan_t` tbb, (SELECT BPID,MAX(version) AS maxPLDVersion FROM `ppm_bills_plan_t`  GROUP BY BPID) tba  "+ 
    " WHERE tbb.BPID=tba.BPID AND tbb.version=tba.maxPLDVersion ) ta Left join (SELECT tbc.pbhBPID,tbc.emailDate  FROM `ppm_bills_pbh` tbc, "+ 
    " (SELECT pbhBPID,MAX(PBHVersion) AS maxPBHVersion FROM `ppm_bills_pbh`GROUP BY pbhBPID) tbd  WHERE tbc.pbhBPID=tbd.pbhBPID AND tbc.PBHVersion=tbd.maxPBHVersion ) "+ 
    " tb on ta.BPID=tb.pbhBPID ) A  where ApplyDate <=? and emaildate >=? and emaildate <=? and WFEndDate is NUll  and WFEndText is NULL ";

    //其他  notdone
    var sql_Page2C3 = "Select count(distinct BPID) as times from `ppm_bills_plan_t` tbb LEFT JOIN (select  MAX(taskFinishDate) AS taskFinishDate, taskBPID  from ppm_bills_task  GROUP by BTID ) tbk "+ 
    " ON tbb.BPID=tbk.taskBPID where tbb.applyDate >=? and tbb.applyDate <=? and tbb.LimitDate is null and tbk.taskFinishDate is null   "; 
    //tbb.LimitDate is null and tbk.taskFinishDate is null
    //延期单数/本周总出货数  
    var sql_Page2Late = "Select  count(*) as times from `ppm_bills_plan_t` tbb where tbb.ApplyDate >=? and tbb.ApplyDate <= ?    "+
    "  and  tbb.LimitDate > tbb.auditDate  ";   // B2/(B1)
    //已完成总单/本周总单  
    var sql_Page2Done = "Select  count(*) as times from `ppm_bills_plan_t` tbb where tbb.ApplyDate >=? and tbb.ApplyDate <= ?    "+
    "  and tbb.auditDate <> '' ";        //  B-all/A2

    var dataArr=[]; 
    let LastDateRange = getLastWeekRange();
    let LastWeekbeg = LastDateRange[0].Format("yyyy-MM-dd");
    let LastWeekend = LastDateRange[1].Format("yyyy-MM-dd");
    //labuse
    // duedate ='2019-10-30';
    // LastWeekbeg = '2019-10-01';
    // LastWeekend = '2019-10-13';
    LastWeekbeg = lastbeg;
    LastWeekend = lastend;

    let DateRange = getThisWeekRange();
    let WeekThisbeg = DateRange[0].Format("yyyy-MM-dd");
    let WeekThisend = DateRange[1].Format("yyyy-MM-dd");
    //labuse
    // WeekThisbeg = '2019-10-15';
    // WeekThisend = '2019-10-31';
    WeekThisbeg = param1;
    WeekThisend = param2;
    let YesterThis = '';
    YesterThis = getPrevDay(WeekThisbeg);
    console.log("部門统计表格开始日:","昨日",YesterThis,"开始",WeekThisbeg ,"到期日:",WeekThisend);  
    async.parallel([ funPage2Head, funPage2A1 , funPage2A2 , funPage2B1 , funPage2B2 , funPage2B3 , funPage2C1 , funPage2C2 , funPage2C3, funPage2Late, funPage2Done ,  funRemainDone , funRemainLateDone, funRemainNotDo ], 
    function(err, result) {
		if (err) {

		} else {
          
            let sub=[]; 
            sub[0] = 0,sub[1] = 0, sub[2] = 0,sub[3] = 0, sub[4] = 0,sub[5] = 0, sub[6] = 0, sub[7] = 0, sub[8] = 0, sub[9] = 0, sub[10] = 0, sub[11] = 0;
            sub[0] = result[0][0].Times; //nouse
            sub[1] = result[1][0].Times;
            sub[2] = result[2][0].Times;
            sub[3] = result[3][0].Times;
            sub[4] = result[4][0].Times;
            sub[5] = result[5][0].Times;
            sub[6] = result[6][0].Times;
            sub[7] = result[7][0].Times;
            sub[8] = result[8][0].Times;
            //中间两个pass
            sub[11] = result[11][0].Times;  //RemainDone
            sub[12] = result[12][0].Times;  //RemainLateDone
            sub[13] = result[13][0].Times;  //RemainNotDo
 
                        
           // var rate = sub[4]/(sub[3]+sub[4]+sub[5])*100;  //延期已完成+延期未完成=延期的单数/总单
           console.log("延误率",sub[4],sub[6],sub[12],sub[13],"总单",sub[1],sub[2]);
            var rate = (sub[4]+sub[6]+sub[12]+sub[13])/(sub[1]+sub[2])*100;  
            if(rate!=null && typeof rate!="undefined" && rate!=0){
                rate = rate.toFixed(1);  
            }
            if(   rate!='NaN' && rate!="NaN" &&   rate!=0){
                rate =rate+"%";
            }else{
            }
            var perc = (sub[3]+sub[4]+sub[5])/(sub[2] )*100;
            if(perc!=null && typeof perc!="undefined" && perc!=0){
                perc = perc.toFixed(1);  
            }
            if(   perc!='NaN' && perc!="NaN" &&   perc!=0){
                perc =perc+"%";
            }else{
            }
            for (var i = 0; i < 1 ; i++) {
                var obj={
                    "SHIPTYPE":"宁波PM记录",
                    "Staff":"", 
                    "Bill_STAT1":result[1][i].Times, 
                    "Bill_STAT2":result[2][i].Times, 
                    "Bill_STAT3":result[3][i].Times+result[11][i].Times,  
                    "Bill_STAT4":result[4][i].Times+result[12][i].Times, 
                    "Bill_STAT5":result[5][i].Times ,
                    "Bill_STAT6":result[6][i].Times+result[13][i].Times, 
                    "Bill_STAT7":result[7][i].Times,  
                    "Bill_STAT8":result[8][i].Times,  
                    "PERC_LATE": rate,  
                    "PERC_DONE": perc,  
                };
                dataArr.push(obj);
            }
            sender.success(dataArr);
            console.log("部門出货1总计",obj); 
        }
    });     
       

    function funPage2Head(cb){
        yjDBService.exec({
            sql : sql_Page2Head,
            parameters : [],
            rowsAsArray : true,
            success : function(r) {
                var datas = []
                var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                for (var i = 0; i < data.length; i++) {
                    var temp = {
                        "groupLabel" : data[i].groupLabel ,
                        "staffName" : data[i].staffName, 
                    }
                //  console.log("呆哥", temp);
                    datas.push(temp)
                }
                cb(null, datas);
            },
            error : sender.error
        })
    }
 
 
    function funPage2A1(cb){
        yjDBService.exec({
                    sql : sql_Page2A1,
                    parameters : [YesterThis ,WeekThisbeg ,WeekThisend ], 
                    rowsAsArray : true,
                    success : function(r) {
                        var datas = []
                        var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                        for (var i = 0; i < data.length; i++) {
                            var temp = {
                                "Times" : data[i].times , 
                            }
    					    
                            datas.push(temp)
                        }
                        cb(null, datas);
                        //    console.log("页2-遗留", temp );
                    },
                    error : sender.error
                })
    }
    function funPage2A2(cb){
        yjDBService.exec({
                    sql : sql_Page2A2,
                    parameters : [WeekThisbeg ,WeekThisend ], 
                    rowsAsArray : true,
                    success : function(r) {
                        var datas = []
                        var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                        for (var i = 0; i < data.length; i++) {
                            var temp = {
                                "Times" : data[i].times , 
                            }
    					    
                            datas.push(temp)
                        }
                        cb(null, datas);
                        // console.log("页2-本周47:", temp );
                    },
                    error : sender.error
                })
    }
    function funPage2B1(cb){
        yjDBService.exec({
                    sql : sql_Page2B1,
                    parameters : [WeekThisbeg ,WeekThisend ], 
                    rowsAsArray : true,
                    success : function(r) {
                        var datas = []
                        var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                        for (var i = 0; i < data.length; i++) {
                            var temp = {
                                "Times" : data[i].times , 
                            }
    					    
                            datas.push(temp)
                        }
                        cb(null, datas);
                        // console.log("页2-按时完成39：", temp );
                    },
                    error : sender.error
                })
    }
    function funPage2B2(cb){
        yjDBService.exec({
                    sql : sql_Page2B2,
                    parameters : [WeekThisbeg ,WeekThisend ], 
                    rowsAsArray : true,
                    success : function(r) {
                        var datas = []
                        var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                        for (var i = 0; i < data.length; i++) {
                            var temp = {
                                "Times" : data[i].times , 
                            }
    					    
                            datas.push(temp)
                        }
                        cb(null, datas);
                        // console.log("页2-延期已完成 3：", temp );
                    },
                    error : sender.error
                })
    }
    function funPage2B3(cb){
        yjDBService.exec({
                    sql : sql_Page2B3,
                    parameters : [WeekThisbeg ,WeekThisend ], 
                    rowsAsArray : true,
                    success : function(r) {
                        var datas = []
                        var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                        for (var i = 0; i < data.length; i++) {
                            var temp = {
                                "Times" : data[i].times , 
                            }
    					    
                            datas.push(temp)
                        }
                        // console.log("页2-终止3：", temp );

                        cb(null, datas);
                    },
                    error : sender.error
                })
    }
    function funPage2C1(cb){
        yjDBService.exec({
                    sql : sql_Page2C1,
                    parameters : [WeekThisbeg ,WeekThisend ,duedate], 
                    rowsAsArray : true,
                    success : function(r) {
                        var datas = []
                        var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                        for (var i = 0; i < data.length; i++) {
                            var temp = {
                                "Times" : data[i].times , 
                            }
    					    
                            datas.push(temp)
                        }
                        // console.log("页2-延期未完成 2：", temp );
 
                        cb(null, datas);
                    },
                    error : sender.error
                })
    }
    function funPage2C2(cb){
        yjDBService.exec({
                    sql : sql_Page2C2,
                    parameters : [WeekThisbeg ,WeekThisend ,duedate], 
                    rowsAsArray : true,
                    success : function(r) {
                        var datas = []
                        var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                        for (var i = 0; i < data.length; i++) {
                            var temp = {
                                "Times" : data[i].times , 
                            }
    					   
                            datas.push(temp)
                        }
                        // console.log("页2-期限未到 0：", temp );
                        cb(null, datas);
                    },
                    error : sender.error
                })
    }
    function funPage2C3(cb){
        yjDBService.exec({
                    sql : sql_Page2C3,
                    parameters : [WeekThisbeg ,WeekThisend ,dpt], 
                    rowsAsArray : true,
                    success : function(r) {
                        var datas = []
                        var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                        for (var i = 0; i < data.length; i++) {
                            var temp = {
                                "Times" : 0, 
                            }
    					    
                            datas.push(temp)
                        }
                        cb(null, datas);
                    },
                    error : sender.error
                })
    }
    function funPage2Late(cb){
        yjDBService.exec({
                    sql : sql_Page2Late,
                    parameters : [WeekThisbeg ,WeekThisend ,dpt], 
                    rowsAsArray : true,
                    success : function(r) {
                        var datas = []
                        var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                        for (var i = 0; i < data.length; i++) {
                            var temp = {
                                "Times" : data[i].times , 
                            }
    					    
                            datas.push(temp)
                        }
                        cb(null, datas);
                    },
                    error : sender.error
                })
    }
    function funPage2Done(cb){
        yjDBService.exec({
                    sql : sql_Page2Done,
                    parameters : [LastWeekbeg ,LastWeekend ,dptB], 
                    rowsAsArray : true,
                    success : function(r) {
                        var datas = []
                        var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                        for (var i = 0; i < data.length; i++) {
                            var temp = {
                                "Times" : data[i].times , 
                            }
    					    
                            datas.push(temp)
                        }
                        cb(null, datas);
                      
                    },
                    error : sender.error
                })
    }
    function funRemainDone(cb){
        yjDBService.exec({
                    sql : sql_RemainDone,
                    parameters : [YesterThis ,WeekThisbeg ,WeekThisend ], 
                    rowsAsArray : true,
                    success : function(r) {
                        var datas = []
                        var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                        for (var i = 0; i < data.length; i++) {
                            var temp = {
                                "Times" : data[i].times , 
                            }
    					    
                            datas.push(temp)
                        }
                        cb(null, datas);
                        console.log("遗按时9：", temp);
                    },
                    error : sender.error
                })
    }
    function funRemainLateDone(cb){
        yjDBService.exec({
                    sql : sql_RemainLateDone,
                    parameters : [YesterThis ,WeekThisbeg ,WeekThisend ], 
                    rowsAsArray : true,
                    success : function(r) {
                        var datas = []
                        var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                        for (var i = 0; i < data.length; i++) {
                            var temp = {
                                "Times" : data[i].times , 
                            }
    					    
                            datas.push(temp)
                        }
                        cb(null, datas);
                        console.log("遗@@@@@@@延时4：", temp);
                    },
                    error : sender.error
                })
    }
    function funRemainNotDo(cb){
        yjDBService.exec({
                    sql : sql_RemainNotDo,
                    parameters : [YesterThis ,WeekThisbeg ,WeekThisend ], 
                    rowsAsArray : true,
                    success : function(r) {
                        var datas = []
                        var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                        for (var i = 0; i < data.length; i++) {
                            var temp = {
                                "Times" : data[i].times , 
                            }
    					    
                            datas.push(temp)
                        }
                        cb(null, datas);
                        console.log("遗未完0：", temp);
                    },
                    error : sender.error
                })
    }
    function getLastWeekRange() {
        let oneDayLong = 24 * 60 * 60 * 1000;
        let now = new Date();
        let mondayTime = now.getTime() - (14- now.getDay()) * oneDayLong;
        let sundayTime = now.getTime() - (8 - now.getDay()) * oneDayLong;
        let monday = new Date(mondayTime);
        let sunday = new Date(sundayTime);
        let weekRange = [monday, sunday];
    
        return weekRange;
    }
    function getThisWeekRange() {
		let oneDayLong = 24 * 60 * 60 * 1000;
		let now = new Date();
		let mondayTime = now.getTime() - (now.getDay() ) * oneDayLong;
		let sundayTime = now.getTime() - (now.getDay() - 7) * oneDayLong;
		let monday = new Date(mondayTime);
		let sunday = new Date(sundayTime);
		let weekRange = [monday, sunday];

		return weekRange;
    }
    function getPrevDay(ThisDay) {
		let oneDayLong = 24 * 60 * 60 * 1000;
		let now = new Date(ThisDay);
		let mondayTime = now.getTime() - (1) * oneDayLong; 
        let monday = new Date(mondayTime);  
        var dateFormat = monday.Format("yyyy-MM-dd");
		return dateFormat;
    }
};