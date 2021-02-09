require("../../client/js/Date.js");
 


module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
    var DBTable=sender.req.query.DBTable;  
    var DBID=sender.req.query.DBID;  
    var filter=sender.req.query.filter; 
    var orderBy=sender.req.query.orderBy; 
    var limit=sender.req.query.limit; 
    var capacity=sender.req.query.capacity; 
    var Schedobj={};
   var param1="";  
   var param2="";  
   var param3="";  
   var param4="";  
   let prop_cut="";
   console.log("西游:"+orderBy);
   var SQLExecute= 
   // "SELECT tbb.DBID,tsu.Supp_Name , `BILL_ID`, `Parts_Year`, `Parts_Rule`, `Parts_Class`, `Parts_Apply_Date`, `Parts_Limit_Date`, `Parts_Name`,  "+
   // " LEFT(`Parts_Old_Name`, 20) as Parts_Old_Name, `Parts_Chi`,  case Parts_Status  when 1 then '正常' when 2 then '报废申请中' when 3 then '修改申请中' end as  Parts_Status, `Staff`,  `Property` , `Parts_Code`, "+ 
   // " `Supply_ID` , `Supply_Title` ,  `SMT_ID` , `SMT_Title` , CONCAT(`SMT_Title`,'/',`Supply_Title` ) as Combo_Title, `Parts_Old_Code` FROM `auto_parts` tbb LEFT JOIN auto_supplier tsu on tsu.Supp_CID=tbb.Supply_ID where Parts_Class='A2' limit 1000";
"  SELECT  A.DBID ,tbf.Design_Spec, A.`BILL_ID`, A.`Parts_Year`, A.`Parts_Rule`,  A.`Parts_Class`, A. `Parts_Apply_Date`,  A.`Parts_Limit_Date`,  A.`Parts_Name`,  "+
"  LEFT( A.`Parts_Old_Name`, 20) as Parts_Old_Name,  A.`Parts_Chi`,  case  A.Parts_Status  when 1 then '正常' when 2 then '报废申请中' "+
"  when 3 then '修改申请中' end as  Parts_Status, "+
"  A.`Staff`,   A.`Property` ,  A.`Parts_Code`,  A.`Supply_ID` ,  A.`Supply_Title` ,   A.`SMT_ID` ,  A.`SMT_Title` , "+
"  CONCAT(`SMT_Title`,'/',`Supply_Title` ) as Combo_Title, `Parts_Old_Code` , "+
" `Parts_Prop1`,  `Parts_Prop2`, `Parts_Prop3`, `Parts_Prop4`,  "+
" `Parts_Prop5`, `Parts_Prop6`, `Parts_Prop7`, `Parts_Prop8`, `Parts_Prop9`, `Parts_Prop10`,  "+  
" `Parts_Prop11`, `Parts_Prop12`, `Parts_Prop13`, `Parts_Prop14`, `Parts_Prop15`, `Parts_Prop16`,  "+
" `Parts_Prop17`, `Parts_Prop18`, `Parts_Prop19`, `Parts_Prop20`, "+
" `FEATURE_E`,  `FEATURE_F`,  `FEATURE01`,  `FEATURE02`,  `FEATURE03`,  `FEATURE04`,  `FEATURE05`,    "+
" `FEATURE06`,  `FEATURE07`,  `FEATURE08`,  `FEATURE09`,  `FEATURE10`,  `FEATURE11`,  `FEATURE12`,    "+
" `FEATURE13`,  `FEATURE14`,  `FEATURE15`,  `FEATURE16`,  `FEATURE17`,  `FEATURE18`,  `FEATURE19`,    "+
" `FEATURE20`  FROM `auto_parts` A LEFT JOIN `auto_feature` tbf  on A.Parts_Class= tbf.Parts_Class  " ;
//where A.Parts_Class=? 
  
     if(DBID!=""&&DBID!=undefined){
	   SQLExecute=SQLExecute+" WHERE A.DBID="+DBID;
	}

	if(filter!=""&&filter!=undefined){
		SQLExecute=SQLExecute+" WHERE "+filter;
	}

	if(orderBy!=""&&orderBy!=undefined){
		SQLExecute=SQLExecute+" ORDER BY "+orderBy;
	}

	if(limit!=""&&limit!=undefined){
		SQLExecute=SQLExecute+" LIMIT "+limit;
	}

	if(capacity!=""&&capacity!=undefined){
		SQLExecute=SQLExecute+capacity;
	}
	HandleRecord(SQLExecute);    //,"BA1-ALK0003-A05"

    function HandleRecord( SQLExecute   ){
				 
	//   主控器 714A4P1S6 NA NA
// 	SELECT  `BILL_ID`, A.`Parts_Year`, A.`Parts_Rule`,  A.`Parts_Class`, A. `Parts_Apply_Date`,  A.`Parts_Limit_Date`,  A.`Parts_Name`,  
// 	LEFT( A.`Parts_Old_Name`, 20) as Parts_Old_Name,  A.`Parts_Chi`,  case  A.Parts_Status  when 1 then '正常' when 2 then '报废申请中'
// 	 when 3 then '修改申请中' end as  Parts_Status,
// 	A.`Staff`,   A.`Property` ,  A.`Parts_Code`,  A.`Supply_ID` ,  A.`Supply_Title` ,   A.`SMT_ID` ,  A.`SMT_Title` ,
//      CONCAT(`SMT_Title`,'/',`Supply_Title` ) as Combo_Title, `Parts_Old_Code` ,
//      `FEATURE_E`,  `FEATURE_F`,  `FEATURE01`,  `FEATURE02`,  `FEATURE03`,  `FEATURE04`,  `FEATURE05`,   
//    `FEATURE06`,  `FEATURE07`,  `FEATURE08`,  `FEATURE09`,  `FEATURE10`,  `FEATURE11`,  `FEATURE12`,   
//    `FEATURE13`,  `FEATURE14`,  `FEATURE15`,  `FEATURE16`,  `FEATURE17`,  `FEATURE18`,  `FEATURE19`,   
//    `FEATURE20`  FROM `auto_parts` A LEFT JOIN `auto_feature` tbf  on A.Parts_Class= tbf.Parts_Class 
//      where A.Parts_Class='A2' limit 1000

				 //选择执行的SQL语句
				 
				   var banWord1 = new RegExp("delete");
				   var banWord2 = new RegExp("update");
				   var banWord3 = new RegExp("insert");
				   var resultCheckSQL = banWord1.test(SQLExecute)||banWord2.test(SQLExecute)||banWord3.test(SQLExecute);
			   
				   var dataArr=[];
				 if(resultCheckSQL){
			   //    	console.log("接受到含有非法关键字的SQL:"+SQL);
				 }else{
					  yjDBService.exec({
						   sql: SQLExecute,
						   parameters: [],
						   rowsAsArray: false, 
						   success : function(data) {
							console.log("曜子", data.length);
							for (var i = 0; i < data.length; i++) {
								HandleMe(i , data );
								if(i<2){
									console.log("熊田",prop_cut);
								}
									var obj = {
										 "DBID": data[i].DBID, 
										 "Parts_Class": data[i].Parts_Class, 
										 "Parts_Chi": data[i].Parts_Chi, 
										 "Parts_Code": data[i].Parts_Code, 
										 "Parts_Name": data[i].Parts_Name, 
										 "Parts_Old_Code": data[i].Parts_Old_Code,
										 "Parts_Old_Name": data[i].Parts_Old_Name,
										 "Property" : prop_cut,
										 "Parts_Apply_Date": data[i].Parts_Apply_Date,
										 "Parts_Status": data[i].Parts_Status,
										 "Combo_Title"   : data[i].Combo_Title,
										 "SMT_Title"     : data[i].SMT_Title,
										 "Supply_Title"     : data[i].Supply_Title,
									}
								dataArr.push(obj);
							  }
		 
						      // console.log("雪妹:"+JSON.stringify(dataArr));
							 sender.success(dataArr);
						   },
						   error: sender.error
					     });
					 
				 }
		
	 }
	 function HandleMe(i ,  result  ){

		var obj={
			"Design_Spec":result[i].Design_Spec,
			"NameP": ( (result[i].Supply_Title  == null || result[i].Supply_Title ==undefined) ? ('') : result[i].Supply_Title   ),
			"NameE": ( (result[i].SMT_Title  == null   || result[i].SMT_Title    ==undefined) ? ('') : result[i].SMT_Title   ),
			"Name1": ( (result[i].Parts_Prop1  == null || result[i].Parts_Prop1  ==undefined) ? ('') : result[i].Parts_Prop1 ),
			"Name2": ( (result[i].Parts_Prop2  == null || result[i].Parts_Prop2  ==undefined) ? ('') : result[i].Parts_Prop2 ),
			"Name3": ( (result[i].Parts_Prop3  == null || result[i].Parts_Prop3  ==undefined) ? ('') : result[i].Parts_Prop3 ),
			"Name4": ( (result[i].Parts_Prop4  == null || result[i].Parts_Prop4  ==undefined) ? ('') : result[i].Parts_Prop4 ),
			"Name5": ( (result[i].Parts_Prop5  == null || result[i].Parts_Prop5  ==undefined) ? ('') : result[i].Parts_Prop5 ),
			"Name6": ( (result[i].Parts_Prop6  == null || result[i].Parts_Prop6  ==undefined) ? ('') : result[i].Parts_Prop6 ),
			"Name7": ( (result[i].Parts_Prop7  == null || result[i].Parts_Prop7  ==undefined) ? ('') : result[i].Parts_Prop7 ),
			"Name8": ( (result[i].Parts_Prop8  == null || result[i].Parts_Prop8  ==undefined) ? ('') : result[i].Parts_Prop8 ),
			"Name9": ( (result[i].Parts_Prop9  == null || result[i].Parts_Prop9  ==undefined) ? ('') : result[i].Parts_Prop9 ),
			"Name10":( (result[i].Parts_Prop10 == null || result[i].Parts_Prop10 ==undefined) ? ('') : result[i].Parts_Prop10),
			"Name11":( (result[i].Parts_Prop11 == null || result[i].Parts_Prop11 ==undefined) ? ('') : result[i].Parts_Prop11),
			"Name12":( (result[i].Parts_Prop12 == null || result[i].Parts_Prop12 ==undefined) ? ('') : result[i].Parts_Prop12),
			"Name13":( (result[i].Parts_Prop13 == null || result[i].Parts_Prop13 ==undefined) ? ('') : result[i].Parts_Prop13),
			"Name14":( (result[i].Parts_Prop14 == null || result[i].Parts_Prop14 ==undefined) ? ('') : result[i].Parts_Prop14),
			"Name15":( (result[i].Parts_Prop15 == null || result[i].Parts_Prop15 ==undefined) ? ('') : result[i].Parts_Prop15),
			"Name16":( (result[i].Parts_Prop16 == null || result[i].Parts_Prop16 ==undefined) ? ('') : result[i].Parts_Prop16),	
			"Name17":( (result[i].Parts_Prop17 == null || result[i].Parts_Prop17 ==undefined) ? ('') : result[i].Parts_Prop17),	
			"Name18":( (result[i].Parts_Prop18 == null || result[i].Parts_Prop18 ==undefined) ? ('') : result[i].Parts_Prop18),	
			"Name19":( (result[i].Parts_Prop19 == null || result[i].Parts_Prop19 ==undefined) ? ('') : result[i].Parts_Prop19),	
			"Name20":( (result[i].Parts_Prop20 == null || result[i].Parts_Prop20 ==undefined) ? ('') : result[i].Parts_Prop20),
			"ValueP":  ('制造商'), 
			"ValueE":  ( result[i].FEATURE_E.replace(' ', '')), 
			"Value1":  ( result[i].FEATURE01.replace(' ', '')), 
			"Value2":  ( result[i].FEATURE02.replace(' ', '')), 
			"Value3":  ( result[i].FEATURE03.replace(' ', '')), 
			"Value4":  ( result[i].FEATURE04.replace(' ', '')), 
			"Value5":  ( result[i].FEATURE05.replace(' ', '')), 
			"Value6":  ( result[i].FEATURE06.replace(' ', '')), 
			"Value7":  ( result[i].FEATURE07.replace(' ', '')), 
			"Value8":  ( result[i].FEATURE08.replace(' ', '')), 
			"Value9":  ( result[i].FEATURE09.replace(' ', '')), 
			"Value10": ( result[i].FEATURE10.replace(' ', '')), 
			"Value11": ( result[i].FEATURE11.replace(' ', '')), 
			"Value12": ( result[i].FEATURE12.replace(' ', '')), 
			"Value13": ( result[i].FEATURE13.replace(' ', '')), 
			"Value14": ( result[i].FEATURE14.replace(' ', '')), 
			"Value15": ( result[i].FEATURE15.replace(' ', '')), 
			"Value16": ( result[i].FEATURE16.replace(' ', '')), 
			"Value17": ( result[i].FEATURE17.replace(' ', '')), 
			"Value18": ( result[i].FEATURE18.replace(' ', '')), 
			"Value19": ( result[i].FEATURE19.replace(' ', '')), 
			"Value20": ( result[i].FEATURE20.replace(' ', '')), 
		};
		var specrule =obj.Design_Spec;//"客户&机型&客制&配件";
		var spectemp =obj.Design_Spec;
		var RESISTER="客户";
	      // console.log("心经", obj.ValueE,">");	
	      // console.log("真理", specrule);	
	     if(( specrule ).indexOf(obj.ValueP) != -1 ){
		     spectemp =spectemp.replace(obj.ValueP, obj.NameP);	
		     // console.log("测E", obj.ValueE ,spectemp);						
	     }
	     if(( specrule ).indexOf(obj.ValueE) != -1 ){
		     spectemp =spectemp.replace(obj.ValueE, obj.NameE);	
		     // console.log("测E", obj.ValueE ,spectemp);						
	     }
	     if(( specrule ).indexOf( obj.Value1) != -1){
		     spectemp =spectemp.replace( obj.Value1, obj.Name1);	
		     // console.log("测1", obj.Value1 ,spectemp);						
	     }
	     if(( specrule ).indexOf( obj.Value2) != -1){
		     spectemp =spectemp.replace( obj.Value2, obj.Name2);	
		     // console.log("测2", obj.Value2, spectemp);						
	     }
	     if(( specrule ).indexOf( obj.Value3) != -1){
		     spectemp =spectemp.replace( obj.Value3, obj.Name3);	
		     // console.log("测3", obj.Value3 ,spectemp);						
	     }
	     if(( specrule ).indexOf( obj.Value4) != -1){
		     spectemp =spectemp.replace( obj.Value4, obj.Name4);	
		     // console.log("测4", obj.Value4);						
	     }
	     if(( specrule ).indexOf( obj.Value5) != -1){
		     spectemp =spectemp.replace( obj.Value5, obj.Name5);	
		     // console.log("测5", obj.Value5);							
	     }
	     if(( specrule ).indexOf( obj.Value6) != -1){
		     spectemp =spectemp.replace( obj.Value6, obj.Name6);	
		     // console.log("测6", obj.Value6);						
	     }
	     if(( specrule ).indexOf( obj.Value7) != -1){
		     spectemp =spectemp.replace( obj.Value7, obj.Name7);	
		     // console.log("测7", obj.Value7);						
	     }
	     if(( specrule ).indexOf( obj.Value8 ) != -1){
		     spectemp =spectemp.replace( obj.Value8, obj.Name8);	
		     // console.log("测8", obj.Value8,">");					
	     }
	     if(( specrule ).indexOf( obj.Value9) != -1){
		     spectemp =spectemp.replace( obj.Value9, obj.Name9);	
		     // console.log("测9",obj.Value9,">");						
	     }
	     if(( specrule ).indexOf( obj.Value10) != -1){
		     spectemp =spectemp.replace( obj.Value10, obj.Name10);	
		     // console.log("测10", obj.Value10,">");						
	     }
	     if(( specrule ).indexOf( obj.Value11) != -1){
		     spectemp =spectemp.replace( obj.Value11, obj.Name11);	
		     // console.log("测11", obj.Value11,">");						
	     }
	     if(( specrule ).indexOf( obj.Value12) != -1){
		     spectemp =spectemp.replace( obj.Value12, obj.Name12);	
		     // console.log("测12", obj.Value12,">");						
	     }
	     if(( specrule ).indexOf( obj.Value13) != -1){
		     spectemp =spectemp.replace( obj.Value13, obj.Name13);	
		     // console.log("测13", spectemp);						
	     }
	     if(( specrule ).indexOf( obj.Value14) != -1){
		     spectemp =spectemp.replace( obj.Value14, obj.Name14);	
		     // console.log("测14", spectemp);						
	     }
	     if(( specrule ).indexOf( obj.Value15) != -1){
		     spectemp =spectemp.replace( obj.Value15, obj.Name15);	
		     // console.log("测15", spectemp);						
	     }
	     if(( specrule ).indexOf( obj.Value16) != -1){
		     spectemp =spectemp.replace( obj.Value16, obj.Name16);	
		     // console.log("测16", spectemp);						
	     }
	     if(( specrule ).indexOf( obj.Value17) != -1){
		     spectemp =spectemp.replace( obj.Value17, obj.Name17);	
		     // console.log("测17", spectemp);						
	     }
	     if(( specrule ).indexOf( obj.Value18) != -1){
		     spectemp =spectemp.replace( obj.Value18, obj.Name18);	
		     // console.log("测18", spectemp);						
	     }
	     if(( specrule ).indexOf( obj.Value19) != -1){
		     spectemp =spectemp.replace( obj.Value19, obj.Name19);	
		     // console.log("测19", spectemp);						
	     }
	     if(( specrule ).indexOf( obj.Value20) != -1){
		     spectemp =spectemp.replace( obj.Value20, obj.Name20);	
		     // console.log("测20", spectemp);						
	     }  
		ret = spectemp;
		 Schedobj={
		     "specrule": specrule,
		     "regroup": spectemp ,
		};
	
		   prop_cut =spectemp;
		   if(i <2){
			   console.log("派客",prop_cut);
		   }
	 }
	 function HandleDesign(iter , pcode  ){
		var SQLLob =
		" SELECT tbf.Design_Spec, A. `Parts_Class`, `SMT_Title`, `Parts_Prop1`,  `Parts_Prop2`, `Parts_Prop3`, `Parts_Prop4`, "+
		" `Parts_Prop5`, `Parts_Prop6`, `Parts_Prop7`, `Parts_Prop8`, `Parts_Prop9`, `Parts_Prop10`,   "+
		" `Parts_Prop11`, `Parts_Prop12`, `Parts_Prop13`, `Parts_Prop14`, `Parts_Prop15`, `Parts_Prop16`, "+
		" `Parts_Prop17`, `Parts_Prop18`, `Parts_Prop19`, `Parts_Prop20` ,    "+
		" `FEATURE_E`,  `FEATURE_F`,  `FEATURE01`,  `FEATURE02`,  `FEATURE03`,  `FEATURE04`,  `FEATURE05`,   "+
		" `FEATURE06`,  `FEATURE07`,  `FEATURE08`,  `FEATURE09`,  `FEATURE10`,  `FEATURE11`,  `FEATURE12`,   "+
		" `FEATURE13`,  `FEATURE14`,  `FEATURE15`,  `FEATURE16`,  `FEATURE17`,  `FEATURE18`,  `FEATURE19`,  "+
		" `FEATURE20` from auto_parts A  "+
		" LEFT JOIN `auto_feature` tbf on A.Parts_Class= tbf.Parts_Class  where A.Parts_Code =? ";
			 yjDBService.exec({
			 sql: SQLLob,
			 parameters: [ pcode ],
			 rowsAsArray: false, 
			 success: function(result) {
			// console.log("鸡柳",JSON.stringify(result));
	var obj={
		"Design_Spec":result[0].Design_Spec,
		"NameE": ( (result[0].SMT_Title  == null   || result[0].SMT_Title    ==undefined) ? ('') : result[0].SMT_Title   ),
		"Name1": ( (result[0].Parts_Prop1  == null || result[0].Parts_Prop1  ==undefined) ? ('') : result[0].Parts_Prop1 ),
		"Name2": ( (result[0].Parts_Prop2  == null || result[0].Parts_Prop2  ==undefined) ? ('') : result[0].Parts_Prop2 ),
		"Name3": ( (result[0].Parts_Prop3  == null || result[0].Parts_Prop3  ==undefined) ? ('') : result[0].Parts_Prop3 ),
		"Name4": ( (result[0].Parts_Prop4  == null || result[0].Parts_Prop4  ==undefined) ? ('') : result[0].Parts_Prop4 ),
		"Name5": ( (result[0].Parts_Prop5  == null || result[0].Parts_Prop5  ==undefined) ? ('') : result[0].Parts_Prop5 ),
		"Name6": ( (result[0].Parts_Prop6  == null || result[0].Parts_Prop6  ==undefined) ? ('') : result[0].Parts_Prop6 ),
		"Name7": ( (result[0].Parts_Prop7  == null || result[0].Parts_Prop7  ==undefined) ? ('') : result[0].Parts_Prop7 ),
		"Name8": ( (result[0].Parts_Prop8  == null || result[0].Parts_Prop8  ==undefined) ? ('') : result[0].Parts_Prop8 ),
		"Name9": ( (result[0].Parts_Prop9  == null || result[0].Parts_Prop9  ==undefined) ? ('') : result[0].Parts_Prop9 ),
		"Name10":( (result[0].Parts_Prop10 == null || result[0].Parts_Prop10 ==undefined) ? ('') : result[0].Parts_Prop10),
		"Name11":( (result[0].Parts_Prop11 == null || result[0].Parts_Prop11 ==undefined) ? ('') : result[0].Parts_Prop11),
		"Name12":( (result[0].Parts_Prop12 == null || result[0].Parts_Prop12 ==undefined) ? ('') : result[0].Parts_Prop12),
		"Name13":( (result[0].Parts_Prop13 == null || result[0].Parts_Prop13 ==undefined) ? ('') : result[0].Parts_Prop13),
		"Name14":( (result[0].Parts_Prop14 == null || result[0].Parts_Prop14 ==undefined) ? ('') : result[0].Parts_Prop14),
		"Name15":( (result[0].Parts_Prop15 == null || result[0].Parts_Prop15 ==undefined) ? ('') : result[0].Parts_Prop15),
		"Name16":( (result[0].Parts_Prop16 == null || result[0].Parts_Prop16 ==undefined) ? ('') : result[0].Parts_Prop16),	
		"Name17":( (result[0].Parts_Prop17 == null || result[0].Parts_Prop17 ==undefined) ? ('') : result[0].Parts_Prop17),	
		"Name18":( (result[0].Parts_Prop18 == null || result[0].Parts_Prop18 ==undefined) ? ('') : result[0].Parts_Prop18),	
		"Name19":( (result[0].Parts_Prop19 == null || result[0].Parts_Prop19 ==undefined) ? ('') : result[0].Parts_Prop19),	
		"Name20":( (result[0].Parts_Prop20 == null || result[0].Parts_Prop20 ==undefined) ? ('') : result[0].Parts_Prop20),
		"ValueE":  ( result[0].FEATURE_E.replace(' ', '')), 
		"Value1":  ( result[0].FEATURE01.replace(' ', '')), 
		"Value2":  ( result[0].FEATURE02.replace(' ', '')), 
		"Value3":  ( result[0].FEATURE03.replace(' ', '')), 
		"Value4":  ( result[0].FEATURE04.replace(' ', '')), 
		"Value5":  ( result[0].FEATURE05.replace(' ', '')), 
		"Value6":  ( result[0].FEATURE06.replace(' ', '')), 
		"Value7":  ( result[0].FEATURE07.replace(' ', '')), 
		"Value8":  ( result[0].FEATURE08.replace(' ', '')), 
		"Value9":  ( result[0].FEATURE09.replace(' ', '')), 
		"Value10": ( result[0].FEATURE10.replace(' ', '')), 
		"Value11": ( result[0].FEATURE11.replace(' ', '')), 
		"Value12": ( result[0].FEATURE12.replace(' ', '')), 
		"Value13": ( result[0].FEATURE13.replace(' ', '')), 
		"Value14": ( result[0].FEATURE14.replace(' ', '')), 
		"Value15": ( result[0].FEATURE15.replace(' ', '')), 
		"Value16": ( result[0].FEATURE16.replace(' ', '')), 
		"Value17": ( result[0].FEATURE17.replace(' ', '')), 
		"Value18": ( result[0].FEATURE18.replace(' ', '')), 
		"Value19": ( result[0].FEATURE19.replace(' ', '')), 
		"Value20": ( result[0].FEATURE20.replace(' ', '')), 
	};
			 
				 var specrule =obj.Design_Spec;//"客户&机型&客制&配件";
				 var spectemp =obj.Design_Spec;
				 var RESISTER="客户";
				//  console.log("心经", obj.ValueE,">");	
				//  console.log("真理", specrule);	
				if(( specrule ).indexOf(obj.ValueE) != -1 ){
					spectemp =spectemp.replace(obj.ValueE, obj.NameE);	
					// console.log("测E", obj.ValueE ,spectemp);						
				}
				if(( specrule ).indexOf( obj.Value1) != -1){
					spectemp =spectemp.replace( obj.Value1, obj.Name1);	
					// console.log("测1", obj.Value1 ,spectemp);						
				}
				if(( specrule ).indexOf( obj.Value2) != -1){
					spectemp =spectemp.replace( obj.Value2, obj.Name2);	
					// console.log("测2", obj.Value2, spectemp);						
				}
				if(( specrule ).indexOf( obj.Value3) != -1){
					spectemp =spectemp.replace( obj.Value3, obj.Name3);	
					// console.log("测3", obj.Value3 ,spectemp);						
				}
				if(( specrule ).indexOf( obj.Value4) != -1){
					spectemp =spectemp.replace( obj.Value4, obj.Name4);	
					// console.log("测4", obj.Value4);						
				}
				if(( specrule ).indexOf( obj.Value5) != -1){
					spectemp =spectemp.replace( obj.Value5, obj.Name5);	
					// console.log("测5", obj.Value5);							
				}
				if(( specrule ).indexOf( obj.Value6) != -1){
					spectemp =spectemp.replace( obj.Value6, obj.Name6);	
					// console.log("测6", obj.Value6);						
				}
				if(( specrule ).indexOf( obj.Value7) != -1){
					spectemp =spectemp.replace( obj.Value7, obj.Name7);	
					// console.log("测7", obj.Value7);						
				}
				if(( specrule ).indexOf( obj.Value8 ) != -1){
					spectemp =spectemp.replace( obj.Value8, obj.Name8);	
					// console.log("测8", obj.Value8,">");					
				}
				if(( specrule ).indexOf( obj.Value9) != -1){
					spectemp =spectemp.replace( obj.Value9, obj.Name9);	
					// console.log("测9",obj.Value9,">");						
				}
				if(( specrule ).indexOf( obj.Value10) != -1){
					spectemp =spectemp.replace( obj.Value10, obj.Name10);	
					// console.log("测10", obj.Value10,">");						
				}
				if(( specrule ).indexOf( obj.Value11) != -1){
					spectemp =spectemp.replace( obj.Value11, obj.Name11);	
					// console.log("测11", obj.Value11,">");						
				}
				if(( specrule ).indexOf( obj.Value12) != -1){
					spectemp =spectemp.replace( obj.Value12, obj.Name12);	
					// console.log("测12", obj.Value12,">");						
				}
				if(( specrule ).indexOf( obj.Value13) != -1){
					spectemp =spectemp.replace( obj.Value13, obj.Name13);	
					// console.log("测13", spectemp);						
				}
				if(( specrule ).indexOf( obj.Value14) != -1){
					spectemp =spectemp.replace( obj.Value14, obj.Name14);	
					// console.log("测14", spectemp);						
				}
				if(( specrule ).indexOf( obj.Value15) != -1){
					spectemp =spectemp.replace( obj.Value15, obj.Name15);	
					// console.log("测15", spectemp);						
				}
				if(( specrule ).indexOf( obj.Value16) != -1){
					spectemp =spectemp.replace( obj.Value16, obj.Name16);	
					// console.log("测16", spectemp);						
				}
				if(( specrule ).indexOf( obj.Value17) != -1){
					spectemp =spectemp.replace( obj.Value17, obj.Name17);	
					// console.log("测17", spectemp);						
				}
				if(( specrule ).indexOf( obj.Value18) != -1){
					spectemp =spectemp.replace( obj.Value18, obj.Name18);	
					// console.log("测18", spectemp);						
				}
				if(( specrule ).indexOf( obj.Value19) != -1){
					spectemp =spectemp.replace( obj.Value19, obj.Name19);	
					// console.log("测19", spectemp);						
				}
				if(( specrule ).indexOf( obj.Value20) != -1){
					spectemp =spectemp.replace( obj.Value20, obj.Name20);	
					// console.log("测20", spectemp);						
				}  
				 ret = spectemp;
				  Schedobj={
					"specrule": specrule,
					"regroup": spectemp ,
				 };
			 
			          prop_cut =spectemp;
				    if(iter <5){
					    console.log("派客",prop_cut);
				    }
				//    return prop_cut;
					 },//end success
			 error: sender.error
		   });
   
	   
   
	 }
    
   
    
};