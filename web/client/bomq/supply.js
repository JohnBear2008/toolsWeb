function getPullMode() {
      var youoption = document.createElement("option");
      youoption.id = "Pattern";
      youoption.name = "Pattern";
      youoption.text = "旧编码精简";
      youoption.value = "1";
      $("#Pattern").append(youoption);
      youoption = document.createElement("option");
      youoption.text = "旧编码完整";
      youoption.value = "2";
      $("#Pattern").append(youoption);
      youoption = document.createElement("option");
      youoption.text = "新编码精简";
      youoption.value = "3";
      youoption.selected = "selected";
      $("#Pattern").append(youoption);
      youoption = document.createElement("option");
      youoption.text = "新编码完整";
      youoption.value = "4";
      $("#Pattern").append(youoption);
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
function getUpPull() {
      var youoption = document.createElement("option");
      youoption.id = "PicKind";
      youoption.name = "PicKind";
      youoption.text = "规格图";
      youoption.value = "1";
      $("#PicKind").append(youoption);
      youoption = document.createElement("option");
      youoption.text = "位置图";
      youoption.value = "2";
      $("#PicKind").append(youoption);
}
function CriteriaBasic9() {
      let dataArr = [];
      var reportType = 'StarGate';
      var arrange = 'Basic';
      var taskData = { "reportType": reportType, "arrange": arrange };
      $.ajax({
            method: 'post',
            data: taskData,
            url: "/app/TMErp/getRoute",
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
function ReverseBasic9() {
      let dataArr = [];
      var reportType = 'StarGate';
      var arrange = 'ReveBasic';
      var taskData = { "reportType": reportType, "arrange": arrange };
      $.ajax({
            method: 'post',
            data: taskData,
            url: "/app/TMErp/getRoute",
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
      var reportType = 'StarGate';
      var arrange = 'Basic';
      var taskData = { "reportType": reportType, "arrange": arrange };
      $.ajax({
            method: 'post',
            data: taskData,
            url: "/app/TMErp/getRoute",
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

function CriteriaAdv(prodID , prodNM  ){
      let dataArr = [];
      var reportType = 'StarCate';
      var arrange = 'Adv';
      var taskData = { "reportType": reportType, "arrange": arrange , "prodID": prodID , "prodNM": prodNM  };
      $.ajax({
            method: 'post',
            data: taskData,
            url: "/app/TMErp/getRoute",
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

function ReverseAdv9(prodID , prodNM  ){
      let dataArr = [];
      var reportType = 'StarGate';
      var arrange = 'ReveAdv';
      var taskData = { "reportType": reportType, "arrange": arrange , "prodID": prodID , "prodNM": prodNM  };
      $.ajax({
            method: 'post',
            data: taskData,
            url: "/app/TMErp/getRoute",
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
function CriteriaAdv9(prodID , prodNM  ){
      let dataArr = [];
      var reportType = 'StarGate';
      var arrange = 'Adv';
      var taskData = { "reportType": reportType, "arrange": arrange , "prodID": prodID , "prodNM": prodNM  };
      $.ajax({
            method: 'post',
            data: taskData,
            url: "/app/TMErp/getRoute",
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
