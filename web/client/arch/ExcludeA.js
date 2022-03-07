function sleepFile(mode) {
    CapMode = 'A'; Formkind = '采购单';
    CapDate = '0';
    var qrybillno = $('#mainbillno').val();
    const emdata = [
    ]
    let dataArr = [];
    var reportType = 'NatureView';
    var arrange = 'Purch';
    var DateB = $("#taskMakeDateB").val();
    var DateE = $("#taskMakeDateE").val();
    var taskData = '';
    if (mode == '0') {
        taskData = {
            "reportType": reportType, "arrange": arrange,
            "CurWorkId": sessionOID, "CurName": sessionName,
        };
    } else if (mode == '1') {
        taskData = {
            "reportType": reportType, "arrange": arrange,
            "CurWorkId": sessionOID, "CurName": '',
        };
    } else if (mode == '2') {
        taskData = {
            "reportType": reportType, "arrange": arrange, "weekbeg": DateB, "weekend": DateE,
            "CurWorkId": sessionOID, "CurName": sessionName,
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
            console.log(  "机动队", data.length);
            for (var i = 0; i < dataArr.length; i++) {
                var dataTTT = dataArr[i];
                emdata.push(dataTTT);
                // $('#SeaAllBtn').addClass("layui-btn layui-btn-warm layui-btn  ");
            }
            var table = layui.table;
            centerTable = table;
            table = $.extend(table, { config: { checkName: 'checked' } });
            table.render({
                elem: '#chin'
                , data: emdata
                , toolbar: '#toolbarDemo'
                , width: 1480
                , title: '数据表'
                , cols: [[
                  //   { type: 'checkbox', fixed: 'left' }
                    { fixed: 'oper', title: '操作', toolbar: '#swagDemo', width: 180 }
                    , { field: 'BillNo', title: '系统号', width: 140, sort: true }
                    , { field: 'SNNO', title: '序', width: 40, sort: true }
                    , { field: 'Subject', title: '科目', width: 0, hide: true }
                    , { field: 'BudgetItem', title: '项目', width: 100, sort: true }
                    , { field: 'DivideValue', title: '分批额', width: 120 }
                    , { field: 'TotalValue', title: '申请额', width: 100 }
                    , { field: 'RequestDate', title: '申请日期', hide: true}
                    , { field: 'StaffName', title: '提交人', width: 80, sort: true }
                    , { field: 'CurName', title: '审批人', width: 90, sort: true }
                    , { field: 'VipName', title: '副总', width: 80 }
                    , { field: 'DeptName', title: '提交', width: 80 }
                    , { field: 'UnitName', title: '使用', width: 80 }
                    , { field: 'Explanation', title: '说明', width: 120 }
                    , { field: 'Formkind', title: '类型', width: 80  }
                    , { field: 'EntryDate', title: '打单日期', width: 110 }
                    , { field: 'Currency', title: '币别', width: 0 , hide: true }
                    , { field: 'Payment', title: '付款', width: 70 , hide: true }
                    , { field: 'ApplicNo', title: '申请单号', width: 90, hide: true }
                    , { field: 'CurJob', title: '职位', width: 0, hide: true }
                    , { field: 'LinkPic', title: '发票', width: 0, hide: true }
                    , { field: 'IsOver', title: '追加', width: 0 , hide: true }
                    , { field: 'CurPhone', title: '釘釘', width: 0, hide: true }
                ]]
                , page: true
            });
            table.on('toolbar(chin)', function (obj) {
                objCenter = obj;
                var checkStatus = table.checkStatus(obj.config.id);
                switch (obj.event) {
                    case 'viewSumary':
                        var dataARR = (checkStatus.data);
                        CapBillNo = dataARR[0].BillNo;
                        CapSNNO = dataARR[0].SNNO;
                        CapFormkind = dataARR[0].Formkind;
                        CapSubject = dataARR[0].Subject;
                        CapCurJob = dataARR[0].CurJob;
                        CapPhone = dataARR[0].CurPhone;
                        CapClaim = dataARR[0].IsOver;
                        CapItemNo = dataARR[0].ItemNo;
                        CapPic = dataARR[0].LinkPic;
                        var BudgetItem = dataARR[0].BudgetItem;
                        var VipName = dataARR[0].VipName;
                        var DeptName = dataARR[0].DeptName;
                        var UnitName = dataARR[0].UnitName;
                        var IsBillUnder = dataARR[0].IsBillUnder;
                        HuwaiA(dataARR[0].BillNo , dataARR[0].SNNO ,BudgetItem ,DeptName,  UnitName, VipName );
                        // <DIV STYLE="page-break-before:always">
                        $('#kisswindow').modal('show');
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
            table.on('tool(chin)', function (obj) {
                var data = obj.data;
                var Parts_BillNo = data.BillNo;
                var SNNO = data.SNNO;
                var CapTotalValue = data.TotalValue;
                var CapSubject = data.Subject;
                var BudgetItem = data.BudgetItem;
                var VipName = data.VipName;
                var DeptName = data.DeptName;
                var UnitName = data.UnitName;
                var IsBillUnder = data.IsBillUnder;
                CapItemNo = data.ItemNo;
                CapCurJob = data.CurJob;
                CapPhone = data.CurPhone;
                CapClaim = data.IsOver;
                CapFormkind = data.Formkind;
                console.log("都市闲情", (CapFormkind));
                if (obj.event === 'analysis') {
                    HuwaiA(Parts_BillNo , SNNO , BudgetItem , DeptName, UnitName, VipName   );
                    CapBillNo = Parts_BillNo;
                    CapSNNO = SNNO;
                    CapPic = data.LinkPic;
                    // <DIV STYLE="page-break-before:always">
                    $('#kisswindow').modal('show');
                } else if (obj.event === 'approval') {
                    var message = '';
                    message ='进行审批同意吗，请确认操作是否无误？';
                    layer.confirm(message, {
                        btn: ['是', '否']
                    }, function () {
                        layer.msg('操作成功', { icon: 1 });
                        var reportType = 'VoiceConsent';
                        var arrange = 'MakeTicket';
                        var taskData = {
                            "reportType": reportType, "BillNo": Parts_BillNo, "SNNO": SNNO, "Formkind": CapFormkind, "Subject": CapSubject,
                            "ItemNo": CapItemNo, "TotalValue": CapTotalValue, "CurWorkId": sessionOID, "CurName": sessionName,
                            "CurJob": CapCurJob, "CurPhone": CapPhone, "Claimflag": CapClaim,
                        }
                        layer.alert("同意此笔审批号" + Parts_BillNo);
                        console.log("读过",taskData);
                        $.ajax({
                            method: 'post',
                            data: taskData,
                            url: "/app/TMFinc/getRoute",
                            success: function (result) {
                                var DateB = $("#taskMakeDateB").val();
                                var DateE = $("#taskMakeDateE").val();
                                var paramType = CapMode;
                                var paramClearA = encodeURI(encodeURI(Parts_BillNo));
                                layer.confirm("费用报销文号" + result.BillNo + "" + (result.message), {
                                                      btn: ['知道了']
                                }, function () {
                                    layer.msg('操作成功', { icon: 1 });
                                    window.location.href = "/app/TMFinc/expenseForm?missT=" + paramType + "&missA=" + paramClearA + "&missC=" + DateB + "&missD=" + DateE + "&missE=" + mode + " ";
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
                        var reportType = 'VoiceReject';
                        var arrange = 'ReturnTicket';
                        var taskData = {
                            "reportType": reportType,  "arrange": arrange, "BillNo": Parts_BillNo, "SNNO": SNNO,"Formkind": CapFormkind, "Subject": CapSubject, "TotalValue": CapTotalValue, 
                            "CurWorkId": sessionOID, "CurName": sessionName ,"CurJob": CapCurJob,
                            "CurPhone": CapPhone
                        }
                        layer.alert("驳回此笔审批号" + Parts_BillNo);
                        $.ajax({
                            method: 'post',
                            data: taskData,
                            url: "/app/TMFinc/getRoute",
                            success: function (result) {
                                var DateB = $("#taskMakeDateB").val();
                                var DateE = $("#taskMakeDateE").val();
                                var paramType = CapMode;
                                var paramClearA = encodeURI(encodeURI(Parts_BillNo));
                                layer.confirm("驳回费用报销文号" + result.BillNo + "讯息" + (result.message), {
                                                      btn: ['知道了']
                                }, function () {
                                    layer.msg('操作成功', { icon: 1 });
                                    window.location.href = "/app/TMFinc/expenseForm?missT=" + paramType + "&missA=" + paramClearA + "&missC=" + DateB + "&missD=" + DateE + "&missE=" + mode + " ";
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