module.exports = function(sender) {

    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
    var async = require("async");
    var obj = sender.req.query;
    var param1=sender.req.query.pclass;  
 
 
 
    var sql_Page2A = " select * from auto_property where Parts_Rule=? and Parts_Class='A'   "; 
    var sql_Page2B = " select * from auto_property where Parts_Rule=? and Parts_Class='B'   "; 
    var sql_Page2C = " select * from auto_property where Parts_Rule=? and Parts_Class='C'   "; 
    var sql_Page2D = " select * from auto_property where Parts_Rule=? and Parts_Class='D'   "; 
    var sql_Page2E = " select * from auto_property where Parts_Rule=? and Parts_Class='E'   "; 
    var sql_Page2F = " select * from auto_property where Parts_Rule=? and Parts_Class='F'   "; 
    var sql_Page2G = " select * from auto_property where Parts_Rule=? and Parts_Class='G'   "; 
    var sql_Page2H = " select * from auto_property where Parts_Rule=? and Parts_Class='H'   "; 
    var sql_Page2I = " select * from auto_property where Parts_Rule=? and Parts_Class='I'   "; 
    var sql_Page2J = " select * from auto_property where Parts_Rule=? and Parts_Class='J'   "; 
    var sql_Page2K = " select * from auto_property where Parts_Rule=? and Parts_Class='K'   "; 
    var sql_Page2L = " select * from auto_property where Parts_Rule=? and Parts_Class='L'   "; 
    var sql_Page2M = " select * from auto_property where Parts_Rule=? and Parts_Class='M'   "; 
    var sql_Page2O = " select * from auto_property where Parts_Rule=? and Parts_Class='O'   "; 
    var sql_Page2P = " select * from auto_property where Parts_Rule=? and Parts_Class='P'   "; 
    var sql_Page2Q = " select * from auto_property where Parts_Rule=? and Parts_Class='Q'   "; 
    var sql_Page2R = " select * from auto_property where Parts_Rule=? and Parts_Class='R'   "; 
    var sql_Page2S = " select * from auto_property where Parts_Rule=? and Parts_Class='S'   "; 
    var dataArr=[]; 
//    console.log("如来涨:" ,param1); 
   
 
    async.parallel([ funPage2A, funPage2B , funPage2C , funPage2D , funPage2E , funPage2F , funPage2G  , funPage2H , funPage2I, funPage2J, funPage2K, funPage2L, funPage2M,  funPage2O,  funPage2P,  funPage2Q,  funPage2R,  funPage2S ], 
    	    function(err, result) {
    			if (err) {

    			} else {
//    				 console.log("协调",JSON.stringify(result));
 
    	            
    	            sender.success(result);
    	        }
    	    });
    function funPage2A(cb){
        yjDBService.exec({
            sql : sql_Page2A,
            parameters : [param1   ], 
            rowsAsArray : true,
            success : function(r) {
                var datas = []
                var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                for (var i = 0; i < data.length; i++) {
                    var temp = {
                        "Parts_Desc" : data[i].Parts_Desc , 
                    }
                    datas.push(temp)
                }
                cb(null, datas);
            },
            error : sender.error
        })
    }
 
 
    function funPage2B(cb){
    	yjDBService.exec({
            sql : sql_Page2B,
            parameters : [param1   ], 
            rowsAsArray : true,
            success : function(r) {
                var datas = []
                var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                for (var i = 0; i < data.length; i++) {
                    var temp = {
                        "Parts_Desc" : data[i].Parts_Desc , 
                    }
                    datas.push(temp)
                }
                cb(null, datas);
            },
            error : sender.error
        })
    }
    function funPage2C(cb){
    	yjDBService.exec({
            sql : sql_Page2C,
            parameters : [param1   ], 
            rowsAsArray : true,
            success : function(r) {
                var datas = []
                var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                for (var i = 0; i < data.length; i++) {
                    var temp = {
                        "Parts_Desc" : data[i].Parts_Desc , 
                    }
                    datas.push(temp)
                }
                cb(null, datas);
            },
            error : sender.error
        })
    }
    function funPage2D(cb){
    	yjDBService.exec({
            sql : sql_Page2D,
            parameters : [param1   ], 
            rowsAsArray : true,
            success : function(r) {
                var datas = []
                var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                for (var i = 0; i < data.length; i++) {
                    var temp = {
                        "Parts_Desc" : data[i].Parts_Desc , 
                    }
                    datas.push(temp)
                }
                cb(null, datas);
            },
            error : sender.error
        })
    }
    function funPage2E(cb){
    	yjDBService.exec({
            sql : sql_Page2E,
            parameters : [param1   ], 
            rowsAsArray : true,
            success : function(r) {
                var datas = []
                var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                for (var i = 0; i < data.length; i++) {
                    var temp = {
                        "Parts_Desc" : data[i].Parts_Desc , 
                    }
                    datas.push(temp)
                }
                cb(null, datas);
            },
            error : sender.error
        })
    }
    function funPage2F(cb){
    	yjDBService.exec({
            sql : sql_Page2F,
            parameters : [param1   ], 
            rowsAsArray : true,
            success : function(r) {
                var datas = []
                var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                for (var i = 0; i < data.length; i++) {
                    var temp = {
                        "Parts_Desc" : data[i].Parts_Desc , 
                    }
                    datas.push(temp)
                }
                cb(null, datas);
            },
            error : sender.error
        })
    }
    function funPage2G(cb){
    	yjDBService.exec({
            sql : sql_Page2G,
            parameters : [param1   ], 
            rowsAsArray : true,
            success : function(r) {
                var datas = []
                var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                for (var i = 0; i < data.length; i++) {
                    var temp = {
                        "Parts_Desc" : data[i].Parts_Desc , 
                    }
                    datas.push(temp)
                }
                cb(null, datas);
            },
            error : sender.error
        })
    }
    function funPage2H(cb){
    	yjDBService.exec({
            sql : sql_Page2H,
            parameters : [param1   ], 
            rowsAsArray : true,
            success : function(r) {
                var datas = []
                var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
                for (var i = 0; i < data.length; i++) {
                    var temp = {
                        "Parts_Desc" : data[i].Parts_Desc , 
                    }
                    datas.push(temp)
                }
                cb(null, datas);
            },
            error : sender.error
        })
    }
    function funPage2I(cb){
    	yjDBService.exec({
    		sql : sql_Page2I,
    		parameters : [param1   ], 
    		rowsAsArray : true,
    		success : function(r) {
    			var datas = []
    			var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
    			for (var i = 0; i < data.length; i++) {
    				var temp = {
    						"Parts_Desc" : data[i].Parts_Desc , 
    				}
    				datas.push(temp)
    			}
    			cb(null, datas);
    		},
    		error : sender.error
    	})
    }
    function funPage2J(cb){
    	yjDBService.exec({
    		sql : sql_Page2J,
    		parameters : [param1   ], 
    		rowsAsArray : true,
    		success : function(r) {
    			var datas = []
    			var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
    			for (var i = 0; i < data.length; i++) {
    				var temp = {
    						"Parts_Desc" : data[i].Parts_Desc , 
    				}
    				datas.push(temp)
    			}
    			cb(null, datas);
    		},
    		error : sender.error
    	})
    }
    function funPage2K(cb){
    	yjDBService.exec({
    		sql : sql_Page2K,
    		parameters : [param1   ], 
    		rowsAsArray : true,
    		success : function(r) {
    			var datas = []
    			var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
    			for (var i = 0; i < data.length; i++) {
    				var temp = {
    						"Parts_Desc" : data[i].Parts_Desc , 
    				}
    				datas.push(temp)
    			}
    			cb(null, datas);
    		},
    		error : sender.error
    	})
    }
    function funPage2L(cb){
    	yjDBService.exec({
    		sql : sql_Page2L,
    		parameters : [param1   ], 
    		rowsAsArray : true,
    		success : function(r) {
    			var datas = []
    			var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
    			for (var i = 0; i < data.length; i++) {
    				var temp = {
    						"Parts_Desc" : data[i].Parts_Desc , 
    				}
    				datas.push(temp)
    			}
    			cb(null, datas);
    		},
    		error : sender.error
    	})
    }
    function funPage2M(cb){
    	yjDBService.exec({
    		sql : sql_Page2M,
    		parameters : [param1   ], 
    		rowsAsArray : true,
    		success : function(r) {
    			var datas = []
    			var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
    			for (var i = 0; i < data.length; i++) {
    				var temp = {
    						"Parts_Desc" : data[i].Parts_Desc , 
    				}
    				datas.push(temp)
    			}
    			cb(null, datas);
    		},
    		error : sender.error
    	})
    }
    
    function funPage2O(cb){
    	yjDBService.exec({
    		sql : sql_Page2O,
    		parameters : [param1   ], 
    		rowsAsArray : true,
    		success : function(r) {
    			var datas = []
    			var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
    			for (var i = 0; i < data.length; i++) {
    				var temp = {
    						"Parts_Desc" : data[i].Parts_Desc , 
    				}
    				datas.push(temp)
    			}
    			cb(null, datas);
    		},
    		error : sender.error
    	})
    }
    function funPage2P(cb){
    	yjDBService.exec({
    		sql : sql_Page2P,
    		parameters : [param1   ], 
    		rowsAsArray : true,
    		success : function(r) {
    			var datas = []
    			var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
    			for (var i = 0; i < data.length; i++) {
    				var temp = {
    						"Parts_Desc" : data[i].Parts_Desc , 
    				}
    				datas.push(temp)
    			}
    			cb(null, datas);
    		},
    		error : sender.error
    	})
    }
    function funPage2Q(cb){
    	yjDBService.exec({
    		sql : sql_Page2Q,
    		parameters : [param1   ], 
    		rowsAsArray : true,
    		success : function(r) {
    			var datas = []
    			var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
    			for (var i = 0; i < data.length; i++) {
    				var temp = {
    						"Parts_Desc" : data[i].Parts_Desc , 
    				}
    				datas.push(temp)
    			}
    			cb(null, datas);
    		},
    		error : sender.error
    	})
    }
    function funPage2R(cb){
    	yjDBService.exec({
    		sql : sql_Page2R,
    		parameters : [param1   ], 
    		rowsAsArray : true,
    		success : function(r) {
    			var datas = []
    			var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
    			for (var i = 0; i < data.length; i++) {
    				var temp = {
    						"Parts_Desc" : data[i].Parts_Desc , 
    				}
    				datas.push(temp)
    			}
    			cb(null, datas);
    		},
    		error : sender.error
    	})
    }
    function funPage2S(cb){
    	yjDBService.exec({
    		sql : sql_Page2S,
    		parameters : [param1   ], 
    		rowsAsArray : true,
    		success : function(r) {
    			var datas = []
    			var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
    			for (var i = 0; i < data.length; i++) {
    				var temp = {
    						"Parts_Desc" : data[i].Parts_Desc , 
    				}
    				datas.push(temp)
    			}
    			cb(null, datas);
    		},
    		error : sender.error
    	})
    }
//yjDBService.exec({
//    sql: SQLInsert,
//    parameters: [Load_code],
//    success:  function(result) {
// // console.log("result:"+JSON.stringify(result));
//    	sender.success(result);
//    },
//    error: {},
//});
 

};