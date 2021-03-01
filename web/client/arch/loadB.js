function loadCaseB(BillNo) {
    var reportType = 'BulletTrip';
    var arrange = 'popup';
    var taskData = { "reportType": reportType, "arrange": arrange, "BillNo": BillNo };
    $.ajax({
        method: 'post',
        data: taskData,
        url: "/app/TMFinc/getRoute",
        success: function (data) {
            const json2 = JSON.stringify(data);
            const bjob = JSON.parse(json2);
            console.log("金额", JSON.stringify(bjob));
            $("#hideBillNo").val(BillNo);
            for (let i = 0; i < 20; i++) {
                console.log("号", bjob[i].BudgetCID, "提", bjob[i].Subject, "科", bjob[i].BudgetItem);
                $('#TrafficA_' + (i)).val(bjob[i].TrafficA);
                $('#TrafficB_' + (i)).val(bjob[i].TrafficB);
                $('#TrafficC_' + (i)).val(bjob[i].TrafficC);
                $('#TrafficD_' + (i)).val(bjob[i].TrafficD);
                $('#TrafficE_' + (i)).val(bjob[i].TrafficE);
                $('#TrafficF_' + (i)).val(bjob[i].TrafficF);
                $('#TicTotal_' + (i)).val(bjob[i].TicTotal);
                $('#InputVAT_' + (i)).val(bjob[i].InputVAT);
                $('#TripDate_' + (i)).val(bjob[i].TripDate);
                $('#TripCust_' + (i)).val(bjob[i].TripCust);
                $('#TripRept_' + (i)).val(bjob[i].TripRept);
                $('#TripNote_' + (i)).val(bjob[i].TripNote);
            }
            for (let i = 20; i < 21; i++) {
                $('#ApplicNo').val(bjob[i].ApplicNo);
                $('#Version').val(bjob[i].Version);
                $('#BusiMan').val(bjob[i].BusiMan);
                $('#BusiArea').val(bjob[i].BusiArea);
                $('#DeptName').val(bjob[i].DeptName);
                $('#LeaveDate').val(bjob[i].LeaveDate);
                $('#LeaveHour').val(bjob[i].LeaveHour);
                $('#LeaveMin').val(bjob[i].LeaveMin);
                $('#BackDate').val(bjob[i].BackDate);
                $('#BackHour').val(bjob[i].BackHour);
                $('#BackMin').val(bjob[i].BackMin);
                $('#LiveDateA').val(bjob[i].LiveDateA);
                $('#LiveDateB').val(bjob[i].LiveDateB);
                $('#LiveDateC').val(bjob[i].LiveDateC);
                $('#LiveDateD').val(bjob[i].LiveDateD);
                $('#LiveDateE').val(bjob[i].LiveDateE);
                $('#LiveDateF').val(bjob[i].LiveDateF);
                $('#Explanation').val(bjob[i].Explanation);
                $('#BackMin').val(bjob[i].BackMin);
                $('#Overspend').val(bjob[i].Overspend);
                $('#IsOver').val(bjob[i].IsOver);
                $('#HotelName').val(bjob[i].HotelName);
                $('#HotelTel').val(bjob[i].HotelTel);
            }
            for (let i = 21; i < 22; i++) {
                $('#OppName').val(bjob[i].OppName);
                $('#MagName').val(bjob[i].MagName);
                $('#VipName').val(bjob[i].VipName);
            }
        },
        error: function () {
        }
    })

}