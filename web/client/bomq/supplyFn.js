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
                        // var youoption_2 = document.createElement("option"); youoption_2.text = dataArr[i].Sub_Prime + "-" + dataArr[i].Sub_Secon;
                        // youoption_2.id = "bellTime"; youoption_2.name = "bellTime"; youoption_2.value = dataArr[i].Sub_CID+ "##" + dataArr[i].Sub_Secon;
                        // $("#BudgetItem_2").append(youoption_2);
                        // var youoption_3 = document.createElement("option"); youoption_3.text = dataArr[i].Sub_Prime + "-" + dataArr[i].Sub_Secon;
                        // youoption_3.id = "bellTime"; youoption_3.name = "bellTime"; youoption_3.value = dataArr[i].Sub_CID+ "##" + dataArr[i].Sub_Secon;
                        // $("#BudgetItem_3").append(youoption_3);
                        // var youoption_4 = document.createElement("option"); youoption_4.text = dataArr[i].Sub_Prime + "-" + dataArr[i].Sub_Secon;
                        // youoption_4.id = "bellTime"; youoption_4.name = "bellTime"; youoption_4.value = dataArr[i].Sub_CID+ "##" + dataArr[i].Sub_Secon;
                        // $("#BudgetItem_4").append(youoption_4);
                        // var youoption_5 = document.createElement("option"); youoption_5.text = dataArr[i].Sub_Prime + "-" + dataArr[i].Sub_Secon;
                        // youoption_5.id = "bellTime"; youoption_5.name = "bellTime"; youoption_5.value = dataArr[i].Sub_CID+ "##" + dataArr[i].Sub_Secon;
                        // $("#BudgetItem_5").append(youoption_5);
                        // var youoption_6 = document.createElement("option"); youoption_6.text = dataArr[i].Sub_Prime + "-" + dataArr[i].Sub_Secon;
                        // youoption_6.id = "bellTime"; youoption_6.name = "bellTime"; youoption_6.value = dataArr[i].Sub_CID+ "##" + dataArr[i].Sub_Secon;
                        // $("#BudgetItem_6").append(youoption_6);
                        // var youoption_7 = document.createElement("option"); youoption_7.text = dataArr[i].Sub_Prime + "-" + dataArr[i].Sub_Secon;
                        // youoption_7.id = "bellTime"; youoption_7.name = "bellTime"; youoption_7.value = dataArr[i].Sub_CID+ "##" + dataArr[i].Sub_Secon;
                        // $("#BudgetItem_7").append(youoption_7);
                        // var youoption_8 = document.createElement("option"); youoption_8.text = dataArr[i].Sub_Prime + "-" + dataArr[i].Sub_Secon;
                        // youoption_8.id = "bellTime"; youoption_8.name = "bellTime"; youoption_8.value = dataArr[i].Sub_CID+ "##" + dataArr[i].Sub_Secon;
                        // $("#BudgetItem_8").append(youoption_8);
                        // var youoption_9 = document.createElement("option"); youoption_9.text = dataArr[i].Sub_Prime + "-" + dataArr[i].Sub_Secon;
                        // youoption_9.id = "bellTime"; youoption_9.name = "bellTime"; youoption_9.value = dataArr[i].Sub_CID+ "##" + dataArr[i].Sub_Secon;
                        // $("#BudgetItem_9").append(youoption_9);
                        // var youoption_10 = document.createElement("option"); youoption_10.text = dataArr[i].Sub_Prime + "-" + dataArr[i].Sub_Secon;
                        // youoption_10.id = "bellTime"; youoption_10.name = "bellTime"; youoption_10.value = dataArr[i].Sub_CID+ "##" + dataArr[i].Sub_Secon;
                        // $("#BudgetItem_10").append(youoption_10);
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