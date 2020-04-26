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

    console.log("后台个人统计表格开始日:"+param1+"日期:"+param2+"遗起"+lastbeg+"遗止"+lastend  ); 
    var DBTable=sender.req.query.DBTable; 
    let now  = new Date();
    var duedate = now.Format("yyyy-MM-dd");;
    var sql_SoftDep1 = " Select `BPID`,`CTRName`, `taskStaff`,`taskStaffs`,  `applyDate`," +
    " `limitDate`,  `makeDate`, auditDate,`PLDArea`,LEFT(tbb.`topic`, 256) as topic_cut" +
    " from `ppm_bills_plan` tbb where tbb.LimitDate >'2019-11-20' and tbb.LimitDate < '2019-11-24' and taskStaff in (Select staffName from ppm_staffs tb1 where tb1.staffRole='程序员' order by staffID)  ";

    // var staff =[ "梅迪凡","王涛","王浩宇","沈航凯","虞晔文","俞洋","裘凯迪", "王锋","陈浩天","张铖","单霖霖","孙维泽","方林杰","柳张成", "谷永亮","赵韦","杨金鑫","谢涛","戎桂"];
    var staff =[];
    let limitcnt =33;
     //表头 主管审核的时间，若超出任务单中的需求完成日期，则算为延误

    // var sql_Page1Head =  " Select groupLabel,staffName,staffWorkType from ppm_staffs tb1 where (tb1.staffRole='程序员' OR tb1.staffRole='T程序员' OR tb1.staffRole='T程序员+T开单')  and staffName NOT IN ('周筱龙','单霖霖','张胜勇','孙凌财','李源','林盛') order by groupLabel,staffID  limit 33"; 
    //用单子去找人 K0331
    // var sql_Page1Head =  "Select distinct taskStaff as staffName, groupLabel,staffWorkType    FROM ( SELECT tbb.*,CASE tbb.WFStatus WHEN 0 THEN '终止归档' WHEN 100 THEN '完结归档' END AS WFEndText FROM `ppm_bills_task_t` tbb, "+
    // " (SELECT BTID,MAX(BTVersion) AS maxBTVersion FROM `ppm_bills_task_t` GROUP BY BTID) tba WHERE tbb.BTID=tba.BTID AND tbb.BTVersion=tba.maxBTVersion ) tbb   "+
    // " LEFT JOIN ppm_staffs tps on tps.staffName=tbb.taskStaff "+
    // " where ((tbb.taskMakeDate >=? and  tbb.taskMakeDate <= ?) OR (tbb.taskMakeDate >=? and  tbb.taskMakeDate <= ?))  order by groupLabel,staffID limit 33"; 

    var sql_Page1Head = 
    " Select distinct taskStaff as staffName, groupLabel,staffWorkType    FROM ( SELECT tbb.*,CASE tbb.WFStatus WHEN 0 THEN '终止归档' WHEN 100 THEN '完结归档' END AS WFEndText FROM `ppm_bills_task_t` tbb,  "+
    " (SELECT BTID,MAX(BTVersion) AS maxBTVersion FROM `ppm_bills_task_t` GROUP BY BTID) tba WHERE tbb.BTID=tba.BTID AND tbb.BTVersion=tba.maxBTVersion ) tbb   "+
    " LEFT JOIN ppm_staffs tps on tps.staffName=tbb.taskStaff "+
    "  where ( (tbb.taskMakeDate >=? and  tbb.taskMakeDate <= ?)  ) OR (  tbb.taskMakeDate <=?  and  "+
    " tbb.taskFinishDate >=? and tbb.taskFinishDate <=?  or (WFEndText is null and taskFinishDate is null)  )  order by groupLabel,staffID limit 33 ";
    //上周单    
      var sql_Page1A1 =
    // " SELECT count(*) as times  FROM  (SELECT tbb.*,CASE tbb.WFStatus WHEN 0 THEN '终止归档' WHEN 100 THEN '完结归档' END AS WFEndText FROM `ppm_bills_task_t` tbb, "+
    // " (SELECT BTID,MAX(BTVersion) AS maxBTVersion FROM `ppm_bills_task_t` GROUP BY BTID) tba WHERE tbb.BTID=tba.BTID AND tbb.BTVersion=tba.maxBTVersion ) A "+
    // " where (taskMakeDate<? and taskFinishDate>= ? and taskFinishDate<= ? and taskStaff =?  ) ";
    " SELECT count(*) as times  FROM  (SELECT tbb.*,CASE tbb.WFStatus WHEN 0 THEN '终止归档' WHEN 100 THEN '完结归档' END AS WFEndText FROM `ppm_bills_task_t` tbb, "+
    " (SELECT BTID,MAX(BTVersion) AS maxBTVersion FROM `ppm_bills_task_t` GROUP BY BTID) tba WHERE tbb.BTID=tba.BTID AND tbb.BTVersion=tba.maxBTVersion ) A "+
    " where  taskMakeDate <=?  and ((taskFinishDate >=? and taskFinishDate <=? ) "+
    " or (WFEndText is null and taskFinishDate is null   )) and taskStaff =?";
    //本周新单  
    // var sql_Page1A2 = "SELECT count(*) as times FROM ( SELECT tbb.*,CASE tbb.WFStatus WHEN 0 THEN '终止归档' WHEN 100 THEN '完结归档' END AS WFEndText FROM `ppm_bills_task_t` tbb,"+ 
    // " (SELECT BTID,MAX(BTVersion) AS maxBTVersion FROM `ppm_bills_task_t` GROUP BY BTID) tba WHERE  SUBSTRing(tbb.BTID, 14,1) NOT IN('K','L','O','B','R') and tbb.BTID=tba.BTID AND tbb.BTVersion=tba.maxBTVersion ) tbb "+ 
    // " where tbb.taskMakeDate >=? and  tbb.taskMakeDate <= ?  and taskStaff =? ";
    var sql_Page1A2 =
    " SELECT count(*) as times  FROM  (SELECT tbb.*,CASE tbb.WFStatus WHEN 0 THEN '终止归档' WHEN 100 THEN '完结归档' END AS WFEndText FROM `ppm_bills_task_t` tbb, "+
    " (SELECT BTID,MAX(BTVersion) AS maxBTVersion FROM `ppm_bills_task_t` GROUP BY BTID) tba WHERE tbb.BTID=tba.BTID AND tbb.BTVersion=tba.maxBTVersion ) A "+
    " where taskMakeDate>=? and taskMakeDate<=?  and taskStaff =?  ";
    //按时完成
    // var sql_Page1B1 = "Select  count(*) as times from `ppm_bills_task_t` tbb where (  (tbb.taskMakeDate >=? and  tbb.taskMakeDate <= ?)) and  tbb.taskFinishDate <= tbb.IPQCAuditDate  "+
    // " and taskStaff =?  and IPQCAuditResultText ='测试通过' "; 

    var sql_Page1B1 = "SELECT count(*) as times FROM ( SELECT tbb.*,CASE tbb.WFStatus WHEN 0 THEN '终止归档' WHEN 100 THEN '完结归档' END AS WFEndText FROM `ppm_bills_task_t` tbb,"+ 
    " (SELECT BTID,MAX(BTVersion) AS maxBTVersion FROM `ppm_bills_task_t` GROUP BY BTID) tba WHERE  SUBSTRing(tbb.BTID, 14,1) NOT IN('K','L','O','B','R') and tbb.BTID=tba.BTID AND tbb.BTVersion=tba.maxBTVersion ) tbb "+ 
    " where   tbb.taskFinishDate <= tbb.taskLimitDate  and IPQCAuditResultText ='测试通过' and (tbb.taskMakeDate >=? and  tbb.taskMakeDate <= ?) and taskStaff =?  ";

    //延期已完成
    // var sql_Page1B2 = "Select  count(*) as times from `ppm_bills_task_t` tbb where SUBSTRing(BTID, 14,1) NOT IN('K','L','O','B','R') and  (tbb.taskMakeDate >=? and  tbb.taskMakeDate <= ?)  and  tbb.taskFinishDate > tbb.IPQCAuditDate  "+
    // " and taskStaff =?  and IPQCAuditResultText ='测试通过'  "; 
    var sql_Page1B2 = "SELECT count(*) as times FROM ( SELECT tbb.*,CASE tbb.WFStatus WHEN 0 THEN '终止归档' WHEN 100 THEN '完结归档' END AS WFEndText FROM `ppm_bills_task_t` tbb,"+ 
    " (SELECT BTID,MAX(BTVersion) AS maxBTVersion FROM `ppm_bills_task_t` GROUP BY BTID) tba WHERE  SUBSTRing(tbb.BTID, 14,1) NOT IN('K','L','O','B','R') and tbb.BTID=tba.BTID AND tbb.BTVersion=tba.maxBTVersion ) tbb "+ 
    " where tbb.taskFinishDate > tbb.taskLimitDate and IPQCAuditResultText ='测试通过' and (tbb.taskMakeDate >=? and  tbb.taskMakeDate <= ?) and taskStaff =?  ";
    //客户取消
      var sql_Page1B3 =
    // "SELECT count(*) as times FROM ( SELECT tbb.*,CASE tbb.WFStatus WHEN 0 THEN '终止归档' WHEN 100 THEN '完结归档' END AS WFEndText FROM `ppm_bills_task_t` tbb,"+ 
    // " (SELECT BTID,MAX(BTVersion) AS maxBTVersion FROM `ppm_bills_task_t` GROUP BY BTID) tba WHERE  SUBSTRing(tbb.BTID, 14,1) NOT IN('K','L','O','B','R') and tbb.BTID=tba.BTID AND tbb.BTVersion=tba.maxBTVersion ) tbb "+ 
    // " where   (BTStatusText='任务终止' OR BTStatusText='废弃'  OR WFEndText='终止归档') and (tbb.taskMakeDate >=? and  tbb.taskMakeDate <= ?) and taskStaff =?  ";
    "SELECT count(*) as times FROM ( SELECT tbb.*,CASE tbb.WFStatus WHEN 0 THEN '终止归档' WHEN 100 THEN '完结归档' END AS WFEndText FROM `ppm_bills_task_t` tbb,"+ 
    " (SELECT BTID,MAX(BTVersion) AS maxBTVersion FROM `ppm_bills_task_t` GROUP BY BTID) tba WHERE  SUBSTRing(tbb.BTID, 14,1) NOT IN('K','L','O','B','R') and tbb.BTID=tba.BTID AND tbb.BTVersion=tba.maxBTVersion ) tbb "+ 
    " where ( BTStatus =4 or WFStatus=0 ) and (tbb.taskMakeDate >=? and  tbb.taskMakeDate <= ?) and taskStaff =?  ";

    //延期未完成  4参数
    // var sql_Page1C1 = "Select  count(*) as times from `ppm_bills_task_t` tbb where  SUBSTRing(BTID, 14,1) NOT IN('K','L','O','B','R') and (tbb.taskMakeDate >=? and  tbb.taskMakeDate <= ?)   "+
    // " and  taskStaff =? and ? > tbb.taskLimitDate and IPQCAuditResultText is null "; 
    var sql_Page1C1 = "SELECT count(*) as times FROM ( SELECT tbb.*,CASE tbb.WFStatus WHEN 0 THEN '终止归档' WHEN 100 THEN '完结归档' END AS WFEndText FROM `ppm_bills_task_t` tbb,"+ 
    " (SELECT BTID,MAX(BTVersion) AS maxBTVersion FROM `ppm_bills_task_t` GROUP BY BTID) tba WHERE  SUBSTRing(tbb.BTID, 14,1) NOT IN('K','L','O','B','R') and tbb.BTID=tba.BTID AND tbb.BTVersion=tba.maxBTVersion ) tbb "+ 
    " where ( BTStatus !=4 AND WFStatus!=0)  and (tbb.taskMakeDate >=? and  tbb.taskMakeDate <= ?) and taskStaff =? and ? > tbb.taskLimitDate and IPQCAuditResultText is null ";

    //期限未到  4参数
    // var sql_Page1C2 = "Select  count(*) as times from `ppm_bills_task_t` tbb where SUBSTRing(BTID, 14,1) NOT IN('K','L','O','B','R') and  (tbb.taskMakeDate >=? and  tbb.taskMakeDate <= ?) "+
    // " and  taskStaff =? and ? <=tbb.taskLimitDate "; 
    var sql_Page1C2 = "SELECT count(*) as times FROM ( SELECT tbb.*,CASE tbb.WFStatus WHEN 0 THEN '终止归档' WHEN 100 THEN '完结归档' END AS WFEndText FROM `ppm_bills_task_t` tbb,"+ 
    " (SELECT BTID,MAX(BTVersion) AS maxBTVersion FROM `ppm_bills_task_t` GROUP BY BTID) tba WHERE  SUBSTRing(tbb.BTID, 14,1) NOT IN('K','L','O','B','R') and tbb.BTID=tba.BTID AND tbb.BTVersion=tba.maxBTVersion ) tbb "+ 
    " where ( BTStatus !=4 AND WFStatus!=0)  and  (tbb.taskMakeDate >=? and  tbb.taskMakeDate <= ?) and taskStaff =? and ? <=tbb.taskLimitDate  and IPQCAuditResultText is null";

    //上周遗留按时通过
      var sql_RemainDone = 
    // "SELECT count(*) as times  FROM  (SELECT tbb.*,CASE tbb.WFStatus WHEN 0 THEN '终止归档' WHEN 100 THEN '完结归档' END AS WFEndText FROM `ppm_bills_task_t` tbb, "+
    // "(SELECT BTID,MAX(BTVersion) AS maxBTVersion FROM `ppm_bills_task_t` GROUP BY BTID) tba WHERE tbb.BTID=tba.BTID AND tbb.BTVersion=tba.maxBTVersion ) A "+
    // "where( taskMakeDate<? and taskFinishDate>=? and taskFinishDate<=? and taskFinishDate <= taskLimitDate  and taskStaff =?  )   "+
    // "and IPQCAuditResultText ='测试通过' ";

    "SELECT count(*) as times  FROM  (SELECT tbb.*,CASE tbb.WFStatus WHEN 0 THEN '终止归档' WHEN 100 THEN '完结归档' END AS WFEndText FROM `ppm_bills_task_t` tbb, "+
    "(SELECT BTID,MAX(BTVersion) AS maxBTVersion FROM `ppm_bills_task_t` GROUP BY BTID) tba WHERE tbb.BTID=tba.BTID AND tbb.BTVersion=tba.maxBTVersion ) A "+
    "where taskMakeDate <=?  and "+
	" ((taskFinishDate >=? and taskFinishDate <=? )  or (WFEndText is null and taskFinishDate is null) )"+
	" and (  IPQCAuditResultText ='测试通过' and taskFinishDate <= taskLimitDate and taskStaff =?) ";
    //上周遗留延时通过 
    var sql_RemainLateDone = 
    // "SELECT count(*) as times  FROM  (SELECT tbb.*,CASE tbb.WFStatus WHEN 0 THEN '终止归档' WHEN 100 THEN '完结归档' END AS WFEndText FROM `ppm_bills_task_t` tbb, "+
    // "(SELECT BTID,MAX(BTVersion) AS maxBTVersion FROM `ppm_bills_task_t` GROUP BY BTID) tba WHERE tbb.BTID=tba.BTID AND tbb.BTVersion=tba.maxBTVersion ) A "+
    // "where  taskMakeDate<? and taskFinishDate>= ? and taskFinishDate<= ? and taskFinishDate > taskLimitDate and taskStaff =?  "+
    // "and IPQCAuditResultText ='测试通过' ";
    "SELECT count(*) as times  FROM  (SELECT tbb.*,CASE tbb.WFStatus WHEN 0 THEN '终止归档' WHEN 100 THEN '完结归档' END AS WFEndText FROM `ppm_bills_task_t` tbb, "+
    "(SELECT BTID,MAX(BTVersion) AS maxBTVersion FROM `ppm_bills_task_t` GROUP BY BTID) tba WHERE tbb.BTID=tba.BTID AND tbb.BTVersion=tba.maxBTVersion ) A "+
    "where taskMakeDate <=?  and "+
	" ((taskFinishDate >=? and taskFinishDate <=? )  or (WFEndText is null and taskFinishDate is null) )"+
	" and (  IPQCAuditResultText ='测试通过' and taskFinishDate > taskLimitDate  and taskStaff =? ) ";
    //上周遗留未完成
     var sql_RemainNotDo = 
    // " SELECT count(*) as times  FROM  (SELECT tbb.*,CASE tbb.WFStatus WHEN 0 THEN '终止归档' WHEN 100 THEN '完结归档' END AS WFEndText FROM `ppm_bills_task_t` tbb, "+
    // " (SELECT BTID,MAX(BTVersion) AS maxBTVersion FROM `ppm_bills_task_t` GROUP BY BTID) tba WHERE tbb.BTID=tba.BTID AND tbb.BTVersion=tba.maxBTVersion ) A "+
    // " where( taskMakeDate<? and taskFinishDate>=? and taskFinishDate<=? and taskStaff =?   )   "+
    // " and IPQCAuditResultText is null ";
    " SELECT count(*) as times  FROM  (SELECT tbb.*,CASE tbb.WFStatus WHEN 0 THEN '终止归档' WHEN 100 THEN '完结归档' END AS WFEndText FROM `ppm_bills_task_t` tbb, "+
    " (SELECT BTID,MAX(BTVersion) AS maxBTVersion FROM `ppm_bills_task_t` GROUP BY BTID) tba WHERE tbb.BTID=tba.BTID AND tbb.BTVersion=tba.maxBTVersion ) A "+
    "where taskMakeDate <=?  and "+
	" ((taskFinishDate >=? and taskFinishDate <=?  )  or (WFEndText is null and taskFinishDate is null) )"+
	" 	and (  taskStaff =? and IPQCAuditResultText is null  )	";
    //延误率
    var sql_Page1C3 = "Select  count(*) as times from `ppm_bills_task_t` tbb where  SUBSTRing(BTID, 14,1) NOT IN('K','L','O','B','R') and (tbb.taskMakeDate >=? and  tbb.taskMakeDate <= ?)    "+
    " and tbb.taskFinishDate >  tbb.IPQCAuditDate and taskStaff =? "; 

    var dataArr=[]; 
    let LastDateRange = getLastWeekRange();
    let LastWeekbeg = LastDateRange[0].Format("yyyy-MM-dd");
    let LastWeekend = LastDateRange[1].Format("yyyy-MM-dd");
 
    LastWeekbeg = lastbeg;
    LastWeekend = lastend;

    let DateRange = getThisWeekRange();
    let WeekThisbeg = DateRange[0].Format("yyyy-MM-dd");
    let WeekThisend = DateRange[1].Format("yyyy-MM-dd");
  
    WeekThisbeg = param1;
    WeekThisend = param2;
    let YesterThis = '';
    YesterThis = getPrevDay(WeekThisbeg);

    yjDBService.exec({
        sql : sql_Page1Head,
        parameters : [WeekThisbeg,WeekThisend, YesterThis ,WeekThisbeg ,WeekThisend ],
        rowsAsArray : true,
        success : function(r) {
           
            var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
            for (var i = 0; i < data.length; i++) {
                var temp = {
                    "staffName" : data[i].staffName,
                }
                staff.push(data[i].staffName);
            }
            //   console.log("头", staff);
            findHead();
        },
        // error : sender.error
    })
 
    function funPage1Head(cb){
        yjDBService.exec({
            sql : sql_Page1Head,
            parameters : [WeekThisbeg,WeekThisend,YesterThis ,WeekThisbeg ,WeekThisend],
            rowsAsArray : true,
            success : function(r) {
                var datas = []
                var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                for (var i = 0; i < data.length; i++) {
                    var temp = {
                        "groupLabel" :  data[i].groupLabel ,
                        "staffName" : data[i].staffName,
                        "staffWorkType" :  data[i].staffWorkType,
                    }
                    datas.push(temp)
                }
                cb(null, datas);
            },
            error : sender.error
        })
    }
    function funPage1A1(cb){
        var  dataav = [];
        function  allAA( cb2 ,stf){
            yjDBService.exec({
                sql : sql_Page1A1,
                parameters : [YesterThis ,WeekThisbeg ,WeekThisend  ,stf], 
                rowsAsArray : true,
                success : function(r) {
                    var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                    for (var i = 0; i < data.length; i++) {
                        var temp = {
                            "Times" : data[i].times , 
                        }
                       dataav.push(temp);
                    }
                    (cb2(null, temp ));  
                    // console.log("混", temp);
                },
                error : sender.error
            })
        }
        function  A1(cb2 ){
            allAA(cb2,staff[0] );
        }
        function  A2(cb2 ){
            allAA(cb2,staff[1] );
        }
        function  A3(cb2 ){
            allAA(cb2,staff[2] );
        }
        function  A4(cb2 ){
            allAA(cb2,staff[3] );
        }
        function  A5(cb2 ){
            allAA(cb2,staff[4] );
        }
        function  A6(cb2 ){
            allAA(cb2,staff[5] );
        }
        function  A7(cb2 ){
            allAA(cb2,staff[6] );
        }
        function  A8(cb2 ){
            allAA(cb2,staff[7] );
        }
        function  A9(cb2 ){
            allAA(cb2,staff[8] );
        }
        function  A10(cb2 ){
            allAA(cb2,staff[9] );
        }
        function  A11(cb2 ){
            allAA(cb2,staff[10] );
        }
        function  A12(cb2 ){
            allAA(cb2,staff[11] );
        }
        function  A13(cb2 ){
            allAA(cb2,staff[12] );
        }
        function  A14(cb2 ){
            allAA(cb2,staff[13] );
        }
        function  A15(cb2 ){
            allAA(cb2,staff[14] );
        }
        function  A16(cb2 ){
            allAA(cb2,staff[15] );
        }
        function  A17(cb2 ){
            allAA(cb2,staff[16] );
        }
        function  A18(cb2 ){
            allAA(cb2,staff[17] );
        }
        function  A19(cb2 ){
            allAA(cb2,staff[18] );
        }
        function  A20(cb2 ){
            allAA(cb2,staff[19] );
        }
        function  A21(cb2 ){
            allAA(cb2,staff[20] );
        }
        function  A22(cb2 ){
            allAA(cb2,staff[21] );
        }
        function  A23(cb2 ){
            allAA(cb2,staff[22] );
        }
        function  A24(cb2 ){
            allAA(cb2,staff[23] );
        }
        function  A25(cb2 ){
            allAA(cb2,staff[24] );
        }
        function  A26(cb2 ){
            allAA(cb2,staff[25] );
        }        
		function  A27(cb2 ){
            allAA(cb2,staff[26] );
        }
		function  A28(cb2 ){
            allAA(cb2,staff[27] );
        }
		function  A29(cb2 ){
            allAA(cb2,staff[28] );
        }
		function  A30(cb2 ){
            allAA(cb2,staff[29] );
        }
		function  A31(cb2 ){
            allAA(cb2,staff[30] );
        }
		function  A32(cb2 ){
            allAA(cb2,staff[31] );
        }
		function  A33(cb2 ){
            allAA(cb2,staff[32] );
        }        
        let funblock =[];
        for (var i = 0; i < staff.length; i++) {
            if(i==0 ){ funblock.push(A1 ); }
            if(i==1 ){ funblock.push(A2 ); }
            if(i==2 ){ funblock.push(A3 ); }
            if(i==3 ){ funblock.push(A4 ); }
            if(i==4 ){ funblock.push(A5 ); }
            if(i==5 ){ funblock.push(A6 ); }
            if(i==6 ){ funblock.push(A7 ); }
            if(i==7 ){ funblock.push(A8 ); }
            if(i==8 ){ funblock.push(A9 ); }
            if(i==9 ){ funblock.push(A10); }
            if(i==10){ funblock.push(A11); }
            if(i==11){ funblock.push(A12); }
            if(i==12){ funblock.push(A13); }
            if(i==13){ funblock.push(A14); }
            if(i==14){ funblock.push(A15); }
            if(i==15){ funblock.push(A16); }
            if(i==16){ funblock.push(A17); }
            if(i==17){ funblock.push(A18); }
            if(i==18){ funblock.push(A19); }               
            if(i==19){ funblock.push(A20); }     
            if(i==20){ funblock.push(A21); }            
            if(i==21){ funblock.push(A22); }            
            if(i==22){ funblock.push(A23); }            
            if(i==23){ funblock.push(A24); } 
            if(i==24){ funblock.push(A25); } 
            if(i==25){ funblock.push(A26); } 
            if(i==26){ funblock.push(A27); } 
            if(i==27){ funblock.push(A28); } 
            if(i==28){ funblock.push(A29); } 
            if(i==29){ funblock.push(A30); } 
            if(i==30){ funblock.push(A31); } 
            if(i==31){ funblock.push(A32); } 
            if(i==32){ funblock.push(A33); } 
        }
        async.parallel( funblock, 
            function(err, result) {
                if (err) {

                } else {
                    dataav=[];
                    for (var i = 0; i < staff.length; i++) {
                        dataav.push({"Times" : result[i].Times });
                    }
                    // console.log("衝出", dataav);
                    cb(null, dataav);
                }
            }
        );
    }
    async  function funPage1A2(cb){
        var  dataav = [];
        function  allAA( cb2 ,stf){
            yjDBService.exec({
                sql : sql_Page1A2,
                parameters : [WeekThisbeg,WeekThisend,stf], //
                rowsAsArray : true,
                success : function(r) {
                    var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                    // for (var i = 0; i < data.length; i++) {
                        var temp = {
                            "Times" : data[0].times , 
                        }
                       dataav.push(temp);
                    // }
                    //   console.log("本新单", WeekThisbeg,WeekThisend ,"笔：", temp,stf);
                    //   console.log("本新单",  temp,stf);
                    (cb2(null, temp ));  
                },
                error : sender.error
            })
        }
        function  A1(cb2 ){
            allAA(cb2,staff[0] );
        }
        function  A2(cb2 ){
            allAA(cb2,staff[1] );
        }
        function  A3(cb2 ){
            allAA(cb2,staff[2] );
        }
        function  A4(cb2 ){
            allAA(cb2,staff[3] );
        }
        function  A5(cb2 ){
            allAA(cb2,staff[4] );
        }
        function  A6(cb2 ){
            allAA(cb2,staff[5] );
        }
        function  A7(cb2 ){
            allAA(cb2,staff[6] );
        }
        function  A8(cb2 ){
            allAA(cb2,staff[7] );
        }
        function  A9(cb2 ){
            allAA(cb2,staff[8] );
        }
        function  A10(cb2 ){
            allAA(cb2,staff[9] );
        }
        function  A11(cb2 ){
            allAA(cb2,staff[10] );
        }
        function  A12(cb2 ){
            allAA(cb2,staff[11] );
        }
        function  A13(cb2 ){
            allAA(cb2,staff[12] );
        }
        function  A14(cb2 ){
            allAA(cb2,staff[13] );
        }
        function  A15(cb2 ){
            allAA(cb2,staff[14] );
        }
        function  A16(cb2 ){
            allAA(cb2,staff[15] );
        }
        function  A17(cb2 ){
            allAA(cb2,staff[16] );
        }
        function  A18(cb2 ){
            allAA(cb2,staff[17] );
        }
        function  A19(cb2 ){
            allAA(cb2,staff[18] );
        }
        function  A20(cb2 ){
            allAA(cb2,staff[19] );
        }
        function  A21(cb2 ){
            allAA(cb2,staff[20] );
        }
        function  A22(cb2 ){
            allAA(cb2,staff[21] );
        }
        function  A23(cb2 ){
            allAA(cb2,staff[22] );
        }
        function  A24(cb2 ){
            allAA(cb2,staff[23] );
        }
        function  A25(cb2 ){
            allAA(cb2,staff[24] );
        }
        function  A26(cb2 ){
            allAA(cb2,staff[25] );
        }        
		function  A27(cb2 ){
            allAA(cb2,staff[26] );
        }
		function  A28(cb2 ){
            allAA(cb2,staff[27] );
        }
		function  A29(cb2 ){
            allAA(cb2,staff[28] );
        }
		function  A30(cb2 ){
            allAA(cb2,staff[29] );
        }
		function  A31(cb2 ){
            allAA(cb2,staff[30] );
        }
		function  A32(cb2 ){
            allAA(cb2,staff[31] );
        }
		function  A33(cb2 ){
            allAA(cb2,staff[32] );
        }
		function  A31(cb2 ){
            allAA(cb2,staff[30] );
        }
		function  A32(cb2 ){
            allAA(cb2,staff[31] );
        }
		function  A33(cb2 ){
            allAA(cb2,staff[32] );
        }
        let funblock =[];
        for (var i = 0; i < staff.length; i++) {
            if(i==0 ){ funblock.push(A1 ); }
            if(i==1 ){ funblock.push(A2 ); }
            if(i==2 ){ funblock.push(A3 ); }
            if(i==3 ){ funblock.push(A4 ); }
            if(i==4 ){ funblock.push(A5 ); }
            if(i==5 ){ funblock.push(A6 ); }
            if(i==6 ){ funblock.push(A7 ); }
            if(i==7 ){ funblock.push(A8 ); }
            if(i==8 ){ funblock.push(A9 ); }
            if(i==9 ){ funblock.push(A10); }
            if(i==10){ funblock.push(A11); }
            if(i==11){ funblock.push(A12); }
            if(i==12){ funblock.push(A13); }
            if(i==13){ funblock.push(A14); }
            if(i==14){ funblock.push(A15); }
            if(i==15){ funblock.push(A16); }
            if(i==16){ funblock.push(A17); }
            if(i==17){ funblock.push(A18); }
            if(i==18){ funblock.push(A19); } 
            if(i==19){ funblock.push(A20); }        
            if(i==20){ funblock.push(A21); }   
            if(i==21){ funblock.push(A22); }            
            if(i==22){ funblock.push(A23); }            
            if(i==23){ funblock.push(A24); } 
            if(i==24){ funblock.push(A25); } 
            if(i==25){ funblock.push(A26); } 
            if(i==26){ funblock.push(A27); } 
            if(i==27){ funblock.push(A28); } 
            if(i==28){ funblock.push(A29); } 
            if(i==29){ funblock.push(A30); }        
            if(i==30){ funblock.push(A31); } 
            if(i==31){ funblock.push(A32); } 
            if(i==32){ funblock.push(A33); } 
        }
        async.parallel( funblock, 
            function(err, result) {
                if (err) {
                } else {
                    dataav=[];
                    for (var i = 0; i < staff.length; i++) {
                        dataav.push({"Times" : result[i].Times });
                    }
                    cb(null, dataav);
                }
            }
        );        
    }
    function funPage1B1(cb){
        var  dataav = [];
        var  datagod = [];
        function  allAA( cb2 ,stf){
            yjDBService.exec({
                sql : sql_Page1B1,
                parameters : [WeekThisbeg,WeekThisend , stf],  
                rowsAsArray : true,
                success : function(r) {
                    var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                    for (var i = 0; i < data.length; i++) {
                        
                        var temp2 = {
                            "Staff" : stf , 
                            "Times" : data[i].times , 
                        }
                       datagod.push(temp2);
                    }
                    // (cb2(null, datagod));  
                    (cb2(null, temp2));  
                    //  console.log("按时完成", temp,stf );
                },
                error : sender.error
            })
        }
        function  A1(cb2 ){
            allAA(cb2,staff[0] );
        }
        function  A2(cb2 ){
            allAA(cb2,staff[1] );
        }
        function  A3(cb2 ){
            allAA(cb2,staff[2] );
        }
        function  A4(cb2 ){
            allAA(cb2,staff[3] );
        }
        function  A5(cb2 ){
            allAA(cb2,staff[4] );
        }
        function  A6(cb2 ){
            allAA(cb2,staff[5] );
        }
        function  A7(cb2 ){
            allAA(cb2,staff[6] );
        }
        function  A8(cb2 ){
            allAA(cb2,staff[7] );
        }
        function  A9(cb2 ){
            allAA(cb2,staff[8] );
        }
        function  A10(cb2 ){
            allAA(cb2,staff[9] );
        }
        function  A11(cb2 ){
            allAA(cb2,staff[10] );
        }
        function  A12(cb2 ){
            allAA(cb2,staff[11] );
        }
        function  A13(cb2 ){
            allAA(cb2,staff[12] );
        }
        function  A14(cb2 ){
            allAA(cb2,staff[13] );
        }
        function  A15(cb2 ){
            allAA(cb2,staff[14] );
        }
        function  A16(cb2 ){
            allAA(cb2,staff[15] );
        }
        function  A17(cb2 ){
            allAA(cb2,staff[16] );
        }
        function  A18(cb2 ){
            allAA(cb2,staff[17] );
        }
        function  A19(cb2 ){
            allAA(cb2,staff[18] );
        }
        function  A20(cb2 ){
            allAA(cb2,staff[19] );
        }
        function  A21(cb2 ){
            allAA(cb2,staff[20] );
        }
        function  A22(cb2 ){
            allAA(cb2,staff[21] );
        }
        function  A23(cb2 ){
            allAA(cb2,staff[22] );
        }
        function  A24(cb2 ){
            allAA(cb2,staff[23] );
        }
        function  A25(cb2 ){
            allAA(cb2,staff[24] );
        }
        function  A26(cb2 ){
            allAA(cb2,staff[25] );
        }        
		function  A27(cb2 ){
            allAA(cb2,staff[26] );
        }
		function  A28(cb2 ){
            allAA(cb2,staff[27] );
        }
		function  A29(cb2 ){
            allAA(cb2,staff[28] );
        }
		function  A30(cb2 ){
            allAA(cb2,staff[29] );
        }
		function  A31(cb2 ){
            allAA(cb2,staff[30] );
        }
		function  A32(cb2 ){
            allAA(cb2,staff[31] );
        }
		function  A33(cb2 ){
            allAA(cb2,staff[32] );
        }
        let funblock =[];
        for (var i = 0; i < staff.length; i++) {
            if(i==0 ){ funblock.push(A1 ); }
            if(i==1 ){ funblock.push(A2 ); }
            if(i==2 ){ funblock.push(A3 ); }
            if(i==3 ){ funblock.push(A4 ); }
            if(i==4 ){ funblock.push(A5 ); }
            if(i==5 ){ funblock.push(A6 ); }
            if(i==6 ){ funblock.push(A7 ); }
            if(i==7 ){ funblock.push(A8 ); }
            if(i==8 ){ funblock.push(A9 ); }
            if(i==9 ){ funblock.push(A10); }
            if(i==10){ funblock.push(A11); }
            if(i==11){ funblock.push(A12); }
            if(i==12){ funblock.push(A13); }
            if(i==13){ funblock.push(A14); }
            if(i==14){ funblock.push(A15); }
            if(i==15){ funblock.push(A16); }
            if(i==16){ funblock.push(A17); }
            if(i==17){ funblock.push(A18); }
            if(i==18){ funblock.push(A19); }  
            if(i==19){ funblock.push(A20); }    
            if(i==20){ funblock.push(A21); }   
            if(i==21){ funblock.push(A22); }            
            if(i==22){ funblock.push(A23); }            
            if(i==23){ funblock.push(A24); } 
            if(i==24){ funblock.push(A25); } 
            if(i==25){ funblock.push(A26); } 
            if(i==26){ funblock.push(A27); } 
            if(i==27){ funblock.push(A28); } 
            if(i==28){ funblock.push(A29); } 
            if(i==29){ funblock.push(A30); }           
            if(i==30){ funblock.push(A31); } 
            if(i==31){ funblock.push(A32); } 
            if(i==32){ funblock.push(A33); } 
        }
        async.parallel( funblock, 
            function(err, result) {
             if (err) {
             } else {
 
                // console.log("红"+result[0].Staff+"黑:"+result[0].Times);  
                // console.log("鳟鱼:"+result.length);   
                // console.log("丁鱼:"+JSON.stringify(result[0]));  

             dataav=[];
             for (var i = 0; i < staff.length; i++) {
                 dataav.push({"Times" : result[i].Times });
             }
            //  for (var i = 0; i < staff.length; i++) {
            //      for (var j = 0; j < datagod.length; j++) {
            //          if(staff[i]==datagod[j].Staff){ 
            //              dataav.push({"Times" : datagod[j].Times });
            //          }else{
            //          }
            //      }
            //  }
                 cb(null, dataav);
             }
         }
     );
    }
    function funPage1B2(cb){
        var  dataav = [];
        var  datagod = [];
        function  allAA( cb2 ,stf){
            yjDBService.exec({
                sql : sql_Page1B2,
                parameters : [WeekThisbeg, WeekThisend , stf],  
                rowsAsArray : true,
                success : function(r) {
                    var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                    for (var i = 0; i < data.length; i++) {
                        var temp2 = {
                            "Staff" : stf , 
                            "Times" : data[i].times , 
                        }
                       datagod.push(temp2);
                    }
                    (cb2(null, temp2 ));  

                    //  console.log("延期完成", temp2,stf );
                },
                error : sender.error
            })
        }
        function  A1(cb2 ){
            allAA(cb2,staff[0] );
        }
        function  A2(cb2 ){
            allAA(cb2,staff[1] );
        }
        function  A3(cb2 ){
            allAA(cb2,staff[2] );
        }
        function  A4(cb2 ){
            allAA(cb2,staff[3] );
        }
        function  A5(cb2 ){
            allAA(cb2,staff[4] );
        }
        function  A6(cb2 ){
            allAA(cb2,staff[5] );
        }
        function  A7(cb2 ){
            allAA(cb2,staff[6] );
        }
        function  A8(cb2 ){
            allAA(cb2,staff[7] );
        }
        function  A9(cb2 ){
            allAA(cb2,staff[8] );
        }
        function  A10(cb2 ){
            allAA(cb2,staff[9] );
        }
        function  A11(cb2 ){
            allAA(cb2,staff[10] );
        }
        function  A12(cb2 ){
            allAA(cb2,staff[11] );
        }
        function  A13(cb2 ){
            allAA(cb2,staff[12] );
        }
        function  A14(cb2 ){
            allAA(cb2,staff[13] );
        }
        function  A15(cb2 ){
            allAA(cb2,staff[14] );
        }
        function  A16(cb2 ){
            allAA(cb2,staff[15] );
        }
        function  A17(cb2 ){
            allAA(cb2,staff[16] );
        }
        function  A18(cb2 ){
            allAA(cb2,staff[17] );
        }
        function  A19(cb2 ){
            allAA(cb2,staff[18] );
        }
        function  A20(cb2 ){
            allAA(cb2,staff[19] );
        }
        function  A21(cb2 ){
            allAA(cb2,staff[20] );
        }
        function  A22(cb2 ){
            allAA(cb2,staff[21] );
        }
        function  A23(cb2 ){
            allAA(cb2,staff[22] );
        }
        function  A24(cb2 ){
            allAA(cb2,staff[23] );
        }
        function  A25(cb2 ){
            allAA(cb2,staff[24] );
        }
        function  A26(cb2 ){
            allAA(cb2,staff[25] );
        }        
		function  A27(cb2 ){
            allAA(cb2,staff[26] );
        }
		function  A28(cb2 ){
            allAA(cb2,staff[27] );
        }
		function  A29(cb2 ){
            allAA(cb2,staff[28] );
        }
		function  A30(cb2 ){
            allAA(cb2,staff[29] );
        }
		function  A31(cb2 ){
            allAA(cb2,staff[30] );
        }
		function  A32(cb2 ){
            allAA(cb2,staff[31] );
        }
		function  A33(cb2 ){
            allAA(cb2,staff[32] );
        }
        let funblock =[];
        for (var i = 0; i < staff.length; i++) {
            if(i==0 ){ funblock.push(A1 ); }
            if(i==1 ){ funblock.push(A2 ); }
            if(i==2 ){ funblock.push(A3 ); }
            if(i==3 ){ funblock.push(A4 ); }
            if(i==4 ){ funblock.push(A5 ); }
            if(i==5 ){ funblock.push(A6 ); }
            if(i==6 ){ funblock.push(A7 ); }
            if(i==7 ){ funblock.push(A8 ); }
            if(i==8 ){ funblock.push(A9 ); }
            if(i==9 ){ funblock.push(A10); }
            if(i==10){ funblock.push(A11); }
            if(i==11){ funblock.push(A12); }
            if(i==12){ funblock.push(A13); }
            if(i==13){ funblock.push(A14); }
            if(i==14){ funblock.push(A15); }
            if(i==15){ funblock.push(A16); }
            if(i==16){ funblock.push(A17); }
            if(i==17){ funblock.push(A18); }
            if(i==18){ funblock.push(A19); }
            if(i==19){ funblock.push(A20); }    
            if(i==20){ funblock.push(A21); }
            if(i==21){ funblock.push(A22); }            
            if(i==22){ funblock.push(A23); }            
            if(i==23){ funblock.push(A24); }
            if(i==24){ funblock.push(A25); } 
            if(i==25){ funblock.push(A26); } 
            if(i==26){ funblock.push(A27); } 
            if(i==27){ funblock.push(A28); } 
            if(i==28){ funblock.push(A29); } 
            if(i==29){ funblock.push(A30); }                 
            if(i==30){ funblock.push(A31); } 
            if(i==31){ funblock.push(A32); } 
            if(i==32){ funblock.push(A33); } 
        }
        async.parallel( funblock, 
               function(err, result) {
                if (err) {

                } else {
               
                // console.log("延期烧鸟",datagod);
                // console.log("延期拷鱼",datagod[0]);
                // console.log("延期炸排",datagod[0].Staff);
                // console.log("延期醋溜",datagod[0].Times);
                dataav=[];
                for (var i = 0; i < staff.length; i++) {
                    dataav.push({"Times" : result[i].Times });
                }
                // for (var i = 0; i < staff.length; i++) {
                //     for (var j = 0; j < datagod.length; j++) {
                //         if(staff[i]==datagod[j].Staff){
                //             // console.log("甜点",datagod[j].Times );
                //             dataav.push({"Times" : datagod[j].Times });
                //         }else{
                //         }
                //     }
                // }
 
                    cb(null, dataav);
                }
            }
        );
    }
    function funPage1B3(cb){
        var  dataav = [];
        var  datagod = [];
        function  allAA( cb2 ,stf){
            yjDBService.exec({
                sql : sql_Page1B3,
                parameters : [WeekThisbeg,WeekThisend , stf],  
                rowsAsArray : true,
                success : function(r) {
                    var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                    for (var i = 0; i < data.length; i++) {
                        var temp2 = {
                            "Staff" : stf , 
                            "Times" : data[i].times , 
                        }
                       datagod.push(temp2);
                    }
                    (cb2(null, temp2));  
                },
                error : sender.error
            })
        }
        function  A1(cb2 ){
            allAA(cb2,staff[0] );
        }
        function  A2(cb2 ){
            allAA(cb2,staff[1] );
        }
        function  A3(cb2 ){
            allAA(cb2,staff[2] );
        }
        function  A4(cb2 ){
            allAA(cb2,staff[3] );
        }
        function  A5(cb2 ){
            allAA(cb2,staff[4] );
        }
        function  A6(cb2 ){
            allAA(cb2,staff[5] );
        }
        function  A7(cb2 ){
            allAA(cb2,staff[6] );
        }
        function  A8(cb2 ){
            allAA(cb2,staff[7] );
        }
        function  A9(cb2 ){
            allAA(cb2,staff[8] );
        }
        function  A10(cb2 ){
            allAA(cb2,staff[9] );
        }
        function  A11(cb2 ){
            allAA(cb2,staff[10] );
        }
        function  A12(cb2 ){
            allAA(cb2,staff[11] );
        }
        function  A13(cb2 ){
            allAA(cb2,staff[12] );
        }
        function  A14(cb2 ){
            allAA(cb2,staff[13] );
        }
        function  A15(cb2 ){
            allAA(cb2,staff[14] );
        }
        function  A16(cb2 ){
            allAA(cb2,staff[15] );
        }
        function  A17(cb2 ){
            allAA(cb2,staff[16] );
        }
        function  A18(cb2 ){
            allAA(cb2,staff[17] );
        }
        function  A19(cb2 ){
            allAA(cb2,staff[18] );
        }
        function  A20(cb2 ){
            allAA(cb2,staff[19] );
        }
        function  A21(cb2 ){
            allAA(cb2,staff[20] );
        }
        function  A22(cb2 ){
            allAA(cb2,staff[21] );
        }
        function  A23(cb2 ){
            allAA(cb2,staff[22] );
        }
        function  A24(cb2 ){
            allAA(cb2,staff[23] );
        }
        function  A25(cb2 ){
            allAA(cb2,staff[24] );
        }
        function  A26(cb2 ){
            allAA(cb2,staff[25] );
        }        
		function  A27(cb2 ){
            allAA(cb2,staff[26] );
        }
		function  A28(cb2 ){
            allAA(cb2,staff[27] );
        }
		function  A29(cb2 ){
            allAA(cb2,staff[28] );
        }
		function  A30(cb2 ){
            allAA(cb2,staff[29] );
        }
		function  A31(cb2 ){
            allAA(cb2,staff[30] );
        }
		function  A32(cb2 ){
            allAA(cb2,staff[31] );
        }
		function  A33(cb2 ){
            allAA(cb2,staff[32] );
        }
        let funblock =[];
        for (var i = 0; i < staff.length; i++) {
            if(i==0 ){ funblock.push(A1 ); }
            if(i==1 ){ funblock.push(A2 ); }
            if(i==2 ){ funblock.push(A3 ); }
            if(i==3 ){ funblock.push(A4 ); }
            if(i==4 ){ funblock.push(A5 ); }
            if(i==5 ){ funblock.push(A6 ); }
            if(i==6 ){ funblock.push(A7 ); }
            if(i==7 ){ funblock.push(A8 ); }
            if(i==8 ){ funblock.push(A9 ); }
            if(i==9 ){ funblock.push(A10); }
            if(i==10){ funblock.push(A11); }
            if(i==11){ funblock.push(A12); }
            if(i==12){ funblock.push(A13); }
            if(i==13){ funblock.push(A14); }
            if(i==14){ funblock.push(A15); }
            if(i==15){ funblock.push(A16); }
            if(i==16){ funblock.push(A17); }
            if(i==17){ funblock.push(A18); }
            if(i==18){ funblock.push(A19); }  
            if(i==19){ funblock.push(A20); }    
            if(i==20){ funblock.push(A21); }  
            if(i==21){ funblock.push(A22); }            
            if(i==22){ funblock.push(A23); }            
            if(i==23){ funblock.push(A24); }  
            if(i==24){ funblock.push(A25); } 
            if(i==25){ funblock.push(A26); } 
            if(i==26){ funblock.push(A27); } 
            if(i==27){ funblock.push(A28); } 
            if(i==28){ funblock.push(A29); } 
            if(i==29){ funblock.push(A30); }           
            if(i==30){ funblock.push(A31); } 
            if(i==31){ funblock.push(A32); } 
            if(i==32){ funblock.push(A33); } 
        }
        async.parallel( funblock, 
               function(err, result) {
                if (err) {
                } else {
                dataav=[];
                for (var i = 0; i < staff.length; i++) {
                    dataav.push({"Times" : result[i].Times });
                }
                // for (var i = 0; i < staff.length; i++) {
                //     for (var j = 0; j < datagod.length; j++) {
                //         if(staff[i]==datagod[j].Staff){
                //             dataav.push({"Times" : datagod[j].Times });
                //         }else{
                //         }
                //     }
                // }
                    cb(null, dataav);
                }
            }
        );
    }
    function funPage1C1(cb){
        var  dataav = [];
        var  datagod = [];
        function  allAA( cb2 ,stf){
            yjDBService.exec({
                sql : sql_Page1C1,
                parameters : [WeekThisbeg,WeekThisend , stf, duedate],   
                rowsAsArray : true,
                success : function(r) {
                    var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                    for (var i = 0; i < data.length; i++) {
                        var temp2 = {
                            "Staff" : stf , 
                            "Times" : data[i].times , 
                        }
                       datagod.push(temp2);
                    }
                    (cb2(null, temp2));  
                },
                error : sender.error
            })
        }
        function  A1(cb2 ){
            allAA(cb2,staff[0] );
        }
        function  A2(cb2 ){
            allAA(cb2,staff[1] );
        }
        function  A3(cb2 ){
            allAA(cb2,staff[2] );
        }
        function  A4(cb2 ){
            allAA(cb2,staff[3] );
        }
        function  A5(cb2 ){
            allAA(cb2,staff[4] );
        }
        function  A6(cb2 ){
            allAA(cb2,staff[5] );
        }
        function  A7(cb2 ){
            allAA(cb2,staff[6] );
        }
        function  A8(cb2 ){
            allAA(cb2,staff[7] );
        }
        function  A9(cb2 ){
            allAA(cb2,staff[8] );
        }
        function  A10(cb2 ){
            allAA(cb2,staff[9] );
        }
        function  A11(cb2 ){
            allAA(cb2,staff[10] );
        }
        function  A12(cb2 ){
            allAA(cb2,staff[11] );
        }
        function  A13(cb2 ){
            allAA(cb2,staff[12] );
        }
        function  A14(cb2 ){
            allAA(cb2,staff[13] );
        }
        function  A15(cb2 ){
            allAA(cb2,staff[14] );
        }
        function  A16(cb2 ){
            allAA(cb2,staff[15] );
        }
        function  A17(cb2 ){
            allAA(cb2,staff[16] );
        }
        function  A18(cb2 ){
            allAA(cb2,staff[17] );
        }
        function  A19(cb2 ){
            allAA(cb2,staff[18] );
        }
        function  A20(cb2 ){
            allAA(cb2,staff[19] );
        }
        function  A21(cb2 ){
            allAA(cb2,staff[20] );
        }
        function  A22(cb2 ){
            allAA(cb2,staff[21] );
        }
        function  A23(cb2 ){
            allAA(cb2,staff[22] );
        }
        function  A24(cb2 ){
            allAA(cb2,staff[23] );
        }
        function  A25(cb2 ){
            allAA(cb2,staff[24] );
        }
        function  A26(cb2 ){
            allAA(cb2,staff[25] );
        }        
		function  A27(cb2 ){
            allAA(cb2,staff[26] );
        }
		function  A28(cb2 ){
            allAA(cb2,staff[27] );
        }
		function  A29(cb2 ){
            allAA(cb2,staff[28] );
        }
		function  A30(cb2 ){
            allAA(cb2,staff[29] );
        }
		function  A31(cb2 ){
            allAA(cb2,staff[30] );
        }
		function  A32(cb2 ){
            allAA(cb2,staff[31] );
        }
		function  A33(cb2 ){
            allAA(cb2,staff[32] );
        }
        let funblock =[];
        for (var i = 0; i < staff.length; i++) {
            if(i==0 ){ funblock.push(A1 ); }
            if(i==1 ){ funblock.push(A2 ); }
            if(i==2 ){ funblock.push(A3 ); }
            if(i==3 ){ funblock.push(A4 ); }
            if(i==4 ){ funblock.push(A5 ); }
            if(i==5 ){ funblock.push(A6 ); }
            if(i==6 ){ funblock.push(A7 ); }
            if(i==7 ){ funblock.push(A8 ); }
            if(i==8 ){ funblock.push(A9 ); }
            if(i==9 ){ funblock.push(A10); }
            if(i==10){ funblock.push(A11); }
            if(i==11){ funblock.push(A12); }
            if(i==12){ funblock.push(A13); }
            if(i==13){ funblock.push(A14); }
            if(i==14){ funblock.push(A15); }
            if(i==15){ funblock.push(A16); }
            if(i==16){ funblock.push(A17); }
            if(i==17){ funblock.push(A18); }
            if(i==18){ funblock.push(A19); }  
            if(i==19){ funblock.push(A20); }  
            if(i==20){ funblock.push(A21); }  
            if(i==21){ funblock.push(A22); }            
            if(i==22){ funblock.push(A23); }            
            if(i==23){ funblock.push(A24); }  
            if(i==24){ funblock.push(A25); } 
            if(i==25){ funblock.push(A26); } 
            if(i==26){ funblock.push(A27); } 
            if(i==27){ funblock.push(A28); } 
            if(i==28){ funblock.push(A29); } 
            if(i==29){ funblock.push(A30); }             
            if(i==30){ funblock.push(A31); } 
            if(i==31){ funblock.push(A32); } 
            if(i==32){ funblock.push(A33); } 
        }
        async.parallel( funblock, 
               function(err, result) {
                if (err) {
                } else {
                dataav=[];
                for (var i = 0; i < staff.length; i++) {
                    dataav.push({"Times" : result[i].Times });
                }
                // for (var i = 0; i < staff.length; i++) {
                //     for (var j = 0; j < datagod.length; j++) {
                //         if(staff[i]==datagod[j].Staff){
                //             dataav.push({"Times" : datagod[j].Times });
                //         }else{
                //         }
                //     }
                // }
                    cb(null, dataav);
                }
            }
        );
 
    }
    function funPage1C2(cb){
        var  dataav = [];
        var  datagod = [];
        function  allAA( cb2 ,stf){
            yjDBService.exec({
                sql : sql_Page1C2,
                parameters : [WeekThisbeg,WeekThisend , stf, duedate],
                rowsAsArray : true,
                success : function(r) {
                    var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                    for (var i = 0; i < data.length; i++) {
                      
                        var temp2 = {
                            "Staff" : stf , 
                            "Times" : data[i].times , 
                        }
                       datagod.push(temp2);
                    }
                    (cb2(null, temp2));  
                    //   console.log("期限未到", temp2,stf );
                },
                error : sender.error
            })
        }
        function  A1(cb2 ){
            allAA(cb2,staff[0] );
        }
        function  A2(cb2 ){
            allAA(cb2,staff[1] );
        }
        function  A3(cb2 ){
            allAA(cb2,staff[2] );
        }
        function  A4(cb2 ){
            allAA(cb2,staff[3] );
        }
        function  A5(cb2 ){
            allAA(cb2,staff[4] );
        }
        function  A6(cb2 ){
            allAA(cb2,staff[5] );
        }
        function  A7(cb2 ){
            allAA(cb2,staff[6] );
        }
        function  A8(cb2 ){
            allAA(cb2,staff[7] );
        }
        function  A9(cb2 ){
            allAA(cb2,staff[8] );
        }
        function  A10(cb2 ){
            allAA(cb2,staff[9] );
        }
        function  A11(cb2 ){
            allAA(cb2,staff[10] );
        }
        function  A12(cb2 ){
            allAA(cb2,staff[11] );
        }
        function  A13(cb2 ){
            allAA(cb2,staff[12] );
        }
        function  A14(cb2 ){
            allAA(cb2,staff[13] );
        }
        function  A15(cb2 ){
            allAA(cb2,staff[14] );
        }
        function  A16(cb2 ){
            allAA(cb2,staff[15] );
        }
        function  A17(cb2 ){
            allAA(cb2,staff[16] );
        }
        function  A18(cb2 ){
            allAA(cb2,staff[17] );
        }
        function  A19(cb2 ){
            allAA(cb2,staff[18] );
        }
        function  A20(cb2 ){
            allAA(cb2,staff[19] );
        }
        function  A21(cb2 ){
            allAA(cb2,staff[20] );
        }
        function  A22(cb2 ){
            allAA(cb2,staff[21] );
        }
        function  A23(cb2 ){
            allAA(cb2,staff[22] );
        }
        function  A24(cb2 ){
            allAA(cb2,staff[23] );
        }
        function  A25(cb2 ){
            allAA(cb2,staff[24] );
        }
        function  A26(cb2 ){
            allAA(cb2,staff[25] );
        }        
		function  A27(cb2 ){
            allAA(cb2,staff[26] );
        }
		function  A28(cb2 ){
            allAA(cb2,staff[27] );
        }
		function  A29(cb2 ){
            allAA(cb2,staff[28] );
        }
		function  A30(cb2 ){
            allAA(cb2,staff[29] );
        }
		function  A31(cb2 ){
            allAA(cb2,staff[30] );
        }
		function  A32(cb2 ){
            allAA(cb2,staff[31] );
        }
		function  A33(cb2 ){
            allAA(cb2,staff[32] );
        }
        let funblock =[];
        for (var i = 0; i < staff.length; i++) {
            if(i==0 ){ funblock.push(A1 ); }
            if(i==1 ){ funblock.push(A2 ); }
            if(i==2 ){ funblock.push(A3 ); }
            if(i==3 ){ funblock.push(A4 ); }
            if(i==4 ){ funblock.push(A5 ); }
            if(i==5 ){ funblock.push(A6 ); }
            if(i==6 ){ funblock.push(A7 ); }
            if(i==7 ){ funblock.push(A8 ); }
            if(i==8 ){ funblock.push(A9 ); }
            if(i==9 ){ funblock.push(A10); }
            if(i==10){ funblock.push(A11); }
            if(i==11){ funblock.push(A12); }
            if(i==12){ funblock.push(A13); }
            if(i==13){ funblock.push(A14); }
            if(i==14){ funblock.push(A15); }
            if(i==15){ funblock.push(A16); }
            if(i==16){ funblock.push(A17); }
            if(i==17){ funblock.push(A18); }
            if(i==18){ funblock.push(A19); }      
            if(i==19){ funblock.push(A20); }     
            if(i==20){ funblock.push(A21); } 
            if(i==21){ funblock.push(A22); }            
            if(i==22){ funblock.push(A23); }            
            if(i==23){ funblock.push(A24); }  
            if(i==24){ funblock.push(A25); } 
            if(i==25){ funblock.push(A26); } 
            if(i==26){ funblock.push(A27); } 
            if(i==27){ funblock.push(A28); } 
            if(i==28){ funblock.push(A29); } 
            if(i==29){ funblock.push(A30); }       
            if(i==30){ funblock.push(A31); } 
            if(i==31){ funblock.push(A32); } 
            if(i==32){ funblock.push(A33); } 
        }
        async.parallel( funblock, 
               function(err, result) {
                if (err) {
                } else {
                dataav=[];
                for (var i = 0; i < staff.length; i++) {
                    dataav.push({"Times" : result[i].Times });
                }
                // for (var i = 0; i < staff.length; i++) {
                //     for (var j = 0; j < datagod.length; j++) {
                //         if(staff[i]==datagod[j].Staff){
                //             dataav.push({"Times" : datagod[j].Times });
                //         }else{
                //         }
                //     }
                // }
 
                    cb(null, dataav);
                }
            }
        );
    }
    function funPage1C3(cb){
        var  dataav = [];
        var  datagod = [];
        function  allAA( cb2 ,stf){
            yjDBService.exec({
                sql : sql_Page1C3,
                parameters : [WeekThisbeg,WeekThisend , stf],  
                rowsAsArray : true,
                success : function(r) {
                    var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                    for (var i = 0; i < data.length; i++) {                      
                        var temp2 = {
                            "Staff" : stf , 
                            "Times" : data[i].times , 
                        }
                       datagod.push(temp2);
                    }
                    (cb2(null, temp2));  
                    //  console.log("延期完成", temp,stf );
                },
                error : sender.error
            })
        }
        function  A1(cb2 ){
            allAA(cb2,staff[0] );
        }
        function  A2(cb2 ){
            allAA(cb2,staff[1] );
        }
        function  A3(cb2 ){
            allAA(cb2,staff[2] );
        }
        function  A4(cb2 ){
            allAA(cb2,staff[3] );
        }
        function  A5(cb2 ){
            allAA(cb2,staff[4] );
        }
        function  A6(cb2 ){
            allAA(cb2,staff[5] );
        }
        function  A7(cb2 ){
            allAA(cb2,staff[6] );
        }
        function  A8(cb2 ){
            allAA(cb2,staff[7] );
        }
        function  A9(cb2 ){
            allAA(cb2,staff[8] );
        }
        function  A10(cb2 ){
            allAA(cb2,staff[9] );
        }
        function  A11(cb2 ){
            allAA(cb2,staff[10] );
        }
        function  A12(cb2 ){
            allAA(cb2,staff[11] );
        }
        function  A13(cb2 ){
            allAA(cb2,staff[12] );
        }
        function  A14(cb2 ){
            allAA(cb2,staff[13] );
        }
        function  A15(cb2 ){
            allAA(cb2,staff[14] );
        }
        function  A16(cb2 ){
            allAA(cb2,staff[15] );
        }
        function  A17(cb2 ){
            allAA(cb2,staff[16] );
        }
        function  A18(cb2 ){
            allAA(cb2,staff[17] );
        }
        function  A19(cb2 ){
            allAA(cb2,staff[18] );
        }
        function  A20(cb2 ){
            allAA(cb2,staff[19] );
        }
        function  A21(cb2 ){
            allAA(cb2,staff[20] );
        }
        function  A22(cb2 ){
            allAA(cb2,staff[21] );
        }
        function  A23(cb2 ){
            allAA(cb2,staff[22] );
        }
        function  A24(cb2 ){
            allAA(cb2,staff[23] );
        }
        function  A25(cb2 ){
            allAA(cb2,staff[24] );
        }
        function  A26(cb2 ){
            allAA(cb2,staff[25] );
        }        
		function  A27(cb2 ){
            allAA(cb2,staff[26] );
        }
		function  A28(cb2 ){
            allAA(cb2,staff[27] );
        }
		function  A29(cb2 ){
            allAA(cb2,staff[28] );
        }
		function  A30(cb2 ){
            allAA(cb2,staff[29] );
        }
		function  A31(cb2 ){
            allAA(cb2,staff[30] );
        }
		function  A32(cb2 ){
            allAA(cb2,staff[31] );
        }
		function  A33(cb2 ){
            allAA(cb2,staff[32] );
        }
        let funblock =[];
        for (var i = 0; i < staff.length; i++) {
            if(i==0 ){ funblock.push(A1 ); }
            if(i==1 ){ funblock.push(A2 ); }
            if(i==2 ){ funblock.push(A3 ); }
            if(i==3 ){ funblock.push(A4 ); }
            if(i==4 ){ funblock.push(A5 ); }
            if(i==5 ){ funblock.push(A6 ); }
            if(i==6 ){ funblock.push(A7 ); }
            if(i==7 ){ funblock.push(A8 ); }
            if(i==8 ){ funblock.push(A9 ); }
            if(i==9 ){ funblock.push(A10); }
            if(i==10){ funblock.push(A11); }
            if(i==11){ funblock.push(A12); }
            if(i==12){ funblock.push(A13); }
            if(i==13){ funblock.push(A14); }
            if(i==14){ funblock.push(A15); }
            if(i==15){ funblock.push(A16); }
            if(i==16){ funblock.push(A17); }
            if(i==17){ funblock.push(A18); }
            if(i==18){ funblock.push(A19); }    
            if(i==19){ funblock.push(A20); }       
            if(i==20){ funblock.push(A21); } 
            if(i==21){ funblock.push(A22); }            
            if(i==22){ funblock.push(A23); }            
            if(i==23){ funblock.push(A24); }    
            if(i==24){ funblock.push(A25); } 
            if(i==25){ funblock.push(A26); } 
            if(i==26){ funblock.push(A27); } 
            if(i==27){ funblock.push(A28); } 
            if(i==28){ funblock.push(A29); } 
            if(i==29){ funblock.push(A30); }     
            if(i==30){ funblock.push(A31); } 
            if(i==31){ funblock.push(A32); } 
            if(i==32){ funblock.push(A33); } 
        }
        async.parallel( funblock, 
               function(err, result) {
                if (err) {

                } else {
                dataav=[];
                for (var i = 0; i < staff.length; i++) {
                    dataav.push({"Times" : result[i].Times });
                }
                // for (var i = 0; i < staff.length; i++) {
                //     for (var j = 0; j < datagod.length; j++) {
                //         if(staff[i]==datagod[j].Staff){
                //             dataav.push({"Times" : datagod[j].Times });
                //         }else{
                //         }
                //     }
                // }
 
                    cb(null, dataav);
                }
            }
        );
    }
    function funRemainDone(cb){
        var  dataav = [];
        function  allAA( cb2 ,stf){
            yjDBService.exec({
                sql : sql_RemainDone,
                parameters : [YesterThis ,WeekThisbeg ,WeekThisend  ,stf], 
                rowsAsArray : true,
                success : function(r) {
                    var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                    for (var i = 0; i < data.length; i++) {
                        var temp = {
                            "Times" : data[i].times , 
                        }
                       dataav.push(temp);
                    }
                    (cb2(null, temp ));  
                    // console.log("混", temp);
                },
                error : sender.error
            })
        }
        function  A1(cb2 ){
            allAA(cb2,staff[0] );
        }
        function  A2(cb2 ){
            allAA(cb2,staff[1] );
        }
        function  A3(cb2 ){
            allAA(cb2,staff[2] );
        }
        function  A4(cb2 ){
            allAA(cb2,staff[3] );
        }
        function  A5(cb2 ){
            allAA(cb2,staff[4] );
        }
        function  A6(cb2 ){
            allAA(cb2,staff[5] );
        }
        function  A7(cb2 ){
            allAA(cb2,staff[6] );
        }
        function  A8(cb2 ){
            allAA(cb2,staff[7] );
        }
        function  A9(cb2 ){
            allAA(cb2,staff[8] );
        }
        function  A10(cb2 ){
            allAA(cb2,staff[9] );
        }
        function  A11(cb2 ){
            allAA(cb2,staff[10] );
        }
        function  A12(cb2 ){
            allAA(cb2,staff[11] );
        }
        function  A13(cb2 ){
            allAA(cb2,staff[12] );
        }
        function  A14(cb2 ){
            allAA(cb2,staff[13] );
        }
        function  A15(cb2 ){
            allAA(cb2,staff[14] );
        }
        function  A16(cb2 ){
            allAA(cb2,staff[15] );
        }
        function  A17(cb2 ){
            allAA(cb2,staff[16] );
        }
        function  A18(cb2 ){
            allAA(cb2,staff[17] );
        }
        function  A19(cb2 ){
            allAA(cb2,staff[18] );
        }
        function  A20(cb2 ){
            allAA(cb2,staff[19] );
        }
        function  A21(cb2 ){
            allAA(cb2,staff[20] );
        }
        function  A22(cb2 ){
            allAA(cb2,staff[21] );
        }
        function  A23(cb2 ){
            allAA(cb2,staff[22] );
        }
        function  A24(cb2 ){
            allAA(cb2,staff[23] );
        }
        function  A25(cb2 ){
            allAA(cb2,staff[24] );
        }
        function  A26(cb2 ){
            allAA(cb2,staff[25] );
        }        
		function  A27(cb2 ){
            allAA(cb2,staff[26] );
        }
		function  A28(cb2 ){
            allAA(cb2,staff[27] );
        }
		function  A29(cb2 ){
            allAA(cb2,staff[28] );
        }
		function  A30(cb2 ){
            allAA(cb2,staff[29] );
        }
		function  A31(cb2 ){
            allAA(cb2,staff[30] );
        }
		function  A32(cb2 ){
            allAA(cb2,staff[31] );
        }
		function  A33(cb2 ){
            allAA(cb2,staff[32] );
        }        
        let funblock =[];
        for (var i = 0; i < staff.length; i++) {
            if(i==0 ){ funblock.push(A1 ); }
            if(i==1 ){ funblock.push(A2 ); }
            if(i==2 ){ funblock.push(A3 ); }
            if(i==3 ){ funblock.push(A4 ); }
            if(i==4 ){ funblock.push(A5 ); }
            if(i==5 ){ funblock.push(A6 ); }
            if(i==6 ){ funblock.push(A7 ); }
            if(i==7 ){ funblock.push(A8 ); }
            if(i==8 ){ funblock.push(A9 ); }
            if(i==9 ){ funblock.push(A10); }
            if(i==10){ funblock.push(A11); }
            if(i==11){ funblock.push(A12); }
            if(i==12){ funblock.push(A13); }
            if(i==13){ funblock.push(A14); }
            if(i==14){ funblock.push(A15); }
            if(i==15){ funblock.push(A16); }
            if(i==16){ funblock.push(A17); }
            if(i==17){ funblock.push(A18); }
            if(i==18){ funblock.push(A19); }               
            if(i==19){ funblock.push(A20); }     
            if(i==20){ funblock.push(A21); }            
            if(i==21){ funblock.push(A22); }            
            if(i==22){ funblock.push(A23); }            
            if(i==23){ funblock.push(A24); } 
            if(i==24){ funblock.push(A25); } 
            if(i==25){ funblock.push(A26); } 
            if(i==26){ funblock.push(A27); } 
            if(i==27){ funblock.push(A28); } 
            if(i==28){ funblock.push(A29); } 
            if(i==29){ funblock.push(A30); } 
            if(i==30){ funblock.push(A31); } 
            if(i==31){ funblock.push(A32); } 
            if(i==32){ funblock.push(A33); } 
        }
        async.parallel( funblock, 
            function(err, result) {
                if (err) {

                } else {
                    dataav=[];
                    for (var i = 0; i < staff.length; i++) {
                        dataav.push({"Times" : result[i].Times });
                    }
                    // console.log("衝出", dataav);
                    cb(null, dataav);
                }
            }
        );
    }
    function funRemainLateDone(cb){
        var  dataav = [];
        function  allAA( cb2 ,stf){
            yjDBService.exec({
                sql : sql_RemainLateDone,
                parameters : [YesterThis ,WeekThisbeg ,WeekThisend  ,stf], 
                rowsAsArray : true,
                success : function(r) {
                    var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                    for (var i = 0; i < data.length; i++) {
                        var temp = {
                            "Times" : data[i].times , 
                        }
                       dataav.push(temp);
                    }
                    (cb2(null, temp ));  
                    // console.log("混", temp);
                },
                error : sender.error
            })
        }
        function  A1(cb2 ){
            allAA(cb2,staff[0] );
        }
        function  A2(cb2 ){
            allAA(cb2,staff[1] );
        }
        function  A3(cb2 ){
            allAA(cb2,staff[2] );
        }
        function  A4(cb2 ){
            allAA(cb2,staff[3] );
        }
        function  A5(cb2 ){
            allAA(cb2,staff[4] );
        }
        function  A6(cb2 ){
            allAA(cb2,staff[5] );
        }
        function  A7(cb2 ){
            allAA(cb2,staff[6] );
        }
        function  A8(cb2 ){
            allAA(cb2,staff[7] );
        }
        function  A9(cb2 ){
            allAA(cb2,staff[8] );
        }
        function  A10(cb2 ){
            allAA(cb2,staff[9] );
        }
        function  A11(cb2 ){
            allAA(cb2,staff[10] );
        }
        function  A12(cb2 ){
            allAA(cb2,staff[11] );
        }
        function  A13(cb2 ){
            allAA(cb2,staff[12] );
        }
        function  A14(cb2 ){
            allAA(cb2,staff[13] );
        }
        function  A15(cb2 ){
            allAA(cb2,staff[14] );
        }
        function  A16(cb2 ){
            allAA(cb2,staff[15] );
        }
        function  A17(cb2 ){
            allAA(cb2,staff[16] );
        }
        function  A18(cb2 ){
            allAA(cb2,staff[17] );
        }
        function  A19(cb2 ){
            allAA(cb2,staff[18] );
        }
        function  A20(cb2 ){
            allAA(cb2,staff[19] );
        }
        function  A21(cb2 ){
            allAA(cb2,staff[20] );
        }
        function  A22(cb2 ){
            allAA(cb2,staff[21] );
        }
        function  A23(cb2 ){
            allAA(cb2,staff[22] );
        }
        function  A24(cb2 ){
            allAA(cb2,staff[23] );
        }
        function  A25(cb2 ){
            allAA(cb2,staff[24] );
        }
        function  A26(cb2 ){
            allAA(cb2,staff[25] );
        }        
		function  A27(cb2 ){
            allAA(cb2,staff[26] );
        }
		function  A28(cb2 ){
            allAA(cb2,staff[27] );
        }
		function  A29(cb2 ){
            allAA(cb2,staff[28] );
        }
		function  A30(cb2 ){
            allAA(cb2,staff[29] );
        }
		function  A31(cb2 ){
            allAA(cb2,staff[30] );
        }
		function  A32(cb2 ){
            allAA(cb2,staff[31] );
        }
		function  A33(cb2 ){
            allAA(cb2,staff[32] );
        }        
        let funblock =[];
        for (var i = 0; i < staff.length; i++) {
            if(i==0 ){ funblock.push(A1 ); }
            if(i==1 ){ funblock.push(A2 ); }
            if(i==2 ){ funblock.push(A3 ); }
            if(i==3 ){ funblock.push(A4 ); }
            if(i==4 ){ funblock.push(A5 ); }
            if(i==5 ){ funblock.push(A6 ); }
            if(i==6 ){ funblock.push(A7 ); }
            if(i==7 ){ funblock.push(A8 ); }
            if(i==8 ){ funblock.push(A9 ); }
            if(i==9 ){ funblock.push(A10); }
            if(i==10){ funblock.push(A11); }
            if(i==11){ funblock.push(A12); }
            if(i==12){ funblock.push(A13); }
            if(i==13){ funblock.push(A14); }
            if(i==14){ funblock.push(A15); }
            if(i==15){ funblock.push(A16); }
            if(i==16){ funblock.push(A17); }
            if(i==17){ funblock.push(A18); }
            if(i==18){ funblock.push(A19); }               
            if(i==19){ funblock.push(A20); }     
            if(i==20){ funblock.push(A21); }            
            if(i==21){ funblock.push(A22); }            
            if(i==22){ funblock.push(A23); }            
            if(i==23){ funblock.push(A24); } 
            if(i==24){ funblock.push(A25); } 
            if(i==25){ funblock.push(A26); } 
            if(i==26){ funblock.push(A27); } 
            if(i==27){ funblock.push(A28); } 
            if(i==28){ funblock.push(A29); } 
            if(i==29){ funblock.push(A30); } 
            if(i==30){ funblock.push(A31); } 
            if(i==31){ funblock.push(A32); } 
            if(i==32){ funblock.push(A33); } 
        }
        async.parallel( funblock, 
            function(err, result) {
                if (err) {

                } else {
                    dataav=[];
                    for (var i = 0; i < staff.length; i++) {
                        dataav.push({"Times" : result[i].Times });
                    }
                    // console.log("衝出", dataav);
                    cb(null, dataav);
                }
            }
        );
    }



    function funRemainNotDo(cb){
        var  dataav = [];
        function  allAA( cb2 ,stf){
            yjDBService.exec({
                sql : sql_RemainNotDo,
                parameters : [YesterThis ,WeekThisbeg ,WeekThisend  ,stf], 
                rowsAsArray : true,
                success : function(r) {
                    var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                    for (var i = 0; i < data.length; i++) {
                        var temp = {
                            "Times" : data[i].times , 
                        }
                       dataav.push(temp);
                    }
                    (cb2(null, temp ));  
                    // console.log("混", temp);
                },
                error : sender.error
            })
        }
        function  A1(cb2 ){
            allAA(cb2,staff[0] );
        }
        function  A2(cb2 ){
            allAA(cb2,staff[1] );
        }
        function  A3(cb2 ){
            allAA(cb2,staff[2] );
        }
        function  A4(cb2 ){
            allAA(cb2,staff[3] );
        }
        function  A5(cb2 ){
            allAA(cb2,staff[4] );
        }
        function  A6(cb2 ){
            allAA(cb2,staff[5] );
        }
        function  A7(cb2 ){
            allAA(cb2,staff[6] );
        }
        function  A8(cb2 ){
            allAA(cb2,staff[7] );
        }
        function  A9(cb2 ){
            allAA(cb2,staff[8] );
        }
        function  A10(cb2 ){
            allAA(cb2,staff[9] );
        }
        function  A11(cb2 ){
            allAA(cb2,staff[10] );
        }
        function  A12(cb2 ){
            allAA(cb2,staff[11] );
        }
        function  A13(cb2 ){
            allAA(cb2,staff[12] );
        }
        function  A14(cb2 ){
            allAA(cb2,staff[13] );
        }
        function  A15(cb2 ){
            allAA(cb2,staff[14] );
        }
        function  A16(cb2 ){
            allAA(cb2,staff[15] );
        }
        function  A17(cb2 ){
            allAA(cb2,staff[16] );
        }
        function  A18(cb2 ){
            allAA(cb2,staff[17] );
        }
        function  A19(cb2 ){
            allAA(cb2,staff[18] );
        }
        function  A20(cb2 ){
            allAA(cb2,staff[19] );
        }
        function  A21(cb2 ){
            allAA(cb2,staff[20] );
        }
        function  A22(cb2 ){
            allAA(cb2,staff[21] );
        }
        function  A23(cb2 ){
            allAA(cb2,staff[22] );
        }
        function  A24(cb2 ){
            allAA(cb2,staff[23] );
        }
        function  A25(cb2 ){
            allAA(cb2,staff[24] );
        }
        function  A26(cb2 ){
            allAA(cb2,staff[25] );
        }        
		function  A27(cb2 ){
            allAA(cb2,staff[26] );
        }
		function  A28(cb2 ){
            allAA(cb2,staff[27] );
        }
		function  A29(cb2 ){
            allAA(cb2,staff[28] );
        }
		function  A30(cb2 ){
            allAA(cb2,staff[29] );
        }
		function  A31(cb2 ){
            allAA(cb2,staff[30] );
        }
		function  A32(cb2 ){
            allAA(cb2,staff[31] );
        }
		function  A33(cb2 ){
            allAA(cb2,staff[32] );
        }        
        let funblock =[];
        for (var i = 0; i < staff.length; i++) {
            if(i==0 ){ funblock.push(A1 ); }
            if(i==1 ){ funblock.push(A2 ); }
            if(i==2 ){ funblock.push(A3 ); }
            if(i==3 ){ funblock.push(A4 ); }
            if(i==4 ){ funblock.push(A5 ); }
            if(i==5 ){ funblock.push(A6 ); }
            if(i==6 ){ funblock.push(A7 ); }
            if(i==7 ){ funblock.push(A8 ); }
            if(i==8 ){ funblock.push(A9 ); }
            if(i==9 ){ funblock.push(A10); }
            if(i==10){ funblock.push(A11); }
            if(i==11){ funblock.push(A12); }
            if(i==12){ funblock.push(A13); }
            if(i==13){ funblock.push(A14); }
            if(i==14){ funblock.push(A15); }
            if(i==15){ funblock.push(A16); }
            if(i==16){ funblock.push(A17); }
            if(i==17){ funblock.push(A18); }
            if(i==18){ funblock.push(A19); }               
            if(i==19){ funblock.push(A20); }     
            if(i==20){ funblock.push(A21); }            
            if(i==21){ funblock.push(A22); }            
            if(i==22){ funblock.push(A23); }            
            if(i==23){ funblock.push(A24); } 
            if(i==24){ funblock.push(A25); } 
            if(i==25){ funblock.push(A26); } 
            if(i==26){ funblock.push(A27); } 
            if(i==27){ funblock.push(A28); } 
            if(i==28){ funblock.push(A29); } 
            if(i==29){ funblock.push(A30); } 
            if(i==30){ funblock.push(A31); } 
            if(i==31){ funblock.push(A32); } 
            if(i==32){ funblock.push(A33); } 
        }
        async.parallel( funblock, 
            function(err, result) {
                if (err) {

                } else {
                    dataav=[];
                    for (var i = 0; i < staff.length; i++) {
                        dataav.push({"Times" : result[i].Times });
                    }
                    // console.log("衝出", dataav);
                    cb(null, dataav);
                }
            }
        );
    }
    //nouse
    function funShip1Ment(cb){
        yjDBService.exec({
                    sql : sql_SoftDep1,
                    parameters : [],
                    rowsAsArray : true,
                    success : function(r) {
                        var datas = []
                        var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                        for (var i = 0; i < data.length; i++) {
                            var temp = {
                                "CTRName" : data[i].CTRName ,
                                "taskStaff" : data[i].taskStaff,
                                "PLDArea" : data[i].PLDArea,
                            }
    					 
                            datas.push(temp)
                        }
                        cb(null, datas);
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
    function findHead(){
        async.parallel([ funPage1Head, funPage1A1 , funPage1A2 , funPage1B1 , funPage1B2 , funPage1B3 , funPage1C1 , funPage1C2 , funPage1C3 ,  funRemainDone ,  funRemainLateDone , funRemainNotDo  ], 
            function(err, result) {
                if (err) {
        
                } else {
                    //   console.log("Page1Head笔数", result[0].length);
                    // （延期已完成+延期未完成）/（已完成总单+延期未完成）
                    //   console.log("职工笔数", staff.length); 
                try {
                    let sub=[]; 
                    sub[0] = 0,sub[1] = 0, sub[2] = 0,sub[3] = 0, sub[4] = 0,sub[5] = 0, sub[6] = 0 , sub[7] = 0;
                    for (var i = 0; i < staff.length && i<limitcnt ; i++) {
                        // var delytot =result[4][i].Times+result[6][i].Times;  
                        // var thistot =result[3][i].Times+result[4][i].Times+result[5][i].Times+result[6][i].Times;   
                        var delytot =result[4][i].Times+result[6][i].Times+result[10][i].Times+result[11][i].Times;  
                        var thistot =result[1][i].Times+result[2][i].Times; 
                        if(i<8){
//  console.log("施rate",i,"贰",result[4][i].Times,"遛",result[6][i].Times,"定",result[10][i].Times,"机",result[11][i].Times  ); 
                        }  
                        var rate = (delytot/thistot)*100;
                        if(rate!=null && typeof rate!="undefined" && rate!=0){
                            rate = rate.toFixed(1);  
                        }
                        if(   rate!='NaN' && rate!="NaN" &&   rate!=0){
                            rate =rate+"%";
                        }else{
                            rate = "0";
                        }
                        var obj={
                            "SHIPTYPE":result[0][i].groupLabel,
                            "Staff":result[0][i].staffName,
                            "WORK_RANGE":result[0][i].staffWorkType,
                            "Bill_STAT1":result[1][i].Times, 
                            "Bill_STAT2":result[2][i].Times, 
                            "Bill_STAT3":result[3][i].Times+result[9][i].Times, //9
                            "Bill_STAT4":result[4][i].Times+result[10][i].Times,
                            "Bill_STAT5":result[5][i].Times,
                            "Bill_STAT6":result[6][i].Times+result[11][i].Times,//10
                            "Bill_STAT7":result[7][i].Times,  
                            "Bill_STAT8":rate
                        };
                        if(i<8){
                            // console.log("施rate",i,"贰",delytot,"遛",thistot,"贤",rate ); 
                        }
                        sub[0] =sub[0] + parseInt(result[1][i].Times); 
                        sub[1] =sub[1] + parseInt(result[2][i].Times); 
                        sub[2] =sub[2] + parseInt(result[3][i].Times+result[9][i].Times); //9
                        sub[3] =sub[3] + parseInt(result[4][i].Times+result[10][i].Times); 
                        sub[4] =sub[4] + parseInt(result[5][i].Times); 
                        sub[5] =sub[5] + parseInt(result[6][i].Times+result[11][i].Times); //10
                        sub[6] =sub[6] + parseInt(result[7][i].Times); 
                        sub[7] =sub[7] + parseInt(result[8][i].Times); 
                        dataArr.push(obj);
                    }          
                    // console.log("page0 : " + sub[0] + "");
                    // console.log("page1 : " + sub[1] + ""); 
                    // console.log("page2 : " + sub[2] + ""); 
                    // console.log("page3 : " + sub[3] + "");
                    // console.log("page4 : " + sub[4] + "");
                    // console.log("page5 : " + sub[5] + "");
                    // console.log("page6 : " + sub[6] + "");
                    // console.log("page7 : " + sub[7] + "");         
                        var obj2={
                        "SHIPTYPE":"",
                        "Staff":"总计",
                        "WORK_RANGE":"",
                        "Bill_STAT1":sub[0], 
                        "Bill_STAT2":sub[1],  
                        "Bill_STAT3":sub[2],  
                        "Bill_STAT4":sub[3],  
                        "Bill_STAT5":sub[4], 
                        "Bill_STAT6":sub[5],  
                        "Bill_STAT7":sub[6],  
                    };
                    dataArr.push(obj2);
                    sender.success(dataArr);
                } catch(err) {
                    console.log("page1 个人统计严重错误: " + err.name + ""); 
                  }
                }
            });     
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