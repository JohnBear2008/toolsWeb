module.exports = function(sender) {

    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
    var async = require("async"); 
    var arrange = sender.req.query.arrange; 
    var PartsClass=sender.req.query.PartsClass;
    if(arrange =='currentSpec'){
	currentSpec(PartsClass);
    }
    if(arrange =='defaultSpec'){
	defaultSpec(PartsClass);
    }
    if(arrange =='currentCargo'){
	currentCargo(PartsClass);
    }
    if(arrange =='defaultCargo'){
	defaultCargo(PartsClass);
    }
    function currentCargo(PartsClass){
	var SQLqry = " select Design_Name from `auto_feature` where Parts_Class =?    ";  
	var dataArr=[]; 
    
	  yjDBService.exec({
		  sql: SQLqry,
		  parameters: [PartsClass],
		  success:  function(r) {
		 
			var datas = []
			var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
			for (var i = 0; i < data.length; i++) {
			    var temp = {
				  "FetchSpec" : data[i].Design_Name ,  
			    }
			    datas.push(temp)
			}
		    //   console.log("九连上:"+JSON.stringify(datas));
			sender.success(datas);
		  },
		  error: {},
	  });
    }
    function defaultCargo(PartsClass){
	var SQLqry = " select Default_Name from `auto_feature` where Parts_Class =?    ";  
	var dataArr=[]; 
    
	  yjDBService.exec({
		  sql: SQLqry,
		  parameters: [PartsClass],
		  success:  function(r) {
		 
			var datas = []
			var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
			for (var i = 0; i < data.length; i++) {
			    var temp = {
				  "FetchSpec" : data[i].Default_Name ,  
			    }
			    datas.push(temp)
			}
		    //   console.log("九连上:"+JSON.stringify(datas));
			sender.success(datas);
		  },
		  error: {},
	  });
    }
    function currentSpec(PartsClass){
	var SQLqry = " select Design_Spec from `auto_feature` where Parts_Class =?    ";  
	var dataArr=[]; 
    
	  yjDBService.exec({
		  sql: SQLqry,
		  parameters: [PartsClass],
		  success:  function(r) {
		 
			var datas = []
			var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
			for (var i = 0; i < data.length; i++) {
			    var temp = {
				  "FetchSpec" : data[i].Design_Spec ,  
			    }
			    datas.push(temp)
			}
		    //   console.log("九连上:"+JSON.stringify(datas));
			sender.success(datas);
		  },
		  error: {},
	  });
    }
    function defaultSpec(PartsClass){
	var SQLqry = " select Default_Spec from `auto_feature` where Parts_Class =?    ";  
	var dataArr=[]; 
    
	  yjDBService.exec({
		  sql: SQLqry,
		  parameters: [PartsClass],
		  success:  function(r) {
		 
			var datas = []
			var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
			for (var i = 0; i < data.length; i++) {
			    var temp = {
				  "FetchSpec" : data[i].Default_Spec ,  
			    }
			    datas.push(temp)
			}
		    //   console.log("九连上:"+JSON.stringify(datas));
			sender.success(datas);
		  },
		  error: {},
	  });
    }
    
		

};