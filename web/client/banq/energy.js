function Silver(selectValue, obj) {
	if (selectValue == "R1" || selectValue == "R2" || selectValue == "R3" || selectValue == "R4") {
	} else {
		LayRForm(); hideEFForm();
	}
	var pclass = selectValue;
	getSMT(pclass, obj); showEFForm(); getSupply();
	let dataArr = [];
	var reportType = 'goldRec';
	var taskData = { "reportType": reportType, "pclass": pclass };
	$.ajax({
		method: 'post',
		data: taskData,
		url: "/app/TMCode/getRoute",
		success: function (data) {
			dataArr = data;
			console.log("重火", JSON.stringify(dataArr));
			if (dataArr[20].length == 0) {
				$("#classSMT").css('visibility', 'hidden');
				// $("#classSMT").html( ""); 
				// $("#classSMT").val(  "");
			} else {
				$("#classSMT").css('visibility', 'visible');
				$("#classSMT").html(dataArr[20][0].FeatLebel);
				$("#classSMT").val(dataArr[20][0].FeatLebel);
				console.log("重火", JSON.stringify(dataArr[20][0].FeatLebel));
			}
			$("#classA").html(""); $("#boat").html("");
			if (dataArr[0].length == 0) {
				$("#classA").css('visibility', 'hidden'); $("#boat").css('visibility', 'hidden');
			} else {
				$("#classA").css('visibility', 'visible'); $("#boat").css('visibility', 'visible');
			}
			for (var i = 0; i < dataArr[0].length; i++) {
				$("#classA").html(dataArr[0][i].FeatLebel); $("#classA").val(dataArr[0][i].FeatLebel);
				var youoption = document.createElement("option");
				youoption.text = dataArr[0][i].Parts_Desc;
				youoption.id = "boat";
				youoption.name = "boat";
				youoption.value = dataArr[0][i].Parts_Desc;
				if (youoption.text == "缺省") { youoption.selected = "selected"; }
				$("#boat").append(youoption);
			}
			$("#classB").html(""); $("#yacht").html("");
			if (dataArr[1].length == 0) {
				$("#classB").css('visibility', 'hidden'); $("#yacht").css('visibility', 'hidden');
			} else {
				$("#classB").css('visibility', 'visible'); $("#yacht").css('visibility', 'visible');
			}
			for (var i = 0; i < dataArr[1].length; i++) {
				$("#classB").html(dataArr[1][i].FeatLebel); $("#classB").val(dataArr[1][i].FeatLebel);
				var youoption = document.createElement("option");
				youoption.text = dataArr[1][i].Parts_Desc;
				youoption.id = "yacht";
				youoption.name = "yacht";
				youoption.value = dataArr[1][i].Parts_Desc;
				if (youoption.text == "缺省") { youoption.selected = "selected"; }
				$("#yacht").append(youoption);
			}
			$("#classC").html(""); $("#sail").html("");
			if (dataArr[2].length == 0) {
				$("#classC").css('visibility', 'hidden'); $("#sail").css('visibility', 'hidden');
			} else {
				$("#classC").css('visibility', 'visible'); $("#sail").css('visibility', 'visible');
			}
			for (var i = 0; i < dataArr[2].length; i++) {
				$("#classC").html(dataArr[2][i].FeatLebel); $("#classC").val(dataArr[2][i].FeatLebel);
				var youoption = document.createElement("option");
				youoption.text = dataArr[2][i].Parts_Desc;
				youoption.id = "sail";
				youoption.name = "sail";
				youoption.value = dataArr[2][i].Parts_Desc;
				if (youoption.text == "缺省") { youoption.selected = "selected"; }
				$("#sail").append(youoption);
			}
			$("#classD").html(""); $("#vessel").html("");
			if (dataArr[3].length == 0) {
				$("#classD").css('visibility', 'hidden'); $("#vessel").css('visibility', 'hidden');
			} else {
				$("#classD").css('visibility', 'visible'); $("#vessel").css('visibility', 'visible');
			}
			for (var i = 0; i < dataArr[3].length; i++) {
				$("#classD").html(dataArr[3][i].FeatLebel); $("#classD").val(dataArr[3][i].FeatLebel);
				var youoption = document.createElement("option");
				youoption.text = dataArr[3][i].Parts_Desc;
				youoption.id = "vessel";
				youoption.name = "vessel";
				youoption.value = dataArr[3][i].Parts_Desc;
				if (youoption.text == "缺省") { youoption.selected = "selected"; }
				$("#vessel").append(youoption);
			}
			$("#classE").html(""); $("#tanker").html("");
			if (dataArr[4].length == 0) {
				$("#classE").css('visibility', 'hidden'); $("#tanker").css('visibility', 'hidden');
			} else {
				$("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
			}
			for (var i = 0; i < dataArr[4].length; i++) {
				$("#classE").html(dataArr[4][i].FeatLebel); $("#classE").val(dataArr[4][i].FeatLebel);
				var youoption = document.createElement("option");
				youoption.text = dataArr[4][i].Parts_Desc;
				youoption.id = "tanker";
				youoption.name = "tanker";
				youoption.value = dataArr[4][i].Parts_Desc;
				if (youoption.text == "缺省") { youoption.selected = "selected"; }
				$("#tanker").append(youoption);
			}
			$("#classF").html(""); $("#marine").html("");
			if (dataArr[5].length == 0) {
				$("#classF").css('visibility', 'hidden'); $("#marine").css('visibility', 'hidden');
			} else {
				$("#classF").css('visibility', 'visible'); $("#marine").css('visibility', 'visible');
			}
			for (var i = 0; i < dataArr[5].length; i++) {
				$("#classF").html(dataArr[5][i].FeatLebel); $("#classF").val(dataArr[5][i].FeatLebel);
				var youoption = document.createElement("option");
				youoption.text = dataArr[5][i].Parts_Desc;
				youoption.id = "marine";
				youoption.name = "marine";
				youoption.value = dataArr[5][i].Parts_Desc;
				if (youoption.text == "缺省") { youoption.selected = "selected"; }
				$("#marine").append(youoption);
			}
			$("#classH").html(""); $("#rocket").html("");
			if (dataArr[6].length == 0) {
				$("#classG").css('visibility', 'hidden'); $("#rocket").css('visibility', 'hidden');
			} else {
				$("#classG").css('visibility', 'visible'); $("#rocket").css('visibility', 'visible');
			}
			for (var i = 0; i < dataArr[6].length; i++) {
				$("#classG").html(dataArr[6][i].FeatLebel); $("#classG").val(dataArr[6][i].FeatLebel);
				var youoption = document.createElement("option");
				youoption.text = dataArr[6][i].Parts_Desc;
				youoption.id = "rocket";
				youoption.name = "rocket";
				youoption.value = dataArr[6][i].Parts_Desc;
				if (youoption.text == "缺省") { youoption.selected = "selected"; }
				$("#rocket").append(youoption);
			}
			$("#classH").html(""); $("#zebra").html("");
			if (dataArr[7].length == 0) {
				$("#classH").css('visibility', 'hidden'); $("#zebra").css('visibility', 'hidden');
			} else {
				$("#classH").css('visibility', 'visible'); $("#zebra").css('visibility', 'visible');
			}
			for (var i = 0; i < dataArr[7].length; i++) {
				$("#classH").html(dataArr[7][i].FeatLebel); $("#classH").val(dataArr[7][i].FeatLebel);
				var youoption = document.createElement("option");
				youoption.text = dataArr[7][i].Parts_Desc;
				youoption.id = "zebra";
				youoption.name = "zebra";
				youoption.value = dataArr[7][i].Parts_Desc;
				if (youoption.text == "缺省") { youoption.selected = "selected"; }
				$("#zebra").append(youoption);
			}
			if (dataArr[8].length == 0) {
				$("#classI").html(""); $("#eleph").html("");
				$("#classI").css('visibility', 'hidden'); $("#eleph").css('visibility', 'hidden');
			} else {
				$("#classI").css('visibility', 'visible'); $("#eleph").css('visibility', 'visible');
				$("#eleph").html("");
			}
			for (var i = 0; i < dataArr[8].length; i++) {
				$("#classI").html(dataArr[8][i].FeatLebel); $("#classI").val(dataArr[8][i].FeatLebel);
				var youoption = document.createElement("option");
				youoption.text = dataArr[8][i].Parts_Desc;
				youoption.id = "eleph";
				youoption.name = "eleph";
				youoption.value = dataArr[8][i].Parts_Desc;
				if (youoption.text == "缺省") { youoption.selected = "selected"; }
				$("#eleph").append(youoption);
			}
			if (dataArr[9].length == 0) {
				$("#classJ").html(""); $("#eagle").html("");
				$("#classJ").css('visibility', 'hidden'); $("#eagle").css('visibility', 'hidden');
			} else {
				$("#classJ").css('visibility', 'visible'); $("#eagle").css('visibility', 'visible');
				$("#eagle").html("");
			}
			for (var i = 0; i < dataArr[9].length; i++) {
				$("#classJ").html(dataArr[9][i].FeatLebel); $("#classJ").val(dataArr[9][i].FeatLebel);
				var youoption = document.createElement("option");
				youoption.text = dataArr[9][i].Parts_Desc;
				youoption.id = "eagle";
				youoption.name = "eagle";
				youoption.value = dataArr[9][i].Parts_Desc;
				if (youoption.text == "缺省") { youoption.selected = "selected"; }
				$("#eagle").append(youoption);
			}
			if (dataArr[10].length == 0) {
				$("#classK").html(""); $("#tiger").html("");
				$("#classK").css('visibility', 'hidden'); $("#tiger").css('visibility', 'hidden');
			} else {
				$("#classK").css('visibility', 'visible'); $("#tiger").css('visibility', 'visible');
				$("#tiger").html("");
			}
			for (var i = 0; i < dataArr[10].length; i++) {
				$("#classK").html(dataArr[10][i].FeatLebel); $("#classK").val(dataArr[10][i].FeatLebel);
				var youoption = document.createElement("option");
				youoption.text = dataArr[10][i].Parts_Desc;
				youoption.id = "tiger";
				youoption.name = "tiger";
				youoption.value = dataArr[10][i].Parts_Desc;
				if (youoption.text == "缺省") { youoption.selected = "selected"; }
				$("#tiger").append(youoption);
			}
			if (dataArr[11].length == 0) {
				$("#classL").html(""); $("#lion").html("");
				$("#classL").css('visibility', 'hidden'); $("#lion").css('visibility', 'hidden');
			} else {
				$("#classL").css('visibility', 'visible'); $("#lion").css('visibility', 'visible');
				$("#lion").html("");
			}
			for (var i = 0; i < dataArr[11].length; i++) {
				$("#classL").html(dataArr[11][i].FeatLebel); $("#classL").val(dataArr[11][i].FeatLebel);
				var youoption = document.createElement("option");
				youoption.text = dataArr[11][i].Parts_Desc;
				youoption.id = "lion";
				youoption.name = "lion";
				youoption.value = dataArr[11][i].Parts_Desc;
				if (youoption.text == "缺省") { youoption.selected = "selected"; }
				$("#lion").append(youoption);
			}
			if (dataArr[12].length == 0) {
				$("#classM").html(""); $("#horse").html("");
				$("#classM").css('visibility', 'hidden'); $("#horse").css('visibility', 'hidden');
			} else {
				$("#classM").css('visibility', 'visible'); $("#horse").css('visibility', 'visible');
				$("#horse").html("");
			}
			for (var i = 0; i < dataArr[12].length; i++) {
				$("#classM").html(dataArr[12][i].FeatLebel); $("#classM").val(dataArr[12][i].FeatLebel);
				var youoption = document.createElement("option");
				youoption.text = dataArr[12][i].Parts_Desc;
				youoption.id = "horse";
				youoption.name = "horse";
				youoption.value = dataArr[12][i].Parts_Desc;
				if (youoption.text == "缺省") { youoption.selected = "selected"; }
				$("#horse").append(youoption);
			}
			if (dataArr[13].length == 0) {
				$("#classO").html(""); $("#worm").html("");
				$("#classO").css('visibility', 'hidden'); $("#worm").css('visibility', 'hidden');
			} else {
				$("#classO").css('visibility', 'visible'); $("#worm").css('visibility', 'visible');
				$("#worm").html("");
			}
			for (var i = 0; i < dataArr[13].length; i++) {
				$("#classO").html(dataArr[13][i].FeatLebel); $("#classO").val(dataArr[13][i].FeatLebel);
				var youoption = document.createElement("option");
				youoption.text = dataArr[13][i].Parts_Desc;
				youoption.id = "worm";
				youoption.name = "worm";
				youoption.value = dataArr[13][i].Parts_Desc;
				if (youoption.text == "缺省") { youoption.selected = "selected"; }
				$("#worm").append(youoption);
			}
			if (dataArr[14].length == 0) {
				$("#classP").html(""); $("#hole").html("");
				$("#classP").css('visibility', 'hidden'); $("#hole").css('visibility', 'hidden');
			} else {
				$("#classP").css('visibility', 'visible'); $("#hole").css('visibility', 'visible');
				$("#hole").html("");
			}
			for (var i = 0; i < dataArr[14].length; i++) {
				$("#classP").html(dataArr[14][i].FeatLebel); $("#classP").val(dataArr[14][i].FeatLebel);
				var youoption = document.createElement("option");
				youoption.text = dataArr[14][i].Parts_Desc;
				youoption.id = "hole";
				youoption.name = "hole";
				youoption.value = dataArr[14][i].Parts_Desc;
				if (youoption.text == "缺省") { youoption.selected = "selected"; }
				$("#hole").append(youoption);
			}
			if (dataArr[15].length == 0) {
				$("#classQ").html(""); $("#xman").html("");
				$("#classQ").css('visibility', 'hidden'); $("#xman").css('visibility', 'hidden');
			} else {
				$("#classQ").html(""); $("#xman").html("");
				$("#classQ").css('visibility', 'visible'); $("#xman").css('visibility', 'visible');
			}
			for (var i = 0; i < dataArr[15].length; i++) {
				$("#classQ").html(dataArr[15][i].FeatLebel); $("#classQ").val(dataArr[15][i].FeatLebel);
				var youoption = document.createElement("option");
				youoption.text = dataArr[15][i].Parts_Desc;
				youoption.id = "xman";
				youoption.name = "xman";
				youoption.value = dataArr[15][i].Parts_Desc;
				if (youoption.text == "缺省") { youoption.selected = "selected"; }
				$("#xman").append(youoption);
			}
			if (dataArr[16].length == 0) {
				$("#classR").html(""); $("#quita").html("");
				$("#classR").css('visibility', 'hidden'); $("#quita").css('visibility', 'hidden');
			} else {
				$("#classR").html(""); $("#quita").html("");
				$("#classR").css('visibility', 'visible'); $("#quita").css('visibility', 'visible');
			}
			for (var i = 0; i < dataArr[16].length; i++) {
				$("#classR").html(dataArr[16][i].FeatLebel); $("#classR").val(dataArr[16][i].FeatLebel);
				var youoption = document.createElement("option");
				youoption.text = dataArr[16][i].Parts_Desc;
				youoption.id = "quita";
				youoption.name = "quita";
				youoption.value = dataArr[16][i].Parts_Desc;
				if (youoption.text == "缺省") { youoption.selected = "selected"; }
				$("#quita").append(youoption);
			}
			if (dataArr[17].length == 0) {
				$("#classS").html(""); $("#fox").html("");
				$("#classS").css('visibility', 'hidden'); $("#fox").css('visibility', 'hidden');
			} else {
				$("#classS").html(""); $("#fox").html("");
				$("#classS").css('visibility', 'visible'); $("#fox").css('visibility', 'visible');
			}
			for (var i = 0; i < dataArr[17].length; i++) {
				$("#classS").html(dataArr[17][i].FeatLebel); $("#classS").val(dataArr[17][i].FeatLebel);
				var youoption = document.createElement("option");
				youoption.text = dataArr[17][i].Parts_Desc;
				youoption.id = "fox";
				youoption.name = "fox";
				youoption.value = dataArr[17][i].Parts_Desc;
				if (youoption.text == "缺省") { youoption.selected = "selected"; }
				$("#fox").append(youoption);
			}
			if (dataArr[18].length == 0) {
				$("#classT").html(""); $("#owl").html("");
				$("#classT").css('visibility', 'hidden'); $("#owl").css('visibility', 'hidden');
			} else {
				$("#classT").html(""); $("#owl").html("");
				$("#classT").css('visibility', 'visible'); $("#owl").css('visibility', 'visible');
			}
			for (var i = 0; i < dataArr[18].length; i++) {
				$("#classT").html(dataArr[18][i].FeatLebel); $("#classT").val(dataArr[18][i].FeatLebel);
				var youoption = document.createElement("option");
				youoption.text = dataArr[18][i].Parts_Desc;
				youoption.id = "owl";
				youoption.name = "owl";
				youoption.value = dataArr[18][i].Parts_Desc;
				if (youoption.text == "缺省") { youoption.selected = "selected"; }
				$("#owl").append(youoption);
			}
			if (dataArr[19].length == 0) {
				$("#classU").html(""); $("#deer").html("");
				$("#classU").css('visibility', 'hidden'); $("#deer").css('visibility', 'hidden');
			} else {
				$("#classU").html(""); $("#deer").html("");
				$("#classU").css('visibility', 'visible'); $("#deer").css('visibility', 'visible');
			}
			for (var i = 0; i < dataArr[19].length; i++) {
				$("#classU").html(dataArr[19][i].FeatLebel); $("#classU").val(dataArr[19][i].FeatLebel);
				var youoption = document.createElement("option");
				youoption.text = dataArr[19][i].Parts_Desc;
				youoption.id = "deer";
				youoption.name = "deer";
				youoption.value = dataArr[19][i].Parts_Desc;
				if (youoption.text == "缺省") { youoption.selected = "selected"; }
				$("#deer").append(youoption);
			}
			if (selectValue == "R1" || selectValue == "R2" || selectValue == "R3" || selectValue == "R4") {
				$("#tankerName").css('visibility', 'visible'); $("#tankerName").addClass("can-drop");
				$("#classE").css('visibility', 'visible'); $("#classE").html("软件日期");
			} else {
			}

		},
		error: function () {
		}
	})
}
function Gold(selectValue, obj) {
	if (selectValue == "R1" || selectValue == "R2" || selectValue == "R3" || selectValue == "R4") {
	} else {
		LayRForm(); hideEFForm();
	}
	var pclass = selectValue;
	getSMT(pclass, obj); showEFForm(); getSupply(); getNewBlue(pclass);
	let dataArr = [];
	var reportType = 'goldRec';
	var taskData = { "reportType": reportType, "pclass": pclass };
	$.ajax({
		method: 'post',
		data: taskData,
		url: "/app/TMCode/getRoute",
		success: function (data) {
			dataArr = data;
			if (dataArr[21].length == 0) {
			} else {
				$("#UnitE").html(dataArr[21][0].PartsUnitE);
				$("#UnitE").val(dataArr[21][0].PartsUnitE );
				$("#unitE-label").html('基本单位');
				$("#unitE-label").val('基本单位' );
				$("#OldUnitE").html(dataArr[21][0].PartsUnitE);//designOption用
				$("#OldUnitE").val(dataArr[21][0].PartsUnitE );
				// console.log("丹审", JSON.stringify(dataArr[21][0].PartsUnitE));
				// console.log("丹服", JSON.stringify(dataArr[21][0].Unit_C));
			}
			if (dataArr[20].length == 0) {
				$("#classSMT").css('visibility', 'hidden');
			} else {
				$("#classSMT").css('visibility', 'visible');
				$("#classSMT").html(dataArr[20][0].FeatLebel);
				$("#classSMT").val(dataArr[20][0].FeatLebel);
				// console.log("绪丹", JSON.stringify(dataArr[20][0].Parts_Desc));
			}
			$("#classA").html(""); $("#boat").html("");	
			if( dataArr[0].length==0){
				$("#classA").css('visibility', 'hidden'); $("#boat").css('visibility', 'hidden');
				$("#classA").css('display', 'none');  $("#boat").css('display', 'none');
			}else{
				$("#classA").css('visibility', 'visible'); $("#boat").css('visibility', 'visible');
				$("#classA").css('display', 'inline-block');  $("#boat").css('display', 'inline-block');
			}
			for (var i = 0; i < dataArr[0].length; i++) {
				$("#classA").html(dataArr[0][i].FeatLebel);$("#classA").val(dataArr[0][i].FeatLebel);
				var youoption = document.createElement("option");
				youoption.text = dataArr[0][i].Parts_Desc;
				youoption.id = "boat";
				youoption.name = "boat";
				youoption.value = dataArr[0][i].Parts_Desc;
				if (youoption.text == obj.Value0) { youoption.selected = "selected"; }
				$("#boat").append(youoption);
			}
			$("#classB").html(""); $("#yacht").html("");	
			if( dataArr[1].length==0){
				$("#classB").css('visibility', 'hidden'); $("#yacht").css('visibility', 'hidden');
				$("#classB").css('display', 'none');  $("#yacht").css('display', 'none');
				$("#classB-br").css('display', 'none'); 
			}else{
				$("#classB").css('visibility', 'visible'); $("#yacht").css('visibility', 'visible');
				$("#classB").css('display', 'inline-block');  $("#yacht").css('display', 'inline-block');
				$("#classB-br").css('display', 'block'); 
			}
			for (var i = 0; i < dataArr[1].length; i++) {
				$("#classB").html(dataArr[1][i].FeatLebel);$("#classB").val(dataArr[1][i].FeatLebel);
				var youoption = document.createElement("option");
				youoption.text = dataArr[1][i].Parts_Desc;
				youoption.id = "yacht";
				youoption.name = "yacht";
				youoption.value = dataArr[1][i].Parts_Desc;
				if (youoption.text == obj.Value1) { youoption.selected = "selected"; }
				$("#yacht").append(youoption);
			}
			$("#classC").html(""); $("#sail").html("");	
			if( dataArr[2].length==0){
				$("#classC").css('visibility', 'hidden'); $("#sail").css('visibility', 'hidden');
				$("#classC").css('display', 'none');  $("#sail").css('display', 'none');
			}else{
				$("#classC").css('visibility', 'visible'); $("#sail").css('visibility', 'visible');
				$("#classC").css('display', 'inline-block');  $("#sail").css('display', 'inline-block');
			}
			for (var i = 0; i < dataArr[2].length; i++) {
				$("#classC").html(dataArr[2][i].FeatLebel);$("#classC").val(dataArr[2][i].FeatLebel);
				var youoption = document.createElement("option");
				youoption.text = dataArr[2][i].Parts_Desc;
				youoption.id = "sail";
				youoption.name = "sail";
				youoption.value = dataArr[2][i].Parts_Desc;
				if (youoption.text == obj.Value2) { youoption.selected = "selected"; }
				$("#sail").append(youoption);
			}
			$("#classD").html(""); $("#vessel").html("");	
			if( dataArr[3].length==0){
				$("#classD").css('visibility', 'hidden'); $("#vessel").css('visibility', 'hidden');
				$("#classD").css('display', 'none');  $("#vessel").css('display', 'none');
				$("#classD-br").css('display', 'none'); 
			}else{
				$("#classD").css('visibility', 'visible'); $("#vessel").css('visibility', 'visible');
				$("#classD").css('display', 'inline-block');  $("#vessel").css('display', 'inline-block');
				$("#classD-br").css('display', 'block');
			}
			for (var i = 0; i < dataArr[3].length; i++) {
				$("#classD").html(dataArr[3][i].FeatLebel); $("#classD").val(dataArr[3][i].FeatLebel);
				var youoption = document.createElement("option");
				youoption.text = dataArr[3][i].Parts_Desc;
				youoption.id = "vessel";
				youoption.name = "vessel";
				youoption.value = dataArr[3][i].Parts_Desc;
				if (youoption.text == obj.Value3) { youoption.selected = "selected"; }
				$("#vessel").append(youoption);
			}
			$("#classE").html(""); $("#tanker").html("");	
			if( dataArr[4].length==0){
				$("#classE").css('visibility', 'hidden'); $("#tanker").css('visibility', 'hidden');
				$("#classE").css('display', 'none');  $("#tanker").css('display', 'none');
				// console.log("羞逼4");
			}else{
				$("#classE").css('visibility', 'visible'); $("#tanker").css('visibility', 'visible');
				$("#classE").css('display', 'inline-block');  $("#tanker").css('display', 'inline-block');
			}
			for (var i = 0; i < dataArr[4].length; i++) {
				$("#classE").html(dataArr[4][i].FeatLebel); 	$("#classE").val(dataArr[4][i].FeatLebel);
				var youoption = document.createElement("option");
				youoption.text = dataArr[4][i].Parts_Desc;
				youoption.id = "tanker";
				youoption.name = "tanker";
				youoption.value = dataArr[4][i].Parts_Desc;
				if (youoption.text == obj.Value4) { youoption.selected = "selected"; }
				$("#tanker").append(youoption);
			}
			$("#classF").html(""); $("#marine").html("");	
			if( dataArr[5].length==0){
				$("#classF").css('visibility', 'hidden'); $("#marine").css('visibility', 'hidden');
				$("#classF").css('display', 'none');  $("#marine").css('display', 'none');
				$("#classF-br").css('display', 'none'); 
			}else{
				$("#classF").css('visibility', 'visible'); $("#marine").css('visibility', 'visible');
				$("#classF").css('display', 'inline-block');  $("#marine").css('display', 'inline-block');
				$("#classF-br").css('display', 'block'); 
			}
			for (var i = 0; i < dataArr[5].length; i++) {
				$("#classF").html(dataArr[5][i].FeatLebel);   $("#classF").val(dataArr[5][i].FeatLebel); 
				var youoption = document.createElement("option");
				youoption.text = dataArr[5][i].Parts_Desc;
				youoption.id = "marine";
				youoption.name = "marine";
				youoption.value = dataArr[5][i].Parts_Desc;
				if (youoption.text == obj.Value5) { youoption.selected = "selected"; }
				$("#marine").append(youoption);
			}
			$("#classH").html(""); $("#rocket").html("");	
			if( dataArr[6].length==0){
				$("#classG").css('visibility', 'hidden'); $("#rocket").css('visibility', 'hidden');
				$("#classG").css('display', 'none');  $("#rocket").css('display', 'none');
				// console.log("羞逼6");
			}else{
				$("#classG").css('visibility', 'visible'); $("#rocket").css('visibility', 'visible');
				$("#classG").css('display', 'inline-block');  $("#rocket").css('display', 'inline-block');
			}
			for (var i = 0; i < dataArr[6].length; i++) {
				$("#classG").html(dataArr[6][i].FeatLebel);  $("#classG").val(dataArr[6][i].FeatLebel);
				var youoption = document.createElement("option");
				youoption.text = dataArr[6][i].Parts_Desc;
				youoption.id = "rocket";
				youoption.name = "rocket";
				youoption.value = dataArr[6][i].Parts_Desc;
				if (youoption.text == obj.Value6) { youoption.selected = "selected"; }
				$("#rocket").append(youoption);
			}
			$("#classH").html(""); $("#zebra").html("");	
			if( dataArr[7].length==0){
				$("#classH").css('visibility', 'hidden'); $("#zebra").css('visibility', 'hidden');
				$("#classH").css('display', 'none');  $("#zebra").css('display', 'none');
				$("#classH-br").css('display', 'none');  
			}else{
				$("#classH").css('visibility', 'visible'); $("#zebra").css('visibility', 'visible');
				$("#classH").css('display', 'inline-block');  $("#zebra").css('display', 'inline-block');
				$("#classH-br").css('display', 'block');  
			}
			for (var i = 0; i < dataArr[7].length; i++) {
				$("#classH").html(dataArr[7][i].FeatLebel); $("#classH").val(dataArr[7][i].FeatLebel); 
				var youoption = document.createElement("option");
				youoption.text = dataArr[7][i].Parts_Desc;
				youoption.id = "zebra";
				youoption.name = "zebra";
				youoption.value = dataArr[7][i].Parts_Desc;
				if (youoption.text == obj.Value7) { youoption.selected = "selected"; }
				$("#zebra").append(youoption);
			}
			if( dataArr[8].length==0){
				$("#classI").html(""); $("#eleph").html("");	
				$("#classI").css('visibility', 'hidden'); $("#eleph").css('visibility', 'hidden');
				$("#classI").css('display', 'none');  $("#eleph").css('display', 'none'); 
				// console.log("羞逼8");
			}else{
				$("#classI").css('visibility', 'visible'); $("#eleph").css('visibility', 'visible');
				$("#classI").css('display', 'inline-block');  $("#eleph").css('display', 'inline-block'); 
				$("#eleph").html("");
			}
			for (var i = 0; i < dataArr[8].length; i++) {
				$("#classI").html(dataArr[8][i].FeatLebel); $("#classI").val(dataArr[8][i].FeatLebel); 
				var youoption = document.createElement("option");
				youoption.text = dataArr[8][i].Parts_Desc;
				youoption.id = "eleph";
				youoption.name = "eleph";
				youoption.value = dataArr[8][i].Parts_Desc;
				if (youoption.text == obj.Value8) { youoption.selected = "selected"; }
				$("#eleph").append(youoption);
			}
			if( dataArr[9].length==0){
				$("#classJ").html(""); $("#eagle").html("");	
				$("#classJ").css('visibility', 'hidden'); $("#eagle").css('visibility', 'hidden');
				$("#classJ").css('display', 'none');  $("#eagle").css('display', 'none'); 
				$("#classJ-br").css('display', 'none'); 
			}else{
				$("#classJ").css('visibility', 'visible'); $("#eagle").css('visibility', 'visible');
				$("#classJ").css('display', 'inline-block');  $("#eagle").css('display', 'inline-block');
				$("#classJ-br").css('display', 'block');  
				$("#eagle").html("");
			}
			for (var i = 0; i < dataArr[9].length; i++) {
				$("#classJ").html(dataArr[9][i].FeatLebel);  $("#classJ").val(dataArr[9][i].FeatLebel); 
				var youoption = document.createElement("option");
				youoption.text = dataArr[9][i].Parts_Desc;
				youoption.id = "eagle";
				youoption.name = "eagle";
				youoption.value = dataArr[9][i].Parts_Desc;
				if (youoption.text == obj.Value9) { youoption.selected = "selected"; }
				$("#eagle").append(youoption);
			}
			if( dataArr[10].length==0){
				$("#classK").html(""); $("#tiger").html("");	
				$("#classK").css('visibility', 'hidden'); $("#tiger").css('visibility', 'hidden');
				$("#classK").css('display', 'none');  $("#tiger").css('display', 'none'); 
				// console.log("羞逼10");
			}else{
				$("#classK").css('visibility', 'visible'); $("#tiger").css('visibility', 'visible');
				$("#classK").css('display', 'inline-block');  $("#tiger").css('display', 'inline-block'); 
				$("#tiger").html("");
			}
			for (var i = 0; i < dataArr[10].length; i++) {
				$("#classK").html(dataArr[10][i].FeatLebel); $("#classK").val(dataArr[10][i].FeatLebel); 
				var youoption = document.createElement("option");
				youoption.text = dataArr[10][i].Parts_Desc;
				youoption.id = "tiger";
				youoption.name = "tiger";
				youoption.value = dataArr[10][i].Parts_Desc;
				if (youoption.text == obj.Value10) { youoption.selected = "selected"; }
				$("#tiger").append(youoption);
			}
			if( dataArr[11].length==0){
				$("#classL").html(""); $("#lion").html("");	
				$("#classL").css('visibility', 'hidden'); $("#lion").css('visibility', 'hidden');
				$("#classL").css('display', 'none');  $("#lion").css('display', 'none'); 
				$("#classL-br").css('display', 'none'); 
				// console.log("羞逼11");
			}else{
				$("#classL").css('visibility', 'visible'); $("#lion").css('visibility', 'visible');
				$("#classL").css('display', 'inline-block');  $("#lion").css('display', 'inline-block');
				$("#classL-br").css('display', 'block'); 
				$("#lion").html("");
			}
			for (var i = 0; i < dataArr[11].length; i++) {
				$("#classL").html(dataArr[11][i].FeatLebel); $("#classL").val(dataArr[11][i].FeatLebel);
				var youoption = document.createElement("option");
				youoption.text = dataArr[11][i].Parts_Desc;
				youoption.id = "lion";
				youoption.name = "lion";
				youoption.value = dataArr[11][i].Parts_Desc;
				if (youoption.text == obj.Value11) { youoption.selected = "selected"; }
				$("#lion").append(youoption);
			}
			if( dataArr[12].length==0){
				$("#classM").html(""); $("#horse").html("");	
				$("#classM").css('visibility', 'hidden'); $("#horse").css('visibility', 'hidden');
				$('#classM').css('display', 'none');  $('#horse').css('display', 'none'); 
				// console.log("羞逼12");
			}else{
				$("#classM").css('visibility', 'visible'); $("#horse").css('visibility', 'visible');
				$('#classM').css('display', 'inline-block');  $('#horse').css('display', 'inline-block'); 
				$("#horse").html("");
			}
			for (var i = 0; i < dataArr[12].length; i++) {
				$("#classM").html(dataArr[12][i].FeatLebel); $("#classM").val(dataArr[12][i].FeatLebel);
				var youoption = document.createElement("option");
				youoption.text = dataArr[12][i].Parts_Desc;
				youoption.id = "horse";
				youoption.name = "horse";
				youoption.value = dataArr[12][i].Parts_Desc;
				if (youoption.text == obj.Value12) { youoption.selected = "selected"; }
				$("#horse").append(youoption);
			}
			if( dataArr[13].length==0){
				$("#classO").html(""); $("#worm").html("");	
				$("#classO").css('visibility', 'hidden'); $("#worm").css('visibility', 'hidden');
				$("#classO").css('display', 'none');  $("#worm").css('display', 'none'); 
				$("#classO-br").css('display', 'none'); 
				// console.log("羞逼13");
			}else{
				$("#classO").css('visibility', 'visible'); $("#worm").css('visibility', 'visible');
				$("#classO").css('display', 'inline-block');  $("#worm").css('display', 'inline-block'); 
				$("#classO-br").css('display', 'block'); 
				$("#worm").html("");
			}
			for (var i = 0; i < dataArr[13].length; i++) {
				$("#classO").html(dataArr[13][i].FeatLebel); $("#classO").val(dataArr[13][i].FeatLebel);
				var youoption = document.createElement("option");
				youoption.text = dataArr[13][i].Parts_Desc;
				youoption.id = "worm";
				youoption.name = "worm";
				youoption.value = dataArr[13][i].Parts_Desc;
				if (youoption.text == obj.Value13) { youoption.selected = "selected"; }
				$("#worm").append(youoption);
			}
			if( dataArr[14].length==0){
				$("#classP").html(""); $("#hole").html("");	
				$("#classP").css('visibility', 'hidden'); $("#hole").css('visibility', 'hidden');
				$("#classP").css('display', 'none'); $("#hole").css('display', 'none'); 
			}else{
				$("#classP").css('visibility', 'visible'); $("#hole").css('visibility', 'visible');
				$("#classP").css('display', 'inline-block'); $("#hole").css('display', 'inline-block'); 
				$("#hole").html("");
			}
			for (var i = 0; i < dataArr[14].length; i++) {
				$("#classP").html(dataArr[14][i].FeatLebel); $("#classP").val(dataArr[14][i].FeatLebel); 
				var youoption = document.createElement("option");
				youoption.text = dataArr[14][i].Parts_Desc;
				youoption.id = "hole";
				youoption.name = "hole";
				youoption.value = dataArr[14][i].Parts_Desc;
				if (youoption.text == obj.Value14) { youoption.selected = "selected"; }
				$("#hole").append(youoption);
			}
			if( dataArr[15].length==0){
				$("#classQ").html(""); $("#xman").html("");	
				$("#classQ").css('visibility', 'hidden'); $("#xman").css('visibility', 'hidden');
				$("#classQ").css('display', 'none');$("#xman").css('display', 'none'); 
				$("#classQ-br").css('display', 'none');
				// console.log("羞逼15");
			}else{
				$("#classQ").html(""); $("#xman").html("");	
				$("#classQ").css('visibility', 'visible'); $("#xman").css('visibility', 'visible');	
				$("#classQ").css('display', 'inline-block');$("#xman").css('display', 'inline-block'); 
				$("#classQ-br").css('display', 'block');
			}
			for (var i = 0; i < dataArr[15].length; i++) {
				$("#classQ").html(dataArr[15][i].FeatLebel); $("#classQ").val(dataArr[15][i].FeatLebel);
				var youoption = document.createElement("option");
				youoption.text = dataArr[15][i].Parts_Desc;
				youoption.id = "xman";
				youoption.name = "xman";
				youoption.value = dataArr[15][i].Parts_Desc;
				if (youoption.text == obj.Value15) { youoption.selected = "selected"; }
				$("#xman").append(youoption);
			}
			if( dataArr[16].length==0){
				$("#classR").html(""); $("#quita").html("");	
				$("#classR").css('visibility', 'hidden'); $("#quita").css('visibility', 'hidden');
				$("#classR").css('display', 'none');  $("#quita").css('display', 'none'); 
			}else{
				$("#classR").html(""); $("#quita").html("");	
				$("#classR").css('visibility', 'visible'); $("#quita").css('visibility', 'visible');	
				$("#classR").css('display', 'inline-block');  $("#quita").css('display', 'inline-block'); 
			}
			for (var i = 0; i < dataArr[16].length; i++) {
				$("#classR").html(dataArr[16][i].FeatLebel); $("#classR").val(dataArr[16][i].FeatLebel);
				var youoption = document.createElement("option");
				youoption.text = dataArr[16][i].Parts_Desc;
				youoption.id = "quita";
				youoption.name = "quita";
				youoption.value = dataArr[16][i].Parts_Desc;
				if (youoption.text == obj.Value16) { youoption.selected = "selected"; }
				$("#quita").append(youoption);
			}
			if( dataArr[17].length==0){
				$("#classS").html(""); $("#fox").html("");
				$("#classS").css('visibility', 'hidden'); $("#fox").css('visibility', 'hidden');
				$("#classS").css('display', 'none');  $("#fox").css('display', 'none');  
				$("#classS-br").css('display', 'none');   
				// console.log("羞逼17");
			}else{
				$("#classS").html(""); $("#fox").html("");	
				$("#classS").css('visibility', 'visible'); $("#fox").css('visibility', 'visible');	
				$("#classS").css('display', 'inline-block');  $("#fox").css('display', 'inline-block'); 
				$("#classS-br").css('display', 'block'); 
			}
			for (var i = 0; i < dataArr[17].length; i++) {
				$("#classS").html(dataArr[17][i].FeatLebel); $("#classS").val(dataArr[17][i].FeatLebel);
				var youoption = document.createElement("option");
				youoption.text = dataArr[17][i].Parts_Desc;
				youoption.id = "fox";
				youoption.name = "fox";
				youoption.value = dataArr[17][i].Parts_Desc;
				if (youoption.text == obj.Value17) { youoption.selected = "selected"; }
				$("#fox").append(youoption);
			}
			if( dataArr[18].length==0){
				$("#classT").html(""); $("#owl").html("");
				$("#classT").css('visibility', 'hidden'); $("#owl").css('visibility', 'hidden');
				$("#classT").css('display', 'none');  	$("#owl").css('display', 'none');  
				console.log("羞逼18");
			}else{
				$("#classT").html(""); $("#owl").html("");	
				$("#classT").css('visibility', 'visible'); $("#owl").css('visibility', 'visible');	
				$("#classT").css('display', 'inline-block');  	$("#owl").css('display', 'inline-block');  
				console.log("息逼18");
			}
			for (var i = 0; i < dataArr[18].length; i++) {
				$("#classT").html(dataArr[18][i].FeatLebel); $("#classT").val(dataArr[18][i].FeatLebel);
				var youoption = document.createElement("option");
				youoption.text = dataArr[18][i].Parts_Desc;
				youoption.id = "owl";
				youoption.name = "owl";
				youoption.value = dataArr[18][i].Parts_Desc;
				if (youoption.text == obj.Value18) { youoption.selected = "selected"; }
				$("#owl").append(youoption);
			}
			if( dataArr[19].length==0){
				$("#classU").html(""); $("#deer").html("");
				$("#classU").css('visibility', 'hidden'); $("#deer").css('visibility', 'hidden');
				$("#classU").css('display', 'none'); $("#deer").css('display', 'none');
				// console.log("羞逼19"); 
			}else{
				$("#classU").html(""); $("#deer").html("");	
				$("#classU").css('visibility', 'visible'); $("#deer").css('visibility', 'visible');	
				$("#classU").css('display', 'inline-block'); $("#deer").css('display', 'inline-block');  
			}
			for (var i = 0; i < dataArr[19].length; i++) {
				$("#classU").html(dataArr[19][i].FeatLebel); $("#classU").val(dataArr[19][i].FeatLebel);
				var youoption = document.createElement("option");
				youoption.text = dataArr[19][i].Parts_Desc;
				youoption.id = "deer";
				youoption.name = "deer";
				youoption.value = dataArr[19][i].Parts_Desc;
				if (youoption.text == obj.Value19) { youoption.selected = "selected"; }
				$("#deer").append(youoption);
			}
			if (selectValue == "R1" || selectValue == "R2"  || selectValue == "R3" || selectValue == "R4") {
				$("#tankerName").css('visibility', 'visible');$("#tankerName").addClass("can-drop");
				$("#classE").css('visibility', 'visible'); $("#classE").html("软件日期"); 
				$("#classE").css('display', 'inline-block');  $("#tanker").css('display', 'inline-block');
			}else{
			}

		},
		error: function () {
		}
	})
}
function liMouseOver() {
	// 高亮显示
	this.style.backgroundColor = '#FFF0F5';
}
function liMouseOut() {
	//取消高亮显示
	this.style.backgroundColor = '';
}
function IllumationA() {
	var comboClass = 'A#B#C#D';
	let dataArr = [];
	var reportType = 'goldCategory';
	var arrange = 'IllumLabel';
	var taskData = { "reportType": reportType, "arrange": arrange, "comboClass": comboClass };
	$.ajax({
		method: 'post',
		data: taskData,
		url: "/app/TMCode/getRoute",
		success: function (data) {
			dataArr = data;
			//   console.log("懿旨", JSON.stringify(data));
			var ul = document.createElement('ul');
			for (var i = 0; i < dataArr.length; i++) {
				var li = document.createElement('li');
				li.innerHTML = "<li class=\"new-prod-drop\" ><a id=\"AA\" href=\"?missA=" + dataArr[i].Parts_Class + "\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + dataArr[i].Parts_Class + dataArr[i].Parts_Chi + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "</a></li>";
				ul.appendChild(li);
				li.onmouseover = liMouseOver;
				li.onmouseout = liMouseOut;
				ul.appendChild(li);
			}
			document.getElementById('IllumA').appendChild(ul);
		},
		error: function () {
		}
	})
}
function IllumationE() {
	var comboClass = 'E#F';
	let dataArr = [];
	var reportType = 'goldCategory';
	var arrange = 'IllumLabel';
	var taskData = { "reportType": reportType, "arrange": arrange, "comboClass": comboClass };
	$.ajax({
		method: 'post',
		data: taskData,
		url: "/app/TMCode/getRoute",
		success: function (data) {
			dataArr = data;
			var ul = document.createElement('ul');
			for (var i = 0; i < dataArr.length; i++) {
				var li = document.createElement('li');
				li.innerHTML = "<li class=\"new-prod-drop\" ><a id=\"AA\" href=\"?missA=" + dataArr[i].Parts_Class + "\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + dataArr[i].Parts_Class + dataArr[i].Parts_Chi + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "</a></li>";
				ul.appendChild(li);
				li.onmouseover = liMouseOver;
				li.onmouseout = liMouseOut;
				ul.appendChild(li);
			}
			document.getElementById('IllumE').appendChild(ul);
		},
		error: function () {
		}
	})


}
function IllumationG() {
	var comboClass = 'G#H';
	let dataArr = [];
	var reportType = 'goldCategory';
	var arrange = 'IllumLabel';
	var taskData = { "reportType": reportType, "arrange": arrange, "comboClass": comboClass };
	$.ajax({
		method: 'post',
		data: taskData,
		url: "/app/TMCode/getRoute",
		success: function (data) {
			dataArr = data;
			var ul = document.createElement('ul');
			for (var i = 0; i < dataArr.length; i++) {
				var li = document.createElement('li');
				li.innerHTML = "<li class=\"new-prod-drop\" ><a id=\"AA\" href=\"?missA=" + dataArr[i].Parts_Class + "\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + dataArr[i].Parts_Class + dataArr[i].Parts_Chi + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "</a></li>";
				ul.appendChild(li);
				li.onmouseover = liMouseOver;
				li.onmouseout = liMouseOut;
				ul.appendChild(li);
			}
			document.getElementById('IllumG').appendChild(ul);
		},
		error: function () {
		}
	})


}
function IllumationJ() {
	var comboClass = 'J#K#L#U';
	let dataArr = [];
	var reportType = 'goldCategory';
	var arrange = 'IllumLabel';
	var taskData = { "reportType": reportType, "arrange": arrange, "comboClass": comboClass };
	$.ajax({
		method: 'post',
		data: taskData,
		url: "/app/TMCode/getRoute",
		success: function (data) {
			dataArr = data;
			var ul = document.createElement('ul');
			for (var i = 0; i < dataArr.length; i++) {
				var li = document.createElement('li');
				li.innerHTML = "<li class=\"new-prod-drop\" ><a id=\"AA\" href=\"?missA=" + dataArr[i].Parts_Class + "\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + dataArr[i].Parts_Class + dataArr[i].Parts_Chi + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "</a></li>";
				ul.appendChild(li);
				li.onmouseover = liMouseOver;
				li.onmouseout = liMouseOut;
				ul.appendChild(li);
			}
			document.getElementById('IllumJ').appendChild(ul);
		},
		error: function () {
		}
	})

}
function IllumationR() {
	var comboClass = 'R#S';
	let dataArr = [];
	var reportType = 'goldCategory';
	var arrange = 'IllumLabel';
	var taskData = { "reportType": reportType, "arrange": arrange, "comboClass": comboClass };
	$.ajax({
		method: 'post',
		data: taskData,
		url: "/app/TMCode/getRoute",
		success: function (data) {
			dataArr = data;
			var ul = document.createElement('ul');
			for (var i = 0; i < dataArr.length; i++) {
				var li = document.createElement('li');
				li.innerHTML = "<li class=\"new-prod-drop\" ><a id=\"AA\" href=\"?missA=" + dataArr[i].Parts_Class + "\">&nbsp;" + dataArr[i].Parts_Class + dataArr[i].Parts_Chi + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "</a></li>";
				ul.appendChild(li);
				li.onmouseover = liMouseOver;
				li.onmouseout = liMouseOut;
				ul.appendChild(li);
			}
			document.getElementById('IllumR').appendChild(ul);
		},
		error: function () {
		}
	})

}