//FnFee.js
function analysisWin(pclass, billid, pcode, pname) {
    var reportType = 'CherryQuery';
    var arrange = 'popup';
    var taskData = { "reportType": reportType, "arrange": arrange, "PartsClass": pclass, "BILLID": billid, "PartsCode": pcode, "DBTable": "auto_rec_parts" };
    $.ajax({
        method: 'post',
        data: taskData,
        url: "/app/TMCode/getRoute",
        success: function (data) {
            console.log("新新");
            const json2 = JSON.stringify(data);
            const bjob = JSON.parse(json2);
            $("#specNHead").val("编码: " + pcode + " 品名: " + pname);
            $("#specEF").val("EF: " + bjob.SupplyTitle + " 供应商: " + bjob.SMTTitle);
            $("#specModel").val(bjob.Model);
            $("#specAssem").val(bjob.Assembly);
            $("#specUnitE").val(bjob.UnitE);
            $("#specPhase").val(bjob.Phase);
            $("#specPrior").val(bjob.Prior);
            $("#specStaff").val(bjob.Staff);
            $("#specApplyDate").val(bjob.ApplyDate);
            $("#specList").val(bjob.ValueM + bjob.NameM + bjob.ValueA + bjob.NameA + bjob.Value1 + bjob.Name1 + bjob.Value2 + bjob.Name2 + bjob.Value3 + bjob.Name3 + bjob.Value4 + bjob.Name4 + bjob.Value5 + bjob.Name5 + bjob.Value6 + bjob.Name6 + bjob.Value7 + bjob.Name7 + bjob.Value8 + bjob.Name8
                + bjob.Value9 + bjob.Name9 + bjob.Value10 + bjob.Name10 + bjob.Value11 + bjob.Name11 + bjob.Value12 + bjob.Name12 + bjob.Value13 + bjob.Name13 + bjob.Value14 + bjob.Name14 + bjob.Value15 + bjob.Name15
                + bjob.Value16 + bjob.Name16 + bjob.Value17 + bjob.Name17 + bjob.Value18 + bjob.Name18 + bjob.Value19 + bjob.Name19 + bjob.Value20 + bjob.Name20);
        },
        error: function () {
        }
    })
}

function searchByDate() {
    console.log("金玉堂.....", CapMode);
    if (CapMode == 'A') {
        searchFile('2');
    } else if (CapMode == 'B') {
        searchTravel('2');
    } else {
        searchFile('2');
    }
    CapDate = '1';
}

$('#PrintClose').click(function () {
    $('#kisswindow').window('close');
});
