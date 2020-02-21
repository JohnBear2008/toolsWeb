 function ChangeF9(selectValue) {
	 
       
	if(selectValue=="F9"){
		console.log("开关电源 分类 系列 型号 功率 输出类型 配件 版本 包装" );
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
			   vessel_opt.text = "功率"+(i+1);
			   vessel_opt.id="vessel";
			   vessel_opt.name="vessel";
			   vessel_opt.value ="D"+(i+1); 
			   $("#vessel").append(vessel_opt);
		}
	     $("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
	     $("#classE").html("输出类型"); $("#tanker").html("");
	     for(var i=0 ;i<3;i++){
			var tanker_opt = document.createElement("option"); 
			  tanker_opt.text = "输出类型"+(i+1);
			  tanker_opt.id="tanker";
			  tanker_opt.name="tanker";
			  tanker_opt.value ="E"+(i+1); 
			  $("#tanker").append(tanker_opt);
	     }
	    $("#classF").css('visibility', 'visible'); $("#marine").css('visibility', 'visible');
	     $("#classF").html("配件"); $("#marine").html("");
		for(var i=0 ;i<3;i++){
			 var marine_opt = document.createElement("option"); 
			   marine_opt.text = "配件"+(i+1);
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
			  rocket_opt.value ="H"+(i+1); 
			  $("#rocket").append(rocket_opt);
	     }
	    $("#classH").css('visibility', 'visible'); $("#zebra").css('visibility', 'visible');
	     $("#classH").html("包装"); $("#zebra").html("");
	     for(var i=0 ;i<4;i++){
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
	   if(selectValue=="FA"){
			  console.log("隔离变压器  分类 系列 型号 功率 输入类型 输出类型 版本 包装" );
			  $("#classA").html("分类"); $("#boat").html("");
	 		 for(var i=0 ;i<8;i++){
	 			    var youoption = document.createElement("option"); 
				    youoption.text = "T"+(i+1);
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
	 			    vessel_opt.text = "PWR"+(i+1);
	 			    vessel_opt.id="vessel";
	 			    vessel_opt.name="vessel";
	 			    vessel_opt.value ="D"+(i+1); 
	 			    $("#vessel").append(vessel_opt);
	 		 }
	 		$("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
	 		$("#classE").html("输入类型"); $("#tanker").html("");
			 for(var i=0 ;i<3;i++){
				  var tanker_opt = document.createElement("option"); 
				    tanker_opt.text = "F"+(i+1);
				    tanker_opt.id="tanker";
				    tanker_opt.name="tanker";
				    tanker_opt.value ="E"+(i+1); 
				    $("#tanker").append(tanker_opt);
			 }
			$("#classF").css('visibility', 'visible'); $("#marine").css('visibility', 'visible');
	 		$("#classF").html("输出类型"); $("#marine").html("");
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
	   if(selectValue=="FB"){
			  $("#classA").html("分类"); $("#boat").html("");
	 		 for(var i=0 ;i<8;i++){
	 			    var youoption = document.createElement("option"); 
				    youoption.text = "T"+(i+1);
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
	 		 
	 		 $("#classD").html("位数"); $("#vessel").html("");
	 		 for(var i=0 ;i<6;i++){
	 			  var vessel_opt = document.createElement("option"); 
	 			    vessel_opt.text = "位数"+(i+1);
	 			    vessel_opt.id="vessel";
	 			    vessel_opt.name="vessel";
	 			    vessel_opt.value ="D"+(i+1); 
	 			    $("#vessel").append(vessel_opt);
	 		 }
	 		$("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
	 		$("#classE").html("电流"); $("#tanker").html("");
			 for(var i=0 ;i<3;i++){
				  var tanker_opt = document.createElement("option"); 
				    tanker_opt.text = "电流"+(i+1);
				    tanker_opt.id="tanker";
				    tanker_opt.name="tanker";
				    tanker_opt.value ="E"+(i+1); 
				    $("#tanker").append(tanker_opt);
			 }
			
			 $("#classF").css('visibility', 'visible'); $("#marine").css('visibility', 'visible');
	 		$("#classF").html("规格"); $("#marine").html("");
	 		 for(var i=0 ;i<3;i++){
	 			  var marine_opt = document.createElement("option"); 
	 			    marine_opt.text = "规格"+(i+1);
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
	   if(selectValue=="FC"){
			  console.log("接触器 分类 系列 型号 位数 控制电压 触点电流 触点电压 版本 包装" );
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
	 		
	 		 $("#classD").html("控制电压"); $("#vessel").html("");
	 		 for(var i=0 ;i<6;i++){
	 			  var vessel_opt = document.createElement("option"); 
	 			    vessel_opt.text = "P"+(i+1);
	 			    vessel_opt.id="vessel";
	 			    vessel_opt.name="vessel";
	 			    vessel_opt.value ="D"+(i+1); 
	 			    $("#vessel").append(vessel_opt);
	 		 }
	 		$("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
	 		$("#classE").html("触点电流"); $("#tanker").html("");
			 for(var i=0 ;i<3;i++){
				  var tanker_opt = document.createElement("option"); 
				    tanker_opt.text = "out"+(i+1);
				    tanker_opt.id="tanker";
				    tanker_opt.name="tanker";
				    tanker_opt.value ="E"+(i+1); 
				    $("#tanker").append(tanker_opt);
			 }
			 $("#classF").css('visibility', 'visible'); $("#marine").css('visibility', 'visible');
	 		$("#classF").html("触点电压"); $("#marine").html("");
	 		 for(var i=0 ;i<3;i++){
	 			  var marine_opt = document.createElement("option"); 
	 			    marine_opt.text = "版本"+(i+1);
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
				    zebra_opt.text = "V"+(i+1);
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
	   if(selectValue=="FD" || selectValue=="FE" || selectValue=="FH" || selectValue=="FJ" ){
			  console.log("工业开关  分类 系列 型号 规格 版本 包装" );
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
	 		  
	 		 $("#classD").html("规格"); $("#vessel").html("");
	 		 for(var i=0 ;i<6;i++){
	 			  var vessel_opt = document.createElement("option"); 
	 			    vessel_opt.text = "P"+(i+1);
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
	   if(selectValue=="FF"){
			  console.log("风扇  分类 系列 型号 控制电压 尺寸 版本 包装" );
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
	 		  
	 		 $("#classD").html("控制电压"); $("#vessel").html("");
	 		 for(var i=0 ;i<6;i++){
	 			  var vessel_opt = document.createElement("option"); 
	 			    vessel_opt.text = "P"+(i+1);
	 			    vessel_opt.id="vessel";
	 			    vessel_opt.name="vessel";
	 			    vessel_opt.value ="D"+(i+1); 
	 			    $("#vessel").append(vessel_opt);
	 		 }
	 		$("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
	 		$("#classE").html("尺寸"); $("#tanker").html("");
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
	 			    marine_opt.text = "引线长"+(i+1);
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
	   if(selectValue=="FG"){
			  console.log("互感器  分类 系列 型号 一次输入 二次输入 版本 包装" );
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
	 	
	 		 $("#classD").html("一次输入"); $("#vessel").html("");
	 		 for(var i=0 ;i<6;i++){
	 			  var vessel_opt = document.createElement("option"); 
	 			    vessel_opt.text = "P"+(i+1);
	 			    vessel_opt.id="vessel";
	 			    vessel_opt.name="vessel";
	 			    vessel_opt.value ="D"+(i+1); 
	 			    $("#vessel").append(vessel_opt);
	 		 }
	 		$("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
	 		$("#classE").html("二次输入"); $("#tanker").html("");
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
				    rocket_opt.text = "H"+(i+1);
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
		  
	 }
function GoldF9(selectValue) { 
	if(selectValue=="F9"){
		console.log("开关电源 分类 系列 型号 功率 输出类型 配件 版本 包装" );
		 var pclass = "F9"; 
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
	     $("#classE").html("输出类型"); $("#tanker").html("");
	     for(var i=0 ;i<dataArr[4].length;i++){
			var tanker_opt = document.createElement("option"); 
			  tanker_opt.text =  dataArr[4][i].Parts_Desc;
			  tanker_opt.id="tanker";
			  tanker_opt.name="tanker";
			  tanker_opt.value ="E"+(i+1); 
			  $("#tanker").append(tanker_opt);
	     } 
	     $("#classF").css('visibility', 'visible'); $("#marine").css('visibility', 'visible');
	     $("#classF").html("配件"); $("#marine").html("");
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
	if(selectValue=="FA"){
		console.log("隔离变压器  分类 系列 型号 功率 输入类型 输出类型 版本 包装" );
		var pclass = "FA"; 
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
	     $("#classE").html("输入类型"); $("#tanker").html("");
	     for(var i=0 ;i<dataArr[4].length;i++){
			var tanker_opt = document.createElement("option"); 
			  tanker_opt.text = dataArr[4][i].Parts_Desc;
			  tanker_opt.id="tanker";
			  tanker_opt.name="tanker";
			  tanker_opt.value ="E"+(i+1); 
			  $("#tanker").append(tanker_opt);
	     }
	    $("#classF").css('visibility', 'visible'); $("#marine").css('visibility', 'visible');
	     $("#classF").html("输出类型"); $("#marine").html("");
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

	if(selectValue=="FB"){
		var pclass = "FB"; 
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
	     $("#classE").html("电流"); $("#tanker").html("");
	     for(var i=0 ;i<dataArr[4].length;i++){
			var tanker_opt = document.createElement("option"); 
			  tanker_opt.text =   dataArr[4][i].Parts_Desc;
			  tanker_opt.id="tanker";
			  tanker_opt.name="tanker";
			  tanker_opt.value ="E"+(i+1); 
			  $("#tanker").append(tanker_opt);
	     }
	    
	     $("#classF").css('visibility', 'visible'); $("#marine").css('visibility', 'visible');
	     $("#classF").html("规格"); $("#marine").html("");
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
	if(selectValue=="FC"){
		console.log("接触器 分类 系列 型号 位数 控制电压 触点电流 触点电压 版本 包装" );
		var pclass = "FC"; 
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
	     
		$("#classD").html("控制电压"); $("#vessel").html("");
		for(var i=0 ;i<dataArr[3].length;i++){
			 var vessel_opt = document.createElement("option"); 
			   vessel_opt.text =  dataArr[3][i].Parts_Desc;
			   vessel_opt.id="vessel";
			   vessel_opt.name="vessel";
			   vessel_opt.value ="D"+(i+1); 
			   $("#vessel").append(vessel_opt);
		}
	     $("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
	     $("#classE").html("触点电流"); $("#tanker").html("");
	     for(var i=0 ;i<dataArr[4].length;i++){
			var tanker_opt = document.createElement("option"); 
			  tanker_opt.text =  dataArr[4][i].Parts_Desc;
			  tanker_opt.id="tanker";
			  tanker_opt.name="tanker";
			  tanker_opt.value ="E"+(i+1); 
			  $("#tanker").append(tanker_opt);
	     }
	     $("#classF").css('visibility', 'visible'); $("#marine").css('visibility', 'visible');
	     $("#classF").html("触点电压"); $("#marine").html("");
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
	if(selectValue=="FD" || selectValue=="FE" || selectValue=="FH" || selectValue=="FJ" ){
		console.log("工业开关  分类 系列 型号 规格 版本 包装" );
		var pclass = "FD"; 
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
	     $("#classE").html("版本"); $("#tanker").html("");
	     for(var i=0 ;i<dataArr[4].length;i++){
			var tanker_opt = document.createElement("option"); 
			  tanker_opt.text = dataArr[4][i].Parts_Desc;
			  tanker_opt.id="tanker";
			  tanker_opt.name="tanker";
			  tanker_opt.value ="E"+(i+1); 
			  $("#tanker").append(tanker_opt);
	     }
	     $("#classF").css('visibility', 'visible'); $("#marine").css('visibility', 'visible');
	     $("#classF").html("包装"); $("#marine").html("");
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
	if(selectValue=="FF"){
		console.log("风扇  分类 系列 型号 控制电压 尺寸 版本 包装" );
		var pclass = "FF"; 
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
	     $("#classE").html("尺寸"); $("#tanker").html("");
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
	if(selectValue=="FG"){
		console.log("互感器  分类 系列 型号 一次输入 二次输入 版本 包装" );
		 var pclass = "FG"; 
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
     
		$("#classD").html("一次输入"); $("#vessel").html("");
		for(var i=0 ;i<dataArr[3].length;i++){
			 var vessel_opt = document.createElement("option"); 
			   vessel_opt.text =dataArr[3][i].Parts_Desc;
			   vessel_opt.id="vessel";
			   vessel_opt.name="vessel";
			   vessel_opt.value ="D"+(i+1); 
			   $("#vessel").append(vessel_opt);
		}
	     $("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
	     $("#classE").html("二次输入"); $("#tanker").html("");
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
}