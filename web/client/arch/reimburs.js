// function inputCheckFee(obj, errItem) {
//       var ret = true;
//       if (obj != null && obj.length > 0) {

//       } else {
//             layer.alert(errItem + "為空");
//             return false;
//       }
//       if (obj.length > 20) {
//             layer.alert(errItem + "太长")
//             return false;
//       }

//       if (isNaN(parseFloat(obj))) {
//             ret = false;
//       } else {

//       }
//       return ret;

// }
function view_inet() {
      var sumTemp = 0; 
      sumTemp =  parseFloat((sumTemp ) ) ;
      for (let i = 1; i <= 10; i++) {
            var BudgetCombo = $('#BudgetCombo_' + i).val();
            if (BudgetCombo != "" && BudgetCombo != undefined) {
                  var Realtotal = $('#Realtotal_' + i).val();
                  if (Realtotal != '' && Realtotal != '0' && Realtotal != 'NaN' && Realtotal != undefined) {
                        var parval = parseFloat(Realtotal );
                        if (parval != 'NaN' && parval != undefined) {
                              var small17 =  parseFloat((sumTemp +parval) ) ;
                              // console.log("哥吉拉哥吉拉",i,"无理",small17);                          
                              sumTemp = small17;
                        } 
                        console.log("哥吉拉哥吉拉",i,"罪孽",sumTemp);
                  }
                 
            }else{
                  $('#Realtotal_' + i).html('');
                  $('#Realtotal_' + i).val('');
            }
            
      }
      if (sumTemp != '' && sumTemp != '0' && sumTemp != 'NaN' && sumTemp != undefined   ) {
            sumTemp = sumTemp.toFixed(2);
            $('#RealValue').val(sumTemp);
      }
   
}
function save_inet() {
      layer.confirm('此单正式结算吗，请确认操作是否无误？', {
            btn: ['是', '否']
      }, function () {
            layer.msg('操作成功', { icon: 1 });
            send_inet();
      }, function () {
            layer.msg('无操作', { icon: 1 });
      });
}
function send_inet() {
      view_inet();
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
      var DeptName = $('#DeptCombo').val();
      var GroupName = $('#GroupCombo').val();
      var UnitName = $('#UnitCombo').val();
      
      var FlowRole = $('#hideFlowRole').val();
      var StaffID = sessionOID;
      var StaffName = sessionName;
      var TotalValue = $('#TotalValue').val();
      var RealValue = $('#RealValue').val();
      var Currency = $('#Currency').val();
      var Payment = $('#Payment').val();
      var Explanation = $('#Explanation').val();
      var Advstr = {
            "SendStatus": SendStatus, "ListNo": ListNo, "RequestDate": RequestDate, "ProjectNo": ProjectNo, "ApplicNo": ApplicNo,
            "UnitName": UnitName, "DeptName": DeptName, "GroupName": GroupName, "StaffID": StaffID, "StaffName": StaffName, "FlowRole": FlowRole,
            "TotalValue": TotalValue, "RealValue": RealValue, "Currency": Currency,
            "Payment": Payment, "Explanation": Explanation, "hideBillNo": hideBillNo
      };
      for (let i = 1; i <= 10; i++) {
            var Remain = $('#Remain_' + i).val();
            if (Remain == '0') {
                  if (Explanation != null && Explanation != undefined && Explanation != '') {
                        console.log("孙悟空", Remain);
                  } else {
                        layer.alert("项目额度为0，请填写说明!");
                        return;
                  }
            } else {
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
                              BudgetCID_1 = PropList[2];
                              Subject_1 = PropList[0];
                              BudgetItem_1 = PropList[1];
                        }
                       
                  }
            }
            var BudgetCombo = $('#BudgetCombo_' + i).val();
            if (BudgetCombo != "" && BudgetCombo != undefined) {
                  var Remain = $('#Remain_' + i).val();
                  if (Remain != null && Remain != undefined && Remain != '') {
                        console.log("项目额度有的",Remain);
                  }else{
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
                  console.log("品名",ItemNo);
                  if (ItemNo.length>45) {
                        layer.alert("无法保存, 品名栏位请缩短!");
                        return;
                  }
            }else{
            }
            var Descript = $('#Descript_' + i).val();
            var Unit = $('#Unit_' + i).val();
            var Remain = $('#Remain_' + i).val();
            var UnitPrice = $('#UnitPrice_' + i).val();
            var Quantity = $('#Quantity_' + i).val();
            var Subtotal = $('#Subtotal_' + i).val();
            var Realtotal = $('#Realtotal_' + i).val();
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
                  "Realtotal": Realtotal,
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
      var BudgetCombo1 = $('#BudgetCombo_1').val();
      console.log("虞姬",BudgetCombo1);
      if (BudgetCombo1 !=undefined && BudgetCombo1 != '') {
      } else {
            layer.alert("请选择项目！" );
            return ;
      }
      var reportType = 'payExpense';
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
                        layer.confirm("申请文号" + data.BillNo + " 状态：" + (data.status), {
                              btn: ['知道了']
                        }, function () {
                              window.location.href = '/app/TMFinc/expenseFill';
                        });
                  }
            },
            error: function () {
            }
      })
}
