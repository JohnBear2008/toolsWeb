module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
  
 	var PartsYear = sender.req.query.PartsYear; 
 	var PartsRule = sender.req.query.PartsRule; 
     var BILLID = sender.req.query.BILLID; 
     var PartsCode = sender.req.query.PartsCode; 
     var Auditor=sender.req.query.sessionName; 
     var Opinion=sender.req.query.Opinion; 
     let now = new Date();
     var PartsLimitDate = now.Format("yyyy-MM-dd");
    console.log('报废驳回 '+PartsYear," 花开 ", PartsRule ," 花谢 ", PartsCode," 这街 ", Opinion ); 
  
    let SQLUPT ="Update `auto_parts` set  Parts_Status ='1' , Reason=''  where Parts_Year=? and Parts_Rule=? and Parts_Code=?  " ;
    console.log("SQLUPT:"+SQLUPT);
    let SQLABS ="Update `auto_rec_abso` set  Parts_Status ='2' , Parts_Limit_Date = '"+PartsLimitDate+"' , Auditor= ? , Opinion= ?   where Parts_Year=? and Parts_Rule=? and Parts_Code=?  " ;
    console.log("SQLABS:"+SQLABS);
 
    yjDBService.exec({
        sql : SQLUPT,
        parameters : [ PartsYear, PartsRule , PartsCode ],
        rowsAsArray : true,
        success : function(result) {
//            var data=yjDB.dataSet2ObjectList(result.meta,result.rows);
                yjDBService.exec({
                    sql : SQLABS,
                    parameters : [ Auditor , Opinion , PartsYear, PartsRule , PartsCode ],
                    rowsAsArray : true,
                    success : function(result) {
                        var retcode={"status":"OK","billid":BILLID,"partscode":PartsCode};
                        sender.success(retcode);
                        console.log("分手",result)
                    },
                    error : sender.error
                });
        }, 
        error : sender.error
    });
    
}