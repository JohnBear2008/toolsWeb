module.exports = function (sender) {

	var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
	var yjDB = global.yjRequire("yujiang.Foil").yjDB;
	var async = require("async");
	var arrange = sender.req.query.arrange;
	var comboClass = sender.req.query.comboClass;
	var PartsClass = sender.req.query.PartsClass;
	if (arrange == 'blueLabel') {
		HandleBlue(PartsClass);
	}else if (arrange == 'IllumLabel') {
		HandleIllum(comboClass);
	}else if (arrange == 'findMenu') {
		HandleCate();
	}else if (arrange == 'advMenu') {
		HandleCate();
	}else{
		HandleCate();
	}
	function HandleIllum(comboClass) {
		// 'A,B,C,D'
		let ClassList = [];
		ClassList =   comboClass.split('#');
		var SQLExecute = " select Parts_Class,Parts_Chi from auto_feature where ";
		if (ClassList[0] != "" && ClassList[0] != undefined) {
			SQLExecute = SQLExecute + " "  + "INSTR(Parts_Class, '"+ClassList[0]+"' ) = 1 ";
		}
		if (ClassList[1] != "" && ClassList[1] != undefined) {
			SQLExecute = SQLExecute + " OR " + "INSTR(Parts_Class, '"+ClassList[1]+"' ) = 1 ";
		}
		if (ClassList[2] != "" && ClassList[2] != undefined) {
			SQLExecute = SQLExecute + " OR " + "INSTR(Parts_Class, '"+ClassList[2]+"' ) = 1 ";
		}
		if (ClassList[3] != "" && ClassList[3] != undefined) {
			SQLExecute = SQLExecute + " OR " + "INSTR(Parts_Class, '"+ClassList[3]+"' ) = 1 ";
		}
		if (ClassList[4] != "" && ClassList[4] != undefined) {
			SQLExecute = SQLExecute + " OR " + "INSTR(Parts_Class, '"+ClassList[4]+"' ) = 1 ";
		}
		// console.log("殿昌惠 ...", SQLExecute );
		var dataArr = [];
		yjDBService.exec({
			sql: SQLExecute,
			parameters: [],
			success: function (r) {
				var datas = [];
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				for (var i = 0; i < data.length; i++) {
					var temp = {
						"Parts_Class": data[i].Parts_Class,
						"Parts_Chi": data[i].Parts_Chi,
					}
					datas.push(temp)
				}
				// console.log("骑士:"+JSON.stringify(datas));
				sender.success(datas);
			},
			error: {},
		});
	}
	function HandleBlue(PartsClass) {
		var SQLqry = " select Parts_Class,Parts_Chi from auto_feature where Parts_Class =?   ";
		var dataArr = [];
		yjDBService.exec({
			sql: SQLqry,
			parameters: [PartsClass],
			success: function (r) {
				var datas = [];
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				for (var i = 0; i < data.length; i++) {
					var temp = {
						"Parts_Class": data[i].Parts_Class,
						"Parts_Chi": data[i].Parts_Chi,
					}
					datas.push(temp)
				}
				console.log("蓝色標签:"+JSON.stringify(datas));
				sender.success(datas);
			},
			error: {},
		});
	}
	function HandleCate() {
		var SQLqry = " select Parts_Class,Parts_Chi from auto_feature ORDER BY Parts_Class    ";
		var dataArr = [];	
		yjDBService.exec({
			sql: SQLqry,
			parameters: [],
			success: function (r) {
				var datas = [];
				var empty = {
					"Parts_Class": "",
					"Parts_Chi": "",
				}
				datas.push(empty);
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				for (var i = 0; i < data.length; i++) {
					var temp = {
						"Parts_Class": data[i].Parts_Class,
						"Parts_Chi": data[i].Parts_Chi,
					}
					datas.push(temp)
				}
				// console.log("八连拉:"+JSON.stringify(datas));
				sender.success(datas);
			},
			error: {},
		});
	}
};