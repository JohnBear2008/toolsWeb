 
function PersonNJob() {
	var prodID = ''; 
	var prodNM = '';
	let dataArr = [];
	var reportType = 'EmployLook';
	var arrange = 'ReadJob';
	var taskData = { "reportType": reportType, "arrange": arrange, "prodID": prodID, "prodNM": prodNM };
	$.ajax({
	  method: 'post',
	  data: taskData,
	  url: "/app/TMFinc/getRoute",
	  success: function (data) {
	    dataArr = data;
	    $("#EmpValue").val(); $("#EmpValue").html("");
	    for (var i = 0; i < dataArr.length; i++) {
		var youoption = document.createElement("option");
		youoption.text = dataArr[i].StaffUser + " " + dataArr[i].StaffName ;
		youoption.id = "fishtime";
		youoption.name = "fishtime";
		youoption.value = dataArr[i].StaffID+ "##" + dataArr[i].StaffUser+ "##" + dataArr[i].StaffName+ "##" + dataArr[i].Mobiles;
		$("#EmpValue").append(youoption);
	    }
	  },
	  error: function () {
	  }
	})
}
function PersonLevel() {
	      $("#LevelValue").val(); $("#LevelValue").html(""); 
		var youoption = document.createElement("option");
		youoption.text = '请设定';
		youoption.id = "StaffLevel";
		youoption.name = "StaffLevel";
		youoption.value = '0';
		$("#LevelValue").append(youoption);
		var youoption = document.createElement("option");
		youoption.text = '文员';
		youoption.id = "StaffLevel";
		youoption.name = "StaffLevel";
		youoption.value = '1';
		$("#LevelValue").append(youoption);
		var youoption = document.createElement("option");
		youoption.text = '部门主管';
		youoption.id = "StaffLevel";
		youoption.name = "StaffLevel";
		youoption.value = '2';
		$("#LevelValue").append(youoption);
		var youoption = document.createElement("option");
		youoption.text = '副总';
		youoption.id = "StaffLevel";
		youoption.name = "StaffLevel";
		youoption.value = '3';
		$("#LevelValue").append(youoption);
		var youoption = document.createElement("option");
		youoption.text = '采购承办人';
		youoption.id = "StaffLevel";
		youoption.name = "StaffLevel";
		youoption.value = '4';
		$("#LevelValue").append(youoption);
		var youoption = document.createElement("option");
		youoption.text = '资讯承办人';
		youoption.id = "StaffLevel";
		youoption.name = "StaffLevel";
		youoption.value = '4';
		$("#LevelValue").append(youoption);
		var youoption = document.createElement("option");
		youoption.text = '行政承办人';
		youoption.id = "StaffLevel";
		youoption.name = "StaffLevel";
		youoption.value = '4';
		$("#LevelValue").append(youoption);
		var youoption = document.createElement("option");
		youoption.text = '采购主管';
		youoption.id = "StaffLevel";
		youoption.name = "StaffLevel";
		youoption.value = '5';
		$("#LevelValue").append(youoption);
		var youoption = document.createElement("option");
		youoption.text = '财务总监';
		youoption.id = "StaffLevel";
		youoption.name = "StaffLevel";
		youoption.value = '6';
		$("#LevelValue").append(youoption);
		var youoption = document.createElement("option");
		youoption.text = '总经理';
		youoption.id = "StaffLevel";
		youoption.name = "StaffLevel";
		youoption.value = '7';
		$("#LevelValue").append(youoption);
		var youoption = document.createElement("option");
		youoption.text = 'CEO';
		youoption.id = "StaffLevel";
		youoption.name = "StaffLevel";
		youoption.value = '8';
		$("#LevelValue").append(youoption);
		var youoption = document.createElement("option");
		youoption.text = '董事长';
		youoption.id = "StaffLevel";
		youoption.name = "StaffLevel";
		youoption.value = '9';
		$("#LevelValue").append(youoption);
	  
}
function OrigList() {
      let dataArr = [];
      var reportType = 'ironSubject';
      var arrange = 'HandleOrig';
      var taskData = { "reportType": reportType, "arrange": arrange };
      $.ajax({
            method: 'post',
            data: taskData,
            url: "/app/TMFinc/getRoute",
            success: function (data) {
                  dataArr = data;
			var youoption = document.createElement("option");
			youoption.text = '-请选择-';
			youoption.id = "bellTime";
			youoption.name = "bellTime";
			youoption.value =  ''+"##"+'';
			$("#DeptCombo").append(youoption);
                  for (var i = 0; i < dataArr.length; i++) {
				var youoption = document.createElement("option");
                        youoption.text = dataArr[i].Record_Name;
                        youoption.id = "bellTime";
                        youoption.name = "bellTime";
                        youoption.value =  dataArr[i].Record_CID+"##"+dataArr[i].Record_Name;
                        $("#DeptCombo").append(youoption);
                  }
            },
            error: function () {
            }
      })
}
function magnLab2() {
	let dataArr = [];
      var reportType = 'ironSubject';
      var arrange = 'findOrig';
      var taskData = { "reportType": reportType, "arrange": arrange };
      $.ajax({
            method: 'post',
            data: taskData,
            url: "/app/TMFinc/getRoute",
            success: function (data) {
                  dataArr = data;
			$("#customerShort").val(); $("#customerShort").html("");
			for (var i = 0; i < dataArr.length; i++) {
				var tempVal = dataArr[i].Record_Name;
				$("#customerShort").append($('<option value="'+tempVal+'">'+tempVal+'</option>'));
			}
            },
            error: function () {
            }
      })
}
function magnesium(selectValue, obj) {
	let dataArr = [];
      var reportType = 'ironSubject';
      var arrange = 'findOrig';
      var taskData = { "reportType": reportType, "arrange": arrange };
      $.ajax({
            method: 'post',
            data: taskData,
            url: "/app/TMFinc/getRoute",
            success: function (data) {
                  dataArr = data;
                  // for (var i = 0; i < dataArr.length; i++) {
			// 	if( dataArr[0] !=undefined){
			// 		$("#classSupp").val(dataArr[0].Record_Name);
			// 		$("#classSupp").html(dataArr[0].Record_Name);
			// 	}					
			// }
			$("#DeptValue").val(); $("#DeptValue").html("");
			for (var i = 0; i < dataArr.length; i++) {
			  var youoption = document.createElement("option");
			  youoption.text = dataArr[i].Record_Name ;
			  youoption.id = "teatime";
			  youoption.name = "teatime";
			  youoption.value = dataArr[i].Record_Name;
			  $("#DeptValue").append(youoption);
			}
            },
            error: function () {
            }
      })
} 
function aluminium(selectValue, obj) {
	let dataArr = [];
      var reportType = 'ironSubject';
      var arrange = 'findOrigDtl';
      var taskData = { "reportType": reportType, "arrange": arrange };
      $.ajax({
            method: 'post',
            data: taskData,
            url: "/app/TMFinc/getRoute",
            success: function (data) {
                  dataArr = data;
			$("#GroupValue").val(); $("#GroupValue").html("");
			for (var i = 0; i < dataArr.length; i++) {
			  var youoption = document.createElement("option");
			  youoption.text = dataArr[i].Record_Name ;
			  youoption.id = "teatime";
			  youoption.name = "teatime";
			  youoption.value = dataArr[i].Record_Name;
			  $("#GroupValue").append(youoption);
			}
            },
            error: function () {
            }
      })
} 
// function PersonList() {
// 	var prodID = ''; 
// 	var prodNM = '';
// 	let dataArr = [];
// 	var reportType = 'EmployLook';
// 	var arrange = 'MgrJob';
// 	var taskData = { "reportType": reportType, "arrange": arrange, "prodID": prodID, "prodNM": prodNM };
// 	$.ajax({
// 	  method: 'post',
// 	  data: taskData,
// 	  url: "/app/TMFinc/getRoute",
// 	  success: function (data) {
// 	    dataArr = data;
// 	    $("#EmpValue").val(); $("#EmpValue").html("");
// 	    for (var i = 0; i < dataArr.length; i++) {
// 		var youoption = document.createElement("option");
// 		youoption.text = dataArr[i].PersonUser + " 姓名: " + dataArr[i].PersonName;
// 		youoption.id = "fishtime";
// 		youoption.name = "fishtime";
// 		youoption.value = dataArr[i].PersonName;
// 		$("#EmpValue").append(youoption);
// 	    }
// 	  },
// 	  error: function () {
// 	  }
// 	})
// }