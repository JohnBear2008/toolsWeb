module.exports = function (sender) {

	var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
	var yjDB = global.yjRequire("yujiang.Foil").yjDB;
	var async = require("async");
	var arrange = sender.req.query.arrange;
	var comboClass = sender.req.query.comboClass;
	var PartsClass = sender.req.query.PartsClass;
	if (arrange == 'UnitE') {
		HandleUnitE(PartsClass);
	} else if (arrange == 'Phase') {
		HandlePhase();
	} else if (arrange == 'Priority') {
		HandlePriority(PartsClass);
	} else if (arrange == 'Assembly') {
		HandleAssembly();
	} else if (arrange == 'Pack') {
		HandlePack();
	}

	function HandleUnitE(PartsClass) {
		// var SQLqry = " select Parts_Class , Unit_C , Unit_E from auto_feature where Parts_Class =?   ";
		var SQLqry = " select  Unit_CID , Unit_Name , Note  from auto_unit where Area ='1' AND Level='1'   ";
		var dataArr = [];
		yjDBService.exec({
			sql: SQLqry,
			parameters: [PartsClass],
			success: function (r) {
				var datas = [];
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				for (var i = 0; i < data.length; i++) {
					var temp = {
						"Unit_CID": data[i].Unit_CID,
						"Unit_Name": data[i].Unit_Name,
						"Note": data[i].Note,
					}
					datas.push(temp)
				}
				// console.log("基本元素:"+JSON.stringify(datas));
				sender.success(datas);
			},
			error: {},
		});
	}
	function HandlePhase() {
		var SQLqry = " select Unit_CID,Unit_Name from auto_unit where Level =  '2'     ";
		var dataArr = [];
		yjDBService.exec({
			sql: SQLqry,
			parameters: [],
			success: function (r) {
				var datas = [];
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				for (var i = 0; i < data.length; i++) {
					var temp = {
						"Unit_CID": data[i].Unit_CID,
						"Unit_Name": data[i].Unit_Name,
					}
					datas.push(temp)
				}
				console.log("花愛:" + JSON.stringify(datas));
				sender.success(datas);
			},
			error: {},
		});
	}
	function HandlePriority() {
		var SQLqry = " select Unit_CID,Unit_Name from auto_unit where Level = '3'     ";
		var dataArr = [];
		yjDBService.exec({
			sql: SQLqry,
			parameters: [],
			success: function (r) {
				var datas = [];
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				for (var i = 0; i < data.length; i++) {
					var temp = {
						"Unit_CID": data[i].Unit_CID,
						"Unit_Name": data[i].Unit_Name,
					}
					datas.push(temp)
				}
				console.log("九喝酒:" + JSON.stringify(datas));
				sender.success(datas);
			},
			error: {},
		});
	}
	function HandleAssembly() {
		var SQLqry = " select Unit_CID,Unit_Name from auto_unit where Level = '4'     ";
		var dataArr = [];
		yjDBService.exec({
			sql: SQLqry,
			parameters: [],
			success: function (r) {
				var datas = [];
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				for (var i = 0; i < data.length; i++) {
					var temp = {
						"Unit_CID": data[i].Unit_CID,
						"Unit_Name": data[i].Unit_Name,
					}
					datas.push(temp)
				}
				console.log("八批:" + JSON.stringify(datas));
				sender.success(datas);
			},
			error: {},
		});
	}
	function HandlePack() {
		var SQLqry =
			" select 'A' as Rank , Unit_CID,Unit_Name,Note from auto_unit where Level =  '1' " +
			" union " +
			" select 'B' as Rank , Unit_CID,Unit_Name,Note from auto_unit where Level =  '2' " +
			" union " +
			" select 'C' as Rank , Unit_CID,Unit_Name,Note from auto_unit where Level =  '3' " +
			" union " +
			" select 'D' as Rank , Unit_CID,Unit_Name,Note from auto_unit where Level =  '4' ";
		var dataArr = [];
		yjDBService.exec({
			sql: SQLqry,
			parameters: [],
			success: function (r) {
				var datas = [];
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				for (var i = 0; i < data.length; i++) {
					var temp = {
						"Rank": data[i].Rank,
						"Unit_CID": data[i].Unit_CID,
						"Unit_Name": data[i].Unit_Name,
					}
					datas.push(temp)
				}
				var dump = JSON.stringify(datas);
				if (dump.length > 100) {
					console.log("绪丹:" + dump.substring(50, 100));
				} else {
					console.log("绪丹:" + JSON.stringify(datas));
				}
				sender.success(datas);
			},
			error: {},
		});
	}
};