 function ChangeA(selectValue) {
        
  
	  if(selectValue=="A1"){
		  console.log("控制器" );
 
		     $("#classA").html("分类");  $("#boat").html("");        
 		 	for(var i=0 ;i<5;i++){
		           			  var youoption = document.createElement("option"); 
		           			    youoption.text = "A100"+(i+1);
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
	 		$("#classD").html("厂家"); $("#vessel").html("");
	 		 for(var i=0 ;i<6;i++){
	 			  var vessel_opt = document.createElement("option"); 
	 			    vessel_opt.text = "国内"+(i+1);
	 			    vessel_opt.id="vessel";
	 			    vessel_opt.name="vessel";
	 			    vessel_opt.value ="D"+(i+1); 
	 			    $("#vessel").append(vessel_opt);
	 		 }
	 		 $("#classE").css('visibility', 'visible'); $("tanker").css('visibility', 'visible');
	 		$("#classE").html("定制规格"); $("#tanker").html("");
	 		 for(var i=0 ;i<6;i++){
	 			  var tanker_opt = document.createElement("option"); 
	 			    tanker_opt.text = "规格"+(i+1);
	 			    tanker_opt.id="tanker";
	 			    tanker_opt.name="tanker";
	 			    tanker_opt.value ="E"+(i+1); 
	 			    $("#tanker").append(tanker_opt);
	 		 }
	 		 $("#classF").css('visibility', 'visible'); $("marine").css('visibility', 'visible');
	 		$("#classF").html("版本"); $("#marine").html("");
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
	 			    rocket_opt.text = "小盒"+(i+1);
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
	  if(selectValue=="A2"){
		  console.log("人机界面   " );
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
	 		$("#classD").html("厂家"); $("#vessel").html("");
	 		 for(var i=0 ;i<6;i++){
	 			  var vessel_opt = document.createElement("option"); 
	 			    vessel_opt.text = "国内"+(i+1);
	 			    vessel_opt.id="vessel";
	 			    vessel_opt.name="vessel";
	 			    vessel_opt.value ="D"+(i+1); 
	 			    $("#vessel").append(vessel_opt);
	 		 }
	 		 $("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
	 		$("#classE").html("机型"); $("#tanker").html("");
	 		 for(var i=0 ;i<6;i++){
	 			  var tanker_opt = document.createElement("option"); 
	 			    tanker_opt.text = "规格"+(i+1);
	 			    tanker_opt.id="tanker";
	 			    tanker_opt.name="tanker";
	 			    tanker_opt.value ="E"+(i+1); 
	 			    $("#tanker").append(tanker_opt);
	 		 }
	 		 $("#classF").css('visibility', 'visible'); $("#marine").css('visibility', 'visible');
	 		$("#classF").html("功能 "); $("#marine").html("");
	 		 for(var i=0 ;i<3;i++){
	 			  var marine_opt = document.createElement("option"); 
	 			    marine_opt.text = "版本"+(i+1);
	 			    marine_opt.id="marine";
	 			    marine_opt.name="marine";
	 			    marine_opt.value ="F"+(i+1); 
	 			    $("#marine").append(marine_opt);
	 		 }
	 		$("#classG").css('visibility', 'visible'); $("#rocket").css('visibility', 'visible');
	 		$("#classG").html("定制规格"); $("#rocket").html("");
	 		 for(var i=0 ;i<4;i++){
	 			  var rocket_opt = document.createElement("option"); 
	 			    rocket_opt.text = "定制规格"+(i+1);
	 			    rocket_opt.id="rocket";
	 			    rocket_opt.name="rocket";
	 			    rocket_opt.value ="G"+(i+1); 
	 			    $("#rocket").append(rocket_opt);
	 		 }
	 		$("#classH").css('visibility', 'visible'); $("#zebra").css('visibility', 'visible');
	 		$("#classH").html("版本"); $("#zebra").html("");
	 		 for(var i=0 ;i<4;i++){
	 			  var zebra_opt = document.createElement("option"); 
	 			    zebra_opt.text = "版本"+(i+1);
	 			    zebra_opt.id="zebra";
	 			    zebra_opt.name="zebra";
	 			    zebra_opt.value ="H"+(i+1); 
	 			    $("#zebra").append(zebra_opt);
	 		 }
	 		$("#classI").css('visibility', 'visible'); $("#eleph").css('visibility', 'visible');
	 		$("#classI").html("包装"); $("#eleph").html("");
	 		 for(var i=0 ;i<4;i++){
	 			  var eleph_opt = document.createElement("option"); 
	 			    eleph_opt.text = "包装"+(i+1);
	 			    eleph_opt.id="eleph";
	 			    eleph_opt.name="eleph";
	 			    eleph_opt.value ="I"+(i+1); 
	 			    $("#eleph").append(eleph_opt);
	 		 }
	 		$("#classJ").html(""); $("#eagle").html("");
	 		$("#classK").html(""); $("#tiger").html("");
	 		$("#classL").html(""); $("#lion").html("");
	 		$("#classM").html(""); $("#horse").html("");
	 		$("#classO").html(""); $("#worm").html("");
	 		$("#classP").html(""); $("#hole").html("");
	 		$("#classQ").html(""); $("#xman").html("");
	 		$("#classR").html(""); $("#quita").html("");
	 		
	 		$("#classJ").css('visibility', 'hidden'); $("#eagle").css('visibility', 'hidden');
	 		$("#classK").css('visibility', 'hidden'); $("#tiger").css('visibility', 'hidden');
	 		$("#classL").css('visibility', 'hidden'); $("#lion").css('visibility', 'hidden');
	 		$("#classM").css('visibility', 'hidden'); $("#horse").css('visibility', 'hidden');
	 		$("#classO").css('visibility', 'hidden'); $("#worm").css('visibility', 'hidden');
	 		$("#classP").css('visibility', 'hidden'); $("#hole").css('visibility', 'hidden');
	 		$("#classQ").css('visibility', 'hidden'); $("#xman").css('visibility', 'hidden');
	 		$("#classR").css('visibility', 'hidden'); $("#quita").css('visibility', 'hidden');
	 		
	  }  
	  if(selectValue=="A3"){
		  console.log("变频/驱动器        " );
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
	 		
	 		$("#classD").html(" 输入电压"); $("#vessel").html("");
	 		 for(var i=0 ;i<6;i++){
	 			  var vessel_opt = document.createElement("option"); 
	 			    vessel_opt.text = "输入电压"+(i+1);
	 			    vessel_opt.id="vessel";
	 			    vessel_opt.name="vessel";
	 			    vessel_opt.value ="D"+(i+1); 
	 			    $("#vessel").append(vessel_opt);
	 		 }
	 		 $("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
	 		$("#classE").html("功率"); $("#tanker").html("");
	 		 for(var i=0 ;i<6;i++){
	 			  var tanker_opt = document.createElement("option"); 
	 			    tanker_opt.text = "功率"+(i+1);
	 			    tanker_opt.id="tanker";
	 			    tanker_opt.name="tanker";
	 			    tanker_opt.value ="E"+(i+1); 
	 			    $("#tanker").append(tanker_opt);
	 		 }
	 		 $("#classF").css('visibility', 'visible'); $("#marine").css('visibility', 'visible');
	 		$("#classF").html("散热方式 "); $("#marine").html("");
	 		 for(var i=0 ;i<3;i++){
	 			  var marine_opt = document.createElement("option"); 
	 			    marine_opt.text = "散热方式 "+(i+1);
	 			    marine_opt.id="marine";
	 			    marine_opt.name="marine";
	 			    marine_opt.value ="F"+(i+1); 
	 			    $("#marine").append(marine_opt);
	 		 }
	 		$("#classG").css('visibility', 'visible'); $("#rocket").css('visibility', 'visible');
	 		$("#classG").html("过载倍数"); $("#rocket").html("");
	 		 for(var i=0 ;i<4;i++){
	 			  var rocket_opt = document.createElement("option"); 
	 			    rocket_opt.text = "过载倍数"+(i+1);
	 			    rocket_opt.id="rocket";
	 			    rocket_opt.name="rocket";
	 			    rocket_opt.value ="G"+(i+1); 
	 			    $("#rocket").append(rocket_opt);
	 		 }
	 		 
	 		$("#classH").css('visibility', 'visible'); $("#zebra").css('visibility', 'visible');
	 		$("#classH").html("编码器类型"); $("#zebra").html("");
	 		 for(var i=0 ;i<4;i++){
	 			  var zebra_opt = document.createElement("option"); 
	 			    zebra_opt.text = "编码器类型"+(i+1);
	 			    zebra_opt.id="zebra";
	 			    zebra_opt.name="zebra";
	 			    zebra_opt.value ="H"+(i+1); 
	 			    $("#zebra").append(zebra_opt);
	 		 }
	 		$("#classI").css('visibility', 'visible'); $("#eleph").css('visibility', 'visible');
	 		$("#classI").html("通讯方式"); $("#eleph").html("");
	 		 for(var i=0 ;i<4;i++){
	 			  var eleph_opt = document.createElement("option"); 
	 			    eleph_opt.text = "通讯方式"+(i+1);
	 			    eleph_opt.id="eleph";
	 			    eleph_opt.name="eleph";
	 			    eleph_opt.value ="I"+(i+1); 
	 			    $("#eleph").append(eleph_opt);
	 		 }
	 	
	 		$("#classJ").css('visibility', 'visible'); $("#eagle").css('visibility', 'visible');
			$("#classJ").html("电源供电"); $("#eagle").html("");
			 for(var i=0 ;i<4;i++){
				  var eagle_opt = document.createElement("option"); 
					eagle_opt.text = "电源供电"+(i+1);
					eagle_opt.id="eagle";
					eagle_opt.name="eagle";
					eagle_opt.value ="J"+(i+1); 
					$("#eagle").append(eagle_opt);
			 }
			 
			$("#classK").css('visibility', 'visible'); $("#tiger").css('visibility', 'visible');
			$("#classK").html("外设"); $("#tiger").html("");
			 for(var i=0 ;i<4 ;i++){
				  var tiger_opt = document.createElement("option"); 
					tiger_opt.text = "外设"+(i+1);
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
			        $("#classP").html(""); $("#hole").html("");
			 		$("#classQ").html(""); $("#xman").html("");
			 		$("#classR").html(""); $("#quita").html("");
			 		
			 		$("#classP").css('visibility', 'hidden'); $("#hole").css('visibility', 'hidden');
			 		$("#classQ").css('visibility', 'hidden'); $("#xman").css('visibility', 'hidden');
			 		$("#classR").css('visibility', 'hidden'); $("#quita").css('visibility', 'hidden');
	  }  
	  if(selectValue=="A4"){
		  console.log("电机      " );
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
	 		 
		  $("#classC").html("基座号");   $("#sail").html("");
	 		 for(var i=0 ;i<6;i++){
	 			  var sail_opt = document.createElement("option"); 
	 			    sail_opt.text = "基座号"+(i+1);
	 			    sail_opt.id="sail";
	 			    sail_opt.name="sail";
	 			    sail_opt.value ="C"+(i+1); 
	 			    $("#sail").append(sail_opt);
	 		 }
	 		$("#classD").html("型号"); $("#vessel").html("");
	 		 for(var i=0 ;i<6;i++){
	 			  var vessel_opt = document.createElement("option"); 
	 			    vessel_opt.text = "型号"+(i+1);
	 			    vessel_opt.id="vessel";
	 			    vessel_opt.name="vessel";
	 			    vessel_opt.value ="D"+(i+1); 
	 			    $("#vessel").append(vessel_opt);
	 		 }
	 		
	 		 $("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
	 		$("#classE").html("输入电压"); $("#tanker").html("");
	 		 for(var i=0 ;i<6;i++){
	 			  var tanker_opt = document.createElement("option"); 
	 			    tanker_opt.text = "规格"+(i+1);
	 			    tanker_opt.id="tanker";
	 			    tanker_opt.name="tanker";
	 			    tanker_opt.value ="E"+(i+1); 
	 			    $("#tanker").append(tanker_opt);
	 		 }
	 		 $("#classF").css('visibility', 'visible'); $("#marine").css('visibility', 'visible');
	 		$("#classF").html("转速"); $("#marine").html("");
	 		 for(var i=0 ;i<3;i++){
	 			  var marine_opt = document.createElement("option"); 
	 			    marine_opt.text = "转速 "+(i+1);
	 			    marine_opt.id="marine";
	 			    marine_opt.name="marine";
	 			    marine_opt.value ="F"+(i+1); 
	 			    $("#marine").append(marine_opt);
	 		 }
	 	
	 		$("#classG").css('visibility', 'visible'); $("#rocket").css('visibility', 'visible');
	 		$("#classG").html("散热方式"); $("#rocket").html("");
	 		 for(var i=0 ;i<4;i++){
	 			  var rocket_opt = document.createElement("option"); 
	 			    rocket_opt.text = "散热方式"+(i+1);
	 			    rocket_opt.id="rocket";
	 			    rocket_opt.name="rocket";
	 			    rocket_opt.value ="G"+(i+1); 
	 			    $("#rocket").append(rocket_opt);
	 		 }
	 		
	 		$("#classH").css('visibility', 'visible'); $("#zebra").css('visibility', 'visible');
	 		$("#classH").html("键轴"); $("#zebra").html("");
	 		 for(var i=0 ;i<4;i++){
	 			  var zebra_opt = document.createElement("option"); 
	 			    zebra_opt.text = "键轴"+(i+1);
	 			    zebra_opt.id="zebra";
	 			    zebra_opt.name="zebra";
	 			    zebra_opt.value ="H"+(i+1); 
	 			    $("#zebra").append(zebra_opt);
	 		 }
	 	
	 		$("#classI").css('visibility', 'visible'); $("#eleph").css('visibility', 'visible');
	 		$("#classI").html("编码器类型"); $("#eleph").html("");
	 		 for(var i=0 ;i<4;i++){
	 			  var eleph_opt = document.createElement("option"); 
	 			    eleph_opt.text = "编码器类型"+(i+1);
	 			    eleph_opt.id="eleph";
	 			    eleph_opt.name="eleph";
	 			    eleph_opt.value ="I"+(i+1); 
	 			    $("#eleph").append(eleph_opt);
	 		 }
		 		$("#classJ").css('visibility', 'visible'); $("#eagle").css('visibility', 'visible');
		 		$("#classJ").html("接线盒方向 "); $("#eagle").html("");
		 		 for(var i=0 ;i<4;i++){
		 			  var eagle_opt = document.createElement("option"); 
		 			    eagle_opt.text = "接线盒方向 "+(i+1);
		 			    eagle_opt.id="eagle";
		 			    eagle_opt.name="eagle";
		 			    eagle_opt.value ="J"+(i+1); 
		 			    $("#eagle").append(eagle_opt);
		 		 }
		 		console.log("            " );
			 		$("#classK").css('visibility', 'visible'); $("#tiger").css('visibility', 'visible');
			 		$("#classK").html("版本 "); $("#tiger").html("");
			 		 for(var i=0 ;i<4;i++){
			 			  var tiger_opt = document.createElement("option"); 
			 			    tiger_opt.text = "版本 "+(i+1);
			 			    tiger_opt.id="tiger";
			 			    tiger_opt.name="tiger";
			 			    tiger_opt.value ="K"+(i+1); 
			 			    $("#tiger").append(tiger_opt);
			 		 }
				 		$("#classL").css('visibility', 'visible'); $("#lion").css('visibility', 'visible');
				 		$("#classL").html("包装 "); $("#lion").html("");
				 		 for(var i=0 ;i<4;i++){
				 			  var lion_opt = document.createElement("option"); 
				 			    lion_opt.text = "包装 "+(i+1);
				 			    lion_opt.id="lion";
				 			    lion_opt.name="lion";
				 			    lion_opt.value ="L"+(i+1); 
				 			    $("#lion").append(lion_opt);
				 		 }
	 		$("#classM").html(""); $("#horse").html("");
	 		$("#classO").html(""); $("#worm").html("");
	 		$("#classP").html(""); $("#hole").html("");
	 		$("#classQ").html(""); $("#xman").html("");
	 		$("#classR").html(""); $("#quita").html("");
	 		
	 	 	$("#classM").css('visibility', 'hidden'); $("#horse").css('visibility', 'hidden');
	 		$("#classO").css('visibility', 'hidden'); $("#worm").css('visibility', 'hidden');
	 		$("#classP").css('visibility', 'hidden'); $("#hole").css('visibility', 'hidden');
	 		$("#classQ").css('visibility', 'hidden'); $("#xman").css('visibility', 'hidden');
	 		$("#classR").css('visibility', 'hidden'); $("#quita").css('visibility', 'hidden');
	 		
	  }  
	  if(selectValue=="A5"){
		  console.log("油泵  " );
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
	 		
	 		$("#classD").html("排量"); $("#vessel").html("");
	 		 for(var i=0 ;i<6;i++){
	 			  var vessel_opt = document.createElement("option"); 
	 			    vessel_opt.text = "排量"+(i+1);
	 			    vessel_opt.id="vessel";
	 			    vessel_opt.name="vessel";
	 			    vessel_opt.value ="D"+(i+1); 
	 			    $("#vessel").append(vessel_opt);
	 		 }
	 		$("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
	 		$("#classE").html("键轴"); $("#tanker").html("");
	 		 for(var i=0 ;i<6;i++){
	 			  var tanker_opt = document.createElement("option"); 
	 			    tanker_opt.text = "键轴"+(i+1);
	 			    tanker_opt.id="tanker";
	 			    tanker_opt.name="tanker";
	 			    tanker_opt.value ="E"+(i+1); 
	 			    $("#tanker").append(tanker_opt);
	 		 }
	 		$("#classF").css('visibility', 'visible'); $("#marine").css('visibility', 'visible');
	 		$("#classF").html("进油口方向"); $("#marine").html("");
	 		 for(var i=0 ;i<3;i++){
	 			  var marine_opt = document.createElement("option"); 
	 			    marine_opt.text = "进油口方向"+(i+1);
	 			    marine_opt.id="marine";
	 			    marine_opt.name="marine";
	 			    marine_opt.value ="F"+(i+1); 
	 			    $("#marine").append(marine_opt);
	 		 }
	 		$("#classG").css('visibility', 'visible'); $("#rocket").css('visibility', 'visible');
	 		$("#classG").html("版本"); $("#rocket").html("");
	 		 for(var i=0 ;i<4;i++){
	 			  var rocket_opt = document.createElement("option"); 
	 			    rocket_opt.text = "版本"+(i+1);
	 			    rocket_opt.id="rocket";
	 			    rocket_opt.name="rocket";
	 			    rocket_opt.value ="G"+(i+1); 
	 			    $("#rocket").append(rocket_opt);
	 		 }
	  		$("#classH").css('visibility', 'visible'); $("#zebra").css('visibility', 'visible');
	 		$("#classH").html("包装"); $("#zebra").html("");
	 		 for(var i=0 ;i<4;i++){
	 			  var zebra_opt = document.createElement("option"); 
	 			    zebra_opt.text = "包装"+(i+1);
	 			    zebra_opt.id="zebra";
	 			    zebra_opt.name="zebra";
	 			    zebra_opt.value ="H"+(i+1); 
	 			    $("#zebra").append(zebra_opt);
	 		 }
	 		$("#classI").html(""); $("#eleph").html("");
	 		$("#classJ").html(""); $("#eagle").html("");
	 		$("#classK").html(""); $("#tiger").html("");
	 		$("#classL").html(""); $("#lion").html("");
	 		$("#classM").html(""); $("#horse").html("");
	 		$("#classO").html(""); $("#worm").html("");
	 		$("#classP").html(""); $("#hole").html("");
	 		$("#classQ").html(""); $("#xman").html("");
	 		$("#classR").html(""); $("#quita").html("");
	 		
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
	 }
 function GoldA(selectValue) { 
	  if(selectValue=="A1"){
		  console.log("控制器" ); 
		  var pclass = "A1"; 
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
							 $("#classD").html("厂家"); $("#vessel").html("");
							 for(var i=0 ;i<dataArr[3].length;i++){
								  var vessel_opt = document.createElement("option"); 
									vessel_opt.text = dataArr[3][i].Parts_Desc;
									vessel_opt.id="vessel";
									vessel_opt.name="vessel";
									vessel_opt.value ="D"+(i+1); 
									$("#vessel").append(vessel_opt);
							 }
							 $("#classE").css('visibility', 'visible'); $("tanker").css('visibility', 'visible');
							 $("#classE").html("定制规格"); $("#tanker").html("");
							 for(var i=0 ;i<dataArr[4].length;i++){
								  var tanker_opt = document.createElement("option"); 
									tanker_opt.text = dataArr[4][i].Parts_Desc;
									tanker_opt.id="tanker";
									tanker_opt.name="tanker";
									tanker_opt.value ="E"+(i+1); 
									$("#tanker").append(tanker_opt);
							 }
							 $("#classF").css('visibility', 'visible'); $("marine").css('visibility', 'visible');
							 $("#classF").html("版本"); $("#marine").html("");
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
		                },
		                error:function(){ 
		                }
		            })
		 
		 
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
	  if(selectValue=="A2"){
		  console.log("人机界面   " );
		    var pclass = "A2"; 
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
	 		$("#classD").html("厂家"); $("#vessel").html("");
	 		 for(var i=0 ;i<dataArr[3].length;i++){
	 			  var vessel_opt = document.createElement("option"); 
	 			    vessel_opt.text = dataArr[3][i].Parts_Desc;
	 			    vessel_opt.id="vessel";
	 			    vessel_opt.name="vessel";
	 			    vessel_opt.value ="D"+(i+1); 
	 			    $("#vessel").append(vessel_opt);
	 		 }
	 		 $("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
	 		$("#classE").html("机型"); $("#tanker").html("");
	 		 for(var i=0 ;i<dataArr[4].length;i++){
	 			  var tanker_opt = document.createElement("option"); 
	 			    tanker_opt.text = dataArr[4][i].Parts_Desc;
	 			    tanker_opt.id="tanker";
	 			    tanker_opt.name="tanker";
	 			    tanker_opt.value ="E"+(i+1); 
	 			    $("#tanker").append(tanker_opt);
	 		 }
	 		 $("#classF").css('visibility', 'visible'); $("#marine").css('visibility', 'visible');
	 		$("#classF").html("功能 "); $("#marine").html("");
	 		 for(var i=0 ;i<dataArr[5].length;i++){
	 			  var marine_opt = document.createElement("option"); 
	 			    marine_opt.text = dataArr[5][i].Parts_Desc;
	 			    marine_opt.id="marine";
	 			    marine_opt.name="marine";
	 			    marine_opt.value ="F"+(i+1); 
	 			    $("#marine").append(marine_opt);
	 		 }
	 		$("#classG").css('visibility', 'visible'); $("#rocket").css('visibility', 'visible');
	 		$("#classG").html("定制规格"); $("#rocket").html("");
	 		 for(var i=0 ;i<dataArr[6].length;i++){
	 			  var rocket_opt = document.createElement("option"); 
	 			    rocket_opt.text = dataArr[6][i].Parts_Desc;
	 			    rocket_opt.id="rocket";
	 			    rocket_opt.name="rocket";
	 			    rocket_opt.value ="G"+(i+1); 
	 			    $("#rocket").append(rocket_opt);
	 		 }
	 		$("#classH").css('visibility', 'visible'); $("#zebra").css('visibility', 'visible');
	 		$("#classH").html("版本"); $("#zebra").html("");
	 		 for(var i=0 ;i<dataArr[7].length;i++){
	 			  var zebra_opt = document.createElement("option"); 
	 			    zebra_opt.text = dataArr[7][i].Parts_Desc;
	 			    zebra_opt.id="zebra";
	 			    zebra_opt.name="zebra";
	 			    zebra_opt.value ="H"+(i+1); 
	 			    $("#zebra").append(zebra_opt);
	 		 }
	 		$("#classI").css('visibility', 'visible'); $("#eleph").css('visibility', 'visible');
	 		$("#classI").html("包装"); $("#eleph").html("");
	 		 for(var i=0 ;i<dataArr[8].length;i++){
	 			  var eleph_opt = document.createElement("option"); 
	 			    eleph_opt.text = dataArr[8][i].Parts_Desc;
	 			    eleph_opt.id="eleph";
	 			    eleph_opt.name="eleph";
	 			    eleph_opt.value ="I"+(i+1); 
	 			    $("#eleph").append(eleph_opt);
	 		 }
			 },
                error:function(){ 
                }
            })	
	 		$("#classJ").html(""); $("#eagle").html("");
	 		$("#classK").html(""); $("#tiger").html("");
	 		$("#classL").html(""); $("#lion").html("");
	 		$("#classM").html(""); $("#horse").html("");
	 		$("#classO").html(""); $("#worm").html("");
	 		$("#classP").html(""); $("#hole").html("");
	 		$("#classQ").html(""); $("#xman").html("");
	 		$("#classR").html(""); $("#quita").html("");
	 		
	 		$("#classJ").css('visibility', 'hidden'); $("#eagle").css('visibility', 'hidden');
	 		$("#classK").css('visibility', 'hidden'); $("#tiger").css('visibility', 'hidden');
	 		$("#classL").css('visibility', 'hidden'); $("#lion").css('visibility', 'hidden');
	 		$("#classM").css('visibility', 'hidden'); $("#horse").css('visibility', 'hidden');
	 		$("#classO").css('visibility', 'hidden'); $("#worm").css('visibility', 'hidden');
	 		$("#classP").css('visibility', 'hidden'); $("#hole").css('visibility', 'hidden');
	 		$("#classQ").css('visibility', 'hidden'); $("#xman").css('visibility', 'hidden');
	 		$("#classR").css('visibility', 'hidden'); $("#quita").css('visibility', 'hidden');
	
	  }  
	  if(selectValue=="A3"){
		  console.log("变频/驱动器        " );
		  var pclass = "A3"; 
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
			
			$("#classD").html(" 输入电压"); $("#vessel").html("");
			 for(var i=0 ;i<dataArr[3].length;i++){
				  var vessel_opt = document.createElement("option"); 
					vessel_opt.text = dataArr[3][i].Parts_Desc;
					vessel_opt.id="vessel";
					vessel_opt.name="vessel";
					vessel_opt.value ="D"+(i+1); 
					$("#vessel").append(vessel_opt);
			 }
			 $("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
			$("#classE").html("功率"); $("#tanker").html("");
			 for(var i=0 ;i<dataArr[4].length;i++){
				  var tanker_opt = document.createElement("option"); 
					tanker_opt.text = dataArr[4][i].Parts_Desc;
					tanker_opt.id="tanker";
					tanker_opt.name="tanker";
					tanker_opt.value ="E"+(i+1); 
					$("#tanker").append(tanker_opt);
			 }
			 $("#classF").css('visibility', 'visible'); $("#marine").css('visibility', 'visible');
			$("#classF").html("散热方式 "); $("#marine").html("");
			 for(var i=0 ;i<dataArr[5].length;i++){
				  var marine_opt = document.createElement("option"); 
					marine_opt.text = dataArr[5][i].Parts_Desc;
					marine_opt.id="marine";
					marine_opt.name="marine";
					marine_opt.value ="F"+(i+1); 
					$("#marine").append(marine_opt);
			 }
			$("#classG").css('visibility', 'visible'); $("#rocket").css('visibility', 'visible');
			$("#classG").html("过载倍数"); $("#rocket").html("");
			 for(var i=0 ;i<dataArr[6].length;i++){
				  var rocket_opt = document.createElement("option"); 
					rocket_opt.text = dataArr[6][i].Parts_Desc;
					rocket_opt.id="rocket";
					rocket_opt.name="rocket";
					rocket_opt.value ="G"+(i+1); 
					$("#rocket").append(rocket_opt);
			 }
			 
			$("#classH").css('visibility', 'visible'); $("#zebra").css('visibility', 'visible');
			$("#classH").html("编码器类型"); $("#zebra").html("");
			 for(var i=0 ;i<dataArr[7].length;i++){
				  var zebra_opt = document.createElement("option"); 
					zebra_opt.text = dataArr[7][i].Parts_Desc;
					zebra_opt.id="zebra";
					zebra_opt.name="zebra";
					zebra_opt.value ="H"+(i+1); 
					$("#zebra").append(zebra_opt);
			 }
			$("#classI").css('visibility', 'visible'); $("#eleph").css('visibility', 'visible');
			$("#classI").html("通讯方式"); $("#eleph").html("");
			 for(var i=0 ;i<dataArr[8].length;i++){
				  var eleph_opt = document.createElement("option"); 
					eleph_opt.text = dataArr[8][i].Parts_Desc;
					eleph_opt.id="eleph";
					eleph_opt.name="eleph";
					eleph_opt.value ="I"+(i+1); 
					$("#eleph").append(eleph_opt);
			 }
				$("#classJ").css('visibility', 'visible'); $("#eagle").css('visibility', 'visible');
				$("#classJ").html("电源供电"); $("#eagle").html("");
				 for(var i=0 ;i<dataArr[8].length;i++){
					  var eagle_opt = document.createElement("option"); 
						eagle_opt.text = dataArr[9][i].Parts_Desc;
						eagle_opt.id="eagle";
						eagle_opt.name="eagle";
						eagle_opt.value ="J"+(i+1); 
						$("#eagle").append(eagle_opt);
				 }
				 
				$("#classK").css('visibility', 'visible'); $("#tiger").css('visibility', 'visible');
				$("#classK").html("外设"); $("#tiger").html("");
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
				 for(var i=0 ;i<dataArr[10].length;i++){
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
        $("#classP").html(""); $("#hole").html("");
		$("#classQ").html(""); $("#xman").html("");
		$("#classR").html(""); $("#quita").html("");
		
		$("#classP").css('visibility', 'hidden'); $("#hole").css('visibility', 'hidden');
		$("#classQ").css('visibility', 'hidden'); $("#xman").css('visibility', 'hidden');
		$("#classR").css('visibility', 'hidden'); $("#quita").css('visibility', 'hidden');
		
    }   
	  if(selectValue=="A4"){
		  console.log("电机      " );
		   var pclass = "A4"; 
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
	 		 
		  $("#classC").html("基座号");   $("#sail").html("");
	 		 for(var i=0 ;i<dataArr[2].length;i++){
	 			  var sail_opt = document.createElement("option"); 
	 			    sail_opt.text = dataArr[2][i].Parts_Desc;
	 			    sail_opt.id="sail";
	 			    sail_opt.name="sail";
	 			    sail_opt.value ="C"+(i+1); 
	 			    $("#sail").append(sail_opt);
	 		 }
	 		$("#classD").html("型号"); $("#vessel").html("");
	 		 for(var i=0 ;i<dataArr[3].length;i++){
	 			  var vessel_opt = document.createElement("option"); 
	 			    vessel_opt.text = dataArr[3][i].Parts_Desc;
	 			    vessel_opt.id="vessel";
	 			    vessel_opt.name="vessel";
	 			    vessel_opt.value ="D"+(i+1); 
	 			    $("#vessel").append(vessel_opt);
	 		 }
	 		
	 		 $("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
	 		$("#classE").html("输入电压"); $("#tanker").html("");
	 		 for(var i=0 ;i<dataArr[4].length;i++){
	 			  var tanker_opt = document.createElement("option"); 
	 			    tanker_opt.text = dataArr[4][i].Parts_Desc;
	 			    tanker_opt.id="tanker";
	 			    tanker_opt.name="tanker";
	 			    tanker_opt.value ="E"+(i+1); 
	 			    $("#tanker").append(tanker_opt);
	 		 }
	 		 $("#classF").css('visibility', 'visible'); $("#marine").css('visibility', 'visible');
	 		$("#classF").html("转速"); $("#marine").html("");
	 		 for(var i=0 ;i<dataArr[5].length;i++){
	 			  var marine_opt = document.createElement("option"); 
	 			    marine_opt.text = dataArr[5][i].Parts_Desc;
	 			    marine_opt.id="marine";
	 			    marine_opt.name="marine";
	 			    marine_opt.value ="F"+(i+1); 
	 			    $("#marine").append(marine_opt);
	 		 }
	 	
	 		$("#classG").css('visibility', 'visible'); $("#rocket").css('visibility', 'visible');
	 		$("#classG").html("散热方式"); $("#rocket").html("");
	 		 for(var i=0 ;i<dataArr[6].length;i++){
	 			  var rocket_opt = document.createElement("option"); 
	 			    rocket_opt.text = dataArr[6][i].Parts_Desc;
	 			    rocket_opt.id="rocket";
	 			    rocket_opt.name="rocket";
	 			    rocket_opt.value ="G"+(i+1); 
	 			    $("#rocket").append(rocket_opt);
	 		 }
	 		
	 		$("#classH").css('visibility', 'visible'); $("#zebra").css('visibility', 'visible');
	 		$("#classH").html("键轴"); $("#zebra").html("");
	 		 for(var i=0 ;i<dataArr[7].length;i++){
	 			  var zebra_opt = document.createElement("option"); 
	 			    zebra_opt.text = dataArr[7][i].Parts_Desc;
	 			    zebra_opt.id="zebra";
	 			    zebra_opt.name="zebra";
	 			    zebra_opt.value ="H"+(i+1); 
	 			    $("#zebra").append(zebra_opt);
	 		 }
	 	
	 		$("#classI").css('visibility', 'visible'); $("#eleph").css('visibility', 'visible');
	 		$("#classI").html("编码器类型"); $("#eleph").html("");
	 		 for(var i=0 ;i<dataArr[8].length;i++){
	 			  var eleph_opt = document.createElement("option"); 
	 			    eleph_opt.text = dataArr[8][i].Parts_Desc;
	 			    eleph_opt.id="eleph";
	 			    eleph_opt.name="eleph";
	 			    eleph_opt.value ="I"+(i+1); 
	 			    $("#eleph").append(eleph_opt);
	 		 }
		 		$("#classJ").css('visibility', 'visible'); $("#eagle").css('visibility', 'visible');
		 		$("#classJ").html("接线盒方向 "); $("#eagle").html("");
		 		 for(var i=0 ;i<dataArr[9].length;i++){
		 			  var eagle_opt = document.createElement("option"); 
		 			    eagle_opt.text = dataArr[9][i].Parts_Desc;
		 			    eagle_opt.id="eagle";
		 			    eagle_opt.name="eagle";
		 			    eagle_opt.value ="J"+(i+1); 
		 			    $("#eagle").append(eagle_opt);
		 		 }
		 		console.log("            " );
			 		$("#classK").css('visibility', 'visible'); $("#tiger").css('visibility', 'visible');
			 		$("#classK").html("版本 "); $("#tiger").html("");
			 		 for(var i=0 ;i<dataArr[10].length;i++){
			 			  var tiger_opt = document.createElement("option"); 
			 			    tiger_opt.text = dataArr[10][i].Parts_Desc;
			 			    tiger_opt.id="tiger";
			 			    tiger_opt.name="tiger";
			 			    tiger_opt.value ="K"+(i+1); 
			 			    $("#tiger").append(tiger_opt);
			 		 }
				 		$("#classL").css('visibility', 'visible'); $("#lion").css('visibility', 'visible');
				 		$("#classL").html("包装 "); $("#lion").html("");
				 		 for(var i=0 ;i<dataArr[11].length;i++){
				 			  var lion_opt = document.createElement("option"); 
				 			    lion_opt.text = dataArr[11][i].Parts_Desc;
				 			    lion_opt.id="lion";
				 			    lion_opt.name="lion";
				 			    lion_opt.value ="L"+(i+1); 
				 			    $("#lion").append(lion_opt);
				 		 }
			 },
                error:function(){ 
                }
            })					 
	 		$("#classM").html(""); $("#horse").html("");
	 		$("#classO").html(""); $("#worm").html("");
	 		$("#classP").html(""); $("#hole").html("");
	 		$("#classQ").html(""); $("#xman").html("");
	 		$("#classR").html(""); $("#quita").html("");
	 		
	 	 	$("#classM").css('visibility', 'hidden'); $("#horse").css('visibility', 'hidden');
	 		$("#classO").css('visibility', 'hidden'); $("#worm").css('visibility', 'hidden');
	 		$("#classP").css('visibility', 'hidden'); $("#hole").css('visibility', 'hidden');
	 		$("#classQ").css('visibility', 'hidden'); $("#xman").css('visibility', 'hidden');
	 		$("#classR").css('visibility', 'hidden'); $("#quita").css('visibility', 'hidden');
	 		
	  }    
	  if(selectValue=="A5"){
		  console.log("油泵  " );
		  var pclass = "A5"; 
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
	 		
	 		$("#classD").html("排量"); $("#vessel").html("");
	 		 for(var i=0 ;i<dataArr[3].length;i++){
	 			  var vessel_opt = document.createElement("option"); 
	 			    vessel_opt.text = dataArr[3][i].Parts_Desc;
	 			    vessel_opt.id="vessel";
	 			    vessel_opt.name="vessel";
	 			    vessel_opt.value ="D"+(i+1); 
	 			    $("#vessel").append(vessel_opt);
	 		 }
	 		$("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
	 		$("#classE").html("键轴"); $("#tanker").html("");
	 		 for(var i=0 ;i<dataArr[4].length;i++){
	 			  var tanker_opt = document.createElement("option"); 
	 			    tanker_opt.text = dataArr[4][i].Parts_Desc;
	 			    tanker_opt.id="tanker";
	 			    tanker_opt.name="tanker";
	 			    tanker_opt.value ="E"+(i+1); 
	 			    $("#tanker").append(tanker_opt);
	 		 }
	 		$("#classF").css('visibility', 'visible'); $("#marine").css('visibility', 'visible');
	 		$("#classF").html("进油口方向"); $("#marine").html("");
	 		 for(var i=0 ;i<dataArr[0].length;i++){
	 			  var marine_opt = document.createElement("option"); 
	 			    marine_opt.text = dataArr[0][i].Parts_Desc;
	 			    marine_opt.id="marine";
	 			    marine_opt.name="marine";
	 			    marine_opt.value ="F"+(i+1); 
	 			    $("#marine").append(marine_opt);
	 		 }
	 		$("#classG").css('visibility', 'visible'); $("#rocket").css('visibility', 'visible');
	 		$("#classG").html("版本"); $("#rocket").html("");
	 		 for(var i=0 ;i<dataArr[5].length;i++){
	 			  var rocket_opt = document.createElement("option"); 
	 			    rocket_opt.text = dataArr[5][i].Parts_Desc;
	 			    rocket_opt.id="rocket";
	 			    rocket_opt.name="rocket";
	 			    rocket_opt.value ="G"+(i+1); 
	 			    $("#rocket").append(rocket_opt);
	 		 }
	  		$("#classH").css('visibility', 'visible'); $("#zebra").css('visibility', 'visible');
	 		$("#classH").html("包装"); $("#zebra").html("");
	 		 for(var i=0 ;i<dataArr[6].length;i++){
	 			  var zebra_opt = document.createElement("option"); 
	 			    zebra_opt.text = dataArr[6][i].Parts_Desc;
	 			    zebra_opt.id="zebra";
	 			    zebra_opt.name="zebra";
	 			    zebra_opt.value ="H"+(i+1); 
	 			    $("#zebra").append(zebra_opt);
	 		 }
			 			 },
                error:function(){ 
                }
            })	
	 		$("#classI").html(""); $("#eleph").html("");
	 		$("#classJ").html(""); $("#eagle").html("");
	 		$("#classK").html(""); $("#tiger").html("");
	 		$("#classL").html(""); $("#lion").html("");
	 		$("#classM").html(""); $("#horse").html("");
	 		$("#classO").html(""); $("#worm").html("");
	 		$("#classP").html(""); $("#hole").html("");
	 		$("#classQ").html(""); $("#xman").html("");
	 		$("#classR").html(""); $("#quita").html("");
	 		
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
}