module.exports = function(sender) {

    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
    var async = require("async");
    var obj = sender.req.query;
    var param1=sender.req.query.pclass;  
    var selectProp=sender.req.query.pproperty; 
    var param2=sender.req.query.pproperty; 
	 var tokenA ="";   var ringA ="";
	 var tokenB ="";   var ringB ="";
	 var tokenC ="";   var ringC ="";
	 var tokenD ="";   var ringD ="";
	 var tokenE ="";   var ringE ="";
	 var tokenF ="";   var ringF =""; 
	 var tokenG ="";   var ringG =""; 
	 var tokenH ="";   var ringH =""; 
	 var tokenI ="";   var ringI =""; 
	 var tokenJ ="";   var ringJ =""; 
	 var tokenK ="";   var ringK =""; 
	 var tokenL ="";   var ringL =""; 
	 var tokenM ="";   var ringM =""; 
	 var tokenO ="";   var ringO =""; 
	 var tokenP ="";   var ringP =""; 
	 var tokenQ ="";   var ringQ =""; 
    var data = selectProp;
	  let data_arr = data.split("-");
	  for (let inx = 0; inx < data_arr.length; inx++) {
		  tokenA=data_arr[0]; if(tokenA!=null){tokenA=tokenA.substring(1);}
		  tokenB=data_arr[1]; if(tokenB!=null){tokenB=tokenB.substring(1);}
		  tokenC=data_arr[2]; if(tokenC!=null){tokenC=tokenC.substring(1);}
		  tokenD=data_arr[3]; if(tokenD!=null){tokenD=tokenD.substring(1);}
		  tokenE=data_arr[4]; if(tokenE!=null){tokenE=tokenE.substring(1);}
		  tokenF=data_arr[5]; if(tokenF!=null){tokenF=tokenF.substring(1);} 
		  tokenG=data_arr[6]; if(tokenG!=null){tokenG=tokenG.substring(1);} 
		  tokenH=data_arr[7]; if(tokenH!=null){tokenH=tokenH.substring(1);} 
		  tokenI=data_arr[8]; if(tokenI!=null){tokenI=tokenI.substring(1);} 
		  tokenJ=data_arr[9]; if(tokenJ!=null){tokenJ=tokenJ.substring(1);} 
		  tokenK=data_arr[10];if(tokenK!=null){tokenK=tokenK.substring(1);}
		  tokenL=data_arr[11];if(tokenL!=null){tokenL=tokenL.substring(1);}
		  tokenM=data_arr[12];if(tokenM!=null){tokenM=tokenM.substring(1);}
		  tokenO=data_arr[13];if(tokenO!=null){tokenO=tokenO.substring(1);} 	
		  tokenP=data_arr[14];if(tokenP!=null){tokenP=tokenP.substring(1);} 
		  tokenQ=data_arr[15];if(tokenQ!=null){tokenQ=tokenQ.substring(1);} 

	  }
	  console.log( "非凡", tokenA, tokenB, tokenC, tokenD , tokenE);
	  console.log( "商业", tokenF, tokenG, tokenH, tokenI , tokenJ);
	  console.log( "新闻", tokenK, tokenL, tokenM, tokenO , tokenP, tokenQ);
    var sql_Page2A = " select * from auto_property where Parts_Rule=? and Parts_Class='A' and Parts_SEQ=?  "; 
    var sql_Page2B = " select * from auto_property where Parts_Rule=? and Parts_Class='B' and Parts_SEQ=?  "; 
    var sql_Page2C = " select * from auto_property where Parts_Rule=? and Parts_Class='C' and Parts_SEQ=?  "; 
    var sql_Page2D = " select * from auto_property where Parts_Rule=? and Parts_Class='D' and Parts_SEQ=?  "; 
    var sql_Page2E = " select * from auto_property where Parts_Rule=? and Parts_Class='E' and Parts_SEQ=?  "; 
    var sql_Page2F = " select * from auto_property where Parts_Rule=? and Parts_Class='F' and Parts_SEQ=?  "; 
    var sql_Page2G = " select * from auto_property where Parts_Rule=? and Parts_Class='G' and Parts_SEQ=?  "; 
    var sql_Page2H = " select * from auto_property where Parts_Rule=? and Parts_Class='H' and Parts_SEQ=?  "; 
    var sql_Page2I = " select * from auto_property where Parts_Rule=? and Parts_Class='I' and Parts_SEQ=?  "; 
    var sql_Page2J = " select * from auto_property where Parts_Rule=? and Parts_Class='J' and Parts_SEQ=?  "; 
    var sql_Page2K = " select * from auto_property where Parts_Rule=? and Parts_Class='K' and Parts_SEQ=?  "; 
    var sql_Page2L = " select * from auto_property where Parts_Rule=? and Parts_Class='L' and Parts_SEQ=?  "; 
    var sql_Page2M = " select * from auto_property where Parts_Rule=? and Parts_Class='M' and Parts_SEQ=?  "; 
    var sql_Page2O = " select * from auto_property where Parts_Rule=? and Parts_Class='O' and Parts_SEQ=?  "; 
    var sql_Page2P = " select * from auto_property where Parts_Rule=? and Parts_Class='P' and Parts_SEQ=?  "; 
    var sql_Page2Q = " select * from auto_property where Parts_Rule=? and Parts_Class='Q' and Parts_SEQ=?  ";     var dataArr=[]; 
    console.log("如来涨:" ,param1); 
   
 
    async.parallel([ funPage2A , funPage2B , funPage2C , funPage2D, funPage2E ,
                     funPage2F , funPage2G , funPage2H , funPage2I, funPage2J,
                     funPage2K , funPage2L , funPage2M , funPage2O, funPage2P, funPage2Q ], 
    	    function(err, result) {
    			if (err) {

    			} else {
    				 console.log("部門",JSON.stringify(result));
    	            let sub=[]; 
    	            sub[0] = 0,sub[1] = 0, sub[2] = 0,sub[3] = 0, sub[4] = 0,sub[5] = 0, sub[6] = 0, sub[7] = 0, sub[8] = 0, sub[9] = 0, sub[10] = 0;
       	         
    	                var obj={
    	                    "pclass":param1, 
                          "Name1":result[0].Parts_Desc, 
    	                    "Name2":result[1 ].Parts_Desc,  
    	                    "Name3":result[2 ].Parts_Desc,  
    	                    "Name4":result[3 ].Parts_Desc,  
    	                    "Name5":result[4 ].Parts_Desc,  
    	                    "Name6":result[5 ].Parts_Desc,  
    	                    "Name7":result[6 ].Parts_Desc, 
    	                    "Name8":result[7 ].Parts_Desc, 
    	                    "Name9":result[8 ].Parts_Desc, 
    	                    "Name10":result[9 ].Parts_Desc, 
    	                    "Name11":result[10].Parts_Desc, 
    	                    "Name12":result[11].Parts_Desc, 
    	                    "Name13":result[12].Parts_Desc, 
    	                    "Name14":result[13].Parts_Desc, 
    	                    "Name15":result[14].Parts_Desc, 
    	                    "Name16":result[15].Parts_Desc, 
    	                };
    	                dataArr.push(obj);    	            
    	            sender.success(obj);
    	            console.log("部总计",obj); 
    	        }
    	    });
    function funPage2A(cb){
        yjDBService.exec({
            sql : sql_Page2A,
            parameters : [param1,tokenA ], 
            rowsAsArray : true,
            rowsAsArray : true, 
            success : function(r) {
                var datas = []
                var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                var nultmp ='';
                for (var i = 0; i < data.length; i++) {
          	       var nultmp =  data[i].Parts_Desc ; 
               } 
                var temp = {
                  "Parts_Desc" : nultmp , 
                }
          	 console.log("A呆哥", nultmp);
             cb(null, temp);
            },
            error : sender.error
        })
    }
 
 
    function funPage2B(cb){
        yjDBService.exec({
                    sql : sql_Page2B,
                    parameters : [param1,tokenB ], 
                    rowsAsArray : true,
                    rowsAsArray : true, 
                    success : function(r) {
                        var datas = []
                        var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                        var nultmp ='';
                        for (var i = 0; i < data.length; i++) {
                  	       var nultmp =  data[i].Parts_Desc ; 
                       } 
		                var temp = {
		                  "Parts_Desc" : nultmp , 
		                }
	              	 console.log("B呆哥", nultmp);
                     cb(null, temp);
                    },
                    error : sender.error
                })
    }
    function funPage2C(cb){
        yjDBService.exec({
                    sql : sql_Page2C,
                    parameters : [param1,tokenC ], 
                    rowsAsArray : true,
                    rowsAsArray : true, 
                    success : function(r) {
                        var datas = []
                        var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                        var nultmp ='';
                        for (var i = 0; i < data.length; i++) {
                  	       var nultmp =  data[i].Parts_Desc ; 
                       } 
		                var temp = {
		                  "Parts_Desc" : nultmp , 
		                }
	              	 console.log("C呆哥", nultmp);
                     cb(null, temp);
                    },
                    error : sender.error
                })
    }
    function funPage2D(cb){
        yjDBService.exec({
                    sql : sql_Page2D,
                    parameters : [param1,tokenD ], 
                    rowsAsArray : true, 
                    success : function(r) {
                        var datas = []
                        var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                        var nultmp ='';
                        for (var i = 0; i < data.length; i++) {
                  	       var nultmp =  data[i].Parts_Desc ; 
                       } 
		                var temp = {
		                  "Parts_Desc" : nultmp , 
		                }
	              	 console.log("D呆哥", nultmp);
                     cb(null, temp);
                    },
                    error : sender.error
                })
    }
    function funPage2E(cb){
	        yjDBService.exec({
	            sql : sql_Page2E,
	            parameters : [param1,tokenE ], 
	            rowsAsArray : true,
	            success : function(r) {
	                var datas = []
	                var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
	                var nultmp ='';
	              for (var i = 0; i < data.length; i++) {
	          	       var nultmp =  data[i].Parts_Desc ; 
	               } 
	          	 var temp = {
	              "Parts_Desc" : nultmp , 
	            }
	          	 console.log("E呆哥", nultmp);
	            cb(null, temp);
	            },
	            error : sender.error
	        })
    }
    function funPage2F(cb){
        yjDBService.exec({
                    sql : sql_Page2F,
                    parameters : [param1,tokenF ], 
                    rowsAsArray : true,
                    success : function(r) {
                        var datas = []
                        var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                        var nultmp ='';
                      for (var i = 0; i < data.length; i++) {
                  	       var nultmp =  data[i].Parts_Desc ; 
                       } 
	              	 var temp = {
	                  "Parts_Desc" : nultmp , 
	                }
	              	 console.log("F呆哥", nultmp);
                    cb(null, temp);
                    },
                    error : sender.error
                })
    }
    function funPage2G(cb){
        yjDBService.exec({
                    sql : sql_Page2G,
                    parameters : [param1,tokenG ], 
                    rowsAsArray : true,
                    success : function(r) {
                        var datas = []
                        var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                        var nultmp ='';
                      for (var i = 0; i < data.length; i++) {
                  	       var nultmp =  data[i].Parts_Desc ; 
                       } 
	              	 var temp = {
	                  "Parts_Desc" : nultmp , 
	                }
	              	 console.log("G呆哥", nultmp);
                    cb(null, temp);
                    },
                    error : sender.error
                })
    }
    function funPage2H(cb){
        yjDBService.exec({
                    sql : sql_Page2H,
                    parameters : [param1,tokenH ], 
                    rowsAsArray : true, 
                    success : function(r) {
                        var datas = []
                        var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                        var nultmp ='';
                        for (var i = 0; i < data.length; i++) {
                  	       var nultmp =  data[i].Parts_Desc ; 
                       } 
		                var temp = {
		                  "Parts_Desc" : nultmp , 
		                }
	              	 console.log("F呆哥", nultmp);
                     cb(null, temp);
                    },
                    error : sender.error
                })
    }
    function funPage2I(cb){
      yjDBService.exec({
                  sql : sql_Page2I,
                  parameters : [param1,tokenI ], 
                  rowsAsArray : true, 
                  success : function(r) {
                      var datas = []
                      var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                      var nultmp ='';
                      for (var i = 0; i < data.length; i++) {
                         var nultmp =  data[i].Parts_Desc ; 
                     } 
                  var temp = {
                    "Parts_Desc" : nultmp , 
                  }
                 console.log("F呆哥", nultmp);
                   cb(null, temp);
                  },
                  error : sender.error
              })
  }
  function funPage2J(cb){
    yjDBService.exec({
                sql : sql_Page2J,
                parameters : [param1,tokenJ ], 
                rowsAsArray : true, 
                success : function(r) {
                    var datas = []
                    var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                    var nultmp ='';
                    for (var i = 0; i < data.length; i++) {
                       var nultmp =  data[i].Parts_Desc ; 
                   } 
                var temp = {
                  "Parts_Desc" : nultmp , 
                }
               console.log("F呆哥", nultmp);
                 cb(null, temp);
                },
                error : sender.error
            })
}
function funPage2K(cb){
  yjDBService.exec({
              sql : sql_Page2K,
              parameters : [param1,tokenK ], 
              rowsAsArray : true, 
              success : function(r) {
                  var datas = []
                  var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                  var nultmp ='';
                  for (var i = 0; i < data.length; i++) {
                     var nultmp =  data[i].Parts_Desc ; 
                 } 
              var temp = {
                "Parts_Desc" : nultmp , 
              }
             console.log("F呆哥", nultmp);
               cb(null, temp);
              },
              error : sender.error
          })
}
function funPage2L(cb){
  yjDBService.exec({
              sql : sql_Page2L,
              parameters : [param1,tokenL ], 
              rowsAsArray : true, 
              success : function(r) {
                  var datas = []
                  var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                  var nultmp ='';
                  for (var i = 0; i < data.length; i++) {
                     var nultmp =  data[i].Parts_Desc ; 
                 } 
              var temp = {
                "Parts_Desc" : nultmp , 
              }
             console.log("F呆哥", nultmp);
               cb(null, temp);
              },
              error : sender.error
          })
}
function funPage2M(cb){
  yjDBService.exec({
              sql : sql_Page2M,
              parameters : [param1,tokenM ], 
              rowsAsArray : true, 
              success : function(r) {
                  var datas = []
                  var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                  var nultmp ='';
                  for (var i = 0; i < data.length; i++) {
                     var nultmp =  data[i].Parts_Desc ; 
                 } 
              var temp = {
                "Parts_Desc" : nultmp , 
              }
             console.log("F呆哥", nultmp);
               cb(null, temp);
              },
              error : sender.error
          })
}
function funPage2O(cb){
  yjDBService.exec({
              sql : sql_Page2O,
              parameters : [param1,tokenO ], 
              rowsAsArray : true, 
              success : function(r) {
                  var datas = []
                  var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                  var nultmp ='';
                  for (var i = 0; i < data.length; i++) {
                     var nultmp =  data[i].Parts_Desc ; 
                 } 
              var temp = {
                "Parts_Desc" : nultmp , 
              }
             console.log("F呆哥", nultmp);
               cb(null, temp);
              },
              error : sender.error
          })
}
function funPage2P(cb){
  yjDBService.exec({
              sql : sql_Page2P,
              parameters : [param1,tokenP ], 
              rowsAsArray : true, 
              success : function(r) {
                  var datas = []
                  var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                  var nultmp ='';
                  for (var i = 0; i < data.length; i++) {
                     var nultmp =  data[i].Parts_Desc ; 
                 } 
              var temp = {
                "Parts_Desc" : nultmp , 
              }
             console.log("F呆哥", nultmp);
               cb(null, temp);
              },
              error : sender.error
          })
}
function funPage2Q(cb){
  yjDBService.exec({
              sql : sql_Page2Q,
              parameters : [param1,tokenQ ], 
              rowsAsArray : true, 
              success : function(r) {
                  var datas = []
                  var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                  var nultmp ='';
                  for (var i = 0; i < data.length; i++) {
                     var nultmp =  data[i].Parts_Desc ; 
                 } 
              var temp = {
                "Parts_Desc" : nultmp , 
              }
             console.log("F呆哥", nultmp);
               cb(null, temp);
              },
              error : sender.error
          })
}
 
 

};