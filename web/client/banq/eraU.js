 function ChangeU(selectValue) {
	 
         
       
	   if(selectValue=="U1"){
		  console.log("厂家" );
		  $("#classA").html("分类"); $("#boat").html("");
 		 for(var i=0 ;i<8;i++){
 			    var youoption = document.createElement("option"); 
			    youoption.text = "包装箱"+(i+1);
			    youoption.id="boat";
			    youoption.name="boat";
			    youoption.value ="D"+(i+1); 
			    $("#boat").append(youoption);
		 }
 		
 		 $("#classB").html("控制器系列");  $("#yacht").html("");
 		 for(var i=0 ;i<3;i++){
 			  var yaption = document.createElement("option"); 
 			    yaption.text = "控制器系列"+(i+1);
 			    yaption.id="yacht";
 			    yaption.name="yacht";
 			    yaption.value ="B"+(i+1); 
 			    $("#yacht").append(yaption);
 		 }
 		     
 		 $("#classC").html("控制器型号"); $("#sail").html("");
 		 for(var i=0 ;i<12;i++){
 			  var sail_opt = document.createElement("option"); 
 			    sail_opt.text = "型号"+(i+1);
 			    sail_opt.id="sail";
 			    sail_opt.name="sail";
 			    sail_opt.value ="C"+(i+1); 
 			    $("#sail").append(sail_opt);
 		 }
 		 
 		 $("#classD").html("人机界面系列"); $("#vessel").html("");
 		 for(var i=0 ;i<6;i++){
 			  var vessel_opt = document.createElement("option"); 
 			    vessel_opt.text = "人机界"+(i+1);
 			    vessel_opt.id="vessel";
 			    vessel_opt.name="vessel";
 			    vessel_opt.value ="D"+(i+1); 
 			    $("#vessel").append(vessel_opt);
 		 }
 		  
 		 $("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
 		$("#classE").html("人机界面型号"); $("#tanker").html("");
		 for(var i=0 ;i<3;i++){
			  var tanker_opt = document.createElement("option"); 
			    tanker_opt.text = "ARM"+(i+1);
			    tanker_opt.id="tanker";
			    tanker_opt.name="tanker";
			    tanker_opt.value ="E"+(i+1); 
			    $("#tanker").append(tanker_opt);
		 }
		
 		 $("#classF").css('visibility', 'visible'); $("#marine").css('visibility', 'visible');
  		$("#classF").html("电源器配置"); $("#marine").html("");
 		 for(var i=0 ;i<3;i++){
 			  var marine_opt = document.createElement("option"); 
 			    marine_opt.text = "ARM"+(i+1);
 			    marine_opt.id="marine";
 			    marine_opt.name="marine";
 			    marine_opt.value ="F"+(i+1); 
 			    $("#marine").append(marine_opt);
 		 }
 		  
 		 $("#classG").css('visibility', 'visible'); $("#rocket").css('visibility', 'visible');
   		$("#classG").html("线型"); $("#rocket").html("");
  		 for(var i=0 ;i<3;i++){
  			  var rocket_opt = document.createElement("option"); 
  			    rocket_opt.text = "ARM"+(i+1);
  			    rocket_opt.id="rocket";
  			    rocket_opt.name="rocket";
  			    rocket_opt.value ="G"+(i+1); 
  			    $("#rocket").append(rocket_opt);
  		 } 
  		 $("#classH").css('visibility', 'visible'); $("#zebra").css('visibility', 'visible');
    	 $("#classH").html("线长"); $("#zebra").html("");
   		 for(var i=0 ;i<3;i++){
   			  var zebra_opt = document.createElement("option"); 
   			    zebra_opt.text = "ARM"+(i+1); 
   			    zebra_opt.id="zebra";
   			    zebra_opt.name="zebra";
   			    zebra_opt.value ="H"+(i+1); 
   			    $("#zebra").append(zebra_opt);
   		 } 
   		 $("#classI").css('visibility', 'visible'); $("#eleph").css('visibility', 'visible');
    	 $("#classI").html("配件"); $("#eleph").html("");
   		 for(var i=0 ;i<3;i++){
   			  var eleph_opt = document.createElement("option"); 
   			    eleph_opt.text = "LEN"+(i+1); 
   			    eleph_opt.id="eleph";
   			    eleph_opt.name="eleph";
   			    eleph_opt.value ="I"+(i+1); 
   			    $("#eleph").append(eleph_opt);
   		 } 
   		 $("#classJ").css('visibility', 'visible'); $("#eagle").css('visibility', 'visible');
    	 $("#classJ").html("定制"); $("#eagle").html("");
   		 for(var i=0 ;i<3;i++){
   			  var eagle_opt = document.createElement("option"); 
   			    eagle_opt.text = "PAC"+(i+1); 
   			    eagle_opt.id="eagle";
   			    eagle_opt.name="eagle";
   			    eagle_opt.value ="J"+(i+1); 
   			    $("#eagle").append(eagle_opt);
   		 }
   		 $("#classK").css('visibility', 'visible'); $("#tiger").css('visibility', 'visible');
    	 $("#classK").html("版本"); $("#tiger").html("");
   		 for(var i=0 ;i<3;i++){
   			  var tiger_opt = document.createElement("option"); 
   			    tiger_opt.text = "STD"+(i+1); 
   			    tiger_opt.id="tiger";
   			    tiger_opt.name="tiger";
   			    tiger_opt.value ="K"+(i+1); 
   			    $("#tiger").append(tiger_opt);
   		 }
   		 $("#classL").css('visibility', 'visible'); $("#lion").css('visibility', 'visible');
    	 $("#classL").html("扩展"); $("#lion").html("");
   		 for(var i=0 ;i<3;i++){
   			  var lion_opt = document.createElement("option"); 
   			    lion_opt.text = "VER"+(i+1); 
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
	
	 }
function GoldU(selectValue) {
       
		if(selectValue=="U1"){
			  console.log("厂家" );
			    var pclass = "U1"; 
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
			 
			  $("#classB").html("控制器系列");  $("#yacht").html("");
			  for(var i=0 ;i<dataArr[1].length;i++){
				   var yaption = document.createElement("option"); 
				     yaption.text = dataArr[1][i].Parts_Desc;
				     yaption.id="yacht";
				     yaption.name="yacht";
				     yaption.value ="B"+(i+1); 
				     $("#yacht").append(yaption);
			  }
				
			  $("#classC").html("控制器型号"); $("#sail").html("");
			  for(var i=0 ;i<dataArr[2].length;i++){
				   var sail_opt = document.createElement("option"); 
				     sail_opt.text = dataArr[2][i].Parts_Desc;
				     sail_opt.id="sail";
				     sail_opt.name="sail";
				     sail_opt.value ="C"+(i+1); 
				     $("#sail").append(sail_opt);
			  }
			  
			  $("#classD").html("人机界面系列"); $("#vessel").html("");
			  for(var i=0 ;i<dataArr[3].length;i++){
				   var vessel_opt = document.createElement("option"); 
				     vessel_opt.text = dataArr[3][i].Parts_Desc;
				     vessel_opt.id="vessel";
				     vessel_opt.name="vessel";
				     vessel_opt.value ="D"+(i+1); 
				     $("#vessel").append(vessel_opt);
			  }
			   
			  $("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
			 $("#classE").html("人机界面型号"); $("#tanker").html("");
			 for(var i=0 ;i<dataArr[4].length;i++){
				  var tanker_opt = document.createElement("option"); 
				    tanker_opt.text = dataArr[4][i].Parts_Desc;
				    tanker_opt.id="tanker";
				    tanker_opt.name="tanker";
				    tanker_opt.value ="E"+(i+1); 
				    $("#tanker").append(tanker_opt);
			 }
			
			  $("#classF").css('visibility', 'visible'); $("#marine").css('visibility', 'visible');
			  $("#classF").html("电源器配置"); $("#marine").html("");
			  for(var i=0 ;i<dataArr[5].length;i++){
				   var marine_opt = document.createElement("option"); 
				     marine_opt.text = dataArr[5][i].Parts_Desc;
				     marine_opt.id="marine";
				     marine_opt.name="marine";
				     marine_opt.value ="F"+(i+1); 
				     $("#marine").append(marine_opt);
			  }
			   
			  $("#classG").css('visibility', 'visible'); $("#rocket").css('visibility', 'visible');
			   $("#classG").html("线型"); $("#rocket").html("");
			   for(var i=0 ;i<dataArr[6].length;i++){
				    var rocket_opt = document.createElement("option"); 
					rocket_opt.text = dataArr[6][i].Parts_Desc;
					rocket_opt.id="rocket";
					rocket_opt.name="rocket";
					rocket_opt.value ="G"+(i+1); 
					$("#rocket").append(rocket_opt);
			   } 
			   $("#classH").css('visibility', 'visible'); $("#zebra").css('visibility', 'visible');
		     $("#classH").html("线长"); $("#zebra").html("");
			    for(var i=0 ;i<dataArr[7].length;i++){
				     var zebra_opt = document.createElement("option"); 
					 zebra_opt.text = dataArr[7][i].Parts_Desc;
					 zebra_opt.id="zebra";
					 zebra_opt.name="zebra";
					 zebra_opt.value ="H"+(i+1); 
					 $("#zebra").append(zebra_opt);
			    } 
			    $("#classI").css('visibility', 'visible'); $("#eleph").css('visibility', 'visible');
		     $("#classI").html("配件"); $("#eleph").html("");
			    for(var i=0 ;i<dataArr[8].length;i++){
				     var eleph_opt = document.createElement("option"); 
					 eleph_opt.text = dataArr[8][i].Parts_Desc;
					 eleph_opt.id="eleph";
					 eleph_opt.name="eleph";
					 eleph_opt.value ="I"+(i+1); 
					 $("#eleph").append(eleph_opt);
			    } 
			    $("#classJ").css('visibility', 'visible'); $("#eagle").css('visibility', 'visible');
		     $("#classJ").html("定制"); $("#eagle").html("");
			    for(var i=0 ;i<dataArr[9].length;i++){
				     var eagle_opt = document.createElement("option"); 
					 eagle_opt.text = dataArr[9][i].Parts_Desc; 
					 eagle_opt.id="eagle";
					 eagle_opt.name="eagle";
					 eagle_opt.value ="J"+(i+1); 
					 $("#eagle").append(eagle_opt);
			    }
			    $("#classK").css('visibility', 'visible'); $("#tiger").css('visibility', 'visible');
		     $("#classK").html("版本"); $("#tiger").html("");
			    for(var i=0 ;i<dataArr[10].length;i++){
				     var tiger_opt = document.createElement("option"); 
					 tiger_opt.text = dataArr[10][i].Parts_Desc;
					 tiger_opt.id="tiger";
					 tiger_opt.name="tiger";
					 tiger_opt.value ="K"+(i+1); 
					 $("#tiger").append(tiger_opt);
			    }
			    $("#classL").css('visibility', 'visible'); $("#lion").css('visibility', 'visible');
		     $("#classL").html("扩展"); $("#lion").html("");
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
		
}