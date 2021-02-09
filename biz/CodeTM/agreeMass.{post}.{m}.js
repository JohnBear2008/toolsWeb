module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
    var PartsCode='B1-19A-12345'; 
	var queryYear = sender.req.query.PartsYear; 
	var PartsYearBF = "A"; 
 	var queryRule = sender.req.query.PartsRule; 
 	var queryClass = sender.req.query.PartsClass; 
    var queryStatus=sender.req.query.PartsStatus;
    var querySupplyID=sender.req.query.SupplyID;
 	let queryBILLID = sender.req.query.BILLID; 
    let queryPAGECNT = sender.req.query.PAGECNT; 
    var PAGECNT = parseInt(queryPAGECNT);
    console.log("笔笔笔 ", PAGECNT ); 
    for(var i=0; i<PAGECNT; i++){  
        let PartsYear =queryYear[i];
        console.log("年度 ", JSON.stringify(PartsYear) ); 
        let PartsRule =queryRule[i];
        console.log("版地 ", JSON.stringify(PartsRule) ); 
        let PartsClass =queryClass[i];
        console.log("类别 ", JSON.stringify(PartsClass) ); 
        let BILLID =queryBILLID[i];
        console.log("普度 ", JSON.stringify(BILLID) ); 
        let SupplyID=querySupplyID[i];
        console.log("客户 ", JSON.stringify(SupplyID) ); 
        let PartsStatus=queryStatus[i];
        console.log("状态 ", JSON.stringify(PartsStatus) ); 
        if(PartsYear=="2019"){
            PartsYearBF ="A";
        }else if(PartsYear=="2020"){
            PartsYearBF ="B";
        }else{
            PartsYearBF ="C";
        }
        if(PartsStatus=="3")
        {
            console.log('打野修A  '+PartsStatus  ); 
            
            PastHandleParts(BILLID ,PartsrowCode);

        } else{
            console.log('打野新B  '+PartsStatus  ); 
           
            HandleParts(PartsYear, PartsRule ,PartsClass, SupplyID , BILLID , PartsCode, i );

        }
        
   }
    function HandleParts(  PartsYear, PartsRule ,PartsClass, SupplyID , sBILLID , srowCode , magic ){// BILLID , PartsCode,  PID
        var PID='000001';
        var PartsYearBF='';

        console.log("批量处理:",sBILLID,"  @@ ",magic," ##  "); 
        let SQLFindPID= "select max(PID) as PID from `auto_parts` where Parts_Year=? and Parts_Rule =? and Parts_Class=? "; 

        let SQLclear="delete from  `auto_parts` where   Parts_Code= ?  " ;

        let SQLDelete="delete from `auto_rec_parts` where  BILL_ID=?  " ;
            // console.log("SQLDelete:"+SQLDelete);
            if(PartsYear=="2019"){
                PartsYearBF ="A";
            }else if(PartsYear=="2020"){
                PartsYearBF ="B";
            }else{
                PartsYearBF ="C";
            }
        yjDBService.exec({
            sql : SQLFindPID,
            parameters : [  PartsYear, PartsRule ,PartsClass ],
            rowsAsArray : true,
            success : function(r) {
                var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                var temp =   data[0].PID; 
                if(temp!=null){
                    var tempA = parseInt(temp)+1+magic;                    
                    console.log("头等", tempA);
                    var tempATxt = '';
                    if(tempA<10){
                        tempATxt = '00000'+tempA;
                    }else  if(tempA<100){
                        tempATxt = '0000'+tempA;
                    }else  if(tempA<1000){
                        tempATxt = '000'+tempA;
                    }else  if(tempA<10000){
                        tempATxt = '00'+tempA;
                    }else  if(tempA<100000){
                        tempATxt = '0'+tempA;
                    }else  {
                        tempATxt = ''+tempA;
                    }  
                        PID =tempATxt;
                        PartsCode=PartsYearBF+PartsClass+"-"+PartsRule+PID+"-"+SupplyID  ;
                        console.log("笔数", i , "存在", PartsCode,"序列号 ",PID);
                }else{
                        var tempA = 1+magic;  
                        console.log("商务", tempA);
                        var tempATxt = '00000'+tempA;
                        PID =tempATxt;
                        PartsCode=PartsYearBF+PartsClass+"-"+PartsRule+PID+"-"+SupplyID ;
                        console.log("笔数", i , "不存", PartsCode,"序列号 ",PID);
                }
                let SQLInsert= "INSERT INTO `auto_parts` (  `BILL_ID`, `Parts_Year`, `Parts_Rule`, `Parts_Class`, `Parts_Chi`,`Parts_Apply_Date`, `Parts_Limit_Date`, `Parts_Name`, `Parts_status`, `Staff`, `Property`, `PID`, `Parts_Code`, `Supply_ID`, `Parts_Old_Code`  ,   `Parts_Prop1`,  `Parts_Prop2`, `Parts_Prop3`, `Parts_Prop4`, `Parts_Prop5`,`Parts_Prop6`, `Parts_Prop7`, `Parts_Prop8`, `Parts_Prop9`, `Parts_Prop10`, "+
                " `Parts_Prop11`, `Parts_Prop12`, `Parts_Prop13`, `Parts_Prop14`, `Parts_Prop15`, `Parts_Prop16`, `Parts_Prop17`, `Parts_Prop18`, `Parts_Prop19`, `Parts_Prop20` )"+
                   "select   `BILL_ID`, `Parts_Year`, `Parts_Rule`, `Parts_Class`, `Parts_Chi`,`Parts_Apply_Date`, `Parts_Limit_Date`, `Parts_Name`, '1' , `Staff`, `Property`, '"+PID+"','"+PartsCode+"', `Supply_ID` , `Parts_Old_Code`  ,   `Parts_Prop1`,  `Parts_Prop2`, `Parts_Prop3`, `Parts_Prop4`, `Parts_Prop5`,`Parts_Prop6`, `Parts_Prop7`, `Parts_Prop8`, `Parts_Prop9`, `Parts_Prop10`, "+
                   " `Parts_Prop11`, `Parts_Prop12`, `Parts_Prop13`, `Parts_Prop14`, `Parts_Prop15`, `Parts_Prop16`, `Parts_Prop17`, `Parts_Prop18`, `Parts_Prop19`, `Parts_Prop20`  from `auto_rec_parts`"+
                   " where   BILL_ID='"+sBILLID+"'  ";	//and   Parts_Code='"+srowCode+"'  parts_code是没有意义的
       
            // yjDBService.exec({
    	    //     sql : SQLclear,
    	    //     parameters : [  srowCode ],
			//     rowsAsArray : true,
			//     success : function(result0) {	 	    
                    yjDBService.exec({
                        sql : SQLInsert,
                        parameters : [  sBILLID  ],
                        rowsAsArray : true,
                        success : function(result1) {
                        yjDBService.exec({
                            sql : SQLDelete,
                            parameters : [  sBILLID ],
                            rowsAsArray : true,
                            success : function(result2) {
                                var retcode={"status":"OK","partscode":PartsCode};
                                sender.success(retcode);
                                console.log("钰琪",retcode);
                            },
                            error : sender.error
                        });
                    },
                        error : sender.error
                    });
            //     },
            //     error : sender.error
            // });
        },
        error : sender.error
    });    


}
   
    function PastHandleParts(srowbill ,srowCode){
        let SQLclear="delete from  `auto_parts` where   Parts_Code= ?  and Parts_Year='2020' " ;
        console.log("思我故乡SQLclear:"+SQLclear+"码号" +srowCode);
    
        let SQLInsert= "INSERT INTO `auto_parts` ( `BILL_ID`, `Parts_Year`, `Parts_Rule`, `Parts_Class`, `Parts_Chi`, `Parts_Apply_Date`, `Parts_Limit_Date`, `Parts_Name`, `Parts_status`, `Staff`, `Property`, `PID`, `Parts_Code`, `Supply_ID`, `Parts_Old_Code` ,   `Parts_Prop1`,  `Parts_Prop2`, `Parts_Prop3`, `Parts_Prop4`, `Parts_Prop5`,`Parts_Prop6`, `Parts_Prop7`, `Parts_Prop8`, `Parts_Prop9`, `Parts_Prop10`, "+
        " `Parts_Prop11`, `Parts_Prop12`, `Parts_Prop13`, `Parts_Prop14`, `Parts_Prop15`, `Parts_Prop16`, `Parts_Prop17`, `Parts_Prop18`, `Parts_Prop19`, `Parts_Prop20` )"+
           "select   `BILL_ID`, `Parts_Year`, `Parts_Rule`, `Parts_Class`,  `Parts_Chi`,  `Parts_Apply_Date`, `Parts_Limit_Date`, `Parts_Name`, '1' , `Staff`, `Property`, `PID` ,'"+srowCode+"', `Supply_ID` , `Parts_Old_Code` , "+
           " `Parts_Prop1`,  `Parts_Prop2`, `Parts_Prop3`, `Parts_Prop4`, `Parts_Prop5`,`Parts_Prop6`, `Parts_Prop7`, `Parts_Prop8`, `Parts_Prop9`, `Parts_Prop10`, `Parts_Prop11`, `Parts_Prop12`, `Parts_Prop13`, `Parts_Prop14`, `Parts_Prop15`, `Parts_Prop16`, `Parts_Prop17`, `Parts_Prop18`, `Parts_Prop19`, `Parts_Prop20` from `auto_rec_parts`"+
           " where   BILL_ID='"+srowbill+"'  ";
        //    console.log("趙露思:"+SQLInsert);  	
           
         console.log('鸭杀    '+ PartsRule +' 类 '+ PartsClass+ ' 码 '+ srowCode ); 
    
           let SQLrecUpt="delete from  `auto_rec_parts`  where    Parts_Code=?  " ;
           console.log("SQLrecUpt:"+SQLrecUpt);
        
                   yjDBService.exec({
                   sql : SQLclear,
                   parameters : [  srowCode ],
                   rowsAsArray : true,
                   success : function(result) {
                    console.log("一线");
                    yjDBService.exec({
                        sql : SQLInsert,
                        parameters : [srowbill ],
                        rowsAsArray : true,
                        success : function(result) {
                            console.log("二线");
                            yjDBService.exec({
                                sql : SQLrecUpt,
                                parameters : [   srowCode ],
                                rowsAsArray : true,
                                success : function(result2) {
                                    var retcode={"status":"OK","partscode":PartsCode};
                                    sender.success(retcode);
                                    console.log("钰三线",retcode);
                                },
                                error : sender.error
                            });
                        },
                        error : sender.error
                      });
                  },
                   error : sender.error
                 }); 
     }
}    