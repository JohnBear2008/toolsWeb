 
function CriteriaAdv9(prodID , prodNM  ){
      let dataArr = [];
      var reportType = 'StarGate';
      var arrange = 'Adv';
      var taskData = { "reportType": reportType, "arrange": arrange , "prodID": prodID , "prodNM": prodNM  };
      $.ajax({
            method: 'post',
            data: taskData,
            url: "/app/TMBom/getRoute",
            success: function (data) {
                  dataArr = data;
                  $("#LifeValue").val(); $("#LifeValue").html("");
                  for (var i = 0; i < dataArr.length; i++) {
                        var youoption = document.createElement("option");
                        youoption.text = dataArr[i].ProductID + " ：" + dataArr[i].ProductName+ " ：" + dataArr[i].OldMat+ " ：" + dataArr[i].OldSpc;
                        youoption.id = "lifetime";
                        youoption.name = "lifetime";
                        youoption.value = dataArr[i].ProductID+ "##" + dataArr[i].ProductName + "##" + dataArr[i].OldMat + "##" + dataArr[i].OldSpc;
                        $("#LifeValue").append(youoption);
                  }
            },
            error: function () {
            }
      })
}
function OldMateLook(OldMat) {
      let dataArr = [];
      var reportType = 'StarGate';
      var arrange = 'LookBom';
      var taskData = { "reportType": reportType, "arrange": arrange  , "OldMat": OldMat};
      $.ajax({
            method: 'post',
            data: taskData,
            url: "/app/TMBom/getRoute",
            success: function (data) {
                  dataArr = data;
                  for (var i = 0; i < dataArr.length; i++) {
                        var youoption = document.createElement("option");
                        youoption.text = dataArr[i].MaterialId;
                        youoption.id = "bellTime_" ;
                        youoption.name = "bellTime_"  ;
                        youoption.value =   dataArr[i].MaterialId;
                        $("#searchbox").append(youoption);
                  }

            },
            error: function () {
            }
      })
}
function CriteriaBasic9() {
      let dataArr = [];
      var reportType = 'StarGate';
      var arrange = 'Basic';
      var taskData = { "reportType": reportType, "arrange": arrange };
      $.ajax({
            method: 'post',
            data: taskData,
            url: "/app/TMBom/getRoute",
            success: function (data) {
                  dataArr = data;
                  for (var i = 0; i < dataArr.length; i++) {
                        var youoption = document.createElement("option");
                        youoption.text = dataArr[i].ProductID + " ：" + dataArr[i].ProductName + " ：" + dataArr[i].OldMat + " ：" + dataArr[i].OldSpc;
                        youoption.id = "lifetime";
                        youoption.name = "lifetime";
                        youoption.value = dataArr[i].ProductID+ "##" + dataArr[i].ProductName + "##" + dataArr[i].OldMat + "##" + dataArr[i].OldSpc;
                        $("#LifeValue").append(youoption);
                  }

            },
            error: function () {
            }
      })
}
function ReverseBasic9() {
      let dataArr = [];
      var reportType = 'StarGate';
      var arrange = 'ReveBasic';
      var taskData = { "reportType": reportType, "arrange": arrange };
      $.ajax({
            method: 'post',
            data: taskData,
            url: "/app/TMBom/getRoute",
            success: function (data) {
                  dataArr = data;
                  for (var i = 0; i < dataArr.length; i++) {
                        var youoption = document.createElement("option");
                        youoption.text = dataArr[i].ProductID + " 品名: " + dataArr[i].ProductName;
                        youoption.id = "lifetime";
                        youoption.name = "lifetime";
                        youoption.value = dataArr[i].ProductID+ "##" + dataArr[i].ProductName;
                        $("#LifeValue").append(youoption);
                  }

            },
            error: function () {
            }
      })
}
function CriteriaBasic() {
      let dataArr = [];
      var reportType = 'StarCate';
      var arrange = 'Basic';
      var taskData = { "reportType": reportType, "arrange": arrange };
      $.ajax({
            method: 'post',
            data: taskData,
            url: "/app/TMBom/getRoute",
            success: function (data) {
                  dataArr = data;
                  for (var i = 0; i < dataArr.length; i++) {
                        var youoption = document.createElement("option");
                        youoption.text = dataArr[i].ProductID + " 品名: " + dataArr[i].ProductName;
                        youoption.id = "lifetime";
                        youoption.name = "lifetime";
                        youoption.value = dataArr[i].ProductID+ "##" + dataArr[i].ProductName;
                        $("#OnlyValue").append(youoption);
                  }

            },
            error: function () {
            }
      })
}

function CriteriaAdv(prodID , prodNM  ){
      let dataArr = [];
      var reportType = 'StarCate';
      var arrange = 'Adv';
      var taskData = { "reportType": reportType, "arrange": arrange , "prodID": prodID , "prodNM": prodNM  };
      $.ajax({
            method: 'post',
            data: taskData,
            url: "/app/TMBom/getRoute",
            success: function (data) {
                  dataArr = data;
                  $("#OnlyValue").val(); $("#OnlyValue").html("");
                  for (var i = 0; i < dataArr.length; i++) {
                        var youoption = document.createElement("option");
                        youoption.text = dataArr[i].ProductID + " 品名: " + dataArr[i].ProductName;
                        youoption.id = "lifetime";
                        youoption.name = "lifetime";
                        youoption.value = dataArr[i].ProductID+ "##" + dataArr[i].ProductName;
                        $("#OnlyValue").append(youoption);
                  }
            },
            error: function () {
            }
      })
}

function ReverseAdv9(prodID , prodNM  ){
      let dataArr = [];
      var reportType = 'StarGate';
      var arrange = 'ReveAdv';
      var taskData = { "reportType": reportType, "arrange": arrange , "prodID": prodID , "prodNM": prodNM  };
      $.ajax({
            method: 'post',
            data: taskData,
            url: "/app/TMBom/getRoute",
            success: function (data) {
                  dataArr = data;
                  $("#LifeValue").val(); $("#LifeValue").html("");
                  for (var i = 0; i < dataArr.length; i++) {
                        var youoption = document.createElement("option");
                        youoption.text = dataArr[i].ProductID + " 品名: " + dataArr[i].ProductName;
                        youoption.id = "lifetime";
                        youoption.name = "lifetime";
                        youoption.value = dataArr[i].ProductID+ "##" + dataArr[i].ProductName;
                        $("#LifeValue").append(youoption);
                  }
            },
            error: function () {
            }
      })
}

function getPull() {
      var youoption = document.createElement("option");
      youoption.id = "Pattern";
      youoption.name = "Pattern";
      youoption.text = "旧编码";
      youoption.value = "1";
      $("#Pattern").append(youoption);
      youoption = document.createElement("option");
      youoption.text = "新编码";
      youoption.value = "3";
      $("#Pattern").append(youoption);
      youoption = document.createElement("option");
      youoption.id = "Outsourcing";
      youoption.name = "Outsourcing";
      youoption.text = "廠内";
      youoption.value = "0";
      $("#OutSour").append(youoption);
      youoption = document.createElement("option");
      youoption.text = "委外";
      youoption.value = "1";
      $("#OutSour").append(youoption);

      // youoption.text = "预设";
      // youoption.value = "0";
} 