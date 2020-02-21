 function ChangeC(selectValue) {
 
  
	  if(selectValue=="C1"){
		  console.log("机械手" );
		  $("#classA").html("分类"); $("#boat").html("");
 		 for(var i=0 ;i<8;i++){
 			    var youoption = document.createElement("option"); 
			    youoption.text = "C"+(i+1);
			    youoption.id="boat";
			    youoption.name="boat";
			    youoption.value ="C"+(i+1); 
			    $("#boat").append(youoption);
		 }
 		 $("#classB").html("系列");  $("#yacht").html("");
 		 for(var i=0 ;i<3;i++){
 			  var yaption = document.createElement("option"); 
 			    yaption.text = "K100"+(i+1);
 			    yaption.id="yacht";
 			    yaption.name="yacht";
 			    yaption.value ="B"+(i+1); 
 			    $("#yacht").append(yaption);
 		 }
 		 $("#classC").html("型号"); $("#sail").html("");
 		 for(var i=0 ;i<12;i++){
 			  var sail_opt = document.createElement("option"); 
 			    sail_opt.text = "卡式"+(i+1);
 			    sail_opt.id="sail";
 			    sail_opt.name="sail";
 			    sail_opt.value ="C"+(i+1); 
 			    $("#sail").append(sail_opt);
 		 }
 		 $("#classD").html("手臂数"); $("#vessel").html("");
 		 for(var i=0 ;i<6;i++){
 			  var vessel_opt = document.createElement("option"); 
 			    vessel_opt.text = "海内"+(i+1);
 			    vessel_opt.id="vessel";
 			    vessel_opt.name="vessel";
 			    vessel_opt.value ="D"+(i+1); 
 			    $("#vessel").append(vessel_opt);
 		 }
 		$("#classE").html("手背结构"); $("#tanker").html("");
		 for(var i=0 ;i<3;i++){
			  var tanker_opt = document.createElement("option"); 
			    tanker_opt.text = "ARM"+(i+1);
			    tanker_opt.id="tanker";
			    tanker_opt.name="tanker";
			    tanker_opt.value ="E"+(i+1); 
			    $("#tanker").append(tanker_opt);
		 }
 		$("#classF").html("行程"); $("#marine").html("");
 		 for(var i=0 ;i<3;i++){
 			  var marine_opt = document.createElement("option"); 
 			    marine_opt.text = "AM"+(i+1);
 			    marine_opt.id="marine";
 			    marine_opt.name="marine";
 			    marine_opt.value ="F"+(i+1); 
 			    $("#marine").append(marine_opt);
 		 }
 		 $("#classG").css('visibility', 'visible'); $("#rocket").css('visibility', 'visible');
 		$("#classG").html("驱动方式"); $("#rocket").html("");
 		 for(var i=0 ;i<4;i++){
 			  var rocket_opt = document.createElement("option"); 
 			    rocket_opt.text = "驱动方式"+(i+1);
 			    rocket_opt.id="rocket";
 			    rocket_opt.name="rocket";
 			    rocket_opt.value ="G"+(i+1); 
 			    $("#rocket").append(rocket_opt);
 		 }
 		 $("#classH").css('visibility', 'visible'); $("#zebra").css('visibility', 'visible');
 		$("#classH").html("定制规格"); $("#zebra").html("");
		 for(var i=0 ;i<6;i++){
			  var zebra_opt = document.createElement("option"); 
			    zebra_opt.text = "规格"+(i+1);
			    zebra_opt.id="zebra";
			    zebra_opt.name="zebra";
			    zebra_opt.value ="H"+(i+1); 
			    $("#zebra").append(zebra_opt);
		 }
		 $("#classI").css('visibility', 'visible'); $("#eleph").css('visibility', 'visible');
		$("#classI").html("版本"); $("#eleph").html("");
		 for(var i=0 ;i<3;i++){
			  var eleph_opt = document.createElement("option"); 
			    eleph_opt.text = "版本"+(i+1);
			    eleph_opt.id="eleph";
			    eleph_opt.name="eleph";
			    eleph_opt.value ="I"+(i+1); 
			    $("#eleph").append(eleph_opt);
		 }
		 $("#classJ").css('visibility', 'visible'); $("#eagle").css('visibility', 'visible');
		$("#classJ").html("包装"); $("#eagle").html("");
		 for(var i=0 ;i<4;i++){
			  var eagle_opt = document.createElement("option"); 
			    eagle_opt.text = "小盒"+(i+1);
			    eagle_opt.id="eagle";
			    eagle_opt.name="eagle";
			    eagle_opt.value ="J"+(i+1); 
			    $("#eagle").append(eagle_opt);
		 }
	 		 
	 		$("#classK").html(""); $("#tiger").html("");
	 		$("#classL").html(""); $("#lion").html("");
	 		$("#classM").html(""); $("#horse").html("");
	 		$("#classO").html(""); $("#worm").html("");
	 		$("#classP").html(""); $("#hole").html("");
	 		$("#classQ").html(""); $("#xman").html("");
	 		$("#classR").html(""); $("#quita").html(""); 
	 		$("#classK").css('visibility', 'hidden'); $("#tiger").css('visibility', 'hidden');
	 		$("#classL").css('visibility', 'hidden'); $("#lion").css('visibility', 'hidden');
	 		$("#classM").css('visibility', 'hidden'); $("#horse").css('visibility', 'hidden');
	 		$("#classO").css('visibility', 'hidden'); $("#worm").css('visibility', 'hidden');
	 		$("#classP").css('visibility', 'hidden'); $("#hole").css('visibility', 'hidden');
	 		$("#classQ").css('visibility', 'hidden'); $("#xman").css('visibility', 'hidden');
	 		$("#classR").css('visibility', 'hidden'); $("#quita").css('visibility', 'hidden');

	  }
	  if(selectValue=="C2"){
		  console.log("机器人    轴数 负载能力 版本 包装    " );
		  $("#classA").html("分类");  $("#boat").html("");
 		 for(var i=0 ;i<5;i++){
 			  var youoption = document.createElement("option"); 
 			    youoption.text = "A"+(i+1);
 			    youoption.id="boat";
 			    youoption.name="boat";
 			    youoption.value ="A"+(i+1); 
 			    $("#boat").append(youoption);
 		 }
		  $("#classB").html("系列");  $("#yacht").html("");
	 		 for(var i=0 ;i<4;i++){
	 			  var yavht_opt = document.createElement("option"); 
	 			    yavht_opt.text = "V100"+(i+1);
	 			    yavht_opt.id="yacht";
	 			    yavht_opt.name="yacht";
	 			    yavht_opt.value ="B"+(i+1); 
	 			    $("#yacht").append(yavht_opt);
	 		 }
		  $("#classC").html("型号");   $("#sail").html("");
	 		 for(var i=0 ;i<6;i++){
	 			  var sail_opt = document.createElement("option"); 
	 			    sail_opt.text = "油电混合"+(i+1);
	 			    sail_opt.id="sail";
	 			    sail_opt.name="sail";
	 			    sail_opt.value ="C"+(i+1); 
	 			    $("#sail").append(sail_opt);
	 		 }
	 		 
	 		$("#classD").html("轴数"); $("#vessel").html("");
	 		 for(var i=0 ;i<6;i++){
	 			  var vessel_opt = document.createElement("option"); 
	 			    vessel_opt.text = "国内"+(i+1);
	 			    vessel_opt.id="vessel";
	 			    vessel_opt.name="vessel";
	 			    vessel_opt.value ="D"+(i+1); 
	 			    $("#vessel").append(vessel_opt);
	 		 }
	 		 $("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
	 		$("#classE").html("负载能力"); $("#tanker").html("");
	 		 for(var i=0 ;i<6;i++){
	 			  var tanker_opt = document.createElement("option"); 
	 			    tanker_opt.text = "规格"+(i+1);
	 			    tanker_opt.id="tanker";
	 			    tanker_opt.name="tanker";
	 			    tanker_opt.value ="E"+(i+1); 
	 			    $("#tanker").append(tanker_opt);
	 		 }
	 		 $("#classF").css('visibility', 'visible'); $("#marine").css('visibility', 'visible');
	 		$("#classF").html("版本 "); $("#marine").html("");
	 		 for(var i=0 ;i<3;i++){
	 			  var marine_opt = document.createElement("option"); 
	 			    marine_opt.text = "版本"+(i+1);
	 			    marine_opt.id="marine";
	 			    marine_opt.name="marine";
	 			    marine_opt.value ="F"+(i+1); 
	 			    $("#marine").append(marine_opt);
	 		 }
	 		$("#classG").css('visibility', 'visible'); $("#rocket").css('visibility', 'visible');
	 		$("#classG").html("包装"); $("#rocket").html("");
	 		 for(var i=0 ;i<4;i++){
	 			  var rocket_opt = document.createElement("option"); 
	 			    rocket_opt.text = "定制规格"+(i+1);
	 			    rocket_opt.id="rocket";
	 			    rocket_opt.name="rocket";
	 			    rocket_opt.value ="G"+(i+1); 
	 			    $("#rocket").append(rocket_opt);
	 		 }
 
	 		$("#classH").html(""); $("#zebra").html("");
	 		$("#classI").html(""); $("#eleph").html("");
	 		$("#classJ").html(""); $("#eagle").html("");
	 		$("#classK").html(""); $("#tiger").html("");
	 		$("#classL").html(""); $("#lion").html("");
	 		$("#classM").html(""); $("#horse").html("");
	 		$("#classO").html(""); $("#worm").html("");
	 		$("#classP").html(""); $("#hole").html("");
	 		$("#classQ").html(""); $("#xman").html("");
	 		$("#classR").html(""); $("#quita").html("");
	 		
	 		$("#classH").css('visibility', 'hidden'); $("#zebra").css('visibility', 'hidden');
	 		$("#classI").css('visibility', 'hidden'); $("#eleph").css('visibility', 'hidden');
	 		$("#classJ").css('visibility', 'hidden'); $("#eagle").css('visibility', 'hidden');
	 		$("#classK").css('visibility', 'hidden'); $("#tiger").css('visibility', 'hidden');
	 		$("#classL").css('visibility', 'hidden'); $("#lion").css('visibility', 'hidden');
	 		$("#classM").css('visibility', 'hidden'); $("#horse").css('visibility', 'hidden');
	 		$("#classO").css('visibility', 'hidden'); $("#worm").css('visibility', 'hidden');
	 		$("#classP").css('visibility', 'hidden'); $("#hole").css('visibility', 'hidden');
	 		$("#classQ").css('visibility', 'hidden'); $("#xman").css('visibility', 'hidden');
	 		$("#classR").css('visibility', 'hidden'); $("#quita").css('visibility', 'hidden');
	 		
	  }  
	  if(selectValue=="C3"){
		  console.log("热流道      " );
		  $("#classA").html("分类");  $("#boat").html("");
 		 for(var i=0 ;i<5;i++){
 			  var youoption = document.createElement("option"); 
 			    youoption.text = "A"+(i+1);
 			    youoption.id="boat";
 			    youoption.name="boat";
 			    youoption.value ="A"+(i+1); 
 			    $("#boat").append(youoption);
 		 }
		  $("#classB").html("系列");  $("#yacht").html("");
	 		 for(var i=0 ;i<4;i++){
	 			  var yavht_opt = document.createElement("option"); 
	 			    yavht_opt.text = "V100"+(i+1);
	 			    yavht_opt.id="yacht";
	 			    yavht_opt.name="yacht";
	 			    yavht_opt.value ="B"+(i+1); 
	 			    $("#yacht").append(yavht_opt);
	 		 }
		  $("#classC").html("型号");   $("#sail").html("");
	 		 for(var i=0 ;i<6;i++){
	 			  var sail_opt = document.createElement("option"); 
	 			    sail_opt.text = "油电混合"+(i+1);
	 			    sail_opt.id="sail";
	 			    sail_opt.name="sail";
	 			    sail_opt.value ="C"+(i+1); 
	 			    $("#sail").append(sail_opt);
	 		 }
	 		
	 		$("#classD").html("段数"); $("#vessel").html("");
	 		 for(var i=0 ;i<6;i++){
	 			  var vessel_opt = document.createElement("option"); 
	 			    vessel_opt.text = "段数"+(i+1);
	 			    vessel_opt.id="vessel";
	 			    vessel_opt.name="vessel";
	 			    vessel_opt.value ="D"+(i+1); 
	 			    $("#vessel").append(vessel_opt);
	 		 }
	 		 $("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
	 		$("#classE").html("电源配线 "); $("#tanker").html("");
	 		 for(var i=0 ;i<6;i++){
	 			  var tanker_opt = document.createElement("option"); 
	 			    tanker_opt.text = "电源配线"+(i+1);
	 			    tanker_opt.id="tanker";
	 			    tanker_opt.name="tanker";
	 			    tanker_opt.value ="E"+(i+1); 
	 			    $("#tanker").append(tanker_opt);
	 		 }
	 		 $("#classF").css('visibility', 'visible'); $("#marine").css('visibility', 'visible');
	 		$("#classF").html("电源线长 "); $("#marine").html("");
	 		 for(var i=0 ;i<3;i++){
	 			  var marine_opt = document.createElement("option"); 
	 			    marine_opt.text = "电源线长 "+(i+1);
	 			    marine_opt.id="marine";
	 			    marine_opt.name="marine";
	 			    marine_opt.value ="F"+(i+1); 
	 			    $("#marine").append(marine_opt);
	 		 }
		 		$("#classG").css('visibility', 'visible'); $("#rocket").css('visibility', 'visible');
		 		$("#classG").html("连接器类型"); $("#rocket").html("");
		 		 for(var i=0 ;i<4;i++){
		 			  var rocket_opt = document.createElement("option"); 
		 			    rocket_opt.text = "连接器类型"+(i+1);
		 			    rocket_opt.id="rocket";
		 			    rocket_opt.name="rocket";
		 			    rocket_opt.value ="G"+(i+1); 
		 			    $("#rocket").append(rocket_opt);
		 		 }
		 		 
		 		$("#classH").css('visibility', 'visible'); $("#zebra").css('visibility', 'visible');
		 		$("#classH").html("连接器固定"); $("#zebra").html("");
		 		 for(var i=0 ;i<4;i++){
		 			  var zebra_opt = document.createElement("option"); 
		 			    zebra_opt.text ="连接器固定"+(i+1);
		 			    zebra_opt.id="zebra";
		 			    zebra_opt.name="zebra";
		 			    zebra_opt.value ="H"+(i+1); 
		 			    $("#zebra").append(zebra_opt);
		 		 }
		 		 
		 		$("#classI").css('visibility', 'visible'); $("#eleph").css('visibility', 'visible');
		 		$("#classI").html("连接器位数"); $("#eleph").html("");
		 		 for(var i=0 ;i<3;i++){
		 			  var eleph_opt = document.createElement("option"); 
		 			    eleph_opt.text = "连接器位数"+(i+1);
		 			    eleph_opt.id="eleph";
		 			    eleph_opt.name="eleph";
		 			    eleph_opt.value ="I"+(i+1); 
		 			    $("#eleph").append(eleph_opt);
		 		 }
		 	
			 		$("#classJ").css('visibility', 'visible'); $("#eagle").css('visibility', 'visible');
			 		$("#classJ").html("连接器配线"); $("#eagle").html("");
			 		 for(var i=0 ;i<5;i++){
			 			  var eagle_opt = document.createElement("option"); 
			 			    eagle_opt.text = "连接器配线"+(i+1);
			 			    eagle_opt.id="eagle";
			 			    eagle_opt.name="eagle";
			 			    eagle_opt.value ="J"+(i+1); 
			 			    $("#eagle").append(eagle_opt);
			 		 }
			 	 
			 		$("#classK").css('visibility', 'visible'); $("#tiger").css('visibility', 'visible');
			 		$("#classK").html("厂家"); $("#tiger").html("");
			 		 for(var i=0 ;i<4;i++){
			 			  var tiger_opt = document.createElement("option"); 
			 			    tiger_opt.text = "厂家"+(i+1);
			 			    tiger_opt.id="tiger";
			 			    tiger_opt.name="tiger";
			 			    tiger_opt.value ="K"+(i+1); 
			 			    $("#tiger").append(tiger_opt);
			 		 } 
			 		 
		 		$("#classL").css('visibility', 'visible'); $("#lion").css('visibility', 'visible');
		 		$("#classL").html("定制规格"); $("#lion").html("");
		 		 for(var i=0 ;i<4;i++){
		 			  var lion_opt = document.createElement("option"); 
		 			    lion_opt.text = "定制规格"+(i+1);
		 			    lion_opt.id="lion";
		 			    lion_opt.name="lion";
		 			    lion_opt.value ="L"+(i+1); 
		 			    $("#lion").append(lion_opt);
		 		 }
		 		 
			 		$("#classM").css('visibility', 'visible'); $("#horse").css('visibility', 'visible');
			 		$("#classM").html("版本"); $("#horse").html("");
			 		 for(var i=0 ;i<4;i++){
			 			  var horse_opt = document.createElement("option"); 
			 			    horse_opt.text = "版本"+(i+1);
			 			    horse_opt.id="horse";
			 			    horse_opt.name="horse";
			 			    horse_opt.value ="M"+(i+1); 
			 			    $("#horse").append(horse_opt);
			 		 } 
			 		 $("#classO").css('visibility', 'visible'); $("#worm").css('visibility', 'visible');
			 		 $("#classO").html("包装"); $("#worm").html("");
			 		 for(var i=0 ;i<4;i++){
			 			 var worm_opt = document.createElement("option"); 
			 			 worm_opt.text = "包装"+(i+1);
			 			 worm_opt.id="worm";
			 			 worm_opt.name="worm";
			 			 worm_opt.value ="O"+(i+1); 
			 			 $("#worm").append(worm_opt);
			 		 } 
	  
		 		$("#classO").html(""); $("#worm").html("");
		 		$("#classP").html(""); $("hole").html("");
		 		$("#classQ").html(""); $("#xman").html("");
		 		$("#classR").html(""); $("#quita").html("");
		 		 
		 		$("#classO").css('visibility', 'hidden'); $("#worm").css('visibility', 'hidden');
		 		$("#classP").css('visibility', 'hidden'); $("#hole").css('visibility', 'hidden');
		 		$("#classQ").css('visibility', 'hidden'); $("#xman").css('visibility', 'hidden');
		 		$("#classR").css('visibility', 'hidden'); $("#quita").css('visibility', 'hidden');
	 		
	  }  
	 }
 function GoldC(selectValue) { 
   if(selectValue=="C1"){
	  console.log("机械手" );
	  var pclass = "C1"; 
	  let dataArr=[];
	  var reportType='goldRec';
	  var taskData ={"reportType":reportType,  "pclass": pclass   };
	   $.ajax({
			method:'post',
			data:taskData,
			url:"/app/TMCode/getRoute",
			success:function(data){
              	dataArr =data;
           	console.log("上官", JSON.stringify(dataArr) );
           	console.log("百里",  (dataArr.length) );
	  $("#classA").html("分类"); $("#boat").html("");
	 for(var i=0 ;i<dataArr[0].length;i++){
		    var youoption = document.createElement("option"); 
		    youoption.text = dataArr[0][i].Parts_Desc;
		    youoption.id="boat";
		    youoption.name="boat";
		    youoption.value ="C"+(i+1); 
		    $("#boat").append(youoption);
	 }
	 $("#classB").html("系列");  $("#yacht").html("");
	 for(var i=0 ;i<dataArr[1].length;i++){
		  var yaption = document.createElement("option"); 
		    yaption.text = dataArr[1][i].Parts_Desc;
		    yaption.id="yacht";
		    yaption.name="yacht";
		    yaption.value ="B"+(i+1); 
		    $("#yacht").append(yaption);
	 }
	 $("#classC").html("型号"); $("#sail").html("");
	 for(var i=0 ;i<dataArr[2].length;i++){
		  var sail_opt = document.createElement("option"); 
		    sail_opt.text = dataArr[2][i].Parts_Desc;
		    sail_opt.id="sail";
		    sail_opt.name="sail";
		    sail_opt.value ="C"+(i+1); 
		    $("#sail").append(sail_opt);
	 }
	 $("#classD").html("手臂数"); $("#vessel").html("");
	 for(var i=0 ;i<dataArr[3].length;i++){
		  var vessel_opt = document.createElement("option"); 
		    vessel_opt.text = dataArr[3][i].Parts_Desc;
		    vessel_opt.id="vessel";
		    vessel_opt.name="vessel";
		    vessel_opt.value ="D"+(i+1); 
		    $("#vessel").append(vessel_opt);
	 }
	$("#classE").html("手背结构"); $("#tanker").html("");
	 for(var i=0 ;i<dataArr[4].length;i++){
		  var tanker_opt = document.createElement("option"); 
		    tanker_opt.text = dataArr[4][i].Parts_Desc;
		    tanker_opt.id="tanker";
		    tanker_opt.name="tanker";
		    tanker_opt.value ="E"+(i+1); 
		    $("#tanker").append(tanker_opt);
	 }
	$("#classF").html("行程"); $("#marine").html("");
	 for(var i=0 ;i<dataArr[5].length;i++){
		  var marine_opt = document.createElement("option"); 
		    marine_opt.text = dataArr[5][i].Parts_Desc;
		    marine_opt.id="marine";
		    marine_opt.name="marine";
		    marine_opt.value ="F"+(i+1); 
		    $("#marine").append(marine_opt);
	 }
	 $("#classG").css('visibility', 'visible'); $("#rocket").css('visibility', 'visible');
	$("#classG").html("驱动方式"); $("#rocket").html("");
	 for(var i=0 ;i<dataArr[6].length;i++){
		  var rocket_opt = document.createElement("option"); 
		    rocket_opt.text = dataArr[6][i].Parts_Desc;
		    rocket_opt.id="rocket";
		    rocket_opt.name="rocket";
		    rocket_opt.value ="G"+(i+1); 
		    $("#rocket").append(rocket_opt);
	 }
	 $("#classH").css('visibility', 'visible'); $("#zebra").css('visibility', 'visible');
	$("#classH").html("定制规格"); $("#zebra").html("");
	 for(var i=0 ;i<dataArr[7].length;i++){
		  var zebra_opt = document.createElement("option"); 
		    zebra_opt.text = dataArr[7][i].Parts_Desc;
		    zebra_opt.id="zebra";
		    zebra_opt.name="zebra";
		    zebra_opt.value ="H"+(i+1); 
		    $("#zebra").append(zebra_opt);
	 }
	 $("#classI").css('visibility', 'visible'); $("#eleph").css('visibility', 'visible');
	$("#classI").html("版本"); $("#eleph").html("");
	 for(var i=0 ;i<dataArr[8].length;i++){
		  var eleph_opt = document.createElement("option"); 
		    eleph_opt.text = dataArr[8][i].Parts_Desc;
		    eleph_opt.id="eleph";
		    eleph_opt.name="eleph";
		    eleph_opt.value ="I"+(i+1); 
		    $("#eleph").append(eleph_opt);
	 }
	 $("#classJ").css('visibility', 'visible'); $("#eagle").css('visibility', 'visible');
	$("#classJ").html("包装"); $("#eagle").html("");
	 for(var i=0 ;i<dataArr[9].length;i++){
		  var eagle_opt = document.createElement("option"); 
		    eagle_opt.text = dataArr[9][i].Parts_Desc;
		    eagle_opt.id="eagle";
		    eagle_opt.name="eagle";
		    eagle_opt.value ="J"+(i+1); 
		    $("#eagle").append(eagle_opt);
	 }
		},
           error:function(){ 
           }
       })		 	 
		$("#classK").html(""); $("#tiger").html("");
		$("#classL").html(""); $("#lion").html("");
		$("#classM").html(""); $("#horse").html("");
		$("#classO").html(""); $("#worm").html("");
		$("#classP").html(""); $("#hole").html("");
		$("#classQ").html(""); $("#xman").html("");
		$("#classR").html(""); $("#quita").html(""); 
		$("#classK").css('visibility', 'hidden'); $("#tiger").css('visibility', 'hidden');
		$("#classL").css('visibility', 'hidden'); $("#lion").css('visibility', 'hidden');
		$("#classM").css('visibility', 'hidden'); $("#horse").css('visibility', 'hidden');
		$("#classO").css('visibility', 'hidden'); $("#worm").css('visibility', 'hidden');
		$("#classP").css('visibility', 'hidden'); $("#hole").css('visibility', 'hidden');
		$("#classQ").css('visibility', 'hidden'); $("#xman").css('visibility', 'hidden');
		$("#classR").css('visibility', 'hidden'); $("#quita").css('visibility', 'hidden');

     }
   if(selectValue=="C2"){
		  console.log("机器人    轴数 负载能力 版本 包装    " );
		  var pclass = "C2"; 
		  let dataArr=[];
		  var reportType='goldRec';
		  var taskData ={"reportType":reportType,  "pclass": pclass   };
		   $.ajax({
				method:'post',
				data:taskData,
				url:"/app/TMCode/getRoute",
				success:function(data){
	               	dataArr =data;
             	console.log("上官", JSON.stringify(dataArr) );
             	console.log("百里",  (dataArr.length) );
		  $("#classA").html("分类");  $("#boat").html("");
		 for(var i=0 ;i<dataArr[0].length;i++){
			  var youoption = document.createElement("option"); 
			    youoption.text =  dataArr[0][i].Parts_Desc;
			    youoption.id="boat";
			    youoption.name="boat";
			    youoption.value ="A"+(i+1); 
			    $("#boat").append(youoption);
		 }
		  $("#classB").html("系列");  $("#yacht").html("");
	 		 for(var i=0 ;i<dataArr[1].length;i++){
	 			  var yavht_opt = document.createElement("option"); 
	 			    yavht_opt.text =  dataArr[1][i].Parts_Desc;
	 			    yavht_opt.id="yacht";
	 			    yavht_opt.name="yacht";
	 			    yavht_opt.value ="B"+(i+1); 
	 			    $("#yacht").append(yavht_opt);
	 		 }
		  $("#classC").html("型号");   $("#sail").html("");
	 		 for(var i=0 ;i<dataArr[2].length;i++){
	 			  var sail_opt = document.createElement("option"); 
	 			    sail_opt.text =  dataArr[2][i].Parts_Desc;
	 			    sail_opt.id="sail";
	 			    sail_opt.name="sail";
	 			    sail_opt.value ="C"+(i+1); 
	 			    $("#sail").append(sail_opt);
	 		 }
	 		 
	 		$("#classD").html("轴数"); $("#vessel").html("");
	 		 for(var i=0 ;i<dataArr[3].length;i++){
	 			  var vessel_opt = document.createElement("option"); 
	 			    vessel_opt.text =  dataArr[3][i].Parts_Desc;
	 			    vessel_opt.id="vessel";
	 			    vessel_opt.name="vessel";
	 			    vessel_opt.value ="D"+(i+1); 
	 			    $("#vessel").append(vessel_opt);
	 		 }
	 		 $("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
	 		$("#classE").html("负载能力"); $("#tanker").html("");
	 		 for(var i=0 ;i<dataArr[4].length;i++){
	 			  var tanker_opt = document.createElement("option"); 
	 			    tanker_opt.text =  dataArr[4][i].Parts_Desc;
	 			    tanker_opt.id="tanker";
	 			    tanker_opt.name="tanker";
	 			    tanker_opt.value ="E"+(i+1); 
	 			    $("#tanker").append(tanker_opt);
	 		 }
	 		 $("#classF").css('visibility', 'visible'); $("#marine").css('visibility', 'visible');
	 		$("#classF").html("版本 "); $("#marine").html("");
	 		 for(var i=0 ;i<dataArr[5].length;i++){
	 			  var marine_opt = document.createElement("option"); 
	 			    marine_opt.text =  dataArr[5][i].Parts_Desc;
	 			    marine_opt.id="marine";
	 			    marine_opt.name="marine";
	 			    marine_opt.value ="F"+(i+1); 
	 			    $("#marine").append(marine_opt);
	 		 }
	 		$("#classG").css('visibility', 'visible'); $("#rocket").css('visibility', 'visible');
	 		$("#classG").html("包装"); $("#rocket").html("");
	 		 for(var i=0 ;i<dataArr[6].length;i++){
	 			  var rocket_opt = document.createElement("option"); 
	 			    rocket_opt.text =  dataArr[6][i].Parts_Desc;
	 			    rocket_opt.id="rocket";
	 			    rocket_opt.name="rocket";
	 			    rocket_opt.value ="G"+(i+1); 
	 			    $("#rocket").append(rocket_opt);
	 		 }

	 		$("#classH").html(""); $("#zebra").html("");
	 		$("#classI").html(""); $("#eleph").html("");
	 		$("#classJ").html(""); $("#eagle").html("");
	 		$("#classK").html(""); $("#tiger").html("");
	 		$("#classL").html(""); $("#lion").html("");
	 		$("#classM").html(""); $("#horse").html("");
	 		$("#classO").html(""); $("#worm").html("");
	 		$("#classP").html(""); $("#hole").html("");
	 		$("#classQ").html(""); $("#xman").html("");
	 		$("#classR").html(""); $("#quita").html("");
	 		
	 		$("#classH").css('visibility', 'hidden'); $("#zebra").css('visibility', 'hidden');
	 		$("#classI").css('visibility', 'hidden'); $("#eleph").css('visibility', 'hidden');
	 		$("#classJ").css('visibility', 'hidden'); $("#eagle").css('visibility', 'hidden');
	 		$("#classK").css('visibility', 'hidden'); $("#tiger").css('visibility', 'hidden');
	 		$("#classL").css('visibility', 'hidden'); $("#lion").css('visibility', 'hidden');
	 		$("#classM").css('visibility', 'hidden'); $("#horse").css('visibility', 'hidden');
	 		$("#classO").css('visibility', 'hidden'); $("#worm").css('visibility', 'hidden');
	 		$("#classP").css('visibility', 'hidden'); $("#hole").css('visibility', 'hidden');
	 		$("#classQ").css('visibility', 'hidden'); $("#xman").css('visibility', 'hidden');
	 		$("#classR").css('visibility', 'hidden'); $("#quita").css('visibility', 'hidden');
	 		  },
             error:function(){ 
             }
         })			
	  }
   if(selectValue=="C3"){
		  console.log("热流道      " );
		   var pclass = "C3"; 
		  let dataArr=[];
		  var reportType='goldRec';
		  var taskData ={"reportType":reportType,  "pclass": pclass   };
		   $.ajax({
				method:'post',
				data:taskData,
				url:"/app/TMCode/getRoute",
				success:function(data){
	               	dataArr =data;
             	console.log("上官", JSON.stringify(dataArr) );
             	console.log("百里",  (dataArr.length) );
		  $("#classA").html("分类");  $("#boat").html("");
		 for(var i=0 ;i<dataArr[0].length;i++){
			  var youoption = document.createElement("option"); 
			    youoption.text = dataArr[0][i].Parts_Desc;
			    youoption.id="boat";
			    youoption.name="boat";
			    youoption.value ="A"+(i+1); 
			    $("#boat").append(youoption);
		 }
		  $("#classB").html("系列");  $("#yacht").html("");
	 		 for(var i=0 ;i<dataArr[1].length;i++){
	 			  var yavht_opt = document.createElement("option"); 
	 			    yavht_opt.text = dataArr[1][i].Parts_Desc;
	 			    yavht_opt.id="yacht";
	 			    yavht_opt.name="yacht";
	 			    yavht_opt.value ="B"+(i+1); 
	 			    $("#yacht").append(yavht_opt);
	 		 }
		  $("#classC").html("型号");   $("#sail").html("");
	 		 for(var i=0 ;i<dataArr[2].length;i++){
	 			  var sail_opt = document.createElement("option"); 
	 			    sail_opt.text = dataArr[2][i].Parts_Desc;
	 			    sail_opt.id="sail";
	 			    sail_opt.name="sail";
	 			    sail_opt.value ="C"+(i+1); 
	 			    $("#sail").append(sail_opt);
	 		 }
	 		
	 		$("#classD").html("段数"); $("#vessel").html("");
	 		 for(var i=0 ;i<dataArr[3].length;i++){
	 			  var vessel_opt = document.createElement("option"); 
	 			    vessel_opt.text = dataArr[3][i].Parts_Desc;
	 			    vessel_opt.id="vessel";
	 			    vessel_opt.name="vessel";
	 			    vessel_opt.value ="D"+(i+1); 
	 			    $("#vessel").append(vessel_opt);
	 		 }
	 		 $("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
	 		$("#classE").html("电源配线"); $("#tanker").html("");
	 		 for(var i=0 ;i<dataArr[4].length;i++){
	 			  var tanker_opt = document.createElement("option"); 
	 			    tanker_opt.text = dataArr[4][i].Parts_Desc;
	 			    tanker_opt.id="tanker";
	 			    tanker_opt.name="tanker";
	 			    tanker_opt.value ="E"+(i+1); 
	 			    $("#tanker").append(tanker_opt);
	 		 }
	 		 $("#classF").css('visibility', 'visible'); $("#marine").css('visibility', 'visible');
	 		$("#classF").html("电源线长"); $("#marine").html("");
	 		 for(var i=0 ;i<dataArr[5].length;i++){
	 			  var marine_opt = document.createElement("option"); 
	 			    marine_opt.text = dataArr[5][i].Parts_Desc;
	 			    marine_opt.id="marine";
	 			    marine_opt.name="marine";
	 			    marine_opt.value ="F"+(i+1); 
	 			    $("#marine").append(marine_opt);
	 		 }
	 	
	 		$("#classG").css('visibility', 'visible'); $("#rocket").css('visibility', 'visible');
	 		$("#classG").html("连接器类型"); $("#rocket").html("");
	 		 for(var i=0 ;i<dataArr[6].length;i++){
	 			  var rocket_opt = document.createElement("option"); 
	 			    rocket_opt.text = dataArr[6][i].Parts_Desc;
	 			    rocket_opt.id="rocket";
	 			    rocket_opt.name="rocket";
	 			    rocket_opt.value ="G"+(i+1); 
	 			    $("#rocket").append(rocket_opt);
	 		 }
	 		 
	 		$("#classH").css('visibility', 'visible'); $("#zebra").css('visibility', 'visible');
	 		$("#classH").html("连接器固定"); $("#zebra").html("");
	 		 for(var i=0 ;i<dataArr[7].length;i++){
	 			  var zebra_opt = document.createElement("option"); 
	 			    zebra_opt.text = dataArr[7][i].Parts_Desc;
	 			    zebra_opt.id="zebra";
	 			    zebra_opt.name="zebra";
	 			    zebra_opt.value ="H"+(i+1); 
	 			    $("#zebra").append(zebra_opt);
	 		 }
	 		 
	 		$("#classI").css('visibility', 'visible'); $("#eleph").css('visibility', 'visible');
	 		$("#classI").html("连接器位数"); $("#eleph").html("");
	 		 for(var i=0 ;i<dataArr[8].length;i++){
	 			  var eleph_opt = document.createElement("option"); 
	 			    eleph_opt.text = dataArr[8][i].Parts_Desc;
	 			    eleph_opt.id="eleph";
	 			    eleph_opt.name="eleph";
	 			    eleph_opt.value ="I"+(i+1); 
	 			    $("#eleph").append(eleph_opt);
	 		 }
	 	
		 		$("#classJ").css('visibility', 'visible'); $("#eagle").css('visibility', 'visible');
		 		$("#classJ").html("连接器配线"); $("#eagle").html("");
		 		 for(var i=0 ;i<dataArr[9].length;i++){
		 			  var eagle_opt = document.createElement("option"); 
		 			    eagle_opt.text = dataArr[9][i].Parts_Desc;
		 			    eagle_opt.id="eagle";
		 			    eagle_opt.name="eagle";
		 			    eagle_opt.value ="J"+(i+1); 
		 			    $("#eagle").append(eagle_opt);
		 		 }
		 	 
		 		$("#classK").css('visibility', 'visible'); $("#tiger").css('visibility', 'visible');
		 		$("#classK").html("厂家"); $("#tiger").html("");
		 		 for(var i=0 ;i<dataArr[10].length;i++){
		 			  var tiger_opt = document.createElement("option"); 
		 			    tiger_opt.text = dataArr[10][i].Parts_Desc;
		 			    tiger_opt.id="tiger";
		 			    tiger_opt.name="tiger";
		 			    tiger_opt.value ="K"+(i+1); 
		 			    $("#tiger").append(tiger_opt);
		 		 } 
		 		 
	 		$("#classL").css('visibility', 'visible'); $("#lion").css('visibility', 'visible');
	 		$("#classL").html("定制规格"); $("#lion").html("");
	 		 for(var i=0 ;i<dataArr[11].length;i++){
	 			  var lion_opt = document.createElement("option"); 
	 			    lion_opt.text = dataArr[11][i].Parts_Desc;
	 			    lion_opt.id="lion";
	 			    lion_opt.name="lion";
	 			    lion_opt.value ="L"+(i+1); 
	 			    $("#lion").append(lion_opt);
	 		 }
	 		 
		 		$("#classM").css('visibility', 'visible'); $("#horse").css('visibility', 'visible');
		 		$("#classM").html("版本"); $("#horse").html("");
		 		 for(var i=0 ;i<dataArr[12].length;i++){
		 			  var horse_opt = document.createElement("option"); 
		 			    horse_opt.text = dataArr[12][i].Parts_Desc;
		 			    horse_opt.id="horse";
		 			    horse_opt.name="horse";
		 			    horse_opt.value ="M"+(i+1); 
		 			    $("#horse").append(horse_opt);
		 		 } 
		 		 $("#classO").css('visibility', 'visible'); $("#worm").css('visibility', 'visible');
		 		 $("#classO").html("包装"); $("#worm").html("");
		 		 for(var i=0 ;i<dataArr[13].length;i++){
		 			 var worm_opt = document.createElement("option"); 
		 			 worm_opt.text = dataArr[13][i].Parts_Desc;
		 			 worm_opt.id="worm";
		 			 worm_opt.name="worm";
		 			 worm_opt.value ="O"+(i+1); 
		 			 $("#worm").append(worm_opt);
		 		 } 
			 },
             error:function(){ 
             }
         })		
	 		$("#classP").html(""); $("hole").html("");
	 		$("#classQ").html(""); $("#xman").html("");
	 		$("#classR").html(""); $("#quita").html("");
	 		
	 		$("#classP").css('visibility', 'hidden'); $("#hole").css('visibility', 'hidden');
	 		$("#classQ").css('visibility', 'hidden'); $("#xman").css('visibility', 'hidden');
	 		$("#classR").css('visibility', 'hidden'); $("#quita").css('visibility', 'hidden');
	 		
	  }  
 }