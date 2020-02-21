 function ChangeEC(selectValue) {
	  

	   if(selectValue=="EC"){
		  console.log("发光器件  分类 型号 位数 颜色 电压 封装 版本 包装" );
		  $("#classA").html("分类"); $("#boat").html("");
 		 for(var i=0 ;i<8;i++){
 			    var youoption = document.createElement("option"); 
			    youoption.text = "电控单板"+(i+1);
			    youoption.id="boat";
			    youoption.name="boat";
			    youoption.value ="D"+(i+1); 
			    $("#boat").append(youoption);
		 }
 		 $("#classB").html("型号");  $("#yacht").html("");
 		 for(var i=0 ;i<3;i++){
 			  var yaption = document.createElement("option"); 
 			    yaption.text = "AUTOSTONE多工"+(i+1);
 			    yaption.id="yacht";
 			    yaption.name="yacht";
 			    yaption.value ="B"+(i+1); 
 			    $("#yacht").append(yaption);
 		 }
 		
 		 $("#classC").html("位数"); $("#sail").html("");
 		 for(var i=0 ;i<12;i++){
 			  var sail_opt = document.createElement("option"); 
 			    sail_opt.text = "bit"+(i+1);
 			    sail_opt.id="sail";
 			    sail_opt.name="sail";
 			    sail_opt.value ="C"+(i+1); 
 			    $("#sail").append(sail_opt);
 		 }
 		
 		 $("#classD").html("颜色"); $("#vessel").html("");
 		 for(var i=0 ;i<6;i++){
 			  var vessel_opt = document.createElement("option"); 
 			    vessel_opt.text = "col"+(i+1);
 			    vessel_opt.id="vessel";
 			    vessel_opt.name="vessel";
 			    vessel_opt.value ="D"+(i+1); 
 			    $("#vessel").append(vessel_opt);
 		 }
 		$("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
 		$("#classE").html("电压"); $("#tanker").html("");
		 for(var i=0 ;i<3;i++){
			  var tanker_opt = document.createElement("option"); 
			    tanker_opt.text = "Vot"+(i+1);
			    tanker_opt.id="tanker";
			    tanker_opt.name="tanker";
			    tanker_opt.value ="E"+(i+1); 
			    $("#tanker").append(tanker_opt);
		 }
		$("#classF").css('visibility', 'visible'); $("#marine").css('visibility', 'visible');
 		$("#classF").html("封装"); $("#marine").html("");
 		 for(var i=0 ;i<3;i++){
 			  var marine_opt = document.createElement("option"); 
 			    marine_opt.text = "p"+(i+1);
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
			    zebra_opt.text = "Pac"+(i+1);
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
	   if(selectValue=="ED"){
			  console.log("电声器件  分类 型号 控制电压 封装 版本 包装" );
			  $("#classA").html("分类"); $("#boat").html("");
	 		 for(var i=0 ;i<8;i++){
	 			    var youoption = document.createElement("option"); 
				    youoption.text = "电控单板"+(i+1);
				    youoption.id="boat";
				    youoption.name="boat";
				    youoption.value ="D"+(i+1); 
				    $("#boat").append(youoption);
			 }
	 		 $("#classB").html("型号");  $("#yacht").html("");
	 		 for(var i=0 ;i<3;i++){
	 			  var yaption = document.createElement("option"); 
	 			    yaption.text = "AUTOSTONE多工"+(i+1);
	 			    yaption.id="yacht";
	 			    yaption.name="yacht";
	 			    yaption.value ="B"+(i+1); 
	 			    $("#yacht").append(yaption);
	 		 }
	 		 
	 		 $("#classC").html("控制电压"); $("#sail").html("");
	 		 for(var i=0 ;i<12;i++){
	 			  var sail_opt = document.createElement("option"); 
	 			    sail_opt.text = "V"+(i+1);
	 			    sail_opt.id="sail";
	 			    sail_opt.name="sail";
	 			    sail_opt.value ="C"+(i+1); 
	 			    $("#sail").append(sail_opt);
	 		 }
	 		
	 		 $("#classD").html("封装"); $("#vessel").html("");
	 		 for(var i=0 ;i<6;i++){
	 			  var vessel_opt = document.createElement("option"); 
	 			    vessel_opt.text = "pac"+(i+1);
	 			    vessel_opt.id="vessel";
	 			    vessel_opt.name="vessel";
	 			    vessel_opt.value ="D"+(i+1); 
	 			    $("#vessel").append(vessel_opt);
	 		 }
	 		$("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
	 		$("#classE").html("版本"); $("#tanker").html("");
			 for(var i=0 ;i<3;i++){
				  var tanker_opt = document.createElement("option"); 
				    tanker_opt.text = "V"+(i+1);
				    tanker_opt.id="tanker";
				    tanker_opt.name="tanker";
				    tanker_opt.value ="E"+(i+1); 
				    $("#tanker").append(tanker_opt);
			 }
			  
			$("#classF").css('visibility', 'visible'); $("#marine").css('visibility', 'visible');
	 		$("#classF").html("包装"); $("#marine").html("");
	 		 for(var i=0 ;i<3;i++){
	 			  var marine_opt = document.createElement("option"); 
	 			    marine_opt.text = "p"+(i+1);
	 			    marine_opt.id="marine";
	 			    marine_opt.name="marine";
	 			    marine_opt.value ="F"+(i+1); 
	 			    $("#marine").append(marine_opt);
	 		 }
 
			$("#classG").html(""); $("#rocket").html("");
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
			
			$("#classG").css('visibility', 'hidden'); $("#rocket").css('visibility', 'hidden');
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
	   if(selectValue=="EE"){
			  console.log("晶振  分类 频率 精度 电压 封装 版本 包装" );
			  $("#classA").html("分类"); $("#boat").html("");
	 		 for(var i=0 ;i<8;i++){
	 			    var youoption = document.createElement("option"); 
				    youoption.text = "电控单板"+(i+1);
				    youoption.id="boat";
				    youoption.name="boat";
				    youoption.value ="D"+(i+1); 
				    $("#boat").append(youoption);
			 }
	 		 $("#classB").html("频率");  $("#yacht").html("");
	 		 for(var i=0 ;i<3;i++){
	 			  var yaption = document.createElement("option"); 
	 			    yaption.text = "freq"+(i+1);
	 			    yaption.id="yacht";
	 			    yaption.name="yacht";
	 			    yaption.value ="B"+(i+1); 
	 			    $("#yacht").append(yaption);
	 		 }
	 		
	 		 $("#classC").html("精度"); $("#sail").html("");
	 		 for(var i=0 ;i<12;i++){
	 			  var sail_opt = document.createElement("option"); 
	 			    sail_opt.text = "pre"+(i+1);
	 			    sail_opt.id="sail";
	 			    sail_opt.name="sail";
	 			    sail_opt.value ="C"+(i+1); 
	 			    $("#sail").append(sail_opt);
	 		 }
	 		
	 		 $("#classD").html("电压"); $("#vessel").html("");
	 		 for(var i=0 ;i<6;i++){
	 			  var vessel_opt = document.createElement("option"); 
	 			    vessel_opt.text = "Vt"+(i+1);
	 			    vessel_opt.id="vessel";
	 			    vessel_opt.name="vessel";
	 			    vessel_opt.value ="D"+(i+1); 
	 			    $("#vessel").append(vessel_opt);
	 		 }
	 
	 		$("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
	 		$("#classE").html("封装"); $("#tanker").html("");
			 for(var i=0 ;i<3;i++){
				  var tanker_opt = document.createElement("option"); 
				    tanker_opt.text = "盒"+(i+1);
				    tanker_opt.id="tanker";
				    tanker_opt.name="tanker";
				    tanker_opt.value ="E"+(i+1); 
				    $("#tanker").append(tanker_opt);
			 }
	 
			$("#classF").css('visibility', 'visible'); $("#marine").css('visibility', 'visible');
	 		$("#classF").html("版本"); $("#marine").html("");
	 		 for(var i=0 ;i<3;i++){
	 			  var marine_opt = document.createElement("option"); 
	 			    marine_opt.text = "V"+(i+1);
	 			    marine_opt.id="marine";
	 			    marine_opt.name="marine";
	 			    marine_opt.value ="F"+(i+1); 
	 			    $("#marine").append(marine_opt);
	 		 }
				$("#classG").css('visibility', 'visible'); $("#rocket").css('visibility', 'visible');
		 		$("#classG").html("包装"); $("#rocket").html("");
		 		 for(var i=0 ;i<3;i++){
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
	   if(selectValue=="EF"){
			  console.log("电池  分类 系列 型号 电压 容量 封装 版本 包装" );
			  $("#classA").html("分类"); $("#boat").html("");
	 		 for(var i=0 ;i<8;i++){
	 			    var youoption = document.createElement("option"); 
				    youoption.text = "电控单板"+(i+1);
				    youoption.id="boat";
				    youoption.name="boat";
				    youoption.value ="D"+(i+1); 
				    $("#boat").append(youoption);
			 }
	 		 $("#classB").html("系列");  $("#yacht").html("");
	 		 for(var i=0 ;i<3;i++){
	 			  var yaption = document.createElement("option"); 
	 			    yaption.text = "freq"+(i+1);
	 			    yaption.id="yacht";
	 			    yaption.name="yacht";
	 			    yaption.value ="B"+(i+1); 
	 			    $("#yacht").append(yaption);
	 		 }
	 		
	 		 $("#classC").html("型号"); $("#sail").html("");
	 		 for(var i=0 ;i<12;i++){
	 			  var sail_opt = document.createElement("option"); 
	 			    sail_opt.text = "pre"+(i+1);
	 			    sail_opt.id="sail";
	 			    sail_opt.name="sail";
	 			    sail_opt.value ="C"+(i+1); 
	 			    $("#sail").append(sail_opt);
	 		 }
	 		
	 		 $("#classD").html("电压"); $("#vessel").html("");
	 		 for(var i=0 ;i<6;i++){
	 			  var vessel_opt = document.createElement("option"); 
	 			    vessel_opt.text = "Vt"+(i+1);
	 			    vessel_opt.id="vessel";
	 			    vessel_opt.name="vessel";
	 			    vessel_opt.value ="D"+(i+1); 
	 			    $("#vessel").append(vessel_opt);
	 		 }
	 		
	 		$("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
	 		$("#classE").html("容量"); $("#tanker").html("");
			 for(var i=0 ;i<3;i++){
				  var tanker_opt = document.createElement("option"); 
				    tanker_opt.text = "盒"+(i+1);
				    tanker_opt.id="tanker";
				    tanker_opt.name="tanker";
				    tanker_opt.value ="E"+(i+1); 
				    $("#tanker").append(tanker_opt);
			 }
	 
			$("#classF").css('visibility', 'visible'); $("#marine").css('visibility', 'visible');
	 		$("#classF").html("封装"); $("#marine").html("");
	 		 for(var i=0 ;i<3;i++){
	 			  var marine_opt = document.createElement("option"); 
	 			    marine_opt.text = "V"+(i+1);
	 			    marine_opt.id="marine";
	 			    marine_opt.name="marine";
	 			    marine_opt.value ="F"+(i+1); 
	 			    $("#marine").append(marine_opt);
	 		 }
	 		
				$("#classG").css('visibility', 'visible'); $("#rocket").css('visibility', 'visible');
		 		$("#classG").html("版本"); $("#rocket").html("");
		 		 for(var i=0 ;i<3;i++){
		 			  var rocket_opt = document.createElement("option"); 
		 			    rocket_opt.text = "V"+(i+1);
		 			    rocket_opt.id="rocket";
		 			    rocket_opt.name="rocket";
		 			    rocket_opt.value ="G"+(i+1); 
		 			    $("#rocket").append(rocket_opt);
		 		 }
				$("#classH").css('visibility', 'visible'); $("#zebra").css('visibility', 'visible');
		 		$("#classH").html("包装"); $("#zebra").html("");
		 		 for(var i=0 ;i<3;i++){
		 			  var zebra_opt = document.createElement("option"); 
		 			    zebra_opt.text = "盒" +(i+1);
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
	   if(selectValue=="EG"){
			  console.log("按钮  分类 系列 型号 位数 封装 版本 包装" );
			  $("#classA").html("分类"); $("#boat").html("");
	 		 for(var i=0 ;i<8;i++){
	 			    var youoption = document.createElement("option"); 
				    youoption.text = "电控单板"+(i+1);
				    youoption.id="boat";
				    youoption.name="boat";
				    youoption.value ="D"+(i+1); 
				    $("#boat").append(youoption);
			 }
	 		 $("#classB").html("系列");  $("#yacht").html("");
	 		 for(var i=0 ;i<3;i++){
	 			  var yaption = document.createElement("option"); 
	 			    yaption.text = "freq"+(i+1);
	 			    yaption.id="yacht";
	 			    yaption.name="yacht";
	 			    yaption.value ="B"+(i+1); 
	 			    $("#yacht").append(yaption);
	 		 }
	 		
	 		 $("#classC").html("型号"); $("#sail").html("");
	 		 for(var i=0 ;i<12;i++){
	 			  var sail_opt = document.createElement("option"); 
	 			    sail_opt.text = "pre"+(i+1);
	 			    sail_opt.id="sail";
	 			    sail_opt.name="sail";
	 			    sail_opt.value ="C"+(i+1); 
	 			    $("#sail").append(sail_opt);
	 		 }
	 		
	 		 $("#classD").html("位数"); $("#vessel").html("");
	 		 for(var i=0 ;i<6;i++){
	 			  var vessel_opt = document.createElement("option"); 
	 			    vessel_opt.text = "bit"+(i+1);
	 			    vessel_opt.id="vessel";
	 			    vessel_opt.name="vessel";
	 			    vessel_opt.value ="D"+(i+1); 
	 			    $("#vessel").append(vessel_opt);
	 		 }
	 		
	 		$("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
	 		$("#classE").html("封装"); $("#tanker").html("");
			 for(var i=0 ;i<3;i++){
				  var tanker_opt = document.createElement("option"); 
				    tanker_opt.text = "big"+(i+1);
				    tanker_opt.id="tanker";
				    tanker_opt.name="tanker";
				    tanker_opt.value ="E"+(i+1); 
				    $("#tanker").append(tanker_opt);
			 }
			$("#classF").css('visibility', 'visible'); $("#marine").css('visibility', 'visible');
	 		$("#classF").html("版本"); $("#marine").html("");
	 		 for(var i=0 ;i<3;i++){
	 			  var marine_opt = document.createElement("option"); 
	 			    marine_opt.text = "V"+(i+1);
	 			    marine_opt.id="marine";
	 			    marine_opt.name="marine";
	 			    marine_opt.value ="F"+(i+1); 
	 			    $("#marine").append(marine_opt);
	 		 }
	 		
			$("#classG").css('visibility', 'visible'); $("#rocket").css('visibility', 'visible');
	 		$("#classG").html("包装"); $("#rocket").html("");
	 		 for(var i=0 ;i<3;i++){
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
	   if(selectValue=="EH"){
			  console.log("继电器  分类 系列 触点类型 控制电压 触点电流 触点电压 封装 版本 包装" );
			  $("#classA").html("分类"); $("#boat").html("");
	 		 for(var i=0 ;i<8;i++){
	 			    var youoption = document.createElement("option"); 
				    youoption.text = "电控单板"+(i+1);
				    youoption.id="boat";
				    youoption.name="boat";
				    youoption.value ="D"+(i+1); 
				    $("#boat").append(youoption);
			 }
	 		 $("#classB").html("系列");  $("#yacht").html("");
	 		 for(var i=0 ;i<3;i++){
	 			  var yaption = document.createElement("option"); 
	 			    yaption.text = "freq"+(i+1);
	 			    yaption.id="yacht";
	 			    yaption.name="yacht";
	 			    yaption.value ="B"+(i+1); 
	 			    $("#yacht").append(yaption);
	 		 }
	 		  
	 		 $("#classC").html("触点类型"); $("#sail").html("");
	 		 for(var i=0 ;i<12;i++){
	 			  var sail_opt = document.createElement("option"); 
	 			    sail_opt.text = "A"+(i+1);
	 			    sail_opt.id="sail";
	 			    sail_opt.name="sail";
	 			    sail_opt.value ="C"+(i+1); 
	 			    $("#sail").append(sail_opt);
	 		 }
	 		
	 		 $("#classD").html("控制电压"); $("#vessel").html("");
	 		 for(var i=0 ;i<6;i++){
	 			  var vessel_opt = document.createElement("option"); 
	 			    vessel_opt.text = "Vt"+(i+1);
	 			    vessel_opt.id="vessel";
	 			    vessel_opt.name="vessel";
	 			    vessel_opt.value ="D"+(i+1); 
	 			    $("#vessel").append(vessel_opt);
	 		 }
	 		
	 		$("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
	 		$("#classE").html("触点电流"); $("#tanker").html("");
			 for(var i=0 ;i<3;i++){
				  var tanker_opt = document.createElement("option"); 
				    tanker_opt.text = "A"+(i+1);
				    tanker_opt.id="tanker";
				    tanker_opt.name="tanker";
				    tanker_opt.value ="E"+(i+1); 
				    $("#tanker").append(tanker_opt);
			 }
			
			$("#classF").css('visibility', 'visible'); $("#marine").css('visibility', 'visible');
	 		$("#classF").html("触点电压"); $("#marine").html("");
	 		 for(var i=0 ;i<3;i++){
	 			  var marine_opt = document.createElement("option"); 
	 			    marine_opt.text = "Vt"+(i+1);
	 			    marine_opt.id="marine";
	 			    marine_opt.name="marine";
	 			    marine_opt.value ="F"+(i+1); 
	 			    $("#marine").append(marine_opt);
	 		 }
	 		
			$("#classG").css('visibility', 'visible'); $("#rocket").css('visibility', 'visible');
	 		$("#classG").html("封装"); $("#rocket").html("");
	 		 for(var i=0 ;i<3;i++){
	 			  var rocket_opt = document.createElement("option"); 
	 			    rocket_opt.text = "big"+(i+1);
	 			    rocket_opt.id="rocket";
	 			    rocket_opt.name="rocket";
	 			    rocket_opt.value ="G"+(i+1); 
	 			    $("#rocket").append(rocket_opt);
	 		 }
			$("#classH").css('visibility', 'visible'); $("#zebra").css('visibility', 'visible');
	 		$("#classH").html("版本"); $("#zebra").html("");
	 		 for(var i=0 ;i<3;i++){
	 			  var zebra_opt = document.createElement("option"); 
	 			    zebra_opt.text = "V"+(i+1);
	 			    zebra_opt.id="zebra";
	 			    zebra_opt.name="zebra";
	 			    zebra_opt.value ="H"+(i+1); 
	 			    $("#zebra").append(zebra_opt);
	 		 }
			$("#classI").css('visibility', 'visible'); $("#eleph").css('visibility', 'visible');
	 		$("#classI").html("包装"); $("#eleph").html("");
	 		 for(var i=0 ;i<3;i++){
	 			  var eleph_opt = document.createElement("option"); 
	 			    eleph_opt.text = "盒"+(i+1);
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
	   if(selectValue=="EJ"){
			  console.log("保险熔断  分类 系列 电压 电流 封装 版本 包装" );
			  $("#classA").html("分类"); $("#boat").html("");
	 		 for(var i=0 ;i<8;i++){
	 			    var youoption = document.createElement("option"); 
				    youoption.text = "电控单板"+(i+1);
				    youoption.id="boat";
				    youoption.name="boat";
				    youoption.value ="D"+(i+1); 
				    $("#boat").append(youoption);
			 }
	 		 $("#classB").html("系列");  $("#yacht").html("");
	 		 for(var i=0 ;i<3;i++){
	 			  var yaption = document.createElement("option"); 
	 			    yaption.text = "freq"+(i+1);
	 			    yaption.id="yacht";
	 			    yaption.name="yacht";
	 			    yaption.value ="B"+(i+1); 
	 			    $("#yacht").append(yaption);
	 		 }
	 		 
	 		 $("#classC").html("电压"); $("#sail").html("");
	 		 for(var i=0 ;i<12;i++){
	 			  var sail_opt = document.createElement("option"); 
	 			    sail_opt.text = "V"+(i+1);
	 			    sail_opt.id="sail";
	 			    sail_opt.name="sail";
	 			    sail_opt.value ="C"+(i+1); 
	 			    $("#sail").append(sail_opt);
	 		 }
	 		    
	 		 $("#classD").html("电流"); $("#vessel").html("");
	 		 for(var i=0 ;i<6;i++){
	 			  var vessel_opt = document.createElement("option"); 
	 			    vessel_opt.text = "A"+(i+1);
	 			    vessel_opt.id="vessel";
	 			    vessel_opt.name="vessel";
	 			    vessel_opt.value ="D"+(i+1); 
	 			    $("#vessel").append(vessel_opt);
	 		 }
	 		
	 		$("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
	 		$("#classE").html("封装"); $("#tanker").html("");
			 for(var i=0 ;i<3;i++){
				  var tanker_opt = document.createElement("option"); 
				    tanker_opt.text = "P"+(i+1);
				    tanker_opt.id="tanker";
				    tanker_opt.name="tanker";
				    tanker_opt.value ="E"+(i+1); 
				    $("#tanker").append(tanker_opt);
			 }
			
			$("#classF").css('visibility', 'visible'); $("#marine").css('visibility', 'visible');
	 		$("#classF").html("包装"); $("#marine").html("");
	 		 for(var i=0 ;i<3;i++){
	 			  var marine_opt = document.createElement("option"); 
	 			    marine_opt.text = "盒"+(i+1);
	 			    marine_opt.id="marine";
	 			    marine_opt.name="marine";
	 			    marine_opt.value ="F"+(i+1); 
	 			    $("#marine").append(marine_opt);
	 		 }
	 		
		 	 
			$("#classG").html(""); $("#rocket").html("");
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
			
			$("#classG").css('visibility', 'hidden'); $("#rocket").css('visibility', 'hidden');
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
	   if(selectValue=="EK"  ){
			  console.log("板载变压器  分类 系列 型号 功率 输入类型 输出类型 版本 包装" );
			  $("#classA").html("分类"); $("#boat").html("");
	 		 for(var i=0 ;i<8;i++){
	 			    var youoption = document.createElement("option"); 
				    youoption.text = "电控单板"+(i+1);
				    youoption.id="boat";
				    youoption.name="boat";
				    youoption.value ="D"+(i+1); 
				    $("#boat").append(youoption);
			 }
	 		 $("#classB").html("系列");  $("#yacht").html("");
	 		 for(var i=0 ;i<3;i++){
	 			  var yaption = document.createElement("option"); 
	 			    yaption.text = "freq"+(i+1);
	 			    yaption.id="yacht";
	 			    yaption.name="yacht";
	 			    yaption.value ="B"+(i+1); 
	 			    $("#yacht").append(yaption);
	 		 }
	 		
	 		 $("#classC").html("型号"); $("#sail").html("");
	 		 for(var i=0 ;i<12;i++){
	 			  var sail_opt = document.createElement("option"); 
	 			    sail_opt.text = "model"+(i+1);
	 			    sail_opt.id="sail";
	 			    sail_opt.name="sail";
	 			    sail_opt.value ="C"+(i+1); 
	 			    $("#sail").append(sail_opt);
	 		 }
	 		    
	 		 $("#classD").html("功率"); $("#vessel").html("");
	 		 for(var i=0 ;i<6;i++){
	 			  var vessel_opt = document.createElement("option"); 
	 			    vessel_opt.text = "MPV"+(i+1);
	 			    vessel_opt.id="vessel";
	 			    vessel_opt.name="vessel";
	 			    vessel_opt.value ="D"+(i+1); 
	 			    $("#vessel").append(vessel_opt);
	 		 }
	 		
	 		$("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
	 		$("#classE").html("输入类型"); $("#tanker").html("");
			 for(var i=0 ;i<3;i++){
				  var tanker_opt = document.createElement("option"); 
				    tanker_opt.text = "输入类型"+(i+1);
				    tanker_opt.id="tanker";
				    tanker_opt.name="tanker";
				    tanker_opt.value ="E"+(i+1); 
				    $("#tanker").append(tanker_opt);
			 }
			
			$("#classF").css('visibility', 'visible'); $("#marine").css('visibility', 'visible');
	 		$("#classF").html("输出类型"); $("#marine").html("");
	 		 for(var i=0 ;i<3;i++){
	 			  var marine_opt = document.createElement("option"); 
	 			    marine_opt.text = "输出类型"+(i+1);
	 			    marine_opt.id="marine";
	 			    marine_opt.name="marine";
	 			    marine_opt.value ="F"+(i+1); 
	 			    $("#marine").append(marine_opt);
	 		 }
	 		$("#classG").css('visibility', 'visible'); $("#rocket").css('visibility', 'visible');
	 		$("#classG").html("版本"); $("#rocket").html("");
	 		 for(var i=0 ;i<3;i++){
	 			  var rocket_opt = document.createElement("option"); 
	 			    rocket_opt.text = "V"+(i+1);
	 			    rocket_opt.id="rocket";
	 			    rocket_opt.name="rocket";
	 			    rocket_opt.value ="G"+(i+1); 
	 			    $("#rocket").append(rocket_opt);
	 		 }
	 		$("#classH").css('visibility', 'visible'); $("#zebra").css('visibility', 'visible');
	 		$("#classH").html("包装"); $("#zebra").html("");
	 		 for(var i=0 ;i<3;i++){
	 			  var zebra_opt = document.createElement("option"); 
	 			    zebra_opt.text = "V"+(i+1);
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
	   if(selectValue=="EM"){
			  console.log("连接器  分类 系列 型号 位数 方向 颜色 间距 版本 包装" );
			  $("#classA").html("分类"); $("#boat").html("");
	 		 for(var i=0 ;i<8;i++){
	 			    var youoption = document.createElement("option"); 
				    youoption.text = "电控单板"+(i+1);
				    youoption.id="boat";
				    youoption.name="boat";
				    youoption.value ="D"+(i+1); 
				    $("#boat").append(youoption);
			 }
	 		 $("#classB").html("系列");  $("#yacht").html("");
	 		 for(var i=0 ;i<3;i++){
	 			  var yaption = document.createElement("option"); 
	 			    yaption.text = "freq"+(i+1);
	 			    yaption.id="yacht";
	 			    yaption.name="yacht";
	 			    yaption.value ="B"+(i+1); 
	 			    $("#yacht").append(yaption);
	 		 }
	 		
	 		 $("#classC").html("型号"); $("#sail").html("");
	 		 for(var i=0 ;i<12;i++){
	 			  var sail_opt = document.createElement("option"); 
	 			    sail_opt.text = "model"+(i+1);
	 			    sail_opt.id="sail";
	 			    sail_opt.name="sail";
	 			    sail_opt.value ="C"+(i+1); 
	 			    $("#sail").append(sail_opt);
	 		 }
	 		  
	 		 $("#classD").html("位数"); $("#vessel").html("");
	 		 for(var i=0 ;i<6;i++){
	 			  var vessel_opt = document.createElement("option"); 
	 			    vessel_opt.text = "BIT"+(i+1);
	 			    vessel_opt.id="vessel";
	 			    vessel_opt.name="vessel";
	 			    vessel_opt.value ="D"+(i+1); 
	 			    $("#vessel").append(vessel_opt);
	 		 }
	 		
	 		$("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
	 		$("#classE").html("方向"); $("#tanker").html("");
			 for(var i=0 ;i<3;i++){
				  var tanker_opt = document.createElement("option"); 
				    tanker_opt.text = "方向"+(i+1);
				    tanker_opt.id="tanker";
				    tanker_opt.name="tanker";
				    tanker_opt.value ="E"+(i+1); 
				    $("#tanker").append(tanker_opt);
			 }
			
			$("#classF").css('visibility', 'visible'); $("#marine").css('visibility', 'visible');
	 		$("#classF").html("颜色"); $("#marine").html("");
	 		 for(var i=0 ;i<3;i++){
	 			  var marine_opt = document.createElement("option"); 
	 			    marine_opt.text = "颜色"+(i+1);
	 			    marine_opt.id="marine";
	 			    marine_opt.name="marine";
	 			    marine_opt.value ="F"+(i+1); 
	 			    $("#marine").append(marine_opt);
	 		 }
	 		 
	 		$("#classG").css('visibility', 'visible'); $("#rocket").css('visibility', 'visible');
	 		$("#classG").html("间距"); $("#rocket").html("");
	 		 for(var i=0 ;i<3;i++){
	 			  var rocket_opt = document.createElement("option"); 
	 			    rocket_opt.text = "cm"+(i+1);
	 			    rocket_opt.id="rocket";
	 			    rocket_opt.name="rocket";
	 			    rocket_opt.value ="G"+(i+1); 
	 			    $("#rocket").append(rocket_opt);
	 		 }
	 		$("#classH").css('visibility', 'visible'); $("#zebra").css('visibility', 'visible');
	 		$("#classH").html("版本"); $("#zebra").html("");
	 		 for(var i=0 ;i<3;i++){
	 			  var zebra_opt = document.createElement("option"); 
	 			    zebra_opt.text = "V"+(i+1);
	 			    zebra_opt.id="zebra";
	 			    zebra_opt.name="zebra";
	 			    zebra_opt.value ="H"+(i+1); 
	 			    $("#zebra").append(zebra_opt);
	 		 }
	 		$("#classI").css('visibility', 'visible'); $("#eleph").css('visibility', 'visible');
	 		$("#classI").html("包装"); $("#eleph").html("");
	 		 for(var i=0 ;i<3;i++){
	 			  var eleph_opt = document.createElement("option"); 
	 			    eleph_opt.text = "盒"+(i+1);
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
	   if(selectValue=="EN"){
			  console.log("液晶  分类 系列 型号 尺寸 背光 版本 包装" );
			  $("#classA").html("分类"); $("#boat").html("");
	 		 for(var i=0 ;i<8;i++){
	 			    var youoption = document.createElement("option"); 
				    youoption.text = "电控单板"+(i+1);
				    youoption.id="boat";
				    youoption.name="boat";
				    youoption.value ="D"+(i+1); 
				    $("#boat").append(youoption);
			 }
	 		 $("#classB").html("系列");  $("#yacht").html("");
	 		 for(var i=0 ;i<3;i++){
	 			  var yaption = document.createElement("option"); 
	 			    yaption.text = "freq"+(i+1);
	 			    yaption.id="yacht";
	 			    yaption.name="yacht";
	 			    yaption.value ="B"+(i+1); 
	 			    $("#yacht").append(yaption);
	 		 }
	 		
	 		 $("#classC").html("型号"); $("#sail").html("");
	 		 for(var i=0 ;i<12;i++){
	 			  var sail_opt = document.createElement("option"); 
	 			    sail_opt.text = "model"+(i+1);
	 			    sail_opt.id="sail";
	 			    sail_opt.name="sail";
	 			    sail_opt.value ="C"+(i+1); 
	 			    $("#sail").append(sail_opt);
	 		 }
	 		  
	 		 $("#classD").html("尺寸"); $("#vessel").html("");
	 		 for(var i=0 ;i<6;i++){
	 			  var vessel_opt = document.createElement("option"); 
	 			    vessel_opt.text = "M"+(i+1);
	 			    vessel_opt.id="vessel";
	 			    vessel_opt.name="vessel";
	 			    vessel_opt.value ="D"+(i+1); 
	 			    $("#vessel").append(vessel_opt);
	 		 }
	 		
	 		$("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
	 		$("#classE").html("背光"); $("#tanker").html("");
			 for(var i=0 ;i<3;i++){
				  var tanker_opt = document.createElement("option"); 
				    tanker_opt.text = "背光"+(i+1);
				    tanker_opt.id="tanker";
				    tanker_opt.name="tanker";
				    tanker_opt.value ="E"+(i+1); 
				    $("#tanker").append(tanker_opt);
			 }
			
			$("#classF").css('visibility', 'visible'); $("#marine").css('visibility', 'visible');
	 		$("#classF").html("版本"); $("#marine").html("");
	 		 for(var i=0 ;i<3;i++){
	 			  var marine_opt = document.createElement("option"); 
	 			    marine_opt.text = "V"+(i+1);
	 			    marine_opt.id="marine";
	 			    marine_opt.name="marine";
	 			    marine_opt.value ="F"+(i+1); 
	 			    $("#marine").append(marine_opt);
	 		 }
	 		 
	 		$("#classG").css('visibility', 'visible'); $("#rocket").css('visibility', 'visible');
	 		$("#classG").html("包装"); $("#rocket").html("");
	 		 for(var i=0 ;i<3;i++){
	 			  var rocket_opt = document.createElement("option"); 
	 			    rocket_opt.text = "P"+(i+1);
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
	   if(selectValue=="EP"){
			  console.log("触屏  分类 系列 型号 尺寸 控制类型 版本 包装" );
			  $("#classA").html("分类"); $("#boat").html("");
	 		 for(var i=0 ;i<8;i++){
	 			    var youoption = document.createElement("option"); 
				    youoption.text = "电控单板"+(i+1);
				    youoption.id="boat";
				    youoption.name="boat";
				    youoption.value ="D"+(i+1); 
				    $("#boat").append(youoption);
			 }
	 		 $("#classB").html("系列");  $("#yacht").html("");
	 		 for(var i=0 ;i<3;i++){
	 			  var yaption = document.createElement("option"); 
	 			    yaption.text = "freq"+(i+1);
	 			    yaption.id="yacht";
	 			    yaption.name="yacht";
	 			    yaption.value ="B"+(i+1); 
	 			    $("#yacht").append(yaption);
	 		 }
	 		
	 		 $("#classC").html("型号"); $("#sail").html("");
	 		 for(var i=0 ;i<12;i++){
	 			  var sail_opt = document.createElement("option"); 
	 			    sail_opt.text = "model"+(i+1);
	 			    sail_opt.id="sail";
	 			    sail_opt.name="sail";
	 			    sail_opt.value ="C"+(i+1); 
	 			    $("#sail").append(sail_opt);
	 		 }
	 		 $("#classD").html("尺寸"); $("#vessel").html("");
	 		 for(var i=0 ;i<6;i++){
	 			  var vessel_opt = document.createElement("option"); 
	 			    vessel_opt.text = "M"+(i+1);
	 			    vessel_opt.id="vessel";
	 			    vessel_opt.name="vessel";
	 			    vessel_opt.value ="D"+(i+1); 
	 			    $("#vessel").append(vessel_opt);
	 		 }
	 		console.log("    " );
	 		$("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
	 		$("#classE").html("控制类型"); $("#tanker").html("");
			 for(var i=0 ;i<3;i++){
				  var tanker_opt = document.createElement("option"); 
				    tanker_opt.text = "控制类型"+(i+1);
				    tanker_opt.id="tanker";
				    tanker_opt.name="tanker";
				    tanker_opt.value ="E"+(i+1); 
				    $("#tanker").append(tanker_opt);
			 }
			
			$("#classF").css('visibility', 'visible'); $("#marine").css('visibility', 'visible');
	 		$("#classF").html("版本"); $("#marine").html("");
	 		 for(var i=0 ;i<3;i++){
	 			  var marine_opt = document.createElement("option"); 
	 			    marine_opt.text = "V"+(i+1);
	 			    marine_opt.id="marine";
	 			    marine_opt.name="marine";
	 			    marine_opt.value ="F"+(i+1); 
	 			    $("#marine").append(marine_opt);
	 		 }
	 		 
	 		$("#classG").css('visibility', 'visible'); $("#rocket").css('visibility', 'visible');
	 		$("#classG").html("包装"); $("#rocket").html("");
	 		 for(var i=0 ;i<3;i++){
	 			  var rocket_opt = document.createElement("option"); 
	 			    rocket_opt.text = "P"+(i+1);
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
	   if(selectValue=="EQ"){
			  console.log("面膜  分类 系列 型号 规格 包装 版本" );
			  $("#classA").html("分类"); $("#boat").html("");
	 		 for(var i=0 ;i<8;i++){
	 			    var youoption = document.createElement("option"); 
				    youoption.text = "电控单板"+(i+1);
				    youoption.id="boat";
				    youoption.name="boat";
				    youoption.value ="D"+(i+1); 
				    $("#boat").append(youoption);
			 }
	 		 $("#classB").html("系列");  $("#yacht").html("");
	 		 for(var i=0 ;i<3;i++){
	 			  var yaption = document.createElement("option"); 
	 			    yaption.text = "freq"+(i+1);
	 			    yaption.id="yacht";
	 			    yaption.name="yacht";
	 			    yaption.value ="B"+(i+1); 
	 			    $("#yacht").append(yaption);
	 		 }
	 		
	 		 $("#classC").html("型号"); $("#sail").html("");
	 		 for(var i=0 ;i<12;i++){
	 			  var sail_opt = document.createElement("option"); 
	 			    sail_opt.text = "model"+(i+1);
	 			    sail_opt.id="sail";
	 			    sail_opt.name="sail";
	 			    sail_opt.value ="C"+(i+1); 
	 			    $("#sail").append(sail_opt);
	 		 }
	 		 
	 		 $("#classD").html("规格"); $("#vessel").html("");
	 		 for(var i=0 ;i<6;i++){
	 			  var vessel_opt = document.createElement("option"); 
	 			    vessel_opt.text = "多工"+(i+1);
	 			    vessel_opt.id="vessel";
	 			    vessel_opt.name="vessel";
	 			    vessel_opt.value ="D"+(i+1); 
	 			    $("#vessel").append(vessel_opt);
	 		 }
	 		$("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
	 		$("#classE").html("包装"); $("#tanker").html("");
			 for(var i=0 ;i<3;i++){
				  var tanker_opt = document.createElement("option"); 
				    tanker_opt.text = "包装"+(i+1);
				    tanker_opt.id="tanker";
				    tanker_opt.name="tanker";
				    tanker_opt.value ="E"+(i+1); 
				    $("#tanker").append(tanker_opt);
			 }
			
			$("#classF").css('visibility', 'visible'); $("#marine").css('visibility', 'visible');
	 		$("#classF").html("版本"); $("#marine").html("");
	 		 for(var i=0 ;i<3;i++){
	 			  var marine_opt = document.createElement("option"); 
	 			    marine_opt.text = "V"+(i+1);
	 			    marine_opt.id="marine";
	 			    marine_opt.name="marine";
	 			    marine_opt.value ="F"+(i+1); 
	 			    $("#marine").append(marine_opt);
	 		 }
	 		 
	 	 
			$("#classG").html(""); $("#rocket").html("");
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
			
			$("#classG").css('visibility', 'hidden'); $("#rocket").css('visibility', 'hidden');
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

	 }

function GoldEC(selectValue) { 
	if(selectValue=="EC"){
		console.log("发光器件  分类 型号 位数 颜色 电压 封装 版本 包装" );
		 var pclass = "EC"; 
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
			  youoption.text =  dataArr[0][i].Parts_Desc;
			  youoption.id="boat";
			  youoption.name="boat";
			  youoption.value ="D"+(i+1); 
			  $("#boat").append(youoption);
	     }
		$("#classB").html("型号");  $("#yacht").html("");
		for(var i=0 ;i<dataArr[1].length;i++){
			 var yaption = document.createElement("option"); 
			   yaption.text =  dataArr[1][i].Parts_Desc;
			   yaption.id="yacht";
			   yaption.name="yacht";
			   yaption.value ="B"+(i+1); 
			   $("#yacht").append(yaption);
		}
	     
		$("#classC").html("位数"); $("#sail").html("");
		for(var i=0 ;i<dataArr[2].length;i++){
			 var sail_opt = document.createElement("option"); 
			   sail_opt.text =  dataArr[2][i].Parts_Desc;
			   sail_opt.id="sail";
			   sail_opt.name="sail";
			   sail_opt.value ="C"+(i+1); 
			   $("#sail").append(sail_opt);
		}
	     
		$("#classD").html("颜色"); $("#vessel").html("");
		for(var i=0 ;i<dataArr[3].length;i++){
			 var vessel_opt = document.createElement("option"); 
			   vessel_opt.text =  dataArr[3][i].Parts_Desc;
			   vessel_opt.id="vessel";
			   vessel_opt.name="vessel";
			   vessel_opt.value ="D"+(i+1); 
			   $("#vessel").append(vessel_opt);
		}
	     $("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
	     $("#classE").html("电压"); $("#tanker").html("");
	     for(var i=0 ;i<dataArr[4].length;i++){
			var tanker_opt = document.createElement("option"); 
			  tanker_opt.text =  dataArr[4][i].Parts_Desc;
			  tanker_opt.id="tanker";
			  tanker_opt.name="tanker";
			  tanker_opt.value ="E"+(i+1); 
			  $("#tanker").append(tanker_opt);
	     }
	    $("#classF").css('visibility', 'visible'); $("#marine").css('visibility', 'visible');
	     $("#classF").html("封装"); $("#marine").html("");
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
	if(selectValue=="ED"){
		console.log("电声器件  分类 型号 控制电压 封装 版本 包装" );
		var pclass = "ED"; 
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
			  youoption.value ="D"+(i+1); 
			  $("#boat").append(youoption);
	     }
		$("#classB").html("型号");  $("#yacht").html("");
		for(var i=0 ;i<dataArr[1].length;i++){
			 var yaption = document.createElement("option"); 
			   yaption.text =  dataArr[1][i].Parts_Desc;
			   yaption.id="yacht";
			   yaption.name="yacht";
			   yaption.value ="B"+(i+1); 
			   $("#yacht").append(yaption);
		}
		
		$("#classC").html("控制电压"); $("#sail").html("");
		for(var i=0 ;i<dataArr[2].length;i++){
			 var sail_opt = document.createElement("option"); 
			   sail_opt.text =  dataArr[2][i].Parts_Desc;
			   sail_opt.id="sail";
			   sail_opt.name="sail";
			   sail_opt.value ="C"+(i+1); 
			   $("#sail").append(sail_opt);
		}
	     
		$("#classD").html("封装"); $("#vessel").html("");
		for(var i=0 ;i<dataArr[3].length;i++){
			 var vessel_opt = document.createElement("option"); 
			   vessel_opt.text =  dataArr[3][i].Parts_Desc;
			   vessel_opt.id="vessel";
			   vessel_opt.name="vessel";
			   vessel_opt.value ="D"+(i+1); 
			   $("#vessel").append(vessel_opt);
		}
	     $("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
	     $("#classE").html("版本"); $("#tanker").html("");
	     for(var i=0 ;i<dataArr[4].length;i++){
			var tanker_opt = document.createElement("option"); 
			  tanker_opt.text =  dataArr[4][i].Parts_Desc;
			  tanker_opt.id="tanker";
			  tanker_opt.name="tanker";
			  tanker_opt.value ="E"+(i+1); 
			  $("#tanker").append(tanker_opt);
	     }
		
	    $("#classF").css('visibility', 'visible'); $("#marine").css('visibility', 'visible');
	     $("#classF").html("包装"); $("#marine").html("");
		for(var i=0 ;i<dataArr[5].length;i++){
			 var marine_opt = document.createElement("option"); 
			   marine_opt.text =  dataArr[5][i].Parts_Desc;
			   marine_opt.id="marine";
			   marine_opt.name="marine";
			   marine_opt.value ="F"+(i+1); 
			   $("#marine").append(marine_opt);
		}
	

	},
	error:function(){ 
	}
	})	
	    $("#classG").html(""); $("#rocket").html("");
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
	    
	    $("#classG").css('visibility', 'hidden'); $("#rocket").css('visibility', 'hidden');
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
	if(selectValue=="EE"){
		console.log("晶振  分类 频率 精度 电压 封装 版本 包装" );
		var pclass = "EE"; 
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
			  youoption.text =  dataArr[0][i].Parts_Desc;
			  youoption.id="boat";
			  youoption.name="boat";
			  youoption.value ="D"+(i+1); 
			  $("#boat").append(youoption);
	     }
		$("#classB").html("频率");  $("#yacht").html("");
		for(var i=0 ;i<dataArr[1].length;i++){
			 var yaption = document.createElement("option"); 
			   yaption.text =  dataArr[1][i].Parts_Desc;
			   yaption.id="yacht";
			   yaption.name="yacht";
			   yaption.value ="B"+(i+1); 
			   $("#yacht").append(yaption);
		}
	     
		$("#classC").html("精度"); $("#sail").html("");
		for(var i=0 ;i<dataArr[2].length;i++){
			 var sail_opt = document.createElement("option"); 
			   sail_opt.text =  dataArr[2][i].Parts_Desc;
			   sail_opt.id="sail";
			   sail_opt.name="sail";
			   sail_opt.value ="C"+(i+1); 
			   $("#sail").append(sail_opt);
		}
	     
		$("#classD").html("电压"); $("#vessel").html("");
		for(var i=0 ;i<dataArr[3].length;i++){
			 var vessel_opt = document.createElement("option"); 
			   vessel_opt.text =  dataArr[3][i].Parts_Desc;
			   vessel_opt.id="vessel";
			   vessel_opt.name="vessel";
			   vessel_opt.value ="D"+(i+1); 
			   $("#vessel").append(vessel_opt);
		}

	     $("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
	     $("#classE").html("封装"); $("#tanker").html("");
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
	if(selectValue=="EF"){
		console.log("电池  分类 系列 型号 电压 容量 封装 版本 包装" );
		  var pclass = "EF"; 
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
	     
		$("#classD").html("电压"); $("#vessel").html("");
		for(var i=0 ;i<dataArr[3].length;i++){
			 var vessel_opt = document.createElement("option"); 
			   vessel_opt.text =  dataArr[3][i].Parts_Desc;
			   vessel_opt.id="vessel";
			   vessel_opt.name="vessel";
			   vessel_opt.value ="D"+(i+1); 
			   $("#vessel").append(vessel_opt);
		}
	     
	     $("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
	     $("#classE").html("容量"); $("#tanker").html("");
	     for(var i=0 ;i<dataArr[4].length;i++){
			var tanker_opt = document.createElement("option"); 
			  tanker_opt.text =  dataArr[4][i].Parts_Desc;
			  tanker_opt.id="tanker";
			  tanker_opt.name="tanker";
			  tanker_opt.value ="E"+(i+1); 
			  $("#tanker").append(tanker_opt);
	     }

	    $("#classF").css('visibility', 'visible'); $("#marine").css('visibility', 'visible');
	     $("#classF").html("封装"); $("#marine").html("");
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
	if(selectValue=="EG"){
		console.log("按钮  分类 系列 型号 位数 封装 版本 包装" );
		 var pclass = "EG"; 
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
	     
		$("#classD").html("位数"); $("#vessel").html("");
		for(var i=0 ;i<dataArr[3].length;i++){
			 var vessel_opt = document.createElement("option"); 
			   vessel_opt.text =  dataArr[3][i].Parts_Desc;
			   vessel_opt.id="vessel";
			   vessel_opt.name="vessel";
			   vessel_opt.value ="D"+(i+1); 
			   $("#vessel").append(vessel_opt);
		}
	     
	     $("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
	     $("#classE").html("封装"); $("#tanker").html("");
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
	if(selectValue=="EH"){
		console.log("继电器  分类 系列 触点类型 控制电压 触点电流 触点电压 封装 版本 包装" );
		  var pclass = "EH"; 
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
		 
		$("#classC").html("触点类型"); $("#sail").html("");
		for(var i=0 ;i<dataArr[2].length;i++){
			 var sail_opt = document.createElement("option"); 
			   sail_opt.text = dataArr[2][i].Parts_Desc;
			   sail_opt.id="sail";
			   sail_opt.name="sail";
			   sail_opt.value ="C"+(i+1); 
			   $("#sail").append(sail_opt);
		}
	     
		$("#classD").html("控制电压"); $("#vessel").html("");
		for(var i=0 ;i<dataArr[3].length;i++){
			 var vessel_opt = document.createElement("option"); 
			   vessel_opt.text = dataArr[3][i].Parts_Desc;
			   vessel_opt.id="vessel";
			   vessel_opt.name="vessel";
			   vessel_opt.value ="D"+(i+1); 
			   $("#vessel").append(vessel_opt);
		}
	     
	     $("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
	     $("#classE").html("触点电流"); $("#tanker").html("");
	     for(var i=0 ;i<dataArr[4].length;i++){
			var tanker_opt = document.createElement("option"); 
			  tanker_opt.text = dataArr[4][i].Parts_Desc;
			  tanker_opt.id="tanker";
			  tanker_opt.name="tanker";
			  tanker_opt.value ="E"+(i+1); 
			  $("#tanker").append(tanker_opt);
	     }
	    
	    $("#classF").css('visibility', 'visible'); $("#marine").css('visibility', 'visible');
	     $("#classF").html("触点电压"); $("#marine").html("");
		for(var i=0 ;i<dataArr[5].length;i++){
			 var marine_opt = document.createElement("option"); 
			   marine_opt.text = dataArr[5][i].Parts_Desc;
			   marine_opt.id="marine";
			   marine_opt.name="marine";
			   marine_opt.value ="F"+(i+1); 
			   $("#marine").append(marine_opt);
		}
	     
	    $("#classG").css('visibility', 'visible'); $("#rocket").css('visibility', 'visible');
	     $("#classG").html("封装"); $("#rocket").html("");
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
	if(selectValue=="EJ"){
		console.log("保险熔断  分类 系列 电压 电流 封装 版本 包装" );
		var pclass = "EJ"; 
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
		
		$("#classC").html("电压"); $("#sail").html("");
		for(var i=0 ;i<dataArr[2].length;i++){
			 var sail_opt = document.createElement("option"); 
			   sail_opt.text =  dataArr[2][i].Parts_Desc;
			   sail_opt.id="sail";
			   sail_opt.name="sail";
			   sail_opt.value ="C"+(i+1); 
			   $("#sail").append(sail_opt);
		}
		   
		$("#classD").html("电流"); $("#vessel").html("");
		for(var i=0 ;i<dataArr[3].length;i++){
			 var vessel_opt = document.createElement("option"); 
			   vessel_opt.text =  dataArr[3][i].Parts_Desc;
			   vessel_opt.id="vessel";
			   vessel_opt.name="vessel";
			   vessel_opt.value ="D"+(i+1); 
			   $("#vessel").append(vessel_opt);
		}
	     
	     $("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
	     $("#classE").html("封装"); $("#tanker").html("");
	     for(var i=0 ;i<dataArr[4].length;i++){
			var tanker_opt = document.createElement("option"); 
			  tanker_opt.text =  dataArr[4][i].Parts_Desc;
			  tanker_opt.id="tanker";
			  tanker_opt.name="tanker";
			  tanker_opt.value ="E"+(i+1); 
			  $("#tanker").append(tanker_opt);
	     }
	    
	    $("#classF").css('visibility', 'visible'); $("#marine").css('visibility', 'visible');
	     $("#classF").html("包装"); $("#marine").html("");
		for(var i=0 ;i<dataArr[5].length;i++){
			 var marine_opt = document.createElement("option"); 
			   marine_opt.text =  dataArr[5][i].Parts_Desc;
			   marine_opt.id="marine";
			   marine_opt.name="marine";
			   marine_opt.value ="F"+(i+1); 
			   $("#marine").append(marine_opt);
		}
	     
			 
    },
   error:function(){ 
   }
})	
	    $("#classG").html(""); $("#rocket").html("");
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
	    
	    $("#classG").css('visibility', 'hidden'); $("#rocket").css('visibility', 'hidden');
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
	if(selectValue=="EK"  ){
		console.log("板载变压器  分类 系列 型号 功率 输入类型 输出类型 版本 包装" );
		  var pclass = "EK"; 
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
		   
		$("#classD").html("功率"); $("#vessel").html("");
		for(var i=0 ;i<dataArr[3].length;i++){
			 var vessel_opt = document.createElement("option"); 
			   vessel_opt.text =  dataArr[3][i].Parts_Desc;
			   vessel_opt.id="vessel";
			   vessel_opt.name="vessel";
			   vessel_opt.value ="D"+(i+1); 
			   $("#vessel").append(vessel_opt);
		}
	     
	     $("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
	     $("#classE").html("输入类型"); $("#tanker").html("");
	     for(var i=0 ;i<dataArr[4].length;i++){
			var tanker_opt = document.createElement("option"); 
			  tanker_opt.text =  dataArr[4][i].Parts_Desc;
			  tanker_opt.id="tanker";
			  tanker_opt.name="tanker";
			  tanker_opt.value ="E"+(i+1); 
			  $("#tanker").append(tanker_opt);
	     }
	    
	    $("#classF").css('visibility', 'visible'); $("#marine").css('visibility', 'visible');
	     $("#classF").html("输出类型"); $("#marine").html("");
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
	if(selectValue=="EN"){
		console.log("液晶  分类 系列 型号 尺寸 背光 版本 包装" );
		  var pclass = "EN"; 
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
		 
		$("#classD").html("尺寸"); $("#vessel").html("");
		for(var i=0 ;i<dataArr[3].length;i++){
			 var vessel_opt = document.createElement("option"); 
			   vessel_opt.text =  dataArr[3][i].Parts_Desc;
			   vessel_opt.id="vessel";
			   vessel_opt.name="vessel";
			   vessel_opt.value ="D"+(i+1); 
			   $("#vessel").append(vessel_opt);
		}
	     
	     $("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
	     $("#classE").html("背光"); $("#tanker").html("");
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
	if(selectValue=="EP"){
		console.log("触屏  分类 系列 型号 尺寸 控制类型 版本 包装" );
		  var pclass = "EP"; 
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
			   sail_opt.text = dataArr[2][i].Parts_Desc;
			   sail_opt.id="sail";
			   sail_opt.name="sail";
			   sail_opt.value ="C"+(i+1); 
			   $("#sail").append(sail_opt);
		}
		$("#classD").html("尺寸"); $("#vessel").html("");
		for(var i=0 ;i<dataArr[3].length;i++){
			 var vessel_opt = document.createElement("option"); 
			   vessel_opt.text =  dataArr[3][i].Parts_Desc;
			   vessel_opt.id="vessel";
			   vessel_opt.name="vessel";
			   vessel_opt.value ="D"+(i+1); 
			   $("#vessel").append(vessel_opt);
		}
	     console.log("    " );
	     $("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
	     $("#classE").html("控制类型"); $("#tanker").html("");
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
	if(selectValue=="EQ"){
		console.log("面膜  分类 系列 型号 规格 包装 版本" );
		  var pclass = "EQ"; 
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
		
		$("#classD").html("规格"); $("#vessel").html("");
		for(var i=0 ;i<dataArr[3].length;i++){
			 var vessel_opt = document.createElement("option"); 
			   vessel_opt.text = dataArr[3][i].Parts_Desc;
			   vessel_opt.id="vessel";
			   vessel_opt.name="vessel";
			   vessel_opt.value ="D"+(i+1); 
			   $("#vessel").append(vessel_opt);
		}
	     $("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
	     $("#classE").html("包装"); $("#tanker").html("");
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
		
			 

    },
   error:function(){ 
   }
})	
	    $("#classG").html(""); $("#rocket").html("");
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
	    
	    $("#classG").css('visibility', 'hidden'); $("#rocket").css('visibility', 'hidden');
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
}