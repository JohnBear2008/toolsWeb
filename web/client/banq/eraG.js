 function ChangeG(selectValue) {
	   if(selectValue=="G1"){
		  console.log("丝杆/导轨" );
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
 		   
 		 $("#classD").html("直径"); $("#vessel").html("");
 		 for(var i=0 ;i<6;i++){
 			  var vessel_opt = document.createElement("option"); 
 			    vessel_opt.text = "海内"+(i+1);
 			    vessel_opt.id="vessel";
 			    vessel_opt.name="vessel";
 			    vessel_opt.value ="D"+(i+1); 
 			    $("#vessel").append(vessel_opt);
 		 }
 		 $("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
 		$("#classE").html("长度"); $("#tanker").html("");
		 for(var i=0 ;i<3;i++){
			  var tanker_opt = document.createElement("option"); 
			    tanker_opt.text = "ARM"+(i+1);
			    tanker_opt.id="tanker";
			    tanker_opt.name="tanker";
			    tanker_opt.value ="E"+(i+1); 
			    $("#tanker").append(tanker_opt);
		 }
		 $("#classF").css('visibility', 'visible'); $("#marine").css('visibility', 'visible');
 		$("#classF").html("导程"); $("#marine").html("");
 		 for(var i=0 ;i<3;i++){
 			  var marine_opt = document.createElement("option"); 
 			    marine_opt.text = "AM"+(i+1);
 			    marine_opt.id="marine";
 			    marine_opt.name="marine";
 			    marine_opt.value ="F"+(i+1); 
 			    $("#marine").append(marine_opt);
 		 }
 		 $("#classG").css('visibility', 'visible'); $("#rocket").css('visibility', 'visible');
 		$("#classG").html("用途"); $("#rocket").html("");
		 for(var i=0 ;i<4;i++){
			  var rocket_opt = document.createElement("option"); 
			    rocket_opt.text = "小盒"+(i+1);
			    rocket_opt.id="rocket";
			    rocket_opt.name="rocket";
			    rocket_opt.value ="G"+(i+1); 
			    $("#rocket").append(rocket_opt);
		 }
 		 $("#classH").css('visibility', 'visible'); $("#zebra").css('visibility', 'visible');
		 $("#classH").html("转动方式"); $("#zebra").html("");
		 for(var i=0 ;i<4;i++){
			  var zebra_opt = document.createElement("option"); 
			    zebra_opt.text = "转动方式"+(i+1);
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
			    eleph_opt.value ="I"+(i+1); 
			    $("#eleph").append(eleph_opt);
		 } 
		 $("#classJ").css('visibility', 'visible'); $("#eagle").css('visibility', 'visible');
		 $("#classJ").html("包装"); $("#eagle").html("");
		 for(var i=0 ;i<4;i++){
			  var eagle_opt = document.createElement("option"); 
			    eagle_opt.text = "包装"+(i+1);
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
	   if(selectValue=="G2"){
			  console.log("减速机 分类 系列 型号 段数 减速比 齿型 连接方式 版本 包装" );
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
	 		
	 		 $("#classD").html("段数"); $("#vessel").html("");
	 		 for(var i=0 ;i<6;i++){
	 			  var vessel_opt = document.createElement("option"); 
	 			    vessel_opt.text = "P"+(i+1);
	 			    vessel_opt.id="vessel";
	 			    vessel_opt.name="vessel";
	 			    vessel_opt.value ="D"+(i+1); 
	 			    $("#vessel").append(vessel_opt);
	 		 }
	 		$("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
	 		$("#classE").html("减速比"); $("#tanker").html("");
			 for(var i=0 ;i<3;i++){
				  var tanker_opt = document.createElement("option"); 
				    tanker_opt.text = "out"+(i+1);
				    tanker_opt.id="tanker";
				    tanker_opt.name="tanker";
				    tanker_opt.value ="E"+(i+1); 
				    $("#tanker").append(tanker_opt);
			 }
			 $("#classF").css('visibility', 'visible'); $("#marine").css('visibility', 'visible');
	 		$("#classF").html("齿型"); $("#marine").html("");
	 		 for(var i=0 ;i<3;i++){
	 			  var marine_opt = document.createElement("option"); 
	 			    marine_opt.text = "齿型"+(i+1);
	 			    marine_opt.id="marine";
	 			    marine_opt.name="marine";
	 			    marine_opt.value ="F"+(i+1); 
	 			    $("#marine").append(marine_opt);
	 		 }
	 		  console.log("" );
	 		$("#classG").css('visibility', 'visible'); $("#rocket").css('visibility', 'visible');
	 		$("#classG").html("连接方式"); $("#rocket").html("");
			 for(var i=0 ;i<4;i++){
				  var rocket_opt = document.createElement("option"); 
				    rocket_opt.text = "连接方式"+(i+1);
				    rocket_opt.id="rocket";
				    rocket_opt.name="rocket";
				    rocket_opt.value ="G"+(i+1); 
				    $("#rocket").append(rocket_opt);
			 } 
		    $("#classH").css('visibility', 'visible'); $("#zebra").css('visibility', 'visible');
	 		$("#classH").html("版本"); $("#zebra").html("");
			 for(var i=0 ;i<4;i++){
				  var zebra_opt = document.createElement("option"); 
				    zebra_opt.text = "V"+(i+1);
				    zebra_opt.id="zebra";
				    zebra_opt.name="zebra";
				    zebra_opt.value ="G"+(i+1); 
				    $("#zebra").append(zebra_opt);
			 }        
			$("#classI").css('visibility', 'visible'); $("#eleph").css('visibility', 'visible');
	 		$("#classI").html("包装"); $("#eleph").html("");
			 for(var i=0 ;i<4;i++){
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
	   if(selectValue=="G3"){
			  console.log("皮带轮 分类 系列 型号 材质 齿数 中心轴孔 宽度 键轴 版本 包装" );
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
	 		
	 		 $("#classD").html("材质"); $("#vessel").html("");
	 		 for(var i=0 ;i<6;i++){
	 			  var vessel_opt = document.createElement("option"); 
	 			    vessel_opt.text = "P"+(i+1);
	 			    vessel_opt.id="vessel";
	 			    vessel_opt.name="vessel";
	 			    vessel_opt.value ="D"+(i+1); 
	 			    $("#vessel").append(vessel_opt);
	 		 }
	 		$("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
	 		$("#classE").html("齿数"); $("#tanker").html("");
			 for(var i=0 ;i<3;i++){
				  var tanker_opt = document.createElement("option"); 
				    tanker_opt.text = "out"+(i+1);
				    tanker_opt.id="tanker";
				    tanker_opt.name="tanker";
				    tanker_opt.value ="E"+(i+1); 
				    $("#tanker").append(tanker_opt);
			 }
			
			 $("#classF").css('visibility', 'visible'); $("#marine").css('visibility', 'visible');
	 		$("#classF").html("中心轴孔"); $("#marine").html("");
	 		 for(var i=0 ;i<3;i++){
	 			  var marine_opt = document.createElement("option"); 
	 			    marine_opt.text = "中心轴孔"+(i+1);
	 			    marine_opt.id="marine";
	 			    marine_opt.name="marine";
	 			    marine_opt.value ="F"+(i+1); 
	 			    $("#marine").append(marine_opt);
	 		 }
	 		  console.log("" );
	 		$("#classG").css('visibility', 'visible'); $("#rocket").css('visibility', 'visible');
	 		$("#classG").html("宽度"); $("#rocket").html("");
			 for(var i=0 ;i<4;i++){
				  var rocket_opt = document.createElement("option"); 
				    rocket_opt.text = "宽度"+(i+1);
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
				    zebra_opt.value ="G"+(i+1); 
				    $("#zebra").append(zebra_opt);
			 }        
			$("#classI").css('visibility', 'visible'); $("#eleph").css('visibility', 'visible');
	 		$("#classI").html("版本"); $("#eleph").html("");
			 for(var i=0 ;i<4;i++){
				  var eleph_opt = document.createElement("option"); 
				    eleph_opt.text = "V"+(i+1);
				    eleph_opt.id="eleph";
				    eleph_opt.name="eleph";
				    eleph_opt.value ="I"+(i+1); 
				    $("#eleph").append(eleph_opt);
			 }
			 $("#classJ").css('visibility', 'visible'); $("#eagle").css('visibility', 'visible');
	 		 $("#classJ").html("包装"); $("#eagle").html("");
			 for(var i=0 ;i<4;i++){
				  var eagle_opt = document.createElement("option"); 
				    eagle_opt.text = "盒"+(i+1);
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
	   if(selectValue=="G4"){
			  console.log("皮带 分类 系列 型号 宽度 长度 版本 包装" );
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
	 		
	 		 $("#classD").html("宽度"); $("#vessel").html("");
	 		 for(var i=0 ;i<6;i++){
	 			  var vessel_opt = document.createElement("option"); 
	 			    vessel_opt.text = "P"+(i+1);
	 			    vessel_opt.id="vessel";
	 			    vessel_opt.name="vessel";
	 			    vessel_opt.value ="D"+(i+1); 
	 			    $("#vessel").append(vessel_opt);
	 		 }
	 		$("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
	 		$("#classE").html("长度"); $("#tanker").html("");
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
	 			    marine_opt.text = "V"+(i+1);
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
	   if(selectValue=="G5" || selectValue=="GC" ){
			  console.log("机柜/机箱 分类 系列 型号 规格 版本 包装" );
			  console.log("视窗玻璃 分类 系列 型号 规格 版本 包装" );
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
	 		
	 		 $("#classD").html("规格"); $("#vessel").html("");
	 		 for(var i=0 ;i<6;i++){
	 			  var vessel_opt = document.createElement("option"); 
	 			    vessel_opt.text = "S"+(i+1);
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
	 			    marine_opt.text = "P"+(i+1);
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
	   if(selectValue=="G6"  ){
			 
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
	 		
	 		 $("#classD").html("部位"); $("#vessel").html("");
	 		 for(var i=0 ;i<6;i++){
	 			  var vessel_opt = document.createElement("option"); 
	 			    vessel_opt.text = "S"+(i+1);
	 			    vessel_opt.id="vessel";
	 			    vessel_opt.name="vessel";
	 			    vessel_opt.value ="D"+(i+1); 
	 			    $("#vessel").append(vessel_opt);
	 		 } 
	 		$("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
	 		$("#classE").html("规格"); $("#tanker").html("");
			 for(var i=0 ;i<3;i++){
				  var tanker_opt = document.createElement("option"); 
				    tanker_opt.text = "V"+(i+1);
				    tanker_opt.id="tanker";
				    tanker_opt.name="tanker";
				    tanker_opt.value ="E"+(i+1); 
				    $("#tanker").append(tanker_opt);
			 }
			
			$("#classF").css('visibility', 'visible'); $("#marine").css('visibility', 'visible');
	 		$("#classF").html("版本"); $("#marine").html("");
	 		 for(var i=0 ;i<3;i++){
	 			  var marine_opt = document.createElement("option"); 
	 			    marine_opt.text = "P"+(i+1);
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
	   if(selectValue=="G7"  ){
		   console.log("紧固件 分类 系列 型号 材质 长度 表面处理 版本" );
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
	 		  
	 		 $("#classD").html("材质"); $("#vessel").html("");
	 		 for(var i=0 ;i<6;i++){
	 			  var vessel_opt = document.createElement("option"); 
	 			    vessel_opt.text = "S"+(i+1);
	 			    vessel_opt.id="vessel";
	 			    vessel_opt.name="vessel";
	 			    vessel_opt.value ="D"+(i+1); 
	 			    $("#vessel").append(vessel_opt);
	 		 } 
	 		$("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
	 		$("#classE").html("长度"); $("#tanker").html("");
			 for(var i=0 ;i<3;i++){
				  var tanker_opt = document.createElement("option"); 
				    tanker_opt.text = "长度"+(i+1);
				    tanker_opt.id="tanker";
				    tanker_opt.name="tanker";
				    tanker_opt.value ="E"+(i+1); 
				    $("#tanker").append(tanker_opt);
			 }
			 
			$("#classF").css('visibility', 'visible'); $("#marine").css('visibility', 'visible');
	 		$("#classF").html("表面处理"); $("#marine").html("");
	 		 for(var i=0 ;i<3;i++){
	 			  var marine_opt = document.createElement("option"); 
	 			    marine_opt.text = "表面处理"+(i+1);
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
	   if(selectValue=="G8" || selectValue=="G9"   ){
		   console.log("连接支架 分类 系列 型号 材质 长度 表面处理 版本 " );
		   console.log("联轴器 分类 系列 型号 材质 长度 表面处理 版本 " );
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
	 		
	 		 $("#classD").html("材质"); $("#vessel").html("");
	 		 for(var i=0 ;i<6;i++){
	 			  var vessel_opt = document.createElement("option"); 
	 			    vessel_opt.text = "S"+(i+1);
	 			    vessel_opt.id="vessel";
	 			    vessel_opt.name="vessel";
	 			    vessel_opt.value ="D"+(i+1); 
	 			    $("#vessel").append(vessel_opt);
	 		 } 
	 		$("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
	 		$("#classE").html("表面处理"); $("#tanker").html("");
			 for(var i=0 ;i<3;i++){
				  var tanker_opt = document.createElement("option"); 
				    tanker_opt.text = "表面处理"+(i+1);
				    tanker_opt.id="tanker";
				    tanker_opt.name="tanker";
				    tanker_opt.value ="E"+(i+1); 
				    $("#tanker").append(tanker_opt);
			 }
			 console.log("     " );
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
	   if(selectValue=="GA"  ){
		   console.log("轴套 分类 系列 型号 外径 内径 材质 表面处理 版本  " );
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
	 		
	 		 $("#classD").html("外径"); $("#vessel").html("");
	 		 for(var i=0 ;i<6;i++){
	 			  var vessel_opt = document.createElement("option"); 
	 			    vessel_opt.text = "S"+(i+1);
	 			    vessel_opt.id="vessel";
	 			    vessel_opt.name="vessel";
	 			    vessel_opt.value ="D"+(i+1); 
	 			    $("#vessel").append(vessel_opt);
	 		 } 
	 		$("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
	 		$("#classE").html("内径"); $("#tanker").html("");
			 for(var i=0 ;i<3;i++){
				  var tanker_opt = document.createElement("option"); 
				    tanker_opt.text = "内径"+(i+1);
				    tanker_opt.id="tanker";
				    tanker_opt.name="tanker";
				    tanker_opt.value ="E"+(i+1); 
				    $("#tanker").append(tanker_opt);
			 }
			  console.log("       " );
			$("#classF").css('visibility', 'visible'); $("#marine").css('visibility', 'visible');
	 		$("#classF").html("材质"); $("#marine").html("");
	 		 for(var i=0 ;i<3;i++){
	 			  var marine_opt = document.createElement("option"); 
	 			    marine_opt.text = "材质"+(i+1);
	 			    marine_opt.id="marine";
	 			    marine_opt.name="marine";
	 			    marine_opt.value ="F"+(i+1); 
	 			    $("#marine").append(marine_opt);
	 		 }
	 		$("#classG").css('visibility', 'visible'); $("#rocket").css('visibility', 'visible');
	 		$("#classG").html("表面处理"); $("#rocket").html("");
	 		 for(var i=0 ;i<3;i++){
	 			  var rocket_opt = document.createElement("option"); 
	 			    rocket_opt.text = "表面处理"+(i+1);
	 			    rocket_opt.id="rocket";
	 			    rocket_opt.name="rocket";
	 			    rocket_opt.value ="G"+(i+1); 
	 			    $("#rocket").append(rocket_opt);
	 		 }
	 		$("#classH").css('visibility', 'visible'); $("#zebra").css('visibility', 'visible');
	 		$("#classH").html("版本"); $("#zebra").html("");
	 		 for(var i=0 ;i<3;i++){
	 			  var zebra_opt = document.createElement("option"); 
	 			    zebra_opt.text = "表面处理"+(i+1);
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
	   if(selectValue=="GB"  ){
		   console.log("亚克力 分类 尺寸 厚度 定制规格 包装 版本   " );
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
	 		
	 		 $("#classC").html("尺寸"); $("#sail").html("");
	 		 for(var i=0 ;i<12;i++){
	 			  var sail_opt = document.createElement("option"); 
	 			    sail_opt.text = "尺寸"+(i+1);
	 			    sail_opt.id="sail";
	 			    sail_opt.name="sail";
	 			    sail_opt.value ="C"+(i+1); 
	 			    $("#sail").append(sail_opt);
	 		 }
	 		  
	 		 $("#classD").html("厚度"); $("#vessel").html("");
	 		 for(var i=0 ;i<6;i++){
	 			  var vessel_opt = document.createElement("option"); 
	 			    vessel_opt.text = "厚度"+(i+1);
	 			    vessel_opt.id="vessel";
	 			    vessel_opt.name="vessel";
	 			    vessel_opt.value ="D"+(i+1); 
	 			    $("#vessel").append(vessel_opt);
	 		 } 
	 	
	 		$("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
	 		$("#classE").html("定制规格"); $("#tanker").html("");
			 for(var i=0 ;i<3;i++){
				  var tanker_opt = document.createElement("option"); 
				    tanker_opt.text = "定制规格"+(i+1);
				    tanker_opt.id="tanker";
				    tanker_opt.name="tanker";
				    tanker_opt.value ="E"+(i+1); 
				    $("#tanker").append(tanker_opt);
			 }
			 
			$("#classF").css('visibility', 'visible'); $("#marine").css('visibility', 'visible');
	 		$("#classF").html("包装"); $("#marine").html("");
	 		 for(var i=0 ;i<3;i++){
	 			  var marine_opt = document.createElement("option"); 
	 			    marine_opt.text = "包装"+(i+1);
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
	   if(selectValue=="GC"  ){
		   console.log("视窗玻璃 分类 系列 型号 规格 包装 版本    " );
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
	 			    sail_opt.text = "型号"+(i+1);
	 			    sail_opt.id="sail";
	 			    sail_opt.name="sail";
	 			    sail_opt.value ="C"+(i+1); 
	 			    $("#sail").append(sail_opt);
	 		 }
	 		
	 		 $("#classD").html("规格"); $("#vessel").html("");
	 		 for(var i=0 ;i<6;i++){
	 			  var vessel_opt = document.createElement("option"); 
	 			    vessel_opt.text = "规格"+(i+1);
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
function GoldG(selectValue) { 
	if(selectValue=="G1"){
		console.log("丝杆/导轨 分类 系列 型号 直径 长度 导程 用途 转动方式 版本 包装" );
		var pclass = "G1"; 
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
		  
		$("#classD").html("直径"); $("#vessel").html("");
		for(var i=0 ;i<dataArr[3].length;i++){
			 var vessel_opt = document.createElement("option"); 
			   vessel_opt.text =  dataArr[3][i].Parts_Desc;
			   vessel_opt.id="vessel";
			   vessel_opt.name="vessel";
			   vessel_opt.value ="D"+(i+1); 
			   $("#vessel").append(vessel_opt);
		}
		$("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
	     $("#classE").html("长度"); $("#tanker").html("");
	     for(var i=0 ;i<dataArr[4].length;i++){
			var tanker_opt = document.createElement("option"); 
			  tanker_opt.text =  dataArr[4][i].Parts_Desc;
			  tanker_opt.id="tanker";
			  tanker_opt.name="tanker";
			  tanker_opt.value ="E"+(i+1); 
			  $("#tanker").append(tanker_opt);
	     }
	     $("#classF").css('visibility', 'visible'); $("#marine").css('visibility', 'visible');
	     $("#classF").html("导程"); $("#marine").html("");
		for(var i=0 ;i<dataArr[5].length;i++){
			 var marine_opt = document.createElement("option"); 
			   marine_opt.text =  dataArr[5][i].Parts_Desc;
			   marine_opt.id="marine";
			   marine_opt.name="marine";
			   marine_opt.value ="F"+(i+1); 
			   $("#marine").append(marine_opt);
		}
		$("#classG").css('visibility', 'visible'); $("#rocket").css('visibility', 'visible');
	     $("#classG").html("用途"); $("#rocket").html("");
	     for(var i=0 ;i<dataArr[6].length;i++){
			var rocket_opt = document.createElement("option"); 
			  rocket_opt.text =  dataArr[6][i].Parts_Desc;
			  rocket_opt.id="rocket";
			  rocket_opt.name="rocket";
			  rocket_opt.value ="G"+(i+1); 
			  $("#rocket").append(rocket_opt);
	     }
		$("#classH").css('visibility', 'visible'); $("#zebra").css('visibility', 'visible');
	     $("#classH").html("转动方式"); $("#zebra").html("");
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
	if(selectValue=="G2"){
		console.log("减速机 分类 系列 型号 段数 减速比 齿型 连接方式 版本 包装" );
		var pclass = "G2"; 
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
	     
		$("#classD").html("段数"); $("#vessel").html("");
		for(var i=0 ;i<dataArr[3].length;i++){
			 var vessel_opt = document.createElement("option"); 
			   vessel_opt.text =  dataArr[3][i].Parts_Desc;
			   vessel_opt.id="vessel";
			   vessel_opt.name="vessel";
			   vessel_opt.value ="D"+(i+1); 
			   $("#vessel").append(vessel_opt);
		}
	     $("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
	     $("#classE").html("减速比"); $("#tanker").html("");
	     for(var i=0 ;i<dataArr[4].length;i++){
			var tanker_opt = document.createElement("option"); 
			  tanker_opt.text =  dataArr[4][i].Parts_Desc;
			  tanker_opt.id="tanker";
			  tanker_opt.name="tanker";
			  tanker_opt.value ="E"+(i+1); 
			  $("#tanker").append(tanker_opt);
	     }
	     $("#classF").css('visibility', 'visible'); $("#marine").css('visibility', 'visible');
	     $("#classF").html("齿型"); $("#marine").html("");
		for(var i=0 ;i<dataArr[5].length;i++){
			 var marine_opt = document.createElement("option"); 
			   marine_opt.text =  dataArr[5][i].Parts_Desc;
			   marine_opt.id="marine";
			   marine_opt.name="marine";
			   marine_opt.value ="F"+(i+1); 
			   $("#marine").append(marine_opt);
		}
		 console.log("" );
	     $("#classG").css('visibility', 'visible'); $("#rocket").css('visibility', 'visible');
	     $("#classG").html("连接方式"); $("#rocket").html("");
	     for(var i=0 ;i<dataArr[6].length;i++){
			var rocket_opt = document.createElement("option"); 
			  rocket_opt.text =  dataArr[6][i].Parts_Desc;
			  rocket_opt.id="rocket";
			  rocket_opt.name="rocket";
			  rocket_opt.value ="G"+(i+1); 
			  $("#rocket").append(rocket_opt);
	     } 
	  $("#classH").css('visibility', 'visible'); $("#zebra").css('visibility', 'visible');
	     $("#classH").html("版本"); $("#zebra").html("");
	     for(var i=0 ;i<dataArr[7].length;i++){
			var zebra_opt = document.createElement("option"); 
			  zebra_opt.text =  dataArr[7][i].Parts_Desc;
			  zebra_opt.id="zebra";
			  zebra_opt.name="zebra";
			  zebra_opt.value ="G"+(i+1); 
			  $("#zebra").append(zebra_opt);
	     }        
	    $("#classI").css('visibility', 'visible'); $("#eleph").css('visibility', 'visible');
	     $("#classI").html("包装"); $("#eleph").html("");
	     for(var i=0 ;i<dataArr[8].length;i++){
			var eleph_opt = document.createElement("option"); 
			  eleph_opt.text =  dataArr[8][i].Parts_Desc;
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
	if(selectValue=="G3"){
		console.log("皮带轮 分类 系列 型号 材质 齿数 中心轴孔 宽度 键轴 版本 包装" );
		  var pclass = "G3"; 
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
	     
		$("#classD").html("材质"); $("#vessel").html("");
		for(var i=0 ;i<dataArr[3].length;i++){
			 var vessel_opt = document.createElement("option"); 
			   vessel_opt.text =  dataArr[3][i].Parts_Desc;
			   vessel_opt.id="vessel";
			   vessel_opt.name="vessel";
			   vessel_opt.value ="D"+(i+1); 
			   $("#vessel").append(vessel_opt);
		}
	     $("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
	     $("#classE").html("齿数"); $("#tanker").html("");
	     for(var i=0 ;i<dataArr[4].length;i++){
			var tanker_opt = document.createElement("option"); 
			  tanker_opt.text =  dataArr[4][i].Parts_Desc;
			  tanker_opt.id="tanker";
			  tanker_opt.name="tanker";
			  tanker_opt.value ="E"+(i+1); 
			  $("#tanker").append(tanker_opt);
	     }
	    
	     $("#classF").css('visibility', 'visible'); $("#marine").css('visibility', 'visible');
	     $("#classF").html("中心轴孔"); $("#marine").html("");
		for(var i=0 ;i<dataArr[5].length;i++){
			 var marine_opt = document.createElement("option"); 
			   marine_opt.text =  dataArr[5][i].Parts_Desc;
			   marine_opt.id="marine";
			   marine_opt.name="marine";
			   marine_opt.value ="F"+(i+1); 
			   $("#marine").append(marine_opt);
		}
		 console.log("" );
	     $("#classG").css('visibility', 'visible'); $("#rocket").css('visibility', 'visible');
	     $("#classG").html("宽度"); $("#rocket").html("");
	     for(var i=0 ;i<dataArr[6].length;i++){
			var rocket_opt = document.createElement("option"); 
			  rocket_opt.text =  dataArr[6][i].Parts_Desc;
			  rocket_opt.id="rocket";
			  rocket_opt.name="rocket";
			  rocket_opt.value ="G"+(i+1); 
			  $("#rocket").append(rocket_opt);
	     } 
	     
	  $("#classH").css('visibility', 'visible'); $("#zebra").css('visibility', 'visible');
	     $("#classH").html("键轴"); $("#zebra").html("");
	     for(var i=0 ;i<dataArr[7].length;i++){
			var zebra_opt = document.createElement("option"); 
			  zebra_opt.text =  dataArr[7][i].Parts_Desc;
			  zebra_opt.id="zebra";
			  zebra_opt.name="zebra";
			  zebra_opt.value ="G"+(i+1); 
			  $("#zebra").append(zebra_opt);
	     }        
	    $("#classI").css('visibility', 'visible'); $("#eleph").css('visibility', 'visible');
	     $("#classI").html("版本"); $("#eleph").html("");
	     for(var i=0 ;i<dataArr[8].length;i++){
			var eleph_opt = document.createElement("option"); 
			  eleph_opt.text =  dataArr[8][i].Parts_Desc;
			  eleph_opt.id="eleph";
			  eleph_opt.name="eleph";
			  eleph_opt.value ="I"+(i+1); 
			  $("#eleph").append(eleph_opt);
	     }
	     $("#classJ").css('visibility', 'visible'); $("#eagle").css('visibility', 'visible');
		$("#classJ").html("包装"); $("#eagle").html("");
	     for(var i=0 ;i<dataArr[9].length;i++){
			var eagle_opt = document.createElement("option"); 
			  eagle_opt.text =  dataArr[9][i].Parts_Desc;
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
	if(selectValue=="G4"){
		console.log("皮带 分类 系列 型号 宽度 长度 版本 包装" );
		var pclass = "G4"; 
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
	     
		$("#classD").html("宽度"); $("#vessel").html("");
		for(var i=0 ;i<dataArr[3].length;i++){
			 var vessel_opt = document.createElement("option"); 
			   vessel_opt.text = dataArr[3][i].Parts_Desc;
			   vessel_opt.id="vessel";
			   vessel_opt.name="vessel";
			   vessel_opt.value ="D"+(i+1); 
			   $("#vessel").append(vessel_opt);
		}
	     $("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
	     $("#classE").html("长度"); $("#tanker").html("");
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
	if(selectValue=="G5" || selectValue=="GC" ){
		console.log("机柜/机箱 分类 系列 型号 规格 版本 包装" ); 
		var pclass = "G5"; 
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
	     
		$("#classD").html("规格"); $("#vessel").html("");
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
	if(selectValue=="G6"  ){
		var pclass = "G6"; 
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
	     
		$("#classD").html("部位"); $("#vessel").html("");
		for(var i=0 ;i<dataArr[3].length;i++){
			 var vessel_opt = document.createElement("option"); 
			   vessel_opt.text =  dataArr[3][i].Parts_Desc;
			   vessel_opt.id="vessel";
			   vessel_opt.name="vessel";
			   vessel_opt.value ="D"+(i+1); 
			   $("#vessel").append(vessel_opt);
		} 
	     $("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
	     $("#classE").html("规格"); $("#tanker").html("");
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

	if(selectValue=="G7"  ){
		console.log("紧固件 分类 系列 型号 材质 长度 表面处理 版本" );
		  var pclass = "G7"; 
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
				  yaption.text = dataArr[1][i].Parts_Desc;
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
			
		     $("#classD").html("材质"); $("#vessel").html("");
		     for(var i=0 ;i<dataArr[3].length;i++){
				var vessel_opt = document.createElement("option"); 
				  vessel_opt.text =  dataArr[3][i].Parts_Desc;
				  vessel_opt.id="vessel";
				  vessel_opt.name="vessel";
				  vessel_opt.value ="D"+(i+1); 
				  $("#vessel").append(vessel_opt);
		     } 
		    $("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
		    $("#classE").html("长度"); $("#tanker").html("");
		    for(var i=0 ;i<dataArr[4].length;i++){
			     var tanker_opt = document.createElement("option"); 
				 tanker_opt.text =  dataArr[4][i].Parts_Desc;
				 tanker_opt.id="tanker";
				 tanker_opt.name="tanker";
				 tanker_opt.value ="E"+(i+1); 
				 $("#tanker").append(tanker_opt);
		    }
		    
		   $("#classF").css('visibility', 'visible'); $("#marine").css('visibility', 'visible');
		    $("#classF").html("表面处理"); $("#marine").html("");
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
	     if(selectValue=="G8" || selectValue=="G9"   ){
		console.log("连接支架 分类 系列 型号 材质 长度 表面处理 版本 " );
		console.log("联轴器 分类 系列 型号 材质 长度 表面处理 版本 " );
		  var pclass = "G8"; 
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
		    
		     $("#classD").html("材质"); $("#vessel").html("");
		     for(var i=0 ;i<dataArr[3].length;i++){
				var vessel_opt = document.createElement("option"); 
				  vessel_opt.text = dataArr[3][i].Parts_Desc;
				  vessel_opt.id="vessel";
				  vessel_opt.name="vessel";
				  vessel_opt.value ="D"+(i+1); 
				  $("#vessel").append(vessel_opt);
		     } 
		    $("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
		    $("#classE").html("表面处理"); $("#tanker").html("");
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
	     if(selectValue=="GA"  ){
		console.log("轴套 分类 系列 型号 外径 内径 材质 表面处理 版本  " );
		  var pclass = "GA"; 
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
				  sail_opt.text = dataArr[2][i].Parts_Desc;
				  sail_opt.id="sail";
				  sail_opt.name="sail";
				  sail_opt.value ="C"+(i+1); 
				  $("#sail").append(sail_opt);
		     }
		    
		     $("#classD").html("外径"); $("#vessel").html("");
		     for(var i=0 ;i<dataArr[3].length;i++){
				var vessel_opt = document.createElement("option"); 
				  vessel_opt.text =  dataArr[3][i].Parts_Desc;
				  vessel_opt.id="vessel";
				  vessel_opt.name="vessel";
				  vessel_opt.value ="D"+(i+1); 
				  $("#vessel").append(vessel_opt);
		     } 
		    $("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
		    $("#classE").html("内径"); $("#tanker").html("");
		    for(var i=0 ;i<dataArr[4].length;i++){
			     var tanker_opt = document.createElement("option"); 
				 tanker_opt.text =  dataArr[4][i].Parts_Desc;
				 tanker_opt.id="tanker";
				 tanker_opt.name="tanker";
				 tanker_opt.value ="E"+(i+1); 
				 $("#tanker").append(tanker_opt);
		    }
		     console.log("       " );
		   $("#classF").css('visibility', 'visible'); $("#marine").css('visibility', 'visible');
		    $("#classF").html("材质"); $("#marine").html("");
		     for(var i=0 ;i<dataArr[5].length;i++){
				var marine_opt = document.createElement("option"); 
				  marine_opt.text =  dataArr[5][i].Parts_Desc;
				  marine_opt.id="marine";
				  marine_opt.name="marine";
				  marine_opt.value ="F"+(i+1); 
				  $("#marine").append(marine_opt);
		     }
		    $("#classG").css('visibility', 'visible'); $("#rocket").css('visibility', 'visible');
		    $("#classG").html("表面处理"); $("#rocket").html("");
		     for(var i=0 ;i<dataArr[6].length;i++){
				var rocket_opt = document.createElement("option"); 
				  rocket_opt.text =  dataArr[6][i].Parts_Desc;
				  rocket_opt.id="rocket";
				  rocket_opt.name="rocket";
				  rocket_opt.value ="G"+(i+1); 
				  $("#rocket").append(rocket_opt);
		     }
		    $("#classH").css('visibility', 'visible'); $("#zebra").css('visibility', 'visible');
		    $("#classH").html("版本"); $("#zebra").html("");
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
	     if(selectValue=="GB"  ){
		console.log("亚克力 分类 尺寸 厚度 定制规格 包装 版本   " );
		  var pclass = "GB"; 
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
			 
		     $("#classB").html("尺寸");  $("#yacht").html("");
		     for(var i=0 ;i<dataArr[1].length;i++){
				var yaption = document.createElement("option"); 
				  yaption.text =  dataArr[1][i].Parts_Desc;
				  yaption.id="yacht";
				  yaption.name="yacht";
				  yaption.value ="B"+(i+1); 
				  $("#yacht").append(yaption);
		     }
		    
		     $("#classC").html("厚度"); $("#sail").html("");
		     for(var i=0 ;i<dataArr[2].length;i++){
				var sail_opt = document.createElement("option"); 
				  sail_opt.text =  dataArr[2][i].Parts_Desc;
				  sail_opt.id="sail";
				  sail_opt.name="sail";
				  sail_opt.value ="C"+(i+1); 
				  $("#sail").append(sail_opt);
		     }
			
		     $("#classD").html("定制规格"); $("#vessel").html("");
		     for(var i=0 ;i<dataArr[3].length;i++){
				var vessel_opt = document.createElement("option"); 
				  vessel_opt.text =  dataArr[3][i].Parts_Desc;
				  vessel_opt.id="vessel";
				  vessel_opt.name="vessel";
				  vessel_opt.value ="D"+(i+1); 
				  $("#vessel").append(vessel_opt);
		     } 
	    
		    $("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
		    $("#classE").html("包装"); $("#tanker").html("");
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