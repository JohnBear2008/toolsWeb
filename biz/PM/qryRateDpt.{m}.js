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
    // console.log("部門统计表格开始日:"+param1+"到期日:"+param2);  
    var DBTable=sender.req.query.DBTable; 
    var sqlGetTableData = "SELECT * FROM "+DBTable;
    sqlGetTableData = "SELECT * FROM ms_agent where FID=?  ";
    var sql_SoftDep1 = " Select `BPID`,`CTRName`, `PGEMaker`,`taskStaffs`,  `applyDate`," +
    " `limitDate`,  `makeDate`, auditDate,`PLDArea`,LEFT(tbb.`topic`, 256) as topic_cut" +
    " from `ppm_bills_plan` tbb where tbb.LimitDate >'2019-11-20' and tbb.LimitDate < '2019-11-24' and PGEMaker in (Select staffName from ppm_staffs tb1 where tb1.staffRole='程序员' order by staffID)  ";

    var sql_SoftDep2 = "SELECT *  FROM `pm_Shipment` where staff in (Select staffName from ppm_staffs tb1 where tb1.staffRole='程序员' order by staffID) " ;

    var sql_SoftDep3 = " SELECT *  FROM `pm_neworder` where staff in (Select staffName from ppm_staffs tb1 where tb1.staffRole='程序员' order by staffID)  " ;
   
    var sql_Page2Num = "Select  count(*) as times from `ppm_bills_plan` tbb where tbb.LimitDate >'2019-11-20' and tbb.LimitDate < '2019-11-24' and tbb.LimitDate > tbb.WFEndDate  "+
                       " and PGEMaker in (Select staffName from ppm_staffs tb1 where tb1.staffRole='程序员' order by staffID) "; 

    var staff =[ "梅迪凡","王涛","王浩宇","沈航凯","虞晔文","俞洋","裘凯迪", "王锋","陈浩天","张铖","单霖霖","孙维泽","方林杰","柳张成", "谷永亮","赵韦","杨金鑫","谢涛","戎桂"];
    var dpt = "A";
    var dptB = "B";
    let now  = new Date();
    var duedate = now.Format("yyyy-MM-dd");;
     //表头 FQC测试完成时间，若超出任务单中的需求完成日期（当多个任务单需求日期不一致时，抓取期限最长的日期），则算为延误
    var sql_Page2Head =  " Select groupLabel,staffName,staffWorkType from ppm_staffs tb1 where tb1.staffRole='程序员' and staffName<>'周筱龙' order by staffID "; 
    //上周单   1118-1125
    var sql_Page2A1 = "Select  count(*) as times from `ppm_bills_plan` tbb where   tbb.ApplyDate < ?     "+
    "  and tbb.WFEndDate is null "; 
    //本周新单  1125~1202
    var sql_Page2A2 = "Select  count(*) as times from `ppm_bills_plan` tbb where tbb.ApplyDate >? and tbb.ApplyDate < ?    "+
    "   "; 
    //延误单号 auditDate表完成
    var sql_Page2B1 = "Select  count(*) as times from `ppm_bills_plan` tbb where tbb.ApplyDate >? and tbb.ApplyDate < ? "+
    " and tbb.LimitDate > tbb.auditDate    "; 
    //完成单号
    var sql_Page2B2 = "Select  count(*) as times from `ppm_bills_plan` tbb where tbb.ApplyDate >? and tbb.ApplyDate < ? "+
    " and tbb.LimitDate < tbb.auditDate    "; 
    //客户取消
    var sql_Page2B3 = "Select  count(*) as times from `ppm_bills_plan` tbb where tbb.ApplyDate >? and tbb.ApplyDate < ?    "+
    " and stopReason <>''   "; 
    //延期未完成 3参数 归档日无
    var sql_Page2C1 = "Select  count(*) as times from `ppm_bills_plan` tbb where tbb.ApplyDate >? and tbb.ApplyDate < ?    "+
    " and tbb.auditDate > ?  and tbb.WFEndDate is null  "; 
    //期限未到
    var sql_Page2C2 = "Select  count(*) as times from `ppm_bills_plan` tbb where tbb.ApplyDate >? and tbb.ApplyDate < ?    "+
    " and  tbb.auditDate < ? and tbb.WFEndDate is null  "; 
    //其他  notdone
    var sql_Page2C3 = "Select  count(*) as times from `ppm_bills_plan` tbb where tbb.ApplyDate >? and tbb.ApplyDate < ?    "+
    " and FQCPass ='1' and orderFromDep =? ";
    //延期单数/本周总出货数  
    var sql_Page2Late = "Select  count(*) as times from `ppm_bills_plan` tbb where tbb.ApplyDate >? and tbb.ApplyDate < ?    "+
    "  and  tbb.LimitDate > tbb.auditDate  "; 
    //已完成总单/本周总单  
    var sql_Page2Done = "Select  count(*) as times from `ppm_bills_plan` tbb where tbb.ApplyDate >? and tbb.ApplyDate < ?    "+
    "  and tbb.auditDate <> '' "; 

    var dataArr=[]; 
    let LastDateRange = getLastWeekRange();
    let LastWeekbeg = LastDateRange[0].Format("yyyy-MM-dd");
    let LastWeekend = LastDateRange[1].Format("yyyy-MM-dd");
    //labuse
    // duedate ='2019-11-20';
    LastWeekbeg = '2019-11-01';
    LastWeekend = '2019-11-11';
    LastWeekbeg = lastbeg;
    LastWeekend = lastend;

    let DateRange = getThisWeekRange();
    let WeekThisbeg = DateRange[0].Format("yyyy-MM-dd");
    let WeekThisend = DateRange[1].Format("yyyy-MM-dd");
    //labuse
    WeekThisbeg = '2019-11-12';
    WeekThisend = '2019-11-21';
    WeekThisbeg = param1;
    WeekThisend = param2;

    async.parallel([ funPage2Head, funPage2A1 , funPage2A2 , funPage2B1 , funPage2B2 , funPage2B3 , funPage2C1 , funPage2C2 , funPage2C3, funPage2Late, funPage2Done  ], 
    function(err, result) {
		if (err) {

		} else {
             
            let sub=[]; 
            sub[0] = 0,sub[1] = 0, sub[2] = 0,sub[3] = 0, sub[4] = 0,sub[5] = 0, sub[6] = 0;
            for (var i = 0; i < 1 ; i++) {
                var obj={
                    "SHIPTYPE":"宁波PM记录",
                    "Staff":"", 
                    "Bill_STAT1":result[1][i].Times, 
                    "Bill_STAT2":result[2][i].Times, 
                    "Bill_STAT3":result[3][i].Times, 
                    "Bill_STAT4":result[4][i].Times,
                    "Bill_STAT5":result[5][i].Times,
                    "Bill_STAT6":result[6][i].Times,
                    "Bill_STAT7":result[7][i].Times,  
                    "Bill_STAT8":result[8][i].Times,  
                    "PERC_LATE":result[9][i].Times,  
                    "PERC_DONE":result[10][i].Times,  
                };
                dataArr.push(obj);
            }
            sender.success(dataArr);
            // console.log("部門出货1总计",obj); 
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
                    parameters : [LastWeekend ], 
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
                                "Times" : data[i].times , 
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

};