 
function loadA() {
	 $("#classA").html("分类"); $("#classA").val("分类"); $("#boat").html("");
	      var pclass = "A1";
		let dataArr = [];
		var reportType = 'craftOption';
		var taskData = { "reportType": reportType, "pclass": pclass };
		$.ajax({
			method: 'post',
			data: taskData,
			url: "/app/TMAdvance/getRoute",
			success: function (data) {
				dataArr = data; 
				  $("#classA").html("分类"); $("#classA").val("分类"); $("#boat").html("");
				for (var i = 0; i < dataArr.length; i++) {
					var youoption = document.createElement("option");
					youoption.text = dataArr[i].Supp_Name;
					youoption.id="boat";
					youoption.name="boat";
					youoption.value =dataArr[i].Supp_CID;
					if (youoption.text == '') { youoption.selected = "selected"; }
					$("#boat").append(youoption);
				}
			},
			error: function () {
			}
		})
} 

function gankA(obj) {
	$("#classA").html("分类"); $("#classA").val("分类"); $("#boat").html("");
	     console.log("控制器");
	     var pclass = "A1";
	     let dataArr = [];
	     var reportType = 'goldRec';
	     var taskData = { "reportType": reportType, "pclass": pclass };
	     $.ajax({
		     method: 'post',
		     data: taskData,
		     url: "/app/TMCode/getRoute",
		     success: function (data) {
			     dataArr = data;
			     // console.log("上官", JSON.stringify(dataArr) );
			     // 分类~~型号~~机型~~外观款型~~客制~~配件~~包装
			     console.log("沈默是金", dataArr[20][0].Parts_Desc );
			     $("#classSMT").html(  dataArr[20][0].Parts_Desc );  $("#classSMT").val(dataArr[20][0].Parts_Desc); 
			     $("#classA").html("分类"); $("#classA").val("分类"); $("#boat").html("");
			     for (var i = 0; i < dataArr[0].length; i++) {
				     var youoption = document.createElement("option");
				     youoption.text = dataArr[0][i].Parts_Desc;
				     youoption.id = "boat";
				     youoption.name = "boat";
				     youoption.value = dataArr[0][i].Parts_Desc;
				     if (youoption.text == obj.Value0) { youoption.selected = "selected"; }
				     $("#boat").append(youoption);
			     }
			     $("#classB").html("型号"); $("#classB").val("型号"); $("#yacht").html("");
			     for (var i = 0; i < dataArr[1].length; i++) {
				     var youoption = document.createElement("option");
				     youoption.text = dataArr[1][i].Parts_Desc;
				     youoption.id = "yacht";
				     youoption.name = "yacht";
				     youoption.value = dataArr[1][i].Parts_Desc;
				     if (youoption.text == obj.Value1) { youoption.selected = "selected"; }
				     $("#yacht").append(youoption);
			     }
			     $("#classC").css('visibility', 'visible'); $("#sail").css('visibility', 'visible');
			     $("#classC").html("机型"); $("#classC").val("机型"); $("#sail").html("");
			     for (var i = 0; i < dataArr[2].length; i++) {
				     var youoption = document.createElement("option");
				     youoption.text = dataArr[2][i].Parts_Desc;
				     youoption.id = "sail";
				     youoption.name = "sail";
				     youoption.value = dataArr[2][i].Parts_Desc;
				     if (youoption.text == obj.Value2) { youoption.selected = "selected"; }
				     $("#sail").append(youoption);
			     }
			     $("#classD").css('visibility', 'visible'); $("#vessel").css('visibility', 'visible');
			     $("#classD").html("外观款型"); $("#classD").val("外观款型"); $("#vessel").html("");
			     for (var i = 0; i < dataArr[3].length; i++) {
				     var youoption = document.createElement("option");
				     youoption.text = dataArr[3][i].Parts_Desc;
				     youoption.id = "vessel";
				     youoption.name = "vessel";
				     youoption.value = dataArr[3][i].Parts_Desc;
				     if (youoption.text == obj.Value3) { youoption.selected = "selected"; }
				     $("#vessel").append(youoption);
			     }
			     $("#classE").css('visibility', 'visible'); $("tanker").css('visibility', 'visible');
			     $("#classE").html("客制"); $("#classE").val("客制"); $("#tanker").html("");
			     for (var i = 0; i < dataArr[4].length; i++) {
				     var youoption = document.createElement("option");
				     youoption.text = dataArr[4][i].Parts_Desc;
				     youoption.id = "tanker";
				     youoption.name = "tanker";
				     youoption.value = dataArr[4][i].Parts_Desc;
				     if (youoption.text == obj.Value4) { youoption.selected = "selected"; }
				     $("#tanker").append(youoption);
			     }
			     $("#classF").css('visibility', 'visible'); $("#marine").css('visibility', 'visible');
			     $("#classF").html("配件"); $("#classF").val("配件"); $("#marine").html("");
			     for (var i = 0; i < dataArr[5].length; i++) {
				     var youoption = document.createElement("option");
				     youoption.text = dataArr[5][i].Parts_Desc;
				     youoption.id = "marine";
				     youoption.name = "marine";
				     youoption.value = dataArr[5][i].Parts_Desc;
				     if (youoption.text == obj.Value5) { youoption.selected = "selected"; }
				     $("#marine").append(youoption);
			     }
			     $("#classG").css('visibility', 'visible'); $("#rocket").css('visibility', 'visible');
			     $("#classG").html("包装");$("#classG").val("包装"); $("#rocket").html("");
			     for (var i = 0; i < dataArr[6].length; i++) {
				     var youoption = document.createElement("option");
				     youoption.text = dataArr[6][i].Parts_Desc;
				     youoption.id = "rocket";
				     youoption.name = "rocket";
				     youoption.value = dataArr[6][i].Parts_Desc;
				     if (youoption.text == obj.Value6) { youoption.selected = "selected"; }
				     $("#rocket").append(youoption);
			     }
		     },
		     error: function () {
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
	     $("#classS").html(""); $("#fox").html("");
	     $("#classT").html(""); $("#owl").html("");
	     $("#classU").html(""); $("#deer").html("");
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
	     $("#classS").css('visibility', 'hidden'); $("#fox").css('visibility', 'hidden');
	     $("#classT").css('visibility', 'hidden'); $("#owl").css('visibility', 'hidden');
	     $("#classU").css('visibility', 'hidden'); $("#deer").css('visibility', 'hidden');
} 