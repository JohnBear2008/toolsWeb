function loadCaseA( BillNo  ) {
  var reportType = 'BulletQuery';
  var arrange = 'popup'; 
  var taskData = { "reportType": reportType, "arrange": arrange, "BillNo": BillNo  };
  $.ajax({
      method: 'post',
      data: taskData,
      url: "/app/TMFinc/getRoute",
      success: function (data) {
          const json2 = JSON.stringify(data);
          const bjob = JSON.parse(json2);
        //   console.log("金额", JSON.stringify(bjob));
        $("#hideBillNo").val(BillNo);
          for (let i = 0; i < 10; i++) {
              $('#SNO_'+(i+1)).val(bjob[i].SNNo);
              var dropText = bjob[i].BudgetCID+ "-"  +bjob[i].Subject+ "-"  +bjob[i].BudgetItem;
              // $("#BudgetCombo_"+(i+1)+" option[value="+dropText+"]").prop('selected', true);
              if( bjob[i].BudgetCID!=undefined &&  bjob[i].BudgetCID !='' ){
                console.log("版",i,"到",dropText);
                $("#BudgetCombo_"+(i+1)).val(dropText);
                $("#BudgetCombo_"+(i+1)).html(dropText);
              }
              $('#ItemNo_'+(i+1)).val(bjob[i].ItemNo);
              $('#Descript_'+(i+1)).val(bjob[i].Description);
              $('#Unit_'+(i+1)).val(bjob[i].Unit);
              $('#Remain_'+(i+1)).val(bjob[i].Remain);
              $('#UnitPrice_'+(i+1)).val(bjob[i].UnitPrice);
              $('#Quantity_'+(i+1)).val(bjob[i].Quantity);
              $('#Subtotal_'+(i+1)).val(bjob[i].Subtotal);
              $('#Delivery_'+(i+1)).val(bjob[i].Delivery);
              $('#Supplier_'+(i+1)).val(bjob[i].Supplier);
              $('#Underburget_'+(i+1)).val(bjob[i].Underburget);
              $('#AppendType_'+(i+1)).val(bjob[i].AppendType);
              $('#Department_'+(i+1)).val(bjob[i].Department);
          }
          for (let i = 10; i < 11; i++) {
              console.log("号",bjob[i].BudgetCID,"提",bjob[i].Subject,"科",bjob[i].BudgetItem);
              var dropText = bjob[i].BudgetCID+ "-"  +bjob[i].Subject+ "-"  +bjob[i].BudgetItem;
              // $("#BudgetCombo_1 option[value="+dropText+"]").prop('selected', true);
              $("#BudgetCombo_1").val( dropText);
              $("#BudgetCombo_1").html(dropText);
              $('#ListNo').val(bjob[i].ListNo);
              $('#ProjectNo').val(bjob[i].ProjectNo);
              $('#RequestDate').val(bjob[i].RequestDate);
              $('#ApplicNo').val(bjob[i].ApplicNo);
              $('#DeptName').val(bjob[i].DeptName);
              $('#TotalValue').val(bjob[i].TotalValue);
              $('#Currency').val(bjob[i].Currency);
              $('#Payment').val(bjob[i].Payment);
              $('#Explanation').val(bjob[i].Explanation);
              $('#EntryDate').val(bjob[i].EntryDate);
          }
          for (let i = 11; i < 12; i++) {
            $('#OppName').val(bjob[i].OppName);
            $('#MagName').val(bjob[i].MagName);
            $('#VipName').val(bjob[i].VipName);
            $('#PurName').val(bjob[i].PurName);
            $('#PexName').val(bjob[i].PexName);
            $('#CfoName').val(bjob[i].CfoName);
            $('#PsdName').val(bjob[i].PsdName);
            $('#CeoName').val(bjob[i].CeoName);
            $('#BodName').val(bjob[i].BodName); 
          }
          for (let i = 12; i < 13; i++) {
            $('#CreditA').val(bjob[i].CreditA);
            $('#CreditB').val(bjob[i].CreditB);
            $('#CreditC').val(bjob[i].CreditC);
            $('#CreditD').val(bjob[i].CreditD); 
          }
        },
        error: function () {
        }
  })
 
}