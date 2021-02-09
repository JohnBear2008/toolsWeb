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
function searchFile(mode) {
    CapMode = 'A';
    CapDate = '0';
    var qrybillno = $('#mainbillno').val();
    const emdata = [
    ]
    let dataArr = [];
    var reportType = 'CherryFee';
    var arrange = 'Purch';
    var DateB = $("#taskMakeDateB").val();
    var DateE = $("#taskMakeDateE").val();
    var taskData = '';
    if (mode == '0') {
        taskData = {
            "reportType": reportType, "arrange": arrange,
            "CurWorkId": sessionAID, "CurName": sessionName,
        };
    } else if (mode == '1') {
        taskData = {
            "reportType": reportType, "arrange": arrange,
            "CurWorkId": sessionAID, "CurName": '',
        };
    } else if (mode == '2') {
        taskData = {
            "reportType": reportType, "arrange": arrange, "weekbeg": DateB, "weekend": DateE,
            "CurWorkId": sessionAID, "CurName": sessionName,
        };
    }

    $.ajax({
        method: 'post',
        data: taskData,
        url: "/app/TMFinc/getRoute",
        success: function (data) {
            dataArr = data;
            const json2 = JSON.stringify(dataArr);
            const bjob = JSON.parse(json2);
            // console.log("端装", json2, "机动", data.length);
            for (var i = 0; i < dataArr.length; i++) {
                var dataTTT = dataArr[i];
                emdata.push(dataTTT);
            }
            var table = layui.table;
            centerTable = table;
            table = $.extend(table, { config: { checkName: 'checked' } });
            table.render({
                elem: '#test'
                , data: emdata
                , toolbar: '#toolbarDemo'
                , defaultToolbar: ['filter', 'exports', 'print', {
                    title: '提示'
                    , layEvent: 'LAYTABLE_TIPS'
                    , icon: 'layui-icon-tips'
                }]
                , width: 1350
                , title: '数据表'
                , cols: [[
                    { type: 'checkbox', fixed: 'left' }
                    , { field: 'BillNo', title: '系统号', width: 140, sort: true }
                    , { field: 'ListNo', title: '表单编号', width: 100, sort: true }
                    , { field: 'RequestDate', title: '申请日期', width: 120, sort: true }
                    , { field: 'ProjectNo', title: '计划案号', width: 100, sort: true }
                    , { field: 'ApplicNo', title: '申请单号', width: 90 }
                    , { field: 'DeptName', title: '使用部门', width: 80 }
                    , { field: 'StaffID', title: '提交人', width: 80 }
                    , { field: 'StaffName', title: '提交人', width: 80 }
                    , { field: 'TotalValue', title: '总金额', width: 70 }
                    , { field: 'Currency', title: '币别', width: 70 }
                    , { field: 'Payment', title: '付款方式', width: 70 }
                    , { field: 'CurName', title: '审批人', width: 70 }
                    , { fixed: 'right', title: '操作', toolbar: '#barDemo', width: 200 }
                ]]
                , page: true
            });
            table.on('toolbar(test)', function (obj) {
                objCenter = obj;
                var checkStatus = table.checkStatus(obj.config.id);
                switch (obj.event) {
                    case 'viewSumary':
                        var dataARR = (checkStatus.data);
                        // console.log("z智阭", JSON.stringify(checkStatus));
                        console.log("西阭", (dataARR[0].BillNo));
                        CapBillNo = dataARR[0].BillNo;
                        shuffleA(dataARR[0].BillNo);
                        // <DIV STYLE="page-break-before:always">
                        $('#kisswindow').modal('show');
                        $("#matchRec").html("采购单审批:");
                        break;
                    case 'massReject':
                        break;
                    case 'isAll':
                        layer.msg(checkStatus.isAll ? '全选' : '未全选');
                        break;
                    case 'LAYTABLE_TIPS':
                        layer.alert('这是工具栏右侧自定义的一个图标按钮');
                };
            });
            table.on('tool(test)', function (obj) {
                var data = obj.data;
                var Parts_BillNo = data.BillNo;

                if (obj.event === 'analysis') {
                    shuffleA(Parts_BillNo);
                    CapBillNo = Parts_BillNo;
                    // <DIV STYLE="page-break-before:always">
                    $('#kisswindow').modal('show');
                } else if (obj.event === 'approval') {
                    layer.confirm('进行审批同意吗，请确认操作是否无误？', {
                        btn: ['是', '否']
                    }, function () {
                        layer.msg('操作成功', { icon: 1 });
                        var reportType = 'agreeFee';
                        var taskData = {
                            "reportType": reportType, "BillNo": Parts_BillNo, "CurWorkId": sessionAID, "CurName": sessionName,
                        }
                        layer.alert("同意此笔审批号" + Parts_BillNo);
                        $.ajax({
                            method: 'post',
                            data: taskData,
                            url: "/app/TMFinc/getRoute",
                            success: function (result) {
                                layer.confirm("申请文号" + result.BillNo + "已" + (result.Status), {
                                    btn: ['知道了']
                                }, function () {
                                    var DateB = $("#taskMakeDateB").val();
                                    var DateE = $("#taskMakeDateE").val();
                                    missType = CapMode;
									var paramClearA = encodeURI(encodeURI(result.BillNo));
									window.location.href = "/app/TMFinc/feeAgreeForm?missT=" + missType + "&missA=" + CapDate + "&missC=" + DateB + "&missD=" + DateE + " ";
                                });
                            },
                            error: function () {
                            }
                        })
                    }, function () {
                        layer.msg('无操作', { icon: 1 });
                    });
                } else if (obj.event === 'reject') {
                    layer.confirm('进行审批驳回吗，请确认操作是否无误？', {
                        btn: ['是', '否']
                    }, function () {
                        layer.msg('操作成功', { icon: 1 });
                        var reportType = 'rejectFee';
                        var taskData = {
                            "reportType": reportType, "BillNo": Parts_BillNo, "CurWorkId": sessionAID, "CurName": sessionName
                        }
                        layer.alert("驳回此笔审批号" + Parts_BillNo);
                        $.ajax({
                            method: 'post',
                            data: taskData,
                            url: "/app/TMFinc/getRoute",
                            success: function (result) {
                                layer.confirm("申请文号" + result.BillNo + "已" + (result.Status), {
                                    btn: ['知道了'] //按钮
                                }, function () {
                                    var DateB = $("#taskMakeDateB").val();
                                    var DateE = $("#taskMakeDateE").val();
                                    missType = CapMode;
									var paramClearA = encodeURI(encodeURI(result.BillNo));
									window.location.href = "/app/TMFinc/feeAgreeForm?missT=" + missType + "&missA=" + CapDate + "&missC=" + DateB + "&missD=" + DateE + " ";
                                });
                            },
                            error: function () {
                            }
                        })
                    }, function () {
                        layer.msg('无操作', { icon: 1 });
                    });
                } else if (obj.event === 'repeat') {

                }
            });
        },
        error: function () {
        }
    })
}
function searchByDate() {
    if(CapMode =='A'){
        searchFile('2');
    }
    if(CapMode =='B'){
        searchTravel('2');
    }
    CapDate = '1';
}
function searchTravel(mode) {
    CapMode = 'B';
    CapDate = '0';
    var qrybillno = $('#mainbillno').val();
    const emdata = [
    ]
    let dataArr = [];
    var reportType = 'CherryFee';
    var arrange = 'Trip';
    var DateB = $("#taskMakeDateB").val();
    var DateE = $("#taskMakeDateE").val();
    var taskData = '';
    if (mode == '0') {
        taskData = {
            "reportType": reportType, "arrange": arrange,
            "CurWorkId": sessionAID, "CurName": sessionName,
        };
    } else if (mode == '1') {  //nouse
        taskData = {
            "reportType": reportType, "arrange": arrange,
            "CurWorkId": sessionAID, "CurName": '',
        };
    } else if (mode == '2') {
        taskData = {
            "reportType": reportType, "arrange": arrange, "weekbeg": DateB, "weekend": DateE,
            "CurWorkId": sessionAID, "CurName": sessionName,
        };
    }
    $.ajax({
        method: 'post',
        data: taskData,
        url: "/app/TMFinc/getRoute",
        success: function (data) {
            dataArr = data;
            const json2 = JSON.stringify(dataArr);
            const bjob = JSON.parse(json2);
            // console.log("端装", json2, "机动", data.length);
            for (var i = 0; i < dataArr.length; i++) {
                var dataTTT = dataArr[i];
                emdata.push(dataTTT);
            }
            var table = layui.table;
            centerTable = table;
            table = $.extend(table, { config: { checkName: 'checked' } });
            table.render({
                elem: '#test'
                , data: emdata
                , toolbar: '#toolbarDemo'
                , defaultToolbar: ['filter', 'exports', 'print', {
                    title: '提示'
                    , layEvent: 'LAYTABLE_TIPS'
                    , icon: 'layui-icon-tips'
                }]
                , width: 1350
                , title: '数据表'
                , cols: [[
                    { type: 'checkbox', fixed: 'left' }
                    , { field: 'BillNo', title: '系统号', width: 140, sort: true }
                    , { field: 'ApplicNo', title: '申请单号', width: 90, sort: true }
                    , { field: 'BusiMan', title: '出差人', width: 100, sort: true }
                    , { field: 'BusiArea', title: '出差地区', width: 80 }
                    , { field: 'LeaveDate', title: '出发时间', width: 120, sort: true }
                    , { field: 'DeptName', title: '使用部门', width: 80 }
                    , { field: 'StaffName', title: '提交人', width: 80 }
                    , { field: 'IsOver', title: '是否有超支', width: 100, sort: true }
                    , { field: 'Overspend', title: '总金额', width: 70 }
                    , { field: 'EntryDate', title: '日期', width: 70 }
                    , { field: 'Explanation', title: '备注', width: 70 }
                    , { field: 'CurName', title: '审批人', width: 70 }
                    , { fixed: 'right', title: '操作', toolbar: '#barDemo', width: 200 }
                ]]
                , page: true
            });
            table.on('toolbar(test)', function (obj) {
                objCenter = obj;
                var checkStatus = table.checkStatus(obj.config.id);
                switch (obj.event) {
                    case 'viewSumary':
                        var dataARR = (checkStatus.data);
                        // console.log("z智阭", JSON.stringify(checkStatus));
                        console.log("西阭", (dataARR[0].BillNo));
                        CapBillNo = dataARR[0].BillNo;
                        shuffleB(dataARR[0].BillNo);
                        // <DIV STYLE="page-break-before:always">
                        $('#kisswindow').modal('show');
                        $("#matchRec").html("出差报销审批:");
                        break;
                    case 'massReject':
                        break;
                    case 'isAll':
                        layer.msg(checkStatus.isAll ? '全选' : '未全选');
                        break;
                    case 'LAYTABLE_TIPS':
                        layer.alert('这是工具栏右侧自定义的一个图标按钮');
                };
            });
            table.on('tool(test)', function (obj) {
                var data = obj.data;
                var Parts_BillNo = data.BillNo;

                if (obj.event === 'analysis') {
                    shuffleB(Parts_BillNo);
                    CapBillNo = Parts_BillNo;
                    // <DIV STYLE="page-break-before:always">
                    $('#kisswindow').modal('show');
                } else if (obj.event === 'approval') {
                    layer.confirm('进行审批同意吗，请确认操作是否无误？', {
                        btn: ['是', '否']
                    }, function () {
                        layer.msg('操作成功', { icon: 1 });
                        var reportType = 'agreeFee';
                        var taskData = {
                            "reportType": reportType, "BillNo": Parts_BillNo, "CurWorkId": sessionAID, "CurName": sessionName,
                        }
                        layer.alert("同意此笔审批号" + Parts_BillNo);
                        $.ajax({
                            method: 'post',
                            data: taskData,
                            url: "/app/TMFinc/getRoute",
                            success: function (result) {
                                layer.confirm("申请文号" + result.BillNo + "已" + (result.Status), {
                                    btn: ['知道了']
                                }, function () {
                                    var DateB = $("#taskMakeDateB").val();
                                    var DateE = $("#taskMakeDateE").val();
                                    var paramType = CapMode;
                                    var paramClearA = encodeURI(encodeURI(Parts_BillNo));
                                    console.log("双错", CapMode, "夏对", Parts_BillNo, "迎", DateB, "我", DateE);
                                    window.location.href = "/app/TMFinc/feeAgreeForm?missT=" + paramType + "&missA=" + paramClearA + "&missC=" + DateB + "&missD=" + DateE + "&missE=" + mode + " ";
                                });
                            },
                            error: function () {
                            }
                        })
                    }, function () {
                        layer.msg('无操作', { icon: 1 });
                    });
                } else if (obj.event === 'reject') {
                    layer.confirm('进行审批驳回吗，请确认操作是否无误？', {
                        btn: ['是', '否']
                    }, function () {
                        layer.msg('操作成功', { icon: 1 });
                        var reportType = 'rejectFee';
                        var taskData = {
                            "reportType": reportType, "BillNo": Parts_BillNo, "CurWorkId": sessionAID, "CurName": sessionName
                        }
                        layer.alert("驳回此笔审批号" + Parts_BillNo);
                        $.ajax({
                            method: 'post',
                            data: taskData,
                            url: "/app/TMFinc/getRoute",
                            success: function (result) {
                                layer.confirm("申请文号" + result.BillNo + "已" + (result.Status), {
                                    btn: ['知道了'] //按钮
                                }, function () {
                                    var DateB = $("#taskMakeDateB").val();
                                    var DateE = $("#taskMakeDateE").val();
                                    var paramType = CapMode;
                                    var paramClearA = encodeURI(encodeURI(Parts_BillNo));
                                    console.log("双", missType, "夏", qrybillno, "雪", qryclass, "迎", DateB, "我", DateE);
                                    window.location.href = "/app/TMFinc/feeAgreeForm?missT=" + paramType + "&missA=" + paramClearA + "&missC=" + DateB + "&missD=" + DateE + "&missE=" + mode + " ";
                                });
                            },
                            error: function () {
                            }
                        })
                    }, function () {
                        layer.msg('无操作', { icon: 1 });
                    });
                } else if (obj.event === 'repeat') {

                }
            });
        },
        error: function () {
        }
    })
}
$('#PrintClose').click(function () {
    $('#kisswindow').window('close');
});