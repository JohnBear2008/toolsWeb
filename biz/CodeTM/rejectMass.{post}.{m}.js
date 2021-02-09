module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
   
    
	var queryYear = sender.req.query.PartsYear;  
 	var queryRule = sender.req.query.PartsRule; 
 	var queryClass = sender.req.query.PartsClass; 
 	let queryBILLID = sender.req.query.BILLID; 
    let queryPAGECNT = sender.req.query.PAGECNT; 
    var PAGECNT = parseInt(queryPAGECNT);
    for(var i=0; i<PAGECNT; i++){ 
        let PartsYear =queryYear[i];
        console.log("年度 ", JSON.stringify(PartsYear) ); 
        let PartsRule =queryRule[i];
        console.log("版地 ", JSON.stringify(PartsRule) ); 
        let PartsClass =queryClass[i];
        console.log("类别 ", JSON.stringify(PartsClass) ); 
        let BILLID =queryBILLID[i];
        console.log("文好 ", JSON.stringify(BILLID) ); 
        if(BILLID!=null){
            HandleParts( BILLID   );
        }
         
   }
   
    function HandleParts( sBILLID  ){
       let SQL ="Update `auto_rec_parts` set  Parts_status ='2' where  BILL_ID=?  " ;
       console.log("批退sBILLID:"+sBILLID);        
     
        yjDBService.exec({
            sql : SQL,
            parameters : [  sBILLID ],
            rowsAsArray : true,
            success : function(result) {
    //            var data=yjDB.dataSet2ObjectList(result.meta,result.rows);
                var retcode={"status":"OK"};
                sender.success(retcode);
                console.log("批退",result)
            },
    //        success :sender.success,
            error : sender.error
        });
    }
   
    
}    