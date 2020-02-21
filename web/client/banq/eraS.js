 function ChangeS(selectValue) {
	 
      
       
	   if(selectValue=="S1"){
		  console.log("分类" );
		  $("#classA").html("分类"); $("#boat").html("");
 		 for(var i=0 ;i<8;i++){
 			    var youoption = document.createElement("option"); 
			    youoption.text = "分类"+(i+1);
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
 	    
 		 $("#classD").html("厂商"); $("#vessel").html("");
 		 for(var i=0 ;i<6;i++){
 			  var vessel_opt = document.createElement("option"); 
 			    vessel_opt.text = "厂商"+(i+1);
 			    vessel_opt.id="vessel";
 			    vessel_opt.name="vessel";
 			    vessel_opt.value ="D"+(i+1); 
 			    $("#vessel").append(vessel_opt);
 		 }
  
	 		$("#classE").html(""); $("#tanker").html("");
	 		$("#classF").html(""); $("#marine").html("");
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
	 		
	 		$("#classE").css('visibility', 'hidden'); $("#tanker").css('visibility', 'hidden');
	 		$("#classF").css('visibility', 'hidden'); $("#marine").css('visibility', 'hidden');
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
function GoldS(selectValue) {
       
		if(selectValue=="S1"){
		     console.log("分类" );
			var pclass = "S1"; 
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
		  
		     $("#classD").html("厂商"); $("#vessel").html("");
		     for(var i=0 ;i<dataArr[3].length;i++){
				var vessel_opt = document.createElement("option"); 
				  vessel_opt.text =  dataArr[3][i].Parts_Desc;
				  vessel_opt.id="vessel";
				  vessel_opt.name="vessel";
				  vessel_opt.value ="D"+(i+1); 
				  $("#vessel").append(vessel_opt);
		     }
			
	    
		   },
		  error:function(){ 
		  }
	    })	
			    $("#classE").html(""); $("#tanker").html("");
			    $("#classF").html(""); $("#marine").html("");
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
			    
			    $("#classE").css('visibility', 'hidden'); $("#tanker").css('visibility', 'hidden');
			    $("#classF").css('visibility', 'hidden'); $("#marine").css('visibility', 'hidden');
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