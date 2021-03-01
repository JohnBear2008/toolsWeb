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

function winPurch() {
      var DeptName = $('#hideDeptName').val();
      var GroupName = $('#GroupName').val();
      var BudgetCombo = $('#BudgetCombo_1').val();
      var BudgetCID = '';
      var Subject = '';
      var BudgetItem = '';
      let PropList = [];
      if (BudgetCombo != "" && BudgetCombo != undefined) {
            // console.log("版本樹結構 B004##办公费##MIS费用 ",BudgetCombo);
            PropList = BudgetCombo.split('##');
            for (var ki = 0; ki < PropList.length; ki++) {
                  BudgetCID = PropList[0];
                  Subject = PropList[1];
                  BudgetItem = PropList[2];
            }
      }

      var reportType = 'AcquireChain';
      var oppOID = sessionOID;
      var OppName = sessionName;
      var arrange = 'RulePurch';
      var taskData = {
            "reportType": reportType, "arrange": arrange, "BudgetCID": BudgetCID, "BudgetItem": BudgetItem, "DeptName": DeptName, "GroupName": GroupName, "oppOID": oppOID, "OppName": OppName
      }
      $.ajax({
            method: 'post',
            data: taskData,
            url: "/app/TMFinc/getRoute",
            success: function (data) {
                  console.log("彩香", JSON.stringify(data));
                  if (data[0] != null && data[0] != undefined) {
                        console.log("香品", data[0].MagName);
                        $("#OppName").val(data[0].OppName);
                        $("#MagName").val(data[0].MagName);
                        $("#VipName").val(data[0].VipName);
                        $("#PurName").val(data[0].PurName);
                        $("#PexName").val(data[0].PexName);
                        $("#CfoName").val(data[0].CfoName);
                        $("#PsdName").val(data[0].PsdName);
                        $("#CeoName").val(data[0].CeoName);
                        $("#BodName").val(data[0].BodName);
                  }
            },
            error: function () {
            }
      })
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
            console.log("野弘", sumTemp);
      }
      $('#TotalValue').val(sumTemp);
}
function apply_hmi() {
      var SendStatus = '1';
      layer.confirm('此单送出审批吗，请确认操作是否无误？', {
            btn: ['是', '否']
      }, function () {
            layer.msg('操作成功', { icon: 1 });
            var hideBillNo = $('#hideBillNo').val();
            var Basstr = {
                  "SendStatus": SendStatus, "hideBillNo": hideBillNo , "edituse": edituse
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
                        if (data.status == 'Fail') {
                              layer.msg("讯息" + data.message);
                        } else if (data.status == 'OK') {
                              layer.confirm("申请文号" + data.BillNo + "已送出" + (data.status), {
                                    btn: ['知道了']
                              }, function () {
                                    layer.msg('操作成功', { icon: 1 });
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
      var SendStatus = '0';
      var hideBillNo = $('#hideBillNo').val();
      var ListNo = $('#ListNo').val();
      var RequestDate = $('#RequestDate').val();
      var ProjectNo = $('#ProjectNo').val();
      var ApplicNo = $('#ApplicNo').val();
      var DeptName = $('#hideDeptName').val();
      var GroupName = $('#GroupName').val();
      var flowRole = $('#hideflowRole').val(); 
      var StaffID = sessionOID;
      var StaffName = sessionName;
      var TotalValue = $('#TotalValue').val();
      var Currency = $('#Currency').val();
      var Payment = $('#Payment').val();
      var Explanation = $('#Explanation').val();
      var Advstr = {
            "SendStatus": SendStatus, "ListNo": ListNo, "RequestDate": RequestDate, "ProjectNo": ProjectNo, "ApplicNo": ApplicNo,
            "DeptName": DeptName, "GroupName": GroupName, "StaffID": StaffID, "StaffName": StaffName, "flowRole": flowRole , "TotalValue": TotalValue, "Currency": Currency,
            "Payment": Payment, "Explanation": Explanation, "hideBillNo": hideBillNo
      };
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

      for (let i = 1; i <= 10; i++) {
            var SNNo = '' + i;
            if (i == 1) {
                  var BudgetCombo = $('#BudgetCombo_1').val();
                  var BudgetCID = '';
                  var Subject = '';
                  var BudgetItem = '';
                  let PropList = [];
                  if (BudgetCombo != "" && BudgetCombo != undefined) {
                        PropList = BudgetCombo.split('##');
                        for (var ki = 0; ki < PropList.length; ki++) {
                              BudgetCID = PropList[0];
                              Subject = PropList[1];
                              BudgetItem = PropList[2];
                        }
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
            console.log("丸実", Subject, BudgetCID , BudgetItem);
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

      if (inputCheckFee(TotalValue, "总金额")) {
            layer.alert("总金额" + "Ok!");
      } else {
            layer.alert("总金额" + "不对，请检查!");
            return;
      }
      var reportType = 'applyBudget';
      var arrange = 'saveSend';
      var taskData = {
            "reportType": reportType, "arrange": arrange, "Advstr": Advstr, "edituse": edituse ,"sData": sData
      }
      $.ajax({
            method: 'post',
            data: taskData,
            url: "/app/TMFinc/getRoute",
            success: function (data) {
                  $("#hideBillNo").val(data.BillNo);
                  if (data.status == 'Fail') {
                        layer.msg("讯息" + data.message);
                  } else if (data.status == 'OK') {
                        layer.confirm("申请文号" + data.BillNo + "已保存" + (data.status), {
                              btn: ['知道了']
                        }, function () {
                              layer.msg('操作成功', { icon: 1 });
                        });
                  }
            },
            error: function () {
            }
      })

}
