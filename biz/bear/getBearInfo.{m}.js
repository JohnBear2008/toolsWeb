module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
    var yjDateTime=global.yjRequire("yujiang.Foil").yjDateTime;
    var catid=sender.req.query.catid;
    var sTime=sender.req.query.startTime;
    var eTime=sender.req.query.endTime;
    var sql;
    var params=[catid];
    var lcid=sender.req.query.LCID;
    var limit=sender.req.query.limit;
    var page=sender.req.query.page;
    console.log(limit+page);
    
    
    
//    if(sTime&&eTime){
//        sql="select ddh.DeviceEntityOID,ddm.DeviceDataMetaAID,ddh.CatchTime,ddh.ValueDec "
//           +" from  DeviceDataHistories ddh ,DeviceDataMetas ddm "
//           +" where ddh.DeviceDataMetaOID=ddm.DeviceDataMetaOID and ddh.DeviceEntityOID=? and "
//           +"       (ddm.DeviceDataMetaOID=617 or ddm.DeviceDataMetaOIDParent=617 or "
//           +"        ddm.DeviceDataMetaOID=744 or ddm.DeviceDataMetaOIDParent=744) and ddh.ValueDec>0 "
//           +"        and ddh.CatchTime between ? and ?";
//           params.push( yjDateTime.toUTC(new Date(sTime)));
//           params.push( yjDateTime.toUTC(new Date(eTime)));
//
//    }else{
//        sql="select ddn.DeviceEntityOID,ddm.DeviceDataMetaAID,ddn.CatchTime,ddn.ValueDec "
//           +" from  DeviceDataNew ddn ,DeviceDataMetas ddm "
//           +" where ddn.DeviceDataMetaOID=ddm.DeviceDataMetaOID and ddn.DeviceEntityOID=? and "
//           +"       (ddm.DeviceDataMetaOID=617 or ddm.DeviceDataMetaOIDParent=617 or "
//           +"        ddm.DeviceDataMetaOID=744 or ddm.DeviceDataMetaOIDParent=744) and ddn.ValueDec>0 ";
//    }
//    
//    
     if(sTime&&eTime){
    	 sql="SELECT "+
    	    " prdmkordmain.ProductID,"+
    	    " prdmkordmain.MKOrdNO,"+
    	    " stkborrowsub.ProdName,"+
    	    " stkborrowsub.Price,"+
    	    " stkborrowsub.SQuantity,"+
    	    " stkborrowsub.BorrowDate,"+
    	    " stkreturnsub.Quantity,"+
    	    " stkreturnsub.ReturnDate"+
    	    " FROM"+
    	    " erpcatogory"+
    	    " INNER JOIN prdmkordmain ON prdmkordmain.ProductType = erpcatogory.catid"+
    	    " INNER JOIN stkborrowsub ON stkborrowsub.ProdID = prdmkordmain.ProductID"+
    	    " INNER JOIN stkreturnsub ON stkreturnsub.ProdID = prdmkordmain.ProductID"+
    	    " WHERE erpcatogory.catid = ？ " ;
//    	    "AND stkreturnsub.ReturnDate BETWEEN ？ AND  ？"; 

    	
    	 
     }else{
    	 
    	 sql="SELECT "+
 	    " prdmkordmain.ProductID,"+
	    " prdmkordmain.MKOrdNO,"+
	    " stkborrowsub.ProdName,"+
	    " stkborrowsub.Price,"+
	    " stkborrowsub.SQuantity,"+
	    " stkborrowsub.BorrowDate,"+
	    " stkreturnsub.Quantity,"+
	    " stkreturnsub.ReturnDate"+
	    " FROM"+
	    " erpcatogory"+
	    " INNER JOIN prdmkordmain ON prdmkordmain.ProductType = erpcatogory.catid"+
	    " INNER JOIN stkborrowsub ON stkborrowsub.ProdID = prdmkordmain.ProductID"+
	    " INNER JOIN stkreturnsub ON stkreturnsub.ProdID = prdmkordmain.ProductID";
//    	" WHERE erpcatogory.catid = ？ " ;
    		 
    		 
//    		 "SELECT"+" "
// 	    "prdmkordmain.ProductID,"+
// 	    "prdmkordmain.MKOrdNO,"+
// 	    "stkborrowsub.ProdName,"+
// 	    "stkborrowsub.Price,"+
// 	    "stkborrowsub.SQuantity,"+
// 	    "stkborrowsub.BorrowDate,"+
// 	    "stkreturnsub.Quantity,"+
// 	    "stkreturnsub.ReturnDate"+
// 	    "FROM"+
// 	    "erpcatogory"+
// 	    "INNER JOIN prdmkordmain ON prdmkordmain.ProductType = erpcatogory.catid"+
// 	    "INNER JOIN stkborrowsub ON stkborrowsub.ProdID = prdmkordmain.ProductID"+
// 	    "INNER JOIN stkreturnsub ON stkreturnsub.ProdID = prdmkordmain.ProductID";
// 	    "WHERE erpcatogory.catid = ？ AND stkborrowsub.BorrowDate BETWEEN ？ AND  ？";
    	 
     }
     
    var async=require("async");
    
    
    yjDBService.exec({
        sql : sql,
        parameters : params,
        rowsAsArray : true,
        
        
        success : function(r) {
            var data=yjDB.dataSet2ObjectList(r.meta,r.rows);
            var result=[];
            
            
            var resulttest={"code":0,"msg":"","count":30,"data":[{"id":10000,"username":"user-0","sex":"女","city":"城市-0","sign":"签名-0","experience":255,"logins":24,"wealth":82830700,"classify":"作家","score":57},{"id":10001,"username":"user-1","sex":"男","city":"城市-1","sign":"签名-1","experience":884,"logins":58,"wealth":64928690,"classify":"词人","score":27},{"id":10002,"username":"user-2","sex":"女","city":"城市-2","sign":"签名-2","experience":650,"logins":77,"wealth":6298078,"classify":"酱油","score":31},{"id":10003,"username":"user-3","sex":"女","city":"城市-3","sign":"签名-3","experience":362,"logins":157,"wealth":37117017,"classify":"诗人","score":68},{"id":10004,"username":"user-4","sex":"男","city":"城市-4","sign":"签名-4","experience":807,"logins":51,"wealth":76263262,"classify":"作家","score":6},{"id":10005,"username":"user-5","sex":"女","city":"城市-5","sign":"签名-5","experience":173,"logins":68,"wealth":60344147,"classify":"作家","score":87},{"id":10006,"username":"user-6","sex":"女","city":"城市-6","sign":"签名-6","experience":982,"logins":37,"wealth":57768166,"classify":"作家","score":34},{"id":10007,"username":"user-7","sex":"男","city":"城市-7","sign":"签名-7","experience":727,"logins":150,"wealth":82030578,"classify":"作家","score":28},{"id":10008,"username":"user-8","sex":"男","city":"城市-8","sign":"签名-8","experience":951,"logins":133,"wealth":16503371,"classify":"词人","score":14},{"id":10009,"username":"user-9","sex":"女","city":"城市-9","sign":"签名-9","experience":484,"logins":25,"wealth":86801934,"classify":"词人","score":75},{"id":10010,"username":"user-10","sex":"女","city":"城市-10","sign":"签名-10","experience":1016,"logins":182,"wealth":71294671,"classify":"诗人","score":34},{"id":10011,"username":"user-11","sex":"女","city":"城市-11","sign":"签名-11","experience":492,"logins":107,"wealth":8062783,"classify":"诗人","score":6},{"id":10012,"username":"user-12","sex":"女","city":"城市-12","sign":"签名-12","experience":106,"logins":176,"wealth":42622704,"classify":"词人","score":54},{"id":10013,"username":"user-13","sex":"男","city":"城市-13","sign":"签名-13","experience":1047,"logins":94,"wealth":59508583,"classify":"诗人","score":63},{"id":10014,"username":"user-14","sex":"男","city":"城市-14","sign":"签名-14","experience":873,"logins":116,"wealth":72549912,"classify":"词人","score":8},{"id":10015,"username":"user-15","sex":"女","city":"城市-15","sign":"签名-15","experience":1068,"logins":27,"wealth":52737025,"classify":"作家","score":28},{"id":10016,"username":"user-16","sex":"女","city":"城市-16","sign":"签名-16","experience":862,"logins":168,"wealth":37069775,"classify":"酱油","score":86},{"id":10017,"username":"user-17","sex":"女","city":"城市-17","sign":"签名-17","experience":1060,"logins":187,"wealth":66099525,"classify":"作家","score":69},{"id":10018,"username":"user-18","sex":"女","city":"城市-18","sign":"签名-18","experience":866,"logins":88,"wealth":81722326,"classify":"词人","score":74},{"id":10019,"username":"user-19","sex":"女","city":"城市-19","sign":"签名-19","experience":682,"logins":106,"wealth":68647362,"classify":"词人","score":51},{"id":10020,"username":"user-20","sex":"男","city":"城市-20","sign":"签名-20","experience":770,"logins":24,"wealth":92420248,"classify":"诗人","score":87},{"id":10021,"username":"user-21","sex":"男","city":"城市-21","sign":"签名-21","experience":184,"logins":131,"wealth":71566045,"classify":"词人","score":99},{"id":10022,"username":"user-22","sex":"男","city":"城市-22","sign":"签名-22","experience":739,"logins":152,"wealth":60907929,"classify":"作家","score":18},{"id":10023,"username":"user-23","sex":"女","city":"城市-23","sign":"签名-23","experience":127,"logins":82,"wealth":14765943,"classify":"作家","score":30},{"id":10024,"username":"user-24","sex":"女","city":"城市-24","sign":"签名-24","experience":212,"logins":133,"wealth":59011052,"classify":"词人","score":76},{"id":10025,"username":"user-25","sex":"女","city":"城市-25","sign":"签名-25","experience":938,"logins":182,"wealth":91183097,"classify":"作家","score":69},{"id":10026,"username":"user-26","sex":"男","city":"城市-26","sign":"签名-26","experience":978,"logins":7,"wealth":48008413,"classify":"作家","score":65},{"id":10027,"username":"user-27","sex":"女","city":"城市-27","sign":"签名-27","experience":371,"logins":44,"wealth":64419691,"classify":"诗人","score":60},{"id":10028,"username":"user-28","sex":"女","city":"城市-28","sign":"签名-28","experience":977,"logins":21,"wealth":75935022,"classify":"作家","score":37},{"id":10029,"username":"user-29","sex":"男","city":"城市-29","sign":"签名-29","experience":647,"logins":107,"wealth":97450636,"classify":"酱油","score":27}]};
            var count=0;
            
            
            async.whilst(//whilst
                function() { return count < data.length; },//循环条件s
                
                
//                function(callback) {
                  function(callback) {
//                    var binaryData=parseInt(data[count].ValueDec,10).toString(2);
                    
//                    getBearDetaInfo(data[count].ProductID,data[count].CatchTime,callback);
                    getBearDetaInfo(data[count].ProductID,callback);
                    count++;
                    
                },//循环体
                
                
                function (err, n) {
                	console.log("hello"+"数据回传成功"+params);
                	
                	 Rresult={
                		"code": 0,
                		"msg": "",
                		"count": 1000,
                		"data": result
                	}
                	
                	
//                	console.log(Rresult);
                	
                    sender.success(JSON.stringify(resulttest));
                    
                }                
                
            );//whilst
            
            
            
            
//            function getBearDetaInfo(WarningAID,bitFlags,time,callback){
            	 function getBearDetaInfo(ProductID,callback){
            	
//                if (lcid==1033){
//                    var sql=" select distinct   wr2.WarningOIDParent,  wr2.WarningName,wr2.WarningRulesOID,? as CatchTime "
//                       +" from WarningRules wr1 ,WarningRules wr2 ,DDWarningRules ddwr "
//                       +" where wr1.WarningAID=? and wr2.WarningOIDParent=wr1.WarningOID "
//                       +"  and  wr2.WarningRulesOID in "+bitFlags+"";
//        
//                }else{
//                    var sql=" select  distinct  wr2.WarningOIDParent,  ddwr.DisplayValue as WarningName,wr2.WarningRulesOID,? as CatchTime "
//                       +" from WarningRules wr1 ,WarningRules wr2 ,DDWarningRules ddwr "
//                       +" where wr1.WarningAID=?  and ddwr.LCID=? and wr2.WarningOIDParent=wr1.WarningOID "
//                       +" and wr2.WarningName=ddwr.DDKey and  wr2.WarningRulesOID in "+bitFlags+"";
//                }
                var  sql="SELECT "+
        	    " prdmkordmain.ProductID,"+
        	    " prdmkordmain.MKOrdNO,"+
        	    " stkborrowsub.ProdName,"+
        	    " stkborrowsub.Price,"+
        	    " stkborrowsub.SQuantity,"+
        	    " stkborrowsub.BorrowDate,"+
        	    " stkreturnsub.Quantity,"+
        	    " stkreturnsub.ReturnDate"+
        	    " FROM"+
        	    " erpcatogory"+
        	    " INNER JOIN prdmkordmain ON prdmkordmain.ProductType = erpcatogory.catid"+
        	    " INNER JOIN stkborrowsub ON stkborrowsub.ProdID = prdmkordmain.ProductID"+
        	    " INNER JOIN stkreturnsub ON stkreturnsub.ProdID = prdmkordmain.ProductID"+
        	    " WHERE prdmkordmain.ProductID=? AND prdmkordmain.ProductType=? " ;
//        	    " AND stkreturnsub.ReturnDate BETWEEN ？ AND  ？";
                	
                	
//                	"SELECT"+" "
//        	    "prdmkordmain.ProductID,"+
//        	    "prdmkordmain.MKOrdNO,"+
//        	    "stkborrowsub.ProdName,"+
//        	    "stkborrowsub.Price,"+
//        	    "stkborrowsub.SQuantity,"+
//        	    "stkborrowsub.BorrowDate,"+
//        	    "stkreturnsub.Quantity,"+
//        	    "stkreturnsub.ReturnDate"+
//        	    "FROM"+
//        	    "erpcatogory"+
//        	    "INNER JOIN prdmkordmain ON prdmkordmain.ProductType = erpcatogory.catid"+
//        	    "INNER JOIN stkborrowsub ON stkborrowsub.ProdID = prdmkordmain.ProductID"+
//        	    "INNER JOIN stkreturnsub ON stkreturnsub.ProdID = prdmkordmain.ProductID";
//        	    "WHERE erpcatogory.catid = ？ AND stkborrowsub.BorrowDate BETWEEN ？ AND  ？";
                
                
                
                yjDBService.exec({
                    sql:sql,
//                    parameters:[time,WarningAID,lcid],
                    parameters:[ProductID,catid],
                    
                    rowsAsArray:true,
                    success:function(r1){
//                    	console.log("内循环"+params);
                         var data1=yjDB.dataSet2ObjectList(r1.meta,r1.rows);
                         for(var i=0;i<data1.length;i++){
//                            console.log(data1[i]);
                            result.push(data1[i]);
//                            console.log("6666666666",sql);
                         }
                         callback(null, count);
                    
                    },
                    error:function(err){
                        callback(null, count);
                    }
                });          
                
            }
             
            
        },
        
        
        error : sender.error
    });

    
    
} 