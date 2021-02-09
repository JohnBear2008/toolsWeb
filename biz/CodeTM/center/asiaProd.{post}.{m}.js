module.exports = function (sender) {
	var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
	var yjDB = global.yjRequire("yujiang.Foil").yjDB;
	var async = require("async");
	var Category = sender.req.query.Category;
	var filter = sender.req.query.filter;
	var limit = sender.req.query.limit;
	var orderBy = sender.req.query.orderBy;
	var Property = sender.req.query.Property;
	console.log("至高无上", filter);
	console.log("至高无上", limit);
	console.log("至高无上", orderBy);
	var paramList = []; 
 
	let PropList = [];
	if (Property != "" && Property != undefined) {
		PropList = Property.split('##');
		for (var ki = 0; ki < PropList.length; ki++) {
			// console.log("当头:" + (PropList[ki]));
		}
	}	 
 
	let prop_cut = "";
	let carg_cut = "";
	
	//    SELECT   A.DBID ,tbf.Design_Spec, tbf.Design_Name,  A.`Parts_Year`, A.`Parts_Rule`,  A.`Parts_Class`, 
	//    A. `Parts_Apply_Date`,  A.`Parts_Limit_Date`,  A.`Parts_Name`,  
	//    LEFT( A.`Parts_Old_Name`, 20) as Parts_Old_Name,  A.`Parts_Chi` , 
	//    A.`Property` ,  A.`Parts_Code`,  A.`Supply_ID` ,  A.`Supply_Title` ,   A.`SMT_ID` ,  A.`SMT_Title` , 
	//    CONCAT(`SMT_Title`,'/',`Supply_Title` ) as Combo_Title, `Parts_Old_Code` , 
	//   `Parts_Prop1`,  `Parts_Prop2`, `Parts_Prop3`, `Parts_Prop4`,  
	//   `Parts_Prop5`, `Parts_Prop6`, `Parts_Prop7`, `Parts_Prop8`, `Parts_Prop9`, `Parts_Prop10`,  
	//   `Parts_Prop11`, `Parts_Prop12`, `Parts_Prop13`, `Parts_Prop14`, `Parts_Prop15`, `Parts_Prop16`,  
	//   `Parts_Prop17`, `Parts_Prop18`, `Parts_Prop19`, `Parts_Prop20`, 
	//   `FEATURE_E`,  `FEATURE_F`,  `FEATURE01`,  `FEATURE02`,  `FEATURE03`,  `FEATURE04`,  `FEATURE05`,   
	//   `FEATURE06`,  `FEATURE07`,  `FEATURE08`,  `FEATURE09`,  `FEATURE10`,  `FEATURE11`,  `FEATURE12`,   
	//   `FEATURE13`,  `FEATURE14`,  `FEATURE15`,  `FEATURE16`,  `FEATURE17`,  `FEATURE18`,  `FEATURE19`,    
	//   `FEATURE20`  FROM `auto_parts` A LEFT JOIN `auto_feature` tbf  on A.Parts_Class= tbf.Parts_Class  Limit 1000

var SQLExecute =
 		"  SELECT   A.DBID ,tbf.Design_Spec, tbf.Design_Name, tbf.Parts_Rule ,tbf.Unit_C,  A.`Parts_Year`, A.`Parts_Rule`,  A.`Parts_Class`, A. `Parts_Apply_Date`,  A.`Parts_Limit_Date`,  A.`Parts_Name`,  " +
		"  LEFT( A.`Parts_Old_Name`, 20) as Parts_Old_Name,  A.`Parts_Chi` , " +
		"  A.`Property` ,  A.`Parts_Code`,  A.`Supply_ID` , A.Model , case A.Assembly  when '是' then '1' when '否' then '0' end as AssemblyTxt ,  A.`Supply_Title` ,   A.`SMT_ID` ,  A.`SMT_Title` , " +
		"  CONCAT(`SMT_Title`,'/',`Supply_Title` ) as Combo_Title, `Parts_Old_Code` , " +
		" `Parts_Prop1`,  `Parts_Prop2`, `Parts_Prop3`, `Parts_Prop4`,  " +
		" `Parts_Prop5`, `Parts_Prop6`, `Parts_Prop7`, `Parts_Prop8`, `Parts_Prop9`, `Parts_Prop10`,  " +
		" `Parts_Prop11`, `Parts_Prop12`, `Parts_Prop13`, `Parts_Prop14`, `Parts_Prop15`, `Parts_Prop16`,  " +
		" `Parts_Prop17`, `Parts_Prop18`, `Parts_Prop19`, `Parts_Prop20`, " +
		" `FEATURE_E`,  `FEATURE_F`,  `FEATURE01`,  `FEATURE02`,  `FEATURE03`,  `FEATURE04`,  `FEATURE05`,    " +
		" `FEATURE06`,  `FEATURE07`,  `FEATURE08`,  `FEATURE09`,  `FEATURE10`,  `FEATURE11`,  `FEATURE12`,    " +
		" `FEATURE13`,  `FEATURE14`,  `FEATURE15`,  `FEATURE16`,  `FEATURE17`,  `FEATURE18`,  `FEATURE19`,    " +
		" `FEATURE20`  FROM `auto_parts` A LEFT JOIN `auto_feature` tbf  on A.Parts_Class= tbf.Parts_Class   ";
      //    `auto_parts`
	//where A.Parts_Class=? 

	if (filter != "" && filter != undefined) {
		SQLExecute = SQLExecute + " WHERE " + filter;
	}
	// AddPropMater();
	if (orderBy != "" && orderBy != undefined) {
		SQLExecute = SQLExecute + " ORDER BY " + orderBy;
	}

	if (limit != "" && limit != undefined) {
		SQLExecute = SQLExecute + " LIMIT " + limit;
	}
 
	// console.log("东游:" + SQLExecute);
	HandleRecord(SQLExecute);     

	function HandleRecord(SQLExecute) {

		var banWord1 = new RegExp("delete");
		var banWord2 = new RegExp("update");
		var banWord3 = new RegExp("insert");
		var resultCheckSQL = banWord1.test(SQLExecute) || banWord2.test(SQLExecute) || banWord3.test(SQLExecute);
		var dataArr = [];
		if (resultCheckSQL) {
			//console.log("接受到含有非法关键字的SQL:"+SQL);
		} else {
			// console.log("小栗", JSON.stringify(paramList ));
			yjDBService.exec({
				sql: SQLExecute,
				parameters:paramList,
 
				rowsAsArray: false,
				success: function (data) {
					// console.log("曜子", data.length);
					for (var i = 0; i < data.length; i++) {
						HandleMe(i, data);
						HandleYu(i, data);
						if (i < 2) {
							console.log("熊田",prop_cut);
						}
						var UniqueCode = '';
						let burnList =[];
						burnList =data[i].Parts_Code.split('-');
						UniqueCode =burnList[0]+'-'+burnList[1];
						// var AssemblyTxt = '';
						// AssemblyTxt =(data[i].Assembly == '是') ? ('1') : ('0');
						 
						var obj = {
							"DBID": data[i].DBID,
							"Parts_Class": data[i].Parts_Class,
							"Design_Spec": data[i].Design_Spec,
							"Parts_Rule": data[i].Parts_Rule,
							"Unit_C": data[i].Unit_C,
							"Parts_Chi": data[i].Parts_Chi,
							"Parts_Code":  data[i].Parts_Code,
							// "UniqueCode":  UniqueCode,
							"Parts_Name": carg_cut,
							"Parts_Old_Code": data[i].Parts_Old_Code,
							"Parts_Old_Name": data[i].Parts_Old_Name,
							"Property": prop_cut,
							"Parts_Apply_Date": data[i].Parts_Apply_Date,
							"Combo_Title": data[i].Combo_Title,
							"SMT_Title": data[i].SMT_Title,
							"Supply_Title": data[i].Supply_Title,
							"Supply_ID": data[i].Supply_ID,
							"Model": data[i].Model,
							"AssemblyTxt": data[i].AssemblyTxt,
						}
						dataArr.push(obj);
					}
					sender.success(dataArr);
				},
				error: sender.error
			});
		}
	}
	function HandleYu(i, result) {

		var obj = {
			"Design_Name": result[i].Design_Name,
			"NameP": ((result[i].Supply_Title == null || result[i].Supply_Title == undefined) ? ('') : result[i].Supply_Title),
			"NameE": ((result[i].SMT_Title == null || result[i].SMT_Title == undefined) ? ('') : result[i].SMT_Title),
			"Name1": ((result[i].Parts_Prop1 == null || result[i].Parts_Prop1 == undefined) ? ('') : result[i].Parts_Prop1),
			"Name2": ((result[i].Parts_Prop2 == null || result[i].Parts_Prop2 == undefined) ? ('') : result[i].Parts_Prop2),
			"Name3": ((result[i].Parts_Prop3 == null || result[i].Parts_Prop3 == undefined) ? ('') : result[i].Parts_Prop3),
			"Name4": ((result[i].Parts_Prop4 == null || result[i].Parts_Prop4 == undefined) ? ('') : result[i].Parts_Prop4),
			"Name5": ((result[i].Parts_Prop5 == null || result[i].Parts_Prop5 == undefined) ? ('') : result[i].Parts_Prop5),
			"Name6": ((result[i].Parts_Prop6 == null || result[i].Parts_Prop6 == undefined) ? ('') : result[i].Parts_Prop6),
			"Name7": ((result[i].Parts_Prop7 == null || result[i].Parts_Prop7 == undefined) ? ('') : result[i].Parts_Prop7),
			"Name8": ((result[i].Parts_Prop8 == null || result[i].Parts_Prop8 == undefined) ? ('') : result[i].Parts_Prop8),
			"Name9": ((result[i].Parts_Prop9 == null || result[i].Parts_Prop9 == undefined) ? ('') : result[i].Parts_Prop9),
			"Name10": ((result[i].Parts_Prop10 == null || result[i].Parts_Prop10 == undefined) ? ('') : result[i].Parts_Prop10),
			"Name11": ((result[i].Parts_Prop11 == null || result[i].Parts_Prop11 == undefined) ? ('') : result[i].Parts_Prop11),
			"Name12": ((result[i].Parts_Prop12 == null || result[i].Parts_Prop12 == undefined) ? ('') : result[i].Parts_Prop12),
			"Name13": ((result[i].Parts_Prop13 == null || result[i].Parts_Prop13 == undefined) ? ('') : result[i].Parts_Prop13),
			"Name14": ((result[i].Parts_Prop14 == null || result[i].Parts_Prop14 == undefined) ? ('') : result[i].Parts_Prop14),
			"Name15": ((result[i].Parts_Prop15 == null || result[i].Parts_Prop15 == undefined) ? ('') : result[i].Parts_Prop15),
			"Name16": ((result[i].Parts_Prop16 == null || result[i].Parts_Prop16 == undefined) ? ('') : result[i].Parts_Prop16),
			"Name17": ((result[i].Parts_Prop17 == null || result[i].Parts_Prop17 == undefined) ? ('') : result[i].Parts_Prop17),
			"Name18": ((result[i].Parts_Prop18 == null || result[i].Parts_Prop18 == undefined) ? ('') : result[i].Parts_Prop18),
			"Name19": ((result[i].Parts_Prop19 == null || result[i].Parts_Prop19 == undefined) ? ('') : result[i].Parts_Prop19),
			"Name20": ((result[i].Parts_Prop20 == null || result[i].Parts_Prop20 == undefined) ? ('') : result[i].Parts_Prop20),
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
		var specrule = obj.Design_Name;//"客户&机型&客制&配件";
		var spectemp = obj.Design_Name;
		// console.log("心经", obj.ValueE,">");	
		// console.log("真理", specrule);	
		if (specrule == null || specrule == undefined) {
			return;
		}
		if ((specrule).indexOf(obj.ValueP) != -1) {
			spectemp = spectemp.replace(obj.ValueP, obj.NameP);
			// console.log("测E", obj.ValueE ,spectemp);						
		}
		if ((specrule).indexOf(obj.ValueE) != -1) {
			spectemp = spectemp.replace(obj.ValueE, obj.NameE);
			// console.log("测E", obj.ValueE ,spectemp);						
		}
		if ((specrule).indexOf(obj.Value1) != -1) {

			var search =  obj.Value1;
			var strtmp =spectemp;
			var rpcTxt ="";
			let strNum =  obj.Name1;  
			index = strtmp.lastIndexOf(search );
			rpcTxt = spectemp.substr(0,index)+strNum +spectemp.substr(index+search.length);
			spectemp =rpcTxt;

			// spectemp = spectemp.replace(obj.Value1, obj.Name1);
			// console.log("测1", obj.Value1 ,spectemp);						
		}
		if ((specrule).indexOf(obj.Value2) != -1) {

			var search =  obj.Value2;
			var strtmp =spectemp;
			var rpcTxt ="";
			let strNum =  obj.Name2;  
			index = strtmp.lastIndexOf(search );
			rpcTxt = spectemp.substr(0,index)+strNum +spectemp.substr(index+search.length);
			spectemp =rpcTxt;

			// spectemp = spectemp.replace(obj.Value2, obj.Name2);
			// console.log("测2", obj.Value2, spectemp);						
		}
		if ((specrule).indexOf(obj.Value3) != -1) {
 
			var search =  obj.Value3;
			var strtmp =spectemp;
			var rpcTxt ="";
			let strNum =  obj.Name3;
			index = strtmp.lastIndexOf(search );
			rpcTxt = spectemp.substr(0,index)+strNum +spectemp.substr(index+search.length);
			spectemp =rpcTxt;

			// spectemp = spectemp.replace(obj.Value3, obj.Name3);			
			// console.log("测3", obj.Value3 ,"亞自",spectemp);						
		}
		if ((specrule).indexOf(obj.Value4) != -1) {

			var search =  obj.Value4;
			var strtmp =spectemp;
			var rpcTxt ="";
			let strNum =  obj.Name4;  
			index = strtmp.lastIndexOf(search );
			rpcTxt = spectemp.substr(0,index)+strNum +spectemp.substr(index+search.length);
			spectemp =rpcTxt;

			// spectemp = spectemp.replace(obj.Value4, obj.Name4);
			// console.log("测4", obj.Value4);						
		}
		if ((specrule).indexOf(obj.Value5) != -1) {

			var search =  obj.Value5;
			var strtmp =spectemp;
			var rpcTxt ="";
			let strNum =  obj.Name5;  
			index = strtmp.lastIndexOf(search );
			rpcTxt = spectemp.substr(0,index)+strNum +spectemp.substr(index+search.length);
			spectemp =rpcTxt;

			// spectemp = spectemp.replace(obj.Value5, obj.Name5);
			// console.log("测5", obj.Value5);							
		}
		if ((specrule).indexOf(obj.Value6) != -1) {
			var search =  obj.Value6;
			var strtmp =spectemp;
			var rpcTxt ="";
			let strNum =  obj.Name6;  
			index = strtmp.lastIndexOf(search );
			rpcTxt = spectemp.substr(0,index)+strNum +spectemp.substr(index+search.length);
			spectemp =rpcTxt;

			// spectemp = spectemp.replace(obj.Value6, obj.Name6);
			// console.log("测6", obj.Value6);						
		}
		if ((specrule).indexOf(obj.Value7) != -1) {
			var search =  obj.Value7;
			var strtmp =spectemp;
			var rpcTxt ="";
			let strNum =  obj.Name7;  
			index = strtmp.lastIndexOf(search );
			rpcTxt = spectemp.substr(0,index)+strNum +spectemp.substr(index+search.length);
			spectemp =rpcTxt;

			// spectemp = spectemp.replace(obj.Value7, obj.Name7);
			// console.log("测7", obj.Value7);						
		}
		if ((specrule).indexOf(obj.Value8) != -1) {
			var search =  obj.Value8;
			var strtmp =spectemp;
			var rpcTxt ="";
			let strNum =  obj.Name8;  
			index = strtmp.lastIndexOf(search );
			rpcTxt = spectemp.substr(0,index)+strNum +spectemp.substr(index+search.length);
			spectemp =rpcTxt;

			// spectemp = spectemp.replace(obj.Value8, obj.Name8);
			// console.log("测8", obj.Value8,">");					
		}
		if ((specrule).indexOf(obj.Value9) != -1) {
			var search =  obj.Value9;
			var strtmp =spectemp;
			var rpcTxt ="";
			let strNum =  obj.Name9;  
			index = strtmp.lastIndexOf(search );
			rpcTxt = spectemp.substr(0,index)+strNum +spectemp.substr(index+search.length);
			spectemp =rpcTxt;

			// spectemp = spectemp.replace(obj.Value9, obj.Name9);
			// console.log("测9",obj.Value9,">");						
		}
		if ((specrule).indexOf(obj.Value10) != -1) {

			var search =  obj.Value10;
			var strtmp =spectemp;
			var rpcTxt ="";
			let strNum =  obj.Name10;  
			index = strtmp.lastIndexOf(search );
			rpcTxt = spectemp.substr(0,index)+strNum +spectemp.substr(index+search.length);
			spectemp =rpcTxt;

			// spectemp = spectemp.replace(obj.Value10, obj.Name10);
			// console.log("测10", obj.Value10,">");						
		}
		if ((specrule).indexOf(obj.Value11) != -1) {
			var search =  obj.Value11;
			var strtmp =spectemp;
			var rpcTxt ="";
			let strNum =  obj.Name11;  
			index = strtmp.lastIndexOf(search );
			rpcTxt = spectemp.substr(0,index)+strNum +spectemp.substr(index+search.length);
			spectemp =rpcTxt;

			// spectemp = spectemp.replace(obj.Value11, obj.Name11);
			// console.log("测11", obj.Value11,">");						
		}
		if ((specrule).indexOf(obj.Value12) != -1) {
			var search =  obj.Value12;
			var strtmp =spectemp;
			var rpcTxt ="";
			let strNum =  obj.Name12;  
			index = strtmp.lastIndexOf(search );
			rpcTxt = spectemp.substr(0,index)+strNum +spectemp.substr(index+search.length);
			spectemp =rpcTxt;

			// spectemp = spectemp.replace(obj.Value12, obj.Name12);
			// console.log("测12", obj.Value12,">");						
		}
		if ((specrule).indexOf(obj.Value13) != -1) {

			var search =  obj.Value13;
			var strtmp =spectemp;
			var rpcTxt ="";
			let strNum =  obj.Name13;  
			index = strtmp.lastIndexOf(search );
			rpcTxt = spectemp.substr(0,index)+strNum +spectemp.substr(index+search.length);
			spectemp =rpcTxt;

			// spectemp = spectemp.replace(obj.Value13, obj.Name13);
			// console.log("测13", spectemp);						
		}
		if ((specrule).indexOf(obj.Value14) != -1) {

			var search =  obj.Value14;
			var strtmp =spectemp;
			var rpcTxt ="";
			let strNum =  obj.Name14;  
			index = strtmp.lastIndexOf(search );
			rpcTxt = spectemp.substr(0,index)+strNum +spectemp.substr(index+search.length);
			spectemp =rpcTxt;

			// spectemp = spectemp.replace(obj.Value14, obj.Name14);
			// console.log("测14", spectemp);						
		}
		if ((specrule).indexOf(obj.Value15) != -1) {
			var search =  obj.Value15;
			var strtmp =spectemp;
			var rpcTxt ="";
			let strNum =  obj.Name15;  
			index = strtmp.lastIndexOf(search );
			rpcTxt = spectemp.substr(0,index)+strNum +spectemp.substr(index+search.length);
			spectemp =rpcTxt;

			// spectemp = spectemp.replace(obj.Value15, obj.Name15);
			// console.log("测15", spectemp);						
		}
		if ((specrule).indexOf(obj.Value16) != -1) {
			var search =  obj.Value16;
			var strtmp =spectemp;
			var rpcTxt ="";
			let strNum =  obj.Name16;  
			index = strtmp.lastIndexOf(search );
			rpcTxt = spectemp.substr(0,index)+strNum +spectemp.substr(index+search.length);
			spectemp =rpcTxt;

			// spectemp = spectemp.replace(obj.Value16, obj.Name16);
			// console.log("测16", spectemp);						
		}
		if ((specrule).indexOf(obj.Value17) != -1) {

			var search =  obj.Value17;
			var strtmp =spectemp;
			var rpcTxt ="";
			let strNum =  obj.Name17;  
			index = strtmp.lastIndexOf(search );
			rpcTxt = spectemp.substr(0,index)+strNum +spectemp.substr(index+search.length);
			spectemp =rpcTxt;

			// spectemp = spectemp.replace(obj.Value17, obj.Name17);
			// console.log("测17", spectemp);						
		}
		if ((specrule).indexOf(obj.Value18) != -1) {
			var search =  obj.Value18;
			var strtmp =spectemp;
			var rpcTxt ="";
			let strNum =  obj.Name18;  
			index = strtmp.lastIndexOf(search );
			rpcTxt = spectemp.substr(0,index)+strNum +spectemp.substr(index+search.length);
			spectemp =rpcTxt;

			// spectemp = spectemp.replace(obj.Value18, obj.Name18);
			// console.log("测18", spectemp);						
		}
		if ((specrule).indexOf(obj.Value19) != -1) {

			var search =  obj.Value19;
			var strtmp =spectemp;
			var rpcTxt ="";
			let strNum =  obj.Name19;  
			index = strtmp.lastIndexOf(search );
			rpcTxt = spectemp.substr(0,index)+strNum +spectemp.substr(index+search.length);
			spectemp =rpcTxt;

			// spectemp = spectemp.replace(obj.Value19, obj.Name19);
			// console.log("测19", spectemp);						
		}
		if ((specrule).indexOf(obj.Value20) != -1) {

			var search =  obj.Value20;
			var strtmp =spectemp;
			var rpcTxt ="";
			let strNum =  obj.Name20;  
			index = strtmp.lastIndexOf(search );
			rpcTxt = spectemp.substr(0,index)+strNum +spectemp.substr(index+search.length);
			spectemp =rpcTxt;

			// spectemp = spectemp.replace(obj.Value20, obj.Name20);
			// console.log("测20", spectemp);						
		}
		ret = spectemp;
		Schedobj = {
			"specrule": specrule,
			"regroup": spectemp,
		};
		carg_cut = spectemp;
	}
	function HandleMe(i, result) {

		var obj = {
			"Design_Spec": result[i].Design_Spec,
			"NameP": ((result[i].Supply_Title == null || result[i].Supply_Title == undefined) ? ('') : result[i].Supply_Title),
			"NameE": ((result[i].SMT_Title == null || result[i].SMT_Title == undefined) ? ('') : result[i].SMT_Title),
			"Name1": ((result[i].Parts_Prop1 == null || result[i].Parts_Prop1 == undefined) ? ('') : result[i].Parts_Prop1),
			"Name2": ((result[i].Parts_Prop2 == null || result[i].Parts_Prop2 == undefined) ? ('') : result[i].Parts_Prop2),
			"Name3": ((result[i].Parts_Prop3 == null || result[i].Parts_Prop3 == undefined) ? ('') : result[i].Parts_Prop3),
			"Name4": ((result[i].Parts_Prop4 == null || result[i].Parts_Prop4 == undefined) ? ('') : result[i].Parts_Prop4),
			"Name5": ((result[i].Parts_Prop5 == null || result[i].Parts_Prop5 == undefined) ? ('') : result[i].Parts_Prop5),
			"Name6": ((result[i].Parts_Prop6 == null || result[i].Parts_Prop6 == undefined) ? ('') : result[i].Parts_Prop6),
			"Name7": ((result[i].Parts_Prop7 == null || result[i].Parts_Prop7 == undefined) ? ('') : result[i].Parts_Prop7),
			"Name8": ((result[i].Parts_Prop8 == null || result[i].Parts_Prop8 == undefined) ? ('') : result[i].Parts_Prop8),
			"Name9": ((result[i].Parts_Prop9 == null || result[i].Parts_Prop9 == undefined) ? ('') : result[i].Parts_Prop9),
			"Name10": ((result[i].Parts_Prop10 == null || result[i].Parts_Prop10 == undefined) ? ('') : result[i].Parts_Prop10),
			"Name11": ((result[i].Parts_Prop11 == null || result[i].Parts_Prop11 == undefined) ? ('') : result[i].Parts_Prop11),
			"Name12": ((result[i].Parts_Prop12 == null || result[i].Parts_Prop12 == undefined) ? ('') : result[i].Parts_Prop12),
			"Name13": ((result[i].Parts_Prop13 == null || result[i].Parts_Prop13 == undefined) ? ('') : result[i].Parts_Prop13),
			"Name14": ((result[i].Parts_Prop14 == null || result[i].Parts_Prop14 == undefined) ? ('') : result[i].Parts_Prop14),
			"Name15": ((result[i].Parts_Prop15 == null || result[i].Parts_Prop15 == undefined) ? ('') : result[i].Parts_Prop15),
			"Name16": ((result[i].Parts_Prop16 == null || result[i].Parts_Prop16 == undefined) ? ('') : result[i].Parts_Prop16),
			"Name17": ((result[i].Parts_Prop17 == null || result[i].Parts_Prop17 == undefined) ? ('') : result[i].Parts_Prop17),
			"Name18": ((result[i].Parts_Prop18 == null || result[i].Parts_Prop18 == undefined) ? ('') : result[i].Parts_Prop18),
			"Name19": ((result[i].Parts_Prop19 == null || result[i].Parts_Prop19 == undefined) ? ('') : result[i].Parts_Prop19),
			"Name20": ((result[i].Parts_Prop20 == null || result[i].Parts_Prop20 == undefined) ? ('') : result[i].Parts_Prop20),
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
		var specrule = obj.Design_Spec;//"客户&机型&客制&配件";  "代工客户/客户型号/客户料号"
		var spectemp = obj.Design_Spec;
		var RESISTER = "客户";
		// console.log("心经", obj.ValueE,">");	
		// console.log("真理", specrule);	
		if (specrule == null || specrule == undefined) {
			return;
		}
		if ((specrule).indexOf(obj.ValueP) != -1) {
			spectemp = spectemp.replace(obj.ValueP, obj.NameP);
			// console.log("测E", obj.ValueE ,spectemp);						
		}
		if ((specrule).indexOf(obj.ValueE) != -1) {
			spectemp = spectemp.replace(obj.ValueE, obj.NameE);
			// console.log("测E", obj.ValueE ,spectemp);						
		}
		if ((specrule).indexOf(obj.Value1) != -1) {

			var search =  obj.Value1;
			var strtmp =spectemp;
			var rpcTxt ="";
			let strNum =  obj.Name1;  
			index = strtmp.lastIndexOf(search );
			rpcTxt = spectemp.substr(0,index)+strNum +spectemp.substr(index+search.length);
			spectemp =rpcTxt;

			// spectemp = spectemp.replace(obj.Value1, obj.Name1);
			// console.log("测1", obj.Value1 ,spectemp);						
		}
		if ((specrule).indexOf(obj.Value2) != -1) {

			var search =  obj.Value2;
			var strtmp =spectemp;
			var rpcTxt ="";
			let strNum =  obj.Name2;  
			index = strtmp.lastIndexOf(search );
			rpcTxt = spectemp.substr(0,index)+strNum +spectemp.substr(index+search.length);
			spectemp =rpcTxt;

			// spectemp = spectemp.replace(obj.Value2, obj.Name2);
			// console.log("测2", obj.Value2, spectemp);						
		}
		if ((specrule).indexOf(obj.Value3) != -1) {
 
			var search =  obj.Value3;
			var strtmp =spectemp;
			var rpcTxt ="";
			let strNum =  obj.Name3;
			index = strtmp.lastIndexOf(search );
			rpcTxt = spectemp.substr(0,index)+strNum +spectemp.substr(index+search.length);
			spectemp =rpcTxt;

			// spectemp = spectemp.replace(obj.Value3, obj.Name3);			
			// console.log("测3", obj.Value3 ,"亞自",spectemp);						
		}
		if ((specrule).indexOf(obj.Value4) != -1) {

			var search =  obj.Value4;
			var strtmp =spectemp;
			var rpcTxt ="";
			let strNum =  obj.Name4;  
			index = strtmp.lastIndexOf(search );
			rpcTxt = spectemp.substr(0,index)+strNum +spectemp.substr(index+search.length);
			spectemp =rpcTxt;

			// spectemp = spectemp.replace(obj.Value4, obj.Name4);
			// console.log("测4", obj.Value4);						
		}
		if ((specrule).indexOf(obj.Value5) != -1) {

			var search =  obj.Value5;
			var strtmp =spectemp;
			var rpcTxt ="";
			let strNum =  obj.Name5;  
			index = strtmp.lastIndexOf(search );
			rpcTxt = spectemp.substr(0,index)+strNum +spectemp.substr(index+search.length);
			spectemp =rpcTxt;

			// spectemp = spectemp.replace(obj.Value5, obj.Name5);
			// console.log("测5", obj.Value5);							
		}
		if ((specrule).indexOf(obj.Value6) != -1) {
			var search =  obj.Value6;
			var strtmp =spectemp;
			var rpcTxt ="";
			let strNum =  obj.Name6;  
			index = strtmp.lastIndexOf(search );
			rpcTxt = spectemp.substr(0,index)+strNum +spectemp.substr(index+search.length);
			spectemp =rpcTxt;

			// spectemp = spectemp.replace(obj.Value6, obj.Name6);
			// console.log("测6", obj.Value6);						
		}
		if ((specrule).indexOf(obj.Value7) != -1) {
			var search =  obj.Value7;
			var strtmp =spectemp;
			var rpcTxt ="";
			let strNum =  obj.Name7;  
			index = strtmp.lastIndexOf(search );
			rpcTxt = spectemp.substr(0,index)+strNum +spectemp.substr(index+search.length);
			spectemp =rpcTxt;

			// spectemp = spectemp.replace(obj.Value7, obj.Name7);
			// console.log("测7", obj.Value7,"化 ",spectemp);						
		}
		if ((specrule).indexOf(obj.Value8) != -1) {
			var search =  obj.Value8;
			var strtmp =spectemp;
			var rpcTxt ="";
			let strNum =  obj.Name8;  
			index = strtmp.lastIndexOf(search );
			rpcTxt = spectemp.substr(0,index)+strNum +spectemp.substr(index+search.length);
			spectemp =rpcTxt;

			// spectemp = spectemp.replace(obj.Value8, obj.Name8);
			// console.log("测8", obj.Value8,">");					
		}
		if ((specrule).indexOf(obj.Value9) != -1) {
			var search =  obj.Value9;
			var strtmp =spectemp;
			var rpcTxt ="";
			let strNum =  obj.Name9;  
			index = strtmp.lastIndexOf(search );
			rpcTxt = spectemp.substr(0,index)+strNum +spectemp.substr(index+search.length);
			spectemp =rpcTxt;

			// spectemp = spectemp.replace(obj.Value9, obj.Name9);
			// console.log("测9",obj.Value9,">");						
		}
		if ((specrule).indexOf(obj.Value10) != -1) {

			var search =  obj.Value10;
			var strtmp =spectemp;
			var rpcTxt ="";
			let strNum =  obj.Name10;  
			index = strtmp.lastIndexOf(search );
			rpcTxt = spectemp.substr(0,index)+strNum +spectemp.substr(index+search.length);
			spectemp =rpcTxt;

			// spectemp = spectemp.replace(obj.Value10, obj.Name10);
			// console.log("测10", obj.Value10,">");						
		}
		if ((specrule).indexOf(obj.Value11) != -1) {
			var search =  obj.Value11;
			var strtmp =spectemp;
			var rpcTxt ="";
			let strNum =  obj.Name11;  
			index = strtmp.lastIndexOf(search );
			rpcTxt = spectemp.substr(0,index)+strNum +spectemp.substr(index+search.length);
			spectemp =rpcTxt;

			// spectemp = spectemp.replace(obj.Value11, obj.Name11);
			// console.log("测11", obj.Value11,">");						
		}
		if ((specrule).indexOf(obj.Value12) != -1) {
			var search =  obj.Value12;
			var strtmp =spectemp;
			var rpcTxt ="";
			let strNum =  obj.Name12;  
			index = strtmp.lastIndexOf(search );
			rpcTxt = spectemp.substr(0,index)+strNum +spectemp.substr(index+search.length);
			spectemp =rpcTxt;

			// spectemp = spectemp.replace(obj.Value12, obj.Name12);
			// console.log("测12", obj.Value12,">");						
		}
		if ((specrule).indexOf(obj.Value13) != -1) {

			var search =  obj.Value13;
			var strtmp =spectemp;
			var rpcTxt ="";
			let strNum =  obj.Name13;  
			index = strtmp.lastIndexOf(search );
			rpcTxt = spectemp.substr(0,index)+strNum +spectemp.substr(index+search.length);
			spectemp =rpcTxt;

			// spectemp = spectemp.replace(obj.Value13, obj.Name13);
			// console.log("测13", spectemp);						
		}
		if ((specrule).indexOf(obj.Value14) != -1) {

			var search =  obj.Value14;
			var strtmp =spectemp;
			var rpcTxt ="";
			let strNum =  obj.Name14;  
			index = strtmp.lastIndexOf(search );
			rpcTxt = spectemp.substr(0,index)+strNum +spectemp.substr(index+search.length);
			spectemp =rpcTxt;

			// spectemp = spectemp.replace(obj.Value14, obj.Name14);
			// console.log("测14", spectemp);						
		}
		if ((specrule).indexOf(obj.Value15) != -1) {
			var search =  obj.Value15;
			var strtmp =spectemp;
			var rpcTxt ="";
			let strNum =  obj.Name15;  
			index = strtmp.lastIndexOf(search );
			rpcTxt = spectemp.substr(0,index)+strNum +spectemp.substr(index+search.length);
			spectemp =rpcTxt;

			// spectemp = spectemp.replace(obj.Value15, obj.Name15);
			// console.log("测15", spectemp);						
		}
		if ((specrule).indexOf(obj.Value16) != -1) {
			var search =  obj.Value16;
			var strtmp =spectemp;
			var rpcTxt ="";
			let strNum =  obj.Name16;  
			index = strtmp.lastIndexOf(search );
			rpcTxt = spectemp.substr(0,index)+strNum +spectemp.substr(index+search.length);
			spectemp =rpcTxt;

			// spectemp = spectemp.replace(obj.Value16, obj.Name16);
			// console.log("测16", spectemp);						
		}
		if ((specrule).indexOf(obj.Value17) != -1) {

			var search =  obj.Value17;
			var strtmp =spectemp;
			var rpcTxt ="";
			let strNum =  obj.Name17;  
			index = strtmp.lastIndexOf(search );
			rpcTxt = spectemp.substr(0,index)+strNum +spectemp.substr(index+search.length);
			spectemp =rpcTxt;

			// spectemp = spectemp.replace(obj.Value17, obj.Name17);
			// console.log("测17", spectemp);						
		}
		if ((specrule).indexOf(obj.Value18) != -1) {
			var search =  obj.Value18;
			var strtmp =spectemp;
			var rpcTxt ="";
			let strNum =  obj.Name18;  
			index = strtmp.lastIndexOf(search );
			rpcTxt = spectemp.substr(0,index)+strNum +spectemp.substr(index+search.length);
			spectemp =rpcTxt;

			// spectemp = spectemp.replace(obj.Value18, obj.Name18);
			// console.log("测18", spectemp);						
		}
		if ((specrule).indexOf(obj.Value19) != -1) {

			var search =  obj.Value19;
			var strtmp =spectemp;
			var rpcTxt ="";
			let strNum =  obj.Name19;  
			index = strtmp.lastIndexOf(search );
			rpcTxt = spectemp.substr(0,index)+strNum +spectemp.substr(index+search.length);
			spectemp =rpcTxt;

			// spectemp = spectemp.replace(obj.Value19, obj.Name19);
			// console.log("测19", spectemp);						
		}
		if ((specrule).indexOf(obj.Value20) != -1) {

			var search =  obj.Value20;
			var strtmp =spectemp;
			var rpcTxt ="";
			let strNum =  obj.Name20;  
			index = strtmp.lastIndexOf(search );
			rpcTxt = spectemp.substr(0,index)+strNum +spectemp.substr(index+search.length);
			spectemp =rpcTxt;

			// spectemp = spectemp.replace(obj.Value20, obj.Name20);
			// console.log("测20", spectemp);						
		}
		ret = spectemp;
		Schedobj = {
			"specrule": specrule,
			"regroup": spectemp,
		};
		prop_cut = spectemp;
		if (i < 2) {
			//    console.log("派客",prop_cut);
		}
	}
	function AddPropMater() {
		if (PropList[0] != "" && PropList[0] != "null" && PropList[0] != "缺省" && PropList[0] != undefined && PropList[0].length > 1) {
			SQLExecute = SQLExecute + " and A.Parts_Prop1= ? ";
			paramList.push(PropList[0]);
			console.log("0罡精:" + PropList[0]);
		}
		if (PropList[1] != "" && PropList[1] != "null" && PropList[1] != "缺省" && PropList[1] != undefined && PropList[1].length > 1) {
			SQLExecute = SQLExecute + " and A.Parts_Prop2= ? ";
			paramList.push(PropList[1]);
			console.log("1罡精:" + PropList[1]);
		}
		if (PropList[2] != "" && PropList[2] != "null" && PropList[2] != "缺省" && PropList[2] != undefined && PropList[2].length > 1) {
			SQLExecute = SQLExecute + " and A.Parts_Prop3= ? ";
			paramList.push(PropList[2]);
			console.log("2罡精:" + PropList[2]);
		}
		if (PropList[3] != "" && PropList[3] != "null" && PropList[3] != "缺省" && PropList[3] != undefined && PropList[3].length > 1) {
			SQLExecute = SQLExecute + " and A.Parts_Prop4= ? ";
			paramList.push(PropList[3]);
			console.log("3罡精:" + PropList[3]);
		}
		if (PropList[4] != "" && PropList[4] != "null" && PropList[4] != "缺省" && PropList[4] != undefined && PropList[4].length > 1) {
			SQLExecute = SQLExecute + " and A.Parts_Prop5= ? ";
			paramList.push(PropList[4]);
			console.log("4罡精:" + PropList[4]);
		}
		if (PropList[5] != "" && PropList[5] != "null" && PropList[5] != "缺省" && PropList[5] != undefined && PropList[5].length > 1) {
			SQLExecute = SQLExecute + " and A.Parts_Prop6= ? ";
			paramList.push(PropList[5]);
			console.log("5罡精:" + PropList[5]);
		}
		if (PropList[6] != "" && PropList[6] != "null" && PropList[6] != "缺省" && PropList[6] != undefined && PropList[6].length > 1) {
			SQLExecute = SQLExecute + " and A.Parts_Prop7= ? ";
			paramList.push(PropList[6]);
			console.log("6罡精:" + PropList[6]);
		}
		if (PropList[7] != "" && PropList[7] != "null" && PropList[7] != "缺省" && PropList[7] != undefined && PropList[7].length > 1) {
			SQLExecute = SQLExecute + " and A.Parts_Prop8= ? ";
			paramList.push(PropList[7]);
			console.log("7罡精:" + PropList[7]);
		}
		if (PropList[8] != "" && PropList[8] != "null" && PropList[8] != "缺省" && PropList[8] != undefined && PropList[8].length > 1) {
			SQLExecute = SQLExecute + " and A.Parts_Prop9= ? ";
			paramList.push(PropList[8]);
			console.log("8罡精:" + PropList[8]);
		}
		if (PropList[9] != "" && PropList[9] != "null" && PropList[9] != "缺省" && PropList[9] != undefined && PropList[9].length > 1) {
			SQLExecute = SQLExecute + " and A.Parts_Prop10= ? ";
			paramList.push(PropList[9]);
			console.log("9罡精:" + PropList[9]);
		}
		if (PropList[10] != "" && PropList[10] != "null" && PropList[10] != "缺省" && PropList[10] != undefined && PropList[10].length > 1) {
			SQLExecute = SQLExecute + " and A.Parts_Prop11= ? ";
			paramList.push(PropList[10]);
			console.log("10罡精:" + PropList[10]);
		}
		if (PropList[11] != "" && PropList[11] != "null" && PropList[11] != "缺省" && PropList[11] != undefined && PropList[11].length > 1) {
			SQLExecute = SQLExecute + " and A.Parts_Prop12= ? ";
			paramList.push(PropList[11]);
			console.log("11罡精:" + PropList[11]);
		}
		if (PropList[12] != "" && PropList[12] != "null" && PropList[12] != "缺省" && PropList[12] != undefined && PropList[12].length > 1) {
			SQLExecute = SQLExecute + " and A.Parts_Prop13= ? ";
			paramList.push(PropList[12]);
			console.log("12罡精:" + PropList[12]);
		}
		if (PropList[13] != "" && PropList[13] != "null" && PropList[13] != "缺省" && PropList[13] != undefined && PropList[13].length > 1) {
			SQLExecute = SQLExecute + " and A.Parts_Prop14= ? ";
			paramList.push(PropList[13]);
			console.log("13罡精:" + PropList[13]);
		}
		if (PropList[14] != "" && PropList[14] != "null" && PropList[14] != "缺省" && PropList[14] != undefined && PropList[14].length > 1) {
			SQLExecute = SQLExecute + " and A.Parts_Prop15= ? ";
			paramList.push(PropList[14]);
			console.log("14罡精:" + PropList[14]);
		}
		if (PropList[15] != "" && PropList[15] != "null" && PropList[15] != "缺省" && PropList[15] != undefined && PropList[15].length > 1) {
			SQLExecute = SQLExecute + " and A.Parts_Prop16= ? ";
			paramList.push(PropList[15]);
			console.log("15罡精:" + PropList[15]);
		}
		if (PropList[16] != "" && PropList[16] != "null" && PropList[16] != "缺省" && PropList[16] != undefined && PropList[16].length > 1) {
			SQLExecute = SQLExecute + " and A.Parts_Prop17= ? ";
			paramList.push(PropList[16]);
			console.log("16罡精:" + PropList[16]);
		}
		if (PropList[17] != "" && PropList[17] != "null" && PropList[17] != "缺省" && PropList[17] != undefined && PropList[17].length > 1) {
			SQLExecute = SQLExecute + " and A.Parts_Prop18= ? ";
			paramList.push(PropList[17]);
			console.log("17罡精:" + PropList[17]);
		}
		if (PropList[18] != "" && PropList[18] != "null" && PropList[18] != "缺省" && PropList[18] != undefined && PropList[18].length > 1) {
			SQLExecute = SQLExecute + " and A.Parts_Prop19= ? ";
			paramList.push(PropList[18]);
			console.log("18罡精:" + PropList[18]);
		}
		if (PropList[19] != "" && PropList[19] != "null" && PropList[19] != "缺省" && PropList[19] != undefined && PropList[19].length > 1) {
			SQLExecute = SQLExecute + " and A.Parts_Prop20= ? ";
			paramList.push(PropList[19]);
			console.log("19罡精:" + PropList[19]);
		}
	}
	function nulReplaceNum(passTxt) {
		var ret = '';
		ret = (passTxt == null || passTxt == undefined) ? ('NA') : passTxt;
		return ret;
	}
	function nulReplaceTxt(passTxt) {
		var ret = '';
		ret = (passTxt == null || passTxt == undefined) ? ('缺省') : passTxt;
		return ret;
	}

};
