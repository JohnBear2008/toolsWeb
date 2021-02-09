module.exports = function (sender) {

	var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
	var yjDB = global.yjRequire("yujiang.Foil").yjDB;
	var async = require("async");
	var DBinfo = sender.req.query.DBinfo;
	var PartsClass = sender.req.query.PartsClass;
	if (DBinfo == 'smtdip') {
		HandleSMT();
	} else if (DBinfo == 'supplier') {  
		HandleSupp();
	} else{
		HandleSupp();
	}
	function HandleSMT() {  //EF码的下拉
		
		var SQLqry = "  select SMT_CID, SMT_Name from `auto_smtdip` where  Level in " +
			"(select CASE FEATURE_E WHEN '客户' THEN '2' WHEN '预留'  THEN '1' WHEN 'SMD/DIP' THEN '3' WHEN '制程'  THEN '4' WHEN 'NA'  THEN '5' END AS LEVEL " +
			" from `auto_feature` where Parts_Class =? ) order by SMT_CID "; 
			// console.log("揉拭：" + SQLqry);
		var dataArr = [];

		yjDBService.exec({
			sql: SQLqry,
			parameters: [PartsClass],
			success: function (r) {
				var datas = []
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				for (var i = 0; i < data.length; i++) {
					var temp = {
						    "Supp_CID" : data[i].SMT_CID , 
						    "Supp_Name" : data[i].SMT_Name , 
					}
					datas.push(temp)
				}
				//   console.log("九连喷:"+JSON.stringify(datas));
				sender.success(datas);
			},
			error: {},
		});
	}
	function HandleSupp() {
		var SQLqry = " select Supp_CID, Supp_Name from auto_supplier  where  Area='1' order by Supp_CID  ";
		var dataArr = [];

		yjDBService.exec({
			sql: SQLqry,
			parameters: [],
			success: function (r) {

				var datas = []
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				for (var i = 0; i < data.length; i++) {
					var temp = {
						"Supp_CID": data[i].Supp_CID,
						"Supp_Name": data[i].Supp_Name,
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
// function HandleSMT( ){
// 	var SQLqry = "  select SMT_CID,SMT_Name from `auto_smtdip` where Area='1'  and Level in "+ 
// 	"(select CASE FEATURE_E WHEN '客户' THEN '2' WHEN '预留'  THEN '1' WHEN 'SMD/DIP' THEN '3' WHEN '制程'  THEN '4' WHEN 'NA'  THEN '5' END AS LEVEL "+
// 	" from `auto_feature` where Parts_Class =? ) "; 
// 	// console.log("神化:"+SQLqry );
// 	var dataArr=[]; 

// 	  yjDBService.exec({
// 		  sql: SQLqry,
// 		  parameters: [PartsClass],
// 		  success:  function(r) {
// 		  var datas = []
// 		  var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
// 		  for (var i = 0; i < data.length; i++) {
// 			var temp = {
// 			    "SMT_CID" : data[i].SMT_CID , 
// 			    "SMT_Name" : data[i].SMT_Name , 
// 			}
// 			datas.push(temp)
// 		  }
// 		//   console.log("九连喷:"+JSON.stringify(datas));
// 		  sender.success(datas);
// 		  },
// 		  error: {},
// 	  });
// }