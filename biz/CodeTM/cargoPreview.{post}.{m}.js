module.exports = function (sender) {

	var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
	var yjDB = global.yjRequire("yujiang.Foil").yjDB;
	var async = require("async");
	var arrange = sender.req.query.arrange;
	var PartsClass = sender.req.query.PartsClass;
    var SupplyID=sender.req.query.SupplyID;
    var SupplyTitle=sender.req.query.SupplyTitle;
    var SMTID=sender.req.query.SMTID;
    var SMTTitle=sender.req.query.SMTTitle;
 
    var Prop1 =sender.req.query.Parts_Prop1 ; 
    var Prop2 =sender.req.query.Parts_Prop2 ; 
    var Prop3 =sender.req.query.Parts_Prop3 ; 
    var Prop4 =sender.req.query.Parts_Prop4 ; 
    var Prop5 =sender.req.query.Parts_Prop5 ; 
    var Prop6 =sender.req.query.Parts_Prop6 ; 
    var Prop7 =sender.req.query.Parts_Prop7 ; 
    var Prop8 =sender.req.query.Parts_Prop8 ; 
    var Prop9 =sender.req.query.Parts_Prop9 ; 
    var Prop10=sender.req.query.Parts_Prop10; 
    var Prop11=sender.req.query.Parts_Prop11; 
    var Prop12=sender.req.query.Parts_Prop12; 
    var Prop13=sender.req.query.Parts_Prop13; 
    var Prop14=sender.req.query.Parts_Prop14; 
    var Prop15=sender.req.query.Parts_Prop15; 
    var Prop16=sender.req.query.Parts_Prop16; 
    var Prop17=sender.req.query.Parts_Prop17; 
    var Prop18=sender.req.query.Parts_Prop18; 
    var Prop19=sender.req.query.Parts_Prop19; 
    var Prop20=sender.req.query.Parts_Prop20; 
    var Soft_No=sender.req.query.Soft_No; 
	let CargoPaste = "";
	if (arrange == 'designCargo') {
		designCargo(PartsClass);
	}

	function designCargo(PartsClass) {
		var SQLqry = " select Design_Name , `FEATURE_E`,  `FEATURE_F`,  `FEATURE01`,  `FEATURE02`,  `FEATURE03`,  `FEATURE04`,  `FEATURE05`,    " +
		" `FEATURE06`,  `FEATURE07`,  `FEATURE08`,  `FEATURE09`,  `FEATURE10`,  `FEATURE11`,  `FEATURE12`,    " +
		" `FEATURE13`,  `FEATURE14`,  `FEATURE15`,  `FEATURE16`,  `FEATURE17`,  `FEATURE18`,  `FEATURE19`,    " +
		" `FEATURE20` from `auto_feature` where Parts_Class =?    ";
		var dataArr = [];
		yjDBService.exec({
			sql: SQLqry,
			parameters: [PartsClass],
			success: function (r) {
				var datas = []
				var data = yjDB.dataSet2ObjectList(r.meta, r.rows);
				for (var i = 0; i < data.length; i++) {
					HandleMe(i, data);
					var temp = {
						"FetchSpec": data[i].Design_Name,
						"CargoPaste": CargoPaste,
					}
					datas.push(temp)
				}
				console.log("宝灯:" + JSON.stringify(datas));
				sender.success(datas);
			},
			error: {},
		});
	}
	function HandleMe(i, result) {
		var obj = {
			"Design_Name": result[i].Design_Name,
			"NameP":  ((SupplyTitle == null || SupplyTitle == undefined) ? ('') : SupplyTitle),
			"NameE":  ((SMTTitle == null    || SMTTitle == undefined)    ? ('') : SMTTitle),
			"Name1":  ((Prop1 == null  || Prop1 == undefined) ? ('')  : Prop1),
			"Name2":  ((Prop2 == null  || Prop2 == undefined) ? ('')  : Prop2),
			"Name3":  ((Prop3 == null  || Prop3 == undefined) ? ('')  : Prop3),
			"Name4":  ((Prop4 == null  || Prop4 == undefined) ? ('')  : Prop4),
			"Name5":  ((Prop5 == null  || Prop5 == undefined) ? ('')  : Prop5),
			"Name6":  ((Prop6 == null  || Prop6 == undefined) ? ('')  : Prop6),
			"Name7":  ((Prop7 == null  || Prop7 == undefined) ? ('')  : Prop7),
			"Name8":  ((Prop8 == null  || Prop8 == undefined) ? ('')  : Prop8),
			"Name9":  ((Prop9 == null  || Prop9 == undefined) ? ('')  : Prop9),
			"Name10": ((Prop10 == null || Prop10 == undefined) ? ('') : Prop10),
			"Name11": ((Prop11 == null || Prop11 == undefined) ? ('') : Prop11),
			"Name12": ((Prop12 == null || Prop12 == undefined) ? ('') : Prop12),
			"Name13": ((Prop13 == null || Prop13 == undefined) ? ('') : Prop13),
			"Name14": ((Prop14 == null || Prop14 == undefined) ? ('') : Prop14),
			"Name15": ((Prop15 == null || Prop15 == undefined) ? ('') : Prop15),
			"Name16": ((Prop16 == null || Prop16 == undefined) ? ('') : Prop16),
			"Name17": ((Prop17 == null || Prop17 == undefined) ? ('') : Prop17),
			"Name18": ((Prop18 == null || Prop18 == undefined) ? ('') : Prop18),
			"Name19": ((Prop19 == null || Prop19 == undefined) ? ('') : Prop19),
			"Name20": ((Prop20 == null || Prop20 == undefined) ? ('') : Prop20),
			"ValueP": ('制造商'),
			"ValueE": ((result[i].FEATURE_E == null || result[i].FEATURE_E == undefined) ? ('') : result[i].FEATURE_E.replace(' ', '')), //bug
			"Value1": ((result[i].FEATURE01 == null || result[i].FEATURE01 == undefined) ? ('') : result[i].FEATURE01.replace(' ', '')),
			"Value2": ((result[i].FEATURE02 == null || result[i].FEATURE02 == undefined) ? ('') : result[i].FEATURE02.replace(' ', '')),
			"Value3": ((result[i].FEATURE03 == null || result[i].FEATURE03 == undefined) ? ('') : result[i].FEATURE03.replace(' ', '')),
			"Value4": ((result[i].FEATURE04 == null || result[i].FEATURE04 == undefined) ? ('') : result[i].FEATURE04.replace(' ', '')),
			"Value5": ((result[i].FEATURE05 == null || result[i].FEATURE05 == undefined) ? ('') : result[i].FEATURE05.replace(' ', '')),
			"Value6": ((result[i].FEATURE06 == null || result[i].FEATURE06 == undefined) ? ('') : result[i].FEATURE06.replace(' ', '')),
			"Value7": ((result[i].FEATURE07 == null || result[i].FEATURE07 == undefined) ? ('') : result[i].FEATURE07.replace(' ', '')),
			"Value8": ((result[i].FEATURE08 == null || result[i].FEATURE08 == undefined) ? ('') : result[i].FEATURE08.replace(' ', '')),
			"Value9": ((result[i].FEATURE09 == null || result[i].FEATURE09 == undefined) ? ('') : result[i].FEATURE09.replace(' ', '')),
			"Value10": ((result[i].FEATURE10 == null || result[i].FEATURE10 == undefined) ? ('') : result[i].FEATURE10.replace(' ', '')),
			"Value11": ((result[i].FEATURE11 == null || result[i].FEATURE11 == undefined) ? ('') : result[i].FEATURE11.replace(' ', '')),
			"Value12": ((result[i].FEATURE12 == null || result[i].FEATURE12 == undefined) ? ('') : result[i].FEATURE12.replace(' ', '')),
			"Value13": ((result[i].FEATURE13 == null || result[i].FEATURE13 == undefined) ? ('') : result[i].FEATURE13.replace(' ', '')),
			"Value14": ((result[i].FEATURE14 == null || result[i].FEATURE14 == undefined) ? ('') : result[i].FEATURE14.replace(' ', '')),
			"Value15": ((result[i].FEATURE15 == null || result[i].FEATURE15 == undefined) ? ('') : result[i].FEATURE15.replace(' ', '')),
			"Value16": ((result[i].FEATURE16 == null || result[i].FEATURE16 == undefined) ? ('') : result[i].FEATURE16.replace(' ', '')),
			"Value17": ((result[i].FEATURE17 == null || result[i].FEATURE17 == undefined) ? ('') : result[i].FEATURE17.replace(' ', '')),
			"Value18": ((result[i].FEATURE18 == null || result[i].FEATURE18 == undefined) ? ('') : result[i].FEATURE18.replace(' ', '')),
			"Value19": ((result[i].FEATURE19 == null || result[i].FEATURE19 == undefined) ? ('') : result[i].FEATURE19.replace(' ', '')),
			"Value20": ((result[i].FEATURE20 == null || result[i].FEATURE20 == undefined) ? ('') : result[i].FEATURE20.replace(' ', '')),
		};
		var specrule = obj.Design_Name;//"电机油泵组件"\电机型号\"+"\泵型号;
		var spectemp = obj.Design_Name;
		var RESISTER = "客户";
		// console.log("心经", obj.ValueE,">");	
		// console.log("真理", specrule);	
		if (specrule == null || specrule == undefined) {
			return;
		}
		if ((specrule).indexOf(obj.ValueP) != -1) {
			spectemp = spectemp.replace(obj.ValueP, obj.NameP);
			// console.log("爽E", obj.ValueE ,spectemp);						
		}
		if ((specrule).indexOf(obj.ValueE) != -1) {
			spectemp = spectemp.replace(obj.ValueE, obj.NameE);
			// console.log("爽E", obj.ValueE ,spectemp);						
		}
		if ((specrule).indexOf(obj.Value1) != -1) {

			var search = obj.Value1;
			var strtmp = spectemp;
			var rpcTxt = "";
			let strNum = obj.Name1;
			index = strtmp.lastIndexOf(search);
			rpcTxt = spectemp.substr(0, index) + strNum + spectemp.substr(index + search.length);
			spectemp = rpcTxt;

			// spectemp = spectemp.replace(obj.Value1, obj.Name1);
			// console.log("爽1", obj.Value1 ,"栗",spectemp);						
		}
		if ((specrule).indexOf(obj.Value2) != -1) {

			var search = obj.Value2;
			var strtmp = spectemp;
			var rpcTxt = "";
			let strNum = obj.Name2;
			index = strtmp.lastIndexOf(search);
			rpcTxt = spectemp.substr(0, index) + strNum + spectemp.substr(index + search.length);
			spectemp = rpcTxt;

			// spectemp = spectemp.replace(obj.Value2, obj.Name2);
			// console.log("爽2", obj.Value2, "栗",spectemp);					
		}
		if ((specrule).indexOf(obj.Value3) != -1) {

			var search = obj.Value3;
			var strtmp = spectemp;
			var rpcTxt = "";
			let strNum = obj.Name3;
			index = strtmp.lastIndexOf(search);
			rpcTxt = spectemp.substr(0, index) + strNum + spectemp.substr(index + search.length);
			spectemp = rpcTxt;

			// spectemp = spectemp.replace(obj.Value3, obj.Name3);			
			// console.log("爽3", obj.Value3, "栗",spectemp);
		}
		if ((specrule).indexOf(obj.Value4) != -1) {

			var search = obj.Value4;
			var strtmp = spectemp;
			var rpcTxt = "";
			let strNum = obj.Name4;
			index = strtmp.lastIndexOf(search);
			rpcTxt = spectemp.substr(0, index) + strNum + spectemp.substr(index + search.length);
			spectemp = rpcTxt;

			// spectemp = spectemp.replace(obj.Value4, obj.Name4);
			// console.log("爽4", obj.Value4, "栗",spectemp);					
		}
		if ((specrule).indexOf(obj.Value5) != -1) {

			var search = obj.Value5;
			var strtmp = spectemp;
			var rpcTxt = "";
			let strNum = obj.Name5;
			index = strtmp.lastIndexOf(search);
			rpcTxt = spectemp.substr(0, index) + strNum + spectemp.substr(index + search.length);
			spectemp = rpcTxt;

			// spectemp = spectemp.replace(obj.Value5, obj.Name5);
			// console.log("爽5", obj.Value5, "栗",spectemp);						
		}
		if ((specrule).indexOf(obj.Value6) != -1) {
			var search = obj.Value6;
			var strtmp = spectemp;
			var rpcTxt = "";
			let strNum = obj.Name6;
			index = strtmp.lastIndexOf(search);
			rpcTxt = spectemp.substr(0, index) + strNum + spectemp.substr(index + search.length);
			spectemp = rpcTxt;

			spectemp = spectemp.replace(obj.Value6, obj.Name6);
			// console.log("爽6", obj.Value6);						
		}
		if ((specrule).indexOf(obj.Value7) != -1) {
			var search = obj.Value7;
			var strtmp = spectemp;
			var rpcTxt = "";
			let strNum = obj.Name7;
			index = strtmp.lastIndexOf(search);
			rpcTxt = spectemp.substr(0, index) + strNum + spectemp.substr(index + search.length);
			spectemp = rpcTxt;

			spectemp = spectemp.replace(obj.Value7, obj.Name7);
			// console.log("爽7", obj.Value7);						
		}
		if ((specrule).indexOf(obj.Value8) != -1) {
			var search = obj.Value8;
			var strtmp = spectemp;
			var rpcTxt = "";
			let strNum = obj.Name8;
			index = strtmp.lastIndexOf(search);
			rpcTxt = spectemp.substr(0, index) + strNum + spectemp.substr(index + search.length);
			spectemp = rpcTxt;

			// spectemp = spectemp.replace(obj.Value8, obj.Name8);
			// console.log("爽8", obj.Value8,">");					
		}
		if ((specrule).indexOf(obj.Value9) != -1) {
			var search = obj.Value9;
			var strtmp = spectemp;
			var rpcTxt = "";
			let strNum = obj.Name9;
			index = strtmp.lastIndexOf(search);
			rpcTxt = spectemp.substr(0, index) + strNum + spectemp.substr(index + search.length);
			spectemp = rpcTxt;

			// spectemp = spectemp.replace(obj.Value9, obj.Name9);
			// console.log("爽9",obj.Value9,">");						
		}
		if ((specrule).indexOf(obj.Value10) != -1) {

			var search = obj.Value10;
			var strtmp = spectemp;
			var rpcTxt = "";
			let strNum = obj.Name10;
			index = strtmp.lastIndexOf(search);
			rpcTxt = spectemp.substr(0, index) + strNum + spectemp.substr(index + search.length);
			spectemp = rpcTxt;

			// spectemp = spectemp.replace(obj.Value10, obj.Name10);
			// console.log("爽10", obj.Value10,">");						
		}
		if ((specrule).indexOf(obj.Value11) != -1) {
			var search = obj.Value11;
			var strtmp = spectemp;
			var rpcTxt = "";
			let strNum = obj.Name11;
			index = strtmp.lastIndexOf(search);
			rpcTxt = spectemp.substr(0, index) + strNum + spectemp.substr(index + search.length);
			spectemp = rpcTxt;

			// spectemp = spectemp.replace(obj.Value11, obj.Name11);
			// console.log("爽11", obj.Value11,">");						
		}
		if ((specrule).indexOf(obj.Value12) != -1) {
			var search = obj.Value12;
			var strtmp = spectemp;
			var rpcTxt = "";
			let strNum = obj.Name12;
			index = strtmp.lastIndexOf(search);
			rpcTxt = spectemp.substr(0, index) + strNum + spectemp.substr(index + search.length);
			spectemp = rpcTxt;

			// spectemp = spectemp.replace(obj.Value12, obj.Name12);
			// console.log("爽12", obj.Value12,">");						
		}
		if ((specrule).indexOf(obj.Value13) != -1) {

			var search = obj.Value13;
			var strtmp = spectemp;
			var rpcTxt = "";
			let strNum = obj.Name13;
			index = strtmp.lastIndexOf(search);
			rpcTxt = spectemp.substr(0, index) + strNum + spectemp.substr(index + search.length);
			spectemp = rpcTxt;

			// spectemp = spectemp.replace(obj.Value13, obj.Name13);
			// console.log("爽13", spectemp);						
		}
		if ((specrule).indexOf(obj.Value14) != -1) {

			var search = obj.Value14;
			var strtmp = spectemp;
			var rpcTxt = "";
			let strNum = obj.Name14;
			index = strtmp.lastIndexOf(search);
			rpcTxt = spectemp.substr(0, index) + strNum + spectemp.substr(index + search.length);
			spectemp = rpcTxt;

			// spectemp = spectemp.replace(obj.Value14, obj.Name14);
			// console.log("爽14", spectemp);						
		}
		if ((specrule).indexOf(obj.Value15) != -1) {
			var search = obj.Value15;
			var strtmp = spectemp;
			var rpcTxt = "";
			let strNum = obj.Name15;
			index = strtmp.lastIndexOf(search);
			rpcTxt = spectemp.substr(0, index) + strNum + spectemp.substr(index + search.length);
			spectemp = rpcTxt;

			// spectemp = spectemp.replace(obj.Value15, obj.Name15);
			// console.log("爽15", spectemp);						
		}
		if ((specrule).indexOf(obj.Value16) != -1) {
			var search = obj.Value16;
			var strtmp = spectemp;
			var rpcTxt = "";
			let strNum = obj.Name16;
			index = strtmp.lastIndexOf(search);
			rpcTxt = spectemp.substr(0, index) + strNum + spectemp.substr(index + search.length);
			spectemp = rpcTxt;

			// spectemp = spectemp.replace(obj.Value16, obj.Name16);
			// console.log("爽16", spectemp);						
		}
		if ((specrule).indexOf(obj.Value17) != -1) {

			var search = obj.Value17;
			var strtmp = spectemp;
			var rpcTxt = "";
			let strNum = obj.Name17;
			index = strtmp.lastIndexOf(search);
			rpcTxt = spectemp.substr(0, index) + strNum + spectemp.substr(index + search.length);
			spectemp = rpcTxt;

			// spectemp = spectemp.replace(obj.Value17, obj.Name17);
			// console.log("爽17", spectemp);						
		}
		if ((specrule).indexOf(obj.Value18) != -1) {
			var search = obj.Value18;
			var strtmp = spectemp;
			var rpcTxt = "";
			let strNum = obj.Name18;
			index = strtmp.lastIndexOf(search);
			rpcTxt = spectemp.substr(0, index) + strNum + spectemp.substr(index + search.length);
			spectemp = rpcTxt;

			// spectemp = spectemp.replace(obj.Value18, obj.Name18);
			// console.log("爽18", spectemp);						
		}
		if ((specrule).indexOf(obj.Value19) != -1) {

			var search = obj.Value19;
			var strtmp = spectemp;
			var rpcTxt = "";
			let strNum = obj.Name19;
			index = strtmp.lastIndexOf(search);
			rpcTxt = spectemp.substr(0, index) + strNum + spectemp.substr(index + search.length);
			spectemp = rpcTxt;

			// spectemp = spectemp.replace(obj.Value19, obj.Name19);
			// console.log("爽19", spectemp);						
		}
		if ((specrule).indexOf(obj.Value20) != -1) {

			var search = obj.Value20;
			var strtmp = spectemp;
			var rpcTxt = "";
			let strNum = obj.Name20;
			index = strtmp.lastIndexOf(search);
			rpcTxt = spectemp.substr(0, index) + strNum + spectemp.substr(index + search.length);
			spectemp = rpcTxt;

			// spectemp = spectemp.replace(obj.Value20, obj.Name20);
			// console.log("爽20", spectemp);						
		}
		ret = spectemp;
		Schedobj = {
			"specrule": specrule,
			"regroup": spectemp,
		};
		CargoPaste = spectemp;
		if (i < 2) {
			   console.log("劉研",CargoPaste);
		}
	}


};