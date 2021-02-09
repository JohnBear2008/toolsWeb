//xlsPropHead
module.exports = function(sender) {
  var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
  var yjDB = global.yjRequire("yujiang.Foil").yjDB;
  
 var queryYear = sender.req.query.PartsYear;  
 var queryClass = sender.req.query.PartsClass;  
 console.log(" 煙霧 "+queryClass );  
 
  HandleParts(  queryClass  );
  
 function HandleParts( pclass  ){
  let SQL ="  select `FEATURE01`,`FEATURE02`, `FEATURE03`, `FEATURE04`, `FEATURE05`,`FEATURE06`, `FEATURE07`, `FEATURE08`, `FEATURE09`, `FEATURE10`, "+ 
  " `FEATURE11`, `FEATURE12`, `FEATURE13`, `FEATURE14`, `FEATURE15`, `FEATURE16`, `FEATURE17`, `FEATURE18`, `FEATURE19`, `FEATURE20`  from auto_feature a where a.Parts_Class=? and a.Parts_Year='2020' " ;
  console.log(" :类别 "+pclass );        
         yjDBService.exec({
         sql: SQL,
         parameters: [pclass],
         rowsAsArray: false, 
         success: function(result) {
          //  console.log("外送",JSON.stringify(result));
          let obj=[];
          if(result!=""&&result!="null"&&result!=undefined && result.length>0){
              obj={
              "pclass":pclass,
              "Value1":  (result[0].FEATURE01 =='NA' ? ('无') : result[0].FEATURE01 ),  
              "Value2":  (result[0].FEATURE02 =='NA' ? ('无') : result[0].FEATURE02 ), 
              "Value3":  (result[0].FEATURE03 =='NA' ? ('无') : result[0].FEATURE03 ), 
              "Value4":  (result[0].FEATURE04 =='NA' ? ('无') : result[0].FEATURE04 ), 
              "Value5":  (result[0].FEATURE05 =='NA' ? ('无') : result[0].FEATURE05 ), 
              "Value6":  (result[0].FEATURE06 =='NA' ? ('无') : result[0].FEATURE06 ), 
              "Value7":  (result[0].FEATURE07 =='NA' ? ('无') : result[0].FEATURE07 ), 
              "Value8":  (result[0].FEATURE08 =='NA' ? ('无') : result[0].FEATURE08 ), 
              "Value9":  (result[0].FEATURE09 =='NA' ? ('无') : result[0].FEATURE09 ), 
              "Value10": (result[0].FEATURE10 =='NA' ? ('无') : result[0].FEATURE10 ), 
              "Value11": (result[0].FEATURE11 =='NA' ? ('无') : result[0].FEATURE11 ), 
              "Value12": (result[0].FEATURE12 =='NA' ? ('无') : result[0].FEATURE12 ), 
              "Value13": (result[0].FEATURE13 =='NA' ? ('无') : result[0].FEATURE13 ), 
              "Value14": (result[0].FEATURE14 =='NA' ? ('无') : result[0].FEATURE14 ), 
              "Value15": (result[0].FEATURE15 =='NA' ? ('无') : result[0].FEATURE15 ), 
              "Value16": (result[0].FEATURE16 =='NA' ? ('无') : result[0].FEATURE16 ), 
              "Value17": (result[0].FEATURE17 =='NA' ? ('无') : result[0].FEATURE17 ), 
              "Value18": (result[0].FEATURE18 =='NA' ? ('无') : result[0].FEATURE18 ), 
              "Value19": (result[0].FEATURE19 =='NA' ? ('无') : result[0].FEATURE19 ), 
              "Value20": (result[0].FEATURE20 =='NA' ? ('无') : result[0].FEATURE20 ), 

             };
            
           }else{
              obj={
              "pclass":pclass,
              "Value1":  ( '属性01' ),  
              "Value2":  ( '属性02' ), 
              "Value3":  ( '属性03' ), 
              "Value4":  ( '属性04' ), 
              "Value5":  ( '属性05' ), 
              "Value6":  ( '属性06' ), 
              "Value7":  ( '属性07' ), 
              "Value8":  ( '属性08' ), 
              "Value9":  ( '属性09' ), 
              "Value10": ( '属性10' ), 
              "Value11": ( '属性11' ), 
              "Value12": ( '属性12' ), 
              "Value13": ( '属性13' ), 
              "Value14": ( '属性14' ), 
              "Value15": ( '属性15' ), 
              "Value16": ( '属性16' ), 
              "Value17": ( '属性17' ), 
              "Value18": ( '属性18' ), 
              "Value19": ( '属性19' ), 
              "Value20": ( '属性20' ), 
             };
           }
                  
               sender.success(obj);
              //  console.log("堂",obj);
         },
         error: sender.error
     });
}

  
}    