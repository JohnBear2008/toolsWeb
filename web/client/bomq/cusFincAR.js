function FincAdvPers(prodID, prodNM) {
  let dataArr = [];
  var reportType = 'starWar';
  var arrange = 'AdvFinc';
  var taskData = { "reportType": reportType, "arrange": arrange, "prodID": prodID, "prodNM": prodNM };
  $.ajax({
    method: 'post',
    data: taskData,
    url: "/app/TMFinc/getRoute",
    success: function (data) {
      dataArr = data;
      $("#FishValue").val(); $("#FishValue").html("");
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
function FincAdvDeps(prodID, prodNM) {//应收帐
  let dataArr = [];
  var reportType = 'starWar';
  var arrange = 'DeptFinc';
  var taskData = { "reportType": reportType, "arrange": arrange, "prodID": prodID, "prodNM": prodNM };
  $.ajax({
    method: 'post',
    data: taskData,
    url: "/app/TMFinc/getRoute",
    success: function (data) {
      dataArr = data;
      $("#CrabValue").val(); $("#CrabValue").html("");
      for (var i = 0; i < dataArr.length; i++) {
        var youoption = document.createElement("option");
        youoption.text = dataArr[i].ProductID + " 名称: " + dataArr[i].ProductName;
        youoption.id = "crabtime";
        youoption.name = "crabtime";
        youoption.value = dataArr[i].ProductID + "##" + dataArr[i].ProductName;
        $("#CrabValue").append(youoption);
      }
    },
    error: function () {
    }
  })
}