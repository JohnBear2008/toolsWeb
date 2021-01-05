module.exports = function (sender) {
//ironSubject
	var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
	var yjDB = global.yjRequire("yujiang.Foil").yjDB;
	var async = require("async");  
	var arrange = sender.req.query.arrange;
	if (arrange == 'itemBasic') {
		HandleSupp();
	}
	function HandleSupp() {
		var SQLqry = " select subject , itemClass, itemCID from bgu_subject  ";
		var dataArr = [];
		yjDBService.exec({
			sql: SQLqry,
			parameters: [],
			success: function (r) {
				var datas = []
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				for (var i = 0; i < data.length; i++) {
					var temp = {
						"Sub_CID": data[i].itemCID,
						"Sub_Prime": data[i].subject,
						"Sub_Secon": data[i].itemClass,
					}
					datas.push(temp)
				}
				var dump = JSON.stringify(datas);
				if (dump.length > 100) {
					console.log("昭瑛:" + dump.substring(0, 100));
				} else {
					console.log("昭瑛:" + JSON.stringify(datas));
				}
				sender.success(datas);
			},
			error: {},
		});
	}
};
 