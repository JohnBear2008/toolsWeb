require("../../client/js/Date.js");

module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
    var async = require("async");
    var obj = sender.req.query;
 
    var param1=sender.req.query.weekbeg;  
    var param2=sender.req.query.weekend; 
    console.log("后台个人统计表格开始日:"+param1);  
    console.log("后台个人统计表格到期日:"+param2);  
    var lastbeg=sender.req.query.lastbeg;  
    var lastend=sender.req.query.lastend;  
    var DBTable=sender.req.query.DBTable; 
    var sqlGetTableData = "SELECT * FROM "+DBTable;
    sqlGetTableData = "SELECT * FROM ms_agent where FID=?  ";
    var sql_SoftDep1 = " Select `BPID`,`CTRName`, `taskStaff`,`taskStaffs`,  `applyDate`," +
    " `limitDate`,  `makeDate`, auditDate,`PLDArea`,LEFT(tbb.`topic`, 256) as topic_cut" +
    " from `ppm_bills_plan` tbb where tbb.LimitDate >'2019-11-20' and tbb.LimitDate < '2019-11-24' and taskStaff in (Select staffName from ppm_staffs tb1 where tb1.staffRole='程序员' order by staffID)  ";

    var sql_SoftDep2 = "SELECT *  FROM `pm_Shipment` where staff in (Select staffName from ppm_staffs tb1 where tb1.staffRole='程序员' order by staffID) " ;

    var sql_SoftDep3 = " SELECT *  FROM `pm_neworder` where staff in (Select staffName from ppm_staffs tb1 where tb1.staffRole='程序员' order by staffID)  " ;
   
    var sql_Page1Num = "Select  count(*) as times from `ppm_bills_plan` tbb where tbb.LimitDate >'2019-11-20' and tbb.LimitDate < '2019-11-24' and tbb.LimitDate > tbb.WFEndDate  "+
                       " and taskStaff in (Select staffName from ppm_staffs tb1 where tb1.staffRole='程序员' order by staffID) "; 

    // var staff =[ "梅迪凡","王涛","王浩宇","沈航凯","虞晔文","俞洋","裘凯迪", "王锋","陈浩天","张铖","单霖霖","孙维泽","方林杰","柳张成", "谷永亮","赵韦","杨金鑫","谢涛","戎桂"];
    var staff =[];

     //表头 主管审核的时间，若超出任务单中的需求完成日期，则算为延误
    var sql_Page1Head =  " Select groupLabel,staffName,staffWorkType from ppm_staffs tb1 where tb1.staffRole='程序员' and staffName NOT IN ('周筱龙','单霖霖','张胜勇') order by groupLabel,staffID "; 
    //上周单   1118-1125
    var sql_Page1A1 = "Select  count(*) as times from `ppm_bills_task` tbb where  tbb.taskMakeDate >? and  tbb.taskMakeDate < ?     "+
    // var sql_Page1A1 = "Select  count(*) as times from `ppm_bills_task` tbb where  tbb.taskMakeDate >? and  tbb.taskMakeDate < ?     "+
    " and taskStaff =? "; 
    //本周新单  1125~1202
    var sql_Page1A2 = "Select  count(*) as times from `ppm_bills_task` tbb where  tbb.taskMakeDate >? and  tbb.taskMakeDate < ?    "+
    // var sql_Page1A2 = "Select  count(*) as times from `ppm_bills_task` tbb where  tbb.taskMakeDate >? and  tbb.taskMakeDate < ?    "+
    " and taskStaff =? ";  
    //延误单号
    var sql_Page1B1 = "Select  count(*) as times from `ppm_bills_task` tbb where  tbb.taskMakeDate >? and  tbb.taskMakeDate < ? and  tbb.taskFinishDate > tbb.IPQCAuditDate  "+
    " and taskStaff =? "; 
    //完成单号
    var sql_Page1B2 = "Select  count(*) as times from `ppm_bills_task` tbb where  tbb.taskMakeDate >? and  tbb.taskMakeDate < ? and  tbb.taskFinishDate < tbb.IPQCAuditDate  "+
    " and taskStaff =? "; 
    //客户取消
    var sql_Page1B3 = "Select  count(*) as times from `ppm_bills_task` tbb where  tbb.taskMakeDate >? and  tbb.taskMakeDate < ?    "+
    "  and taskStaff =? "; 
    //延误单号
    var sql_Page1C1 = "Select  count(*) as times from `ppm_bills_task` tbb where  tbb.taskMakeDate >? and  tbb.taskMakeDate < ?    "+
    " and BTAcceptResultText ='已确认' and taskStaff =? "; 
    //完成单号
    var sql_Page1C2 = "Select  count(*) as times from `ppm_bills_task` tbb where  tbb.taskMakeDate >? and  tbb.taskMakeDate < ?    "+
    " and BTAcceptResult ='1' and taskStaff =? "; 
    //延误率
    var sql_Page1C3 = "Select  count(*) as times from `ppm_bills_task` tbb where  tbb.taskMakeDate >? and  tbb.taskMakeDate < ?    "+
    " and tbb.taskFinishDate >  tbb.IPQCAuditDate and taskStaff =? "; 

    var dataArr=[]; 
    let LastDateRange = getLastWeekRange();
    let LastWeekbeg = LastDateRange[0].Format("yyyy-MM-dd");
    let LastWeekend = LastDateRange[1].Format("yyyy-MM-dd");
    LastWeekbeg = '2019-11-18';
    LastWeekend = '2019-11-24';
    // console.log("金像", LastWeekbeg);
    // console.log("金像", LastWeekend);
    LastWeekbeg = lastbeg;
    LastWeekend = lastend;

    let DateRange = getThisWeekRange();
    let WeekThisbeg = DateRange[0].Format("yyyy-MM-dd");
    let WeekThisend = DateRange[1].Format("yyyy-MM-dd");
    WeekThisbeg = '2019-11-25';
    WeekThisend = '2019-12-02';
    WeekThisbeg = param1;
    WeekThisend = param2;
    console.log("鹏岳", WeekThisbeg);
    console.log("鹏岳", WeekThisend);
   

    yjDBService.exec({
        sql : sql_Page1Head,
        parameters : [],
        rowsAsArray : true,
        success : function(r) {
           
            var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
            for (var i = 0; i < data.length; i++) {
                var temp = {
                    "staffName" : data[i].staffName,
                }
                staff.push(data[i].staffName);
            }
             
            findHead();
        },
        // error : sender.error
    })
 
    function funPage1Head(cb){
        console.log("創威", staff.length);
        yjDBService.exec({
            sql : sql_Page1Head,
            parameters : [],
            rowsAsArray : true,
            success : function(r) {
                var datas = []
                var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                for (var i = 0; i < data.length; i++) {
                    var temp = {
                        "groupLabel" : data[i].groupLabel ,
                        "staffName" : data[i].staffName,
                        "staffWorkType" : data[i].staffWorkType,
                    }
                //  console.log("呆哥", temp);
 
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
                parameters : [LastWeekbeg ,LastWeekend ,stf], //
                rowsAsArray : true,
                success : function(r) {
                    var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                    for (var i = 0; i < data.length; i++) {
                        var temp = {
                            "Times" : data[i].times , 
                        }
                       dataav.push(temp);
                    }
                    (cb2(null, dataav));
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
        console.log("逸朗", staff.length);
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
        }
        async.parallel( funblock, 
            function(err, result) {
                if (err) {

                } else {
              
                //    dataav.push({"Times" : 3 });
                //    dataav.push({"Times" : 6 }); 
                    //   console.log("衝出", dataav);
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
                    for (var i = 0; i < data.length; i++) {
                        var temp = {
                            "Times" : data[i].times , 
                        }
                       dataav.push(temp);
                    }
                    (cb2(null, dataav));  
                    // console.log("后", temp);
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
        }
        async.parallel( funblock, 
               function(err, result) {
                if (err) {

                } else {
              
                //    dataav.push({"Times" : 3 });
                //    dataav.push({"Times" : 6 }); 
                    // console.log("发", dataav);
                    cb(null, dataav);
                }
            }
        );
        
    }
    function funPage1B1(cb){
        var  dataav = [];
        function  allAA( cb2 ,stf){
            yjDBService.exec({
                sql : sql_Page1B1,
                parameters : [LastWeekbeg , LastWeekend , stf],  
                rowsAsArray : true,
                success : function(r) {
                    var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                    for (var i = 0; i < data.length; i++) {
                        var temp = {
                            "Times" : data[i].times , 
                        }
                       dataav.push(temp);
                    }
                    (cb2(null, dataav));  
                    // console.log("式", temp);
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
        }
        async.parallel( funblock, 
               function(err, result) {
                if (err) {

                } else {
              
                //    dataav.push({"Times" : 3 });
                //    dataav.push({"Times" : 6 }); 
                    cb(null, dataav);
                }
            }
        );
    }
    function funPage1B2(cb){
        var  dataav = [];
        function  allAA( cb2 ,stf){
            yjDBService.exec({
                sql : sql_Page1B2,
                parameters : [LastWeekbeg , LastWeekend , stf],  
                rowsAsArray : true,
                success : function(r) {
                    var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                    for (var i = 0; i < data.length; i++) {
                        var temp = {
                            "Times" : data[i].times , 
                        }
                       dataav.push(temp);
                    }
                    (cb2(null, dataav));  
                    // console.log("高", temp);
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
        }
        async.parallel( funblock, 
               function(err, result) {
                if (err) {

                } else {
              
                //    dataav.push({"Times" : 3 });
                //    dataav.push({"Times" : 6 }); 
                    cb(null, dataav);
                }
            }
        );
    }
    function funPage1B3(cb){
        var  dataav = [];
        function  allAA( cb2 ,stf){
            yjDBService.exec({
                sql : sql_Page1B3,
                parameters : [LastWeekbeg , LastWeekend , stf],  
                rowsAsArray : true,
                success : function(r) {
                    var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                    for (var i = 0; i < data.length; i++) {
                        var temp = {
                            "Times" : data[i].times , 
                        }
                       dataav.push(temp);
                    }
                    (cb2(null, dataav));  
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
        }
        async.parallel( funblock, 
               function(err, result) {
                if (err) {

                } else {
              
                //    dataav.push({"Times" : 3 });
                //    dataav.push({"Times" : 6 }); 
                    // console.log("然", dataav);
                    cb(null, dataav);
                }
            }
        );
    }
    function funPage1C1(cb){
        var  dataav = [];
         function  allAA( cb2 ,stf){
            yjDBService.exec({
                sql : sql_Page1C1,
                parameters : [LastWeekbeg , LastWeekend , stf],  
                rowsAsArray : true,
                success : function(r) {
                    var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                    for (var i = 0; i < data.length; i++) {
                        var temp = {
                            "Times" : data[i].times , 
                        }
                       dataav.push(temp);
                    }
                    (cb2(null, dataav));  
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
        }
        async.parallel( funblock, 
               function(err, result) {
                if (err) {

                } else {
              
                //    dataav.push({"Times" : 3 });
                //    dataav.push({"Times" : 6 }); 
                    // console.log("瑞", dataav);
                    cb(null, dataav);
                }
            }
        );
    }
    function funPage1C2(cb){
        var  dataav = [];
        function  allAA( cb2 ,stf){
            yjDBService.exec({
                sql : sql_Page1C2,
                parameters : [LastWeekbeg , LastWeekend , stf],  
                rowsAsArray : true,
                success : function(r) {
                    var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                    for (var i = 0; i < data.length; i++) {
                        var temp = {
                            "Times" : data[i].times , 
                        }
                       dataav.push(temp);
                    }
                    (cb2(null, dataav));  
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
        }
        async.parallel( funblock, 
               function(err, result) {
                if (err) {

                } else {
              
                //    dataav.push({"Times" : 3 });
                //    dataav.push({"Times" : 6 }); 
                    // console.log("瑞", dataav);
                    cb(null, dataav);
                }
            }
        );
    }
    function funPage1C3(cb){
        var  dataav = [];
        function  allAA( cb2 ,stf){
            yjDBService.exec({
                sql : sql_Page1C3,
                parameters : [LastWeekbeg , LastWeekend , stf],  
                rowsAsArray : true,
                success : function(r) {
                    var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                    for (var i = 0; i < data.length; i++) {
                        var temp = {
                            "Times" : data[i].times , 
                        }
                       dataav.push(temp);
                    }
                    (cb2(null, dataav));  
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
        }
        async.parallel( funblock, 
               function(err, result) {
                if (err) {

                } else {
              
                //    dataav.push({"Times" : 3 });
                //    dataav.push({"Times" : 6 }); 
                    // console.log("自", dataav);
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
    //nouse
    function funShip3Ment(cb){
        yjDBService.exec({
                    sql : sql_SoftDep3,
                    parameters : [],
                    rowsAsArray : true,
                    success : function(r) {
                        var datas = []
                        var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                        for (var i = 0; i < data.length; i++) {
                            var temp = [];
                            temp.push(data[i].Customer_ID);
                            datas.push(temp);
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
        async.parallel([ funPage1Head, funPage1A1 , funPage1A2 , funPage1B1 , funPage1B2 , funPage1B3 , funPage1C1 , funPage1C2 , funPage1C3   ], 
            function(err, result) {
                if (err) {
        
                } else {
                      console.log("笔数", result[0].length);
                    //   console.log("笔数", result[1].length);
                    //   console.log("笔数", result[2].length);
                    //   console.log("笔数", result[3].length);
                    //   console.log("笔数", result[4].length);
                    //   console.log("笔数", result[5].length);
                    //   console.log("笔数", result[6].length);
                    //   console.log("笔数", result[7].length); 
                    let sub=[]; 
                    sub[0] = 0,sub[1] = 0, sub[2] = 0,sub[3] = 0, sub[4] = 0,sub[5] = 0, sub[6] = 0 , sub[7] = 0;
                    for (var i = 0; i < 19 ; i++) {
                        var thistot =result[1][i].Times;
                        var delytot =result[8][i].Times;
                        var rate = delytot/thistot;
                        var obj={
                            "SHIPTYPE":result[0][i].groupLabel,
                            "Staff":result[0][i].staffName,
                            "WORK_RANGE":result[0][i].staffWorkType,
                            "Bill_STAT1":result[1][i].Times, 
                            "Bill_STAT2":result[2][i].Times, 
                            "Bill_STAT3":result[3][i].Times, 
                            "Bill_STAT4":result[4][i].Times,
                            "Bill_STAT5":result[5][i].Times,
                            "Bill_STAT6":result[6][i].Times,
                            "Bill_STAT7":result[7][i].Times,  
                            "Bill_STAT8":rate,  
                        };
                        // console.log("出货rate",rate); 
                        sub[0] =sub[0] + parseInt(result[1][i].Times); 
                        sub[1] =sub[1] + parseInt(result[2][i].Times); 
                        sub[2] =sub[2] + parseInt(result[3][i].Times); 
                        sub[3] =sub[3] + parseInt(result[4][i].Times); 
                        sub[4] =sub[4] + parseInt(result[5][i].Times); 
                        sub[5] =sub[5] + parseInt(result[6][i].Times); 
                        sub[6] =sub[6] + parseInt(result[7][i].Times); 
                        sub[7] =sub[7] + parseInt(result[8][i].Times); 
                        dataArr.push(obj);
                    }
                   
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
                    // console.log("出货1总计",obj2); 
                    // var obj={
                    //     "SHIPTYPE":result[0][0].CTRName,
                    //     "Staff":result[0][0].taskStaff,
                    //     "WORK_RANGE":result[1][0],
                    //     "Bill_STAT1":result[2][0],
                    //     "Bill_STAT2":result[2][0],
                    //     "Bill_STAT3":result[2][0],
                    //     "Bill_STAT4":result[2][0],
                    //     "Bill_STAT5":result[2][0],
                    //     "Bill_STAT6":result[2][0],
                    //     "Bill_STAT7":result[2][0],
                    // };
                }
            });     
    }
};