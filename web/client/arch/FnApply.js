function apply_hmi() {
      var ListNo = $('#ListNo').val();
      var RequestDate = $('#RequestDate').val();
      var ProjectNo = $('#ProjectNo').val();
      var ApplicNo = $('#ApplicNo').val();
      var deptName = $('#deptName').val();
      var staffID = sessionOID;
      var staffName = sessionName;
      var TotalValue = $('#TotalValue').val();
      var Currency = $('#Currency').val();
      var payment = $('#payment').val();
      var Explanation = $('#Explanation').val();
 
      var Advstr = {
            "ListNo": ListNo, "RequestDate": RequestDate, "ProjectNo": ProjectNo, "ApplicNo": ApplicNo,
            "deptName": deptName, "staffID": staffID, "staffName": staffName, "TotalValue": TotalValue, "Currency": Currency,
            "payment": payment, "Explanation": Explanation
      };

      var SNNo = '1';
      var BudgetItem = $('#BudgetItem_1').val();
      var ItemNo = $('#ItemNo_1').val();
      var Description = $('#Description_1').val();
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
            var SNNo = ''+i;
            var BudgetItem = $('#BudgetItem_'+i).val();
            var ItemNo = $('#ItemNo_'+i).val();
            var Description = $('#Description_'+i).val();
            var Unit = $('#Unit_'+i).val();
            var Remain = $('#Remain_'+i).val();
            var UnitPrice = $('#UnitPrice_'+i).val();
            var Quantity = $('#Quantity_'+i).val();
            var Subtotal = $('#Subtotal_'+i).val();
            var Delivery = $('#Delivery_'+i).val();
            var Supplier = $('#Supplier_'+i).val();
            var Underburget = $('#Underburget_'+i).val();
            var AppendType = $('#AppendType_'+i).val();
            var Department = $('#Department_'+i).val();
            console.log("丸愛実", ItemNo); 
            var StepStr = {
                  "SNNo" : SNNo,
                  "BudgetItem": BudgetItem,
                  "ItemNo": ItemNo,
                  "Description": Description,
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
 
      // var MoreStr = {
      //       "SNNo": SNNo,
      //       "BudgetItem": BudgetItem,
      //       "ItemNo": ItemNo,
      //       "Description": Description,
      //       "Unit": Unit,
      //       "Remain": Remain,
      //       "UnitPrice": UnitPrice,
      //       "Quantity": Quantity,
      //       "Subtotal": Subtotal,
      //       "Delivery": Delivery,
      //       "Supplier": Supplier,
      //       "Underburget": Underburget,
      //       "Department": Department
      // };
      // console.log("高瑛", Advstr);
      // console.log("受珍", MoreStr);
     
      var reportType = 'applyBudget';
      var arrange = 'integrate';
      var taskData = {
            "reportType": reportType, "arrange": arrange, "Advstr": Advstr, "sData": sData
      }
      $.ajax({
            method: 'post',
            data: taskData,
            url: "/app/TMFinc/getRoute",
            success: function (data) {
                  console.log("会好",JSON.stringify(data));
                  if (data.status == 'Fail'  ) {
                        layer.msg("讯息" + data.message);
                  } else if (data.status == 'OK') {
                        layer.confirm("申请文号" +  data.BillNo + "已送出" + (data.status), {
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