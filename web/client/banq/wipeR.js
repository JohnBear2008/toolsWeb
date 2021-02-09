function GoldR(selectValue, obj) {
 
	if (selectValue == "R1") {
		console.log("电控产品配套程式 分类~~归属~~平台信息~~配置信息");
		var pclass = "R1";  getSMT(pclass, obj); showEFForm(); 
		let dataArr = [];
		var reportType = 'goldRec';
		var taskData = { "reportType": reportType, "pclass": pclass };
		$.ajax({
			method: 'post',
			data: taskData,
			url: "/app/TMCode/getRoute",
			success: function (data) {
				dataArr = data;
				//  console.log("百里",  (dataArr.length),"上官", JSON.stringify(dataArr)  );
				//  console.log("西施",obj.Soft_No);
				$("#classSMT").html(dataArr[20][0].Parts_Desc); $("#classSMT").val(dataArr[20][0].Parts_Desc);
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

				$("#classB").html("归属"); $("#classB").val("归属"); $("#yacht").html("");
				for (var i = 0; i < dataArr[1].length; i++) {
					var youoption = document.createElement("option");
					youoption.text = dataArr[1][i].Parts_Desc;
					youoption.id = "yacht";
					youoption.name = "yacht";
					youoption.value = dataArr[1][i].Parts_Desc;
					if (youoption.text == obj.Value1) { youoption.selected = "selected";}
					$("#yacht").append(youoption);
				}
				$("#classC").css('visibility', 'visible'); $("#sail").css('visibility', 'visible');
				$("#classC").html("平台信息"); $("#classC").val("平台信息"); $("#sail").html("");
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
				$("#classD").html("配置信息"); $("#classD").val("配置信息"); $("#vessel").html("");
				for (var i = 0; i < dataArr[3].length; i++) {
					var youoption = document.createElement("option");
					youoption.text = dataArr[3][i].Parts_Desc;
					youoption.id = "vessel";
					youoption.name = "vessel";
					youoption.value = dataArr[3][i].Parts_Desc;
					if (youoption.text == obj.Value3) { youoption.selected = "selected"; }
					$("#vessel").append(youoption);
				}
				$("#tankerName").css('visibility', 'visible');$("#tankerName").addClass("can-drop");
				$("#classE").css('visibility', 'visible'); $("#classE").html("软件日期");  
			},
			error: function () {
			}
		})
		$("#tanker").css('visibility', 'hidden');
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
		$("#classS").html(""); $("#fox").html("");
		$("#classT").html(""); $("#owl").html("");
		$("#classU").html(""); $("#deer").html("");
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
		$("#classS").css('visibility', 'hidden'); $("#fox").css('visibility', 'hidden');
		$("#classT").css('visibility', 'hidden'); $("#owl").css('visibility', 'hidden');
		$("#classU").css('visibility', 'hidden'); $("#deer").css('visibility', 'hidden');
	}
	if (selectValue == "R2") {
		console.log("伺服产品配套程式");
		var pclass = "R2"; getSMT(pclass, obj); showEFForm(); 
		let dataArr = [];
		var reportType = 'goldRec';
		var taskData = { "reportType": reportType, "pclass": pclass };
		$.ajax({
			method: 'post',
			data: taskData,
			url: "/app/TMCode/getRoute",
			success: function (data) {
				dataArr = data;
				$("#classSMT").html(dataArr[20][0].Parts_Desc); $("#classSMT").val(dataArr[20][0].Parts_Desc);
				// console.log("百里",  (dataArr.length),"上官", JSON.stringify(dataArr)  );
				 $("#classA").html("分类");  $("#classA").val("分类"); $("#boat").html("");
				for (var i = 0; i < dataArr[0].length; i++) {
					var youoption = document.createElement("option");
					youoption.text = dataArr[0][i].Parts_Desc;
					youoption.id = "boat";
					youoption.name = "boat";
					youoption.value = dataArr[0][i].Parts_Desc;
					if (youoption.text == obj.Value0) { youoption.selected = "selected"; }
					$("#boat").append(youoption);
				}

				$("#classB").html("归属"); $("#classB").val("归属"); $("#yacht").html("");
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
				$("#classC").html("平台信息");$("#classC").val("平台信息"); $("#sail").html("");
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
				$("#classD").html("配置信息");$("#classD").val("配置信息"); $("#vessel").html("");
				for (var i = 0; i < dataArr[3].length; i++) {
					var youoption = document.createElement("option");
					youoption.text = dataArr[3][i].Parts_Desc;
					youoption.id = "vessel";
					youoption.name = "vessel";
					youoption.value = dataArr[3][i].Parts_Desc;
					if (youoption.text == obj.Value3) { youoption.selected = "selected"; }
					$("#vessel").append(youoption);
				}
				$("#tankerName").css('visibility', 'visible');$("#tankerName").addClass("can-drop");
				$("#classE").css('visibility', 'visible'); $("#classE").html("软件日期");  
			},
			error: function () {
			}
		})
		$("#tanker").css('visibility', 'hidden'); 
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
		$("#classS").html(""); $("#fox").html("");
		$("#classT").html(""); $("#owl").html("");
		$("#classU").html(""); $("#deer").html("");
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
		$("#classS").css('visibility', 'hidden'); $("#fox").css('visibility', 'hidden');
		$("#classT").css('visibility', 'hidden'); $("#owl").css('visibility', 'hidden');
		$("#classU").css('visibility', 'hidden'); $("#deer").css('visibility', 'hidden');

	}
	if (selectValue == "R3") {
		console.log("新能源产品配套程式");
		var pclass = "R3";  getSMT(pclass); showEFForm(); 
		let dataArr = [];
		var reportType = 'goldRec';
		var taskData = { "reportType": reportType, "pclass": pclass };
		$.ajax({
			method: 'post',
			data: taskData,
			url: "/app/TMCode/getRoute",
			success: function (data) {
				dataArr = data;
				$("#classSMT").html(dataArr[20][0].Parts_Desc); $("#classSMT").val(dataArr[20][0].Parts_Desc);
				// console.log("百里",  (dataArr.length),"上官", JSON.stringify(dataArr)  );
				 $("#classA").html("分类");  $("#classA").val("分类"); $("#boat").html("");
				for (var i = 0; i < dataArr[0].length; i++) {
					var youoption = document.createElement("option");
					youoption.text = dataArr[0][i].Parts_Desc;
					youoption.id = "boat";
					youoption.name = "boat";
					youoption.value = dataArr[0][i].Parts_Desc;
					if (youoption.text == obj.Value0) { youoption.selected = "selected"; }
					$("#boat").append(youoption);
				}

				$("#classB").html("归属"); $("#classB").val("归属"); $("#yacht").html("");
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
				$("#classC").html("平台信息");$("#classC").val("平台信息"); $("#sail").html("");
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
				$("#classD").html("配置信息");$("#classD").val("配置信息"); $("#vessel").html("");
				for (var i = 0; i < dataArr[3].length; i++) {
					var youoption = document.createElement("option");
					youoption.text = dataArr[3][i].Parts_Desc;
					youoption.id = "vessel";
					youoption.name = "vessel";
					youoption.value = dataArr[3][i].Parts_Desc;
					if (youoption.text == obj.Value3) { youoption.selected = "selected"; }
					$("#vessel").append(youoption);
				}
				$("#tankerName").css('visibility', 'visible');$("#tankerName").addClass("can-drop");
				$("#classE").css('visibility', 'visible'); $("#classE").html("软件日期");  
			},
			error: function () {
			}
		})
		$("#tanker").css('visibility', 'hidden');
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
		$("#classS").html(""); $("#fox").html("");
		$("#classT").html(""); $("#owl").html("");
		$("#classU").html(""); $("#deer").html("");
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
		$("#classS").css('visibility', 'hidden'); $("#fox").css('visibility', 'hidden');
		$("#classT").css('visibility', 'hidden'); $("#owl").css('visibility', 'hidden');
		$("#classU").css('visibility', 'hidden'); $("#deer").css('visibility', 'hidden');

	}
}
function stringtrim (str) {
	if (str.trim) return str.trim()
	return str.replace(/^\s+|\s+$/g, '')
    }