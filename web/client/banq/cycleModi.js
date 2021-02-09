 
function PreViewCargo(drawer) {
    var SupplyID = $('#soup').val();
    var SMTID = $('#beef').val();
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
    var BILLID = '20200131_F11';
    var PartsYear = $('#mainyear').val();
    var PartsRule = $('#mainrule').val();
    var PartsClass = $('#mainclass').val();
    var PartsChi = $('#mainchi').val();
    var Model = $('#Model').val();
    var Assembly = $('#Assembly').val();
    var UnitE = $('#UnitE').val();
    var Phase = $('#Phase').val();
    var Priority = $('#Priority').val();
    var Reason = $('#Reason').val();
    var PID = $('#mainpid').val();
    var PartsOldCode = $('#poldcode').val();
    var PartsCode = $('#pnewcode').val();
    let now = new Date();
    var PartsApplyDate = now.Format("yyyy-MM-dd");
    var PartsLimitDate = '2025-07-31';
    var Staff = sessionName;
    var SupplyID = $('#soup').val();
    var suppoption = $("#soup option:selected");
    var Supplyindex = suppoption.val();
    var SupplyTitle = suppoption.text();
    var SMTID = $('#beef').val();
    var beefoption = $("#beef option:selected");
    var SMTindex = beefoption.val();
    var SMTTitle = beefoption.text();
    var Property = '';
    var boat = $('#boat').val(); boat = nulchk(boat);
    var yacht = $('#yacht').val(); yacht = nulchk(yacht);
    var sail = $('#sail').val(); sail = nulchk(sail);
    var vessel = $('#vessel').val(); vessel = nulchk(vessel);
    var tanker = $('#tanker').val(); tanker = nulchk(tanker);
    var Soft_No = $('#tankerName').val(); tankerName = nulchk(tankerName);
    var marine = $('#marine').val(); marine = nulchk(marine);
    var rocket = $('#rocket').val(); rocket = nulchk(rocket);
    var zebra = $('#zebra').val(); zebra = nulchk(zebra);
    var eleph = $('#eleph').val(); eleph = nulchk(eleph);
    var eagle = $('#eagle').val(); eagle = nulchk(eagle);
    var tiger = $('#tiger').val(); tiger = nulchk(tiger);
    var lion = $('#lion').val(); lion = nulchk(lion);
    var horse = $('#horse').val(); horse = nulchk(horse);
    var worm = $('#worm').val(); worm = nulchk(worm);
    var hole = $('#hole').val(); hole = nulchk(hole);
    var xman = $('#xman').val(); xman = nulchk(xman);
    var quita = $('#quita').val(); quita = nulchk(quita);
    Property = boat + "/" + yacht + "/" + sail + "/" + vessel + "/" + tanker + "/" + marine + "/" +
        rocket + "/" + zebra + "/" + eleph + "/" + eagle + "/" + tiger + "/" + lion + "/" + horse + "/" + worm + "/" + hole + "/" + xman + "/" + quita;
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
    PreViewCargo(PartsClass);
    var PartsName = $('#specName').val();
    var PartsOldName = $('#specOldName').val();
    if (SPecNamecheck(PartsName, "物料名称")) {

    } else {
        layer.alert("物料名称不对，请检查!");
        return;
    }
    layer.confirm('提交此物料名称： ' + PartsName + '(tips:1.进入审批作业，可在新品编码审批中寻得。2.存成草稿，可在审批记录中寻得。3.取消:无操作)', {
        btn: ['进入审批', '存成草稿', '取消'],
        btn1: function () {
            var arrange = 'submit';
            var reportType = 'editPcode';
            var Pattern = '修改';
            var Partsstatus = '3';
            var taskData = {
                "Parts_Prop1": Prop1, "Parts_Prop2": Prop2, "Parts_Prop3": Prop3, "Parts_Prop4": Prop4, "Parts_Prop5": Prop5,
                "Parts_Prop6": Prop6, "Parts_Prop7": Prop7, "Parts_Prop8": Prop8, "Parts_Prop9": Prop9, "Parts_Prop10": Prop10,
                "Parts_Prop11": Prop11, "Parts_Prop12": Prop12, "Parts_Prop13": Prop13, "Parts_Prop14": Prop14, "Parts_Prop15": Prop15,
                "Parts_Prop16": Prop16, "Parts_Prop17": Prop17, "Parts_Prop18": Prop18, "Parts_Prop19": Prop19, "Parts_Prop20": Prop20,
                "reportType": reportType, "arrange": arrange, "BILLID": BILLID, "PartsYear": PartsYear, "PartsRule": PartsRule,
                "PartsClass": PartsClass, "PartsChi": PartsChi, "Model": Model, "Assembly": Assembly,  "UnitE": UnitE, "Phase": Phase, "Priority": Priority,
                "Reason": Reason, "PartsApplyDate": PartsApplyDate, "PartsLimitDate": PartsLimitDate, "PartsName": PartsName, 
                "PartsOldName": PartsOldName, "Partsstatus": Partsstatus, "Pattern": Pattern,  "Staff": Staff, "Property": Property, "PID": PID, "SupplyID": SupplyID, "SupplyTitle": SupplyTitle, "SMTID": SMTID, "SMTTitle": SMTTitle,
                "PartsCode": PartsCode, "PartsOldCode": PartsOldCode
            }
            layer.msg('进入审批操作成功', { icon: 1 });
            $.ajax({
                method: 'post',
                data: taskData,
                url: "/app/TMCode/getRoute",
                success: function (data, textStatus) {
                    console.log("无珠", JSON.stringify(data));
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
            var arrange = 'draft';
            var reportType = 'editPcode';
            var Pattern = '修改';
            var Partsstatus = '6';
            var taskData = {
                "Parts_Prop1": Prop1, "Parts_Prop2": Prop2, "Parts_Prop3": Prop3, "Parts_Prop4": Prop4, "Parts_Prop5": Prop5,
                "Parts_Prop6": Prop6, "Parts_Prop7": Prop7, "Parts_Prop8": Prop8, "Parts_Prop9": Prop9, "Parts_Prop10": Prop10,
                "Parts_Prop11": Prop11, "Parts_Prop12": Prop12, "Parts_Prop13": Prop13, "Parts_Prop14": Prop14, "Parts_Prop15": Prop15,
                "Parts_Prop16": Prop16, "Parts_Prop17": Prop17, "Parts_Prop18": Prop18, "Parts_Prop19": Prop19, "Parts_Prop20": Prop20,
                "reportType": reportType, "arrange": arrange, "BILLID": BILLID, "PartsYear": PartsYear, "PartsRule": PartsRule,
                "PartsClass": PartsClass, "PartsChi": PartsChi, "Model": Model, "Assembly": Assembly, "UnitE": UnitE, "Phase": Phase, "Priority": Priority,
                "Reason": Reason, "PartsApplyDate": PartsApplyDate, "PartsLimitDate": PartsLimitDate, "PartsName": PartsName,
                "PartsOldName": PartsOldName, "Partsstatus": Partsstatus,  "Pattern": Pattern, "Staff": Staff, "Property": Property, 
                "PID": PID, "SupplyID": SupplyID, "SupplyTitle": SupplyTitle, "SMTID": SMTID, "SMTTitle": SMTTitle, "PartsCode": PartsCode, "PartsOldCode": PartsOldCode
            }
            layer.msg('存成草稿操作成功', { icon: 1 });
            $.ajax({
                method: 'post',
                data: taskData,
                url: "/app/TMCode/getRoute",
                success: function (data, textStatus) {
                    console.log("无珠", JSON.stringify(data));
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
    // console.log("再混编码" + JSON.stringify(taskData));
}
function PreViewCargo(drawer) {
    var SupplyID = $('#soup').val();
    var SMTID = $('#beef').val();
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
    // function timer(time) {
    //     setTimeout(function () {
    //         $.ajax({
    //             method: 'post',
    //             data: taskData,
    //             url: "/app/TMCode/getRoute",
    //             success: function (data, textStatus) {
    //                 console.log("无珠", JSON.stringify(data));
    //                 layer.alert("讯息 " + (data.status) + "审批号：" + data.billid, {
    //                     skin: 'layui-layer-lan'
    //                     , closeBtn: 0
    //                 });
    //             },
    //             error: function () {
    //                 layer.alert("审批不成功");
    //             }
    //         })
    //     }, time);
    // }
    // timer(2000);
