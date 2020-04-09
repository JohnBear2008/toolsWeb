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
    // console.log("get后台个人表头汇总:"+param1+"日期:"+param2+"遗起"+lastbeg+"遗止"+lastend); 
    var DBTable=sender.req.query.DBTable; 
    let now  = new Date();
    var duedate = now.Format("yyyy-MM-dd");
    // 遗留单    a)	开单日期非新单范围，但【完成日期】在【新单范围内】 参一=参二减1日 
    // var sql_Page1HA1 = "SELECT count(*) as times FROM ( SELECT tbb.*,CASE tbb.WFStatus WHEN 0 THEN '终止归档' WHEN 100 THEN '完结归档' END AS WFEndText FROM `ppm_bills_task_t` tbb,"+ 
    // " (SELECT BTID,MAX(BTVersion) AS maxBTVersion FROM `ppm_bills_task_t` GROUP BY BTID) tba WHERE  SUBSTRing(tbb.BTID, 14,1) NOT IN('K','L','O','B','R') and tbb.BTID=tba.BTID AND tbb.BTVersion=tba.maxBTVersion ) tbb "+ 
    // " where  tbb.taskMakeDate <= ? and (tbb.taskFinishDate >=? and  tbb.taskFinishDate <= ?) "; 
    var sql_Page1HA1 = 
     " SELECT count(*) as times  FROM  (SELECT tbb.*,CASE tbb.WFStatus WHEN 0 THEN '终止归档' WHEN 100 THEN '完结归档' END AS WFEndText FROM `ppm_bills_task_t` tbb, "+
     " (SELECT BTID,MAX(BTVersion) AS maxBTVersion FROM `ppm_bills_task_t` GROUP BY BTID) tba WHERE tbb.BTID=tba.BTID AND tbb.BTVersion=tba.maxBTVersion ) A "+
     " where  taskMakeDate <=? and taskType='A' and ((taskFinishDate >=? and taskFinishDate <=?) "+
     " or (WFEndText is null and taskFinishDate is null)) ";

    //本周新单  
//     var sql_Page1HA2 = "SELECT count(*) as times FROM ( SELECT tbb.*,CASE tbb.WFStatus WHEN 0 THEN '终止归档' WHEN 100 THEN '完结归档' END AS WFEndText FROM `ppm_bills_task_t` tbb,"+ 
//    " (SELECT BTID,MAX(BTVersion) AS maxBTVersion FROM `ppm_bills_task_t` GROUP BY BTID) tba WHERE  SUBSTRing(tbb.BTID, 14,1) NOT IN('K','L','O','B','R') and tbb.BTID=tba.BTID AND tbb.BTVersion=tba.maxBTVersion ) tbb "+ 
//    " where tbb.taskMakeDate >=? and  tbb.taskMakeDate <= ?   ";
      var sql_Page1HA2 = 
    " SELECT count(*) as times  FROM  (SELECT tbb.*,CASE tbb.WFStatus WHEN 0 THEN '终止归档' WHEN 100 THEN '完结归档' END AS WFEndText FROM `ppm_bills_task_t` tbb, "+
    " (SELECT BTID,MAX(BTVersion) AS maxBTVersion FROM `ppm_bills_task_t` GROUP BY BTID) tba WHERE tbb.BTID=tba.BTID AND tbb.BTVersion=tba.maxBTVersion ) A "+
    " where taskMakeDate>=? and taskMakeDate<=? and taskType='A' ";
    //按时完成 2参数 【完成日期】在【完成期限内】
    // var sql_Page1HB1 = "SELECT count(*) as times FROM ( SELECT tbb.*,CASE tbb.WFStatus WHEN 0 THEN '终止归档' WHEN 100 THEN '完结归档' END AS WFEndText FROM `ppm_bills_task_t` tbb,"+ 
    // " (SELECT BTID,MAX(BTVersion) AS maxBTVersion FROM `ppm_bills_task_t` GROUP BY BTID) tba WHERE  SUBSTRing(tbb.BTID, 14,1) NOT IN('K','L','O','B','R') and tbb.BTID=tba.BTID AND tbb.BTVersion=tba.maxBTVersion ) tbb "+ 
    // " where  (    (tbb.taskMakeDate >=? and  tbb.taskMakeDate <= ?)   and  tbb.taskFinishDate <= tbb.taskLimitDate  and IPQCAuditResultText ='测试通过' ) ";
    var sql_Page1HB1 = "SELECT count(*) as times FROM ( SELECT tbb.*,CASE tbb.WFStatus WHEN 0 THEN '终止归档' WHEN 100 THEN '完结归档' END AS WFEndText FROM `ppm_bills_task_t` tbb,"+ 
    " (SELECT BTID,MAX(BTVersion) AS maxBTVersion FROM `ppm_bills_task_t` GROUP BY BTID) tba WHERE  tbb.BTID=tba.BTID AND tbb.BTVersion=tba.maxBTVersion ) tbb "+ 
    " where  (    (tbb.taskMakeDate >=? and  tbb.taskMakeDate <= ?)   and  tbb.taskFinishDate <= tbb.taskLimitDate  and IPQCAuditResultText ='测试通过' ) "+
    "  and taskType='A' ";
  
    //延期完成 2参数  【完成日期】超出【完成期限，且新单范围内】
    // var sql_Page1HB2 = "Select  count(*) as times from `ppm_bills_task_t` tbb where  SUBSTRing(tbb.BTID, 14,1) NOT IN('K','L','O','B','R') and  (tbb.taskMakeDate >=? and  tbb.taskMakeDate <= ?)  "+
    // " and  tbb.taskFinishDate > tbb.IPQCAuditDate  and IPQCAuditResultText ='测试通过' ";
    var sql_Page1HB2 = "SELECT count(*) as times FROM ( SELECT tbb.*,CASE tbb.WFStatus WHEN 0 THEN '终止归档' WHEN 100 THEN '完结归档' END AS WFEndText FROM `ppm_bills_task_t` tbb,"+ 
    " (SELECT BTID,MAX(BTVersion) AS maxBTVersion FROM `ppm_bills_task_t` GROUP BY BTID) tba WHERE  tbb.BTID=tba.BTID AND tbb.BTVersion=tba.maxBTVersion ) tbb "+ 
    " where tbb.taskFinishDate > tbb.taskLimitDate and IPQCAuditResultText ='测试通过' and (tbb.taskMakeDate >=? and  tbb.taskMakeDate <= ?)    "+
    "  and taskType='A' ";
    //客户取消  and (taskStopDate >=? and taskStopDate <=? )
    var sql_Page1HB3 =
    // "SELECT count(*) as times FROM ( SELECT tbb.*,CASE tbb.WFStatus WHEN 0 THEN '终止归档' WHEN 100 THEN '完结归档' END AS WFEndText FROM `ppm_bills_task_t` tbb,"+ 
    // " (SELECT BTID,MAX(BTVersion) AS maxBTVersion FROM `ppm_bills_task_t` GROUP BY BTID) tba WHERE  tbb.BTID=tba.BTID AND tbb.BTVersion=tba.maxBTVersion ) tbb "+ 
    // " where   (BTStatusText='任务终止' OR BTStatusText='废弃'  OR WFEndText='终止归档') and (tbb.taskMakeDate >=? and  tbb.taskMakeDate <= ?)  "+
    // "  and taskType='A' ";
    "SELECT count(*) as times FROM ( SELECT tbb.*,CASE tbb.WFStatus WHEN 0 THEN '终止归档' WHEN 100 THEN '完结归档' END AS WFEndText FROM `ppm_bills_task_t` tbb,"+ 
    " (SELECT BTID,MAX(BTVersion) AS maxBTVersion FROM `ppm_bills_task_t` GROUP BY BTID) tba WHERE  tbb.BTID=tba.BTID AND tbb.BTVersion=tba.maxBTVersion ) tbb "+ 
    " where ( BTStatus =4 or WFStatus=0) and (tbb.taskMakeDate >=? and  tbb.taskMakeDate <= ?) "+
    "  and taskType='A' ";
    //延期未完成  3参数 已超出【完成期限】，但完成日期还是空白
    // var sql_Page1HC1 = "Select  count(*) as times from `ppm_bills_task_t` tbb where  SUBSTRing(tbb.BTID, 14,1) NOT IN('K','L','O','B','R') and   (tbb.taskMakeDate >=? and  tbb.taskMakeDate <= ?)  "+
    // " and  ? > tbb.taskLimitDate and IPQCAuditResultText is null "; 
    var sql_Page1HC1 = "SELECT count(*) as times FROM ( SELECT tbb.*,CASE tbb.WFStatus WHEN 0 THEN '终止归档' WHEN 100 THEN '完结归档' END AS WFEndText FROM `ppm_bills_task_t` tbb,"+ 
    " (SELECT BTID,MAX(BTVersion) AS maxBTVersion FROM `ppm_bills_task_t` GROUP BY BTID) tba WHERE tbb.BTID=tba.BTID AND tbb.BTVersion=tba.maxBTVersion ) tbb "+ 
    " where  ( BTStatus !=4 AND WFStatus!=0) and  (tbb.taskMakeDate >=? and  tbb.taskMakeDate <= ?) and ? > tbb.taskLimitDate and IPQCAuditResultText is null "+
    "  and taskType='A' ";
    //期限未到 3参数 BTAcceptResult ='1' 完成日期为空白，但在【完成期限】
    // var sql_Page1HC2 = "Select  count(*) as times from `ppm_bills_task_t` tbb where  SUBSTRing(tbb.BTID, 14,1) NOT IN('K','L','O','B','R') and  (tbb.taskMakeDate >=? and  tbb.taskMakeDate <= ?)    "+
    // " and ? <=tbb.taskLimitDate    "; 
    var sql_Page1HC2 = "SELECT count(*) as times FROM ( SELECT tbb.*,CASE tbb.WFStatus WHEN 0 THEN '终止归档' WHEN 100 THEN '完结归档' END AS WFEndText FROM `ppm_bills_task_t` tbb,"+ 
    " (SELECT BTID,MAX(BTVersion) AS maxBTVersion FROM `ppm_bills_task_t` GROUP BY BTID) tba WHERE tbb.BTID=tba.BTID AND tbb.BTVersion=tba.maxBTVersion ) tbb "+ 
    " where ( BTStatus !=4 AND WFStatus!=0) and  (tbb.taskMakeDate >=? and  tbb.taskMakeDate <= ?)   and ? <=tbb.taskLimitDate  and IPQCAuditResultText is null "+
    "  and taskType='A' ";
    //延误率
    // var sql_Page1HC3 = "Select  count(*) as times from `ppm_bills_task_t` tbb where  SUBSTRing(tbb.BTID, 14,1) NOT IN('K','L','O','B','R') and  (tbb.taskMakeDate >=? and  tbb.taskMakeDate <= ?)  "+
    // " and tbb.taskFinishDate >  tbb.IPQCAuditDate "; 
    var sql_Page1HC3 = "Select  count(*) as times from `ppm_bills_task_t` tbb where (tbb.taskMakeDate >=? and  tbb.taskMakeDate <= ?)  "+
    " and tbb.taskFinishDate >  tbb.IPQCAuditDate  and taskType='A' "; 
    //上周遗留按时通过
 
    var sql_RemainDone = 
    // "SELECT count(*) as times  FROM  (SELECT tbb.*,CASE tbb.WFStatus WHEN 0 THEN '终止归档' WHEN 100 THEN '完结归档' END AS WFEndText FROM `ppm_bills_task_t` tbb, "+
    // "(SELECT BTID,MAX(BTVersion) AS maxBTVersion FROM `ppm_bills_task_t` GROUP BY BTID) tba WHERE tbb.BTID=tba.BTID AND tbb.BTVersion=tba.maxBTVersion ) A "+
    // "where( taskMakeDate<? and taskFinishDate>=? and taskFinishDate<=? and taskFinishDate <= taskLimitDate and taskType='A' )   "+
    // "and IPQCAuditResultText ='测试通过' ";
    "SELECT count(*) as times  FROM  (SELECT tbb.*,CASE tbb.WFStatus WHEN 0 THEN '终止归档' WHEN 100 THEN '完结归档' END AS WFEndText FROM `ppm_bills_task_t` tbb, "+
    "(SELECT BTID,MAX(BTVersion) AS maxBTVersion FROM `ppm_bills_task_t` GROUP BY BTID) tba WHERE tbb.BTID=tba.BTID AND tbb.BTVersion=tba.maxBTVersion ) A "+
    "where taskMakeDate <=? and taskType='A' and "+
	" ((taskFinishDate >=? and taskFinishDate <=? )  or (WFEndText is null and taskFinishDate is null) )"+
	" and (  IPQCAuditResultText ='测试通过' and taskFinishDate <= taskLimitDate ) ";

       //上周遗留延时通过 
    var sql_RemainLateDone = 
    "SELECT count(*) as times  FROM  (SELECT tbb.*,CASE tbb.WFStatus WHEN 0 THEN '终止归档' WHEN 100 THEN '完结归档' END AS WFEndText FROM `ppm_bills_task_t` tbb, "+
    "(SELECT BTID,MAX(BTVersion) AS maxBTVersion FROM `ppm_bills_task_t` GROUP BY BTID) tba WHERE tbb.BTID=tba.BTID AND tbb.BTVersion=tba.maxBTVersion ) A "+
    "where taskMakeDate <=? and taskType='A' and "+
	" ((taskFinishDate >=? and taskFinishDate <=? )  or (WFEndText is null and taskFinishDate is null) )"+
	" and (  IPQCAuditResultText ='测试通过' and taskFinishDate > taskLimitDate ) ";
    //上周遗留未完成
 
    var sql_RemainNotDo =
    // " SELECT count(*) as times  FROM  (SELECT tbb.*,CASE tbb.WFStatus WHEN 0 THEN '终止归档' WHEN 100 THEN '完结归档' END AS WFEndText FROM `ppm_bills_task_t` tbb, "+
    // " (SELECT BTID,MAX(BTVersion) AS maxBTVersion FROM `ppm_bills_task_t` GROUP BY BTID) tba WHERE tbb.BTID=tba.BTID AND tbb.BTVersion=tba.maxBTVersion ) A "+
    // " where( taskMakeDate<? and taskFinishDate>=? and taskFinishDate<=?  and taskType='A' )   "+
	// " and IPQCAuditResultText is null ";
    " SELECT count(*) as times  FROM  (SELECT tbb.*,CASE tbb.WFStatus WHEN 0 THEN '终止归档' WHEN 100 THEN '完结归档' END AS WFEndText FROM `ppm_bills_task_t` tbb, "+
    " (SELECT BTID,MAX(BTVersion) AS maxBTVersion FROM `ppm_bills_task_t` GROUP BY BTID) tba WHERE tbb.BTID=tba.BTID AND tbb.BTVersion=tba.maxBTVersion ) A "+
    "where taskMakeDate <=? and taskType='A' and "+
	" ((taskFinishDate >=? and taskFinishDate <=? )  or (WFEndText is null and taskFinishDate is null) )"+
	" 	and (  IPQCAuditResultText is null  )	";
    var dataArr=[]; 
    let LastDateRange = getLastWeekRange();
    let LastWeekbeg = LastDateRange[0].Format("yyyy-MM-dd");
    let LastWeekend = LastDateRange[1].Format("yyyy-MM-dd");
    //labuse
    // LastWeekbeg = '2019-11-01';
    // LastWeekend = '2019-11-11';
    // duedate ='2019-11-20';  
    LastWeekbeg = lastbeg;
    LastWeekend = lastend;
 
    let DateRange = getThisWeekRange();
    let WeekThisbeg = DateRange[0].Format("yyyy-MM-dd");
    let WeekThisend = DateRange[1].Format("yyyy-MM-dd");
    //labuse
    // WeekThisbeg = '2019-11-12';
    // WeekThisend = '2019-11-20';
    WeekThisbeg = param1;
    let YesterThis = '';
    YesterThis = getPrevDay(WeekThisbeg);
    console.log("武当 ",YesterThis);
    WeekThisend = param2;

    async.parallel([  funPage2A1 , funPage2A2 , funPage2B1 , funPage2B2 , funPage2B3 , funPage2C1 , funPage2C2 , funPage2C3 ,  funRemainDone , funRemainLateDone, funRemainNotDo   ], 
    function(err, result) {
		if (err) {

		} else {
            let sub=[]; 
            sub[0] = 0,sub[1] = 0, sub[2] = 0,sub[3] = 0, sub[4] = 0,sub[5] = 0, sub[6] = 0;
            for (var i = 0; i < 1 ; i++) {
                var obj={
                    "SHIPTYPE":"宁波PM记录",
                    "Staff":"", 
                    "Bill_STAT1":result[0][i].Times, 
                    "Bill_STAT2":result[1][i].Times, 
                    "Bill_STAT3":result[2][i].Times+result[8][i].Times, //+result[8][i].Times,
                    "Bill_STAT4":result[3][i].Times+result[9][i].Times,
                    "Bill_STAT5":result[4][i].Times,
                    "Bill_STAT6":result[5][i].Times+result[10][i].Times, //+result[9][i].Times,
                    "Bill_STAT7":result[6][i].Times,  
                    "Bill_STAT8":result[7][i].Times, 
                };
                dataArr.push(obj);
            }
            sender.success(dataArr);
             console.log("表头出货1总计",obj); 
        }
    });     
  
    function funPage2A1(cb){
        yjDBService.exec({
                    sql : sql_Page1HA1,
                    parameters : [YesterThis , WeekThisbeg ,WeekThisend ], 
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
    function funPage2A2(cb){
        yjDBService.exec({
                    sql : sql_Page1HA2,
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
                        // console.log("机里瓜拉", temp);
                        cb(null, datas);
                    },
                    error : sender.error
                })
    }
    function funPage2B1(cb){
        yjDBService.exec({
                    sql : sql_Page1HB1,
                    parameters : [WeekThisbeg ,WeekThisend , LastWeekbeg, LastWeekend ], 
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
    function funPage2B2(cb){
        yjDBService.exec({
                    sql : sql_Page1HB2,
                    parameters : [WeekThisbeg ,WeekThisend , LastWeekbeg, LastWeekend], 
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
    function funPage2B3(cb){
        yjDBService.exec({
                    sql : sql_Page1HB3,
                    parameters : [WeekThisbeg ,WeekThisend, LastWeekbeg, LastWeekend ], 
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
    function funPage2C1(cb){
        yjDBService.exec({
                    sql : sql_Page1HC1,
                    parameters : [WeekThisbeg ,WeekThisend ,duedate, LastWeekbeg, LastWeekend ], 
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
    function funPage2C2(cb){
        yjDBService.exec({
                    sql : sql_Page1HC2,
                    parameters : [WeekThisbeg ,WeekThisend ,duedate, LastWeekbeg, LastWeekend], 
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
    function funPage2C3(cb){
        yjDBService.exec({
                    sql : sql_Page1HC3,
                    parameters : [WeekThisbeg ,WeekThisend, LastWeekbeg, LastWeekend ], 
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
    // function getLastWeekRange() {
	// 	let oneDayLong = 24 * 60 * 60 * 1000;
	// 	let now = new Date();
	// 	let mondayTime = now.getTime() - (19- now.getDay()) * oneDayLong;
	// 	let sundayTime = now.getTime() - (12 - now.getDay()) * oneDayLong;
	// 	let monday = new Date(mondayTime);
	// 	let sunday = new Date(sundayTime);
	// 	let weekRange = [monday, sunday];

	// 	return weekRange;
	// }
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
//((WFStatus=0 OR WFStatus=100) OR (WFStatus<>0 AND WFStatus<>10/0 )) 