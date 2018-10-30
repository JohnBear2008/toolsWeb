
    
module.exports = function(sender) {
        var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
        var yjDB = global.yjRequire("yujiang.Foil").yjDB;
        var limit=parseInt(sender.req.query.limit);
        var page=parseInt(sender.req.query.page);
        var UID=sender.req.query.UID;
        var start=parseInt((page-1)*limit);
        var end=limit;
        
//        var field=sender.req.query.field;
//        var type=sender.req.query.type;
        
        var SInfo=sender.req.query.SInfo;
        
        console.log(sender.req.query);
        
        
        
        
        var sql="SELECT * FROM spinfo WHERE UID=? ORDER BY TimeStamp Desc ";
        
        if(!SInfo==""){
        	
        	SInfo="%"+SInfo+"%";//格式化搜索信息
        	console.log(SInfo);
        	 var sql="SELECT * FROM spinfo WHERE UID=? AND MCID like ? ORDER BY TimeStamp Desc ";
        }
        


        
//      console.log(limit+page+id);
      
        
//        var sql="SELECT * FROM spinfo limit ?,?";
        
//    select count(1) from spinfo 查询数量 执行效率高
//  select * from table limit (start-1)*limit,limit; 其中start是页码，limit是每页显示的条数。
//        var sqlcount="select count(*) from spinfo"
        yjDBService.exec({
            sql : sql,
            parameters : [UID,SInfo],
            rowsAsArray : true,
            success : function(result) {
                var data=yjDB.dataSet2ObjectList(result.meta,result.rows);
//                console.log(data.length);
                var datasend={};
                
                if((data.length-start)<limit){
                	var end=data.lengh-start;

                }
                for(var i=0;i<limit;i++){
                	datasend[i]=data[start+i];

                }
                
                
//                for( var key in data ){
//                	datasend[key]=data[key]
//                }
//                console.log(datasend);
                
                var resulttest={"code":0,"msg":"","count":data.length,"data":datasend}
//                var resultsend=JSON.parse(data);
//                console.log(resultsend);

                sender.success(resulttest);
            },
            error : sender.error
        });
    }  
    
