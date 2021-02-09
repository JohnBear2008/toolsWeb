module.exports = function (sender) {

	var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
	var yjDB = global.yjRequire("yujiang.Foil").yjDB;
	var async = require("async");
	var DBinfo = sender.req.query.DBinfo;
	var PartsClass = sender.req.query.PartsClass;
	HandleNeed();
	 
	function HandleNeed() {  
 		var SQLqry = "  select Design_Spec from `auto_feature`  where Parts_Class =?  "; 
			// console.log("长江：" + SQLqry);
		var dataArr = [];

		yjDBService.exec({
			sql: SQLqry,
			parameters: [PartsClass],
			success: function (r) {
				var datas = []
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				for (var i = 0; i < data.length; i++) {
					var temp = {
						    "Design_Spec" : data[i].Design_Spec ,  
					}
					datas.push(temp)
				}
				  console.log("盗猎:"+JSON.stringify(datas));
				sender.success(datas);
			},
			error: {},
		});
	}
	 
};
 