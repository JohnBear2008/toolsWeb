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
            youoption.text = "是";
            youoption.id = "Underburget" + i;
            youoption.name = "Underburget" + i;
            youoption.value = "是";
            $("#Underburget_" + i).append(youoption);
            var youoption = document.createElement("option");
            youoption.text = "否";
            youoption.id = "Underburget" + i;
            youoption.name = "Underburget" + i;
            youoption.value = "否";
            $("#Underburget_" + i).append(youoption);
      }
      for (var i = 1; i < 11; i++) {
            var youoption = document.createElement("option");
            youoption.text = "新增";
            youoption.id = "AppendType" + i;
            youoption.name = "AppendType" + i;
            youoption.value = "新增";
            $("#AppendType_" + i).append(youoption);
            var youoption = document.createElement("option");
            youoption.text = "换新";
            youoption.id = "AppendType" + i;
            youoption.name = "AppendType" + i;
            youoption.value = "换新";
            $("#AppendType_" + i).append(youoption);
            var youoption = document.createElement("option");
            youoption.text = "补遗";
            youoption.id = "AppendType" + i;
            youoption.name = "AppendType" + i;
            youoption.value = "补遗";
            $("#AppendType_" + i).append(youoption);
      }
}
function FlowerBasic() {
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
                  for (var ki = 1; ki <= 10; ki++) {
                        var youoption = document.createElement("option");
                        youoption.text = "---";
                        youoption.id = "bellTime" + ki;
                        youoption.name = "bellTime" + ki;
                        youoption.value = '---';
                        $("#BudgetCombo_" + ki).append(youoption);
                        for (var i = 0; i < dataArr.length; i++) {
                              var youoption = document.createElement("option");
                              youoption.text = dataArr[i].Sub_Prime + "-" + dataArr[i].Sub_Secon;
                              youoption.id = "bellTime_" + ki;
                              youoption.name = "bellTime_" + ki;
                              youoption.value =  dataArr[i].Sub_Prime + "-" + dataArr[i].Sub_Secon+ "-" + dataArr[i].Sub_CID ;
                              // console.log("子弹飞",dataArr[i].Sub_Prime + "-" + dataArr[i].Sub_Secon+ "-" + dataArr[i].Sub_CID );
                              $("#BudgetCombo_" + ki).append(youoption);
                        }
                  }
            },
            error: function () {
            }
      })
}
function EdgeBasic() {//use by edge ,has problem
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
                  for (var ki = 1; ki <= 10; ki++) {
                        var youoption = document.createElement("option");
                        youoption.text = "---";
                        youoption.id = "bellTime" + ki;
                        youoption.name = "bellTime" + ki;
                        youoption.value = '---';
                        $("#searchbox_" + ki).append(youoption);
                        for (var i = 0; i < dataArr.length; i++) {
                              var youoption = document.createElement("option");
                              youoption.text = dataArr[i].Sub_Prime + "-" + dataArr[i].Sub_Secon;
                              youoption.id = "bellTime_" + ki;
                              youoption.name = "bellTime_" + ki;
                              youoption.value =  dataArr[i].Sub_Prime + "-" + dataArr[i].Sub_Secon+ "-" + dataArr[i].Sub_CID ;
                              $("#searchbox_" + ki).append(youoption);
                        }
                  }
            },
            error: function () {
            }
      })
}
function FlowerMoney(SNtxt, BType) {
      //applyPage
      let dataArr = [];
      var reportType = 'StarGate';
      var arrange = 'CacuBasic';
      var taskData = { "reportType": reportType, "arrange": arrange, "BudgetType": BType };
      $.ajax({
            method: 'post',
            data: taskData,
            url: "/app/TMErp/getRoute",
            success: function (data) {
                  dataArr = data;
                  for (var i = 0; i < dataArr.length; i++) {
                        $("#Bunny_" + SNtxt).html(dataArr[0].ProductID); $("#Bunny_" + SNtxt).val(dataArr[0].ProductID);
                  }
            },
            error: function () {
            }
      })
}
function getpull() {
      var youoption = document.createElement("option");
      youoption.id = "Pattern";
      youoption.text = "---";
      youoption.value = "";
      $("#Pattern").append(youoption);
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
function getPhase() {
      var youoption = document.createElement("option");
      youoption.id = "BuyCombo";
      youoption.name = "BuyCombo";
      youoption.text = "系统";
      youoption.value = "系统";
      $("#BuyCombo").append(youoption);
      youoption = document.createElement("option");
      youoption.text = "采购承办人";
      youoption.value = "采购承办人";
      $("#BuyCombo").append(youoption);
      youoption = document.createElement("option");
      youoption.text = "资讯承办人";
      youoption.value = "资讯承办人";
      $("#BuyCombo").append(youoption);
      youoption = document.createElement("option");
      youoption.text = "行政承办人";
      youoption.value = "行政承办人";
      $("#BuyCombo").append(youoption);
      youoption = document.createElement("option");
      youoption.text = "不加采购";
      youoption.value = "不加采购";
      $("#BuyCombo").append(youoption);
      
}
function getDrop() {
      var youoption = document.createElement("option");
      youoption.id = "CapMode";
      youoption.name = "CapMode";
      youoption.text = "采购";
      youoption.value = "A";
      $("#CapMode").append(youoption);
      youoption = document.createElement("option");
      youoption.text = "出差";
      youoption.value = "B";
      $("#CapMode").append(youoption);
}
function getDinner() {
      var youoption = document.createElement("option");
      youoption.id = "DinnerChoice";
      youoption.name = "DinnerChoice";
      youoption.text = "国内";
      youoption.value = "国内";
      $("#DinnerChoice").append(youoption);
      youoption = document.createElement("option");
      youoption.text = "国外-印度";
      youoption.value = "国外-印度";
      $("#DinnerChoice").append(youoption);
      youoption = document.createElement("option");
      youoption.text = "国外-巴西";
      youoption.value = "国外-巴西";
      $("#DinnerChoice").append(youoption);
      youoption = document.createElement("option");
      youoption.text = "国外-伊朗";
      youoption.value = "国外-伊朗";
      $("#DinnerChoice").append(youoption);
      youoption = document.createElement("option");
      youoption.text = "国外-马来西亚";
      youoption.value = "国外-马来西亚";
      $("#DinnerChoice").append(youoption);
      youoption = document.createElement("option");
      youoption.text = "国外-其他";
      youoption.value = "国外-其他";
      $("#DinnerChoice").append(youoption);
}
function getRoom() {
      var youoption = document.createElement("option");
      youoption.id = "RoomChoice";
      youoption.name = "RoomChoice";
      youoption.text = "普通员工-单人住宿";
      youoption.value = "普通员工-单人住宿";
      $("#RoomChoice").append(youoption);
      youoption = document.createElement("option");
      youoption.text = "普通员工-两人同住";
      youoption.value = "普通员工-两人同住";
      $("#RoomChoice").append(youoption);
      youoption = document.createElement("option");
      youoption.text = "组长以上-单人住宿";
      youoption.value = "组长以上-单人住宿";
      $("#RoomChoice").append(youoption);
      youoption = document.createElement("option");
      youoption.text = "组长以上-两人同住";
      youoption.value = "组长以上-两人同住";
      $("#RoomChoice").append(youoption);
      youoption = document.createElement("option");
      youoption.text = "副经理以上-单人住宿";
      youoption.value = "副经理以上-单人住宿";
      $("#RoomChoice").append(youoption);
      youoption = document.createElement("option");
      youoption.text = "副经理以上-两人同住";
      youoption.value = "副经理以上-两人同住";
      $("#RoomChoice").append(youoption);
}
function UnitPlay() {
      var UnitCombo = $('#UnitCombo').val();
      $("#hideUnit").val(UnitCombo);
      console.log("枪尖", UnitCombo);
      for (let i = 1; i <= 10; i++) {
            //edgeuse
            // $("#BudgetCombo_" + i).val('');
            // $("#BudgetCombo_" + i).html('');
            var dropText = "---";
            $("#BudgetCombo_" + (i) + " option[value=" + dropText + "]").prop('selected', true);
      }
      $("#OppName").val('');  $("#OppName").html('');
      $("#MagName").val('');  $("#MagName").html('');
      $("#VipName").val('');  $("#VipName").html('');
      $("#PurName").val('');  $("#PurName").html('');
      $("#PexName").val('');  $("#PexName").html('');
      $("#CfoName").val('');  $("#CfoName").html('');
      $("#PsdName").val('');  $("#PsdName").html('');
      $("#CeoName").val('');  $("#CeoName").html('');
      $("#BodName").val('');  $("#BodName").html('');
      $("#OppName").val('');  $("#OppName").html('');  
}
function RolePlay() {
      var DeptShow = '';
      var GroupShow = '';
      var GroupCombo = $('#GroupCombo').val();
      $("#GroupName").val(GroupCombo);
      let PropList = [];
      if (GroupCombo != "" && GroupCombo != undefined) {
            PropList = GroupCombo.split('-');
            for (var ki = 0; ki < PropList.length; ki++) {
                  DeptShow = PropList[0];
                  GroupShow = PropList[1];
            }
      }
      for (let i = 1; i <= 10; i++) {
             //edgeuse
            // $("#BudgetCombo_" + i).val('');
            // $("#BudgetCombo_" + i).html('');
            var dropText = "---";
            $("#BudgetCombo_" + (i) + " option[value=" + dropText + "]").prop('selected', true);
      }
      $("#OppName").val('');  $("#OppName").html('');
      $("#MagName").val('');  $("#MagName").html('');
      $("#VipName").val('');  $("#VipName").html('');
      $("#PurName").val('');  $("#PurName").html('');
      $("#PexName").val('');  $("#PexName").html('');
      $("#CfoName").val('');  $("#CfoName").html('');
      $("#PsdName").val('');  $("#PsdName").html('');
      $("#CeoName").val('');  $("#CeoName").html('');
      $("#BodName").val('');  $("#BodName").html('');
      $("#OppName").val('');  $("#OppName").html('');
}
function obtLogUnit(loginName) {
      let dataArr = [];
      var reportType = 'ironSubject';
      var arrange = 'LinkUnit';
      var taskData = { "reportType": reportType, "arrange": arrange, "loginName": loginName };
      $.ajax({
            method: 'post',
            data: taskData,
            url: "/app/TMFinc/getRoute",
            success: function (data) {
                  dataArr = data;
                  $("#UnitCombo").val(); $("#UnitCombo").html("");
                  for (var i = 0; i < dataArr.length; i++) {
                        var sessUnit = dataArr[i].DeptName;
                        var myUnit = dataArr[i].DeptLabel;
                        if (sessUnit != "" && sessUnit != undefined) {
                              var youoption = document.createElement("option");
                              youoption.text = sessUnit;
                              youoption.id = "citytime";
                              youoption.name = "citytime";
                              youoption.value = sessUnit;
                              if (youoption.text == myUnit) {
                                    console.log("王者", sessUnit, "不可阻", myUnit);
                                    youoption.selected = "selected";
                                    $("#hideUnit").val(sessUnit);
                              }
                              $("#UnitCombo").append(youoption);
                        }
                  }
                 
            },
            error: function () {
            }
      })
}
function obtLogGroup(loginName) {
      let dataArr = [];
      var reportType = 'ironSubject';
      var arrange = 'LinkDept';
      var taskData = { "reportType": reportType, "arrange": arrange, "loginName": loginName };
      $.ajax({
            method: 'post',
            data: taskData,
            url: "/app/TMFinc/getRoute",
            success: function (data) {
                  dataArr = data;
                  console.log("早餐",dataArr);
                  if (dataArr.length > 0) {
                        $("#GroupCombo").val(); $("#GroupCombo").html("");
                        for (var i = 0; i < dataArr.length; i++) {
                              var sessDept = dataArr[i].DeptLabel;
                              var qryGroup = dataArr[i].GroupLabel;
                              let GroupList = [];
                              if (qryGroup != "" && qryGroup != undefined) {
                                    console.log("男子汉", qryGroup );
                                    GroupList = qryGroup.split(',');
                                  
                                    for (var ki = 0; ki < GroupList.length; ki++) {
                                          var youoption = document.createElement("option");
                                          youoption.text = GroupList[ki];
                                          youoption.id = "kisstime";
                                          youoption.name = "kisstime";
                                          youoption.value = GroupList[ki];
                                          if (ki==0) {
                                                youoption.selected = "selected";
                                          }
                                          $("#GroupCombo").append(youoption);
                                          $("#GroupName").val(GroupList[0]);
                                    }
                              }
                        }
                        var sessRole = dataArr[0].StaffRole;
                        var Mobiles = dataArr[0].Mobiles;
                        var Group = dataArr[0].GroupLabel;
                        var Orig = dataArr[0].OrigLabel;
                        console.log("大丈夫", Orig, "小女子", sessRole );
                  }
                  $("#hideDeptName").val(sessDept);
                  $("#hideFlowRole").val(sessRole);
                  $("#hidePhone").val(Mobiles);
                  $("#MicroOrig").val(Orig);
                  $("#MicroGroup").val(Group);
                  $("#hideOrig").val(Orig); 
            },
            error: function () {
            }
      })
}
function obtHisGroup(loginName) {
      let dataArr = [];
      var reportType = 'ironSubject';
      var arrange = 'LinkHisDept';
      var taskData = { "reportType": reportType, "arrange": arrange, "loginName": loginName };
      $.ajax({
            method: 'post',
            data: taskData,
            url: "/app/TMFinc/getRoute",
            success: function (data) {
                  dataArr = data;
                  console.log("早餐",dataArr);
                  if (dataArr.length > 0) {
                        $("#GroupCombo").val(); $("#GroupCombo").html("");
                        for (var i = 0; i < dataArr.length; i++) {
                              var sessDept = dataArr[i].DeptLabel;
                              var qryGroup = dataArr[i].GroupLabel;
                              let GroupList = [];
                              if (qryGroup != "" && qryGroup != undefined) {
                                    console.log("男子汉", qryGroup );
                                    GroupList = qryGroup.split(',');
                                  
                                    for (var ki = 0; ki < GroupList.length; ki++) {
                                          var youoption = document.createElement("option");
                                          youoption.text = GroupList[ki];
                                          youoption.id = "kisstime";
                                          youoption.name = "kisstime";
                                          youoption.value = GroupList[ki];
                                          if (ki==0) {
                                                youoption.selected = "selected";
                                          }
                                          $("#GroupCombo").append(youoption);
                                          $("#GroupName").val(GroupList[0]);
                                    }
                              }
                        }
                        var sessRole = dataArr[0].StaffRole;
                        var Mobiles = dataArr[0].Mobiles;
                        var Group = dataArr[0].GroupLabel;
                        var Orig = dataArr[0].OrigLabel;
                        console.log("大丈夫", Orig, "小女子", sessRole );
                  }
                  $("#hideDeptName").val(sessDept);
                  $("#hideFlowRole").val(sessRole);
                  $("#hidePhone").val(Mobiles);
                  $("#MicroOrig").val(Orig);
                  $("#MicroGroup").val(Group); 
            },
            error: function () {
            }
      })
}
function obtCurText(BillNo) {
      let dataArr = [];
      var reportType = 'ironSubject';
      var arrange = 'LinkCurText';
      var taskData = { "reportType": reportType, "arrange": arrange, "BillNo": BillNo };
      $.ajax({
            method: 'post',
            data: taskData,
            url: "/app/TMFinc/getRoute",
            success: function (data) {
                  dataArr = data;
                  if (dataArr.length > 0) {
                        var CurText = dataArr[0].CurText;
                        if (CurText == '核准' || CurText == '结算') {
                              shiftCaseA(BillNo);
                        } else {
                              layer.alert("表单状态不对，不可结算");
                        }
                  }
            },
            error: function () {
            }
      })
}