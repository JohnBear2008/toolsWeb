 function ChangeF(selectValue) {
 
       
	   if(selectValue=="F1"){
		  console.log("电子尺" );
		  $("#classA").html("分类"); $("#boat").html("");
 		 for(var i=0 ;i<8;i++){
 			    var youoption = document.createElement("option"); 
			    youoption.text = "电子尺"+(i+1);
			    youoption.id="boat";
			    youoption.name="boat";
			    youoption.value ="D"+(i+1); 
			    $("#boat").append(youoption);
		 }
 		   
 		 $("#classB").html("系列");  $("#yacht").html("");
 		 for(var i=0 ;i<3;i++){
 			  var yaption = document.createElement("option"); 
 			    yaption.text = "系列"+(i+1);
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
 	   
 		 $("#classD").html("量程"); $("#vessel").html("");
 		 for(var i=0 ;i<6;i++){
 			  var vessel_opt = document.createElement("option"); 
 			    vessel_opt.text = "海内"+(i+1);
 			    vessel_opt.id="vessel";
 			    vessel_opt.name="vessel";
 			    vessel_opt.value ="D"+(i+1); 
 			    $("#vessel").append(vessel_opt);
 		 }
 		$("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
 		$("#classE").html("端口类型"); $("#tanker").html("");
		 for(var i=0 ;i<3;i++){
			  var tanker_opt = document.createElement("option"); 
			    tanker_opt.text = "ARM"+(i+1);
			    tanker_opt.id="tanker";
			    tanker_opt.name="tanker";
			    tanker_opt.value ="E"+(i+1); 
			    $("#tanker").append(tanker_opt);
		 }
		 $("#classF").css('visibility', 'visible'); $("#marine").css('visibility', 'visible');
 		$("#classF").html("版本"); $("#marine").html("");
 		 for(var i=0 ;i<3;i++){
 			  var marine_opt = document.createElement("option"); 
 			    marine_opt.text = "AM"+(i+1);
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
	   if(selectValue=="F2"){
			  console.log("编码器  分类 系列 型号 电源电压 输出方式 分辨率 版本 包装" );
			  $("#classA").html("分类"); $("#boat").html("");
	 		 for(var i=0 ;i<8;i++){
	 			    var youoption = document.createElement("option"); 
				    youoption.text = "电子尺"+(i+1);
				    youoption.id="boat";
				    youoption.name="boat";
				    youoption.value ="D"+(i+1); 
				    $("#boat").append(youoption);
			 }
	 		   
	 		 $("#classB").html("系列");  $("#yacht").html("");
	 		 for(var i=0 ;i<3;i++){
	 			  var yaption = document.createElement("option"); 
	 			    yaption.text = "系列"+(i+1);
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
	 	
	 		 $("#classD").html("电源电压"); $("#vessel").html("");
	 		 for(var i=0 ;i<6;i++){
	 			  var vessel_opt = document.createElement("option"); 
	 			    vessel_opt.text = "电源电压"+(i+1);
	 			    vessel_opt.id="vessel";
	 			    vessel_opt.name="vessel";
	 			    vessel_opt.value ="D"+(i+1); 
	 			    $("#vessel").append(vessel_opt);
	 		 }
	 		$("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
	 		$("#classE").html("输出方式"); $("#tanker").html("");
			 for(var i=0 ;i<3;i++){
				  var tanker_opt = document.createElement("option"); 
				    tanker_opt.text = "F"+(i+1);
				    tanker_opt.id="tanker";
				    tanker_opt.name="tanker";
				    tanker_opt.value ="E"+(i+1); 
				    $("#tanker").append(tanker_opt);
			 }
			 $("#classF").css('visibility', 'visible'); $("#marine").css('visibility', 'visible');
	 		$("#classF").html("分辨率"); $("#marine").html("");
	 		 for(var i=0 ;i<3;i++){
	 			  var marine_opt = document.createElement("option"); 
	 			    marine_opt.text = "S"+(i+1);
	 			    marine_opt.id="marine";
	 			    marine_opt.name="marine";
	 			    marine_opt.value ="F"+(i+1); 
	 			    $("#marine").append(marine_opt);
	 		 }
	 		$("#classG").css('visibility', 'visible'); $("#rocket").css('visibility', 'visible');
	 		$("#classG").html("版本"); $("#rocket").html("");
			 for(var i=0 ;i<4;i++){
				  var rocket_opt = document.createElement("option"); 
				    rocket_opt.text = "V"+(i+1);
				    rocket_opt.id="rocket";
				    rocket_opt.name="rocket";
				    rocket_opt.value ="G"+(i+1); 
				    $("#rocket").append(rocket_opt);
			 }
			$("#classH").css('visibility', 'visible'); $("#zebra").css('visibility', 'visible');
	 		$("#classH").html("包装"); $("#zebra").html("");
			 for(var i=0 ;i<4;i++){
				  var zebra_opt = document.createElement("option"); 
				    zebra_opt.text = "盒"+(i+1);
				    zebra_opt.id="zebra";
				    zebra_opt.name="zebra";
				    zebra_opt.value ="G"+(i+1); 
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
	   if(selectValue=="F3"){
			  console.log("伺服阀 分类 系列 型号 通径 电气控制 先导控制 弹簧位 遮盖 版本 包装" );
			  $("#classA").html("分类"); $("#boat").html("");
	 		 for(var i=0 ;i<8;i++){
	 			    var youoption = document.createElement("option"); 
				    youoption.text = "电子尺"+(i+1);
				    youoption.id="boat";
				    youoption.name="boat";
				    youoption.value ="D"+(i+1); 
				    $("#boat").append(youoption);
			 }
	 		   
	 		 $("#classB").html("系列");  $("#yacht").html("");
	 		 for(var i=0 ;i<3;i++){
	 			  var yaption = document.createElement("option"); 
	 			    yaption.text = "系列"+(i+1);
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
	 		
	 		 $("#classD").html("通径"); $("#vessel").html("");
	 		 for(var i=0 ;i<6;i++){
	 			  var vessel_opt = document.createElement("option"); 
	 			    vessel_opt.text = "通径"+(i+1);
	 			    vessel_opt.id="vessel";
	 			    vessel_opt.name="vessel";
	 			    vessel_opt.value ="D"+(i+1); 
	 			    $("#vessel").append(vessel_opt);
	 		 }
	 		$("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
	 		$("#classE").html("电气控制"); $("#tanker").html("");
			 for(var i=0 ;i<3;i++){
				  var tanker_opt = document.createElement("option"); 
				    tanker_opt.text = "FF"+(i+1);
				    tanker_opt.id="tanker";
				    tanker_opt.name="tanker";
				    tanker_opt.value ="E"+(i+1); 
				    $("#tanker").append(tanker_opt);
			 }
			
			 $("#classF").css('visibility', 'visible'); $("#marine").css('visibility', 'visible');
	 		$("#classF").html("先导控制"); $("#marine").html("");
	 		 for(var i=0 ;i<3;i++){
	 			  var marine_opt = document.createElement("option"); 
	 			    marine_opt.text = "先导控制"+(i+1);
	 			    marine_opt.id="marine";
	 			    marine_opt.name="marine";
	 			    marine_opt.value ="F"+(i+1); 
	 			    $("#marine").append(marine_opt);
	 		 }
	 		$("#classG").css('visibility', 'visible'); $("#rocket").css('visibility', 'visible');
	 		$("#classG").html("弹簧位"); $("#rocket").html("");
			 for(var i=0 ;i<4;i++){
				  var rocket_opt = document.createElement("option"); 
				    rocket_opt.text = "V"+(i+1);
				    rocket_opt.id="rocket";
				    rocket_opt.name="rocket";
				    rocket_opt.value ="G"+(i+1); 
				    $("#rocket").append(rocket_opt);
			 } 
			$("#classH").css('visibility', 'visible'); $("#zebra").css('visibility', 'visible');
	 		$("#classH").html("遮盖"); $("#zebra").html("");
			 for(var i=0 ;i<4;i++){
				  var zebra_opt = document.createElement("option"); 
				    zebra_opt.text = "遮盖"+(i+1);
				    zebra_opt.id="zebra";
				    zebra_opt.name="zebra";
				    zebra_opt.value ="H"+(i+1); 
				    $("#zebra").append(zebra_opt);
			 }
			$("#classI").css('visibility', 'visible'); $("#eleph").css('visibility', 'visible');
	 		$("#classI").html("版本"); $("#eleph").html("");
			 for(var i=0 ;i<4;i++){
				  var eleph_opt = document.createElement("option"); 
				    eleph_opt.text = "版本"+(i+1);
				    eleph_opt.id="eleph";
				    eleph_opt.name="eleph";
				    eleph_opt.value ="H"+(i+1); 
				    $("#eleph").append(eleph_opt);
			 }
			 $("#classJ").css('visibility', 'visible'); $("#eagle").css('visibility', 'visible');
	 		 $("#classJ").html("包装"); $("#eagle").html("");
			 for(var i=0 ;i<4;i++){
				  var eagle_opt = document.createElement("option"); 
				    eagle_opt.text = "盒"+(i+1);
				    eagle_opt.id="eagle";
				    eagle_opt.name="eagle";
				    eagle_opt.value ="H"+(i+1); 
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
	   if(selectValue=="F4"){
			  console.log("压力传感器 分类 系列 型号 额定压力 电气输出 版本 包装" );
			  $("#classA").html("分类"); $("#boat").html("");
	 		 for(var i=0 ;i<8;i++){
	 			    var youoption = document.createElement("option"); 
				    youoption.text = "电子尺"+(i+1);
				    youoption.id="boat";
				    youoption.name="boat";
				    youoption.value ="D"+(i+1); 
				    $("#boat").append(youoption);
			 }
	 		   
	 		 $("#classB").html("系列");  $("#yacht").html("");
	 		 for(var i=0 ;i<3;i++){
	 			  var yaption = document.createElement("option"); 
	 			    yaption.text = "系列"+(i+1);
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
	 		
	 		 $("#classD").html("额定压力"); $("#vessel").html("");
	 		 for(var i=0 ;i<6;i++){
	 			  var vessel_opt = document.createElement("option"); 
	 			    vessel_opt.text = "P"+(i+1);
	 			    vessel_opt.id="vessel";
	 			    vessel_opt.name="vessel";
	 			    vessel_opt.value ="D"+(i+1); 
	 			    $("#vessel").append(vessel_opt);
	 		 }
	 		$("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
	 		$("#classE").html("电气输出"); $("#tanker").html("");
			 for(var i=0 ;i<3;i++){
				  var tanker_opt = document.createElement("option"); 
				    tanker_opt.text = "out"+(i+1);
				    tanker_opt.id="tanker";
				    tanker_opt.name="tanker";
				    tanker_opt.value ="E"+(i+1); 
				    $("#tanker").append(tanker_opt);
			 }
			 $("#classF").css('visibility', 'visible'); $("#marine").css('visibility', 'visible');
	 		$("#classF").html("先导控制"); $("#marine").html("");
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
				    rocket_opt.text = "V"+(i+1);
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
	   if(selectValue=="F5" || selectValue=="F6"){
			  console.log("电抗器  分类 系列 型号 额定电流 输入电压 版本 包装" );
			  $("#classA").html("分类"); $("#boat").html("");
	 		 for(var i=0 ;i<8;i++){
	 			    var youoption = document.createElement("option"); 
				    youoption.text = "A"+(i+1);
				    youoption.id="boat";
				    youoption.name="boat";
				    youoption.value ="D"+(i+1); 
				    $("#boat").append(youoption);
			 }
	 		   
	 		 $("#classB").html("系列");  $("#yacht").html("");
	 		 for(var i=0 ;i<3;i++){
	 			  var yaption = document.createElement("option"); 
	 			    yaption.text = "系列"+(i+1);
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
	 		  
	 		 $("#classD").html("额定电流"); $("#vessel").html("");
	 		 for(var i=0 ;i<6;i++){
	 			  var vessel_opt = document.createElement("option"); 
	 			    vessel_opt.text = "P"+(i+1);
	 			    vessel_opt.id="vessel";
	 			    vessel_opt.name="vessel";
	 			    vessel_opt.value ="D"+(i+1); 
	 			    $("#vessel").append(vessel_opt);
	 		 }
	 		$("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
	 		$("#classE").html("输入电压"); $("#tanker").html("");
			 for(var i=0 ;i<3;i++){
				  var tanker_opt = document.createElement("option"); 
				    tanker_opt.text = "out"+(i+1);
				    tanker_opt.id="tanker";
				    tanker_opt.name="tanker";
				    tanker_opt.value ="E"+(i+1); 
				    $("#tanker").append(tanker_opt);
			 }
			 $("#classF").css('visibility', 'visible'); $("#marine").css('visibility', 'visible');
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
				    rocket_opt.text = "盒"+(i+1);
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
	   if(selectValue=="F7"){
			  console.log("刹车电阻  分类 系列 型号 功率 阻值 引线长 版本 包装" );
			  $("#classA").html("分类"); $("#boat").html("");
	 		 for(var i=0 ;i<8;i++){
	 			    var youoption = document.createElement("option"); 
				    youoption.text = "电子尺"+(i+1);
				    youoption.id="boat";
				    youoption.name="boat";
				    youoption.value ="D"+(i+1); 
				    $("#boat").append(youoption);
			 }
	 		   
	 		 $("#classB").html("系列");  $("#yacht").html("");
	 		 for(var i=0 ;i<3;i++){
	 			  var yaption = document.createElement("option"); 
	 			    yaption.text = "系列"+(i+1);
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
	 		
	 		 $("#classD").html("功率"); $("#vessel").html("");
	 		 for(var i=0 ;i<6;i++){
	 			  var vessel_opt = document.createElement("option"); 
	 			    vessel_opt.text = "P"+(i+1);
	 			    vessel_opt.id="vessel";
	 			    vessel_opt.name="vessel";
	 			    vessel_opt.value ="D"+(i+1); 
	 			    $("#vessel").append(vessel_opt);
	 		 }
	 		$("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
	 		$("#classE").html("阻值"); $("#tanker").html("");
			 for(var i=0 ;i<3;i++){
				  var tanker_opt = document.createElement("option"); 
				    tanker_opt.text = "out"+(i+1);
				    tanker_opt.id="tanker";
				    tanker_opt.name="tanker";
				    tanker_opt.value ="E"+(i+1); 
				    $("#tanker").append(tanker_opt);
			 }
			 $("#classF").css('visibility', 'visible'); $("#marine").css('visibility', 'visible');
	 		$("#classF").html("引线长"); $("#marine").html("");
	 		 for(var i=0 ;i<3;i++){
	 			  var marine_opt = document.createElement("option"); 
	 			    marine_opt.text = "引线长"+(i+1);
	 			    marine_opt.id="marine";
	 			    marine_opt.name="marine";
	 			    marine_opt.value ="F"+(i+1); 
	 			    $("#marine").append(marine_opt);
	 		 }
	 		  console.log("     " );
	 		$("#classG").css('visibility', 'visible'); $("#rocket").css('visibility', 'visible');
	 		$("#classG").html("版本"); $("#rocket").html("");
			 for(var i=0 ;i<4;i++){
				  var rocket_opt = document.createElement("option"); 
				    rocket_opt.text = "V"+(i+1);
				    rocket_opt.id="rocket";
				    rocket_opt.name="rocket";
				    rocket_opt.value ="G"+(i+1); 
				    $("#rocket").append(rocket_opt);
			 } 
		 		$("#classH").css('visibility', 'visible'); $("#zebra").css('visibility', 'visible');
		 		$("#classH").html("包装"); $("#zebra").html("");
				 for(var i=0 ;i<4;i++){
					  var zebra_opt = document.createElement("option"); 
					    zebra_opt.text = "盒"+(i+1);
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
	   if(selectValue=="F8"){
			  console.log("压电盘  分类 系列 型号 额定量程 安装直径 电气输出 版本 包装" );
			  $("#classA").html("分类"); $("#boat").html("");
	 		 for(var i=0 ;i<8;i++){
	 			    var youoption = document.createElement("option"); 
				    youoption.text = "电子尺"+(i+1);
				    youoption.id="boat";
				    youoption.name="boat";
				    youoption.value ="D"+(i+1); 
				    $("#boat").append(youoption);
			 }
	 		   
	 		 $("#classB").html("系列");  $("#yacht").html("");
	 		 for(var i=0 ;i<3;i++){
	 			  var yaption = document.createElement("option"); 
	 			    yaption.text = "系列"+(i+1);
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
	 		
	 		 $("#classD").html("额定量程"); $("#vessel").html("");
	 		 for(var i=0 ;i<6;i++){
	 			  var vessel_opt = document.createElement("option"); 
	 			    vessel_opt.text = "P"+(i+1);
	 			    vessel_opt.id="vessel";
	 			    vessel_opt.name="vessel";
	 			    vessel_opt.value ="D"+(i+1); 
	 			    $("#vessel").append(vessel_opt);
	 		 }
	 		$("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
	 		$("#classE").html("安装直径"); $("#tanker").html("");
			 for(var i=0 ;i<3;i++){
				  var tanker_opt = document.createElement("option"); 
				    tanker_opt.text = "out"+(i+1);
				    tanker_opt.id="tanker";
				    tanker_opt.name="tanker";
				    tanker_opt.value ="E"+(i+1); 
				    $("#tanker").append(tanker_opt);
			 }
			 $("#classF").css('visibility', 'visible'); $("#marine").css('visibility', 'visible');
	 		$("#classF").html("电气输出"); $("#marine").html("");
	 		 for(var i=0 ;i<3;i++){
	 			  var marine_opt = document.createElement("option"); 
	 			    marine_opt.text = "电气输出"+(i+1);
	 			    marine_opt.id="marine";
	 			    marine_opt.name="marine";
	 			    marine_opt.value ="F"+(i+1); 
	 			    $("#marine").append(marine_opt);
	 		 }
	 		$("#classG").css('visibility', 'visible'); $("#rocket").css('visibility', 'visible');
	 		$("#classG").html("版本"); $("#rocket").html("");
			 for(var i=0 ;i<4;i++){
				  var rocket_opt = document.createElement("option"); 
				    rocket_opt.text = "V"+(i+1);
				    rocket_opt.id="rocket";
				    rocket_opt.name="rocket";
				    rocket_opt.value ="G"+(i+1); 
				    $("#rocket").append(rocket_opt);
			 } 
		 		$("#classH").css('visibility', 'visible'); $("#zebra").css('visibility', 'visible');
		 		$("#classH").html("包装"); $("#zebra").html("");
				 for(var i=0 ;i<4;i++){
					  var zebra_opt = document.createElement("option"); 
					    zebra_opt.text = "盒"+(i+1);
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
function GoldF(selectValue) { 
	if(selectValue=="F1"){
		console.log("电子尺" );
			var pclass = "F1"; 
			let dataArr=[];
			var reportType='goldRec';
			var taskData ={"reportType":reportType,  "pclass": pclass   };
			 $.ajax({
				    method:'post',
				    data:taskData,
				    url:"/app/TMCode/getRoute",
				    success:function(data){
					    dataArr =data;
				    console.log("百里",  (dataArr.length),"上官", JSON.stringify(dataArr)  );
		$("#classA").html("分类"); $("#boat").html("");
		for(var i=0 ;i<dataArr[0].length;i++){
			   var youoption = document.createElement("option"); 
			  youoption.text = dataArr[0][i].Parts_Desc;
			  youoption.id="boat";
			  youoption.name="boat";
			  youoption.value ="D"+(i+1); 
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
	  
		$("#classD").html("量程"); $("#vessel").html("");
		for(var i=0 ;i<dataArr[3].length;i++){
			 var vessel_opt = document.createElement("option"); 
			   vessel_opt.text = dataArr[3][i].Parts_Desc;
			   vessel_opt.id="vessel";
			   vessel_opt.name="vessel";
			   vessel_opt.value ="D"+(i+1); 
			   $("#vessel").append(vessel_opt);
		}
	     $("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
	     $("#classE").html("端口类型"); $("#tanker").html("");
	     for(var i=0 ;i<dataArr[4].length;i++){
			var tanker_opt = document.createElement("option"); 
			  tanker_opt.text = dataArr[4][i].Parts_Desc;
			  tanker_opt.id="tanker";
			  tanker_opt.name="tanker";
			  tanker_opt.value ="E"+(i+1); 
			  $("#tanker").append(tanker_opt);
	     }
	     $("#classF").css('visibility', 'visible'); $("#marine").css('visibility', 'visible');
	     $("#classF").html("版本"); $("#marine").html("");
		for(var i=0 ;i<dataArr[5].length;i++){
			 var marine_opt = document.createElement("option"); 
			   marine_opt.text = dataArr[5][i].Parts_Desc;
			   marine_opt.id="marine";
			   marine_opt.name="marine";
			   marine_opt.value ="F"+(i+1); 
			   $("#marine").append(marine_opt);
		}
	     $("#classG").css('visibility', 'visible'); $("#rocket").css('visibility', 'visible');
	     $("#classG").html("包装"); $("#rocket").html("");
	     for(var i=0 ;i<dataArr[6].length;i++){
			var rocket_opt = document.createElement("option"); 
			  rocket_opt.text = dataArr[6][i].Parts_Desc;
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
	if(selectValue=="F2"){
		console.log("编码器  分类 系列 型号 电源电压 输出方式 分辨率 版本 包装" );
		var pclass = "F2"; 
		let dataArr=[];
		var reportType='goldRec';
		var taskData ={"reportType":reportType,  "pclass": pclass   };
		 $.ajax({
			    method:'post',
			    data:taskData,
			    url:"/app/TMCode/getRoute",
			    success:function(data){
				    dataArr =data;
			    console.log("百里",  (dataArr.length),"上官", JSON.stringify(dataArr)  );
     
		$("#classA").html("分类"); $("#boat").html("");
		for(var i=0 ;i<dataArr[0].length;i++){
			   var youoption = document.createElement("option"); 
			  youoption.text = dataArr[0][i].Parts_Desc;
			  youoption.id="boat";
			  youoption.name="boat";
			  youoption.value ="D"+(i+1); 
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
     
		$("#classD").html("电源电压"); $("#vessel").html("");
		for(var i=0 ;i<dataArr[3].length;i++){
			 var vessel_opt = document.createElement("option"); 
			   vessel_opt.text = dataArr[3][i].Parts_Desc;
			   vessel_opt.id="vessel";
			   vessel_opt.name="vessel";
			   vessel_opt.value ="D"+(i+1); 
			   $("#vessel").append(vessel_opt);
		}
	     $("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
	     $("#classE").html("输出方式"); $("#tanker").html("");
	     for(var i=0 ;i<dataArr[4].length;i++){
			var tanker_opt = document.createElement("option"); 
			  tanker_opt.text = dataArr[4][i].Parts_Desc;
			  tanker_opt.id="tanker";
			  tanker_opt.name="tanker";
			  tanker_opt.value ="E"+(i+1); 
			  $("#tanker").append(tanker_opt);
	     }
	     $("#classF").css('visibility', 'visible'); $("#marine").css('visibility', 'visible');
	     $("#classF").html("分辨率"); $("#marine").html("");
		for(var i=0 ;i<dataArr[5].length;i++){
			 var marine_opt = document.createElement("option"); 
			   marine_opt.text = dataArr[5][i].Parts_Desc;
			   marine_opt.id="marine";
			   marine_opt.name="marine";
			   marine_opt.value ="F"+(i+1); 
			   $("#marine").append(marine_opt);
		}
	     $("#classG").css('visibility', 'visible'); $("#rocket").css('visibility', 'visible');
	     $("#classG").html("版本"); $("#rocket").html("");
	     for(var i=0 ;i<dataArr[6].length;i++){
			var rocket_opt = document.createElement("option"); 
			  rocket_opt.text = dataArr[6][i].Parts_Desc;
			  rocket_opt.id="rocket";
			  rocket_opt.name="rocket";
			  rocket_opt.value ="G"+(i+1); 
			  $("#rocket").append(rocket_opt);
	     }
	    $("#classH").css('visibility', 'visible'); $("#zebra").css('visibility', 'visible');
	     $("#classH").html("包装"); $("#zebra").html("");
	     for(var i=0 ;i<dataArr[7].length;i++){
			var zebra_opt = document.createElement("option"); 
			  zebra_opt.text = dataArr[7][i].Parts_Desc;
			  zebra_opt.id="zebra";
			  zebra_opt.name="zebra";
			  zebra_opt.value ="G"+(i+1); 
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
	if(selectValue=="F3"){
		console.log("伺服阀 分类 系列 型号 通径 电气控制 先导控制 弹簧位 遮盖 版本 包装" );
		var pclass = "F3"; 
		let dataArr=[];
		var reportType='goldRec';
		var taskData ={"reportType":reportType,  "pclass": pclass   };
		 $.ajax({
			    method:'post',
			    data:taskData,
			    url:"/app/TMCode/getRoute",
			    success:function(data){
				    dataArr =data;
			    console.log("百里",  (dataArr.length),"上官", JSON.stringify(dataArr)  );
     
		$("#classA").html("分类"); $("#boat").html("");
		for(var i=0 ;i<dataArr[0].length;i++){
			   var youoption = document.createElement("option"); 
			  youoption.text =  dataArr[0][i].Parts_Desc;
			  youoption.id="boat";
			  youoption.name="boat";
			  youoption.value ="D"+(i+1); 
			  $("#boat").append(youoption);
	     }
		  
		$("#classB").html("系列");  $("#yacht").html("");
		for(var i=0 ;i<dataArr[1].length;i++){
			 var yaption = document.createElement("option"); 
			   yaption.text =  dataArr[1][i].Parts_Desc;
			   yaption.id="yacht";
			   yaption.name="yacht";
			   yaption.value ="B"+(i+1); 
			   $("#yacht").append(yaption);
		}
		$("#classC").html("型号"); $("#sail").html("");
		for(var i=0 ;i<dataArr[2].length;i++){
			 var sail_opt = document.createElement("option"); 
			   sail_opt.text =  dataArr[2][i].Parts_Desc;
			   sail_opt.id="sail";
			   sail_opt.name="sail";
			   sail_opt.value ="C"+(i+1); 
			   $("#sail").append(sail_opt);
		}
	     
		$("#classD").html("通径"); $("#vessel").html("");
		for(var i=0 ;i<dataArr[3].length;i++){
			 var vessel_opt = document.createElement("option"); 
			   vessel_opt.text =  dataArr[3][i].Parts_Desc;
			   vessel_opt.id="vessel";
			   vessel_opt.name="vessel";
			   vessel_opt.value ="D"+(i+1); 
			   $("#vessel").append(vessel_opt);
		}
	     $("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
	     $("#classE").html("电气控制"); $("#tanker").html("");
	     for(var i=0 ;i<dataArr[4].length;i++){
			var tanker_opt = document.createElement("option"); 
			  tanker_opt.text =  dataArr[4][i].Parts_Desc;
			  tanker_opt.id="tanker";
			  tanker_opt.name="tanker";
			  tanker_opt.value ="E"+(i+1); 
			  $("#tanker").append(tanker_opt);
	     }
	    
	     $("#classF").css('visibility', 'visible'); $("#marine").css('visibility', 'visible');
	     $("#classF").html("先导控制"); $("#marine").html("");
		for(var i=0 ;i<dataArr[5].length;i++){
			 var marine_opt = document.createElement("option"); 
			   marine_opt.text =  dataArr[5][i].Parts_Desc;
			   marine_opt.id="marine";
			   marine_opt.name="marine";
			   marine_opt.value ="F"+(i+1); 
			   $("#marine").append(marine_opt);
		}
	     $("#classG").css('visibility', 'visible'); $("#rocket").css('visibility', 'visible');
	     $("#classG").html("弹簧位"); $("#rocket").html("");
	     for(var i=0 ;i<dataArr[6].length;i++){
			var rocket_opt = document.createElement("option"); 
			  rocket_opt.text =  dataArr[6][i].Parts_Desc;
			  rocket_opt.id="rocket";
			  rocket_opt.name="rocket";
			  rocket_opt.value ="G"+(i+1); 
			  $("#rocket").append(rocket_opt);
	     } 
	    $("#classH").css('visibility', 'visible'); $("#zebra").css('visibility', 'visible');
	     $("#classH").html("遮盖"); $("#zebra").html("");
	     for(var i=0 ;i<dataArr[7].length;i++){
			var zebra_opt = document.createElement("option"); 
			  zebra_opt.text =  dataArr[7][i].Parts_Desc;
			  zebra_opt.id="zebra";
			  zebra_opt.name="zebra";
			  zebra_opt.value ="H"+(i+1); 
			  $("#zebra").append(zebra_opt);
	     }
	    $("#classI").css('visibility', 'visible'); $("#eleph").css('visibility', 'visible');
	     $("#classI").html("版本"); $("#eleph").html("");
	     for(var i=0 ;i<dataArr[8].length;i++){
			var eleph_opt = document.createElement("option"); 
			  eleph_opt.text =  dataArr[8][i].Parts_Desc;
			  eleph_opt.id="eleph";
			  eleph_opt.name="eleph";
			  eleph_opt.value ="H"+(i+1); 
			  $("#eleph").append(eleph_opt);
	     }
	     $("#classJ").css('visibility', 'visible'); $("#eagle").css('visibility', 'visible');
		$("#classJ").html("包装"); $("#eagle").html("");
	     for(var i=0 ;i<dataArr[9].length;i++){
			var eagle_opt = document.createElement("option"); 
			  eagle_opt.text =  dataArr[9][i].Parts_Desc;
			  eagle_opt.id="eagle";
			  eagle_opt.name="eagle";
			  eagle_opt.value ="H"+(i+1); 
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
	if(selectValue=="F4"){
		console.log("压力传感器 分类 系列 型号 额定压力 电气输出 版本 包装" );
		var pclass = "F4"; 
		let dataArr=[];
		var reportType='goldRec';
		var taskData ={"reportType":reportType,  "pclass": pclass   };
		 $.ajax({
			    method:'post',
			    data:taskData,
			    url:"/app/TMCode/getRoute",
			    success:function(data){
				    dataArr =data;
			    console.log("百里",  (dataArr.length),"上官", JSON.stringify(dataArr)  );
     
		$("#classA").html("分类"); $("#boat").html("");
		for(var i=0 ;i<dataArr[0].length;i++){
			   var youoption = document.createElement("option"); 
			  youoption.text = dataArr[0][i].Parts_Desc;
			  youoption.id="boat";
			  youoption.name="boat";
			  youoption.value ="D"+(i+1); 
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
	     
		$("#classD").html("额定压力"); $("#vessel").html("");
		for(var i=0 ;i<dataArr[3].length;i++){
			 var vessel_opt = document.createElement("option"); 
			   vessel_opt.text = dataArr[3][i].Parts_Desc;
			   vessel_opt.id="vessel";
			   vessel_opt.name="vessel";
			   vessel_opt.value ="D"+(i+1); 
			   $("#vessel").append(vessel_opt);
		}
	     $("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
	     $("#classE").html("电气输出"); $("#tanker").html("");
	     for(var i=0 ;i<dataArr[4].length;i++){
			var tanker_opt = document.createElement("option"); 
			  tanker_opt.text = dataArr[4][i].Parts_Desc;
			  tanker_opt.id="tanker";
			  tanker_opt.name="tanker";
			  tanker_opt.value ="E"+(i+1); 
			  $("#tanker").append(tanker_opt);
	     }
	     $("#classF").css('visibility', 'visible'); $("#marine").css('visibility', 'visible');
	     $("#classF").html("先导控制"); $("#marine").html("");
		for(var i=0 ;i<dataArr[5].length;i++){
			 var marine_opt = document.createElement("option"); 
			   marine_opt.text = dataArr[5][i].Parts_Desc;
			   marine_opt.id="marine";
			   marine_opt.name="marine";
			   marine_opt.value ="F"+(i+1); 
			   $("#marine").append(marine_opt);
		}
	     $("#classG").css('visibility', 'visible'); $("#rocket").css('visibility', 'visible');
	     $("#classG").html("包装"); $("#rocket").html("");
	     for(var i=0 ;i<dataArr[6].length;i++){
			var rocket_opt = document.createElement("option"); 
			  rocket_opt.text = dataArr[6][i].Parts_Desc;
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
	if(selectValue=="F5" || selectValue=="F6"){
		console.log("电抗器  分类 系列 型号 额定电流 输入电压 版本 包装" );
		
		var pclass = "F5"; 
		let dataArr=[];
		var reportType='goldRec';
		var taskData ={"reportType":reportType,  "pclass": pclass   };
		 $.ajax({
			    method:'post',
			    data:taskData,
			    url:"/app/TMCode/getRoute",
			    success:function(data){
				    dataArr =data;
			    console.log("百里",  (dataArr.length),"上官", JSON.stringify(dataArr)  );
     
     
		$("#classA").html("分类"); $("#boat").html("");
		for(var i=0 ;i<dataArr[0].length;i++){
			   var youoption = document.createElement("option"); 
			  youoption.text = dataArr[0][i].Parts_Desc;
			  youoption.id="boat";
			  youoption.name="boat";
			  youoption.value ="D"+(i+1); 
			  $("#boat").append(youoption);
	     }
		  
		$("#classB").html("系列");  $("#yacht").html("");
		for(var i=0 ;i<dataArr[1].length;i++){
			 var yaption = document.createElement("option"); 
			   yaption.text =  dataArr[1][i].Parts_Desc;
			   yaption.id="yacht";
			   yaption.name="yacht";
			   yaption.value ="B"+(i+1); 
			   $("#yacht").append(yaption);
		}
		$("#classC").html("型号"); $("#sail").html("");
		for(var i=0 ;i<dataArr[2].length;i++){
			 var sail_opt = document.createElement("option"); 
			   sail_opt.text =  dataArr[2][i].Parts_Desc;
			   sail_opt.id="sail";
			   sail_opt.name="sail";
			   sail_opt.value ="C"+(i+1); 
			   $("#sail").append(sail_opt);
		}
		 
		$("#classD").html("额定电流"); $("#vessel").html("");
		for(var i=0 ;i<dataArr[3].length;i++){
			 var vessel_opt = document.createElement("option"); 
			   vessel_opt.text =  dataArr[3][i].Parts_Desc;
			   vessel_opt.id="vessel";
			   vessel_opt.name="vessel";
			   vessel_opt.value ="D"+(i+1); 
			   $("#vessel").append(vessel_opt);
		}
	     $("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
	     $("#classE").html("输入电压"); $("#tanker").html("");
	     for(var i=0 ;i<dataArr[4].length;i++){
			var tanker_opt = document.createElement("option"); 
			  tanker_opt.text =  dataArr[4][i].Parts_Desc;
			  tanker_opt.id="tanker";
			  tanker_opt.name="tanker";
			  tanker_opt.value ="E"+(i+1); 
			  $("#tanker").append(tanker_opt);
	     }
	     $("#classF").css('visibility', 'visible'); $("#marine").css('visibility', 'visible');
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
			  rocket_opt.text = dataArr[6][i].Parts_Desc;
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
	if(selectValue=="F7"){
		console.log("刹车电阻  分类 系列 型号 功率 阻值 引线长 版本 包装" );
		 var pclass = "F7"; 
		let dataArr=[];
		var reportType='goldRec';
		var taskData ={"reportType":reportType,  "pclass": pclass   };
		 $.ajax({
			    method:'post',
			    data:taskData,
			    url:"/app/TMCode/getRoute",
			    success:function(data){
				    dataArr =data;
			    console.log("百里",  (dataArr.length),"上官", JSON.stringify(dataArr)  );
     
		$("#classA").html("分类"); $("#boat").html("");
		for(var i=0 ;i<dataArr[0].length;i++){
			   var youoption = document.createElement("option"); 
			  youoption.text = dataArr[0][i].Parts_Desc;
			  youoption.id="boat";
			  youoption.name="boat";
			  youoption.value ="D"+(i+1); 
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
	     
		$("#classD").html("功率"); $("#vessel").html("");
		for(var i=0 ;i<dataArr[3].length;i++){
			 var vessel_opt = document.createElement("option"); 
			   vessel_opt.text = dataArr[3][i].Parts_Desc;
			   vessel_opt.id="vessel";
			   vessel_opt.name="vessel";
			   vessel_opt.value ="D"+(i+1); 
			   $("#vessel").append(vessel_opt);
		}
	     $("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
	     $("#classE").html("阻值"); $("#tanker").html("");
	     for(var i=0 ;i<dataArr[4].length;i++){
			var tanker_opt = document.createElement("option"); 
			  tanker_opt.text = dataArr[4][i].Parts_Desc;
			  tanker_opt.id="tanker";
			  tanker_opt.name="tanker";
			  tanker_opt.value ="E"+(i+1); 
			  $("#tanker").append(tanker_opt);
	     }
	     $("#classF").css('visibility', 'visible'); $("#marine").css('visibility', 'visible');
	     $("#classF").html("引线长"); $("#marine").html("");
		for(var i=0 ;i<dataArr[5].length;i++){
			 var marine_opt = document.createElement("option"); 
			   marine_opt.text = dataArr[5][i].Parts_Desc;
			   marine_opt.id="marine";
			   marine_opt.name="marine";
			   marine_opt.value ="F"+(i+1); 
			   $("#marine").append(marine_opt);
		}
		 console.log("     " );
	     $("#classG").css('visibility', 'visible'); $("#rocket").css('visibility', 'visible');
	     $("#classG").html("版本"); $("#rocket").html("");
	     for(var i=0 ;i<dataArr[6].length;i++){
			var rocket_opt = document.createElement("option"); 
			  rocket_opt.text = dataArr[6][i].Parts_Desc;
			  rocket_opt.id="rocket";
			  rocket_opt.name="rocket";
			  rocket_opt.value ="G"+(i+1); 
			  $("#rocket").append(rocket_opt);
	     } 
		     $("#classH").css('visibility', 'visible'); $("#zebra").css('visibility', 'visible');
		     $("#classH").html("包装"); $("#zebra").html("");
		     for(var i=0 ;i<dataArr[7].length;i++){
				var zebra_opt = document.createElement("option"); 
				  zebra_opt.text = dataArr[7][i].Parts_Desc;
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
	if(selectValue=="F8"){
		console.log("压电盘  分类 系列 型号 额定量程 安装直径 电气输出 版本 包装" );
		 var pclass = "F8"; 
		let dataArr=[];
		var reportType='goldRec';
		var taskData ={"reportType":reportType,  "pclass": pclass   };
		 $.ajax({
			    method:'post',
			    data:taskData,
			    url:"/app/TMCode/getRoute",
			    success:function(data){
				    dataArr =data;
			    console.log("百里",  (dataArr.length),"上官", JSON.stringify(dataArr)  );
     
		$("#classA").html("分类"); $("#boat").html("");
		for(var i=0 ;i<dataArr[0].length;i++){
			   var youoption = document.createElement("option"); 
			  youoption.text =  dataArr[0][i].Parts_Desc;
			  youoption.id="boat";
			  youoption.name="boat";
			  youoption.value ="D"+(i+1); 
			  $("#boat").append(youoption);
	     }
		  
		$("#classB").html("系列");  $("#yacht").html("");
		for(var i=0 ;i<dataArr[1].length;i++){
			 var yaption = document.createElement("option"); 
			   yaption.text =  dataArr[1][i].Parts_Desc;
			   yaption.id="yacht";
			   yaption.name="yacht";
			   yaption.value ="B"+(i+1); 
			   $("#yacht").append(yaption);
		}
		$("#classC").html("型号"); $("#sail").html("");
		for(var i=0 ;i<dataArr[2].length;i++){
			 var sail_opt = document.createElement("option"); 
			   sail_opt.text =  dataArr[2][i].Parts_Desc;
			   sail_opt.id="sail";
			   sail_opt.name="sail";
			   sail_opt.value ="C"+(i+1); 
			   $("#sail").append(sail_opt);
		}
	     
		$("#classD").html("额定量程"); $("#vessel").html("");
		for(var i=0 ;i<dataArr[3].length;i++){
			 var vessel_opt = document.createElement("option"); 
			   vessel_opt.text =  dataArr[3][i].Parts_Desc;
			   vessel_opt.id="vessel";
			   vessel_opt.name="vessel";
			   vessel_opt.value ="D"+(i+1); 
			   $("#vessel").append(vessel_opt);
		}
	     $("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
	     $("#classE").html("安装直径"); $("#tanker").html("");
	     for(var i=0 ;i<dataArr[4].length;i++){
			var tanker_opt = document.createElement("option"); 
			  tanker_opt.text =  dataArr[4][i].Parts_Desc;
			  tanker_opt.id="tanker";
			  tanker_opt.name="tanker";
			  tanker_opt.value ="E"+(i+1); 
			  $("#tanker").append(tanker_opt);
	     }
	     $("#classF").css('visibility', 'visible'); $("#marine").css('visibility', 'visible');
	     $("#classF").html("电气输出"); $("#marine").html("");
		for(var i=0 ;i<dataArr[5].length;i++){
			 var marine_opt = document.createElement("option"); 
			   marine_opt.text =  dataArr[5][i].Parts_Desc;
			   marine_opt.id="marine";
			   marine_opt.name="marine";
			   marine_opt.value ="F"+(i+1); 
			   $("#marine").append(marine_opt);
		}
	     $("#classG").css('visibility', 'visible'); $("#rocket").css('visibility', 'visible');
	     $("#classG").html("版本"); $("#rocket").html("");
	     for(var i=0 ;i<dataArr[6].length;i++){
			var rocket_opt = document.createElement("option"); 
			  rocket_opt.text =  dataArr[6][i].Parts_Desc;
			  rocket_opt.id="rocket";
			  rocket_opt.name="rocket";
			  rocket_opt.value ="G"+(i+1); 
			  $("#rocket").append(rocket_opt);
	     } 
		     $("#classH").css('visibility', 'visible'); $("#zebra").css('visibility', 'visible');
		     $("#classH").html("包装"); $("#zebra").html("");
		     for(var i=0 ;i<dataArr[7].length;i++){
				var zebra_opt = document.createElement("option"); 
				  zebra_opt.text =  dataArr[7][i].Parts_Desc;
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