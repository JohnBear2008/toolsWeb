function inputCheckFee(obj, errItem) {
      var ret = true;
      if (obj != null && obj.length > 0) {

      } else {
            layer.alert(errItem + "為空");
            return false;
      }
      if (obj.length > 20) {
            layer.alert(errItem + "太长")
            return false;
      }

      if (isNaN(parseFloat(obj))) {
            ret = false;
      } else {

      }
      return ret;

}
function MacPurch(nowIDX) {
      CapAlert = '0';
      var parval = parseInt(nowIDX, 10);
      var BudgetCombo = $('#BudgetCombo_' + parval).val();
      var Subtotal = $('#Subtotal_' + parval).val();
      var DeptName = $('#hideDeptName').val();
      var UnitName = $('#hideUnit').val();
      var GroupName = $('#GroupName').val();
      var FlowBuy = $('#BuyCombo').val();
      console.log("宇宙", FlowBuy , "铁骑", GroupName);
      let DepList = [];
      if (GroupName != "" && GroupName != undefined) {
            DepList = GroupName.split('-');
            for (var ki = 0; ki < DepList.length; ki++) {
                  DeptName = DepList[0];
                  console.log( "酷斯拉", DeptName);
            }
      }
      var BudgetCID = '';
      var Subject = '';
      var BudgetItem = '';
      let PropList = [];
      if (BudgetCombo != "" && BudgetCombo != undefined) {
            PropList = BudgetCombo.split('-');
            for (var ki = 0; ki < PropList.length; ki++) {
                  BudgetCID = PropList[2];
                  BudgetItem = PropList[1];
            }
      }
      if (nowIDX == '' + parval) {
            if (BudgetCombo != "" && BudgetCombo != undefined) {
                  PropList = BudgetCombo.split('-');
                  for (var ki = 0; ki < PropList.length; ki++) {
                        Subject = PropList[0];
                  }
            }
      }
      if (Subject == '研发投入') {
            $('#PrjFilter').window('open');
            let dataArr = [];
            var reportType = 'EngLook';
            var arrange = 'findEng';
            var taskData = { "reportType": reportType, "arrange": arrange };
            $.ajax({
                  method: 'post',
                  data: taskData,
                  url: "/app/TMFinc/getRoute",
                  success: function (data) {
                        dataArr = data;
                        $("#ProjCombo").val(""); $("#ProjCombo").html("");
                        for (var i = 0; i < dataArr.length; i++) {
                              var youoption = document.createElement("option");
                              youoption.text = dataArr[i].PrjLabel;
                              youoption.id = "PrjMode";
                              youoption.name = "PrjMode";
                              youoption.value = dataArr[i].PrjLabel;
                              $("#ProjCombo").append(youoption);
                        }
                  },
                  error: function () {
                  }
            })
      }
      var reportType = 'AcquireChain';
      var oppOID = sessionOID;
      var OppName = sessionName;
      var arrange = 'RulePurch';
      var taskData = {
            "reportType": reportType, "arrange": arrange, "BudgetCID": BudgetCID, "BudgetItem": BudgetItem,
            "Subtotal": Subtotal, "UnitName": UnitName, "DeptName": DeptName, "GroupName": GroupName,
            "FlowBuy": FlowBuy, "oppOID": oppOID, "OppName": OppName
      }
      console.log("美貌美貌", taskData );
      if (BudgetCID != undefined && BudgetCID != "") {

      } else {
            return;
      }
      $.ajax({
            method: 'post',
            data: taskData,
            url: "/app/TMFinc/getRoute",
            success: function (data) {
                  if (data[0] != null && data[0] != undefined) {
                        $("#OppName").val(data[0].OppName);
                        $("#MagName").val(data[0].MagName);
                        $("#VipName").val(data[0].VipName);
                        $("#PurName").val(data[0].PurName);
                        $("#PexName").val(data[0].PexName);
                        $("#CfoName").val(data[0].CfoName);
                        $("#PsdName").val(data[0].PsdName);
                        $("#Remain_" + (parval)).val(data[0].Surplus);
                        if (data[0].BossOver == 'Y') {
                              CapBossOver = 'Y';
                              CeoName = data[0].CeoName;
                              BodName = data[0].BodName;
                              // $("#CeoName").val(data[0].CeoName);
                              // $("#BodName").val(data[0].BodName);
                              console.log("有项目超标了", CapBossOver);
                        } else {
                              CapBossOver = 'N';
                              // $("#CeoName").val('');
                              // $("#BodName").val('');
                        }
                        if (CapBossOver == 'Y') {
                              $("#CeoName").val(CeoName);
                              $("#BodName").val(BodName);
                        } else {
                              $("#CeoName").val('');
                              $("#BodName").val('');
                        }
                        $("#CreditA").val(data[0].CreditA);
                        $("#CreditB").val(data[0].CreditB);
                        $("#CreditC").val(data[0].CreditC);
                        $("#CreditD").val(data[0].CreditD);
                  }
            },
            error: function () {
            }
      })
      // }
}
//nouse
function winPurch() {
      CapAlert = '0';
      for (let i = 1; i <= 10; i++) {
            var BudgetCombo = $('#BudgetCombo_' + i).val();
            var Remain = $('#Remain_' + i).val();
            var DeptName = $('#hideDeptName').val();
            var UnitName = $('#hideUnit').val();
            var GroupName = $('#GroupName').val();
            console.log("岳飞", GroupName);
            // var BudgetCombo = $('#BudgetCombo_1').val();
            var BudgetCID = '';
            var Subject = '';
            var BudgetItem = '';
            let PropList = [];
            if (BudgetCombo != "" && BudgetCombo != undefined) {
                  // console.log("版本樹結構 B004-办公费-MIS费用 ",BudgetCombo);
                  console.log("张飞", BudgetCombo);
                  PropList = BudgetCombo.split('-');
                  for (var ki = 0; ki < PropList.length; ki++) {
                        Subject = PropList[0];
                        BudgetItem = PropList[1];
                        BudgetCID = PropList[2];
                  }
            }

            if (BudgetItem == '直接投入') {
                  $('#PrjFilter').window('open');
                  let dataArr = [];
                  var reportType = 'EngLook';
                  var arrange = 'findEng';
                  var taskData = { "reportType": reportType, "arrange": arrange };
                  $.ajax({
                        method: 'post',
                        data: taskData,
                        url: "/app/TMFinc/getRoute",
                        success: function (data) {
                              dataArr = data;
                              for (var i = 0; i < dataArr.length; i++) {
                                    var youoption = document.createElement("option");
                                    youoption.text = dataArr[i].PrjLabel;
                                    youoption.id = "PrjMode";
                                    youoption.name = "PrjMode";
                                    youoption.value = dataArr[i].PrjLabel;
                                    $("#ProjCombo").append(youoption);
                              }
                        },
                        error: function () {
                        }
                  })
            }
            if (BudgetCID != undefined && BudgetCID != "") {

            } else {
                  return;
            }
            var reportType = 'AcquireChain';
            var oppOID = sessionOID;
            var OppName = sessionName;
            var arrange = 'RulePurch';
            var taskData = {
                  "reportType": reportType, "arrange": arrange, "BudgetCID": BudgetCID, "BudgetItem": BudgetItem,
                  "UnitName": UnitName, "DeptName": DeptName, "GroupName": GroupName, "oppOID": oppOID, "OppName": OppName
            }
            console.log("夏洛特", taskData);
            $.ajax({
                  method: 'post',
                  data: taskData,
                  url: "/app/TMFinc/getRoute",
                  success: function (data) {
                        // console.log("彩香", JSON.stringify(data));
                        if (data[0] != null && data[0] != undefined) {
                              $("#OppName").val(data[0].OppName);
                              $("#MagName").val(data[0].MagName);
                              $("#VipName").val(data[0].VipName);
                              $("#PurName").val(data[0].PurName);
                              $("#PexName").val(data[0].PexName);
                              $("#CfoName").val(data[0].CfoName);
                              $("#PsdName").val(data[0].PsdName);
                              $("#CeoName").val(data[0].CeoName);
                              $("#BodName").val(data[0].BodName);
                              $("#Remain_" + (i)).val(data[0].Surplus);
                              $("#CreditA").val(data[0].CreditA);
                              $("#CreditB").val(data[0].CreditB);
                              $("#CreditC").val(data[0].CreditC);
                              $("#CreditD").val(data[0].CreditD);
                        }
                  },
                  error: function () {
                  }
            })
      }
}
function view_hmi(obj) {
      if (obj != undefined && obj != null) {
            var quantid = obj.id;
      }
      // console.log("张良",quantid );
      var sumTemp = '';
      for (let i = 1; i <= 10; i++) {
            var UnitPrice = $('#UnitPrice_' + i).val();
            var Quantity = $('#Quantity_' + i).val();
            var smallTOT = UnitPrice * Quantity;
            if (smallTOT != '0' && smallTOT != 'NaN' && smallTOT != undefined) {
                  smallTOT = parseFloat(smallTOT);
                  var digitsubTOT = smallTOT.toFixed(2);
                  $('#Subtotal_' + i).val(digitsubTOT);
            }
            if (smallTOT != '' && smallTOT != '0' && smallTOT != 'NaN' && smallTOT != undefined) {
                  var parval = parseFloat(smallTOT);
                  if (parval != 'NaN' && parval != undefined) {
                        sumTemp = parseFloat(sumTemp + parval);
                  }
            }
            console.log("爆甲", sumTemp);
      }
      var grandTOT = parseFloat(sumTemp);
      grandTOT = grandTOT.toFixed(2);
      $('#TotalValue').val(grandTOT);
      CapAlert = '0';
      var OverIdx = 0;
      for (let i = 1; i <= 10; i++) {
            var Remain = $('#Remain_' + i).val();
            var UnitPrice = $('#UnitPrice_' + i).val();
            var Quantity = $('#Quantity_' + i).val();
            var smallTOT = UnitPrice * Quantity;
            if (i == 1) {
                  var Apkdiff1 = Remain - smallTOT;
                  DiffMoney1 = Apkdiff1;
                  // console.log("公孙离 ", i, " -APk ", DiffMoney1);
            }
            if (i == 2) {
                  var Apkdiff2 = Remain - smallTOT;
                  DiffMoney2 = Apkdiff2;
                  // console.log("公孙离 ", i, " -APk ", DiffMoney2);
            }
            if (i == 3) {
                  var Apkdiff3 = Remain - smallTOT;
                  DiffMoney3 = Apkdiff3;
                  // console.log("公孙离 ", i, " -APk ", DiffMoney3);
            }
            if (i == 4) {
                  var Apkdiff4 = Remain - smallTOT;
                  DiffMoney4 = Apkdiff4;
                  // console.log("公孙离 ", i, " -APk ", DiffMoney4);
            }
            if (i == 5) {
                  var Apkdiff5 = Remain - smallTOT;
                  DiffMoney5 = Apkdiff5;
                  // console.log("公孙离 ", i, " -APk ", DiffMoney5);
            }
            if (i == 6) {
                  var Apkdiff6 = Remain - smallTOT;
                  DiffMoney6 = Apkdiff6;
                  // console.log("公孙离 ", i, " -APk ", DiffMoney6);
            }
            if (i == 7) {
                  var Apkdiff7 = Remain - smallTOT;
                  DiffMoney7 = Apkdiff7;
                  // console.log("公孙离 ", i, " -APk ", DiffMoney7);
            }
            if (i == 8) {
                  var Apkdiff8 = Remain - smallTOT;
                  DiffMoney8 = Apkdiff8;
                  // console.log("公孙离 ", i, " -APk ", DiffMoney8);
            }
            if (i == 9) {
                  var Apkdiff9 = Remain - smallTOT;
                  DiffMoney9 = Apkdiff9;
                  // console.log("公孙离 ", i, " -APk ", DiffMoney9);
            }
            if (i == 10) {
                  var Apkdiff10 = Remain - smallTOT;
                  DiffMoney10 = Apkdiff10;
                  // console.log("公孙离 ", i, " -APk ", DiffMoney10);
            }

            if (Remain == '0') {
                  CapAlert = '1';
                  // console.log("没了要提醒了", CapAlert);
            } else {
                  if (smallTOT > Remain) {
                        CapAlert = '1';
                        // console.log("超过了，也要提醒了", smallTOT, "你那位：", i);
                        OverIdx = i;
                  } else {
                        // console.log("免提QQ",Remain,"免提JJ",smallTOT);
                  }
            }
      }
      console.log("最新提醒值", CapBossOver);

}
function apply_hmi() {
      var DeptName = $('#hideDeptName').val();
      var OrigName = $('#hideOrig').val();
      var UnitName = $('#hideUnit').val();
      var GroupName = $('#GroupName').val();
      var FlowRole = $('#hideFlowRole').val();
      var ItemNo = $('#ItemNo_1').val();
      if (DeptName != null || DeptName != undefined) {

      } else {
            layer.alert("帐号没有文员角色，请设定!");
            return;
      }
      if (GroupName != null || GroupName != undefined) {

      } else {
            layer.alert("帐号没有文员角色，请设定!");
            return;
      }
      var StaffName = sessionName;
      var SendStatus = '1';
      var message = '';
      if (CapAlert == '1') {
            message = '部份项目预算已超过 ，请确认是否送出审批？';
      } else {
            message = '此单送出审批吗，请确认操作是否无误？';
      }
      layer.confirm(message, {
            btn: ['是', '否']
      }, function () {
            layer.msg('操作成功', { icon: 1 });
            var hideBillNo = $('#hideBillNo').val();
            var hidePhone = $('#hidePhone').val();
            var Basstr = {
                  "SendStatus": SendStatus, "hideBillNo": hideBillNo, "hidePhone": hidePhone, "edituse": edituse, "DeptName": DeptName,
                  "UnitName": UnitName, "OrigName": OrigName, "GroupName": GroupName, "StaffName": StaffName, "ItemNo": ItemNo, "FlowRole": FlowRole
            };
            var reportType = 'applyBudget';
            var arrange = 'confirm';
            var taskData = {
                  "reportType": reportType, "arrange": arrange, "Basstr": Basstr
            }
            $.ajax({
                  method: 'post',
                  data: taskData,
                  url: "/app/TMFinc/getRoute",
                  success: function (data) {
                        console.log("会好", JSON.stringify(data));
                        $("#hideBillNo").val('');
                        $("#hidePhone").val('');
                        // $("#hideUnit").val('');
                        if (data.status == 'Fail') {
                              layer.msg("讯息" + data.message);
                        } else if (data.status == 'OK') {
                              layer.confirm("申请文号" + data.BillNo + "已送出" + (data.status) + "\n讯息" + (data.message), {
                                    btn: ['知道了']
                              }, function () {
                                    layer.msg('操作成功', { icon: 1 });
                                    window.location.href = '/app/TMFinc/feeApplyForm';
                              });
                        }
                  },
                  error: function () {
                  }
            })
      }, function () {
            layer.msg('无操作', { icon: 1 });
      });
}
function save_hmi() {
      view_hmi();
      var oldStaffID = '';
      var oldStaffName = '';
      var oldDeptName = '';
      var oldGroupName = '';
      var SendStatus = '0';
      var hideBillNo = $('#hideBillNo').val();
      var ListNo = $('#ListNo').val();
      var RequestDate = $('#RequestDate').val();
      var ProjectNo = $('#ProjectNo').val();
      var ApplicNo = $('#ApplicNo').val();
      var OrigName = $('#hideOrig').val();
      var DeptName = $('#hideDeptName').val();
      var UnitName = $('#hideUnit').val();
      var GroupName = $('#GroupName').val();
      var FlowRole = $('#hideFlowRole').val();
      var FlowBuy = $('#BuyCombo').val();
      var StaffID = sessionOID;
      var StaffName = sessionName;
      var TotalValue = $('#TotalValue').val();
      var Currency = $('#Currency').val();
      var Payment = $('#Payment').val();
      var Explanation = $('#Explanation').val();
      var Advstr = {
            "SendStatus": SendStatus, "ListNo": ListNo, "RequestDate": RequestDate, "ProjectNo": ProjectNo, "ApplicNo": ApplicNo,
            "OrigName": OrigName, "DeptName": DeptName, "UnitName": UnitName, "GroupName": GroupName, "StaffID": StaffID, "StaffName": StaffName,
            "FlowRole": FlowRole,  "FlowBuy": FlowBuy, "TotalValue": TotalValue, "Currency": Currency,
            "Payment": Payment, "Explanation": Explanation, "hideBillNo": hideBillNo
      };
      for (let i = 1; i <= 10; i++) {
            var Remain = $('#Remain_' + i).val();
            if (Remain == '0') {
                  if (Explanation != null && Explanation != undefined && Explanation != '') {
                        // console.log("不知火舞", Remain);
                  } else {
                        console.log("大谋", Remain);
                        layer.alert("项目额度为0，请填写说明!");
                        return;
                  }
            } else {
                  // console.log("达摩", Remain);
            }
      }
      if (editmoney == 'U') {

      } else {
            if (DeptName != null || DeptName != undefined) {

            } else {
                  layer.alert("帐号没有文员角色，请设定!");
                  return;
            }
            if (GroupName != null || GroupName != undefined) {

            } else {
                  layer.alert("帐号没有文员角色，请设定!");
                  return;
            }
      }
      // console.log("不知火舞", Advstr);
      var SNNo = '1';
      var ItemNo = $('#ItemNo_1').val();
      var Descript = $('#Descript_1').val();
      var Unit = $('#Unit_1').val();
      var Remain = $('#Remain_1').val();
      var UnitPrice = $('#UnitPrice_1').val();
      var Quantity = $('#Quantity_1').val();
      var Subtotal = $('#Subtotal_1').val();
      var Delivery = $('#Delivery_1').val();
      var Supplier = $('#Supplier_1').val();
      var Underburget = $('#Underburget_1').val();
      var AppendType = $('#AppendType_1').val();
      var Department = $('#Department_1').val();
      let sData = [];
      let uData = [];
      for (let i = 1; i <= 10; i++) {
            var SNNo = '' + i;
            if (i == 1) {
                  var BudgetCombo_1 = $('#BudgetCombo_1').val();
                  var BudgetCID_1 = '';
                  var Subject_1 = '';
                  var BudgetItem_1 = '';
                  let PropList = [];
                  if (BudgetCombo_1 != "" && BudgetCombo_1 != undefined) {
                        PropList = BudgetCombo_1.split('-');
                        for (var ki = 0; ki < PropList.length; ki++) {
                              Subject_1 = PropList[0];
                              BudgetItem_1 = PropList[1];
                              BudgetCID_1 = PropList[2];
                        }
                  }
            }
            var BudgetCombo = $('#BudgetCombo_' + i).val();
            if (BudgetCombo != "" && BudgetCombo != undefined) {
                  var Remain = $('#Remain_' + i).val();
                  if (Remain != null && Remain != undefined && Remain != '') {
                        console.log("项目额度有的", Remain);
                  } else {
                        // layer.alert("项目额度无定义，无法保存!");
                        // return;
                  }
            }
            var BudgetCID = '';
            var Subject = '';
            var BudgetItem = '';
            let PropList = [];
            if (BudgetCombo != "" && BudgetCombo != undefined) {
                  PropList = BudgetCombo.split('-');
                  for (var ki = 0; ki < PropList.length; ki++) {
                        Subject = PropList[0];
                        BudgetItem = PropList[1];
                        BudgetCID = PropList[2];
                  }
            }
            var ItemNo = $('#ItemNo_' + i).val();
            if (ItemNo != null && ItemNo != undefined && ItemNo != '') {
                  console.log("品名", ItemNo);
                  if (ItemNo.length > 45) {
                        layer.alert("无法保存, 品名栏位请缩短!");
                        return;
                  }
            } else {
            }
            var Descript = $('#Descript_' + i).val();
            var Unit = $('#Unit_' + i).val();
            var Remain = $('#Remain_' + i).val();
            var UnitPrice = $('#UnitPrice_' + i).val();
            var Quantity = $('#Quantity_' + i).val();
            var Subtotal = $('#Subtotal_' + i).val();
            var Delivery = $('#Delivery_' + i).val();
            var Supplier = $('#Supplier_' + i).val();
            var Underburget = $('#Underburget_' + i).val();
            var AppendType = $('#AppendType_' + i).val();
            var Department = $('#Department_' + i).val();
            if (i == 1) {
                  var DiffMoney = DiffMoney1;
            }
            if (i == 2) {
                  var DiffMoney = DiffMoney2;
            }
            if (i == 3) {
                  var DiffMoney = DiffMoney3;
            }
            if (i == 4) {
                  var DiffMoney = DiffMoney4;
            }
            if (i == 5) {
                  var DiffMoney = DiffMoney5;
            }
            if (i == 6) {
                  var DiffMoney = DiffMoney6;
            }
            if (i == 7) {
                  var DiffMoney = DiffMoney7;
            }
            if (i == 8) {
                  var DiffMoney = DiffMoney8;
            }
            if (i == 9) {
                  var DiffMoney = DiffMoney9;
            }
            if (i == 10) {
                  var DiffMoney = DiffMoney10;
            }
            // console.log("丸実", Subject, BudgetCID, BudgetItem);
            var StepStr = {
                  "SNNo": SNNo,
                  "Subject": Subject,
                  "BudgetCID": BudgetCID,
                  "BudgetItem": BudgetItem,
                  "ItemNo": ItemNo,
                  "Descript": Descript,
                  "Unit": Unit,
                  "Remain": Remain,
                  "UnitPrice": UnitPrice,
                  "Quantity": Quantity,
                  "Subtotal": Subtotal,
                  "Delivery": Delivery,
                  "Supplier": Supplier,
                  "Underburget": Underburget,
                  "AppendType": AppendType,
                  "Department": Department,
                  "DiffMoney": DiffMoney,
            };
            sData.push(StepStr);
      }
      var DashStr = {
            "StaffID": oldStaffID,
            "StaffName": oldStaffName,
            "DeptName": oldDeptName,
            "GroupName": oldGroupName,
      };
      uData.push(DashStr);
      // if (BudgetCombo == '请选择'   ) {
      //       layer.alert("请选择项目！");
      //       return;
      // } else {
      //       if (Subject_1 != undefined) {
      //       } else {
      //             layer.alert("请选择项目！!");
      //             return;
      //       }
      //       layer.alert("项目OK");
      // }
      var BudgetCombo1 = $('#BudgetCombo_1').val();
      console.log("虞姬", BudgetCombo1);
      if (BudgetCombo1 != undefined && BudgetCombo1 != '') {
      } else {
            layer.alert("请选择项目！");
            return;
      }
      var reportType = 'applyBudget';
      var arrange = 'saveSend';
      var taskData = {
            "reportType": reportType, "arrange": arrange, "Advstr": Advstr, "edituse": edituse, "editmoney": editmoney,
            "sData": sData, "uData": uData
      }
      $.ajax({
            method: 'post',
            data: taskData,
            url: "/app/TMFinc/getRoute",
            success: function (data) {
                  console.log("生世世若初",data);
                  $("#hideBillNo").val(data.BillNo);
                  $("#hidePhone").val(data.Phone);
                  if (data.status == 'Fail') {
                        layer.msg("讯息：" + data.message);
                  } else if (data.status == 'OK') {
                        layer.confirm("申请文号" + data.BillNo + "已保存" + (data.status), {
                              btn: ['知道了']
                        }, function () {
                              if (editmoney == 'U') {
                                    layer.msg('操作成功', { icon: 1 });
                                    window.location.href = '/app/TMFinc/feeApplyForm';
                              } else {
                                    apply_hmi();
                              }
                        });
                  }
            },
            error: function () {
            }
      })
}
