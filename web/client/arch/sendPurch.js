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
      // console.log("空咯", nowIDX);
      var parval = parseInt(nowIDX, 10);
      var BudgetCombo = $('#BudgetCombo_' + parval).val();
      console.log("银河", BudgetCombo);
      var DeptName = $('#hideDeptName').val();
      var GroupName = $('#GroupName').val();
      var BudgetCID = '';
      var Subject = '';
      var BudgetItem = '';
      let PropList = [];
      if (BudgetCombo != "" && BudgetCombo != undefined) {
            // console.log("結構  ",BudgetCombo);
            PropList = BudgetCombo.split('-');
            for (var ki = 0; ki < PropList.length; ki++) {
                  BudgetCID = PropList[0];
                  BudgetItem = PropList[2];
            }
      }

      if (nowIDX == '' + parval) {
            if (BudgetCombo != "" && BudgetCombo != undefined) {
                  PropList = BudgetCombo.split('-');
                  for (var ki = 0; ki < PropList.length; ki++) {
                        Subject = PropList[1];
                        // console.log("版本樹結構", Subject);
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
            "reportType": reportType, "arrange": arrange, "BudgetCID": BudgetCID, "BudgetItem": BudgetItem, "DeptName": DeptName, "GroupName": GroupName, "oppOID": oppOID, "OppName": OppName
      }
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
                        console.log("彩香", data[0].Surplus);
                        $("#OppName").val(data[0].OppName);
                        $("#MagName").val(data[0].MagName);
                        $("#VipName").val(data[0].VipName);
                        $("#PurName").val(data[0].PurName);
                        $("#PexName").val(data[0].PexName);
                        $("#CfoName").val(data[0].CfoName);
                        $("#PsdName").val(data[0].PsdName);
                        $("#CeoName").val(data[0].CeoName);
                        $("#BodName").val(data[0].BodName);
                        $("#Remain_" + (parval)).val(data[0].Surplus);
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
function winPurch() {
      for (let i = 1; i <= 10; i++) {
            var BudgetCombo = $('#BudgetCombo_' + i).val();
            var DeptName = $('#hideDeptName').val();
            var GroupName = $('#GroupName').val();
            // var BudgetCombo = $('#BudgetCombo_1').val();
            var BudgetCID = '';
            var Subject = '';
            var BudgetItem = '';
            let PropList = [];
            if (BudgetCombo != "" && BudgetCombo != undefined) {
                  // console.log("版本樹結構 B004-办公费-MIS费用 ",BudgetCombo);
                  console.log("张飞",BudgetCombo);
                  PropList = BudgetCombo.split('-');
                  for (var ki = 0; ki < PropList.length; ki++) {
                        BudgetCID = PropList[0];
                        Subject = PropList[1];
                        BudgetItem = PropList[2];
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
                  "reportType": reportType, "arrange": arrange, "BudgetCID": BudgetCID, "BudgetItem": BudgetItem, "DeptName": DeptName, "GroupName": GroupName, "oppOID": oppOID, "OppName": OppName
            }
            console.log("夏洛特",taskData);
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
function view_hmi() {
      var sumTemp = '';
      for (let i = 1; i <= 10; i++) {
            var UnitPrice = $('#UnitPrice_' + i).val();
            var Quantity = $('#Quantity_' + i).val();
            var smallTOT = UnitPrice * Quantity;
            if (smallTOT != '0' && smallTOT != 'NaN' && smallTOT != undefined) {
                  $('#Subtotal_' + i).val(smallTOT);
            }
            var Subtotal = $('#Subtotal_' + i).val();
            if (Subtotal != '' && Subtotal != '0' && Subtotal != 'NaN' && Subtotal != undefined) {
                  var parval = parseInt(Subtotal, 10);
                  // console.log("凛冬",parval);
                  if (parval != 'NaN' && parval != undefined) {
                        sumTemp = parseInt(sumTemp + parval, 10);
                  }
            }
      }
      $('#TotalValue').val(sumTemp);
}
function apply_hmi() {
      var DeptName = $('#hideDeptName').val();
      var GroupName = $('#GroupName').val();
      var FlowRole = $('#hideFlowRole').val();
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
      layer.confirm('此单送出审批吗，请确认操作是否无误？', {
            btn: ['是', '否']
      }, function () {
            layer.msg('操作成功', { icon: 1 });
            var hideBillNo = $('#hideBillNo').val();
            var hidePhone = $('#hidePhone').val();
            var Basstr = {
                  "SendStatus": SendStatus, "hideBillNo": hideBillNo, "hidePhone": hidePhone, "edituse": edituse, "DeptName": DeptName,
                  "GroupName": GroupName, "StaffName": StaffName, "FlowRole": FlowRole
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
// function DingDing() {
//       var phone = '1505213225'; 
//       var DeptName = '软体部'; 
//       var GroupName = 'MIS'; 
//       var FormKind = '采购单'; 
//       var CurText = '核准'; 
//       var CurName = '俞田龙';  
//       var Advstr = { "DeptName": DeptName, "GroupName": GroupName,  "FormKind": FormKind, "CurText": CurText, "CurName": CurName };
//       putDing( Advstr);
// }
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
      var DeptName = $('#hideDeptName').val();
      var GroupName = $('#GroupName').val();
      var FlowRole = $('#hideFlowRole').val();
      var StaffID = sessionOID;
      var StaffName = sessionName;
      var TotalValue = $('#TotalValue').val();
      var Currency = $('#Currency').val();
      var Payment = $('#Payment').val();
      var Explanation = $('#Explanation').val();

      var Advstr = {
            "SendStatus": SendStatus, "ListNo": ListNo, "RequestDate": RequestDate, "ProjectNo": ProjectNo, "ApplicNo": ApplicNo,
            "DeptName": DeptName, "GroupName": GroupName, "StaffID": StaffID, "StaffName": StaffName, "FlowRole": FlowRole, "TotalValue": TotalValue, "Currency": Currency,
            "Payment": Payment, "Explanation": Explanation, "hideBillNo": hideBillNo
      };
      for (let i = 1; i <= 10; i++) {
            var Remain = $('#Remain_' + i).val();
            if (Remain == '0') {
                  if (Explanation != null && Explanation != undefined && Explanation != '') {
                        console.log("不知火舞", Remain);
                  } else {
                        console.log("大谋", Remain);
                        layer.alert("项目额度为0，请填写说明!");
                        return;
                  }
            } else {
                  console.log("达摩", Remain);
            }
      }
      if (editmoney == 'U'){

      }else{
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
      console.log("不知火舞", Advstr);
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
                              BudgetCID_1 = PropList[0];
                              Subject_1 = PropList[1];
                              BudgetItem_1 = PropList[2];
                        }
                       
                  }
            }
            var BudgetCombo = $('#BudgetCombo_' + i).val();
            if (BudgetCombo != "" && BudgetCombo != undefined) {
                  var Remain = $('#Remain_' + i).val();
                  if (Remain != null && Remain != undefined && Remain != '') {
                        console.log("项目额度有的",Remain);
                  }else{
                        layer.alert("项目额度无定义，无法保存!");
                        return;
                  }
            }
            var BudgetCID = '';
            var Subject = '';
            var BudgetItem = '';
            let PropList = [];
            if (BudgetCombo != "" && BudgetCombo != undefined) {
                  PropList = BudgetCombo.split('-');
                  for (var ki = 0; ki < PropList.length; ki++) {
                        BudgetCID = PropList[0];
                        Subject = PropList[1];
                        BudgetItem = PropList[2];
                  }
            }
            var ItemNo = $('#ItemNo_' + i).val();
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
            console.log("丸実", Subject, BudgetCID, BudgetItem);
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
                  "Department": Department
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
      console.log("虞姬",BudgetCombo1);
      if (BudgetCombo1 !=undefined && BudgetCombo1 != '') {
      } else {
            layer.alert("请选择项目！" );
            return ;
      }
      var reportType = 'applyBudget';
      var arrange = 'saveSend';
      var taskData = {
            "reportType": reportType, "arrange": arrange, "Advstr": Advstr, "edituse": edituse, "editmoney": editmoney,
            "sData": sData,  "uData": uData
      }
      $.ajax({
            method: 'post',
            data: taskData,
            url: "/app/TMFinc/getRoute",
            success: function (data) {
                  $("#hideBillNo").val(data.BillNo);
                  $("#hidePhone").val(data.Phone);
                  if (data.status == 'Fail') {
                        layer.msg("讯息" + data.message);
                  } else if (data.status == 'OK') {
                        layer.confirm("申请文号" + data.BillNo + "已保存" + (data.status), {
                              btn: ['知道了']
                        }, function () {
                              if (editmoney == 'U'){
                                    layer.msg('操作成功', { icon: 1 });
                                    window.location.href = '/app/TMFinc/feeApplyForm';
                              }else{
                                    apply_hmi();
                              }
                        });
                  }
            },
            error: function () {
            }
      })
}
