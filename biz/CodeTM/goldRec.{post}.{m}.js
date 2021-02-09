module.exports = function (sender) {
	//goldRec.js
	var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
	var yjDB = global.yjRequire("yujiang.Foil").yjDB;
	var async = require("async");
	var obj = sender.req.query;
	var param1 = sender.req.query.pclass;
	//PID从2开始，1是EF码
	var sql_Page2A = " select tbf.Parts_Class as PClass , PartsDesc as Parts_Desc ,tbf.FEATURE01 as FeatLebel from auto_nature tba LEFT JOIN auto_feature tbf  ON tba.PartsClass=tbf.Parts_Class where PartsRule='A' and PartsClass=? and  PartsPID='2' order by cast(PartsAttr as int) ASC ";
	var sql_Page2B = " select tbf.Parts_Class as PClass , PartsDesc as Parts_Desc ,tbf.FEATURE02 as FeatLebel from auto_nature tba LEFT JOIN auto_feature tbf  ON tba.PartsClass=tbf.Parts_Class where PartsRule='A' and PartsClass=? and  PartsPID='3' order by cast(PartsAttr as int) ASC ";
	var sql_Page2C = " select tbf.Parts_Class as PClass , PartsDesc as Parts_Desc ,tbf.FEATURE03 as FeatLebel from auto_nature tba LEFT JOIN auto_feature tbf  ON tba.PartsClass=tbf.Parts_Class where PartsRule='A' and PartsClass=? and  PartsPID='4' order by cast(PartsAttr as int) ASC ";
	var sql_Page2D = " select tbf.Parts_Class as PClass , PartsDesc as Parts_Desc ,tbf.FEATURE04 as FeatLebel from auto_nature tba LEFT JOIN auto_feature tbf  ON tba.PartsClass=tbf.Parts_Class where PartsRule='A' and PartsClass=? and  PartsPID='5' order by cast(PartsAttr as int) ASC ";
	var sql_Page2E = " select tbf.Parts_Class as PClass , PartsDesc as Parts_Desc ,tbf.FEATURE05 as FeatLebel from auto_nature tba LEFT JOIN auto_feature tbf  ON tba.PartsClass=tbf.Parts_Class where PartsRule='A' and PartsClass=? and  PartsPID='6' order by cast(PartsAttr as int) ASC ";
	var sql_Page2F = " select tbf.Parts_Class as PClass , PartsDesc as Parts_Desc ,tbf.FEATURE06 as FeatLebel from auto_nature tba LEFT JOIN auto_feature tbf  ON tba.PartsClass=tbf.Parts_Class where PartsRule='A' and PartsClass=? and  PartsPID='7' order by cast(PartsAttr as int) ASC ";
	var sql_Page2G = " select tbf.Parts_Class as PClass , PartsDesc as Parts_Desc ,tbf.FEATURE07 as FeatLebel from auto_nature tba LEFT JOIN auto_feature tbf  ON tba.PartsClass=tbf.Parts_Class where PartsRule='A' and PartsClass=? and  PartsPID='8' order by cast(PartsAttr as int) ASC ";
	var sql_Page2H = " select tbf.Parts_Class as PClass , PartsDesc as Parts_Desc ,tbf.FEATURE08 as FeatLebel from auto_nature tba LEFT JOIN auto_feature tbf  ON tba.PartsClass=tbf.Parts_Class where PartsRule='A' and PartsClass=? and  PartsPID='9' order by cast(PartsAttr as int) ASC ";
	var sql_Page2I = " select tbf.Parts_Class as PClass , PartsDesc as Parts_Desc ,tbf.FEATURE09 as FeatLebel from auto_nature tba LEFT JOIN auto_feature tbf  ON tba.PartsClass=tbf.Parts_Class where PartsRule='A' and PartsClass=? and  PartsPID='10' order by cast(PartsAttr as int) ASC ";
	var sql_Page2J = " select tbf.Parts_Class as PClass , PartsDesc as Parts_Desc ,tbf.FEATURE10 as FeatLebel from auto_nature tba LEFT JOIN auto_feature tbf  ON tba.PartsClass=tbf.Parts_Class where PartsRule='A' and PartsClass=? and  PartsPID='11' order by cast(PartsAttr as int) ASC ";
	var sql_Page2K = " select tbf.Parts_Class as PClass , PartsDesc as Parts_Desc ,tbf.FEATURE11 as FeatLebel from auto_nature tba LEFT JOIN auto_feature tbf  ON tba.PartsClass=tbf.Parts_Class where PartsRule='A' and PartsClass=? and  PartsPID='12' order by cast(PartsAttr as int) ASC ";
	var sql_Page2L = " select tbf.Parts_Class as PClass , PartsDesc as Parts_Desc ,tbf.FEATURE12 as FeatLebel from auto_nature tba LEFT JOIN auto_feature tbf  ON tba.PartsClass=tbf.Parts_Class where PartsRule='A' and PartsClass=? and  PartsPID='13' order by cast(PartsAttr as int) ASC ";
	var sql_Page2M = " select tbf.Parts_Class as PClass , PartsDesc as Parts_Desc ,tbf.FEATURE13 as FeatLebel from auto_nature tba LEFT JOIN auto_feature tbf  ON tba.PartsClass=tbf.Parts_Class where PartsRule='A' and PartsClass=? and  PartsPID='14' order by cast(PartsAttr as int) ASC ";
	var sql_Page2O = " select tbf.Parts_Class as PClass , PartsDesc as Parts_Desc ,tbf.FEATURE14 as FeatLebel from auto_nature tba LEFT JOIN auto_feature tbf  ON tba.PartsClass=tbf.Parts_Class where PartsRule='A' and PartsClass=? and  PartsPID='15' order by cast(PartsAttr as int) ASC ";
	var sql_Page2P = " select tbf.Parts_Class as PClass , PartsDesc as Parts_Desc ,tbf.FEATURE15 as FeatLebel from auto_nature tba LEFT JOIN auto_feature tbf  ON tba.PartsClass=tbf.Parts_Class where PartsRule='A' and PartsClass=? and  PartsPID='16' order by cast(PartsAttr as int) ASC ";
	var sql_Page2Q = " select tbf.Parts_Class as PClass , PartsDesc as Parts_Desc ,tbf.FEATURE16 as FeatLebel from auto_nature tba LEFT JOIN auto_feature tbf  ON tba.PartsClass=tbf.Parts_Class where PartsRule='A' and PartsClass=? and  PartsPID='17' order by cast(PartsAttr as int) ASC ";
	var sql_Page2R = " select tbf.Parts_Class as PClass , PartsDesc as Parts_Desc ,tbf.FEATURE17 as FeatLebel from auto_nature tba LEFT JOIN auto_feature tbf  ON tba.PartsClass=tbf.Parts_Class where PartsRule='A' and PartsClass=? and  PartsPID='18' order by cast(PartsAttr as int) ASC ";
	var sql_Page2S = " select tbf.Parts_Class as PClass , PartsDesc as Parts_Desc ,tbf.FEATURE18 as FeatLebel from auto_nature tba LEFT JOIN auto_feature tbf  ON tba.PartsClass=tbf.Parts_Class where PartsRule='A' and PartsClass=? and  PartsPID='19' order by cast(PartsAttr as int) ASC ";
	var sql_Page2T = " select tbf.Parts_Class as PClass , PartsDesc as Parts_Desc ,tbf.FEATURE19 as FeatLebel from auto_nature tba LEFT JOIN auto_feature tbf  ON tba.PartsClass=tbf.Parts_Class where PartsRule='A' and PartsClass=? and  PartsPID='20' order by cast(PartsAttr as int) ASC ";
	var sql_Page2U = " select tbf.Parts_Class as PClass , PartsDesc as Parts_Desc ,tbf.FEATURE20 as FeatLebel from auto_nature tba LEFT JOIN auto_feature tbf  ON tba.PartsClass=tbf.Parts_Class where PartsRule='A' and PartsClass=? and  PartsPID='21' order by cast(PartsAttr as int) ASC ";
	var sql_Page2V = " select tbf.Parts_Class as PClass , PartsDesc as Parts_Desc ,tbf.FEATURE_E as FeatLebel from auto_nature tba LEFT JOIN auto_feature tbf  ON tba.PartsClass=tbf.Parts_Class where PartsRule='A' and PartsClass=? and  PartsPID='1' order by cast(PartsAttr as int) ASC ";
	var sql_Page2W = " select tbf.Parts_Class as PClass ,  Unit_C  , Unit_E as Parts_Desc , '基本单位' as FeatLebel from   auto_feature tbf   where Parts_Rule='A' and Parts_Class= ? ";

	// var sql_Page2A = " select Parts_Desc from auto_property where Parts_Class=? and Parts_Attr='A'  order by cast(Parts_SEQ as int) ASC ";
	// var sql_Page2B = " select Parts_Desc from auto_property where Parts_Class=? and Parts_Attr='B'  order by cast(Parts_SEQ as int) ASC ";
	// var sql_Page2C = " select Parts_Desc from auto_property where Parts_Class=? and Parts_Attr='C'  order by cast(Parts_SEQ as int) ASC ";
	// var sql_Page2D = " select Parts_Desc from auto_property where Parts_Class=? and Parts_Attr='D'  order by cast(Parts_SEQ as int) ASC ";
	// var sql_Page2E = " select Parts_Desc from auto_property where Parts_Class=? and Parts_Attr='E'  order by cast(Parts_SEQ as int) ASC ";
	// var sql_Page2F = " select Parts_Desc from auto_property where Parts_Class=? and Parts_Attr='F'  order by cast(Parts_SEQ as int) ASC ";
	// var sql_Page2G = " select Parts_Desc from auto_property where Parts_Class=? and Parts_Attr='G'  order by cast(Parts_SEQ as int) ASC ";
	// var sql_Page2H = " select Parts_Desc from auto_property where Parts_Class=? and Parts_Attr='H'  order by cast(Parts_SEQ as int) ASC ";
	// var sql_Page2I = " select Parts_Desc from auto_property where Parts_Class=? and Parts_Attr='I'  order by cast(Parts_SEQ as int) ASC ";
	// var sql_Page2J = " select Parts_Desc from auto_property where Parts_Class=? and Parts_Attr='J'  order by cast(Parts_SEQ as int) ASC ";
	// var sql_Page2K = " select Parts_Desc from auto_property where Parts_Class=? and Parts_Attr='K'  order by cast(Parts_SEQ as int) ASC ";
	// var sql_Page2L = " select Parts_Desc from auto_property where Parts_Class=? and Parts_Attr='L'  order by cast(Parts_SEQ as int) ASC ";
	// var sql_Page2M = " select Parts_Desc from auto_property where Parts_Class=? and Parts_Attr='M'  order by cast(Parts_SEQ as int) ASC ";
	// var sql_Page2O = " select Parts_Desc from auto_property where Parts_Class=? and Parts_Attr='O'  order by cast(Parts_SEQ as int) ASC ";
	// var sql_Page2P = " select Parts_Desc from auto_property where Parts_Class=? and Parts_Attr='P'  order by cast(Parts_SEQ as int) ASC ";
	// var sql_Page2Q = " select Parts_Desc from auto_property where Parts_Class=? and Parts_Attr='Q'  order by cast(Parts_SEQ as int) ASC ";
	// var sql_Page2R = " select Parts_Desc from auto_property where Parts_Class=? and Parts_Attr='R'  order by cast(Parts_SEQ as int) ASC ";
	// var sql_Page2S = " select Parts_Desc from auto_property where Parts_Class=? and Parts_Attr='S'  order by cast(Parts_SEQ as int) ASC ";
	// var sql_Page2T = " select Parts_Desc from auto_property where Parts_Class=? and Parts_Attr='T'  order by cast(Parts_SEQ as int) ASC ";
	// var sql_Page2U = " select Parts_Desc from auto_property where Parts_Class=? and Parts_Attr='U'  order by cast(Parts_SEQ as int) ASC ";
	// var sql_Page2V = " select FEATURE_E from `auto_feature` where Parts_Rule='A' and  Parts_Class=?   ";

	var dataArr = [];
	async.parallel([funPage2A, funPage2B, funPage2C, funPage2D, funPage2E, funPage2F, funPage2G, funPage2H, funPage2I, funPage2J,
		funPage2K, funPage2L, funPage2M, funPage2O, funPage2P, funPage2Q, funPage2R, funPage2S, funPage2T, funPage2U, funPage2V, funPage2W],
		function (err, result) {
			if (err) {

			} else {
				//   console.log("协调",JSON.stringify(result));
				//   console.log("协调", (result.length));
				//   console.log("协调", (JSON.stringify(result[20])));
				sender.success(result);
			}
		});
	function funPage2W(cb) {
		yjDBService.exec({
			sql: sql_Page2W,
			parameters: [param1],
			rowsAsArray: true,
			success: function (r) {
				var datas = []
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				for (var i = 0; i < data.length; i++) {
					var temp = {
						"Unit_C": data[i].Unit_C,
						"PartsUnitE": data[i].Parts_Desc,
						"FeatLebel": data[i].FeatLebel,
						"PClass": data[i].PClass,
					}
					datas.push(temp);
					console.log("逼空：",JSON.stringify(temp));
				}
				cb(null, datas);
			},
			error: sender.error
		})
	}
	function funPage2V(cb) {
		yjDBService.exec({
			sql: sql_Page2V,
			parameters: [param1],
			rowsAsArray: true,
			success: function (r) {
				var datas = []
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				for (var i = 0; i < data.length; i++) {
					var temp = {
						"Parts_Desc": data[i].FEATURE_E,
						"FeatLebel": data[i].FeatLebel,
						"PClass": data[i].PClass,
					}
					datas.push(temp);
					// console.log("逼紧：",JSON.stringify(temp));
				}
				cb(null, datas);
			},
			error: sender.error
		})
	}
	function funPage2A(cb) {
		yjDBService.exec({
			sql: sql_Page2A,
			parameters: [param1],
			rowsAsArray: true,
			success: function (r) {
				var datas = []
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				for (var i = 0; i < data.length; i++) {
					var temp = {
						"Parts_Desc": data[i].Parts_Desc,
						"FeatLebel": data[i].FeatLebel,
						"PClass": data[i].PClass,
					}
					datas.push(temp)
				}
				cb(null, datas);
			},
			error: sender.error
		})
	}
	function funPage2B(cb) {
		yjDBService.exec({
			sql: sql_Page2B,
			parameters: [param1],
			rowsAsArray: true,
			success: function (r) {
				var datas = []
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				for (var i = 0; i < data.length; i++) {
					var temp = {
						"Parts_Desc": data[i].Parts_Desc,
						"FeatLebel": data[i].FeatLebel,
						"PClass": data[i].PClass,
					}
					datas.push(temp)
				}
				cb(null, datas);
			},
			error: sender.error
		})
	}
	function funPage2C(cb) {
		yjDBService.exec({
			sql: sql_Page2C,
			parameters: [param1],
			rowsAsArray: true,
			success: function (r) {
				var datas = []
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				for (var i = 0; i < data.length; i++) {
					var temp = {
						"Parts_Desc": data[i].Parts_Desc,
						"FeatLebel": data[i].FeatLebel,
						"PClass": data[i].PClass,
					}
					datas.push(temp)
				}
				cb(null, datas);
			},
			error: sender.error
		})
	}
	function funPage2D(cb) {
		yjDBService.exec({
			sql: sql_Page2D,
			parameters: [param1],
			rowsAsArray: true,
			success: function (r) {
				var datas = []
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				for (var i = 0; i < data.length; i++) {
					var temp = {
						"Parts_Desc": data[i].Parts_Desc,
						"FeatLebel": data[i].FeatLebel,
						"PClass": data[i].PClass,
					}
					datas.push(temp)
				}
				cb(null, datas);
			},
			error: sender.error
		})
	}
	function funPage2E(cb) {
		yjDBService.exec({
			sql: sql_Page2E,
			parameters: [param1],
			rowsAsArray: true,
			success: function (r) {
				var datas = []
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				for (var i = 0; i < data.length; i++) {
					var temp = {
						"Parts_Desc": data[i].Parts_Desc,
						"FeatLebel": data[i].FeatLebel,
						"PClass": data[i].PClass,
					}
					datas.push(temp)
				}
				cb(null, datas);
			},
			error: sender.error
		})
	}
	function funPage2F(cb) {
		yjDBService.exec({
			sql: sql_Page2F,
			parameters: [param1],
			rowsAsArray: true,
			success: function (r) {
				var datas = []
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				for (var i = 0; i < data.length; i++) {
					var temp = {
						"Parts_Desc": data[i].Parts_Desc,
						"FeatLebel": data[i].FeatLebel,
						"PClass": data[i].PClass,
					}
					datas.push(temp)
				}
				cb(null, datas);
			},
			error: sender.error
		})
	}
	function funPage2G(cb) {
		yjDBService.exec({
			sql: sql_Page2G,
			parameters: [param1],
			rowsAsArray: true,
			success: function (r) {
				var datas = []
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				for (var i = 0; i < data.length; i++) {
					var temp = {
						"Parts_Desc": data[i].Parts_Desc,
						"FeatLebel": data[i].FeatLebel,
						"PClass": data[i].PClass,
					}
					datas.push(temp)
				}
				cb(null, datas);
			},
			error: sender.error
		})
	}
	function funPage2H(cb) {
		yjDBService.exec({
			sql: sql_Page2H,
			parameters: [param1],
			rowsAsArray: true,
			success: function (r) {
				var datas = []
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				for (var i = 0; i < data.length; i++) {
					var temp = {
						"Parts_Desc": data[i].Parts_Desc,
						"FeatLebel": data[i].FeatLebel,
						"PClass": data[i].PClass,
					}
					datas.push(temp)
				}
				cb(null, datas);
			},
			error: sender.error
		})
	}
	function funPage2I(cb) {
		yjDBService.exec({
			sql: sql_Page2I,
			parameters: [param1],
			rowsAsArray: true,
			success: function (r) {
				var datas = []
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				for (var i = 0; i < data.length; i++) {
					var temp = {
						"Parts_Desc": data[i].Parts_Desc,
						"FeatLebel": data[i].FeatLebel,
						"PClass": data[i].PClass,
					}
					datas.push(temp)
				}
				cb(null, datas);
			},
			error: sender.error
		})
	}
	function funPage2J(cb) {
		yjDBService.exec({
			sql: sql_Page2J,
			parameters: [param1],
			rowsAsArray: true,
			success: function (r) {
				var datas = []
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				for (var i = 0; i < data.length; i++) {
					var temp = {
						"Parts_Desc": data[i].Parts_Desc,
						"FeatLebel": data[i].FeatLebel,
						"PClass": data[i].PClass,
					}
					datas.push(temp)
				}
				cb(null, datas);
			},
			error: sender.error
		})
	}
	function funPage2K(cb) {
		yjDBService.exec({
			sql: sql_Page2K,
			parameters: [param1],
			rowsAsArray: true,
			success: function (r) {
				var datas = []
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				for (var i = 0; i < data.length; i++) {
					var temp = {
						"Parts_Desc": data[i].Parts_Desc,
						"FeatLebel": data[i].FeatLebel,
						"PClass": data[i].PClass,
					}
					datas.push(temp)
				}
				cb(null, datas);
			},
			error: sender.error
		})
	}
	function funPage2L(cb) {
		yjDBService.exec({
			sql: sql_Page2L,
			parameters: [param1],
			rowsAsArray: true,
			success: function (r) {
				var datas = []
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				for (var i = 0; i < data.length; i++) {
					var temp = {
						"Parts_Desc": data[i].Parts_Desc,
						"FeatLebel": data[i].FeatLebel,
						"PClass": data[i].PClass,
					}
					datas.push(temp)
				}
				cb(null, datas);
			},
			error: sender.error
		})
	}
	function funPage2M(cb) {
		yjDBService.exec({
			sql: sql_Page2M,
			parameters: [param1],
			rowsAsArray: true,
			success: function (r) {
				var datas = []
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				for (var i = 0; i < data.length; i++) {
					var temp = {
						"Parts_Desc": data[i].Parts_Desc,
						"FeatLebel": data[i].FeatLebel,
						"PClass": data[i].PClass,
					}
					datas.push(temp)
				}
				cb(null, datas);
			},
			error: sender.error
		})
	}

	function funPage2O(cb) {
		yjDBService.exec({
			sql: sql_Page2O,
			parameters: [param1],
			rowsAsArray: true,
			success: function (r) {
				var datas = []
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				for (var i = 0; i < data.length; i++) {
					var temp = {
						"Parts_Desc": data[i].Parts_Desc,
						"FeatLebel": data[i].FeatLebel,
						"PClass": data[i].PClass,
					}
					datas.push(temp)
				}
				cb(null, datas);
			},
			error: sender.error
		})
	}
	function funPage2P(cb) {
		yjDBService.exec({
			sql: sql_Page2P,
			parameters: [param1],
			rowsAsArray: true,
			success: function (r) {
				var datas = []
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				for (var i = 0; i < data.length; i++) {
					var temp = {
						"Parts_Desc": data[i].Parts_Desc,
						"FeatLebel": data[i].FeatLebel,
						"PClass": data[i].PClass,
					}
					datas.push(temp)
				}
				cb(null, datas);
			},
			error: sender.error
		})
	}
	function funPage2Q(cb) {
		yjDBService.exec({
			sql: sql_Page2Q,
			parameters: [param1],
			rowsAsArray: true,
			success: function (r) {
				var datas = []
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				for (var i = 0; i < data.length; i++) {
					var temp = {
						"Parts_Desc": data[i].Parts_Desc,
						"FeatLebel": data[i].FeatLebel,
						"PClass": data[i].PClass,
					}
					datas.push(temp)
				}
				cb(null, datas);
			},
			error: sender.error
		})
	}
	function funPage2R(cb) {
		yjDBService.exec({
			sql: sql_Page2R,
			parameters: [param1],
			rowsAsArray: true,
			success: function (r) {
				var datas = []
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				for (var i = 0; i < data.length; i++) {
					var temp = {
						"Parts_Desc": data[i].Parts_Desc,
						"FeatLebel": data[i].FeatLebel,
						"PClass": data[i].PClass,
					}
					datas.push(temp)
				}
				cb(null, datas);
			},
			error: sender.error
		})
	}
	function funPage2S(cb) {
		yjDBService.exec({
			sql: sql_Page2S,
			parameters: [param1],
			rowsAsArray: true,
			success: function (r) {
				var datas = []
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				for (var i = 0; i < data.length; i++) {
					var temp = {
						"Parts_Desc": data[i].Parts_Desc,
						"FeatLebel": data[i].FeatLebel,
						"PClass": data[i].PClass,
					}
					datas.push(temp)
				}
				cb(null, datas);
			},
			error: sender.error
		})
	}
	function funPage2T(cb) {
		yjDBService.exec({
			sql: sql_Page2T,
			parameters: [param1],
			rowsAsArray: true,
			success: function (r) {
				var datas = []
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				for (var i = 0; i < data.length; i++) {
					var temp = {
						"Parts_Desc": data[i].Parts_Desc,
						"FeatLebel": data[i].FeatLebel,
						"PClass": data[i].PClass,
					}
					datas.push(temp)
				}
				cb(null, datas);
			},
			error: sender.error
		})
	}
	function funPage2U(cb) {
		yjDBService.exec({
			sql: sql_Page2U,
			parameters: [param1],
			rowsAsArray: true,
			success: function (r) {
				var datas = []
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				for (var i = 0; i < data.length; i++) {
					var temp = {
						"Parts_Desc": data[i].Parts_Desc,
						"FeatLebel": data[i].FeatLebel,
						"PClass": data[i].PClass,
					}
					datas.push(temp)
				}
				cb(null, datas);
			},
			error: sender.error
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