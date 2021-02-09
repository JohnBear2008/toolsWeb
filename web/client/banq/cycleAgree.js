
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
            $("#specModel").val( bjob.Model );
            $("#specAssem").val( bjob.Assembly );
            $("#specUnitE").val( bjob.UnitE );
            $("#specPhase").val( bjob.Phase );
            $("#specPrior").val( bjob.Prior );
            $("#specStaff").val( bjob.Staff );
            $("#specApplyDate").val(bjob.ApplyDate ); 
            $("#specList").val(bjob.ValueM + bjob.NameM + bjob.ValueA + bjob.NameA + bjob.Value1 + bjob.Name1 + bjob.Value2 + bjob.Name2 + bjob.Value3 + bjob.Name3 + bjob.Value4 + bjob.Name4 + bjob.Value5 + bjob.Name5 + bjob.Value6 + bjob.Name6 + bjob.Value7 + bjob.Name7 + bjob.Value8 + bjob.Name8
                + bjob.Value9 + bjob.Name9 + bjob.Value10 + bjob.Name10 + bjob.Value11 + bjob.Name11 + bjob.Value12 + bjob.Name12 + bjob.Value13 + bjob.Name13 + bjob.Value14 + bjob.Name14 + bjob.Value15 + bjob.Name15
                + bjob.Value16 + bjob.Name16 + bjob.Value17 + bjob.Name17 + bjob.Value18 + bjob.Name18 + bjob.Value19 + bjob.Name19 + bjob.Value20 + bjob.Name20);
        },
        error: function () {
        }
    })
}
 function searchFile(mode) {
        var qrybillno = $('#mainbillno').val();
        var qryclass = $('#mainPclass').val();
		var Auditor = sessionName ;
        const emdata = [
            // { "PID": 10000, "PartsName": "user-0", "SMTTitle": "女" },
            // {"pclass":"GA", "PartsName":"过渡法兰","PartsOldName":"","SMTTitle":"预留","PID":"上海伊意亿EEI","NameM":"\n","NameA":"\n","Name1":"过渡法兰\n","Name2":"EIPC6-125,160;GR72\n","Name3":"_1\n","Name4":"\n","Name5":"\n","Name6":"\n","Name7":"\n","Name8":"\n","Name9":"\n","Name10":"\n","Name11":"\n","Name12":"\n","Name13":"\n","Name14":"\n","Name15":"\n","Name16":"\n","Name17":"\n","Name18":"\n","Name19":"\n","Name20":"\n","ValueM":"型号：","ValueA":"组合件：","Value1":"分类 : ","Value2":"匹配油泵规格 : ","Value3":"款型 : ","Value4":"","Value5":"","Value6":"","Value7":"","Value8":"","Value9":"","Value10":"","Value11":"","Value12":"","Value13":"","Value14":"","Value15":"","Value16":"","Value17":"","Value18":"","Value19":"","Value20":""}
            // {"PID":200,"PartsClass":"A2","PartsOldCode":"","PartsName":"按键模块","PartsOldName":"","SMTTitle":"共用","SupplyTitle":"资产专用","NameM":"\n","NameA":"\n","Name1":"\n","Name2":"\n","Name3":"\n","Name4":"\n","Name5":"\n","Name6":"\n","Name7":"\n","Name8":"\n","Name9":"\n","Name10":"\n","Name11":"\n","Name12":"\n","Name13":"\n","Name14":"\n","Name15":"\n","Name16":"\n","Name17":"\n","Name18":"\n","Name19":"\n","Name20":"\n"}
        ]
        let dataArr = [];
        var reportType = 'CherryQuery';
        var arrange = 'search';
        var DateB = $("#taskMakeDateB").val();
        var DateE = $("#taskMakeDateE").val();
        var taskData = '';
        if(mode=='1'){
                taskData = {
                "reportType": reportType, "arrange": arrange , "BILLID": qrybillno, "PartsClass": qryclass
            };
        }else{
              taskData = {
                "reportType": reportType, "arrange": arrange, "weekbeg": DateB, "weekend": DateE              
            };
        }
        
        $.ajax({
            method: 'post',
            data: taskData,
            url: "/app/TMCode/getRoute",
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
                    , title: '数据表'
                    , cols: [[
                        { type: 'checkbox', fixed: 'left' }
                        // , { field: 'PID', title: 'ID', width: 80, fixed: 'left', unresize: true, sort: true }
                        , { field: 'PartsCode', title: '暂时编码', width: 140 }
                        , { field: 'PartsClass', title: '英文', width: 60, sort: true }
                        , { field: 'PartsChi', title: '类别', width: 80, sort: true }
                        , { field: 'BILLID', title: '审批号', width: 120, sort: true }
                        , { field: 'PartsName', title: '新品名', width: 120, sort: true }
                        , { field: 'PartsApplyDate', title: '日期', width: 100, sort: true }
                        , { field: 'ComboTitle', title: '制造商/EF', width: 150, sort: true }
                        // , { field: 'SMTTitle', title: 'EF码', width: 80, sort: true }
                        , { field: 'ComboAgree', title: '提交人', width: 150, sort: true }
                        , { field: 'Reason', title: '备注', width: 80, sort: true }
                        , { field: 'PartsStatus', title: '状态', width: 80, sort: true  }
                        , { field: 'Pattern', title: '单据', width: 80, sort: true }
                        , { fixed: 'right', title: '操作', toolbar: '#barDemo', width: 210 }
                    ]]
                    , page: true
                });
                table.on('toolbar(test)', function (obj) {
                    objCenter = obj;
                    var checkStatus = table.checkStatus(obj.config.id);
                    switch (obj.event) {
                        case 'massAgree':
                            layer.confirm('进行批量审批同意，请确认操作是否无误？', {
                                btn: ['是', '否']
                            }, function () {
                                var data = checkStatus.data;
                                // console.log("鬣狗：", JSON.stringify(data));
                                // 鬣狗： [{"PID":210,"PartsClass":"E1","PartsCode":"AE1-A101019-000","PartsOldCode":"","PartsName":"代工海天PCB光板","PartsOldName":"","SMTTitle":"预留","SupplyTitle":"资产专用","BILLID":"200730101019","Staff":"熊奇龙","PartsApplyDate":"2020-07-30"},{"PID":211,"PartsClass":"A2","PartsCode":"AA2-A101102-000","PartsOldCode":"","PartsName":"扩展模块","PartsOldName":"","SMTTitle":"海江","SupplyTitle":"资产专用","BILLID":"200730101102","Staff":"熊奇龙","PartsApplyDate":"2020-07-30"}]
                                // layer.alert(JSON.stringify(data));
                                for (var i = 0; i < data.length; i++) {
                                    var BILLID = '';
                                    var PartsClass = '';
                                    var PartsCode = '';
                                    console.log("世録 ", (data[i].BILLID), "甜蜜", data[i].PartsCode, "爆几", data[i].PartsClass);
                                    BILLID = data[i].BILLID;
                                    PartsCode = data[i].PartsCode;
                                    PartsClass = data[i].PartsClass;
                                    var PartsStatus = data[i].PartsStatus;
                                    var Pattern = data[i].Pattern;
                                    var reportType = 'CherryAgree';
                                    var taskData = {
                                        "reportType": reportType, "BILLID": BILLID, "PartsClass": PartsClass, "Auditor": Auditor,
                                        "PartsStatus": PartsStatus, "Pattern": Pattern,
                                    }
                                    $.ajax({
                                        method: 'post',
                                        data: taskData,
                                        url: "/app/TMCode/getRoute",
                                        success: function (data) {
                                            if (data.status == 'Fail' || data.status == 'FailOID') {
                                                layer.msg("讯息" + data.message);
                                            } else if (data.status == 'OK') {
                                                layer.confirm(data.message, {
                                                    btn: ['是']
                                                }, function () {
                                                    layer.msg('操作成功', { icon: 1 });
                                                    var DateB = $("#taskMakeDateB").val();
                                                    var DateE = $("#taskMakeDateE").val();
                                                    var paramType = missType;
                                                    var paramClearA = encodeURI(encodeURI(qrybillno));
                                                    var paramClearB = encodeURI(encodeURI(qryclass));
                                                    console.log("双", missType, "夏", qrybillno, "雪", qryclass, "迎", DateB, "我", DateE);
                                                    window.location.href = "/app/TMCode/uniAgree?missT=" + paramType + "&missA=" + paramClearA + "&missB=" + paramClearB + "&missC=" + DateB + "&missD=" + DateE + "&missE=" + mode + " ";
                                                });
                                            }
                                        },
                                        error: function () {
                                        }
                                    })
                                }
                                layer.msg('操作成功', { icon: 1 });
                            }, function () {
                                layer.msg('无操作', { icon: 1 });
                            });
                            break;
                        case 'massReject':
                            layer.confirm('进行批量审批驳回，请确认操作是否无误？', {
                                btn: ['是', '否']
                            }, function () {
                                var data = checkStatus.data;
                                for (var i = 0; i < data.length; i++) {
                                    var BILLID = '';
                                    var PartsClass = '';
                                    var PartsCode = '';
                                    console.log("金 ", (data[i].BILLID), "昭希", data[i].PartsCode, "单达", data[i].PartsClass);
                                    BILLID = data[i].BILLID;
                                    PartsCode = data[i].PartsCode;
                                    PartsClass = data[i].PartsClass;
                                    var reportType = 'CherryReject';
                                    var taskData = {
                                        "reportType": reportType, "BILLID": BILLID, "PartsClass": PartsClass, "Auditor": Auditor
                                    }
                                    $.ajax({
                                        method: 'post',
                                        data: taskData,
                                        url: "/app/TMCode/getRoute",
                                        success: function (data) {
                                            console.log("  ", JSON.stringify(data));
                                            if (data.status == 'Fail' || data.status == 'FailOID') {
                                                layer.msg("讯息" + data.message);
                                            } else if (data.status == 'OK') {
                                                layer.confirm(data.message, {
                                                    btn: ['是']
                                                }, function () {
                                                    layer.msg('操作成功', { icon: 1 });
                                                    var DateB = $("#taskMakeDateB").val();
                                                    var DateE = $("#taskMakeDateE").val();
                                                    var paramType = missType;
                                                    var paramClearA = encodeURI(encodeURI(qrybillno));
                                                    var paramClearB = encodeURI(encodeURI(qryclass));
                                                    console.log("双", missType, "夏", qrybillno, "雪", qryclass, "迎", DateB, "我", DateE);
                                                    window.location.href = "/app/TMCode/uniAgree?missT=" + paramType + "&missA=" + paramClearA + "&missB=" + paramClearB + "&missC=" + DateB + "&missD=" + DateE + "&missE=" + mode + " ";
                                                });
                                            }
                                        },
                                        error: function () {
                                        }
                                    })
                                }
                                layer.msg('操作成功', { icon: 1 });
                            }, function () {
                                layer.msg('无操作', { icon: 1 });
                            });
                            break;
                        case 'isAll':
                            layer.msg(checkStatus.isAll ? '全选' : '未全选');
                            break;
                        //自定义头工具栏右侧图标 - 提示
                        case 'LAYTABLE_TIPS':
                            layer.alert('这是工具栏右侧自定义的一个图标按钮');
                    };
                });
                table.on('tool(test)', function (obj) {
                    var data = obj.data;
                    //console.log(obj)
                    var PartsClass = data.PartsClass;
                    var PartsCode = data.PartsCode;
                    var BILLID = data.BILLID;
                    var PartsName = data.PartsName;
                    if (obj.event === 'analysis') {
                        analysisWin(PartsClass, BILLID, PartsCode, PartsName);
                        // $('#pptwindow').window('open');
                        $('#lovewindow').modal('show');
                    } else if (obj.event === 'approval') {
                        layer.confirm('进行审批同意吗，请确认操作是否无误？', {
                            btn: ['是', '否']
                        }, function () {
                            layer.msg('操作成功', { icon: 1 });
                            var reportType = 'agreeUniPcode';
                            var taskData = {
                                "reportType": reportType, "BILLID": BILLID, "PartsClass": PartsClass,
                                "PartsCode": PartsCode, "PartsName": PartsName, "Auditor": Auditor
                            }
                            layer.alert("同意此笔审批号" + BILLID);
                            $.ajax({
                                method: 'post',
                                data: taskData,
                                url: "/app/TMCode/getRoute",
                                success: function (result) {
                                    layer.confirm("新编码号" + result.partscode + "已" + (result.status), {
                                        btn: ['知道了'] //按钮
                                    }, function () {
                                        var DateB = $("#taskMakeDateB").val();
                                        var DateE = $("#taskMakeDateE").val();
                                        var paramType = missType;
                                        var paramClearA = encodeURI(encodeURI(qrybillno));
                                        var paramClearB = encodeURI(encodeURI(qryclass));
                                        console.log("双", missType, "夏", qrybillno, "雪", qryclass, "迎", DateB, "我", DateE);
                                        window.location.href = "/app/TMCode/uniAgree?missT=" + paramType + "&missA=" + paramClearA + "&missB=" + paramClearB + "&missC=" + DateB + "&missD=" + DateE + "&missE=" + mode + " ";
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
                            console.log("啊依莫", BILLID, "金 ", PartsClass, "莫 ", PartsCode, " 发 ", PartsName);
                            var reportType = 'rejectPcode';
                            var taskData = {
                                "reportType": reportType, "BILLID": BILLID, "PartsClass": PartsClass,
                                "PartsCode": PartsCode, "PartsName": PartsName, "Auditor": Auditor
                            }
                            layer.alert("驳回此笔审批号" + BILLID);
                            $.ajax({
                                method: 'post',
                                data: taskData,
                                url: "/app/TMCode/getRoute",
                                success: function (result) {
                                    layer.confirm("新编码号" + BILLID + "已" + (result.status), {
                                        btn: ['知道了'] //按钮
                                    }, function () {
                                        var DateB = $("#taskMakeDateB").val();
                                        var DateE = $("#taskMakeDateE").val();
                                        var paramType = missType;
                                        var paramClearA = encodeURI(encodeURI(qrybillno));
                                        var paramClearB = encodeURI(encodeURI(qryclass));
                                        console.log("双", missType, "夏", qrybillno, "雪", qryclass, "迎", DateB, "我", DateE);
                                        window.location.href = "/app/TMCode/uniAgree?missT=" + paramType + "&missA=" + paramClearA + "&missB=" + paramClearB + "&missC=" + DateB + "&missD=" + DateE + "&missE=" + mode + " ";
                                    });
                                },
                                error: function () {
                                }
                            })
                        }, function () {
                            layer.msg('无操作', { icon: 1 });
                        });
                    } else if (obj.event === 'repeat') {  //checkRepeat
                        var reportType = 'doubleChk';
                        var taskData = {
                            "reportType": reportType, "BILLID": BILLID, "PartsClass": PartsClass,
                            "PartsCode": PartsCode, "PartsName": PartsName
                        }
                        $.ajax({
                            method: 'post',
                            data: taskData,
                            url: "/app/TMCode/getRoute",
                            success: function (result) {
                                var retcode = result.status;
                                var retmsg = '';
                                if (retcode == 'chkOK') {
                                    retmsg = "品名：" + PartsName + "可以申请新编码！"
                                    flag = true;
                                    console.log("贵客", flag);
                                } else {
                                    retmsg = "品名：" + PartsName + "正在使用，请务重复申请"
                                    flag = false;
                                    console.log("噢客", flag);
                                }
                                layer.confirm(retmsg, {
                                    btn: ['是'] //按钮
                                }, function () {
                                    layer.msg('操作成功', { icon: 1 });
                                });
                                return flag;
                            },
                            error: function () {
                            }
                        })
                    }
                });
            },
            error: function () {
            }
        })
    }