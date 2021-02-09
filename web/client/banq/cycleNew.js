function PreViewCargo(drawer) {
    var SupplyID = $('#soup').val();
    var suppoption = $("#soup option:selected");
    var SupplyTitle = suppoption.text();

    var SMTID = $('#beef').val();
    var beefoption = $("#beef option:selected");
    var SMTTitle = beefoption.text();
    var Soft_No = $('#tankerName').val(); tankerName = nulchk(tankerName);
    var Prop1 = $('#boat').val();
    var Prop2 = $('#yacht').val();
    var Prop3 = $('#sail').val();
    var Prop4 = $('#vessel').val();
    var Prop5 = $('#tanker').val();
    var Prop6 = $('#marine').val();
    var Prop7 = $('#rocket').val();
    var Prop8 = $('#zebra').val();
    var Prop9 = $('#eleph').val();
    var Prop10 = $('#eagle').val();
    var Prop11 = $('#tiger').val();
    var Prop12 = $('#lion').val();
    var Prop13 = $('#horse').val();
    var Prop14 = $('#worm').val();
    var Prop15 = $('#hole').val();
    var Prop16 = $('#xman').val();
    var Prop17 = $('#quita').val();
    var Prop18 = $('#fox').val();
    var Prop19 = $('#owl').val();
    var Prop20 = $('#deer').val();
    // if(drawer=='A1'){
    //     var specN = Parts_Prop1+Parts_Prop2;
    //     $('#specName').val(specN);
    //     console.log("大贯",specN, " 香 ", drawer);
    // } 
    var PartsClass = $('#mainclass').val();
    var reportType = 'cargoPreview';
    var arrange = 'designCargo';
    var taskData = {
        "Parts_Prop1": Prop1, "Parts_Prop2": Prop2, "Parts_Prop3": Prop3, "Parts_Prop4": Prop4, "Parts_Prop5": Prop5,
        "Parts_Prop6": Prop6, "Parts_Prop7": Prop7, "Parts_Prop8": Prop8, "Parts_Prop9": Prop9, "Parts_Prop10": Prop10,
        "Parts_Prop11": Prop11, "Parts_Prop12": Prop12, "Parts_Prop13": Prop13, "Parts_Prop14": Prop14, "Parts_Prop15": Prop15,
        "Parts_Prop16": Prop16, "Parts_Prop17": Prop17, "Parts_Prop18": Prop18, "Parts_Prop19": Prop19, "Parts_Prop20": Prop20,
        "Soft_No": Soft_No, "SupplyID": SupplyID, "SupplyTitle": SupplyTitle, "SMTID": SMTID, "SMTTitle": SMTTitle,
        "reportType": reportType, "arrange": arrange, "PartsClass": PartsClass
    }
    $.ajax({
        method: 'post',
        data: taskData,
        url: "/app/TMCode/getRoute",
        success: function (dataArr) {
            for (var i = 0; i < dataArr.length; i++) {
                var value = dataArr[i].CargoPaste;
                $("#specName").val(value);
                PartsName = value;
            }
        },
        error: function () {
        }
    })
}
 
function ReferCargo(drawer) {
    var BILLID = '';
    var PartsYear = $('#mainyear').val();
    var PartsRule = $('#mainrule').val();
    var PartsClass = $('#mainclass').val();
    var PartsChi = $('#mainchi').val();
    var Reason = $('#Reason').val();
    var PartsOldCode = $('#poldcode').val(); 
    let now = new Date();
    var PartsApplyDate = now.Format("yyyy-MM-dd");
    var PartsLimitDate = '';
    var Staff = sessionName;
    var SupplyID = $('#soup').val();
    var SMTID = $('#beef').val();
    var suppoption = $("#soup option:selected");
    var SupplyTitle = suppoption.text();
    var SMTID = $('#beef').val();
    var beefoption = $("#beef option:selected");
    var SMTTitle = beefoption.text();
    var Model = $('#Model').val();
    var Assembly = $('#Assembly').val();
    var UnitE = $('#UnitE').val();
    var Phase = $('#Phase').val();
    var Priority = $('#Priority').val();
    var Soft_No = $('#tankerName').val(); tankerName = nulchk(tankerName);
    var Prop1 = $('#boat').val();
    var Prop2 = $('#yacht').val();
    var Prop3 = $('#sail').val();
    var Prop4 = $('#vessel').val();
    var Prop5 = $('#tanker').val();
    var Prop6 = $('#marine').val();
    var Prop7 = $('#rocket').val();
    var Prop8 = $('#zebra').val();
    var Prop9 = $('#eleph').val();
    var Prop10 = $('#eagle').val();
    var Prop11 = $('#tiger').val();
    var Prop12 = $('#lion').val();
    var Prop13 = $('#horse').val();
    var Prop14 = $('#worm').val();
    var Prop15 = $('#hole').val();
    var Prop16 = $('#xman').val();
    var Prop17 = $('#quita').val();
    var Prop18 = $('#fox').val();
    var Prop19 = $('#owl').val();
    var Prop20 = $('#deer').val();
    var Property = '';
    // if(drawer=='A1'){
    //     var specN = Parts_Prop1+Parts_Prop2;
    //     $('#specName').val(specN);
    //     console.log("大贯",specN, " 香 ", drawer);
    // } 
    var PartsClass = $('#mainclass').val();
    var reportType = 'cargoPreview';
    var arrange = 'designCargo';
    var taskData = {
        "Parts_Prop1": Prop1, "Parts_Prop2": Prop2, "Parts_Prop3": Prop3, "Parts_Prop4": Prop4, "Parts_Prop5": Prop5,
        "Parts_Prop6": Prop6, "Parts_Prop7": Prop7, "Parts_Prop8": Prop8, "Parts_Prop9": Prop9, "Parts_Prop10": Prop10,
        "Parts_Prop11": Prop11, "Parts_Prop12": Prop12, "Parts_Prop13": Prop13, "Parts_Prop14": Prop14, "Parts_Prop15": Prop15,
        "Parts_Prop16": Prop16, "Parts_Prop17": Prop17, "Parts_Prop18": Prop18, "Parts_Prop19": Prop19, "Parts_Prop20": Prop20,
        "Soft_No": Soft_No, "SupplyID": SupplyID, "SupplyTitle": SupplyTitle, "SMTID": SMTID, "SMTTitle": SMTTitle,
        "reportType": reportType, "arrange": arrange, "PartsClass": PartsClass, "Model": Model
    }
    $.ajax({
        method: 'post',
        data: taskData,
        url: "/app/TMCode/getRoute",
        success: function (dataArr) {
            for (var i = 0; i < dataArr.length; i++) {
                var value = dataArr[i].CargoPaste;
                $("#specName").val(value);
                PartsName = value;
                var reportType = 'applyPcode'; 
                var arrange = 'submit';
                var Pattern = '新增';
                var Partsstatus = '0';
                layer.confirm('提交此品名： ' + PartsName+ Pattern + '(tips:1.进入审批作业，可在新品编码审批中寻得。2.存成草稿，可在审批记录中寻得。3.取消:无操作)', {
                    btn: ['进入审批', '存成草稿', '取消'],
                    btn1: function () {
                        layer.msg('进入审批操作成功', { icon: 1 });
                        var taskData = {
                            "Parts_Prop1": Prop1, "Parts_Prop2": Prop2, "Parts_Prop3": Prop3, "Parts_Prop4": Prop4, "Parts_Prop5": Prop5,
                            "Parts_Prop6": Prop6, "Parts_Prop7": Prop7, "Parts_Prop8": Prop8, "Parts_Prop9": Prop9, "Parts_Prop10": Prop10,
                            "Parts_Prop11": Prop11, "Parts_Prop12": Prop12, "Parts_Prop13": Prop13, "Parts_Prop14": Prop14, "Parts_Prop15": Prop15,
                            "Parts_Prop16": Prop16, "Parts_Prop17": Prop17, "Parts_Prop18": Prop18, "Parts_Prop19": Prop19, "Parts_Prop20": Prop20,
                            "reportType": reportType, "arrange": arrange, "BILLID": BILLID, "PartsYear": PartsYear, "PartsRule": PartsRule, 
                            "PartsClass": PartsClass, "PartsChi": PartsChi,"Model": Model, "Assembly": Assembly, "UnitE": UnitE, "Phase": Phase,
                            "Priority": Priority,"Reason": Reason, "PartsApplyDate": PartsApplyDate, "PartsLimitDate": PartsLimitDate, "PartsName": PartsName,
                            "Partsstatus": Partsstatus, "Pattern": Pattern, "Staff": Staff, "Property": Property, "Soft_No": Soft_No, "SupplyID": SupplyID, "SupplyTitle": SupplyTitle,
                            "SMTID": SMTID, "SMTTitle": SMTTitle, "PartsOldCode": PartsOldCode
                        }
                        $.ajax({
                            method: 'post',
                            data: taskData,
                            url: "/app/TMCode/getRoute",
                            success: function (data, textStatus) {
                                console.log("无珠", JSON.stringify(data));
                                // $("#specName").val(despec); 
                                layer.alert("讯息 " + (data.status) + "审批号：" + data.billid, {
                                    skin: 'layui-layer-lan'
                                    , closeBtn: 0
                                });
                            },
                            error: function () {
                                layer.alert("审批不成功");
                            }
                        })
                    },
                    btn2: function () {
                        layer.msg('存成草稿操作成功', { icon: 1 });
                        reportType = 'applyPcode';
                        var arrange = 'draft';
                        var Partsstatus = '6';
                        var taskData = {
                            "Parts_Prop1": Prop1, "Parts_Prop2": Prop2, "Parts_Prop3": Prop3, "Parts_Prop4": Prop4, "Parts_Prop5": Prop5,
                            "Parts_Prop6": Prop6, "Parts_Prop7": Prop7, "Parts_Prop8": Prop8, "Parts_Prop9": Prop9, "Parts_Prop10": Prop10,
                            "Parts_Prop11": Prop11, "Parts_Prop12": Prop12, "Parts_Prop13": Prop13, "Parts_Prop14": Prop14, "Parts_Prop15": Prop15,
                            "Parts_Prop16": Prop16, "Parts_Prop17": Prop17, "Parts_Prop18": Prop18, "Parts_Prop19": Prop19, "Parts_Prop20": Prop20,
                            "reportType": reportType, "arrange": arrange, "BILLID": BILLID, "PartsYear": PartsYear, "PartsRule": PartsRule,
                            "PartsClass": PartsClass, "PartsChi": PartsChi, "Model": Model, "Assembly": Assembly, "UnitE": UnitE, "Phase": Phase,
                            "Priority": Priority, "Reason": Reason,"PartsApplyDate": PartsApplyDate, "PartsLimitDate": PartsLimitDate,
                            "PartsName": PartsName, "Partsstatus": Partsstatus, "Pattern": Pattern, "Staff": Staff, "Property": Property,"Soft_No": Soft_No, 
                            "SupplyID": SupplyID, "SupplyTitle": SupplyTitle, "SMTID": SMTID, "SMTTitle": SMTTitle, "PartsOldCode": PartsOldCode
                        }
                        $.ajax({
                            method: 'post',
                            data: taskData,
                            url: "/app/TMCode/getRoute",
                            success: function (data, textStatus) {
                                console.log("无珠", JSON.stringify(data));
                                // $("#specName").val(despec); 
                                layer.alert("讯息 " + (data.status) + "审批号：" + data.billid, {
                                    skin: 'layui-layer-lan'
                                    , closeBtn: 0
                                });
                            },
                            error: function () {
                                layer.alert("审批不成功");
                            }
                        })
                    },
                    btn3: function () {
                        layer.msg('无操作', { icon: 1 });
                        return;
                    }
                });
            }
        },
        error: function () {
        }
    })
}
// function ReferSpec(drawer) {
//     var SupplyID = $('#soup').val();
//     var Parts_Prop1 = $('#boat').val();
//     var Parts_Prop2 = $('#yacht').val();
//     var Parts_Prop3 = $('#sail').val();
//     var Parts_Prop4 = $('#vessel').val();
//     var Parts_Prop5 = $('#tanker').val();
//     var Parts_Prop6 = $('#marine').val();
//     var Parts_Prop7 = $('#rocket').val();
//     var Parts_Prop8 = $('#zebra').val();
//     var Parts_Prop9 = $('#eleph').val();
//     var Parts_Prop10 = $('#eagle').val();
//     var Parts_Prop11 = $('#tiger').val();
//     var Parts_Prop12 = $('#lion').val();
//     var Parts_Prop13 = $('#horse').val();
//     var Parts_Prop14 = $('#worm').val();
//     var Parts_Prop15 = $('#hole').val();
//     var Parts_Prop16 = $('#xman').val();
//     var Parts_Prop17 = $('#quita').val();
//     var Parts_Prop18 = $('#fox').val();
//     var Parts_Prop19 = $('#owl').val();
//     var Parts_Prop20 = $('#deer').val();
//     if (drawer == 'A1') {
//         // 分类&型号  分类 型号	机型 外观款型	客制	配件	包装
//         var specN = Parts_Prop1 + Parts_Prop2;
//         $('#specName').val(specN);
//         console.log("大贯", specN, " 香 ", drawer);
//     }
//     if (drawer == 'A2') {
//         //   归属&型号	型号 归属 面膜款型 显示板	LCD尺寸	LCD厂牌 
//         var specN = Parts_Prop2 + Parts_Prop1;
//         $('#specName').val(specN);
//         console.log("A2大贯", specN, " 香 ", drawer);
//     }
//     if (drawer == 'A3') {
//         // 款型&系列&归属&功率 系列	款型 归属 输入电压	功率  过载 散热方式	外观款型 编码器类型	通讯 散热方式&编码器类型&客制&配件 
//         var specN = Parts_Prop2 + Parts_Prop1 + Parts_Prop3 + Parts_Prop5;
//         $('#specName').val(specN);
//         console.log("A3大贯", specN, " 香 ", drawer);
//     }
//     if (drawer == 'A4') {
//         // 分类&型号  分类 型号 款型 冷却方式	转速 轴类型	轴径 编码器
//         var specN = Parts_Prop1 + Parts_Prop2;
//         $('#specName').val(specN);
//         console.log("A4大贯", specN, " 香 ", drawer);
//     }
//     if (drawer == 'A5') {
//         // 分类&型号  分类	型号	排量1	排量2	轴类型	进出油口方向	版本
//         var specN = Parts_Prop1 + Parts_Prop2;
//         $('#specName').val(specN);
//         console.log("A5大贯", specN, " 香 ", drawer);
//     }
//     if (drawer == 'B1') {
//         // "电机油泵组件"&电机型号&"+"&泵型号 电机分类 电机型号 电机款型 输入电压 冷却方式	转速 平/花键 联轴器/键轴 泵分类	泵型号
//         var specN = "电机油泵组件&" + Parts_Prop2 + "&" + Parts_Prop10;
//         $('#specName').val(specN);
//         console.log("B1大贯", specN, " 香 ", drawer);
//     }
//     if (drawer == 'B2') {
//         // "电机减速机组件"&电机型号&"+"&减速机型号 
//         var specN = "电机减速机组件&" + Parts_Prop2 + "&" + Parts_Prop9;
//         $('#specName').val(specN);
//         console.log("B2大贯", specN, " 香 ", drawer);
//     }
//     if (drawer == 'B3') {
//         // 分类&型号 
//         var specN = Parts_Prop1 + Parts_Prop2;
//         $('#specName').val(specN);
//         console.log("B3大贯", specN, " 香 ", drawer);
//     }
//     if (drawer == 'B4') {
//         // 分类&型号 
//         var specN = Parts_Prop1 + Parts_Prop2;
//         $('#specName').val(specN);
//         console.log("B4大贯", specN, " 香 ", drawer);
//     }
//     if (drawer == 'B5') {
//         // 分类&型号 
//         var specN = "新能源&" + Parts_Prop1;
//         $('#specName').val(specN);
//         console.log("B5大贯", specN, " 香 ", drawer);
//     }
//     if (drawer == 'C1') {
//         // 机身&分类&上下行程&"高速机械手 分类	手臂数量 手臂结构 上下行程	机身 正/反向	控制系统	轴数	客制	包装
//         var specN = Parts_Prop5 + Parts_Prop1 + Parts_Prop4 + "&高速机械手";
//         $('#specName').val(specN);
//         console.log("C1大贯", specN, " 香 ", drawer);
//     }
//     if (drawer == 'C2') {
//         // 分类&"机器人" 分类	型号	轴数	负载能力	客制	包装
//         var specN = Parts_Prop1 + "&" + "机器人";
//         $('#specName').val(specN);
//         console.log("C2大贯", specN, " 香 ", drawer);
//     }
//     if (drawer == 'C3') {
//         //   分类&段数  分类	型号	段数	电源配线	电源线长	连接器类型	连接器针数	连接器固定
//         var specN = Parts_Prop1 + "&" + Parts_Prop3;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'D1') {  //todo 制程 
//         // "电控"&分类&制程	 	 	分类	型号	机型	版本	包装
//         var specN = "电控&" + Parts_Prop1;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'D2') {  //todo 制程 
//         // "驱动器"&分类&制程	 	分类	型号	机型	版本	包装
//         var specN = "驱动器&" + Parts_Prop1;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'D3') {  //todo 制程 
//         // "新能源"&分类&制程	 	分类	型号	机型	版本	包装
//         var specN = "新能源&" + Parts_Prop1;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'E1') {  //todo 制程 
//         var specN = Parts_Prop1 + "&PCB-";
//         $('#specName').val(specN);
//     }
//     if (drawer == 'E2') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'E3') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'E4') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'E5') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'E6') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'E7') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'E8') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'E9') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'EA') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'EB') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'EC') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'ED') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'EE') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'EF') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'EG') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'EH') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'EJ') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'EM') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'EN') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'EP') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'F1') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }

//     if (drawer == 'F1') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'F2') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'F3') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'F4') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'F5') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'F6') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'F7') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'F8') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'F9') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'FA') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'FB') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'FC') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'FD') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'FE') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'FF') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'FG') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'FH') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'G1') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'G2') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'G3') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'G4') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'G5') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'G6') {
//         var specN = Parts_Prop1 + "&结构件";
//         $('#specName').val(specN);
//     }
//     if (drawer == 'G7') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'G8') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'G9') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'GA') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'GB') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'GC') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'GD') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'GE') {
//         var specN = Parts_Prop1 + "&亚克力";
//         $('#specName').val(specN);
//     }
//     if (drawer == 'GF') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'GG') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'GH') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'GI') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'H1') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'H2') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'H3') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'H4') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'H5') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'H6') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'H7') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'J1') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'J2') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }

//     if (drawer == 'J3') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }

//     if (drawer == 'J4') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }

//     if (drawer == 'J5') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }

//     if (drawer == 'J6') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }

//     if (drawer == 'J7') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }

//     if (drawer == 'J8') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'K1') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'K2') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'K3') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }

//     if (drawer == 'L1') {
//         var specN = "油泵维修备件";
//         $('#specName').val(specN);
//     }
//     if (drawer == 'L2') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'L3') {
//         var specN = "农机相关";
//         $('#specName').val(specN);
//     }
//     if (drawer == 'U1') {
//         //"电控成套"&主机型号&"-"&面板型号  主机型号 主机板型号	面板型号 显示板型号	电源器配置	通讯线长度	机型	客制	配件
//         var specN = "电控成套&" + Parts_Prop1 + Parts_Prop2;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'U2') {
//         //"伺服成套"&驱动器类型&电机类型  升数	驱动器类型	电机类型	油泵类型
//         var specN = "驱动器类型" + Parts_Prop1 + Parts_Prop2;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'U3') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'U4') {
//         var specN = Parts_Prop1 + "&系统成套";
//         $('#specName').val(specN);
//     }
//     if (drawer == 'U5') {
//         var specN = "产品成套";
//         $('#specName').val(specN);
//     }
//     if (drawer == 'R1') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }

//     if (drawer == 'R2') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }

//     if (drawer == 'R3') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }
//     if (drawer == 'S1') {
//         var specN = Parts_Prop1;
//         $('#specName').val(specN);
//     }

// }			