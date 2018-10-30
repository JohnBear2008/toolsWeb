module.exports = function(sender) {
        var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
        var yjDB = global.yjRequire("yujiang.Foil").yjDB;
        var limit=parseInt(sender.req.query.limit);
        var page=parseInt(sender.req.query.page);
        var UID=sender.req.query.UID;
        var start=parseInt((page-1)*limit);
        var end=limit;
     
        var SInfo=sender.req.query.SInfo;
        
//        console.log("get:"+JSON.stringify(sender.req.query));
               
        var sql="SELECT ms_spinfo.SPID,ms_spinfo.UID,ms_spinfo.MKID,ms_spinfo.Customer,ms_spinfo.AGID,ms_spinfo.MCID,ms_spinfo.EndDate,ms_spinfo.SP,ms_spinfo.PW,ms_spinfo.Type,ms_spinfo.FQ,ms_spinfo.downloadNum,DATE_FORMAT(CreateDate,'%Y-%m-%d') As CreateDate FROM ms_spinfo WHERE UID=? ORDER BY TimeStamp Desc ";
        
        if(!SInfo==""){
        	
        	SInfo="%"+SInfo+"%";//格式化搜索信息
        	 var sql="SELECT ms_spinfo.SPID,ms_spinfo.UID,ms_spinfo.MKID,ms_spinfo.Customer,ms_spinfo.AGID,ms_spinfo.MCID,ms_spinfo.EndDate,ms_spinfo.SP,ms_spinfo.PW,ms_spinfo.Type,ms_spinfo.FQ,ms_spinfo.downloadNum,DATE_FORMAT(CreateDate,'%Y-%m-%d') As CreateDate FROM ms_spinfo WHERE UID=? AND (MCID like ? OR Customer like ? )ORDER BY TimeStamp Desc ";
        }
        

//        SELECT id,DATE_FORMAT(date1,'%Y-%m-%d') As date1,
//        DATE_FORMAT(date2,'%Y-%m-%d') As date2 FROM test;
        
//    select count(1) from ms_spinfo 查询数量 执行效率高
//  select * from table limit (start-1)*limit,limit; 其中start是页码，limit是每页显示的条数。
//        var sqlcount="select count(*) from ms_spinfo"
        yjDBService.exec({
            sql : sql,
            parameters : [UID,SInfo,SInfo],
            rowsAsArray : true,
            success : function(result) {
                var data=yjDB.dataSet2ObjectList(result.meta,result.rows);
                
//               console.log("data:"+JSON.stringify(data));
                
                var datasend={};      
                
                
//                console.log("data.length:"+data.length);
                if((data.length-start)<limit){
                	var end=data.lengh-start;
                }
                
 //               console.log("limit:"+limit);
                for(var i=0;i<limit;i++){
                	datasend[i]=data[start+i];
                }
                
//                console.log("datasend:"+JSON.stringify(datasend));
                
                var resulttest={"code":0,"msg":"","count":data.length,"data":datasend}                
//                console.log("resulttest:"+JSON.stringify(resulttest));
                sender.success(resulttest);
            },
            error : sender.error
        });
    }  
    
