function CaculateAdv9(prodID, prodNM) {
      let dataArr = [];
      var reportType = 'StarGate';
      var arrange = 'Caculate';
      var taskData = { "reportType": reportType, "arrange": arrange, "prodID": prodID, "prodNM": prodNM };
      $.ajax({
            method: 'post',
            data: taskData,
            url: "/app/TMErp/getRoute",
            success: function (data) {
                  dataArr = data;
                  $("#LifeValue").val(); $("#LifeValue").html("");
                  for (var i = 0; i < dataArr.length; i++) {
                        var youoption = document.createElement("option");
                        youoption.text = dataArr[i].ProductID + " 规格: " + dataArr[i].ProductName;
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
function CaculateBasic() {
      let dataArr = [];
      var reportType = 'StarGate';
      var arrange = 'CacuBasic';
      var taskData = { "reportType": reportType, "arrange": arrange };
      $.ajax({
            method: 'post',
            data: taskData,
            url: "/app/TMErp/getRoute",
            success: function (data) {
                  dataArr = data;
                  for (var i = 0; i < dataArr.length; i++) {
                        var youoption = document.createElement("option");
                        youoption.text = dataArr[i].ProductID + " 规格 : " + dataArr[i].ProductName;
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
function FlowerBase() {
      for (var i = 1; i < 11; i++) {
            var youoption = document.createElement("option");
            youoption.text =  "是" ;
            youoption.id = "Underburget"+i;
            youoption.name = "Underburget"+i;
            youoption.value = "是" ;
            $("#Underburget_"+i).append(youoption);
            var youoption = document.createElement("option");
            youoption.text =  "否" ;
            youoption.id = "Underburget"+i;
            youoption.name = "Underburget"+i;
            youoption.value = "否" ;
            $("#Underburget_"+i).append(youoption);
      }
      for (var i = 1; i < 11; i++) {
            var youoption = document.createElement("option");
            youoption.text =  "新增" ;
            youoption.id = "AppendType"+i;
            youoption.name = "AppendType"+i;
            youoption.value = "新增" ;
            $("#AppendType_"+i).append(youoption);
            var youoption = document.createElement("option");
            youoption.text =  "换新" ;
            youoption.id = "AppendType"+i;
            youoption.name = "AppendType"+i;
            youoption.value = "换新" ;
            $("#AppendType_"+i).append(youoption);
            var youoption = document.createElement("option");
            youoption.text =  "补遗" ;
            youoption.id = "AppendType"+i;
            youoption.name = "AppendType"+i;
            youoption.value = "补遗" ;
            $("#AppendType_"+i).append(youoption);
      }
}
function FlowerBasic() {
      //applyPage
      let dataArr = [];
      var reportType = 'ironSubject';
      var arrange = 'itemBasic';
      var taskData = { "reportType": reportType, "arrange": arrange };
      $.ajax({
            method: 'post',
            data: taskData,
            url: "/app/TMFinc/getRoute",
            success: function (data) {
                  dataArr = data;
                  // console.log("高瑛欣",JSON.stringify(dataArr));
                  for (var i = 0; i < dataArr.length; i++) {
                        var youoption = document.createElement("option");
                        youoption.text = dataArr[i].Sub_Prime + "-" + dataArr[i].Sub_Secon;
                        youoption.id = "bellTime";
                        youoption.name = "bellTime";
                        youoption.value = dataArr[i].Sub_CID+ "##" + dataArr[i].Sub_Secon;
                        $("#BudgetItem_1").append(youoption);
                  }

            },
            error: function () {
            }
      })
}
function FlowerMoney(SNtxt , BType) {
      //applyPage
      let dataArr = [];
      var reportType = 'StarGate';
      var arrange = 'CacuBasic';
      var taskData = { "reportType": reportType, "arrange": arrange , "BudgetType": BType };
      $.ajax({
            method: 'post',
            data: taskData,
            url: "/app/TMErp/getRoute",
            success: function (data) {
                  dataArr = data;
                  for (var i = 0; i < dataArr.length; i++) {
                        $("#Bunny_"+SNtxt).html(dataArr[0].ProductID);  $("#Bunny_"+SNtxt).val(dataArr[0].ProductID);
                  }
            },
            error: function () {
            }
      })
}
function getpull() {
      var youoption = document.createElement("option");
      youoption.id = "Pattern";
      youoption.name = "Pattern";
      youoption.text = "审批";
      youoption.value = "P";
      $("#Pattern").append(youoption);
      youoption = document.createElement("option");
      youoption.text = "核准";
      youoption.value = "Q";
      $("#Pattern").append(youoption);
      youoption = document.createElement("option");
      youoption.text = "退回";
      youoption.value = "R";
      $("#Pattern").append(youoption);
      youoption = document.createElement("option");
      youoption.text = "保存";
      youoption.value = "K";
      $("#Pattern").append(youoption);
      youoption = document.createElement("option");
      youoption.text = "送出";
      youoption.value = "D";
      $("#Pattern").append(youoption);
      youoption = document.createElement("option");
      youoption.text = "作废";
      youoption.value = "F";
      $("#Pattern").append(youoption);
}