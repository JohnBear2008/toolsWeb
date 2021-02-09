function getTermi() {
  let dataArr = [];
  var reportType = 'goldTermi';
  var arrange = 'custom';
  var taskData = { "reportType": reportType, "arrange": arrange };
  $.ajax({
    method: 'post',
    data: taskData,
    url: "/app/TMSale/getRoute",
    success: function (data) {
      dataArr = data;
      //  console.log("美猴王", JSON.stringify(dataArr) ); 	 				
      for (var i = 0; i < dataArr.length; i++) {
        var youoption = document.createElement("option");
        youoption.text = dataArr[i].CU_TCcode + "-" + dataArr[i].CU_TCname;
        youoption.id = "TermiCust";
        youoption.name = "TermiCust";
        youoption.value = dataArr[i].CU_TCcode;
        if (youoption.text == "-") { youoption.selected = "selected"; }
        $("#TermiCust").append(youoption);
      }

    },
    error: function () {
    }
  })
}
//7566要下拉是不可能的
// function getBusiPart() {
//   let dataArr = [];
//   var reportType = 'goldBusi';
//   var arrange = 'business';
//   var taskData = { "reportType": reportType, "arrange": arrange };
//   $.ajax({
//     method: 'post',
//     data: taskData,
//     url: "/app/TMSale/getRoute",
//     success: function (data) {
//       dataArr = data;
//       //  console.log("美猴王", JSON.stringify(dataArr) );
//       var youoption = document.createElement("option");
//       youoption.text = "-";
//       youoption.id = "optBusiPart";
//       youoption.name = "optBusiPart";
//       youoption.value = "";
//       $("#optBusiPart").append(youoption);
//       for (var i = 0; i < dataArr.length; i++) {
//         var youoption = document.createElement("option");
//         youoption.text = dataArr[i].CU_ID + "-" + dataArr[i].CU_Name;
//         youoption.id = "optBusiPart";
//         youoption.name = "optBusiPart";
//         youoption.value = dataArr[i].CU_ID;
//         if (youoption.text == "-") { youoption.selected = "selected"; }
//         $("#optBusiPart").append(youoption);
//       }

//     },
//     error: function () {
//     }
//   })
// }
function CritBacBusi() {
  let dataArr = [];
  var reportType = 'starWar';
  var arrange = 'Basic';
  var taskData = { "reportType": reportType, "arrange": arrange };
  $.ajax({
    method: 'post',
    data: taskData,
    url: "/app/TMSale/getRoute",
    success: function (data) {
      dataArr = data;
      // console.log("俞连州", JSON.stringify(dataArr));
      for (var i = 0; i < dataArr.length; i++) {
        var youoption = document.createElement("option");
        youoption.text = dataArr[i].ProductID + " 品名: " + dataArr[i].ProductName;
        youoption.id = "lifetime";
        youoption.name = "lifetime";
        youoption.value = dataArr[i].ProductID + "##" + dataArr[i].ProductName;
        $("#LifeValue").append(youoption);
      }

    },
    error: function () {
    }
  })
}
function CritAdvBusi(prodID, prodNM) {
  let dataArr = [];
  var reportType = 'starWar';
  var arrange = 'Adv';
  var taskData = { "reportType": reportType, "arrange": arrange, "prodID": prodID, "prodNM": prodNM };
  $.ajax({
    method: 'post',
    data: taskData,
    url: "/app/TMSale/getRoute",
    success: function (data) {
      dataArr = data;
      $("#LifeValue").val(); $("#LifeValue").html("");
      for (var i = 0; i < dataArr.length; i++) {
        var youoption = document.createElement("option");
        youoption.text = dataArr[i].ProductID + " 品名: " + dataArr[i].ProductName;
        youoption.id = "lifetime";
        youoption.name = "lifetime";
        youoption.value = dataArr[i].ProductID + "##" + dataArr[i].ProductName;
        $("#LifeValue").append(youoption);
      }
    },
    error: function () {
    }
  })
}
function CritBacPers() {
  let dataArr = [];
  var reportType = 'starWar';
  var arrange = 'BasicPers';
  var taskData = { "reportType": reportType, "arrange": arrange };
  $.ajax({
    method: 'post',
    data: taskData,
    url: "/app/TMSale/getRoute",
    success: function (data) {
      dataArr = data;
      for (var i = 0; i < dataArr.length; i++) {
        var youoption = document.createElement("option");
        youoption.text = dataArr[i].ProductID + " 品名: " + dataArr[i].ProductName;
        youoption.id = "fishtime";
        youoption.name = "fishtime";
        youoption.value = dataArr[i].ProductID + "##" + dataArr[i].ProductName;
        $("#FishValue").append(youoption);
      }

    },
    error: function () {
    }
  })
}
function FincBacPers() {
  let dataArr = [];
  var reportType = 'starWar';
  var arrange = 'BasicFinc';
  var taskData = { "reportType": reportType, "arrange": arrange };
  $.ajax({
    method: 'post',
    data: taskData,
    url: "/app/TMFinc/getRoute",
    success: function (data) {
      dataArr = data;
      for (var i = 0; i < dataArr.length; i++) {
        var youoption = document.createElement("option");
        youoption.text = dataArr[i].ProductID + " 姓名: " + dataArr[i].ProductName;
        youoption.id = "fishtime";
        youoption.name = "fishtime";
        youoption.value = dataArr[i].ProductID + "##" + dataArr[i].ProductName;
        $("#FishValue").append(youoption);
      }

    },
    error: function () {
    }
  })
}
function CritAdvPers(prodID, prodNM) {
  let dataArr = [];
  var reportType = 'starWar';
  var arrange = 'AdvPers';
  var taskData = { "reportType": reportType, "arrange": arrange, "prodID": prodID, "prodNM": prodNM };
  $.ajax({
    method: 'post',
    data: taskData,
    url: "/app/TMSale/getRoute",
    success: function (data) {
      dataArr = data;
      $("#FishValue").val(); $("#FishValue").html("");
      for (var i = 0; i < dataArr.length; i++) {
        var youoption = document.createElement("option");
        youoption.text = dataArr[i].ProductID + " 品名: " + dataArr[i].ProductName;
        youoption.id = "fishtime";
        youoption.name = "fishtime";
        youoption.value = dataArr[i].ProductID + "##" + dataArr[i].ProductName;
        $("#FishValue").append(youoption);
      }
    },
    error: function () {
    }
  })
}
