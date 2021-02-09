function SPecNamecheck(drawer, errItem) {
    var ret = true;
    let drawer1 = "MONO+LED";
    let drawer2 = "MONO+LED";
    let drawer3 = "TBK 1a1b Ф30";
    let drawer4 = "ECAT/CAN";
    let drawer5 = "SMF-Z1807";
    // let containSpecial = RegExp(/[\@\#\$\￥\%\^\……\*\——\=\[\【\]\】\{\}\|\、\\\\;\；\:\：\'\‘\’\"\“\”\,\，\.\。\《\<\>\》\?\？]+/);
    // let containSpecial = RegExp(/[\@\#\$\￥\%\^\……\*\——\=\[\【\]\】\{\}\|\、;\；\:\：\'\‘\’\"\“\”\,\，\.\。\《\<\>\》\?\？]+/);
    let containSpecial = RegExp(/[\@\#\$\￥\%\^\……\*\——\=\[\【\]\】\{\}\|\、;\；\:\：\'\‘\’\"\“\”\,\，\。\《\<\>\》\?\？]+/);
    //去掉////
    if (containSpecial.test(drawer)) {
        layer.alert(errItem + "名称不能含有特殊字符！");
        return false
    }
    if (containSpecial.test(drawer1)) {
        layer.alert(errItem + "1名称不能含有特殊字符！");
        return false
    }
    if (containSpecial.test(drawer2)) {
        layer.alert(errItem + "2名称不能含有特殊字符！");
        return false
    }
    if (containSpecial.test(drawer3)) {
        layer.alert(errItem + "3名称不能含有特殊字符！");
        return false
    }
    if (containSpecial.test(drawer4)) {
        layer.alert(errItem + "4名称不能含有特殊字符！");
        return false
    }
    if (containSpecial.test(drawer5)) {
        layer.alert(errItem + "5名称不能含有特殊字符！");
        return false
    }
    if (drawer != null && drawer.length > 0) {

    } else {
        layer.alert(errItem + "為空:  ");
        return false;
    }
    if (drawer.length > 80) {
        layer.alert(errItem + "太长")
        return false;
    }
    return ret;
}

function NeedRulecheck(drawer) {
    var PartsYear = $('#mainyear').val();
    var PartsRule = $('#mainrule').val();
    var PartsClass = $('#mainclass').val();
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
    var Label1  = $("#classA").html();
    var Label2  = $("#classB").html();
    var Label3  = $("#classC").html();
    var Label4  = $("#classD").html();
    var Label5  = $("#classE").html();
    var Label6  = $("#classF").html();
    var Label7  = $("#classG").html();
    var Label8  = $("#classH").html();
    var Label9  = $("#classI").html();
    var Label10 = $("#classJ").html();
    var Label11 = $("#classK").html();
    var Label12 = $("#classL").html();
    var Label13 = $("#classM").html();
    var Label14 = $("#classO").html();
    var Label15 = $("#classP").html();
    var Label16 = $("#classQ").html();
    var Label17 = $("#classR").html();
    var Label18 = $("#classS").html();
    var Label19 = $("#classT").html();
    var Label20 = $("#classU").html(); 
    var reportType = 'NeedRule';
    var arrange = 'needSpec';
    var retFlag = true;
    var taskData = {
        "reportType": reportType, "arrange": arrange, "PartsYear": PartsYear, "PartsRule": PartsRule, "PartsClass": PartsClass
    }
    $.ajax({
        method: 'post',
        data: taskData,
        url: "/app/TMCode/getRoute",
        success: function (dataArr, textStatus) {
            console.log("蛟龙", JSON.stringify(dataArr));
            var needGoal = '';                //'客户/面膜款型/触屏/特殊功能/选配开关/显示板'; 
            for (var i = 0; i < dataArr.length; i++) {
                needGoal = dataArr[i].Design_Spec;
            }
            var needGoal = '';                //'客户/面膜款型/触屏/特殊功能/选配开关/显示板'; 
            for (var i = 0; i < dataArr.length; i++) {
                needGoal = dataArr[i].Design_Spec;
            }
            if (needGoal.indexOf(Label1) > -1 && (Label1 != null && Label1.length > 0 )) {
                if (Prop1 != null && Prop1.length > 0 ) { //&& Prop1 != '缺省'
                    console.log("必要属性1Ok ");
                } else {
                    console.log("必要属性1-缺乏 ");
                    layer.alert("必要属性1為空: " + $("#classA").val());
                    retFlag = false;
                }               
            } 
             if (needGoal.indexOf(Label2) > -1 && (Label2 != null && Label2.length > 0 )) {
                console.log("何人B ", Label2);
                if (Prop2 != null && Prop2.length > 0 ) { //&& Prop2 != '缺省'
                    console.log("必要属性2Ok ",Prop2);
                } else {
                    console.log("必要属性2-缺乏 ");
                    layer.alert("必要属性2為空: " + $("#classB").val());
                    retFlag = false;
                }               
            } 
             if (needGoal.indexOf(Label3) > -1 && (Label3 != null && Label3.length > 0 )) {
                console.log("何人C ", Prop3);
                if (Prop3 != null && Prop3.length > 0 ) { //&& Prop3 != '缺省'
                } else {
                    console.log("必要属性3-缺乏 ");
                    layer.alert("必要属性3為空: " + $("#classC").val());
                    retFlag = false;
                }               
            } 
             if (needGoal.indexOf(Label4) > -1 && (Label4 != null && Label4.length > 0 )) {
                if (Prop4 != null && Prop4.length > 0 ) { //&& Prop4 != '缺省'
                    console.log("必要属性4Ok ");
                } else {
                    layer.alert("必要属性4為空: " + $("#classD").val());
                    retFlag = false;
                }               
            } 
             if (needGoal.indexOf(Label5) > -1 && (Label5 != null && Label5.length > 0 )) {
                if (Prop5 != null && Prop5.length > 0   ) { //&& Prop5 != '缺省'
                    console.log("必要属性5Ok ");
                } else {
                    layer.alert("必要属性5為空: " + $("#classE").val());
                    retFlag = false;
                }               
            } 
             if (needGoal.indexOf(Label6) > -1 && (Label6 != null && Label6.length > 0 )) {
                if (Prop6 != null && Prop6.length > 0  ) { //&& Prop6 != '缺省'
                    console.log("必要属性6Ok ");
                } else {
                    layer.alert("必要属性6為空: " + $("#classF").val());
                    retFlag = false;
                }               
            } 
             if (needGoal.indexOf(Label7) > -1 && (Label7 != null && Label7.length > 0 )) {
                if (Prop7 != null && Prop7.length > 0  ) {//&& Prop7 != '缺省'
                    console.log("必要属性7Ok ");
                } else {
                    layer.alert("必要属性7為空: " + $("#classG").val());
                    retFlag = false;
                }               
            } 
             if (needGoal.indexOf(Label8) > -1 && (Label8 != null && Label8.length > 0 )) {
                if (Prop8 != null && Prop8.length > 0 ) { //&& Prop8 != '缺省'
                    console.log("必要属性8Ok ");
                } else {
                    layer.alert("必要属性8為空: " + $("#classH").val());
                    retFlag = false;
                }               
            } 
             if (needGoal.indexOf(Label9) > -1 && (Label9 != null && Label9.length > 0 )) {
                if (Prop9 != null && Prop9.length > 0 ) { //&& Prop9 != '缺省'
                    console.log("必要属性9Ok ");
                } else {
                    layer.alert("必要属性9為空: " + $("#classI").val());
                    retFlag = false;
                }               
            } 
             if (needGoal.indexOf(Label10) > -1 && (Label10 != null && Label10.length > 0 )) {
                if (Prop10 != null && Prop10.length > 0 ) {  // && Prop10 != '缺省'
                    console.log("必要属性10Ok ");
                } else {
                    layer.alert("必要属性10為空: " + $("#classJ").val());
                    retFlag = false;
                }               
            } 
             if (needGoal.indexOf(Label11) > -1 && (Label11 != null && Label11.length > 0 )) {
                if (Prop11 != null && Prop11.length > 0 ) { //&& Prop11 != '缺省'
                    console.log("必要属性11Ok ");
                } else {
                    layer.alert("必要属性11為空: " + $("#classK").val());
                    retFlag = false;
                }               
            } 
             if (needGoal.indexOf(Label12) > -1 && (Label12 != null && Label12.length > 0 )) {
                if (Prop12 != null && Prop12.length > 0 ) { //&& Prop12 != '缺省'
                    console.log("必要属性12Ok ");
                } else {
                    layer.alert("必要属性12為空: " + $("#classL").val());
                    retFlag = false;
                }               
            } 
             if (needGoal.indexOf(Label13) > -1 && (Label13 != null && Label13.length > 0 )) {
                if (Prop13 != null && Prop13.length > 0 ) { //&& Prop13 != '缺省'
                    console.log("必要属性13Ok ");
                } else {
                    layer.alert("必要属性13為空: " + $("#classM").val());
                    retFlag = false;
                }               
            } 
             if (needGoal.indexOf(Label14) > -1 && (Label14 != null && Label14.length > 0 )) {
                if (Prop14 != null && Prop14.length > 0 ) {  //&& Prop14 != '缺省'
                    console.log("必要属性14Ok ");
                } else {
                    layer.alert("必要属性14為空: " + $("#classO").val());
                    retFlag = false;
                }               
            } 
             if (needGoal.indexOf(Label15) > -1 && (Label15 != null && Label15.length > 0 )) {
                if (Prop15 != null && Prop15.length > 0 ) { //&& Prop15 != '缺省'
                    console.log("必要属性15Ok ");
                } else {
                    layer.alert("必要属性15為空: " + $("#classP").val());
                    retFlag = false;
                }               
            } 
             if (needGoal.indexOf(Label16) > -1 && (Label16 != null && Label16.length > 0 )) {
                if (Prop16 != null && Prop16.length > 0 ) { //&& Prop16 != '缺省'
                    console.log("必要属性16Ok ");
                } else {
                    layer.alert("必要属性16為空: " + $("#classQ").val());
                    retFlag = false;
                }               
            } 
             if (needGoal.indexOf(Label17) > -1 && (Label17 != null && Label17.length > 0 )) {
                if (Prop17 != null && Prop17.length > 0 ) {  //&& Prop17 != '缺省'
                    console.log("必要属性17Ok ");
                } else {
                    layer.alert("必要属性17為空: " + $("#classR").val());
                    console.log("必要属性17為空 ", Label17);
                    retFlag = false;
                }               
            } 
             if (needGoal.indexOf(Label18) > -1 && (Label18 != null && Label18.length > 0 )) {
                if (Prop18 != null && Prop18.length > 0 ) {  //&& Prop18 != '缺省'
                    console.log("必要属性18Ok ");
                } else {
                    layer.alert("必要属性18為空: " + $("#classS").val());
                    retFlag = false;
                }               
            } 
             if (needGoal.indexOf(Label19) > -1 && (Label19 != null && Label19.length > 0 )) {
                if (Prop19 != null && Prop19.length > 0  ) {  //&& Prop19 != '缺省'
                    console.log("必要属性19Ok ");
                } else {
                    layer.alert("必要属性19為空: " + $("#classT").val());
                    retFlag = false;
                }               
            } 
            if (needGoal.indexOf(Label20) > -1 && (Label20 != null && Label20.length > 0 )  ) {
                if (Prop20 != null && Prop20.length > 0 ) {  //&& Prop20 != '缺省'
                    console.log("必要属性20Ok ");
                } else {
                    console.log("必要属性20為空",Label20," 压压惊  ",needGoal);
                    layer.alert("必要属性20為空: " + $("#classU").val());
                    retFlag = false;
                } 
            }
            if(retFlag==true){
                ReferCargo(PartsClass);
            }
        },
        error: function () {
            layer.alert("不成功");
        }
    })
    return retFlag;
} 
 